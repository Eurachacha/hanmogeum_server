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
      price: 9800,
      show: true,
      active: true,
      name: "실속 분말 녹차",
      quantity: 560,
      buyQuantity: 400,
      mainImages: [
        {
          url: `/files/sample-dog.jpg`,
          fileName: "sample-dog.jpg",
          orgName: "실속 분말 녹차.jpg",
        },
      ],
      content: `
        <div class="product-detail">
          <p>신선하고 풍부한 향의 그린티를 실속 있게</p>
        </div>`,
      createdAt: getTime(-41, -60 * 60 * 2),
      updatedAt: getTime(-40, -60 * 15),
      extra: {
        isNew: false,
        isBest: false,
        pack: ["PC0102"], // 형태
        teaType: ["PC0306"], // 종류
        taste: ["PC0401", "PC0407"], // 맛
        hashTag: ["PC0502", "PC0513", "PC0507"], //상황
        isDecaf: false,
      },
    },
    {
      _id: await nextSeq("product"),
      seller_id: 2,
      price: 18000,
      show: true,
      active: true,
      name: "자스민 플로럴 블랜딩 차 200g",
      quantity: 80,
      buyQuantity: 24,
      mainImages: [
        {
          url: `/files/sample-dog.jpg`,
          fileName: "sample-dog.jpg",
          orgName: "자스민 플로럴 블랜딩 차 200g.jpg",
        },
      ],
      content: `
        <div class="product-detail">
          <p>향긋한 자스민과 여러 꽃잎이 어우러진 정원을 한 잔에</p>
        </div>`,
      createdAt: getTime(-41, -60 * 60 * 2),
      updatedAt: getTime(-40, -60 * 15),
      extra: {
        isNew: false,
        isBest: false,
        pack: ["PC0101"], // 형태
        teaType: ["PC0307"], // 종류
        taste: ["PC0401", "PC0407"], // 맛
        hashTag: ["PC0501", "PC0502", "PC0509"], //상황
        isDecaf: false,
      },
    },

    {
      _id: await nextSeq("product"),
      seller_id: 2,
      price: 22800,
      show: true,
      active: true,
      name: "자연 그대로 루이보스 잎차",
      quantity: 320,
      buyQuantity: 310,
      mainImages: [
        {
          url: `/files/sample-dog.jpg`,
          fileName: "sample-dog.jpg",
          orgName: "자연 그대로 루이보스 잎차.jpg",
        },
      ],
      content: `
        <div class="product-detail">
          <p>풍부한 루이보스 향으로 저녁에도 걱정 없이 편안하게</p>
        </div>`,
      createdAt: getTime(-41, -60 * 60 * 2),
      updatedAt: getTime(-40, -60 * 15),
      extra: {
        isNew: false,
        isBest: false,
        pack: ["PC0102"], // 형태
        teaType: ["PC0301"], // 종류
        taste: ["PC0401", "PC0402"], // 맛
        hashTag: ["PC0506", "PC0511", "PC0512"], //상황
        isDecaf: false,
      },
    },

    {
      _id: await nextSeq("product"),
      seller_id: 2,
      price: 18900,
      show: true,
      active: true,
      name: "레몬 콤부차 50개입",
      quantity: 520,
      buyQuantity: 310,
      mainImages: [
        {
          url: `/files/sample-dog.jpg`,
          fileName: "sample-dog.jpg",
          orgName: "레몬 콤부차 50개입.jpg",
        },
      ],
      content: `
        <div class="product-detail">
          <p>상큼한 레몬과 톡 쏘는 탄산이 만나 탄생한 마시는 다이어트</p>
        </div>`,
      createdAt: getTime(-41, -60 * 60 * 2),
      updatedAt: getTime(-40, -60 * 15),
      extra: {
        isNew: false,
        isBest: false,
        pack: ["PC0103"], // 형태
        teaType: ["PC0306"], // 종류
        taste: ["PC0401", "PC0402", "PC0403"], // 맛
        hashTag: ["PC0503", "PC0509"], //상황
        isDecaf: false,
      },
    },

    {
      _id: await nextSeq("product"),
      seller_id: 2,
      price: 29800,
      show: true,
      active: true,
      name: "한모금 크리스마스 에디션 세트",
      quantity: 400,
      buyQuantity: 310,
      mainImages: [
        {
          url: `/files/sample-dog.jpg`,
          fileName: "sample-dog.jpg",
          orgName: "한모금 크리스마스 에디션 세트.jpg",
        },
      ],
      content: `
        <div class="product-detail">
          <p>한모금 상품 상세 설명</p>
        </div>`,
      createdAt: getTime(-41, -60 * 60 * 2),
      updatedAt: getTime(-40, -60 * 15),
      extra: {
        isNew: false,
        isBest: false,
        pack: ["PC0101"], // 형태
        teaType: ["PC0306"], // 종류
        taste: ["PC0401", "PC0403", "PC0407"], // 맛
        hashTag: ["PC0509", "PC0508"], //상황
        isDecaf: false,
      },
    },
    {
      _id: await nextSeq("product"),
      seller_id: 2,
      price: 14000,
      show: true,
      active: true,
      name: "봄 하루 한 잎 벚꽃",
      quantity: 320,
      buyQuantity: 310,
      mainImages: [
        {
          url: `/files/sample-dog.jpg`,
          fileName: "sample-dog.jpg",
          orgName: "봄 하루 한 잎 벚꽃.jpg",
        },
      ],
      content: `
        <div class="product-detail">
          <p>하루 한 잔 벚꽃 잎으로 향기로운 일상을</p>
        </div>`,
      createdAt: getTime(-41, -60 * 60 * 2),
      updatedAt: getTime(-40, -60 * 15),
      extra: {
        isNew: false,
        isBest: false,
        pack: ["PC0101"], // 형태
        teaType: ["PC0307"], // 종류
        taste: ["PC0407", "PC0405"], // 맛
        hashTag: ["PC0511", "PC0509", "PC0507"], //상황
        isDecaf: false,
      },
    },
    {
      _id: await nextSeq("product"),
      seller_id: 2,
      price: 6800,
      show: true,
      active: true,
      name: "한잎 어린 제주녹차",
      quantity: 520,
      buyQuantity: 400,
      mainImages: [
        {
          url: `/files/sample-dog.jpg`,
          fileName: "sample-dog.jpg",
          orgName: "한잎 어린 제주녹차.jpg",
        },
      ],
      content: `
		<div class="product-detail">
			<p>제주 바람 맞고 큰 한잎 어린 제주녹차입니다.</p>
		</div>`,
      createdAt: getTime(-41, -60 * 60 * 2),
      updatedAt: getTime(-40, -60 * 15),
      extra: {
        isNew: false,
        isBest: false,
        pack: ["PC0102"], // 형태
        teaType: ["PC0302"], // 종류
        taste: ["PC0406", "PC0405"], // 맛
        hashTag: ["PC0507", "PC0502"], //상황
        isDecaf: false,
      },
    },
    {
      _id: await nextSeq("product"),
      seller_id: 2,
      price: 16400,
      show: true,
      active: true,
      name: "크리스마스 플래티넘 블랙티",
      quantity: 103,
      buyQuantity: 101,
      mainImages: [
        {
          url: `/files/sample-dog.jpg`,
          fileName: "sample-dog.jpg",
          orgName: "크리스마스 플래티넘 블랙티.jpg",
        },
      ],
      content: `
		<div class="product-detail">
			<p>크리스마스 플래티넘 블랙티 상품 상세 설명</p>
		</div>`,
      createdAt: getTime(-41, -60 * 60 * 2),
      updatedAt: getTime(-40, -60 * 15),
      extra: {
        isNew: false,
        isBest: false,
        pack: ["PC0102"], // 형태
        teaType: ["PC0301", "PC0303", "PC0302", "PC0305", "PC0306"], // 종류
        taste: ["PC0401", "PC0405"], // 맛
        hashTag: ["PC0508", "PC0509", "PC0510"], //상황
        isDecaf: false,
      },
    },
    {
      _id: await nextSeq("product"),
      seller_id: 2,
      price: 7800,
      show: true,
      active: true,
      name: "카모마일 한모금",
      quantity: 8010,
      buyQuantity: 8000,
      mainImages: [
        {
          url: `/files/sample-dog.jpg`,
          fileName: "sample-dog.jpg",
          orgName: "카모마일 한모금.jpg",
        },
      ],
      content: `
		<div class="product-detail">
			<p>한모금 베스트셀러, 카모마일 한모금 상품 상세 설명</p>
		</div>`,
      createdAt: getTime(-41, -60 * 60 * 2),
      updatedAt: getTime(-40, -60 * 15),
      extra: {
        isNew: false,
        isBest: true,
        pack: ["PC0101"], // 형태
        teaType: ["PC0303"], // 종류
        taste: ["PC0401", "PC0407"], // 맛
        hashTag: ["PC0511", "PC0512", "PC0513"], //상황
        isDecaf: true,
      },
    },
    {
      _id: await nextSeq("product"),
      seller_id: 2,
      price: 7800,
      show: true,
      active: true,
      name: "한모금 히비스커스 보틀",
      quantity: 8400,
      buyQuantity: 8000,
      mainImages: [
        {
          url: `/files/sample-dog.jpg`,
          fileName: "sample-dog.jpg",
          orgName: "한모금 히비스커스 보틀.jpg",
        },
      ],
      content: `
		<div class="product-detail">
			<p>한모금 베스트셀러, 카모마일 한모금 상품 상세 설명</p>
		</div>`,
      createdAt: getTime(-41, -60 * 60 * 2),
      updatedAt: getTime(-40, -60 * 15),
      extra: {
        isNew: false,
        isBest: true,
        pack: ["PC0101"], // 형태
        teaType: ["PC0303"], // 종류
        taste: ["PC0401", "PC0407"], // 맛
        hashTag: ["PC0519", "PC0512", "PC0513"], //상황
        isDecaf: true,
      },
    },
    {
      _id: await nextSeq("product"),
      seller_id: 2,
      price: 9400,
      show: true,
      active: true,
      name: "오랜시간 우려 낸 우롱티",
      quantity: 200,
      buyQuantity: 19,
      mainImages: [
        {
          url: `/files/sample-dog.jpg`,
          fileName: "sample-dog.jpg",
          orgName: "오랜시간 우려 낸 우롱티.jpg",
        },
      ],
      content: `
			<div class="product-detail">
				<p>오랜시간 우려낸 우롱티 상품 상세 설명</p>
			</div>`,
      createdAt: getTime(-41, -60 * 60 * 2),
      updatedAt: getTime(-40, -60 * 15),
      extra: {
        isNew: true,
        isBest: false,
        pack: ["PC0101"], // 형태
        teaType: ["PC0304"], // 종류
        taste: ["PC0406"], // 맛
        hashTag: ["PC0516", "PC0517", "PC0503"], //상황
        isDecaf: false,
      },
    },
    {
      _id: await nextSeq("product"),
      seller_id: 2,
      price: 16800,
      show: true,
      active: true,
      name: "얼그레이 애플베리",
      quantity: 320,
      buyQuantity: 310,
      mainImages: [
        {
          url: `/files/sample-dog.jpg`,
          fileName: "sample-dog.jpg",
          orgName: "얼그레이 애플베리.jpg",
        },
      ],
      content: `
			<div class="product-detail">
				<p>한모금 상품 상세 설명</p>
			</div>`,
      createdAt: getTime(-41, -60 * 60 * 2),
      updatedAt: getTime(-40, -60 * 15),
      extra: {
        isNew: false,
        isBest: false,
        pack: ["PC0101"], // 형태
        teaType: ["PC0306"], // 종류
        taste: ["PC0401", "PC0402"], // 맛
        hashTag: ["PC0514", "PC0515", "PC0511"], //상황
        isDecaf: false,
      },
    },
    {
      _id: await nextSeq("product"),
      seller_id: 2,
      price: 13000,
      show: true,
      active: true,
      name: "프리미엄 디카페인 얼그레이 티 20입",
      quantity: 100,
      buyQuantity: 20,
      mainImages: [
        {
          url: `/files/sample-dog.jpg`,
          fileName: "sample-dog.jpg",
          orgName: "프리미엄 디카페인 얼그레이 티 20입.jpg",
        },
      ],
      content: `
    <div class="product-detail">
      <p>프리미엄 디카페인 얼그레이 티 20입</p>
    </div>`,
      createdAt: getTime(-41, -60 * 60 * 2),
      updatedAt: getTime(-40, -60 * 15),
      extra: {
        isNew: false,
        isBest: true,
        pack: ["PC0101"], // 형태
        teaType: ["PC0301"], // 종류
        taste: ["PC0401"], // 맛
        hashTag: ["PC0505", "PC0506"], // 상황
        isDecaf: true,
      },
    },
    {
      _id: await nextSeq("product"),
      seller_id: 2,
      price: 15000,
      show: true,
      active: true,
      name: "국화차 티백 20입",
      quantity: 200,
      buyQuantity: 100,
      mainImages: [
        {
          url: `/files/sample-dog.jpg`,
          fileName: "sample-dog.jpg",
          orgName: "국화차 티백 20입.jpg",
        },
      ],
      content: `
    <div class="product-detail">
      <p>국화차 티백 20입</p>
    </div>`,
      createdAt: getTime(-41, -60 * 60 * 2),
      updatedAt: getTime(-40, -60 * 15),
      extra: {
        isNew: false,
        isBest: true,
        pack: ["PC0101"], // 형태
        teaType: ["PC0307"], // 종류
        taste: ["PC0402", "PC0406"], // 맛
        hashTag: ["PC0506"], // 상황
        isDecaf: false,
      },
    },
    {
      _id: await nextSeq("product"),
      seller_id: 2,
      price: 15000,
      show: true,
      active: true,
      name: "자스민 민트 블렌딩 티 티백 20입",
      quantity: 100,
      buyQuantity: 20,
      mainImages: [
        {
          url: `/files/sample-dog.jpg`,
          fileName: "sample-dog.jpg",
          orgName: "자스민 민트 블렌딩 티 티백 20입.jpg",
        },
      ],
      content: `
    <div class="product-detail">
      <p>자스민 민트 블렌딩 티 티백 20입</p>
    </div>`,
      createdAt: getTime(-41, -60 * 60 * 2),
      updatedAt: getTime(-40, -60 * 15),
      extra: {
        isNew: true,
        isBest: false,
        pack: ["PC0101"], // 형태
        teaType: ["PC0306"], // 종류
        taste: ["PC0403", "PC0406"], // 맛
        hashTag: ["PC0506", "PC0507"], // 상황
        isDecaf: false,
      },
    },
    {
      _id: await nextSeq("product"),
      seller_id: 2,
      price: 13000,
      show: true,
      active: true,
      name: "간편하게 먹는 유자 원액 400g",
      quantity: 320,
      buyQuantity: 310,
      mainImages: [
        {
          url: `/files/sample-dog.jpg`,
          fileName: "sample-dog.jpg",
          orgName: "간편하게 먹는 유자 원액 400g.jpg",
        },
      ],
      content: `
    <div class="product-detail">
      <p>간편하게 먹는 유자 원액 400g</p>
    </div>`,
      createdAt: getTime(-41, -60 * 60 * 2),
      updatedAt: getTime(-40, -60 * 15),
      extra: {
        isNew: false,
        isBest: true,
        pack: ["PC0104"], // 형태
        teaType: ["PC0308"], // 종류
        taste: ["PC0401"], // 맛
        hashTag: ["PC0501", "PC0506", "PC0518"], // 상황
        isDecaf: false,
      },
    },
    {
      _id: await nextSeq("product"),
      seller_id: 2,
      price: 15000,
      show: true,
      active: true,
      name: "나주 배로 만든 달콤한 꿀배 차 티백 20입",
      quantity: 100,
      buyQuantity: 5,
      mainImages: [
        {
          url: `/files/sample-dog.jpg`,
          fileName: "sample-dog.jpg",
          orgName: "나주 배로 만든 달콤한 꿀배 차 티백 20입.jpg",
        },
      ],
      content: `
    <div class="product-detail">
      <p>나주 배로 만든 달콤한 꿀배 차 티백 20입</p>
    </div>`,
      createdAt: getTime(-41, -60 * 60 * 2),
      updatedAt: getTime(-40, -60 * 15),
      extra: {
        isNew: true,
        isBest: false,
        pack: ["PC0101"], // 형태
        teaType: ["PC0308"], // 종류
        taste: ["PC0401"], // 맛
        hashTag: ["PC0501", "PC0518"], // 상황
        isDecaf: true,
      },
    },
    {
      _id: await nextSeq("product"),
      seller_id: 2,
      price: 20000,
      show: true,
      active: true,
      name: "건강이 쑥쑥! 쑥차 티백 30입",
      quantity: 200,
      buyQuantity: 180,
      mainImages: [
        {
          url: `/files/sample-dog.jpg`,
          fileName: "sample-dog.jpg",
          orgName: "건강이 쑥쑥! 쑥차 티백 30입.jpg",
        },
      ],
      content: `
    <div class="product-detail">
      <p>건강이 쑥쑥! 쑥차 티백 30입</p>
    </div>`,
      createdAt: getTime(-41, -60 * 60 * 2),
      updatedAt: getTime(-40, -60 * 15),
      extra: {
        isNew: false,
        isBest: true,
        pack: ["PC0101"], // 형태
        teaType: ["PC0303"], // 종류
        taste: ["PC0406", "PC0401"], // 맛
        hashTag: ["PC0502", "PC0511"], // 상황
        isDecaf: true,
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
        { sort: 1, code: "PC0401", value: "달콤한", parent: "PC04", depth: 2 },
        { sort: 2, code: "PC0402", value: "새콤한", parent: "PC04", depth: 2 },
        { sort: 3, code: "PC0403", value: "상쾌한", parent: "PC04", depth: 2 },
        { sort: 4, code: "PC0404", value: "상큼한", parent: "PC04", depth: 2 },
        { sort: 5, code: "PC0405", value: "씁쓸한", parent: "PC04", depth: 2 },
        { sort: 6, code: "PC0406", value: "고소한", parent: "PC04", depth: 2 },
        { sort: 7, code: "PC0407", value: "깔끔한", parent: "PC04", depth: 2 },
        {
          sort: 1,
          code: "PC0501",
          value: "겨울에_좋아요",
          parent: "PC05",
          depth: 2,
        },
        {
          sort: 2,
          code: "PC0502",
          value: "깔끔해요",
          parent: "PC05",
          depth: 2,
        },
        {
          sort: 3,
          code: "PC0503",
          value: "다이어트",
          parent: "PC05",
          depth: 2,
        },
        {
          sort: 4,
          code: "PC0504",
          value: "임산부에게_좋아요",
          parent: "PC05",
          depth: 2,
        },
        {
          sort: 5,
          code: "PC0505",
          value: "집중력_향상",
          parent: "PC05",
          depth: 2,
        },
        {
          sort: 6,
          code: "PC0506",
          value: "스트레스_해소",
          parent: "PC05",
          depth: 2,
        },
        {
          sort: 7,
          code: "PC0507",
          value: "입가심으로_좋아요",
          parent: "PC05",
          depth: 2,
        },
        {
          sort: 8,
          code: "PC0508",
          value: "크리스마스_에디션",
          parent: "PC05",
          depth: 2,
        },
        {
          sort: 9,
          code: "PC0509",
          value: "선물하기_좋아요",
          parent: "PC05",
          depth: 2,
        },
        {
          sort: 10,
          code: "PC0510",
          value: "라즈베리_초콜릿_향",
          parent: "PC05",
          depth: 2,
        },
        {
          sort: 11,
          code: "PC0511",
          value: "향긋해요",
          parent: "PC05",
          depth: 2,
        },
        {
          sort: 12,
          code: "PC0512",
          value: "잠들기전에_마시기_좋아요",
          parent: "PC05",
          depth: 2,
        },
        {
          sort: 13,
          code: "PC0513",
          value: "남녀노소_인기만점",
          parent: "PC05",
          depth: 2,
        },
        { sort: 14, code: "PC0514", value: "식전티", parent: "PC05", depth: 2 },
        {
          sort: 15,
          code: "PC0515",
          value: "소화에_좋아요",
          parent: "PC05",
          depth: 2,
        },
        { sort: 16, code: "PC0516", value: "냉침", parent: "PC05", depth: 2 },
        { sort: 17, code: "PC0517", value: "깊은맛", parent: "PC05", depth: 2 },
        {
          sort: 18,
          code: "PC0518",
          value: "감기_탈출",
          parent: "PC05",
          depth: 2,
        },
        {
          sort: 19,
          code: "PC0519",
          value: "숙취에_좋아요",
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
