"use server";

import { ApiResponse } from "@/customTypes/api-response";
import { DashboardData } from "@/customTypes/dashboard-data";
import { API_DASHBOARD_GET, THEME_COLORS } from "@/global/constants";
import { revalidatePath } from "next/cache";

export async function getDashboardData(): Promise<ApiResponse<DashboardData>> {
  try {
    // mimic slow network
    // await new Promise(resolve => setTimeout(resolve, 3000))

    const response = await fetch(API_DASHBOARD_GET, {
      headers: {
        Authorization: `Bearer ${process.env.API_TOKEN}`,
      },
    });
    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }

    // Check if response is JSON
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.indexOf("application/json") !== -1) {
      return await response.json();
    } else {
      const text = await response.text();
      throw new Error(`Expected JSON, but received: ${text}`);
    }
  } catch (error) {
    console.error("Error fetching dashboard data:", error);
    throw error;
  }
}

export async function generateRandomThemeColor() {
    const randomIndex = Math.floor(Math.random() * THEME_COLORS.length);
    return THEME_COLORS[randomIndex];
}
