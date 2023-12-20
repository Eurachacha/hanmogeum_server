import { nextSeq } from "../../utils/dbUtil.js";
import moment from "moment";

function getDay(day = 0) {
  return moment().add(day, "days").format("YYYY.MM.DD");
}
function getTime(day = 0, second = 0) {
  return moment()
    .add(day, "days")
    .add(second, "seconds")
    .format("YYYY.MM.DD HH:mm:ss");
}

export const initData = {
  // 회원
  user: [
    {
      _id: await nextSeq("user"),
      email: "admin@market.com",
      password: "$2b$10$S.8GNMDyvUF0xzujPtHBu.j5gtS19.OhRmYbpJBnCHg2S83WLx1T2",
      name: "무지",
      phone: "01011112222",
      address: "서울시 강남구 역삼동 123",
      type: "admin",
      createdAt: getTime(-100, -60 * 60 * 3),
      updatedAt: getTime(-100, -60 * 60 * 3),
      extra: {},
    },
    {
      _id: await nextSeq("user"),
      email: "s1@market.com",
      password: "$2b$10$S.8GNMDyvUF0xzujPtHBu.j5gtS19.OhRmYbpJBnCHg2S83WLx1T2",
      name: "네오",
      phone: "01022223333",
      address: "서울시 강남구 삼성동 456",
      type: "seller",
      createdAt: getTime(-50),
      updatedAt: getTime(-30, -60 * 60 * 3),
      extra: {},
    },
    {
      _id: await nextSeq("user"),
      email: "s2@market.com",
      password: "$2b$10$S.8GNMDyvUF0xzujPtHBu.j5gtS19.OhRmYbpJBnCHg2S83WLx1T2",
      name: "어피치",
      phone: "01033334444",
      address: "서울시 강남구 도곡동 789",
      type: "seller",
      createdAt: getTime(-40, -60 * 30),
      updatedAt: getTime(-30, -60 * 20),
      extra: {},
    },
    {
      _id: await nextSeq("user"),
      email: "u1@market.com",
      password: "$2b$10$S.8GNMDyvUF0xzujPtHBu.j5gtS19.OhRmYbpJBnCHg2S83WLx1T2",
      name: "제이지",
      phone: "01044445555",
      address: "서울시 강남구 논현동 222",
      type: "user",
      createdAt: getTime(-20, -60 * 30),
      updatedAt: getTime(-10, -60 * 60 * 12),
      extra: {},
    },
  ],
  // 상품
  product: [
    {
      _id: await nextSeq("product"),
      seller_id: 2,
      price: 12000,
      show: true,
      active: true,
      name: "은은한 밀크초콜릿 같은 쑥차 티백 (10ea)",
      quantity: 1400,
      buyQuantity: 1200,
      mainImages: [
        {
          url: "/files/101.png",
          fileName: "101.png",
          orgName: "101.png",
        },
      ],
      content: `<img style="display: block; vertical-align: top; margin: 0px auto; text-align: center;" result="success" name="E1848AE185AEE186A8E1848EE185A120E18490E185B5E18487E185A2E186A8_01.jpeg" size="1000px/5424px" filesize="2,97 MB" error src="/web/upload/NNEditor/20231024/E1848AE185AEE186A8E1848EE185A120E18490E185B5E18487E185A2E186A8_01.jpeg" />`,
      extra: {
        isNew: false,
        isBest: true,
        pack: ["PC0101"],
        teaType: ["PC0303"],
        taste: ["PC0401"],
        hashTag: ["PC0501", "PC0505"],
        isDecaf: true,
      },
    },
    {
      _id: await nextSeq("product"),
      seller_id: 2,
      price: 13000,
      show: true,
      active: true,
      name: "고소한 옥수수 같은 감잎차 티백 (10ea)",
      quantity: 100,
      buyQuantity: 0,
      mainImages: [
        {
          url: "/files/102.png",
          fileName: "102.png",
          orgName: "102.png",
        },
      ],
      content: `<img src="/web/upload/NNEditor/20231024/mobile/https://magpie-and-tiger.com/web/upload/NNEditor/20231024/mobile/6621843f01e9615ae087161340198672_1698142189.jpeg" />`,
      extra: {
        isNew: false,
        isBest: false,
        pack: ["PC0101"],
        teaType: ["PC0303"],
        taste: ["PC0404"],
        hashTag: ["PC0501", "PC0508"],
        isDecaf: true,
      },
    },
    {
      _id: await nextSeq("product"),
      seller_id: 2,
      price: 12000,
      show: true,
      active: true,
      name: "달콤한 조청 같은 호박차 티백 (10ea)",
      quantity: 100,
      buyQuantity: 0,
      mainImages: [
        {
          url: "/files/103.png",
          fileName: "103.png",
          orgName: "103.png",
        },
      ],
      content: `<img src="/web/upload/NNEditor/20231101/mobile/7706c626eac06a7f0aa88fd8d04eec91_1698844704.jpeg" />`,
      extra: {
        isNew: false,
        isBest: false,
        pack: ["PC0101"],
        teaType: ["PC0308"],
        taste: ["PC0401"],
        hashTag: ["PC0501", "PC0507"],
        isDecaf: true,
      },
    },

    {
      _id: await nextSeq("product"),
      seller_id: 2,
      price: 6400,
      show: true,
      active: true,
      name: "고소한 초콜릿향의 호지차 티백 5ea",
      quantity: 100,
      buyQuantity: 0,
      mainImages: [
        {
          url: "/files/104.png",
          fileName: "104.png",
          orgName: "104.png",
        },
      ],
      content: `<img data-result="success" data-name="1.3_E18492E185A9E1848CE185B5E1848EE185A120E18490E185B5E18487E185A2E186A8_1.png" data-size="1000px/3348px" data-filesize="2,29 MB" data-error style="display: block; vertical-align: top; margin: 0px auto; text-align: center;" src="/web/upload/NNEditor/20230306/1.3_E18492E185A9E1848CE185B5E1848EE185A120E18490E185B5E18487E185A2E186A8_1.png" />`,
      extra: {
        isNew: false,
        isBest: false,
        pack: ["PC0101"],
        teaType: ["PC0302"],
        taste: ["PC0404"],
        hashTag: ["PC0506", "PC0509"],
        isDecaf: false,
      },
    },

    {
      _id: await nextSeq("product"),
      seller_id: 2,
      price: 16000,
      show: true,
      active: true,
      name: "잔잔한 나무향의 보이숙차 티백 10ea",
      quantity: 100,
      buyQuantity: 0,
      mainImages: [
        {
          url: "/files/105.png",
          fileName: "105.png",
          orgName: "105.png",
        },
      ],
      content: `<img data-result="success" data-name="copy-1678104215-1.1_E18487E185A9E1848BE185B5E18489E185AEE186A8E1848EE185A120E18490E185B5E18487E185A2E186A8_1.png" data-size="1000px/3348px" data-filesize="2,28 MB" data-error style="display: block; vertical-align: top; margin: 0px auto; text-align: center;" src="/web/upload/NNEditor/20230306/copy-1678104215-1.1_E18487E185A9E1848BE185B5E18489E185AEE186A8E1848EE185A120E18490E185B5E18487E185A2E186A8_1.png" />`,
      extra: {
        isNew: false,
        isBest: false,
        pack: ["PC0101"],
        teaType: ["PC0305"],
        taste: ["PC0403"],
        hashTag: ["PC0504", "PC0506"],
        isDecaf: false,
      },
    },

    {
      _id: await nextSeq("product"),
      seller_id: 2,
      price: 21000,
      show: true,
      active: true,
      name: "얼그레이 밀크티용 홍차 벌크 300g",
      quantity: 100,
      buyQuantity: 0,
      mainImages: [
        {
          url: "/files/106.png",
          fileName: "106.png",
          orgName: "106.png",
        },
      ],
      content: `<img src="//gi.esmplus.com/witchkitch/d_%ED%99%8D%EC%B0%A8%EC%9E%8E1.jpg" />`,
      extra: {
        isNew: false,
        isBest: false,
        pack: ["PC0101"],
        teaType: ["PC0301"],
        taste: ["PC0403"],
        hashTag: ["PC0505", "PC0510"],
        isDecaf: false,
      },
    },
    {
      _id: await nextSeq("product"),
      seller_id: 2,
      price: 32000,
      show: true,
      active: true,
      name: "버라이어티 디저트 티백 패키지",
      quantity: 100,
      buyQuantity: 0,
      mainImages: [
        {
          url: "/files/107.png",
          fileName: "107.png",
          orgName: "107.png",
        },
      ],
      content: `<div class="css-0 ekbeq0z1"><img src="https://img.29cm.co.kr/next-product/2021/07/13/9eed6c67a48c4ca0b60fa65a4aff1425_20210713153556.png?width=1000" alt loading="lazy" class="css-1tyhn5r ekbeq0z2" /></div>`,
      extra: {
        isNew: false,
        isBest: false,
        pack: ["PC0101"],
        teaType: ["PC0303"],
        taste: ["PC0405"],
        hashTag: ["PC0502", "PC0505"],
        isDecaf: false,
      },
    },
    {
      _id: await nextSeq("product"),
      seller_id: 2,
      price: 21000,
      show: true,
      active: true,
      name: "해피버스데이 패키지",
      quantity: 1100,
      buyQuantity: 1000,
      mainImages: [
        {
          url: "/files/108.png",
          fileName: "108.png",
          orgName: "108.png",
        },
      ],
      content: `<img alt style="max-width: 100%" src="https://img.29cm.co.kr/item/202307/11ee25f30ca53c6baa4f717e71d5d2cf.jpg" />`,
      extra: {
        isNew: false,
        isBest: true,
        pack: ["PC0101"],
        teaType: ["PC0307"],
        taste: ["PC0404"],
        hashTag: ["PC0502", "PC0503"],
        isDecaf: false,
      },
    },
  ],
  // 주문
  order: [
    {
      _id: await nextSeq("order"),
      user_id: 4,
      state: "OS030",
      products: [
        {
          _id: 2,
          quantity: 10,
          seller_id: 2,
          name: "자스민 플로럴 블랜딩 차 200g",
          image: "/files/sample-dog.jpg",
          price: 180000,
          extra: {
            isNew: false,
            isBest: false,
            pack: ["PC0101"],
            teaType: ["PC0307"],
            taste: ["PC0401", "PC0407"],
            hashTag: ["PC0501", "PC0502", "PC0509"],
            isDecaf: false,
          },
        },
      ],
      cost: {
        products: 180000,
        shippingFees: 3500,
        discount: {
          products: 0,
          shippingFees: 3500,
        },
        total: 180000,
      },
      shippingInfo: {
        name: "김철수",
        phone: "01011111111",
        address: {
          name: "회사",
          value: "서울시 강남구 신사동 234",
          detailValue: "멋사빌딩 102호",
        },
      },
      createdAt: getTime(-6, -60 * 60 * 3),
      updatedAt: getTime(-6, -60 * 60 * 3),
    },
    {
      _id: await nextSeq("order"),
      user_id: 4,
      state: "OS030",
      products: [
        {
          _id: 1,
          quantity: 1,
          seller_id: 2,
          name: "실속 분말 녹차",
          image: "/files/sample-dog.jpg",
          price: 9800,
          extra: {
            isNew: false,
            isBest: false,
            pack: ["PC0102"],
            teaType: ["PC0306"],
            taste: ["PC0401", "PC0407"],
            hashTag: ["PC0502", "PC0513", "PC0507"],
            isDecaf: false,
          },
        },
      ],
      cost: {
        products: 9800,
        shippingFees: 3500,
        discount: {
          products: 0,
          shippingFees: 0,
        },
        total: 13300,
      },
      shippingInfo: {
        name: "김멋사",
        phone: "01011111111",
        address: {
          name: "회사",
          value: "서울시 강남구 신사동 234",
          detailValue: "멋사빌딩 102호",
        },
      },
      createdAt: getTime(-6, -60 * 60 * 3),
      updatedAt: getTime(-6, -60 * 60 * 3),
    },
    {
      _id: await nextSeq("order"),
      user_id: 4,
      state: "OS030",
      products: [
        {
          _id: 8,
          quantity: 1,
          seller_id: 2,
          name: "크리스마스 플래티넘 블랙티",
          image: "/files/sample-dog.jpg",
          price: 16400,
          extra: {
            isNew: false,
            isBest: false,
            pack: ["PC0102"],
            teaType: ["PC0301", "PC0303", "PC0302", "PC0305", "PC0306"],
            taste: ["PC0401", "PC0405"],
            hashTag: ["PC0508", "PC0509", "PC0510"],
            isDecaf: false,
          },
        },
        {
          _id: 7,
          quantity: 3,
          seller_id: 2,
          name: "한잎 어린 제주녹차",
          image: "/files/sample-dog.jpg",
          price: 20400,
          extra: {
            isNew: false,
            isBest: false,
            pack: ["PC0102"],
            teaType: ["PC0302"],
            taste: ["PC0406", "PC0405"],
            hashTag: ["PC0507", "PC0502"],
            isDecaf: false,
          },
        },
      ],
      cost: {
        products: 36800,
        shippingFees: 3500,
        discount: {
          products: 0,
          shippingFees: 0,
        },
        total: 40300,
      },
      shippingInfo: {
        name: "김멋사",
        phone: "01011111111",
        address: {
          name: "회사",
          value: "서울시 강남구 신사동 234",
          detailValue: "멋사빌딩 102호",
        },
      },
      createdAt: getTime(-6, -60 * 60 * 3),
      updatedAt: getTime(-6, -60 * 60 * 3),
    },
    {
      _id: await nextSeq("order"),
      user_id: 5,
      state: "OS030",
      products: [
        {
          _id: 6,
          quantity: 3,
          seller_id: 2,
          name: "봄 하루 한 잎 벚꽃",
          image: "/files/sample-dog.jpg",
          price: 42000,
          extra: {
            isNew: false,
            isBest: false,
            pack: ["PC0101"],
            teaType: ["PC0307"],
            taste: ["PC0407", "PC0405"],
            hashTag: ["PC0511", "PC0509", "PC0507"],
            isDecaf: false,
          },
        },
        {
          _id: 7,
          quantity: 5,
          seller_id: 2,
          name: "한잎 어린 제주녹차",
          image: "/files/sample-dog.jpg",
          price: 34000,
          extra: {
            isNew: false,
            isBest: false,
            pack: ["PC0102"],
            teaType: ["PC0302"],
            taste: ["PC0406", "PC0405"],
            hashTag: ["PC0507", "PC0502"],
            isDecaf: false,
          },
        },
      ],
      cost: {
        products: 76000,
        shippingFees: 0,
        discount: {
          products: 0,
          shippingFees: 0,
        },
        total: 76000,
      },
      shippingInfo: {
        name: "김철수",
        phone: "01012341234",
        address: {
          name: "집",
          value: "서울시 강남구 역삼동 234",
          detailValue: "멋사아파트 101동 101호",
        },
      },
      createdAt: getTime(-6, -60 * 60 * 3),
      updatedAt: getTime(-6, -60 * 60 * 3),
    },
  ],
  // 후기
  reply: [],
  // 장바구니
  cart: [],
  // 즐겨찾기/북마크
  bookmark: [],
  // QnA, 공지사항, 게시판
  post: [],
  // 코드
  code: [
    {
      _id: "productCategory",
      title: "상품 카테고리",
      codes: [
        { sort: 1, code: "PC01", value: "pack", depth: 1 },
        { sort: 2, code: "PC02", value: "isDecaf", depth: 1 },
        { sort: 3, code: "PC03", value: "teaType", depth: 1 },
        { sort: 4, code: "PC04", value: "taste", depth: 1 },
        { sort: 5, code: "PC05", value: "hashTag", depth: 1 },
        { sort: 1, code: "PC0101", value: "티백", parent: "PC01", depth: 2 },
        { sort: 2, code: "PC0102", value: "잎차", parent: "PC01", depth: 2 },
        { sort: 3, code: "PC0103", value: "분말", parent: "PC01", depth: 2 },
        {
          sort: 4,
          code: "PC0104",
          value: "음료-원액",
          parent: "PC01",
          depth: 2,
        },
        { sort: 1, code: "PC0301", value: "홍차", parent: "PC03", depth: 2 },
        { sort: 2, code: "PC0302", value: "녹차", parent: "PC03", depth: 2 },
        { sort: 3, code: "PC0303", value: "허브티", parent: "PC03", depth: 2 },
        { sort: 4, code: "PC0304", value: "우롱차", parent: "PC03", depth: 2 },
        { sort: 5, code: "PC0305", value: "보이차", parent: "PC03", depth: 2 },
        { sort: 6, code: "PC0306", value: "블렌드", parent: "PC03", depth: 2 },
        { sort: 7, code: "PC0307", value: "꽃차", parent: "PC03", depth: 2 },
        { sort: 7, code: "PC0308", value: "과일차", parent: "PC03", depth: 2 },

        // Taste
        {
          sort: 1,
          code: "PC0401",
          value: "달콤한",
          parent: "PC04",
          depth: 2,
        },
        {
          sort: 2,
          code: "PC0402",
          value: "새콤한",
          parent: "PC04",
          depth: 2,
        },
        {
          sort: 3,
          code: "PC0403",
          value: "씁쓸한",
          parent: "PC04",
          depth: 2,
        },
        {
          sort: 4,
          code: "PC0404",
          value: "고소한",
          parent: "PC04",
          depth: 2,
        },
        {
          sort: 5,
          code: "PC0405",
          value: "깔끔한",
          parent: "PC04",
          depth: 2,
        },

        // HashTag
        {
          sort: 1,
          code: "PC0501",
          value: "잠들기_전",
          parent: "PC05",
          depth: 2,
        },
        {
          sort: 2,
          code: "PC0502",
          value: "선물하기_좋아요",
          parent: "PC05",
          depth: 2,
        },
        {
          sort: 3,
          code: "PC0503",
          value: "겨울에_좋아요",
          parent: "PC05",
          depth: 2,
        },
        {
          sort: 4,
          code: "PC0504",
          value: "소화에_좋아요",
          parent: "PC05",
          depth: 2,
        },
        {
          sort: 5,
          code: "PC0505",
          value: "기분전환에_좋아요",
          parent: "PC05",
          depth: 2,
        },
        {
          sort: 6,
          code: "PC0506",
          value: "입가심으로_좋아요",
          parent: "PC05",
          depth: 2,
        },
        {
          sort: 7,
          code: "PC0507",
          value: "부기_완화",
          parent: "PC05",
          depth: 2,
        },
        {
          sort: 8,
          code: "PC0508",
          value: "비타민_충전",
          parent: "PC05",
          depth: 2,
        },
        {
          sort: 9,
          code: "PC0509",
          value: "디저트랑_찰떡궁합",
          parent: "PC05",
          depth: 2,
        },
        {
          sort: 10,
          code: "PC0510",
          value: "나만의_홈카페",
          parent: "PC05",
          depth: 2,
        },
        {
          sort: 11,
          code: "PC0511",
          value: "담백한",
          parent: "PC05",
          depth: 2,
        },
        {
          sort: 12,
          code: "PC0512",
          value: "깊은맛과_향",
          parent: "PC05",
          depth: 2,
        },
        {
          sort: 13,
          code: "PC0513",
          value: "감칠맛_나는",
          parent: "PC05",
          depth: 2,
        },
        {
          sort: 14,
          code: "PC0514",
          value: "은은한_향",
          parent: "PC05",
          depth: 2,
        },
        {
          sort: 15,
          code: "PC0515",
          value: "초콜릿_풍미",
          parent: "PC05",
          depth: 2,
        },
        {
          sort: 16,
          code: "PC0516",
          value: "향이_풍부해요",
          parent: "PC05",
          depth: 2,
        },
        {
          sort: 17,
          code: "PC0517",
          value: "산뜻해요",
          parent: "PC05",
          depth: 2,
        },
        {
          sort: 18,
          code: "PC0518",
          value: "봄_향기_가득",
          parent: "PC05",
          depth: 2,
        },
        {
          sort: 19,
          code: "PC0519",
          value: "부드러워요",
          parent: "PC05",
          depth: 2,
        },
        {
          sort: 20,
          code: "PC0520",
          value: "아침에_어울리는",
          parent: "PC05",
          depth: 2,
        },
        {
          sort: 21,
          code: "PC0521",
          value: "제로슈가",
          parent: "PC05",
          depth: 2,
        },
        {
          sort: 22,
          code: "PC0522",
          value: "물_대신_마시기_좋은",
          parent: "PC05",
          depth: 2,
        },
        {
          sort: 23,
          code: "PC0523",
          value: "흐린_날",
          parent: "PC05",
          depth: 2,
        },
        {
          sort: 24,
          code: "PC0524",
          value: "과일_향_나는",
          parent: "PC05",
          depth: 2,
        },
      ],
    },
    {
      _id: "orderState",
      title: "주문 상태",
      codes: [
        {
          sort: 1,
          code: "OS030",
          value: "배송 준비중",
        },
        {
          sort: 2,
          code: "OS035",
          value: "배송중",
        },
        {
          sort: 3,
          code: "OS040",
          value: "배송 완료",
        },
        {
          sort: 4,
          code: "OS045",
          value: "주문 취소",
        },
      ],
    },
  ],
  // 설정
  config: [
    {
      _id: "shippingFees",
      title: "배송비",
      value: 3500,
    },
    {
      _id: "freeShippingFees",
      title: "배송비 무료 금액",
      value: 50000,
    },
  ],
};
