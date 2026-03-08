/**
 * @implements task:mock-revenue-data-0007
 */
export interface RevenueData {
  date: string;
  revenue: number;
}

export const generateMockRevenueData = (): RevenueData[] => {
  const data: RevenueData[] = [];
  const now = new Date();

  for (let i = 6; i >= 0; i--) {
    const date = new Date(now);
    date.setDate(now.getDate() - i);
    
    // Format date as DD/MM
    const formattedDate = `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}`;
    
    // Random revenue between 500k and 5M
    const revenue = Math.floor(Math.random() * (5000000 - 500000) + 500000);
    
    data.push({
      date: formattedDate,
      revenue,
    });
  }


  return data;
};

export interface MockUser {
  name: string;
  email: string;
  role: string;
  status: string;
}

export const mockUser: MockUser = {
  name: "Admin User",
  email: "admin@example.com",
  role: "Quản trị viên",
  status: "Đang hoạt động"
};
