import React from 'react';
import { render } from '@testing-library/react';

import CKEditorComponent from './ckeditor';

describe('CKEditor Component', () => {
    test('renders without crashing', () => {
      render(<CKEditorComponent />);
      // Add assertions to test the rendered component
    });
  
    // Add more test cases as needed
  });