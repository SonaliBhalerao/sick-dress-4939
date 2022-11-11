import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { BestSellerForMen } from '../../components/mens_page/BestSellerForMen/BestSellerForMen'
import { ClearenceZoneMen } from '../../components/mens_page/clearenceZoneMen/ClearenceZoneMen'
import { MensCarousel } from '../../components/mens_page/MensCarousel'
import { MensSmallCarousel } from '../../components/mens_page/MensSmallCarousel'
import { MensDiscountPeDiscount } from '../../components/mens_page/Mens_Discount_Pe_Discount/MensDiscountPeDiscount'
import { MensPopularcategories } from '../../components/mens_page/popular_categories/MensPopularcategories'
import { TheStupidCollection } from '../../components/mens_page/TheStupidCollectionMens/TheStupidCollection'

export const MensHomePage = () => {
  return (
    <Box >

        <MensCarousel/>

        <Box py={"20px"} >
          <Image width={"100%"} src='https://images.bewakoof.com/uploads/grid/app/desktop-tod-strip-men-1654149139.jpg'/>
        </Box>

        <MensSmallCarousel/>

        <Box py={"20px"} >
          <Image width={"100%"} src='https://images.bewakoof.com/uploads/grid/app/thun-strip-new-2022-desksite-1667395389.jpg'/>
        </Box>

        <Text margin={"auto"} textAlign={"center"} fontFamily={"Montserrat"} fontWeight={500} >
          POPULAR CATEGORIES
        </Text>
        <MensPopularcategories/>

        <Text margin={"auto"} textAlign={"center"} fontFamily={"Montserrat"} fontWeight={500} mb={"10px"} >
          DISCOUNT PE DISCOUNT
        </Text>
        <MensDiscountPeDiscount/>
        
        <Text margin={"auto"} textAlign={"center"} fontFamily={"Montserrat"} fontWeight={500} >
         BEST SELLER FOR MEN
        </Text>
        <BestSellerForMen/>

        <Box display={"flex"} gap={"20px"} py={"20px"} >
          <Box>
            <img src="https://images.bewakoof.com/uploads/grid/app/comfy-solid-joggers-1x1-m-1667802359.jpg" alt="" srcset="" />
          </Box>
          <Box>
            <img src="https://images.bewakoof.com/uploads/grid/app/OVERSIZED-TEES-1X1-m-1667812348.gif" alt="" srcset="" />
          </Box>
          <Box>
            <img src="https://images.bewakoof.com/uploads/grid/app/Flatknit-sweater-1x1-m-1667910222.jpg" alt="" srcset="" />
          </Box>
        </Box>

        <Text margin={"auto"} textAlign={"center"} fontFamily={"Montserrat"} fontWeight={500} >
          CLEARANCE ZONE
        </Text>
        <ClearenceZoneMen/>

        <Text margin={"auto"} textAlign={"center"} fontFamily={"Montserrat"} fontWeight={500} mb={"10px"} >
          THE STOOPID COLLECTION
        </Text>
        <TheStupidCollection/>

        <Box py={"10px"} >
          <Image width={"100%"} src='https://images.bewakoof.com/uploads/grid/app/desktop---strip-1440---x-150---tribe-1634552003.png'/>
        </Box>

        <Box py={"10px"} >
          <Image width={"100%"} src='https://images.bewakoof.com/uploads/grid/app/VoteForDesign-ThinStrip-Desktop-Revised-1667372740.gif'/>
        </Box>
    </Box>
  )
}
