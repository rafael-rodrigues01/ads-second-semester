interface ClimateData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string[];
    fiil: boolean;
    tension: number;
    
  }[];
}

export const fetchClimateData = async (): Promise<ClimateData> => {
  try {
    
  } catch (error) {
    
  }
}