import { PrismaClient, UserRole } from '@prisma/client';
const prisma = new PrismaClient();

function getRandomElement<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

function generateLicensePlate() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let plate = '';
  for (let i = 0; i < 3; i++) {
    plate += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  plate += ' ';
  for (let i = 0; i < 5; i++) {
    plate += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return plate;
}

function generateCarName(color: string, nameOptions: string[]) {
  const name = getRandomElement(nameOptions);
  const firstLetterCode = name.charCodeAt(0) - 64;
  return `${color} ${name} ${firstLetterCode}`;
}

async function main() {
  const users = [
    {
      id: "4f75ad49-e8dc-418f-aff6-35e982fa098a",
      name: "admin",
      email: "admin@tlgoober.dev",
      avatar: "https://hpkzbmlrxymktodrtnsx.supabase.co/storage/v1/object/public/tl-goober/admin.png",
      phone: "12028362930",
      verified: true,
      password: "$2a$12$9whC/oyphtS0Wcrble/YxewIVxDUd0V5.bh3ChGplz8BllorfZ.qe",
      role: UserRole.admin,
      createdAt: new Date(),
      updatedAt: new Date(),
      provider: "local"
    },
    {
      id: "f82f0c30-bffc-475a-b730-9da82dd93ec1",
      name: "Ian",
      email: "ian@tlgoober.dev",
      avatar: "https://hpkzbmlrxymktodrtnsx.supabase.co/storage/v1/object/public/tl-goober/defaultAvatars_m001.png",
      phone: "12028703641",
      verified: true,
      password: "$2a$12$9whC/oyphtS0Wcrble/YxewIVxDUd0V5.bh3ChGplz8BllorfZ.qe",
      role: UserRole.driver,
      createdAt: new Date(),
      updatedAt: new Date(),
      provider: "local"
    },
    {
      id: "c014ad12-55dc-d08f-ecc6-21e982de0924",
      name: "Chrissy",
      email: "chrissy@tlgoober.dev",
      avatar: "https://hpkzbmlrxymktodrtnsx.supabase.co/storage/v1/object/public/tl-goober/defaultAvatars_f003.png",
      phone: "12023654551",
      verified: true,
      password: "$2a$12$9whC/oyphtS0Wcrble/YxewIVxDUd0V5.bh3ChGplz8BllorfZ.qe",
      role: UserRole.user,
      createdAt: new Date(),
      updatedAt: new Date(),
      provider: "local"
    },
    {
      id: "b293fd67-12ef-a34b-ccb7-54d678ac2135",
      name: "Allison",
      email: "allison@tlgoober.dev",
      avatar: "https://hpkzbmlrxymktodrtnsx.supabase.co/storage/v1/object/public/tl-goober/defaultAvatars_f002.png",
      phone: "12023654552",
      verified: true,
      password: "$2a$12$9whC/oyphtS0Wcrble/YxewIVxDUd0V5.bh3ChGplz8BllorfZ.qe",
      role: UserRole.user,
      createdAt: new Date(),
      updatedAt: new Date(),
      provider: "local"
    },
    {
      id: "e839fa41-98bc-b67a-dbe9-34c578ac0912",
      name: "Antony",
      email: "antony@tlgoober.dev",
      avatar: "https://hpkzbmlrxymktodrtnsx.supabase.co/storage/v1/object/public/tl-goober/defaultAvatars_m004.png",
      phone: "12023654553",
      verified: true,
      password: "$2a$12$9whC/oyphtS0Wcrble/YxewIVxDUd0V5.bh3ChGplz8BllorfZ.qe",
      role: UserRole.driver,
      createdAt: new Date(),
      updatedAt: new Date(),
      provider: "local"
    },
    {
      id: "a758bd92-77da-c54e-fbb6-09d834ac6521",
      name: "Zooey",
      email: "zooey@tlgoober.dev",
      avatar: "https://hpkzbmlrxymktodrtnsx.supabase.co/storage/v1/object/public/tl-goober/defaultAvatars_f001.png",
      phone: "12023654554",
      verified: true,
      password: "$2a$12$9whC/oyphtS0Wcrble/YxewIVxDUd0V5.bh3ChGplz8BllorfZ.qe",
      role: UserRole.driver,
      createdAt: new Date(),
      updatedAt: new Date(),
      provider: "local"
    },
    {
      id: "d573ca18-11bc-d47f-eca2-98b437ac7243",
      name: "Michael",
      email: "michael@tlgoober.dev",
      avatar: "https://hpkzbmlrxymktodrtnsx.supabase.co/storage/v1/object/public/tl-goober/defaultAvatars_m002.png",
      phone: "12023654555",
      verified: true,
      password: "$2a$12$9whC/oyphtS0Wcrble/YxewIVxDUd0V5.bh3ChGplz8BllorfZ.qe",
      role: UserRole.user,
      createdAt: new Date(),
      updatedAt: new Date(),
      provider: "local"
    },
    {
      id: "fe956671-9a45-463c-b90e-b89320fbd7f5",
      name: "Tiffany",
      email: "tiffany@tlgoober.dev",
      avatar: "https://hpkzbmlrxymktodrtnsx.supabase.co/storage/v1/object/public/tl-goober/defaultAvatars_f004.png",
      phone: "12023654556",
      verified: true,
      password: "$2a$12$9whC/oyphtS0Wcrble/YxewIVxDUd0V5.bh3ChGplz8BllorfZ.qe",
      role: UserRole.user,
      createdAt: new Date(),
      updatedAt: new Date(),
      provider: "local"
    },
    {
      id: "00fd196d-25fa-400d-8a5b-e10e9f52ab82",
      name: "Joyful",
      email: "joyful@tlgoober.dev",
      avatar: "https://hpkzbmlrxymktodrtnsx.supabase.co/storage/v1/object/public/tl-goober/defaultAvatars_f005.png",
      phone: "12023654557",
      verified: true,
      password: "$2a$12$9whC/oyphtS0Wcrble/YxewIVxDUd0V5.bh3ChGplz8BllorfZ.qe",
      role: UserRole.user,
      createdAt: new Date(),
      updatedAt: new Date(),
      provider: "local"
    }
  ];

  for (const user of users) {
    await prisma.user.create({
      data: user,
    });
  }

  const drivers = users.filter(user => user.role === UserRole.driver);
  const classNames = ["ECO", "LUX", "GEN", "SUV", "SED", "VAN", "TRK", "CPE", "CON", "WGN"];
  const modelBrands = ["BMW", "Mercedes", "Toyota", "Peugeot", "Citroen", "Renault", "Volkswagen"];
  const carNamesOptions = ["Todd", "Firestarter", "Maverick", "Raven", "Sapphire", "Voyager", "Cobra", "Eagle", "Falcon", "Hawk", "Jaguar", "Lion", "Panther", "Tiger", "Wolf"];
  const modelColors = ["Black", "White", "Red", "Blue", "Green", "Yellow", "Orange", "Purple", "Pink", "Brown", "Grey", "Silver", "Gold"];
  const carData = [];

  for (const driver of drivers) {
    const carCount = Math.floor(Math.random() * 4) + 2;
    for (let i = 0; i < carCount; i++) {
      const color = getRandomElement(modelColors);
      carData.push({
        licensePlate: generateLicensePlate(),
        className: getRandomElement(classNames),
        name: generateCarName(color, carNamesOptions),
        userId: driver.id,
        modelBrand: getRandomElement(modelBrands),
        modelYear: (Math.floor(Math.random() * 20) + 2000).toString(),
        modelColor: color,
        seats: Math.floor(Math.random() * 8) + 2
      });
    }
  }

  for (const car of carData) {
    await prisma.car.create({
      data: car,
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
