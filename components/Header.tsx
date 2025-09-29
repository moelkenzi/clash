import { Flash } from "@/constants/icons";
import { Dimensions, Image, Text, View } from "react-native";

const { width, height } = Dimensions.get("screen");
export default function Header() {
  return (
    <View
      className='absolute z-10 rounded-bl-[47px] rounded-br-[47px] bg-white justify-end p-[40]'
      style={{
        width: width,
        height: height * 0.2,
      }}
    >
      <View className='flex-row justify-between'>
        <View className='flex-row items-center gap-5'>
          <Image
            source={require("@/assets/user/user-2.png")}
            className='w-16 h-16 rounded-xl'
          />
          <View>
            <Text className='text-[#28292D] font-snoma-semibold text-xl'>
              Rabbit&apos;s Fort
            </Text>
            <Text className='text-gray-400 font-snoma-semibold text-sm'>
              maya_wilson
            </Text>
          </View>
        </View>
        <View className='flex-row gap-2 items-center justify-center bg-[#F9A04215] w-[90px] h-40] rounded-2xl'>
          <Text className='text-[#F9A042] font-snoma-semibold text-[25px]'>
            60
          </Text>
          <Flash width={15} />
        </View>
      </View>
    </View>
  );
}
