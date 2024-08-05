export interface DashboardData {
    dashboardData: {
        charts: {
            salesOverTime: ChartData,
            userEngagement: ChartData
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

export interface Transaction{
    id: number;
    user: string;
    amount: string;
    date: string;
}

export interface Product{
    id: string;
    name: string;
    sales: number;
}

export interface Location{
    latitude: number;
    longitude: number;
    label: string;
    activity: number;
}

export interface ChartData {
    labels: string[];
    data: number[];
}