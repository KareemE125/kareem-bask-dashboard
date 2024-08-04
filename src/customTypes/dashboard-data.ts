export interface DashboardData {
    dashboardData: {
        charts: {
            salesOverTime: {
                labels: string[],
                data: number[]
            },
            userEngagement: {
                    labels: string[],
                data: number[]
            }
        },
        tables: {
            recentTransactions: Transaction[],
            topProducts: Product[]
        },
        map: {
            locations: Location[]
        }
    }
}

interface Transaction{
    id: number;
    user: string;
    amount: string;
    date: string;
}

interface Product{
    id: string;
    name: string;
    sales: number;
}

interface Location{
    latitude: number;
    longitude: number;
    label: string;
    activity: number;
}