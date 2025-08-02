"use server"

import { db } from "@/app/_lib/prisma"
import { endOfDay, startOfDay } from "date-fns"

interface GetBookingProps {
  serviceId: string
  date: Date
}

export const getBookings = ({ date }: GetBookingProps) => {
  return db.booking.findMany({
    where: {
      date: {
        lte: endOfDay(date),
        gte: startOfDay(date),
      },
    },
  })
}
