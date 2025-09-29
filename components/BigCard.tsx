import { RedCircle } from "@/constants/icons";
import { Image, ImageBackground, Text, View } from "react-native";
export default function BigCard() {
  return (
    <View className='flex-col px-5 gap-4'>
      <ImageBackground
        source={require("@/assets/characters/bg-1.png")}
        imageStyle={{
          width: 307,
          height: 177,
          borderRadius: 23,
        }}
        className='p-4'
      >
        <View className='flex-row justify-between gap-[150px]'>
          <View className='flex-row gap-[5px] w-[65] h-[29] bg-[#F9FBF8] items-center justify-center px-1 rounded-[8px]'>
            <RedCircle />
            <Text className=' text-[9px] font-bold'>204 Live</Text>
          </View>
          <View className='flex-row gap-[5px] w-[70] h-[29] bg-[#00000030] items-center justify-center rounded-[10px]'>
            <Text className='flex-row  items-center justify-center text-[9px] font-bold text-white'>
              2.8k
            </Text>
          </View>
        </View>
      </ImageBackground>
      <View className='mt-32 pt-4 px-1 flex-row items-center gap-5'>
        <Image
          source={require("@/assets/user/user-3.png")}
          className='w-16 h-16 rounded-full'
        />
        <View>
          <Text className='text-[#28292D] font-snoma-semibold text-xl'>
            Esport Arena
          </Text>
          <Text className='text-gray-400 font-snoma-regular text-lg'>
            $1.000 Weekly Series
          </Text>
        </View>
      </View>
    </View>
  );
}
