import Card from "@/components/Card";
import CharacterCard from "@/components/CharacterCard";
import { Data } from "@/constants/data";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { ChevronLeft, ChevronRight } from "lucide-react-native";
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

export default function App() {
  const { top } = useSafeAreaInsets();

  // const { data, isLoading, error } = useQuery<Item[]>({
  //   queryKey: ["cards"],
  //   queryFn: fetchCards,
  // });

  // const cards = data?.slice(0, 10);

  // if (isLoading)
  //   return (
  //     <SafeAreaView className='flex-1 justify-center items-center'>
  //       <Text>Loading...</Text>
  //     </SafeAreaView>
  //   );
  // if (error)
  //   return (
  //     <SafeAreaView className='flex-1 justify-center items-center'>
  //       <Text>Error: {error.message}</Text>
  //     </SafeAreaView>
  //   );
  // if (!cards?.length)
  //   return (
  //     <SafeAreaView className='flex-1 justify-center items-center'>
  //       <Text>No cards found</Text>
  //     </SafeAreaView>
  //   );

  // if (error) {
  //   console.log(error);
  // }

  return (
    <View className='bg-white'>
      <ScrollView
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        contentContainerClassName='gap-8 z-20 justify-center bg-white'
      >
        <ImageBackground
          source={require("@/assets/characters/image.png")}
          style={{
            width: width,
            height: height * 0.55,
            flexDirection: "row",
            alignItems: "flex-end",
            position: "relative",
            flex: 1,
            // justifyContent: "flex-end",
            zIndex: 0,
            overflow: "visible",
          }}
        >
          <LinearGradient
            colors={["transparent", "#ffffff05", "#ffffff"]}
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: -1,
              height: height * 0.5,
            }}
          />
          {/*  */}
          <Pressable
            className='w-14 h-14 rounded-xl items-center justify-center self-start bg-sky-500/40 border border-gray-900/40'
            style={{
              marginTop: top,
              marginHorizontal: 20,
            }}
            onPress={() => router.back()}
          >
            <ChevronLeft size={40} />
          </Pressable>

          <Card />
        </ImageBackground>
        <View className='flex-1 pb-20'>
          <View className='gap-8'>
            <View className='px-5 flex-row items-center justify-between'>
              <Text className='text-2xl text-[#28292D] font-snoma-semibold'>
                Play Esport
              </Text>
              <ChevronRight color={"#9ca3af"} />
            </View>

            <FlatList
              horizontal
              contentContainerClassName='gap-5 pl-5'
              showsHorizontalScrollIndicator={false}
              data={Data}
              renderItem={({ item }) => (
                <CharacterCard
                  imageUrl={item.url}
                  title={item.title}
                  fav={item.fav}
                />
              )}
              keyExtractor={(item) => item.id.toString()}
            />
          </View>
          <View className='gap-8'>
            <View className='px-5 flex-row items-center justify-between'>
              <Text className='text-2xl text-[#28292D] font-snoma-semibold'>
                Play Esport
              </Text>
              <ChevronRight color={"#9ca3af"} />
            </View>
            <FlatList
              horizontal
              contentContainerClassName='gap-5 pl-5'
              showsHorizontalScrollIndicator={false}
              data={Data}
              renderItem={({ item }) => (
                <CharacterCard
                  imageUrl={item.url}
                  title={item.title}
                  fav={item.fav}
                />
              )}
              keyExtractor={(item) => item.id.toString()}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
