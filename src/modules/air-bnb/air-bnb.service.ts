import { PrismaClient } from "@prisma/client";
import { AirBnbListing, FindAirBnbListingsInput } from "generated";
import { convertListingToAirBNBListing } from "./utils";

export class AirBnbService {
  constructor(private readonly client: PrismaClient) {}

  private async getListingByIdList(idList: string[]) {
    const listings = await this.client.listing.findMany({
      where: {
        id: {
          in: idList,
        },
      },
    });

    return listings;
  }

  private async getListingByNameList(nameList: string[]) {
    const listings = await this.client.listing.findMany({
      where: {
        name: {
          in: nameList,
        },
      },
    });

    return listings;
  }

  private async getListingByHostIdList(hostIdList: number[]) {
    const listings = await this.client.listing.findMany({
      where: {
        host_id: {
          in: hostIdList,
        },
      },
    });

    return listings;
  }

  public async getListingData(
    input: FindAirBnbListingsInput
  ): Promise<AirBnbListing[]> {
    let listings: AirBnbListing[] = [];
    if (!input.hostId && !input.name && !input.id) {
      const allListings = await this.client.listing.findMany();
      listings = allListings.map(convertListingToAirBNBListing);
      return listings;
    }

    if (input.id) {
      const idList = input.id;
      const listingsById = await this.getListingByIdList(idList);
      listings = listings.concat(
        listingsById.map(convertListingToAirBNBListing)
      );
    }

    if (input.name) {
      const nameList = input.name;
      const listingsByName = await this.getListingByNameList(nameList);
      listings = listings.concat(
        listingsByName.map(convertListingToAirBNBListing)
      );
    }

    if (input.hostId) {
      const hostIdList = input.hostId.map((id) => parseInt(id));
      const listingsByHostId = await this.getListingByHostIdList(hostIdList);
      listings = listings.concat(
        listingsByHostId.map(convertListingToAirBNBListing)
      );
    }

    return listings;
  }
}
