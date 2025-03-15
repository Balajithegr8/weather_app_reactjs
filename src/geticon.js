import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';
import ThunderstormOutlinedIcon from '@mui/icons-material/ThunderstormOutlined';

export default function Geticon({ weather }) {
    if (!weather || !weather.weather || weather.weather.length === 0) {
        return <LightModeOutlinedIcon sx={{ fontSize: 130 }} />;
    }
    
    switch(weather.weather[0].main) {
        
        case ('Clouds' || 'Fog' || 'Dust'|| 'Haze' ||'Smoke'||'Mist'):
            return <CloudOutlinedIcon sx={{ fontSize: 130 }} />;
        case ('clear sky'||'Clear'):
            return <LightModeOutlinedIcon sx={{ fontSize: 130 }} />;
        case ('Rain'||'Drizzle'||'Thunderstorm'||'Snow'||'Freezing rain'||'Tornado'):
            return <ThunderstormOutlinedIcon sx={{ fontSize: 130 }} />;
        default:
            return <LightModeOutlinedIcon sx={{ fontSize: 130 }} />; // Return null for unknown weather conditions
    };
}
