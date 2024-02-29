import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';
import ThunderstormOutlinedIcon from '@mui/icons-material/ThunderstormOutlined';

export default function Geticon({ weather }) {
    if (!weather || !weather.weather || weather.weather.length === 0) {
        return <LightModeOutlinedIcon sx={{ fontSize: 130 }} />;
    }
    
    switch(weather.weather[0].description) {
        case 'broken clouds' || 'few clouds'||'scattered clouds'||'overcast clouds'||'mist'||'smoke'||'fog'||'haze'||'sand/ dust whirls'||'dust'||'volcanic ash'||'squalls'||'tornado':
            return <CloudOutlinedIcon sx={{ fontSize: 130 }} />;
        case 'clear sky':
            return <LightModeOutlinedIcon sx={{ fontSize: 130 }} />;
        case 'Rain'||'Drizzle'||'Thunderstorm'||'Snow'||'Freezing rain'||'Shower rain':
            return <ThunderstormOutlinedIcon sx={{ fontSize: 130 }} />;
        default:
            return <LightModeOutlinedIcon sx={{ fontSize: 130 }} />; // Return null for unknown weather conditions
    };
}
