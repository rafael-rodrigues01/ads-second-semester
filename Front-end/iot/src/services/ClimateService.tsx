import axios from "axios";

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

// Corrected a typo in the URL parameter
export const fetchClimateData = async (): Promise<ClimateData> => {
  try {
    const response = await axios.get('https://api.open-meteo.com/v1/forecast?latitude=-23.4772271&longitude=-47.5492724&past_days=2&hourly=temperature_2m,relativehumidity_2m,wind_speed_10m');

    const { hourly } = response.data;

    return {
      labels: hourly.time.map((time: string) => new Date(time).toLocaleDateString()),
      datasets: [
        {
          label: 'Temperatura (ºC)',
          data: hourly.temperature_2m,
          borderColor: '#245a41',
          backgroundColor: 'rgba(255, 99, 29, 0.9)',
          fill: true, // Corrected spelling
          tension: 0.4,
        },
        {
          label: 'Umidade Relativa (%)',
          data: hourly.relative_humidity_2m,
          borderColor: '#40c185',
          backgroundColor: 'rgba(176, 131, 110, 0.9)',
          fill: true, // Corrected spelling
          tension: 0.4,
        },
        {
          label: 'Velocidade do Vento (m/s)', // Corrected unit
          data: hourly.wind_speed_10m,
          borderColor: '#40c185', // Corrected duplicate color (consider unique colors)
          backgroundColor: 'rgba(102, 178, 217, 0.9)', // New, distinct color
          fill: true, // Corrected spelling
          tension: 0.4,
        },
      ],
    };
  } catch (error) {
    console.log('Erro ao buscar os dados:', error);
    throw error;
  }
};