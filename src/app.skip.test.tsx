// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import App from './App';

// // 模拟 window.matchMedia
// beforeAll(() => {
//   window.matchMedia = jest.fn().mockImplementation(query => {
//     return {
//       matches: false,
//       media: query,
//       onchange: null,
//       // addEventListener: jest.fn(),
//       // removeEventListener: jest.fn(),
//       // addListener: jest.fn(), // 添加这一行
//       // removeListener: jest.fn(), // 可选，根据需要添加
//     };
//   });
// });


// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
