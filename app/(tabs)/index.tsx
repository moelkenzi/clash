import BigCard from "@/components/BigCard";
import Header from "@/components/Header";
import LiveCard from "@/components/LiveCard";
import { liveCardData } from "@/constants/data";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { ChevronRight } from "lucide-react-native";
import {
  Dimensions,
  FlatList,
  ImageBackground,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const { width, height } = Dimensions.get("screen");

const Home = () => {
  const { top } = useSafeAreaInsets();
  return (
    <ScrollView
      className='flex-1 bg-white'
      showsVerticalScrollIndicator={false}
    >
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
              <Pressable onPress={() => router.push("/info")}>
                <Text className='text-white font-clash-bold text-[20px] '>
                  Join Now
                </Text>
              </Pressable>
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

        <View className='flex-1 items-start mt-10 gap-5'>
          <View className='flex-row px-5 items-center justify-between w-full'>
            <Text className='text-2xl text-[#28292D] font-snoma-semibold'>
              Live Esport
            </Text>
            <ChevronRight color={"#9ca3af"} />
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerClassName='gap-6'
          >
            <BigCard />
            <BigCard />
            <BigCard />
            <BigCard />
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
};
export default Home;
