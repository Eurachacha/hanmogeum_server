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
      name: "서비스관리자",
      phone: "01011112222",
      address: "서울시 강남구 역삼동 123",
      detailAddress: "",
      type: "admin",
      createdAt: getTime(-100, -60 * 60 * 3),
      updatedAt: getTime(-100, -60 * 60 * 3),
      extra: {},
    },
    {
      _id: await nextSeq("user"),
      email: "s1@market.com",
      password: "$2b$10$S.8GNMDyvUF0xzujPtHBu.j5gtS19.OhRmYbpJBnCHg2S83WLx1T2",
      name: "상품관리자",
      phone: "01022223333",
      address: "서울시 강남구 삼성동 456",
      detailAddress: "103동 111호",
      type: "seller",
      createdAt: getTime(-50),
      updatedAt: getTime(-30, -60 * 60 * 3),
      extra: {},
    },
    {
      _id: await nextSeq("user"),
      email: "u1@market.com",
      password: "$2b$10$S.8GNMDyvUF0xzujPtHBu.j5gtS19.OhRmYbpJBnCHg2S83WLx1T2",
      name: "한모금",
      phone: "01044445555",
      address: "서울시 강남구 논현동 222",
      detailAddress: "1층",
      type: "user",
      createdAt: getTime(-20, -60 * 30),
      updatedAt: getTime(-10, -60 * 60 * 12),
      extra: {},
    },
  ],
  // 상품
  product: [
    // 티백
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
      content: `<img style="display: block; vertical-align: top; margin: 0px auto; text-align: center;" result="success" name="E1848AE185AEE186A8E1848EE185A120E18490E185B5E18487E185A2E186A8_01.jpeg" size="1000px/5424px" filesize="2,97 MB" error src="https://magpie-and-tiger.com/web/upload/NNEditor/20231024/E1848AE185AEE186A8E1848EE185A120E18490E185B5E18487E185A2E186A8_01.jpeg" />`,
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
      content: `<img data-result="success" data-name="copy-1678104215-1.1_E18487E185A9E1848BE185B5E18489E185AEE186A8E1848EE185A120E18490E185B5E18487E185A2E186A8_1.png" data-size="1000px/3348px" data-filesize="2,28 MB" data-error style="display: block; vertical-align: top; margin: 0px auto; text-align: center;" src="https://img.29cm.co.kr/item/202310/11ee73cdb2e4732da5b3b9c33c12995c.jpeg" />`,
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
      content: `<img src="https://magpie-and-tiger.com/web/upload/NNEditor/20231101/ED98B8EBB095ECB0A820ED8BB0EBB0B120EC8381EC84B8ED8E98EC9DB4ECA780201.jpeg" />`,
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
      content: `<img data-result="success" data-name="1.3_E18492E185A9E1848CE185B5E1848EE185A120E18490E185B5E18487E185A2E186A8_1.png" data-size="1000px/3348px" data-filesize="2,29 MB" data-error style="display: block; vertical-align: top; margin: 0px auto; text-align: center;" src="https://magpie-and-tiger.com/web/upload/NNEditor/20230306/1.3_E18492E185A9E1848CE185B5E1848EE185A120E18490E185B5E18487E185A2E186A8_1.png" />`,
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
      content: `<img data-result="success" data-name="copy-1678104215-1.1_E18487E185A9E1848BE185B5E18489E185AEE186A8E1848EE185A120E18490E185B5E18487E185A2E186A8_1.png" data-size="1000px/3348px" data-filesize="2,28 MB" data-error style="display: block; vertical-align: top; margin: 0px auto; text-align: center;" src="https://magpie-and-tiger.com/web/upload/NNEditor/20230306/copy-1678104215-1.1_E18487E185A9E1848BE185B5E18489E185AEE186A8E1848EE185A120E18490E185B5E18487E185A2E186A8_1.png" />`,
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
    {
      _id: await nextSeq("product"),
      seller_id: 2,
      price: 13000,
      show: true,
      active: true,
      name: "메론우롱 20티백",
      quantity: 200,
      buyQuantity: 0,
      mainImages: [
        {
          url: `/files/110.png`,
          fileName: "110.png",
          orgName: "110.png",
        },
      ],
      content: `<img src="https://ai.esmplus.com/sktea00/ILSANGDAWAN_RENEW/melonoolong_1000.jpg">`,
      createdAt: getTime(-41, -60 * 60 * 2),
      updatedAt: getTime(-40, -60 * 15),
      extra: {
        isNew: false,
        isBest: false,
        pack: ["PC0101"], // 형태
        teaType: ["PC0304"], // 종류
        taste: ["PC0401", "PC0404"], // 맛
        hashTag: ["PC0524", "PC0505", "PC0517"], //상황
        isDecaf: false,
      },
    },
    {
      _id: await nextSeq("product"),
      seller_id: 2,
      price: 13000,
      show: true,
      active: true,
      name: "피치우롱 20티백",
      quantity: 200,
      buyQuantity: 0,
      mainImages: [
        {
          url: `/files/111.png`,
          fileName: "111.png",
          orgName: "111.png",
        },
      ],
      content: `<img src="https://gi.esmplus.com/sktea1129/ticlips/230110_Ticlips_PeachOolong_detail_1000.jpg">`,
      createdAt: getTime(-41, -60 * 60 * 2),
      updatedAt: getTime(-40, -60 * 15),
      extra: {
        isNew: false,
        isBest: false,
        pack: ["PC0101"], // 형태
        teaType: ["PC0304"], // 종류
        taste: ["PC0401", "PC0404"], // 맛
        hashTag: ["PC0524", "PC0508", "PC0517"], //상황
        isDecaf: false,
      },
    },
    {
      _id: await nextSeq("product"),
      seller_id: 2,
      price: 11700,
      show: true,
      active: true,
      name: "해피 체리블렌딩 5티백",
      quantity: 200,
      buyQuantity: 0,
      mainImages: [
        {
          url: `/files/112.png`,
          fileName: "112.png",
          orgName: "112.png",
        },
      ],
      content: `<img alt="" style="max-width: 100%" src="https://img.29cm.co.kr/item/202310/11ee6cc2f83c71b58a7fd500c88753d5.jpg">`,
      createdAt: getTime(-41, -60 * 60 * 2),
      updatedAt: getTime(-40, -60 * 15),
      extra: {
        isNew: false,
        isBest: false,
        pack: ["PC0101"], // 형태
        teaType: ["PC0308"], // 종류
        taste: ["PC0401"], // 맛
        hashTag: ["PC0524", "PC0508", "PC0517"], //상황
        isDecaf: true,
      },
    },
    {
      _id: await nextSeq("product"),
      seller_id: 2,
      price: 12900,
      show: true,
      active: true,
      name: "자스민 우롱 민트 블렌드 티백 10개입",
      quantity: 200,
      buyQuantity: 0,
      mainImages: [
        {
          url: `/files/113.png`,
          fileName: "113.png",
          orgName: "113.png",
        },
      ],
      content: `<img src="https://img.29cm.co.kr/next-product/2023/05/24/cb9dfb9768f54357b5a980c7a5d85c2e_20230524172529.jpg?width=1000" alt="포지티브 민티 우롱 티백" loading="lazy" class="css-1p5uzkj ekbeq0z2">`,
      createdAt: getTime(-41, -60 * 60 * 2),
      updatedAt: getTime(-40, -60 * 15),
      extra: {
        isNew: false,
        isBest: false,
        pack: ["PC0101"], // 형태
        teaType: ["PC0306"], // 종류
        taste: ["PC0405"], // 맛
        hashTag: ["PC0514", "PC0505", "PC0506", "PC0518"], //상황
        isDecaf: true,
      },
    },
    {
      _id: await nextSeq("product"),
      seller_id: 2,
      price: 12800,
      show: true,
      active: true,
      name: "시그니처 블랜딩 퍼플 8개입",
      quantity: 200,
      buyQuantity: 0,
      mainImages: [
        {
          url: `/files/114.png`,
          fileName: "114.png",
          orgName: "114.png",
        },
      ],
      content: `<img src="https://img.29cm.co.kr/next-product/2021/02/10/b55e680a19924b7e8fb2654f4a01a83e_20210210161429.jpg?width=1000" alt="" loading="lazy" class="css-1q6g1a1 ekbeq0z2">`,
      createdAt: getTime(-41, -60 * 60 * 2),
      updatedAt: getTime(-40, -60 * 15),
      extra: {
        isNew: false,
        isBest: false,
        pack: ["PC0101"], // 형태
        teaType: ["PC0301"], // 종류
        taste: ["PC0401"], // 맛
        hashTag: ["PC0510", "PC0502", "PC0503"], //상황
        isDecaf: true,
      },
    },
    {
      _id: await nextSeq("product"),
      seller_id: 2,
      price: 12800,
      show: true,
      active: true,
      name: "시그니처 블랜딩 서울의 달",
      quantity: 200,
      buyQuantity: 0,
      mainImages: [
        {
          url: `/files/115.png`,
          fileName: "115.png",
          orgName: "115.png",
        },
      ],
      content: `<img src="https://img.29cm.co.kr/next-product/2021/02/10/019ecccc983949e3a3cbaa0b7a571dd2_20210210160433.jpg?width=1000" alt="" loading="lazy" class="css-14tpv66 ekbeq0z2">`,
      createdAt: getTime(-41, -60 * 60 * 2),
      updatedAt: getTime(-40, -60 * 15),
      extra: {
        isNew: false,
        isBest: false,
        pack: ["PC0101"], // 형태
        teaType: ["PC0306"], // 종류
        taste: ["PC0403"], // 맛
        hashTag: ["PC0523", "PC0520", "PC0505"], //상황
        isDecaf: true,
      },
    },
    {
      _id: await nextSeq("product"),
      seller_id: 2,
      price: 45000,
      show: true,
      active: true,
      name: "백련홍련 연꽃차 ",
      quantity: 200,
      buyQuantity: 0,
      mainImages: [
        {
          url: `/files/116.png`,
          fileName: "116.png",
          orgName: "116.png",
        },
      ],
      content: `<img src="https://ai.esmplus.com/sktea00/ILSANGDAWAN_RENEW/leaf_tea_lotus_flower_1000.jpg">`,
      createdAt: getTime(-41, -60 * 60 * 2),
      updatedAt: getTime(-40, -60 * 15),
      extra: {
        isNew: false,
        isBest: false,
        pack: ["PC0101"], // 형태
        teaType: ["PC0307"], // 종류
        taste: ["PC0405"], // 맛
        hashTag: ["PC0514", "PC0518", "PC0519", "PC0520"], //상황
        isDecaf: true,
      },
    },
    {
      _id: await nextSeq("product"),
      seller_id: 2,
      price: 45000,
      show: true,
      active: true,
      name: "수국유자 12티백 ",
      quantity: 200,
      buyQuantity: 0,
      mainImages: [
        {
          url: `/files/117.png`,
          fileName: "117.png",
          orgName: "117.png",
        },
      ],
      content: `<img src="//gi.esmplus.com/sktea1129/product/1000/210824_eMart_TeaMasterCan_SweetCitron_1.jpg">`,
      createdAt: getTime(-41, -60 * 60 * 2),
      updatedAt: getTime(-40, -60 * 15),
      extra: {
        isNew: false,
        isBest: false,
        pack: ["PC0101"], // 형태
        teaType: ["PC0306"], // 종류
        taste: ["PC0401"], // 맛
        hashTag: ["PC0518", "PC0517", "PC0524"], //상황
        isDecaf: true,
      },
    },
    {
      _id: await nextSeq("product"),
      seller_id: 2,
      price: 8900,
      show: true,
      active: true,
      name: "루이보스 바닐라 10티백",
      quantity: 200,
      buyQuantity: 0,
      mainImages: [
        {
          url: `/files/118.png`,
          fileName: "118.png",
          orgName: "118.png",
        },
      ],
      content: `<img src="https://ai.esmplus.com/sktea00/product_detail/2023/homeplus_rooibos/vanilla/231019_homeplus_Rooibos_Vanilla_detail_1000_9.gif">`,
      createdAt: getTime(-41, -60 * 60 * 2),
      updatedAt: getTime(-40, -60 * 15),
      extra: {
        isNew: false,
        isBest: false,
        pack: ["PC0101"], // 형태
        teaType: ["PC0306"], // 종류
        taste: ["PC0401"], // 맛
        hashTag: ["PC0505", "PC0524", "PC0520"], //상황
        isDecaf: false,
      },
    },
    // 분말
    {
      _id: await nextSeq("product"),
      seller_id: 2,

      price: 17500,
      show: true,
      active: true,
      name: "쌉싸름한 제주 말차",
      quantity: 60,
      buyQuantity: 0,
      mainImages: [
        {
          url: "/files/300.png",
          fileName: "300.png",
          orgName: "300.png",
        },
      ],
      content: `<img src="https://img.29cm.co.kr/next-product/2022/03/31/3bd08a70bbe8404b9ca8702e3aacb5ae_20220331180421.jpg?width=1000" alt="" loading="lazy" class="css-1tenslb ekbeq0z2">`,
      createdAt: getTime(-41, -60 * 60 * 2),
      updatedAt: getTime(-40, -60 * 15),
      extra: {
        isNew: false,
        isBest: false,
        pack: ["PC0103"],
        teaType: ["PC0302"],
        taste: ["PC0403", "PC0405"],
        hashTag: ["PC0510", "PC0512"],
        isDecaf: false,
      },
    },
    {
      _id: await nextSeq("product"),
      seller_id: 2,

      price: 18800,
      show: true,
      active: true,
      name: "은은한 진피홍차",
      quantity: 400,
      buyQuantity: 0,
      mainImages: [
        {
          url: "/files/301.png",
          fileName: "301.png",
          orgName: "301.png",
        },
      ],
      content: `<img src="https://img.29cm.co.kr/next-product/2022/03/15/2ac4f729d8564766b3d3e83bd9726e42_20220315113142.jpg?width=1000" alt="" loading="lazy" class="css-1vj2ua9 ekbeq0z2">`,
      createdAt: getTime(-41, -60 * 60 * 2),
      updatedAt: getTime(-40, -60 * 15),
      extra: {
        isNew: false,
        isBest: false,
        pack: ["PC0103"],
        teaType: ["PC0301"],
        taste: ["PC0405"],
        hashTag: ["PC0514", "PC0506", "PC0503"],
        isDecaf: false,
      },
    },
    {
      _id: await nextSeq("product"),
      seller_id: 2,

      price: 18400,
      show: true,
      active: true,
      name: "고소한 제주 호지차",
      quantity: 100,
      buyQuantity: 0,
      mainImages: [
        {
          url: "/files/302.png",
          fileName: "302.png",
          orgName: "302.png",
        },
      ],
      content: `<img src="https://img.29cm.co.kr/next-product/2022/03/15/4a41c831ab89445684c218106d30c8d3_20220315130255.jpg?width=1000" alt="" loading="lazy" class="css-1vj2ua9 ekbeq0z2">`,
      createdAt: getTime(-41, -60 * 60 * 2),
      updatedAt: getTime(-40, -60 * 15),
      extra: {
        isNew: false,
        isBest: false,
        pack: ["PC0103"],
        teaType: ["PC0302"],
        taste: ["PC0404"],
        hashTag: ["PC0506", "PC0516"],
        isDecaf: false,
      },
    },
    {
      _id: await nextSeq("product"),
      seller_id: 2,

      price: 19000,
      show: true,
      active: true,
      name: "부드러운 제주 옥로차",
      quantity: 1200,
      buyQuantity: 1000,
      mainImages: [
        {
          url: "/files/303.png",
          fileName: "303.png",
          orgName: "303.png",
        },
      ],
      content: `<img src="https://img.29cm.co.kr/next-product/2022/03/15/260de90b811644a1b17bcfd8db21bc4e_20220315123411.jpg?width=1000" alt="" loading="lazy" class="css-vej7bd ekbeq0z2">`,
      createdAt: getTime(-41, -60 * 60 * 2),
      updatedAt: getTime(-40, -60 * 15),
      extra: {
        isNew: false,
        isBest: true,
        pack: ["PC0103"],
        teaType: ["PC0302"],
        taste: ["PC0403", "PC0405"],
        hashTag: ["PC0519", "PC0512"],
        isDecaf: false,
      },
    },
    {
      _id: await nextSeq("product"),
      seller_id: 2,
      price: 5300,
      show: true,
      active: true,
      name: "콤부차 차두",
      quantity: 200,
      buyQuantity: 0,
      mainImages: [
        {
          url: `/files/310.png`,
          fileName: "310.png",
          orgName: "310.png",
        },
      ],
      content: `
      <img src="https://gi.esmplus.com/sktea1129/product/1000/2023/230619_Online_Soodal_KombuchaPlum_detail_1000_11.jpg">`,
      createdAt: getTime(-41, -60 * 60 * 2),
      updatedAt: getTime(-40, -60 * 15),
      extra: {
        isNew: false,
        isBest: false,
        pack: ["PC0103"], // 형태
        teaType: ["PC0306"], // 종류
        taste: ["PC0402", "PC0401"], // 맛
        hashTag: ["PC0506", "PC0504", "PC0524"], //상황
        isDecaf: false,
      },
    },
    {
      _id: await nextSeq("product"),
      seller_id: 2,
      price: 5300,
      show: true,
      active: true,
      name: "콤부차 레몬",
      quantity: 200,
      buyQuantity: 0,
      mainImages: [
        {
          url: `/files/311.png`,
          fileName: "311.png",
          orgName: "311.png",
        },
      ],
      content: `<img src="https://gi.esmplus.com/sktea1129/product/1000/2023/230619_Online_Soodal_KombuchaLemon_detail_1000_11.jpg">`,
      createdAt: getTime(-41, -60 * 60 * 2),
      updatedAt: getTime(-40, -60 * 15),
      extra: {
        isNew: false,
        isBest: false,
        pack: ["PC0103"], // 형태
        teaType: ["PC0306"], // 종류
        taste: ["PC0402", "PC0401"], // 맛
        hashTag: ["PC0506", "PC0504", "PC0524"], //상황
        isDecaf: false,
      },
    },
    {
      _id: await nextSeq("product"),
      seller_id: 2,
      price: 34000,
      show: true,
      active: true,
      name: "신선한 제주 녹차 세작",
      quantity: 200,
      buyQuantity: 0,
      mainImages: [
        {
          url: `/files/312.png`,
          fileName: "312.png",
          orgName: "312.png",
        },
      ],
      content: `<img src="https://img.29cm.co.kr/next-product/2022/03/15/945e2a0e90ad472fa98ebfd107ba7441_20220315124003.jpg?width=1000" alt="" loading="lazy" class="css-1vj2ua9 ekbeq0z2">`,
      createdAt: getTime(-41, -60 * 60 * 2),
      updatedAt: getTime(-40, -60 * 15),
      extra: {
        isNew: false,
        isBest: false,
        pack: ["PC0103"], // 형태
        teaType: ["PC0302"], // 종류
        taste: ["PC0403"], // 맛
        hashTag: ["PC0506", "PC0514"], //상황
        isDecaf: false,
      },
    },
    {
      _id: await nextSeq("product"),
      seller_id: 2,
      price: 45000,
      show: true,
      active: true,
      name: "향긋한 제주홍차",
      quantity: 200,
      buyQuantity: 0,
      mainImages: [
        {
          url: `/files/313.png`,
          fileName: "313.png",
          orgName: "312.png",
        },
      ],
      content: `<img src="https://img.29cm.co.kr/next-product/2022/03/15/c8333b372bbe4dc08a5c5eae764cf7ae_20220315111021.jpg?width=1000" alt="" loading="lazy" class="css-1vj2ua9 ekbeq0z2">`,
      createdAt: getTime(-41, -60 * 60 * 2),
      updatedAt: getTime(-40, -60 * 15),
      extra: {
        isNew: false,
        isBest: false,
        pack: ["PC0103"], // 형태
        teaType: ["PC0301"], // 종류314
        taste: ["PC0405"], // 맛
        hashTag: ["PC0516", "PC0512", "PC0523"], //상황
        isDecaf: false,
      },
    },
    {
      _id: await nextSeq("product"),
      seller_id: 2,
      price: 20000,
      show: true,
      active: true,
      name: "시나몬 프레소",
      quantity: 200,
      buyQuantity: 0,
      mainImages: [
        {
          url: `/files/314.png`,
          fileName: "314.png",
          orgName: "314.png",
        },
      ],
      content: `<img alt="" style="max-width: 100%" src="https://img.29cm.co.kr/item/202309/11ee4ef008947b1ba5b32f79f31a8d51.png">`,
      createdAt: getTime(-41, -60 * 60 * 2),
      updatedAt: getTime(-40, -60 * 15),
      extra: {
        isNew: false,
        isBest: false,
        pack: ["PC0103"], // 형태
        teaType: ["PC0308"], // 종류
        taste: ["PC0401", "PC0403"], // 맛
        hashTag: ["PC0502", "PC0508", "PC0524"], //상황
        isDecaf: false,
      },
    },
    {
      _id: await nextSeq("product"),
      seller_id: 2,
      price: 32000,
      show: true,
      active: true,
      name: "유기농 쑥말차",
      quantity: 200,
      buyQuantity: 0,
      mainImages: [
        {
          url: `/files/315.png`,
          fileName: "315.png",
          orgName: "314.png",
        },
      ],
      content: `<img src="https://img.29cm.co.kr/next-product/2021/11/16/e00138aec7c047718026c61722dfa3d5_20211116162236.jpg?width=1000" alt="" loading="lazy" class="css-5ql586 ekbeq0z2">`,
      createdAt: getTime(-41, -60 * 60 * 2),
      updatedAt: getTime(-40, -60 * 15),
      extra: {
        isNew: false,
        isBest: false,
        pack: ["PC0103"], // 형태
        teaType: ["PC0302"], // 종류
        taste: ["PC0403"], // 맛
        hashTag: ["PC0506", "PC0512", "PC0511"], //상황
        isDecaf: false,
      },
    },

    // 액상
    {
      _id: await nextSeq("product"),
      seller_id: 2,

      price: 16500,
      show: true,
      active: true,
      name: "제로 아쌈 밀크티베이스",
      quantity: 1200,
      buyQuantity: 1000,
      mainImages: [
        {
          url: "/files/400.png",
          fileName: "400.png",
          orgName: "400.png",
        },
      ],
      content: `<img src="https://gi.esmplus.com/witchkitch/d_zero_3earlgrey.gif">`,
      createdAt: getTime(-41, -60 * 60 * 2),
      updatedAt: getTime(-40, -60 * 15),
      extra: {
        isNew: false,
        isBest: true,
        pack: ["PC0104"],
        teaType: ["PC0301", "PC0404"],
        taste: ["PC0401"],
        hashTag: ["PC0503", "PC0519", "PC0521"],
        isDecaf: false,
      },
    },
    {
      _id: await nextSeq("product"),
      seller_id: 2,

      price: 18000,
      show: true,
      active: true,
      name: "마살라차이 밀크티베이스",
      quantity: 400,
      buyQuantity: 0,
      mainImages: [
        {
          url: "/files/401.png",
          fileName: "401.png",
          orgName: "401.png",
        },
      ],
      content: `<img src="//gi.esmplus.com/witchkitch/d_masala6.jpg">`,
      createdAt: getTime(-41, -60 * 60 * 2),
      updatedAt: getTime(-40, -60 * 15),
      extra: {
        isNew: false,
        isBest: false,
        pack: ["PC0104"],
        teaType: ["PC0301"],
        taste: ["PC0401"],
        hashTag: ["PC0516", "PC0518"],
        isDecaf: false,
      },
    },
    {
      _id: await nextSeq("product"),
      seller_id: 2,
      price: 48000,
      show: true,
      active: true,
      name: "한밤의 밀크티 스페셜",
      quantity: 1400,
      buyQuantity: 1000,
      mainImages: [
        {
          url: "/files/402.png",
          fileName: "402.png",
          orgName: "402.png",
        },
      ],
      content: `<img src="https://gi.esmplus.com/witchkitch/--/%EC%97%90%EB%94%94%EC%85%98/%EB%B0%80%ED%81%AC%ED%8B%B0%EB%B6%81/d_%EB%B0%80%ED%81%AC%ED%8B%B0%EB%B6%815.jpg">`,
      createdAt: getTime(-41, -60 * 60 * 2),
      updatedAt: getTime(-40, -60 * 15),
      extra: {
        isNew: false,
        isBest: true,
        pack: ["PC0104"],
        teaType: ["PC0301"],
        taste: ["PC0401", "PC0404", "PC0405"],
        hashTag: ["PC0502", "PC0505"],
        isDecaf: false,
      },
    },
    {
      _id: await nextSeq("product"),
      seller_id: 2,
      price: 36000,
      show: true,
      active: true,
      name: "허니플라워 액상 세트",
      quantity: 1400,
      buyQuantity: 1000,
      mainImages: [
        {
          url: "/files/403.png",
          fileName: "403.png",
          orgName: "403.png",
        },
      ],
      content: `<img src="//gi.esmplus.com/sktea1129/product/1000/210514_ILSANGDAWAN_Mini_8P_detail_1000_3.jpg">`,
      createdAt: getTime(-41, -60 * 60 * 2),
      updatedAt: getTime(-40, -60 * 15),
      extra: {
        isNew: false,
        isBest: true,
        pack: ["PC0104"],
        teaType: ["PC0308"],
        taste: ["PC0401", "PC0402"],
        hashTag: ["PC0502", "PC0505", "PC0517"],
        isDecaf: true,
      },
    },
    {
      _id: await nextSeq("product"),
      seller_id: 2,
      price: 18400,
      show: true,
      active: true,
      name: "제로 슈가 말차",
      quantity: 175,
      buyQuantity: 0,
      mainImages: [
        {
          url: `/files/410.png`,
          fileName: "410.png",
          orgName: "410.png",
        },
      ],
      content: `
		<img src="https://gi.esmplus.com/witchkitch/--/%EC%A0%9C%EB%A1%9C%EB%A7%90%EC%B0%A8/20g/story06.gif">`,
      createdAt: getTime(-41, -60 * 60 * 2),
      updatedAt: getTime(-40, -60 * 15),
      extra: {
        isNew: false,
        isBest: false,
        pack: ["PC0104"], // 형태
        teaType: ["PC0302"], // 종류
        taste: ["PC0401", "PC0403"], // 맛
        hashTag: ["PC0521", "PC0510"], //상황
        isDecaf: false,
      },
    },
    {
      _id: await nextSeq("product"),
      seller_id: 2,
      price: 20000,
      show: true,
      active: true,
      name: "허니플라워 오미자 청",
      quantity: 200,
      buyQuantity: 0,
      mainImages: [
        {
          url: `/files/411.png`,
          fileName: "411.png",
          orgName: "411.png",
        },
      ],
      content: `
		<img src="//gi.esmplus.com/sktea1129/product/new/200723_ILSANGDAWAN_Omija_detail_1000_4.jpg">`,
      createdAt: getTime(-41, -60 * 60 * 2),
      updatedAt: getTime(-40, -60 * 15),
      extra: {
        isNew: false,
        isBest: false,
        pack: ["PC0104"], // 형태
        teaType: ["PC0308"], // 종류
        taste: ["PC0401", "PC0402"], // 맛
        hashTag: ["PC0517", "PC0524", "PC0506"], //상황
        isDecaf: false,
      },
    },
    {
      _id: await nextSeq("product"),
      seller_id: 2,
      price: 20000,
      show: true,
      active: true,
      name: "숙성망고가 들어있는 패션망고청",
      quantity: 200,
      buyQuantity: 0,
      mainImages: [
        {
          url: `/files/412.png`,
          fileName: "412.png",
          orgName: "412.png",
        },
      ],
      content: `
		<img src="https://img.29cm.co.kr/next-product/2022/06/13/763e1e38809a441fbace8c6d293682e4_20220613133608.jpg?width=1000" alt="" loading="lazy" class="css-1ebzexv ekbeq0z2">`,
      createdAt: getTime(-41, -60 * 60 * 2),
      updatedAt: getTime(-40, -60 * 15),
      extra: {
        isNew: false,
        isBest: false,
        pack: ["PC0102"], // 형태
        teaType: ["PC0308"], // 종류
        taste: ["PC0401"], // 맛
        hashTag: ["PC0508", "PC0524", "PC0510"], //상황
        isDecaf: false,
      },
    },

    // 잎차
    {
      _id: await nextSeq("product"),
      seller_id: 2,
      price: 18000,
      show: true,
      active: true,
      name: "하동 쑥차 30g",
      quantity: 180,
      buyQuantity: 0,
      mainImages: [
        {
          url: `/files/200.png`,
          fileName: "200.png",
          orgName: "200.png",
        },
      ],
      content: `<img alt="" class="se-image-resource" src="https://shop-phinf.pstatic.net/20220224_90/16456749477841VUEU_PNG/2.03_ssuk_main_2.png">`,
      createdAt: getTime(-41, -60 * 60 * 2),
      updatedAt: getTime(-40, -60 * 15),
      extra: {
        isNew: false,
        isBest: false,
        pack: ["PC0102"], // 형태
        teaType: ["PC0303"], // 종류
        taste: ["PC0401", "PC0403"], // 맛
        hashTag: ["PC0501", "PC0503"], //상황
        isDecaf: true,
      },
    },
    {
      _id: await nextSeq("product"),
      seller_id: 2,
      price: 21000,
      show: true,
      active: true,
      name: "호박차 40g",
      quantity: 200,
      buyQuantity: 0,
      mainImages: [
        {
          url: `/files/201.png`,
          fileName: "201.png",
          orgName: "201.png",
        },
      ],
      content: `
      <img style="display: block; vertical-align: top; margin: 0px auto; text-align: center;" result="success" name="2.6_E18492E185A9E18487E185A1E186A8E1848EE185A1_02.jpeg" size="1000px/5288px" filesize="2,59 MB" error="" src="https://magpie-and-tiger.com/web/upload/NNEditor/20231215/2.6_E18492E185A9E18487E185A1E186A8E1848EE185A1_02.jpeg">`,
      createdAt: getTime(-41, -60 * 60 * 2),
      updatedAt: getTime(-40, -60 * 15),
      extra: {
        isNew: false,
        isBest: false,
        pack: ["PC0102"], // 형태
        teaType: ["PC0303"], // 종류
        taste: ["PC0401"], // 맛
        hashTag: ["PC0501", "PC0506"], //상황
        isDecaf: true,
      },
    },
    {
      _id: await nextSeq("product"),
      seller_id: 2,
      price: 13000,
      show: true,
      active: true,
      name: "호지차 30g",
      quantity: 320,
      buyQuantity: 0,
      mainImages: [
        {
          url: `/files/202.png`,
          fileName: "202.png",
          orgName: "202.png",
        },
      ],
      content: `
      <img style="display: block; vertical-align: top; margin: 0px auto; text-align: center;" result="success" name="2.620E18492E185A9E1848CE185B5E1848EE185A1_2.png" size="1000px/4866px" filesize="2,42 MB" error="" src="https://magpie-and-tiger.com/web/upload/NNEditor/20230627/2.620E18492E185A9E1848CE185B5E1848EE185A1_2.png">`,
      createdAt: getTime(-41, -60 * 60 * 2),
      updatedAt: getTime(-40, -60 * 15),
      extra: {
        isNew: false,
        isBest: false,
        pack: ["PC0102"], // 형태
        teaType: ["PC0302"], // 종류
        taste: ["PC0401", "PC0404"], // 맛
        hashTag: ["PC0513", "PC0515"], //상황
        isDecaf: false,
      },
    },
    {
      _id: await nextSeq("product"),
      seller_id: 2,
      price: 27000,
      show: true,
      active: true,
      name: "세작녹차 30g",
      quantity: 300,
      buyQuantity: 0,
      mainImages: [
        {
          url: `/files/203.png`,
          fileName: "203.png",
          orgName: "203.png",
        },
      ],
      content: `
      <img style="display: block; vertical-align: top; margin: 0px auto; text-align: center;" result="success" name="2.01_green_main_2.png" size="1000px/4866px" filesize="2,23 MB" error="" src="https://magpie-and-tiger.com/web/upload/NNEditor/20230426/2.01_green_main_2.png">`,
      createdAt: getTime(-41, -60 * 60 * 2),
      updatedAt: getTime(-40, -60 * 15),
      extra: {
        isNew: false,
        isBest: false,
        pack: ["PC0102"], // 형태
        teaType: ["PC0302"], // 종류
        taste: ["PC0401", "PC0404"], // 맛
        hashTag: ["PC0517", "PC0518", "PC0513"], //상황
        isDecaf: false,
      },
    },
    {
      _id: await nextSeq("product"),
      seller_id: 2,
      price: 20000,
      show: true,
      active: true,
      name: "목련현미녹차 40g",
      quantity: 200,
      buyQuantity: 0,
      mainImages: [
        {
          url: `/files/204.png`,
          fileName: "204.png",
          orgName: "204.png",
        },
      ],
      content: `
      <img alt="" class="se-image-resource" src="https://shop-phinf.pstatic.net/20220224_103/16456637303184n6o6_PNG/3.1_mhg_main_2.png">`,
      createdAt: getTime(-41, -60 * 60 * 2),
      updatedAt: getTime(-40, -60 * 15),
      extra: {
        isNew: false,
        isBest: false,
        pack: ["PC0102"], // 형태
        teaType: ["PC0302"], // 종류
        taste: ["PC0401", "PC0404"], // 맛
        hashTag: ["PC0514", "PC0517", "PC0520"], //상황
        isDecaf: false,
      },
    },
    {
      _id: await nextSeq("product"),
      seller_id: 2,
      price: 17000,
      show: true,
      active: true,
      name: "하동 우엉뿌리차 50g",
      quantity: 180,
      buyQuantity: 0,
      mainImages: [
        {
          url: `/files/205.png`,
          fileName: "205.png",
          orgName: "205.png",
        },
      ],
      content: `
      <img alt="" class="se-image-resource" src="https://shop-phinf.pstatic.net/20220224_92/16456644757540AMoC_PNG/2.5_woo_main_2.png">`,
      createdAt: getTime(-41, -60 * 60 * 2),
      updatedAt: getTime(-40, -60 * 15),
      extra: {
        isNew: false,
        isBest: false,
        pack: ["PC0102"], // 형태
        teaType: ["PC0303"], // 종류
        taste: ["PC0405"], // 맛
        hashTag: ["PC0511", "PC0514", "PC0522"], //상황
        isDecaf: true,
      },
    },
    {
      _id: await nextSeq("product"),
      seller_id: 2,
      price: 18000,
      show: true,
      active: true,
      name: "운남 홍차 - 연미 30g",
      quantity: 175,
      buyQuantity: 0,
      mainImages: [
        {
          url: `/files/206.png`,
          fileName: "206.png",
          orgName: "206.png",
        },
      ],
      content: `
      <img alt="" class="se-image-resource" src="https://shop-phinf.pstatic.net/20220224_141/1645665526061jxgw9_PNG/1.05_smoky_main_2.png">`,
      createdAt: getTime(-41, -60 * 60 * 2),
      updatedAt: getTime(-40, -60 * 15),
      extra: {
        isNew: false,
        isBest: false,
        pack: ["PC0102"], // 형태
        teaType: ["PC0301"], // 종류
        taste: ["PC0401", "PC0402"], // 맛
        hashTag: ["PC0523"], //상황
        isDecaf: false,
      },
    },
    {
      _id: await nextSeq("product"),
      seller_id: 2,
      price: 25000,
      show: true,
      active: true,
      name: "경매 보이생차 30g",
      quantity: 120,
      buyQuantity: 0,
      mainImages: [
        {
          url: `/files/207.png`,
          fileName: "207.png",
          orgName: "207.png",
        },
      ],
      content: `
      <img alt="" class="se-image-resource" src="https://shop-phinf.pstatic.net/20220224_129/1645665165608eEapk_PNG/1.02_rawpuer_main_2.png">`,
      createdAt: getTime(-41, -60 * 60 * 2),
      updatedAt: getTime(-40, -60 * 15),
      extra: {
        isNew: false,
        isBest: false,
        pack: ["PC0102"], // 형태
        teaType: ["PC0305"], // 종류
        taste: ["PC0401", "PC0403"], // 맛
        hashTag: ["PC0505", "PC0524"], //상황
        isDecaf: false,
      },
    },
    {
      _id: await nextSeq("product"),
      seller_id: 2,
      price: 21000,
      show: true,
      active: true,
      name: "가을 향 루이보스",
      quantity: 200,
      buyQuantity: 0,
      mainImages: [
        {
          url: `/files/210.png`,
          fileName: "210.png",
          orgName: "210.png",
        },
      ],
      content: `<img src="https://img.29cm.co.kr/next-product/2022/08/09/7f42c4879a69426791c3e9b6c429cfbc_20220809134945.png?width=1000" alt="" loading="lazy" class="css-1tl5v1p ekbeq0z2">`,
      createdAt: getTime(-41, -60 * 60 * 2),
      updatedAt: getTime(-40, -60 * 15),
      extra: {
        isNew: false,
        isBest: false,
        pack: ["PC0102"], // 형태
        teaType: ["PC0306"], // 종류
        taste: ["PC0405", "PC0402"], // 맛
        hashTag: ["PC0509", "PC0514", "PC0524", "PC0505"], //상황
        isDecaf: true,
      },
    },
    {
      _id: await nextSeq("product"),
      seller_id: 2,
      price: 15200,
      show: true,
      active: true,
      name: "보이차 다도 선물세트",
      quantity: 200,
      buyQuantity: 0,
      mainImages: [
        {
          url: `/files/211.png`,
          fileName: "211.png",
          orgName: "211.png",
        },
      ],
      content: `<img alt="" style="max-width: 100%" src="https://img.29cm.co.kr/item/202310/11ee724218c2792983bc45a266098679.jpg">`,
      createdAt: getTime(-41, -60 * 60 * 2),
      updatedAt: getTime(-40, -60 * 15),
      extra: {
        isNew: false,
        isBest: false,
        pack: ["PC0102"], // 형태
        teaType: ["PC0305"], // 종류
        taste: ["PC0404", "PC0405"], // 맛
        hashTag: ["PC0502", "PC0512", "PC0523"], //상황
        isDecaf: false,
      },
    },
    {
      _id: await nextSeq("product"),
      seller_id: 2,
      price: 36000,
      show: true,
      active: true,
      name: "로즈 블렌딩 티",
      quantity: 200,
      buyQuantity: 0,
      mainImages: [
        {
          url: `/files/212.png`,
          fileName: "212.png",
          orgName: "212.png",
        },
      ],
      content: `<img src="https://img.29cm.co.kr/next-product/2021/07/15/8b137b0a99614ca79486ef2ac99e078b_20210715105041.png?width=1000" alt="" loading="lazy" class="css-1oh8ngj ekbeq0z2">`,
      createdAt: getTime(-41, -60 * 60 * 2),
      updatedAt: getTime(-40, -60 * 15),
      extra: {
        isNew: false,
        isBest: false,
        pack: ["PC0102"], // 형태
        teaType: ["PC0306"], // 종류
        taste: ["PC0405"], // 맛
        hashTag: ["PC0514", "PC0505", "PC0518"], //상황
        isDecaf: false,
      },
    },
    {
      _id: await nextSeq("product"),
      seller_id: 2,
      price: 14000,
      show: true,
      active: true,
      name: "그린 루이보스",
      quantity: 200,
      buyQuantity: 0,
      mainImages: [
        {
          url: `/files/213.png`,
          fileName: "213.png",
          orgName: "213.png",
        },
      ],
      content: `<img src="https://img.29cm.co.kr/next-product/2022/09/14/eff394f84b3c4ffdadafd7bebde5790e_20220914132813.jpg?width=1000" alt="" loading="lazy" class="css-1uqzbxw ekbeq0z2">`,
      createdAt: getTime(-41, -60 * 60 * 2),
      updatedAt: getTime(-40, -60 * 15),
      extra: {
        isNew: false,
        isBest: false,
        pack: ["PC0102"], // 형태
        teaType: ["PC0306"], // 종류
        taste: ["PC0405"], // 맛
        hashTag: ["PC0506", "PC0517", "PC0520"], //상황
        isDecaf: true,
      },
    },
    {
      _id: await nextSeq("product"),
      seller_id: 2,
      price: 39000,
      show: true,
      active: true,
      name: "매화 우롱차",
      quantity: 200,
      buyQuantity: 0,
      mainImages: [
        {
          url: `/files/214.png`,
          fileName: "214.png",
          orgName: "214.png",
        },
      ],
      content: `<img src="https://img.29cm.co.kr/next-product/2020/09/08/f9b94507be474a92a5c6227589ae06e1_20200908143640.jpg?width=1000" alt="" loading="lazy" class="css-1yau91r ekbeq0z2">`,
      createdAt: getTime(-41, -60 * 60 * 2),
      updatedAt: getTime(-40, -60 * 15),
      extra: {
        isNew: false,
        isBest: false,
        pack: ["PC0102"], // 형태
        teaType: ["PC0304"], // 종류
        taste: ["PC0403"], // 맛
        hashTag: ["PC0512", "PC0505", "PC0516"], //상황
        isDecaf: false,
      },
    },
    {
      _id: await nextSeq("product"),
      seller_id: 2,
      price: 28000,
      show: true,
      active: true,
      name: "금잔화 꽃차",
      quantity: 200,
      buyQuantity: 0,
      mainImages: [
        {
          url: `/files/215.png`,
          fileName: "215.png",
          orgName: "215.png",
        },
      ],
      content: `<img src="//gi.esmplus.com/sktea1129/product/new/sk_cl_n02_02.jpg">`,
      createdAt: getTime(-41, -60 * 60 * 2),
      updatedAt: getTime(-40, -60 * 15),
      extra: {
        isNew: false,
        isBest: false,
        pack: ["PC0102"], // 형태
        teaType: ["PC0307"], // 종류
        taste: ["PC0405"], // 맛
        hashTag: ["PC0518", "PC0520", "PC0514"], //상황
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
          quantity: 1,
          seller_id: 2,
          name: "경매 보이생차 30g",
          image: "/files/207.png",
          price: 25000,
          extra: {
            isNew: false,
            isBest: false,
            pack: ["PC0102"], // 형태
            teaType: ["PC0305"], // 종류
            taste: ["PC0401", "PC0403"], // 맛
            hashTag: ["PC0505", "PC0524"], //상황
            isDecaf: false,
          },
        },
      ],
      cost: {
        products: 25000,
        shippingFees: 3500,
        discount: {
          products: 0,
          shippingFees: 0,
        },
        total: 28500,
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
