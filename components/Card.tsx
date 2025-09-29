import { RedCircle, Stars } from "@/constants/icons";
import { Dimensions, Image, Text, View } from "react-native";

const { width } = Dimensions.get("screen");

export default function Card() {
  return (
    <>
      <View
        className='flex-row items-center gap-5 bottom-0 absolute z-10 px-[35px]'
        style={{ width: width, height: 140 }}>
        <Image source={require("@/assets/characters/1.png")} className='size-[120]' />
        <View className='gap-3'>
          <Text className='text-[#28292D] font-snoma-semibold text-[23px]'>Clash of royal Get</Text>

          <View className='gap-1.5'>
            <View className='flex-row items-center gap-2'>
              <Stars />
              <Text className='text-[#BABCBB] text-[16px]'>4.0</Text>
            </View>
            <View className='flex-row items-center gap-x-2.5'>
              <View className='flex-row gap-[5px] w-[80] h-[35] bg-[#F6F6F6] items-center justify-center px-1 rounded-[5px]'>
                <RedCircle />
                <Text className=' text-sm font-bold'>204 Live</Text>
              </View>
              <Text className=' text-[16px] text-[#FFBA3E]'>#Clansof #Ton</Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}
