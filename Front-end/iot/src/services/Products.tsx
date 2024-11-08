import axios from 'axios';

// Corrected a typo in the URL parameter
export const fetchClimateData = async (): Promise<ProductData> => {
  try {
    const response = await axios.get(
      'https://api.mockae.com/fakeapi/products/' // Corrected URL parameter
    );

    console.log('Received response:', response); // Log the response data

    // Assuming ProductData is defined elsewhere with appropriate properties
    const productData: ProductData = {
      id: response.data[0].id, 
      name: response.data[0].name,
      description: response.data[0].description,
      price: response.data[0].price,
      category: response.data[0].category,
      stock: response.data[0].stock,
      sku: response.data[0].sku,
      image_url: response.data[0].image_url,
      rating: {
        rate: response.data[0].rating.rate,
        count: response.data[0].rating.count,
      },
    };

    return productData;
  } catch (error) {
    console.log('Error fetching data:', error);
    throw error; // Re-throw the error for handling elsewhere
  }
};