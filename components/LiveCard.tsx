import { LiveCardData } from "@/constants/data";
import { RedCircle, Stars } from "@/constants/icons";
import { MoreVertical } from "lucide-react-native";
import { Dimensions, Image, Text, View } from "react-native";
import CustomSVG from "./test";

const { width } = Dimensions.get("screen");
const shadow = {
  shadowColor: "#95959570",
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.3,
  shadowRadius: 10,
  elevation: 5,
};

//   {
//     id: 1,
//     image: "@/assets/characters/barbarian.png",
//     title: "Clash of Clan Get",
//     rating: 4.2,
//     live: 3452,
//     tag: "#Clansof #Victory",
//   },

export default function LiveCard({
  image,
  title,
  rating,
  live,
  tag,
  customGradient,
}: LiveCardData) {
  return (
    <View
      className='bg-white flex-row items-center gap-14 rounded-[26px] px-5 justify-center border border-gray-500/15'
      style={[
        {
          width: width - 49,
          height: 125,
        },
        shadow,
      ]}
    >
      <View className='relative'>
        <Image
          //   source={require("@/assets/characters/barbarian.png")}
          source={image}
          //   className='absolute z-10 -top-3.5 left-2'
          className='absolute z-10 top-6 left-2'
          //   style={{
          //     width: 106,
          //     height: 109,
          //   }}
          style={{
            width: 80,
            height: 80,
          }}
        />
        {/* <Card /> */}
        <CustomSVG gradientProp={customGradient} />
      </View>
      <View className='flex-row items-center gap-5'>
        <View className='gap-1.5'>
          <Text className='text-[#28292D] font-snoma-semibold text-xl'>
            {title}
          </Text>

          <View className='gap-1.5'>
            <View className='flex-row items-center gap-2'>
              <Stars />
              <Text className='text-[#BABCBB] text-sm'>{rating}</Text>
            </View>
            <View className='flex-row items-center gap-x-2.5'>
              <View className='flex-row gap-[5px] w-[70] h-[25] bg-[#F6F6F6] items-center justify-center px-1 rounded-[5px]'>
                <RedCircle />
                <Text className=' text-xs font-bold'>{live}</Text>
              </View>
              <Text className=' text-sm text-[#FFBA3E]'>{tag}</Text>
            </View>
          </View>
        </View>
        <MoreVertical color={"#D3D2D8"} />
      </View>
    </View>
  );
}
