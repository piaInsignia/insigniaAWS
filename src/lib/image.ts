export const images = {
  LOGO: "/assets/logo.png",
  LEFT_IMAGE: "/assets/left_Image.png",
  EN_FLAG: "/assets/us-flag.png",
  LAYER: "/assets/layer.svg",
  AWS_LOGO: "/assets/aws_logo.png",
  IMG_TAKS_CRAFT: "/assets/taks_craft.svg",
  IMG_DATA_SENSE: "/assets/data_sense.png",
  IMG_CREATIVE: "/assets/creative.png",
  //solution
  IMG_SOLUTION_1: "/assets/solution_1.png",
  IMG_SOLUTION_2: "/assets/solution_2.png",
  IMG_SOLUTION_3: "/assets/solution_3.png",

  //partner
  IMG_BG_PARTNER: "/assets/bg_partner.jpg",
  IMG_GROUP_PARTNER: "/assets/group_partner.png",
  //
  IMG_SERVICE: "/assets/image_service.png",
  //social_media
  IMG_FACEBOOK: "/assets/Facebook.png",
  IMG_ISTAGRAM: "/assets/Instagram.png",
  IMG_LINKEDIN: "/assets/LinkedIn.png",
  IMG_YOUTUBE: "/assets/Youtube.png",
  IMG_TWITTER: "/assets/Twitter.png",
} as const;

export type ImageKey = keyof typeof images;
