import { BarberShopService } from "@prisma/client"

interface ServiceItemProps {
  service: BarberShopService
}

const ServiceItem = ({ service }: ServiceItemProps) => {
  return <h1>{service.name}</h1>
}

export default ServiceItem
