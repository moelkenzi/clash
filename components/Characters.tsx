import { Image, ImageBackground, Text, View } from "react-native";

type CharacterCardProps = {
  imageUrl: string;
  title: string;
  fav: string;
  backgroundColor?: string;
  opacity?: number;
  className?: string;
};

export default function Characters({
  imageUrl,
  title,
  fav,
  backgroundColor = "gray",
  opacity = 0.3,
  className,
}: CharacterCardProps) {
  return (
    <View className={`${className} gap-4 items-center`}>
      <View style={{ width: 93, height: 93, position: "relative" }}>
        <Image
          source={{ uri: imageUrl }}
          style={{
            position: "absolute",
            width: 93,
            height: 93,
            top: 5,
            left: 0,
            borderRadius: 20,
            backgroundColor: backgroundColor,
            opacity: opacity,
          }}
        />
        <ImageBackground
          source={{ uri: imageUrl }}
          style={{
            width: 93,
            height: 93,
            justifyContent: "flex-end",
            alignItems: "center",
            borderRadius: 20,
            overflow: "hidden",
          }}
        />
      </View>
      <View className='items-center'>
        <Text className='text-xl font-snoma-semibold'>{title}</Text>
        <Text className='text-[#BABCBB] text-[13px] font-snoma-medium'>{fav}</Text>
      </View>
    </View>
  );
}
