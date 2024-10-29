interface ClimateData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string; // Corrected to 'backgroundColor'
    fill: boolean; // Corrected spelling to 'fill'
    tension: number;
  }[];
}
