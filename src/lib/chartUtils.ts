import { ChartData, Location, Product } from '@/customTypes/dashboard-data'

export function getHighestSalesDay(data: ChartData) {
  const maxSales = Math.max(...data.data)
  const maxSalesIndex = data.data.indexOf(maxSales)
  return { day: data.labels[maxSalesIndex], amount: data.data[maxSalesIndex] }
}

export function getHighestEngagement(data: ChartData) {
  const maxEngagement = Math.max(...data.data)
  const maxEngagementIndex = data.data.indexOf(maxEngagement)
  return { week: data.labels[maxEngagementIndex], engagement: data.data[maxEngagementIndex] }
}

export function getTotalRevenue(data: ChartData) {
  let amount = 0
  const years: string[] = []

  data.labels.forEach((date, index) => {
    amount += data.data[index]
    const year = date.split('-')[0]
    if (!years.includes(year)) years.push(year)
  })

  return { amount, years }
}

export function getTopProduct(data: Product[]) {
  const topProduct = data.reduce((acc, curr) => acc.sales > curr.sales ? acc : curr)
  return topProduct
}

export function getHighestActivityLocation(locations: Location[] ) {
  const highestActivityLocation = locations.reduce((acc, curr) => acc.activity > curr.activity ? acc : curr)
  return highestActivityLocation
}