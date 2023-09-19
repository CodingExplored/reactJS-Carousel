# ContentCarousel React Component

## Overview

The `ContentCarousel` component is a flexible, customizable carousel/slider for React applications. It allows you to display a variety of content types in a sliding format, with the option to control how many items are displayed per slide.

## Features

- **Dynamic Content**: Supports dynamic content passed as an array of React components.
- **Items per Slide**: Allows you to set how many items will be displayed in each slide.
- **Navigation**: Offers previous and next buttons to navigate through the slides.
- **Styling**: Provides CSS classes for styling, with a primary color of chocolate and a secondary color of #f3f3f3.

## Installation

1. Download both `ContentCarousel.js` and its associated `ContentCarousel.css` files.
2. Place them into your project's appropriate directory.

## Usage

Here's how to use the `ContentCarousel` component in your React application:

```jsx
import React from 'react';
import ContentCarousel from './path/to/ContentCarousel';

const MyComponents = [<div>Item 1</div>, <div>Item 2</div>, <div>Item 3</div>];

function App() {
  return (
    <div>
      <ContentCarousel content={MyComponents} itemsPerSlide={2} />
    </div>
  );
}
```

## Props

- `content` (Array): An array of React components that make up the content of the carousel.
- `itemsPerSlide` (Number): The number of items to be displayed in each slide.

## License

MIT License
