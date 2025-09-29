import React from "react";
import { StyleSheet, View } from "react-native";
import Svg, {
  Defs,
  FeBlend,
  FeFlood,
  FeGaussianBlur,
  Filter,
  G,
  LinearGradient,
  Path,
  Stop,
} from "react-native-svg";

const CustomSVG = ({ gradientProp }) => {
  // Default gradient if no prop is passed
  const gradientColors = gradientProp || {
    startColor: "#FFC548", // Default start color
    endColor: "#FF7D42", // Default end color
  };

  return (
    <View style={styles.container}>
      <Svg width={89} height={90} viewBox='0 0 89 90' fill='none'>
        {/* Main Path */}
        <Path
          d='M0 15C0 6.71573 6.71573 0 15 0H69.157C81.3625 0 90.4022 11.3438 87.6775 23.2414L75.4133 76.7949C73.6438 84.5217 66.769 90 58.8423 90H16C7.16345 90 0 82.8366 0 74V15Z'
          fill='url(#paint0_linear_1_2)'
        />

        {/* Foreground shapes with opacity */}
        <G opacity='0.4' filter='url(#filter0_f_1_2)'>
          <Path
            d='M20.4871 53.2008L9 48.8448L13.1601 46.0772L20.4871 53.2008Z'
            fill='#F59D39'
          />
          <Path
            d='M49.4871 25.2008L38 20.8448L42.1601 18.0772L49.4871 25.2008Z'
            fill='#F59D39'
          />
          <Path
            d='M27.4871 81.2008L16 76.8448L20.1601 74.0772L27.4871 81.2008Z'
            fill='#F59D39'
          />
        </G>

        {/* Defining the filter and custom gradient */}
        <Defs>
          <Filter
            id='filter0_f_1_2'
            x='8.45'
            y='17.5272'
            width='41.5872'
            height='64.2236'
            filterUnits='userSpaceOnUse'
          >
            <FeFlood floodOpacity='0' result='BackgroundImageFix' />
            <FeBlend
              mode='normal'
              in='SourceGraphic'
              in2='BackgroundImageFix'
              result='shape'
            />
            <FeGaussianBlur
              stdDeviation='0.275'
              result='effect1_foregroundBlur_1_2'
            />
          </Filter>

          <LinearGradient
            id='paint0_linear_1_2'
            x1='-10.5'
            y1='-11.5'
            x2='99'
            y2='112'
            gradientUnits='userSpaceOnUse'
          >
            <Stop offset='0.36179' stopColor={gradientColors.startColor} />
            <Stop offset='0.735034' stopColor={gradientColors.endColor} />
          </LinearGradient>
        </Defs>
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});

export default CustomSVG;
