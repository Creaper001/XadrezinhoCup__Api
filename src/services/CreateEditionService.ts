import prismaClient from "../prisma";

class CreateEditionService {
  async execute(
    registrationsEnd: Date,
  ) {
    const edition = await prismaClient.editions.create({
      data: {
        registrationsEnd,
      },
    });
    return edition;
  }
}

export { CreateEditionService };
