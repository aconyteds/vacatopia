import { listing } from "@prisma/client";
import { AirBnbListing } from "generated";

export function convertListingToAirBNBListing(listing: listing): AirBnbListing {
  return {
    id: listing.id,
    name: listing.name,
    hostId: listing.host_id.toString(),
    hostName: listing.host_name,
    listingId: listing.listing_id.toString(),
    type: listing.room_type,
    minimumNights: listing.minimum_nights,
    location: {
      latitude: listing.latitude,
      longitude: listing.longitude,
    },
  };
}
