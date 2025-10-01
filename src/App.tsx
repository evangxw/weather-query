// src/App.tsx

import { useState } from 'react';
import type { WeatherData } from './types';
import './App.css';

const API_KEY = '3150aa6e2a33da4fad59cdcc5f2306e8';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState<WeatherData | null>(null);

  const handleSearch = () => {
    if (!city) {
      alert('Please enter a city name.');
      return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    fetch(url)
      .then(response => {
        // 知识点 1: 检查响应是否成功
        // 如果服务器返回了 404 (Not Found) 等错误，response.ok 会是 false
        if (!response.ok) {
          // 当城市找不到时，API 会返回 404
          throw new Error('City not found. Please check the spelling.');
        }
        return response.json();
      })
      .then(data => {
        console.log('API response data:', data); //console.log，方便调试
        
        // 使用 setWeather 更新状态！
        // 这是最关键的一步。把从 API 获取的 data 对象存入 weather state.
        // React 会检测到这个变化，并重新运行 return 部分的代码。
        setWeather(data);
      })
      // .catch() 会捕获前面任何一步发生的错误（比如网络问题，或自己 throw 的 Error）
      .catch(error => {
        console.error('Fetch error:', error);
        alert(error.message); // 把错误信息用弹窗告诉用户
        setWeather(null); // 出错时，清空之前可能存在的天气数据
      });
  };

  return (
    <div className="container">
      <header>
        <h1>Weather Query</h1>
      </header>
      <main>
        <div className="search-form">
          <input
            type="text"
            placeholder="Enter city name..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>

        {/* 当 `weather` 状态不再是 null 时，这部分 JSX 就会被渲染到页面上 */}
        {weather && (
          <div className="weather-info">
            {/* 从 weather state 对象中读取数据并显示 */}
            <h2>{weather.name}</h2>
            <p className="temperature">{Math.round(weather.main.temp)}°C</p>
            <p>Humidity: {weather.main.humidity}%</p>
            {/* weather.weather 是一个数组，取第一个元素 [0] */}
            <p>Condition: {weather.weather[0].description}</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;