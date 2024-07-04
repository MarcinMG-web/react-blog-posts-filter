export const neonTextShadow =
  '0 0 8px #FF8C00, 0 0 16px #FF8C00, 0 0 24px #FF8C00, 0 0 32px #FF8C00, 0 0 40px #FF8C00, 0 0 48px #FF8C00, 0 0 56px #FF8C00';

export const neonAnimation = `
    @keyframes neon {
      0% {
        text-shadow: ${neonTextShadow};
      }
      50% {
        text-shadow: ${'0 0 20px #FF8C00, 0 0 40px #FF8C00, 0 0 60px #FF8C00, 0 0 80px #FF8C00, 0 0 100px #FF8C00, 0 0 120px #FF8C00, 0 0 140px #FF8C00'};
      }
      100% {
        text-shadow: ${neonTextShadow};
      }
    }
  `;
