// src/types.ts

export interface WeatherData {
    name: string;
    main: {
      temp: number;
      humidity: number;
    };
    weather: {
      description: string;
    }[]; // 这表示一个数组，数组里的每个元素都是一个包含 description 的对象
  }