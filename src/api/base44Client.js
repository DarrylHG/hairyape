export const base44 = {
  entities: {
    Enquiry: {
      async create(data) {
        // Mock API – just log to console for now
        console.log("Mock Enquiry.create called with:", data);
        // pretend there is a delay
        await new Promise((resolve) => setTimeout(resolve, 500));
        return { id: Date.now(), ...data };
      },
    },
  },
};
