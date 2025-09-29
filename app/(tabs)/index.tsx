import Header from "@/components/Header";
import LiveCard from "@/components/LiveCard";
import { liveCardData } from "@/constants/data";
import { LinearGradient } from "expo-linear-gradient";
import { ChevronRight } from "lucide-react-native";
import {
  Dimensions,
  FlatList,
  ImageBackground,
  Pressable,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const { width, height } = Dimensions.get("screen");
const shadow = {
  shadowColor: "#95959570",
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.2,
  shadowRadius: 10,
  elevation: 5,
};

const Home = () => {
  const { top } = useSafeAreaInsets();
  return (
    <View className='flex-1 bg-white'>
      <Header />
      <ImageBackground
        source={require("@/assets/characters/bg-1.png")}
        style={{
          width: width,
          height: height * 0.4,
          marginTop: top * 2,
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <LinearGradient
          colors={["transparent", "#ffffff05", "#ffffff"]}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: -1,
            height: height * 0.15,
          }}
        />

        <View className='px-3 gap-2 mt-14'>
          <View className='gap-2'>
            <Text className='text-white font-clash-bold text-[40px] uppercase'>
              Clan war
            </Text>
            <Text className='text-white font-clash-bold text-[40px] uppercase'>
              leagues
            </Text>
          </View>
          <View className='gap-3'>
            <Text className='text-white font-semibold font-inter text-[22px]'>
              Experience the event
            </Text>
            <Pressable
              className='w-[153px] h-[44px] items-center justify-center rounded-[16px] border border-[#4e9118] border-b-2 border-t-0 border-r-[0.25px] border-l-[0.20px] '
              style={{
                experimental_backgroundImage: `linear-gradient(180deg, #C4E361 0%, #73B136 100%)`,
              }}
            >
              <Text className='text-white font-clash-bold text-[20px] '>
                Join Now
              </Text>
            </Pressable>
          </View>
        </View>
      </ImageBackground>

      <View className='flex-1'>
        <FlatList
          horizontal
          contentContainerClassName='justify-center gap-4 px-4 z-10 '
          showsHorizontalScrollIndicator={false}
          data={liveCardData}
          renderItem={({ item }) => (
            <LiveCard {...item} customGradient={item.customGradient} />
          )}
        ></FlatList>

        <View className='flex-1 items-start justify-between flex-row px-5 -mt-72'>
          <Text className='text-2xl text-[#28292D] font-snoma-semibold'>
            Live Esport
          </Text>
          <ChevronRight color={"#9ca3af"} />
          {/* <CustomSVG gradientProp={} /> */}
        </View>
      </View>
    </View>
  );
};
export default Home;

{
  /* <View
className='bg-white rounded-[26px]'
style={[
  {
    width: width - 49,
    height: 125,
  },
  shadow,
]}
></View> */
}
