import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// Handle graceful shutdown
function shutdown() {
  prisma.$disconnect().then(() => {
    console.log("Database connections closed");
    process.exit(0);
  });
}

// Capture termination signals
process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);

export default prisma;
