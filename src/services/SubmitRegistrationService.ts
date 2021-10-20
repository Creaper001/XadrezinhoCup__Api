import prismaClient from "../prisma";

class SubmitRegistrationService {
  async execute(
    fullName: string,
    email: string,
    cellphone: string,
    lichessName: string,
    allowsNotifications: boolean
  ) {
    const edition = await prismaClient.editions.findFirst({
      where: {
        active: {
          equals: true,
        },
      },
    });
    const registration = await prismaClient.registrations.create({
      data: {
        editionsId: edition.id,
        fullName,
        email,
        cellphone,
        lichessName,
        allowsNotifications,
      },
      include: {
        editions: true,
      },
    });
    return registration;
  }
}

export { SubmitRegistrationService };
