import Svg, { Text as SvgText } from 'react-native-svg';

export default function OutlineText({
  text,
  size = 48,
  width = 300,
  color = '#A5AFB0',
  style,
}) {
  const height = size * 1.4;

  return (
    <Svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="xMinYMin meet"
      style={style}
    >
      <SvgText
        x={0}
        y={size}
        fill="none"
        stroke={color}
        strokeWidth={1.3}
        strokeLinejoin="round"
        fontFamily="Arial"
        fontSize={size}
        fontWeight="900"
        letterSpacing={-2}
      >
        {text}
      </SvgText>
    </Svg>
  );
}