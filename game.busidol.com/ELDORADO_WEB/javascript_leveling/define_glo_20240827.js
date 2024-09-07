/*****************************************
	SERVER에 위치 하면서 엘도라도 CNM향
	레벨링을 조정하는 파일
	2016.02.04 제작 ywlee@busidol.com
******************************************/


/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
// STAGE DESIGN
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////

// var MAX_STAGE_NUM = 220;		//게임에서 사용하는 맵의 번호, 현재 100가지 임.
//20210222_yhlee 240스테이지 추가
var MAX_STAGE_NUM = 260; //게임에서 사용하는 맵의 번호

//20191119_yhlee 하드모드 추가
var MAX_STAGE_NUM_HARD = 200; //게임에서 사용하는 맵의 번호
var CUR_HARD_STAGE_NUM = -1; //현재 도전중이 하드모드 스테이지 번호
var HARD_MODE_JEWEL = ""; //하드모드에서 획득한 보석 정보
// var HARD_MODE_UP_NUM = 6;//노말모드에 비례하여 증가하는 수치 값  HP,AP만 증가합니다.  x6
//20200406_yhlee 하드모드 난이도 조정
// 20211119_dblee 하드모드 난이도 조정 5 > 4
var HARD_MODE_UP_NUM = 4; //노말모드에 비례하여 증가하는 수치 값  HP,AP만 증가합니다.  x6
var HARD_MODE_JEWEL_GET_PROBABILITY = ["", //하드모드에서 20스테이지 마다 보석 획득 확률
    50, //20스테이지에서 보석 획득확률
    45, //40스테이지에서 보석 획득확률
    40, //60스테이지에서 보석 획득확률
    35, //80스테이지에서 보석 획득확률
    30, //100스테이지에서 보석 획득확률
    25, //120스테이지에서 보석 획득확률
    20, //140스테이지에서 보석 획득확률
    15, //160스테이지에서 보석 획득확률
    10, //180스테이지에서 보석 획득확률
    10 //200스테이지에서 보석 획득확률     20200424_yhlee  5->10 로 상향
];
// CJH, HCN 코드
var REALTIME_NOTICE_ENABLE = false; // 2018.01.18 일단 실시간 공지 막음. CJH에서 PROXY 설정이 되면 true로 변경해야 함.

var STAGE_DESIGN = [{}, //연산편의를 위해 0번 배열은 사용하지 않음.
    //스테이지	//가장낮은레벨	//가장높은레벨	//마지막
    {
        num: 1,
        char_start: 1,
        char_end: 1,
        char_last: 1
    },
    {
        num: 2,
        char_start: 1,
        char_end: 1,
        char_last: 1
    },
    {
        num: 3,
        char_start: 1,
        char_end: 2,
        char_last: 2
    },
    {
        num: 4,
        char_start: 1,
        char_end: 3,
        char_last: 3
    },
    {
        num: 5,
        char_start: 1,
        char_end: 3,
        char_last: 3
    },
    {
        num: 6,
        char_start: 2,
        char_end: 4,
        char_last: 4
    },
    {
        num: 7,
        char_start: 3,
        char_end: 4,
        char_last: 4
    },
    {
        num: 8,
        char_start: 2,
        char_end: 5,
        char_last: 5
    },
    {
        num: 9,
        char_start: 3,
        char_end: 5,
        char_last: 5
    },
    {
        num: 10,
        char_start: 4,
        char_end: 5,
        char_last: 5
    },

    {
        num: 11,
        char_start: 2,
        char_end: 6,
        char_last: 5
    },
    {
        num: 12,
        char_start: 3,
        char_end: 6,
        char_last: 5
    },
    {
        num: 13,
        char_start: 3,
        char_end: 6,
        char_last: 6
    },
    {
        num: 14,
        char_start: 4,
        char_end: 6,
        char_last: 6
    },
    {
        num: 15,
        char_start: 5,
        char_end: 6,
        char_last: 6
    },
    {
        num: 16,
        char_start: 3,
        char_end: 7,
        char_last: 7
    },
    {
        num: 17,
        char_start: 3,
        char_end: 7,
        char_last: 7
    },
    {
        num: 18,
        char_start: 4,
        char_end: 7,
        char_last: 7
    },
    {
        num: 19,
        char_start: 5,
        char_end: 8,
        char_last: 8
    },
    {
        num: 20,
        char_start: 6,
        char_end: 8,
        char_last: 8
    },

    {
        num: 21,
        char_start: 8,
        char_end: 9,
        char_last: 9
    },
    {
        num: 22,
        char_start: 8,
        char_end: 9,
        char_last: 9
    },
    {
        num: 23,
        char_start: 7,
        char_end: 9,
        char_last: 9
    },
    {
        num: 24,
        char_start: 7,
        char_end: 9,
        char_last: 9
    },
    {
        num: 25,
        char_start: 8,
        char_end: 9,
        char_last: 9
    },
    {
        num: 26,
        char_start: 8,
        char_end: 10,
        char_last: 10
    },
    {
        num: 27,
        char_start: 8,
        char_end: 10,
        char_last: 10
    },
    {
        num: 28,
        char_start: 8,
        char_end: 10,
        char_last: 10
    },
    {
        num: 29,
        char_start: 9,
        char_end: 10,
        char_last: 10
    },
    {
        num: 30,
        char_start: 9,
        char_end: 10,
        char_last: 10
    },

    {
        num: 31,
        char_start: 8,
        char_end: 11,
        char_last: 11
    },
    {
        num: 32,
        char_start: 8,
        char_end: 11,
        char_last: 11
    },
    {
        num: 33,
        char_start: 9,
        char_end: 11,
        char_last: 11
    },
    {
        num: 34,
        char_start: 9,
        char_end: 11,
        char_last: 11
    },
    {
        num: 35,
        char_start: 10,
        char_end: 11,
        char_last: 11
    },
    {
        num: 36,
        char_start: 9,
        char_end: 12,
        char_last: 12
    },
    {
        num: 37,
        char_start: 9,
        char_end: 12,
        char_last: 12
    },
    {
        num: 38,
        char_start: 10,
        char_end: 12,
        char_last: 12
    },
    {
        num: 39,
        char_start: 10,
        char_end: 12,
        char_last: 12
    },
    {
        num: 40,
        char_start: 11,
        char_end: 12,
        char_last: 12
    },

    {
        num: 41,
        char_start: 10,
        char_end: 13,
        char_last: 13
    },
    {
        num: 42,
        char_start: 10,
        char_end: 13,
        char_last: 13
    },
    {
        num: 43,
        char_start: 11,
        char_end: 13,
        char_last: 13
    },
    {
        num: 44,
        char_start: 11,
        char_end: 13,
        char_last: 13
    },
    {
        num: 45,
        char_start: 11,
        char_end: 14,
        char_last: 14
    },
    {
        num: 46,
        char_start: 11,
        char_end: 14,
        char_last: 14
    },
    {
        num: 47,
        char_start: 12,
        char_end: 14,
        char_last: 14
    },
    {
        num: 48,
        char_start: 12,
        char_end: 14,
        char_last: 14
    },
    {
        num: 49,
        char_start: 13,
        char_end: 15,
        char_last: 15
    },
    {
        num: 50,
        char_start: 13,
        char_end: 15,
        char_last: 15
    },

    {
        num: 51,
        char_start: 14,
        char_end: 15,
        char_last: 15
    },
    {
        num: 52,
        char_start: 14,
        char_end: 15,
        char_last: 15
    },
    {
        num: 53,
        char_start: 13,
        char_end: 16,
        char_last: 16
    },
    {
        num: 54,
        char_start: 13,
        char_end: 16,
        char_last: 16
    },
    {
        num: 55,
        char_start: 14,
        char_end: 16,
        char_last: 16
    },
    {
        num: 56,
        char_start: 15,
        char_end: 16,
        char_last: 16
    },
    {
        num: 57,
        char_start: 13,
        char_end: 17,
        char_last: 17
    },
    {
        num: 58,
        char_start: 14,
        char_end: 17,
        char_last: 17
    },
    {
        num: 59,
        char_start: 15,
        char_end: 17,
        char_last: 17
    },
    {
        num: 60,
        char_start: 16,
        char_end: 17,
        char_last: 17
    },

    {
        num: 61,
        char_start: 15,
        char_end: 18,
        char_last: 18
    },
    {
        num: 62,
        char_start: 15,
        char_end: 18,
        char_last: 18
    },
    {
        num: 63,
        char_start: 16,
        char_end: 18,
        char_last: 18
    },
    {
        num: 64,
        char_start: 16,
        char_end: 18,
        char_last: 18
    },
    {
        num: 65,
        char_start: 16,
        char_end: 19,
        char_last: 19
    },
    {
        num: 66,
        char_start: 17,
        char_end: 19,
        char_last: 19
    },
    {
        num: 67,
        char_start: 17,
        char_end: 19,
        char_last: 19
    },
    {
        num: 68,
        char_start: 17,
        char_end: 20,
        char_last: 20
    },
    {
        num: 69,
        char_start: 18,
        char_end: 20,
        char_last: 20
    },
    {
        num: 70,
        char_start: 18,
        char_end: 20,
        char_last: 20
    },

    {
        num: 71,
        char_start: 19,
        char_end: 20,
        char_last: 20
    },
    {
        num: 72,
        char_start: 18,
        char_end: 21,
        char_last: 21
    },
    {
        num: 73,
        char_start: 19,
        char_end: 21,
        char_last: 21
    },
    {
        num: 74,
        char_start: 20,
        char_end: 21,
        char_last: 21
    },
    {
        num: 75,
        char_start: 19,
        char_end: 22,
        char_last: 22
    },
    {
        num: 76,
        char_start: 20,
        char_end: 22,
        char_last: 22
    },
    {
        num: 77,
        char_start: 21,
        char_end: 22,
        char_last: 22
    },
    {
        num: 78,
        char_start: 20,
        char_end: 23,
        char_last: 23
    },
    {
        num: 79,
        char_start: 21,
        char_end: 23,
        char_last: 23
    },
    {
        num: 80,
        char_start: 22,
        char_end: 23,
        char_last: 23
    },

    {
        num: 81,
        char_start: 22,
        char_end: 24,
        char_last: 24
    },
    {
        num: 82,
        char_start: 22,
        char_end: 24,
        char_last: 24
    },
    {
        num: 83,
        char_start: 23,
        char_end: 25,
        char_last: 25
    },
    {
        num: 84,
        char_start: 24,
        char_end: 25,
        char_last: 24
    },
    {
        num: 85,
        char_start: 24,
        char_end: 25,
        char_last: 25
    },
    {
        num: 86,
        char_start: 24,
        char_end: 26,
        char_last: 26
    },
    {
        num: 87,
        char_start: 25,
        char_end: 26,
        char_last: 25
    },
    {
        num: 88,
        char_start: 25,
        char_end: 26,
        char_last: 26
    },
    {
        num: 89,
        char_start: 25,
        char_end: 27,
        char_last: 27
    },
    {
        num: 90,
        char_start: 26,
        char_end: 27,
        char_last: 27
    },

    {
        num: 91,
        char_start: 25,
        char_end: 27,
        char_last: 27
    },
    {
        num: 92,
        char_start: 26,
        char_end: 28,
        char_last: 28
    },
    {
        num: 93,
        char_start: 26,
        char_end: 28,
        char_last: 28
    },
    {
        num: 94,
        char_start: 27,
        char_end: 28,
        char_last: 28
    },
    {
        num: 95,
        char_start: 27,
        char_end: 29,
        char_last: 29
    },
    {
        num: 96,
        char_start: 26,
        char_end: 29,
        char_last: 29
    },
    {
        num: 97,
        char_start: 26,
        char_end: 29,
        char_last: 29
    },
    {
        num: 98,
        char_start: 27,
        char_end: 30,
        char_last: 30
    },
    {
        num: 99,
        char_start: 28,
        char_end: 30,
        char_last: 29
    },
    {
        num: 100,
        char_start: 29,
        char_end: 30,
        char_last: 30
    },

    //101~200 stage 추가 ywlee_20160709
    {
        num: 101,
        char_start: 31,
        char_end: 31,
        char_last: 31
    },
    {
        num: 102,
        char_start: 31,
        char_end: 31,
        char_last: 31
    },
    {
        num: 103,
        char_start: 31,
        char_end: 32,
        char_last: 32
    },
    {
        num: 104,
        char_start: 31,
        char_end: 33,
        char_last: 33
    },
    {
        num: 105,
        char_start: 31,
        char_end: 33,
        char_last: 33
    },
    {
        num: 106,
        char_start: 32,
        char_end: 34,
        char_last: 34
    },
    {
        num: 107,
        char_start: 33,
        char_end: 34,
        char_last: 34
    },
    {
        num: 108,
        char_start: 32,
        char_end: 35,
        char_last: 35
    },
    {
        num: 109,
        char_start: 33,
        char_end: 35,
        char_last: 35
    },
    {
        num: 110,
        char_start: 34,
        char_end: 35,
        char_last: 35
    },

    {
        num: 111,
        char_start: 32,
        char_end: 36,
        char_last: 35
    },
    {
        num: 112,
        char_start: 33,
        char_end: 36,
        char_last: 35
    },
    {
        num: 113,
        char_start: 33,
        char_end: 36,
        char_last: 36
    },
    {
        num: 114,
        char_start: 34,
        char_end: 36,
        char_last: 36
    },
    {
        num: 115,
        char_start: 35,
        char_end: 36,
        char_last: 36
    },
    {
        num: 116,
        char_start: 33,
        char_end: 37,
        char_last: 37
    },
    {
        num: 117,
        char_start: 33,
        char_end: 37,
        char_last: 37
    },
    {
        num: 118,
        char_start: 34,
        char_end: 37,
        char_last: 37
    },
    {
        num: 119,
        char_start: 35,
        char_end: 38,
        char_last: 38
    },
    {
        num: 120,
        char_start: 36,
        char_end: 38,
        char_last: 38
    },

    {
        num: 121,
        char_start: 38,
        char_end: 39,
        char_last: 39
    },
    {
        num: 122,
        char_start: 38,
        char_end: 39,
        char_last: 39
    },
    {
        num: 123,
        char_start: 37,
        char_end: 39,
        char_last: 39
    },
    {
        num: 124,
        char_start: 37,
        char_end: 39,
        char_last: 39
    },
    {
        num: 125,
        char_start: 38,
        char_end: 39,
        char_last: 39
    },
    {
        num: 126,
        char_start: 38,
        char_end: 40,
        char_last: 40
    },
    {
        num: 127,
        char_start: 38,
        char_end: 40,
        char_last: 40
    },
    {
        num: 128,
        char_start: 38,
        char_end: 40,
        char_last: 40
    },
    {
        num: 129,
        char_start: 39,
        char_end: 40,
        char_last: 40
    },
    {
        num: 130,
        char_start: 39,
        char_end: 40,
        char_last: 40
    },

    {
        num: 131,
        char_start: 38,
        char_end: 41,
        char_last: 41
    },
    {
        num: 132,
        char_start: 38,
        char_end: 41,
        char_last: 41
    },
    {
        num: 133,
        char_start: 39,
        char_end: 41,
        char_last: 41
    },
    {
        num: 134,
        char_start: 39,
        char_end: 41,
        char_last: 41
    },
    {
        num: 135,
        char_start: 40,
        char_end: 41,
        char_last: 41
    },
    {
        num: 136,
        char_start: 39,
        char_end: 42,
        char_last: 42
    },
    {
        num: 137,
        char_start: 39,
        char_end: 42,
        char_last: 42
    },
    {
        num: 138,
        char_start: 40,
        char_end: 42,
        char_last: 42
    },
    {
        num: 139,
        char_start: 40,
        char_end: 42,
        char_last: 42
    },
    {
        num: 140,
        char_start: 41,
        char_end: 42,
        char_last: 42
    },

    {
        num: 141,
        char_start: 43,
        char_end: 43,
        char_last: 43
    },
    {
        num: 142,
        char_start: 40,
        char_end: 43,
        char_last: 43
    },
    {
        num: 143,
        char_start: 41,
        char_end: 43,
        char_last: 43
    },
    {
        num: 144,
        char_start: 41,
        char_end: 43,
        char_last: 43
    },
    {
        num: 145,
        char_start: 43,
        char_end: 44,
        char_last: 44
    },
    {
        num: 146,
        char_start: 43,
        char_end: 44,
        char_last: 44
    },
    {
        num: 147,
        char_start: 43,
        char_end: 44,
        char_last: 44
    },
    {
        num: 148,
        char_start: 44,
        char_end: 44,
        char_last: 44
    },
    {
        num: 149,
        char_start: 43,
        char_end: 45,
        char_last: 45
    },
    {
        num: 150,
        char_start: 44,
        char_end: 45,
        char_last: 45
    },

    {
        num: 151,
        char_start: 44,
        char_end: 45,
        char_last: 45
    },
    {
        num: 152,
        char_start: 45,
        char_end: 45,
        char_last: 45
    },
    {
        num: 153,
        char_start: 43,
        char_end: 46,
        char_last: 46
    },
    {
        num: 154,
        char_start: 43,
        char_end: 46,
        char_last: 46
    },
    {
        num: 155,
        char_start: 44,
        char_end: 46,
        char_last: 46
    },
    {
        num: 156,
        char_start: 45,
        char_end: 46,
        char_last: 46
    },
    {
        num: 157,
        char_start: 43,
        char_end: 47,
        char_last: 47
    },
    // {	num:158		,char_start:44	,char_end:47	,char_last:47 },
    {
        num: 158,
        char_start: 46,
        char_end: 47,
        char_last: 46
    }, //20220901_twkim... 157스테이지에 나온 신규몹 알림이 다시 159에서 뜸, char_end:46 로 되어있던것 수정
    {
        num: 159,
        char_start: 45,
        char_end: 47,
        char_last: 47
    },
    {
        num: 160,
        char_start: 46,
        char_end: 47,
        char_last: 47
    },

    {
        num: 161,
        char_start: 45,
        char_end: 48,
        char_last: 48
    },
    {
        num: 162,
        char_start: 46,
        char_end: 48,
        char_last: 48
    },
    {
        num: 163,
        char_start: 47,
        char_end: 47,
        char_last: 47
    },
    {
        num: 164,
        char_start: 47,
        char_end: 48,
        char_last: 48
    },
    {
        num: 165,
        char_start: 48,
        char_end: 48,
        char_last: 48
    }, //트롤만 등장

    {
        num: 166,
        char_start: 47,
        char_end: 49,
        char_last: 49
    },
    {
        num: 167,
        char_start: 48,
        char_end: 49,
        char_last: 49
    },
    {
        num: 168,
        char_start: 49,
        char_end: 49,
        char_last: 49
    }, //해골만 등장
    {
        num: 169,
        char_start: 48,
        char_end: 50,
        char_last: 50
    },
    {
        num: 170,
        char_start: 49,
        char_end: 50,
        char_last: 50
    },

    {
        num: 171,
        char_start: 47,
        char_end: 50,
        char_last: 50
    },
    {
        num: 172,
        char_start: 48,
        char_end: 50,
        char_last: 50
    },
    {
        num: 173,
        char_start: 49,
        char_end: 50,
        char_last: 50
    },
    {
        num: 174,
        char_start: 50,
        char_end: 51,
        char_last: 51
    },
    {
        num: 175,
        char_start: 51,
        char_end: 51,
        char_last: 51
    }, //해골2만 등장

    {
        num: 176,
        char_start: 50,
        char_end: 52,
        char_last: 52
    },
    {
        num: 177,
        char_start: 51,
        char_end: 52,
        char_last: 52
    },
    {
        num: 178,
        char_start: 50,
        char_end: 53,
        char_last: 53
    },
    {
        num: 179,
        char_start: 51,
        char_end: 53,
        char_last: 53
    },
    {
        num: 180,
        char_start: 52,
        char_end: 53,
        char_last: 53
    }, //해골 좀비 두개만 등장

    {
        num: 181,
        char_start: 52,
        char_end: 54,
        char_last: 54
    }, //좀비 3등장
    {
        num: 182,
        char_start: 52,
        char_end: 54,
        char_last: 54
    },
    {
        num: 183,
        char_start: 53,
        char_end: 55,
        char_last: 55
    }, //인어1 등장
    {
        num: 184,
        char_start: 54,
        char_end: 55,
        char_last: 54
    },
    {
        num: 185,
        char_start: 54,
        char_end: 55,
        char_last: 55
    },
    {
        num: 186,
        char_start: 54,
        char_end: 56,
        char_last: 56
    }, //문어1 등장
    {
        num: 187,
        char_start: 55,
        char_end: 56,
        char_last: 55
    },
    {
        num: 188,
        char_start: 55,
        char_end: 56,
        char_last: 56
    },
    {
        num: 189,
        char_start: 55,
        char_end: 57,
        char_last: 57
    }, //인어2 등장
    {
        num: 190,
        char_start: 56,
        char_end: 57,
        char_last: 57
    },

    {
        num: 191,
        char_start: 55,
        char_end: 57,
        char_last: 57
    },
    {
        num: 192,
        char_start: 56,
        char_end: 58,
        char_last: 58
    }, //문어2 등장
    {
        num: 193,
        char_start: 56,
        char_end: 58,
        char_last: 58
    },
    {
        num: 194,
        char_start: 57,
        char_end: 58,
        char_last: 58
    },
    {
        num: 195,
        char_start: 57,
        char_end: 59,
        char_last: 59
    }, //인어3 등장
    {
        num: 196,
        char_start: 56,
        char_end: 59,
        char_last: 59
    },
    {
        num: 197,
        char_start: 57,
        char_end: 59,
        char_last: 59
    },
    {
        num: 198,
        char_start: 58,
        char_end: 60,
        char_last: 60
    }, //문어3 등장
    {
        num: 199,
        char_start: 59,
        char_end: 60,
        char_last: 60
    },
    {
        num: 200,
        char_start: 60,
        char_end: 60,
        char_last: 60
    }, //문어3만 나옴

    //20200424_yhlee 201스테이지 추가
    {
        num: 201,
        char_start: 61,
        char_end: 61,
        char_last: 61,
    }, // 스컬독 1 등장
    {
        num: 202,
        char_start: 61,
        char_end: 62,
        char_last: 62,
    }, // 시크릿 1 등장
    {
        num: 203,
        char_start: 61,
        char_end: 63,
        char_last: 63,
    }, // 스컬독 2 등장
    {
        num: 204,
        char_start: 62,
        char_end: 63,
        char_last: 63,
    },
    {
        num: 205,
        char_start: 67,
        char_end: 67,
        char_last: 67,
    }, // 보스 1 등장

    {
        num: 206,
        char_start: 62,
        char_end: 63,
        char_last: 63,
    },
    {
        num: 207,
        char_start: 62,
        char_end: 63,
        char_last: 63,
    },
    {
        num: 208,
        char_start: 62,
        char_end: 64,
        char_last: 64,
    }, // 시크릿 2 등장
    {
        num: 209,
        char_start: 64,
        char_end: 64,
        char_last: 64,
    },
    {
        num: 210,
        char_start: 68,
        char_end: 68,
        char_last: 68,
    }, // 보스 2 등장

    {
        num: 211,
        char_start: 63,
        char_end: 64,
        char_last: 64,
    },
    {
        num: 212,
        char_start: 63,
        char_end: 64,
        char_last: 64,
    },
    {
        num: 213,
        char_start: 63,
        char_end: 65,
        char_last: 65,
    }, // 스컬독 3 등장
    {
        num: 214,
        char_start: 66,
        char_end: 66,
        char_last: 66,
    }, // 시크릿 3 등장
    {
        num: 215,
        char_start: 69,
        char_end: 69,
        char_last: 69,
    }, // 보스 3 등장

    {
        num: 216,
        char_start: 64,
        char_end: 65,
        char_last: 65,
    },
    {
        num: 217,
        char_start: 65,
        char_end: 66,
        char_last: 66,
    },
    {
        num: 218,
        char_start: 65,
        char_end: 66,
        char_last: 66,
    },
    {
        num: 219,
        char_start: 66,
        char_end: 66,
        char_last: 66,
    },
    {
        num: 220,
        char_start: 70,
        char_end: 70,
        char_last: 70,
    }, // 보스 4 등장

    //20210222_yhlee 240스테이지 추가
    {
        num: 221,
        char_start: 71,
        char_end: 71,
        char_last: 71,
    }, //젤리1 등장
    {
        num: 222,
        char_start: 71,
        char_end: 71,
        char_last: 71,
    },
    {
        num: 223,
        char_start: 71,
        char_end: 72,
        char_last: 72,
    }, //프로그1 등장
    {
        num: 224,
        char_start: 71,
        char_end: 72,
        char_last: 72,
    },
    {
        num: 225,
        char_start: 71,
        char_end: 73,
        char_last: 73,
    }, //젤리2 등장

    {
        num: 226,
        char_start: 72,
        char_end: 73,
        char_last: 73,
    },
    {
        num: 227,
        char_start: 72,
        char_end: 73,
        char_last: 73,
    },
    {
        num: 228,
        char_start: 72,
        char_end: 74,
        char_last: 74,
    }, //프로그2 등장
    {
        num: 229,
        char_start: 73,
        char_end: 74,
        char_last: 74,
    },
    {
        num: 230,
        char_start: 73,
        char_end: 74,
        char_last: 74,
    },

    {
        num: 231,
        char_start: 73,
        char_end: 75,
        char_last: 75,
    }, //젤리3 등장
    {
        num: 232,
        char_start: 74,
        char_end: 75,
        char_last: 75,
    },
    {
        num: 233,
        char_start: 74,
        char_end: 75,
        char_last: 75,
    },
    {
        num: 234,
        char_start: 74,
        char_end: 76,
        char_last: 76,
    }, //프로그3 등장
    {
        num: 235,
        char_start: 75,
        char_end: 76,
        char_last: 76,
    },

    {
        num: 236,
        char_start: 75,
        char_end: 76,
        char_last: 76,
    },
    {
        num: 237,
        char_start: 74,
        char_end: 76,
        char_last: 76,
    },
    {
        num: 238,
        char_start: 74,
        char_end: 76,
        char_last: 76,
    },
    {
        num: 239,
        char_start: 75,
        char_end: 76,
        char_last: 76,
    },
    {
        num: 240,
        char_start: 76,
        char_end: 76,
        char_last: 76,
    },

    {
        num: 241,
        char_start: 81,
        char_end: 81,
        char_last: 81,
    },
    {
        num: 242,
        char_start: 81,
        char_end: 81,
        char_last: 81,
    },
    {
        num: 243,
        char_start: 82,
        char_end: 82,
        char_last: 82,
    },
    {
        num: 244,
        char_start: 81,
        char_end: 82,
        char_last: 82,
    },
    {
        num: 245,
        char_start: 87,
        char_end: 87,
        char_last: 87,
    },

    {
        num: 246,
        char_start: 83,
        char_end: 83,
        char_last: 83,
    },
    {
        num: 247,
        char_start: 81,
        char_end: 82,
        char_last: 82,
    },
    {
        num: 248,
        char_start: 83,
        char_end: 83,
        char_last: 83,
    },
    {
        num: 249,
        char_start: 82,
        char_end: 83,
        char_last: 83,
    },
    {
        num: 250,
        char_start: 88,
        char_end: 88,
        char_last: 88,
    },

    {
        num: 251,
        char_start: 84,
        char_end: 84,
        char_last: 84,
    },
    {
        num: 252,
        char_start: 83,
        char_end: 84,
        char_last: 84,
    },
    {
        num: 253,
        char_start: 85,
        char_end: 85,
        char_last: 85,
    },
    {
        num: 254,
        char_start: 84,
        char_end: 85,
        char_last: 85,
    },
    {
        num: 255,
        char_start: 89,
        char_end: 89,
        char_last: 89,
    },

    {
        num: 256,
        char_start: 86,
        char_end: 86,
        char_last: 86,
    },
    {
        num: 257,
        char_start: 84,
        char_end: 85,
        char_last: 85,
    },
    {
        num: 258,
        char_start: 85,
        char_end: 85,
        char_last: 85,
    },
    {
        num: 259,
        char_start: 85,
        char_end: 86,
        char_last: 86,
    },
    {
        num: 260,
        char_start: 90,
        char_end: 90,
        char_last: 90,
    },

    {
        num: 261,
        char_start: 60,
        char_end: 60,
        char_last: 60,
    },
    {
        num: 262,
        char_start: 60,
        char_end: 60,
        char_last: 60,
    },
    {
        num: 263,
        char_start: 60,
        char_end: 60,
        char_last: 60,
    },
    {
        num: 264,
        char_start: 60,
        char_end: 60,
        char_last: 60,
    },
    {
        num: 265,
        char_start: 60,
        char_end: 60,
        char_last: 60,
    },

    {
        num: 266,
        char_start: 60,
        char_end: 60,
        char_last: 60,
    },
    {
        num: 267,
        char_start: 60,
        char_end: 60,
        char_last: 60,
    },
    {
        num: 268,
        char_start: 60,
        char_end: 60,
        char_last: 60,
    },
    {
        num: 269,
        char_start: 60,
        char_end: 60,
        char_last: 60,
    },
    {
        num: 270,
        char_start: 60,
        char_end: 60,
        char_last: 60,
    },

    {
        num: 271,
        char_start: 60,
        char_end: 60,
        char_last: 60,
    },
    {
        num: 272,
        char_start: 60,
        char_end: 60,
        char_last: 60,
    },
    {
        num: 273,
        char_start: 60,
        char_end: 60,
        char_last: 60,
    },
    {
        num: 274,
        char_start: 60,
        char_end: 60,
        char_last: 60,
    },
    {
        num: 275,
        char_start: 60,
        char_end: 60,
        char_last: 60,
    },

    {
        num: 276,
        char_start: 60,
        char_end: 60,
        char_last: 60,
    },
    {
        num: 277,
        char_start: 60,
        char_end: 60,
        char_last: 60,
    },
    {
        num: 278,
        char_start: 60,
        char_end: 60,
        char_last: 60,
    },
    {
        num: 279,
        char_start: 60,
        char_end: 60,
        char_last: 60,
    },
    {
        num: 280,
        char_start: 60,
        char_end: 60,
        char_last: 60,
    },

    {
        num: 281,
        char_start: 60,
        char_end: 60,
        char_last: 60,
    },
    {
        num: 282,
        char_start: 60,
        char_end: 60,
        char_last: 60,
    },
    {
        num: 283,
        char_start: 60,
        char_end: 60,
        char_last: 60,
    },
    {
        num: 284,
        char_start: 60,
        char_end: 60,
        char_last: 60,
    },
    {
        num: 285,
        char_start: 60,
        char_end: 60,
        char_last: 60,
    },

    {
        num: 286,
        char_start: 60,
        char_end: 60,
        char_last: 60,
    },
    {
        num: 287,
        char_start: 60,
        char_end: 60,
        char_last: 60,
    },
    {
        num: 288,
        char_start: 60,
        char_end: 60,
        char_last: 60,
    },
    {
        num: 289,
        char_start: 60,
        char_end: 60,
        char_last: 60,
    },
    {
        num: 290,
        char_start: 60,
        char_end: 60,
        char_last: 60,
    },

    {
        num: 291,
        char_start: 60,
        char_end: 60,
        char_last: 60,
    },
    {
        num: 292,
        char_start: 60,
        char_end: 60,
        char_last: 60,
    },
    {
        num: 293,
        char_start: 60,
        char_end: 60,
        char_last: 60,
    },
    {
        num: 294,
        char_start: 60,
        char_end: 60,
        char_last: 60,
    },
    {
        num: 295,
        char_start: 60,
        char_end: 60,
        char_last: 60,
    },

    {
        num: 296,
        char_start: 60,
        char_end: 60,
        char_last: 60,
    },
    {
        num: 297,
        char_start: 60,
        char_end: 60,
        char_last: 60,
    },
    {
        num: 298,
        char_start: 60,
        char_end: 60,
        char_last: 60,
    },
    {
        num: 299,
        char_start: 60,
        char_end: 60,
        char_last: 60,
    },
    {
        num: 300,
        char_start: 60,
        char_end: 60,
        char_last: 60,
    },
];

// Ranking mode에서의 WAVE디자인
var RANKING_STAGE_DESIGN = {
    wave: 1, // WAVE 1
    char_num: 8, // 이번 레벨에 나타날 캐릭터 숫자				// 특징
    char_start: 1, // 등장할 가장 낮은 레벨
    char_end: 4, // 등장할 가장 높은 레벨
    char_last: 4, // 가장 마지막에 나올 last 캐릭 0이면 없다.
    char_interval: 200, // 캐릭터 나오는 시간
    len_from_our_to_your: 1240, // 아군성과 적군성의 거리 pixel 나타내기
    bg_filename: "map2_bg2.png", // 게임 백그라운드 파일
    bg_filename_w: 960, // 백그라운드 이미지의 width 값. 이 값은 바로위의 len_from_our_to_your 보다 항상 커야 말이 됨.
    bg_filename_h: 1095, // 백그라운드 이미지의 높이값

    castle_our_filename: "allyHome01", // 아군 성의 file이름 접두어	==> wave_design함수에서 재정의
    castle_our_w: 192, // 아군 성의 넓이				==> wave_design함수에서 재정의
    castle_our_h: 203, // 아군 성의 높이				==> wave_design함수에서 재정의
    castle_our_frame_num_attack: 4, // 미사일 발사시 성의 frame수
    castle_our_frame_num_beattack: 2, // 공격당할때의 frame수
    castle_our_frame_num_wait: 1, // 대기의 frame 수
    castle_our_frame_num_destroy: 1, // 파괴 되었을 경우의 frame수.

    castle_your_filename: "enemyHome01", // 아군 성의 file이름 접두어
    castle_your_x: 700, // 성의 위치
    castle_your_y: 250, // 성의 위치
    castle_your_w: 203, // 성의 가로 크기
    castle_your_h: 208, // 성의 세로 크기
    castle_your_frame_num_beattack: 2, // 공격당할때의 frame수
    castle_your_frame_num_wait: 1, // 대기의 frame 수
    castle_your_frame_num_destroy: 1, // 파괴 되었을 경우의 frame수.
    nose_x: 134, // 성의 레이저 쏠 위치 x 좌표.
    nose_y: 105, // 성의 레이저 쏠 위치 y 좌표.
    castle_your_max_hp: 10000000
}

var STAGE = {
    enemy_socket: new Array(), //적군의 소켓 개념임

    set_enemy_socket: function() {

    },

    char_num: //각 스테이지별 나타날 캐릭터 숫자 // last num이 있어서 +1됨, 그리고 특정시간 지나면 wave 2 나감.
        /*  1 ~ 20 */
        [-1, 1, 5, 6, 8, 8, 9, 8, 10, 10, 11, 12, 13, 14, 15, 16, 17, 18, 18, 18, 19
            /* 21 ~ 40 */
            , 7, 8, 9, 10, 11, 12, 13, 13, 14, 14, 12, 12, 13, 13, 12, 14, 15, 15, 15, 18
            /* 41 ~ 60 */
            , 12, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 16, 16, 17, 17, 18, 18, 19, 20
            /* 61 ~ 80 */
            , 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 16, 16, 17, 17, 12, 18, 19, 10
            /* 81 ~ 100*/
            , 10, 10, 11, 8, 12, 12, 13, 13, 14, 14, 15, 15, 16, 16, 17, 20, 20, 21, 23, 25

            /* 101 ~120*/
            , 1, 5, 6, 8, 8, 9, 8, 10, 10, 11, 12, 13, 14, 15, 16, 17, 18, 18, 18, 19
            /* 121 ~140*/
            , 7, 8, 9, 10, 11, 12, 13, 13, 14, 14, 12, 12, 13, 13, 12, 14, 15, 15, 15, 18

            ///* 141 ~160*/		,12	,10	,11	,11	,12	,12	,13	,13	,14	,14	,15	,15	,16	,16	,17	,17	,18	,18	,19	,20
            /* 141 ~160*/
            , 5, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 16, 16, 17, 17, 18, 18, 19, 20

            ///* 161 ~180*/		,10	,10	,11	,11	,12	,12	,13	,13	,14	,14	,15	,15	,16	,16	,17	,17	,18	,18	,19	,20
            /* 161 ~180*/
            , 10, 6, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 16, 16, 17, 17, 18, 18, 19, 20

            /* 181 ~200*/
            , 15, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 18, 18, 19, 20, 21, 22, 20, 27

            //20200424_yhlee 201스테이지 추가
            /* 201 ~220*/
            , 15, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 18, 18, 19, 20, 21, 22, 24, 27
            /* 221 ~240*/
            , 15, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 18, 18, 19, 20, 21, 22, 24, 27
            /* 241 ~260*/
            , 27, 27, 32, 27, 1, 27, 27, 27, 27, 1, 32, 27, 27, 27, 1, 32, 27, 27, 27, 1

            /* 261 ~280*/
            , 15, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 18, 18, 19, 20, 21, 22, 24, 27
            /* 281 ~300*/
            , 15, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 18, 18, 19, 20, 21, 22, 24, 27
        ],

    //20171227_ywlee 난이도 조정을 위해 특정 구간 interval 2배 함.
    char_interval: // 캐릭터 나오는 시간 , 이 값에 곱하기 TIMER_INTERVAL 함.
        /*  1 ~ 20 */
        [-1, 400, 360, 340, 320, 320, 300, 280, 260, 240, 220, 200, 180, 160, 140, 120, 110, 100, 110, 100, 90
            /* 21 ~ 40 */
            , 300, 250, 250, 200, 200, 200, 180, 180, 180, 150, 300, 250, 250, 200, 150 * 2, 300, 250, 250, 200, 150 * 2
            /* 41 ~ 60 */
            , 250, 250, 250, 100, 300, 250, 200, 150 * 2, 300, 250, 200, 150, 300, 200, 150, 100, 300, 200, 150, 100
            /* 61 ~ 80 */
            , 200, 150, 100, 80, 200, 150, 80, 200, 150, 100, 80, 200, 150, 100 * 2, 200, 150, 200, 200, 120, 150
            /* 81 ~ 100*/
            , 150, 80, 150, 150, 80, 150, 100, 70, 200, 150, 70, 200, 100, 70 * 2, 200, 100, 60, 100, 70, 70

            /* 101 ~120*/
            , 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 100, 100, 100, 100 * 2, 100, 100, 100, 100, 100
            /* 121 ~140*/
            , 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80
            /* 141 ~160*/
            , 100, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70
            /* 161 ~180*/
            , 90, 70, 60, 60, 55, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 30, 60, 60, 80
            /* 181 ~200*/
            , 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 80, 40

            //20200424_yhlee 201스테이지 추가
            /* 201 ~220*/
            , 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40
            /* 221 ~240*/
            , 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40
            /* 241 ~260*/
            , 40, 40, 40, 40, 60000, 40, 40, 40, 40, 60000, 40, 40, 40, 40, 60000, 40, 40, 40, 40, 60000

            /* 261 ~280*/
            , 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40
            /* 281 ~300*/
            , 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40
        ],

    len_from_our_to_your: // 아군성과 적군성의 거리 pixel 나타내기
        /*  1 ~ 20 */
        [-1, 1000, 1200, 1200, 1200, 1500, 1200, 1200, 800, 1200, 1500, 1200, 1200, 1200, 1200, 1500, 1200, 1200, 800, 1200, 1500
            /* 21 ~ 40 */
            , 1200, 1200, 1200, 1200, 1500, 1200, 1200, 800, 1200, 1500, 1200, 1200, 1200, 1200, 1500, 1200, 1200, 800, 1200, 1500
            /* 41 ~ 60 */
            , 1200, 1500, 1200, 1200, 1500, 1200, 1200, 800, 1200, 1500, 1200, 1200, 1200, 1200, 1500, 1200, 1200, 800, 1200, 1500
            /* 61 ~ 80 */
            , 1200, 1200, 1200, 1200, 1500, 1200, 1200, 800, 1200, 1500, 1200, 1200, 1200, 1200, 1500, 1200, 1200, 800, 1200, 1500
            /* 81 ~ 100*/
            , 1200, 1200, 1200, 1200, 1500, 1200, 1200, 800, 1200, 1500, 1200, 1200, 1200, 1200, 1500, 1200, 1200, 800, 1200, 1500

            /* 101 ~120 */
            , 1600, 1200, 1200, 1800, 1600, 1200, 1200, 800, 1200, 1700, 1200, 1200, 1200, 1200, 1600, 1200, 1200, 800, 1200, 1800
            /* 121 ~140 */
            , 1200, 1200, 1200, 1200, 1600, 1200, 1200, 800, 1200, 1700, 1200, 1200, 1200, 1200, 1600, 1200, 1200, 800, 1200, 1800
            /* 141 ~160 */
            , 1600, 1500, 1200, 1200, 1600, 1200, 1200, 800, 1200, 1700, 1200, 1200, 1200, 1200, 1600, 1200, 1200, 800, 1200, 1800

            //20180502_ywlee 180 stage확장하면서 아래 컨셉 조정함. 해골과 좀비는 긴맵에서 공격이 유리함.
            /* 161 ~180 */
            , 1200, 1500, 1800, 1800, 1600, 1800, 1000, 1800, 1800, 1800, 1800, 1600, 1800, 1800, 1400, 1800, 1800, 1600, 1800, 1800

            /* 181 ~200*/
            , 1200, 1200, 1200, 1200, 1600, 1200, 1200, 800, 1200, 1700, 1200, 1200, 1200, 1200, 1600, 1200, 1500, 800, 1600, 1800

            //20200424_yhlee 201스테이지 추가
            /* 201 ~220*/
            , 1200, 1200, 1200, 1200, 1600, 1200, 1200, 800, 1200, 1700, 1200, 1200, 1200, 1200, 1600, 1200, 1500, 800, 1600, 1800
            //20210222_yhlee 240스테이지 추가
            /* 221 ~240*/
            , 1200, 1200, 800, 1200, 1800, 1200, 1200, 800, 1200, 1800, 1200, 1200, 800, 1200, 1800, 1200, 1200, 800, 1200, 1800
            /* 241 ~260*/
            , 1800, 1800, 1800, 1800, 1800, 1800, 1800, 1800, 1800, 1800, 1800, 1800, 1800, 1800, 1800, 1800, 1800, 1800, 1800, 1800
            /* 261 ~280*/
            , 1200, 1200, 1200, 1200, 1600, 1200, 1200, 800, 1200, 1700, 1200, 1200, 1200, 1200, 1600, 1200, 1500, 800, 1600, 1800
            /* 281 ~300*/
            , 1200, 1200, 1200, 1200, 1600, 1200, 1200, 800, 1200, 1700, 1200, 1200, 1200, 1200, 1600, 1200, 1500, 800, 1600, 1800
        ],
};

/* len from our to your 에 대하여 한을 풀다 */
/*
  2015-11-21 토요일 LG QA에 화면 노이즈 현상 해결을 위해 출근 했다.
  3일 분석결과 TV의 메모리 full로 redraw할때 이상현상을 보인다.
  그것도 맵이 1800 짜리 이상 되는 놈들은 모두 그렇게 보인다.
  그래서 결국은 맵을 1800을 1500으로 강제 변경 했다.

*/


/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
// 아군 캐릭터 정의
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////

// var MAX_OUR_TEAM_NUM = 81; //20210603_yhlee 소캐릭터 추가
var MAX_OUR_TEAM_NUM = 94; // 20230619_dblee 캐릭터 8성 추가 (202306191437)

//20210222_yhlee 240스테이지 추가
var MAX_YOUR_TEAM_NUM = 80; //적군 캐릭터의 수

//ATTACK_LEN정의
var ATTACK_LEN = //공격거리 pixel로 나타내기
    {
        VL: -35, // 아주짧다	Very Low
        LO: 40, // 짧다		Low
        MI: 90, // 보통		Middle
        HI: 200, // 길다		High
        VH: 350 // 매우길다	Very High
    }
var ATTACK_SPEED = //공격속도 초로 나타내기(대기시간)
    {
        VL: 50, // 아주느림	Very Low
        LO: 40, // 느림		Low
        MI: 30, // 보통		Middle
        HI: 20, // 빠르다		High
        VH: 10 // 매우빠르다	Very High
    }
var E_ATTACK_SPEED = //공격속도 초로 나타내기(대기시간)
    {
        VL: 50, //45,	// 아주느림	Very Low
        LO: 40, //35,	// 느림		Low
        MI: 30, //25,// 보통		Middle
        HI: 20, //15,// 빠르다		High
        VH: 10, //8,// 매우빠르다	Very High
    }

var MOVE_SPEED = //이동속도 pixel로 나타내기
    {
        VL: 1, // 아주느림	Very Low
        LO: 2, // 느림		Low
        MI: 4, // 보통		Middle
        HI: 6, // 빠르다		High
        VH: 7 // 매우빠르다	Very High
    }
var E_MOVE_SPEED = //적의 이동속도 pixel로 나타내기
    {
        VL: 1, //3,	// 아주느림	Very Low
        LO: 2, //4,	// 느림		Low
        MI: 4, //6,// 보통		Middle
        HI: 6, //8,// 빠르다		High
        VH: 7, //9,// 매우빠르다	Very High
    }

var FEATURE = {
    SPEED: 1, // 스피드형
    WIDE: 2, // 범위형
    HP: 3, // 체력형
    ATTACK: 4, // 공격형
    TARGET: 5 // 타겟형	// 20230620_dblee 쿠가 타켓형이라서 이 참에 추가함.
}

var BALANCE = {
    ACE_AP: 1.0,
    ACE_HP: 1.5,

    ECHO_AP: 1.5,
    ECHO_HP: 1.0,

    SMARTY_AP: 1.2,
    SMARTY_HP: 1.0,

    KHAN_AP: 1.0,
    KHAN_HP: 1.8,

    RUSY_AP: 1.5,
    RUSY_HP: 1.0,

    RUBY_AP: 1.0,
    RUBY_HP: 1.0,

    GOLDMAN_AP: 1.0,
    GOLDMAN_HP: 1.0
}

var CHAR_OUR_TEAM = [{}, //연산편의를 위해 0번 배열은 사용하지 않음.
    {
        name: "ACE", //캐릭 이름, //초기화 후 한글/영문 등으로 바뀐다.
        filename: "ally_01", //캐릭터의 파일 이름.
        feature: FEATURE.ATTACK, //특징
        star: 1, //별몇개(1~8성),

        w: 97,
        h: 110, // 이미지의 크기 (width, height)
        move_frame_num: 8, // 이동시 사용되는 frame의 수
        wait_frame_num: 8, // 대기시 사용되는 frame의 수
        attack_frame_num: 8, // 공격시 사용되는 frame의 수
        beattack_frame_num: 4, // 당할때 사용되는 frame의 수

        fire_frame_num: 6, // 발사시 사용되는 미사일 발사 프레임수 실제 미사일...
        fire_img_frame_num: 1, // 미사일 이미지 프레임수 (이미지 갯수 )
        attack_fire_frame: 6, //8		// 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?

        attack_len: ATTACK_LEN.MI, // 공격거리(attack_len),
        move_speed: MOVE_SPEED.MI, // 체력(hp),이동거리(move_speed),
        attack_speed: ATTACK_SPEED.VH, // 공격속도임. 이 값은 tick값임  공격속도빠름(10), 보통(25), 느림(50) 정도를 잡으면 됨.

        ap_start: 650000 * BALANCE.ACE_AP, // 캐릭터 level 1일때의 attack power임
        ap_end: 1200000 * BALANCE.ACE_AP, // 캐릭터 level MAX(즉 1성인 경우 20일때의 attack power임)

        hp_start: 1000000 * BALANCE.ACE_HP, // 캐릭터 level 1일때의 hp
        hp_end: 5000000 * BALANCE.ACE_HP, // 캐릭터 level MAX(즉 1성인 경우 20일때의 hp임)


        nm_start: 1, // 캐릭터 level 1일때의 Need Mineral임
        nm_end: 10, // 캐릭터 level MAX(즉 1성인 경우 20일때의 Need Mineral임)

        max_level: 20, // 성장할 수 있는 최고 level, 필요 없을 수도 있겠다. star로 부터 유추 할 수 있으니...
        center_gap_x: 7, // wait 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // wait 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.

        //yhlee 2016 06 22 추가
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가?  피격마진 이라 부른다.
        gagebar_x: 11, //게이지 bar 표기 x좌표
        gagebar_y: -6 //게이지 bar 표기 y좌표
    },
    {
        name: "ECHO", // 캐릭 이름
        filename: "ally_02", // 캐릭터의 파일 이름.
        feature: FEATURE.SPEED, // 특징
        star: 1, //별몇개(1~8성),

        w: 116,
        h: 110, // 이미지의 크기 (width, height)
        move_frame_num: 4, // 이동시 사용되는 frame의 수
        wait_frame_num: 8, // 대기시 사용되는 frame의 수
        attack_frame_num: 8, // 공격시 사용되는 frame의 수
        beattack_frame_num: 4, // 당할때 사용되는 frame의 수

        fire_frame_num: 8, // 발사시 사용되는 미사일 발사 프레임수 실제 미사일..
        fire_img_frame_num: 1, // 미사일 이미지 프레임수 (이미지 갯수 )
        attack_fire_frame: 7, //9// 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?

        attack_len: ATTACK_LEN.HI, //  공격거리(attack_len),
        move_speed: MOVE_SPEED.VH, // 이동 속도, very high
        attack_speed: ATTACK_SPEED.MI, // 공격속도임. 이 값은 tick값임  공격속도빠름(10), 보통(25), 느림(50) 정도를 잡으면 됨.

        ap_start: 350000 * BALANCE.ECHO_AP, // 캐릭터 level 1일때의 attack power임
        ap_end: 1000000 * BALANCE.ECHO_AP, // 캐릭터 level MAX(즉 1성인 경우 20일때의 attack power임)

        hp_start: 500000 * BALANCE.ECHO_HP, // 캐릭터 level 1일때의 hp
        hp_end: 1000000 * BALANCE.ECHO_HP, // 캐릭터 level MAX(즉 1성인 경우 20일때의 hp임)

        nm_start: 1, // 캐릭터 level 1일때의 Need Mineral임
        nm_end: 10, // 캐릭터 level MAX(즉 1성인 경우 20일때의 Need Mineral임)

        max_level: 20, // 성장할 수 있는 최고 level
        center_gap_x: -13, // wait 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // wait 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.

        //yhlee 2016 06 22 추가
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가?  피격마진 이라 부른다.
        gagebar_x: 43, //게이지 bar 표기 x좌표
        gagebar_y: -2 //게이지 bar 표기 y좌표
    },
    {
        name: "SMARTY", // 캐릭 이름
        filename: "ally_03", // 캐릭터의 파일 이름.
        feature: FEATURE.WIDE, // 특징
        star: 1, //별몇개(1~8성),

        w: 104,
        h: 109, // 이미지의 크기 (width, height)
        move_frame_num: 10, // 이동시 사용되는 frame의 수
        wait_frame_num: 10, // 대기시 사용되는 frame의 수
        attack_frame_num: 11, // 공격시 사용되는 frame의 수
        beattack_frame_num: 4, // 당할때 사용되는 frame의 수

        fire_frame_num: 10, // 발사시 사용되는 frame의 수 +3은 후폭풍 프레임 수
        fire_img_frame_num: 1, // 미사일 이미지 프레임수 (이미지 갯수 )
        attack_fire_frame: 7, //9			// 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?

        attack_len: ATTACK_LEN.VH, //  공격거리(attack_len)
        move_speed: MOVE_SPEED.LO, // 체력(hp),이동거리(move_speed),
        attack_speed: ATTACK_SPEED.LO, // 공격속도임. 이 값은 tick값임  공격속도빠름(10), 보통(25), 느림(50) 정도를 잡으면 됨.

        need_ch_time: 25, // 충전에 필요한 시간 need chage time
        attack_power: 155, // 공격력(attack_power),

        ap_start: 600000 * BALANCE.SMARTY_AP, // 캐릭터 level 1일때의 attack power임
        ap_end: 130000 * BALANCE.SMARTY_AP, // 캐릭터 level MAX(즉 1성인 경우 20일때의 attack power임)

        hp_start: 750000 * BALANCE.SMARTY_HP, // 캐릭터 level 1일때의 hp
        hp_end: 1500000 * BALANCE.SMARTY_HP, // 캐릭터 level MAX(즉 1성인 경우 20일때의 hp임)p)

        nm_start: 1, // 캐릭터 level 1일때의 Need Mineral임
        nm_end: 10, // 캐릭터 level MAX(즉 1성인 경우 20일때의 Need Mineral임)

        max_level: 20, // 성장할 수 있는 최고 level
        center_gap_x: -3, // wait 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // wait 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.

        //yhlee 2016 06 22 추가
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가?  피격마진 이라 부른다.
        gagebar_x: 17, //게이지 bar 표기 x좌표
        gagebar_y: -10 //게이지 bar 표기 y좌표
    },
    {
        name: "KHAN", // 캐릭 이름
        filename: "ally_04", // 캐릭터의 파일 이름.
        feature: FEATURE.HP, // 특징
        star: 1, //별몇개(1~8성),

        w: 116,
        h: 116, // 이미지의 크기 (width, height)
        move_frame_num: 12, // 이동시 사용되는 frame의 수
        wait_frame_num: 8, // 대기시 사용되는 frame의 수
        attack_frame_num: 8, //10		// 공격시 사용되는 frame의 수
        beattack_frame_num: 4, // 당할때 사용되는 frame의 수

        fire_frame_num: 5, // 발사시 사용되는 frame의 수
        fire_img_frame_num: 1, // 미사일 이미지 프레임수 (이미지 갯수 )
        attack_fire_frame: 5, //6		// 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?

        attack_len: ATTACK_LEN.LO, //  공격거리(attack_len)
        move_speed: MOVE_SPEED.MI, // 체력(hp),이동거리(move_speed),
        attack_speed: ATTACK_SPEED.MI, // 공격속도임. 이 값은 tick값임  공격속도빠름(10), 보통(25), 느림(50) 정도를 잡으면 됨.

        ap_start: 250000 * BALANCE.KHAN_AP, // 캐릭터 level 1일때의 attack power임
        ap_end: 1000000 * BALANCE.KHAN_AP, // 캐릭터 level MAX(즉 1성인 경우 20일때의 attack power임)

        hp_start: 500000000 * BALANCE.KHAN_HP, // 캐릭터 level 1일때의 hp
        hp_end: 1000000000 * BALANCE.KHAN_HP, // 캐릭터 level MAX(즉 1성인 경우 20일때의 hp임)

        nm_start: 1, // 캐릭터 level 1일때의 Need Mineral임
        nm_end: 10, // 캐릭터 level MAX(즉 1성인 경우 20일때의 Need Mineral임)

        max_level: 20, // 성장할 수 있는 최고 level
        center_gap_x: -10, // wait 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // wait 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.

        //yhlee 2016 06 22 추가
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가?  피격마진 이라 부른다.
        gagebar_x: 30, //게이지 bar 표기 x좌표
        gagebar_y: -6 //게이지 bar 표기 y좌표
    },
    {
        name: "ACE II", //캐릭 이름
        filename: "ally_05", //캐릭터의 파일 이름.
        feature: FEATURE.ATTACK, //특징
        star: 2, //별몇개(1~8성),

        w: 98,
        h: 110, // 이미지의 크기 (width, height)
        move_frame_num: 8, // 이동시 사용되는 frame의 수
        wait_frame_num: 8, // 대기시 사용되는 frame의 수
        attack_frame_num: 8, // 공격시 사용되는 frame의 수
        beattack_frame_num: 4, // 당할때 사용되는 frame의 수

        fire_frame_num: 6, // 발사시 사용되는 미사일 발사 프레임수 실제 미사일...
        fire_img_frame_num: 1, // 미사일 이미지 프레임수 (이미지 갯수 )
        attack_fire_frame: 8, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?

        attack_len: ATTACK_LEN.MI, // 공격거리(attack_len),
        move_speed: MOVE_SPEED.MI, // 체력(hp),이동거리(move_speed),
        attack_speed: ATTACK_SPEED.VH, // 공격속도임. 이 값은 tick값임  공격속도빠름(10), 보통(25), 느림(50) 정도를 잡으면 됨.

        ap_start: 18, // 캐릭터 level 1일때의 attack power임
        ap_end: 70 * BALANCE.ACE_AP, // 캐릭터 level MAX(즉 1성인 경우 20일때의 attack power임)

        hp_start: 13, // 캐릭터 level 1일때의 hp
        hp_end: 400 * BALANCE.ACE_HP, // 캐릭터 level MAX(즉 1성인 경우 20일때의 hp임)

        nm_start: 70, // 캐릭터 level 1일때의 Need Mineral임
        nm_end: 220, // 캐릭터 level MAX(즉 1성인 경우 20일때의 Need Mineral임)

        max_level: 30, // 성장할 수 있는 최고 level, 필요 없을 수도 있겠다. star로 부터 유추 할 수 있으니...
        center_gap_x: 7, // wait 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // wait 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.

        //yhlee 2016 06 22 추가
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가?  피격마진 이라 부른다.
        gagebar_x: 11, //게이지 bar 표기 x좌표
        gagebar_y: -6 //게이지 bar 표기 y좌표
    },
    {
        name: "ACE III", //캐릭 이름
        filename: "ally_06", //캐릭터의 파일 이름.
        feature: FEATURE.ATTACK, //특징
        star: 3, //별몇개(1~8성),
        w: 106,
        h: 119, // 이미지의 크기 (width, height)
        move_frame_num: 8, // 이동시 사용되는 frame의 수
        wait_frame_num: 8, // 대기시 사용되는 frame의 수
        attack_frame_num: 8, // 공격시 사용되는 frame의 수
        beattack_frame_num: 4, // 당할때 사용되는 frame의 수

        fire_frame_num: 6, // 발사시 사용되는 미사일 발사 프레임수 실제 미사일...
        fire_img_frame_num: 1, // 미사일 이미지 프레임수 (이미지 갯수 )
        attack_fire_frame: 8, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?

        attack_len: ATTACK_LEN.HI, // 공격거리(attack_len),
        move_speed: MOVE_SPEED.MI, // 체력(hp),이동거리(move_speed),
        attack_speed: ATTACK_SPEED.VH, // 공격속도임. 이 값은 tick값임  공격속도빠름(10), 보통(25), 느림(50) 정도를 잡으면 됨.

        ap_start: 44 * BALANCE.ACE_AP, // 캐릭터 level 1일때의 attack power임
        ap_end: 210 * BALANCE.ACE_AP, // 캐릭터 level MAX(즉 1성인 경우 20일때의 attack power임)

        hp_start: 30 * BALANCE.ACE_HP, // 캐릭터 level 1일때의 hp
        hp_end: 1200 * BALANCE.ACE_HP, // 캐릭터 level MAX(즉 1성인 경우 20일때의 hp임)

        nm_start: 160, // 캐릭터 level 1일때의 Need Mineral임
        nm_end: 440, // 캐릭터 level MAX(즉 1성인 경우 20일때의 Need Mineral임)

        max_level: 40, // 성장할 수 있는 최고 level, 필요 없을 수도 있겠다. star로 부터 유추 할 수 있으니...
        center_gap_x: 4, // wait 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // wait 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.

        //yhlee 2016 06 22 추가
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가?  피격마진 이라 부른다.
        gagebar_x: 20, //게이지 bar 표기 x좌표
        gagebar_y: -4 //게이지 bar 표기 y좌표
    },
    {
        name: "ACE IV", //캐릭 이름
        filename: "ally_07", //캐릭터의 파일 이름.
        feature: FEATURE.ATTACK, //특징
        star: 4, //별몇개(1~8성),
        w: 104,
        h: 110, // 이미지의 크기 (width, height)
        move_frame_num: 8, // 이동시 사용되는 frame의 수
        wait_frame_num: 8, // 대기시 사용되는 frame의 수
        attack_frame_num: 8, // 공격시 사용되는 frame의 수
        beattack_frame_num: 4, // 당할때 사용되는 frame의 수

        fire_frame_num: 6, // 발사시 사용되는 미사일 발사 프레임수 실제 미사일...
        fire_img_frame_num: 1, // 미사일 이미지 프레임수 (이미지 갯수 )
        attack_fire_frame: 8, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?

        attack_len: ATTACK_LEN.HI, // 공격거리(attack_len),
        move_speed: MOVE_SPEED.MI, // 체력(hp),이동거리(move_speed),
        attack_speed: ATTACK_SPEED.VH, // 공격속도임. 이 값은 tick값임  공격속도빠름(10), 보통(25), 느림(50) 정도를 잡으면 됨.

        ap_start: 127 * BALANCE.ACE_AP, // 캐릭터 level 1일때의 attack power임
        ap_end: 840 * BALANCE.ACE_AP, // 캐릭터 level MAX(즉 1성인 경우 20일때의 attack power임)

        hp_start: 96 * BALANCE.ACE_HP, // 캐릭터 level 1일때의 hp
        hp_end: 4800 * BALANCE.ACE_HP, // 캐릭터 level MAX(즉 1성인 경우 20일때의 hp임)

        nm_start: 360, // 캐릭터 level 1일때의 Need Mineral임
        nm_end: 810, // 캐릭터 level MAX(즉 1성인 경우 20일때의 Need Mineral임)

        max_level: 50, // 성장할 수 있는 최고 level, 필요 없을 수도 있겠다. star로 부터 유추 할 수 있으니...
        center_gap_x: 5, // wait 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // wait 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.

        //yhlee 2016 06 22 추가
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가?  피격마진 이라 부른다.
        gagebar_x: 18, //게이지 bar 표기 x좌표
        gagebar_y: -2 //게이지 bar 표기 y좌표
    },
    {
        name: "ACE V", //캐릭 이름
        filename: "ally_08", //캐릭터의 파일 이름.
        feature: FEATURE.ATTACK, //특징
        star: 5, //별몇개(1~8성),
        w: 99,
        h: 118, // 이미지의 크기 (width, height)
        move_frame_num: 8, // 이동시 사용되는 frame의 수
        wait_frame_num: 8, // 대기시 사용되는 frame의 수
        attack_frame_num: 12, // 공격시 사용되는 frame의 수
        beattack_frame_num: 4, // 당할때 사용되는 frame의 수

        fire_frame_num: 8, // 발사시 사용되는 미사일 발사 프레임수 실제 미사일...
        fire_img_frame_num: 1, // 미사일 이미지 프레임수 (이미지 갯수 )
        attack_fire_frame: 5, //7			// 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?

        attack_len: ATTACK_LEN.VH, // 공격거리(attack_len),
        move_speed: MOVE_SPEED.MI, // 체력(hp),이동거리(move_speed),
        attack_speed: ATTACK_SPEED.VH, // 공격속도임. 이 값은 tick값임  공격속도빠름(10), 보통(25), 느림(50) 정도를 잡으면 됨.

        ap_start: 484 * BALANCE.ACE_AP, // 캐릭터 level 1일때의 attack power임
        ap_end: 4200 * BALANCE.ACE_AP, // 캐릭터 level MAX(즉 1성인 경우 20일때의 attack power임)

        hp_start: 40 * BALANCE.ACE_HP, // 캐릭터 level 1일때의 hp
        hp_end: 24000 * BALANCE.ACE_HP, // 캐릭터 level MAX(즉 1성인 경우 20일때의 hp임)

        nm_start: 710, // 캐릭터 level 1일때의 Need Mineral임
        nm_end: 1370, // 캐릭터 level MAX(즉 1성인 경우 20일때의 Need Mineral임)

        max_level: 60, // 성장할 수 있는 최고 level, 필요 없을 수도 있겠다. star로 부터 유추 할 수 있으니...
        center_gap_x: 7, // wait 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // wait 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.

        //yhlee 2016 06 22 추가
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가?  피격마진 이라 부른다.
        gagebar_x: 13, //게이지 bar 표기 x좌표
        gagebar_y: -1 //게이지 bar 표기 y좌표
    },
    {
        name: "ACE VI", //캐릭 이름
        filename: "ally_09", //캐릭터의 파일 이름.
        feature: FEATURE.ATTACK, //특징
        star: 6, //별몇개(1~8성),
        w: 107,
        h: 126, // 이미지의 크기 (width, height)
        move_frame_num: 8, // 이동시 사용되는 frame의 수
        wait_frame_num: 8, // 대기시 사용되는 frame의 수
        attack_frame_num: 12, // 공격시 사용되는 frame의 수
        beattack_frame_num: 4, // 당할때 사용되는 frame의 수

        fire_frame_num: 8, // 발사시 사용되는 미사일 발사 프레임수 실제 미사일...
        fire_img_frame_num: 1, // 미사일 이미지 프레임수 (이미지 갯수 )
        attack_fire_frame: 5, //7	// 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?

        attack_len: ATTACK_LEN.VH, // 공격거리(attack_len),
        move_speed: MOVE_SPEED.MI, // 체력(hp),이동거리(move_speed),
        attack_speed: ATTACK_SPEED.VH, // 공격속도임. 이 값은 tick값임  공격속도빠름(10), 보통(25), 느림(50) 정도를 잡으면 됨.

        ap_start: 2342 * BALANCE.ACE_AP, // 캐릭터 level 1일때의 attack power임
        ap_end: 25200 * BALANCE.ACE_AP, // 캐릭터 level MAX(즉 1성인 경우 20일때의 attack power임)

        hp_start: 2057 * BALANCE.ACE_HP, // 캐릭터 level 1일때의 hp
        hp_end: 144000 * BALANCE.ACE_HP, // 캐릭터 level MAX(즉 1성인 경우 20일때의 hp임)

        nm_start: 1250, // 캐릭터 level 1일때의 Need Mineral임
        nm_end: 2160, // 캐릭터 level MAX(즉 1성인 경우 20일때의 Need Mineral임)

        max_level: 70, // 성장할 수 있는 최고 level, 필요 없을 수도 있겠다. star로 부터 유추 할 수 있으니...
        center_gap_x: 2, // wait 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // wait 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.

        //yhlee 2016 06 22 추가
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가?  피격마진 이라 부른다.
        gagebar_x: 20, //게이지 bar 표기 x좌표
        gagebar_y: 0 //게이지 bar 표기 y좌표
    },
    {
        name: "ECHO II", // 캐릭 이름
        filename: "ally_10", // 캐릭터의 파일 이름.
        feature: FEATURE.SPEED, // 특징
        star: 2, //별몇개(1~8성),

        w: 124,
        h: 114, // 이미지의 크기 (width, height)
        move_frame_num: 4, // 이동시 사용되는 frame의 수
        wait_frame_num: 8, // 대기시 사용되는 frame의 수
        attack_frame_num: 8, // 공격시 사용되는 frame의 수
        beattack_frame_num: 4, // 당할때 사용되는 frame의 수

        fire_frame_num: 8, // 발사시 사용되는 미사일 발사 프레임수 실제 미사일..
        fire_img_frame_num: 1, // 미사일 이미지 프레임수 (이미지 갯수 )
        attack_fire_frame: 7, //9	// 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?

        attack_len: ATTACK_LEN.HI, //  공격거리(attack_len),
        move_speed: MOVE_SPEED.VH, // 이동 속도, very high
        attack_speed: ATTACK_SPEED.MI, // 공격속도임. 이 값은 tick값임  공격속도빠름(10), 보통(25), 느림(50) 정도를 잡으면 됨.

        ap_start: 10 * BALANCE.ECHO_AP, // 캐릭터 level 1일때의 attack power임
        ap_end: 40 * BALANCE.ECHO_AP, // 캐릭터 level MAX(즉 1성인 경우 20일때의 attack power임)

        hp_start: 12 * BALANCE.ECHO_HP, // 캐릭터 level 1일때의 hp
        hp_end: 360 * BALANCE.ECHO_HP, // 캐릭터 level MAX(즉 1성인 경우 20일때의 hp임)

        nm_start: 40, // 캐릭터 level 1일때의 Need Mineral임
        nm_end: 190, // 캐릭터 level MAX(즉 1성인 경우 20일때의 Need Mineral임)

        max_level: 30, // 성장할 수 있는 최고 level
        center_gap_x: -14, // wait 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // wait 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.

        //yhlee 2016 06 22 추가
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가?  피격마진 이라 부른다.
        gagebar_x: 48, //게이지 bar 표기 x좌표
        gagebar_y: -2 //게이지 bar 표기 y좌표
    },
    {
        name: "ECHO III", // 캐릭 이름
        filename: "ally_11", // 캐릭터의 파일 이름.
        feature: FEATURE.SPEED, // 특징
        star: 3, //별몇개(1~8성),

        w: 137,
        h: 117, // 이미지의 크기 (width, height)
        move_frame_num: 4, // 이동시 사용되는 frame의 수
        wait_frame_num: 8, // 대기시 사용되는 frame의 수
        attack_frame_num: 8, // 공격시 사용되는 frame의 수
        beattack_frame_num: 4, // 당할때 사용되는 frame의 수

        fire_frame_num: 8, // 발사시 사용되는 미사일 발사 프레임수 실제 미사일..
        fire_img_frame_num: 1, // 미사일 이미지 프레임수 (이미지 갯수 )
        attack_fire_frame: 7, //9	// 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?

        attack_len: ATTACK_LEN.HI, //  공격거리(attack_len),
        move_speed: MOVE_SPEED.VH, // 이동 속도, very high
        attack_speed: ATTACK_SPEED.MI, // 공격속도임. 이 값은 tick값임  공격속도빠름(10), 보통(25), 느림(50) 정도를 잡으면 됨.

        ap_start: 25 * BALANCE.ECHO_AP, // 캐릭터 level 1일때의 attack power임
        ap_end: 120 * BALANCE.ECHO_AP, // 캐릭터 level MAX(즉 1성인 경우 20일때의 attack power임)

        hp_start: 27 * BALANCE.ECHO_HP, // 캐릭터 level 1일때의 hp
        hp_end: 1080 * BALANCE.ECHO_HP, // 캐릭터 level MAX(즉 1성인 경우 20일때의 hp임)

        nm_start: 130, // 캐릭터 level 1일때의 Need Mineral임
        nm_end: 410, // 캐릭터 level MAX(즉 1성인 경우 20일때의 Need Mineral임)

        max_level: 40, // 성장할 수 있는 최고 level
        center_gap_x: -14, // wait 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // wait 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.

        //yhlee 2016 06 22 추가
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가?  피격마진 이라 부른다.
        gagebar_x: 59, //게이지 bar 표기 x좌표
        gagebar_y: -2 //게이지 bar 표기 y좌표
    },
    {
        name: "ECHO IV", // 캐릭 이름
        filename: "ally_12", // 캐릭터의 파일 이름.
        feature: FEATURE.SPEED, // 특징
        star: 4, //별몇개(1~8성),

        w: 141,
        h: 119, // 이미지의 크기 (width, height)
        move_frame_num: 4, // 이동시 사용되는 frame의 수
        wait_frame_num: 8, // 대기시 사용되는 frame의 수
        attack_frame_num: 8, // 공격시 사용되는 frame의 수
        beattack_frame_num: 4, // 당할때 사용되는 frame의 수

        fire_frame_num: 8, // 발사시 사용되는 미사일 발사 프레임수 실제 미사일..
        fire_img_frame_num: 1, // 미사일 이미지 프레임수 (이미지 갯수 )
        attack_fire_frame: 7, //9	// 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?

        attack_len: ATTACK_LEN.HI, //  공격거리(attack_len),
        move_speed: MOVE_SPEED.VH, // 이동 속도, very high
        attack_speed: ATTACK_SPEED.MI, // 공격속도임. 이 값은 tick값임  공격속도빠름(10), 보통(25), 느림(50) 정도를 잡으면 됨.

        ap_start: 73 * BALANCE.ECHO_AP, // 캐릭터 level 1일때의 attack power임
        ap_end: 480 * BALANCE.ECHO_AP, // 캐릭터 level MAX(즉 1성인 경우 20일때의 attack power임)

        hp_start: 86 * BALANCE.ECHO_HP, // 캐릭터 level 1일때의 hp
        hp_end: 4320 * BALANCE.ECHO_HP, // 캐릭터 level MAX(즉 1성인 경우 20일때의 hp임)

        nm_start: 330, // 캐릭터 level 1일때의 Need Mineral임
        nm_end: 780, // 캐릭터 level MAX(즉 1성인 경우 20일때의 Need Mineral임)

        max_level: 50, // 성장할 수 있는 최고 level
        center_gap_x: -14, // wait 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // wait 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.

        //yhlee 2016 06 22 추가
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가?  피격마진 이라 부른다.
        gagebar_x: 59, //게이지 bar 표기 x좌표
        gagebar_y: -5 //게이지 bar 표기 y좌표
    },
    {
        name: "ECHO V", // 캐릭 이름
        filename: "ally_13", // 캐릭터의 파일 이름.
        feature: FEATURE.SPEED, // 특징
        star: 5, //별몇개(1~8성),

        w: 155,
        h: 137, // 이미지의 크기 (width, height)
        move_frame_num: 4, // 이동시 사용되는 frame의 수
        wait_frame_num: 8, // 대기시 사용되는 frame의 수
        attack_frame_num: 8, // 공격시 사용되는 frame의 수
        beattack_frame_num: 4, // 당할때 사용되는 frame의 수

        fire_frame_num: 8, // 발사시 사용되는 미사일 발사 프레임수 실제 미사일..
        fire_img_frame_num: 1, // 미사일 이미지 프레임수 (이미지 갯수 )
        attack_fire_frame: 7, //9	// 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?

        attack_len: ATTACK_LEN.HI, //  공격거리(attack_len),
        move_speed: MOVE_SPEED.VH, // 이동 속도, very high
        attack_speed: ATTACK_SPEED.MI, // 공격속도임. 이 값은 tick값임  공격속도빠름(10), 보통(25), 느림(50) 정도를 잡으면 됨.

        ap_start: 276 * BALANCE.ECHO_AP, // 캐릭터 level 1일때의 attack power임
        ap_end: 2400 * BALANCE.ECHO_AP, // 캐릭터 level MAX(즉 1성인 경우 20일때의 attack power임)

        hp_start: 360 * BALANCE.ECHO_HP, // 캐릭터 level 1일때의 hp
        hp_end: 21600 * BALANCE.ECHO_HP, // 캐릭터 level MAX(즉 1성인 경우 20일때의 hp임)

        nm_start: 680, // 캐릭터 level 1일때의 Need Mineral임
        nm_end: 1340, // 캐릭터 level MAX(즉 1성인 경우 20일때의 Need Mineral임)

        max_level: 60, // 성장할 수 있는 최고 level
        center_gap_x: -35, // wait 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // wait 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.

        //yhlee 2016 06 22 추가
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가?  피격마진 이라 부른다.
        gagebar_x: 82, //게이지 bar 표기 x좌표
        gagebar_y: 25 //게이지 bar 표기 y좌표
    },
    {
        name: "ECHO VI", // 캐릭 이름
        filename: "ally_14", // 캐릭터의 파일 이름.
        feature: FEATURE.SPEED, // 특징
        star: 6, //별몇개(1~8성),

        w: 160,
        h: 137, // 이미지의 크기 (width, height)
        move_frame_num: 4, // 이동시 사용되는 frame의 수
        wait_frame_num: 8, // 대기시 사용되는 frame의 수
        attack_frame_num: 8, // 공격시 사용되는 frame의 수
        beattack_frame_num: 4, // 당할때 사용되는 frame의 수

        fire_frame_num: 8, // 발사시 사용되는 미사일 발사 프레임수 실제 미사일..
        fire_img_frame_num: 1, // 미사일 이미지 프레임수 (이미지 갯수 )
        attack_fire_frame: 7, //9	// 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?

        attack_len: ATTACK_LEN.VH, //  공격거리(attack_len),
        move_speed: MOVE_SPEED.VH, // 이동 속도, very high
        attack_speed: ATTACK_SPEED.MI, // 공격속도임. 이 값은 tick값임  공격속도빠름(10), 보통(25), 느림(50) 정도를 잡으면 됨.

        ap_start: 1338 * BALANCE.ECHO_AP, // 캐릭터 level 1일때의 attack power임
        ap_end: 14400 * BALANCE.ECHO_AP, // 캐릭터 level MAX(즉 1성인 경우 20일때의 attack power임)

        hp_start: 1851 * BALANCE.ECHO_HP, // 캐릭터 level 1일때의 hp
        hp_end: 129600 * BALANCE.ECHO_HP, // 캐릭터 level MAX(즉 1성인 경우 20일때의 hp임)

        nm_start: 1220, // 캐릭터 level 1일때의 Need Mineral임
        nm_end: 2130, // 캐릭터 level MAX(즉 1성인 경우 20일때의 Need Mineral임)

        max_level: 70, // 성장할 수 있는 최고 level
        center_gap_x: -34, // wait 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // wait 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.

        //yhlee 2016 06 22 추가
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가?  피격마진 이라 부른다.
        gagebar_x: 82, //게이지 bar 표기 x좌표
        gagebar_y: 21 //게이지 bar 표기 y좌표
    },
    {
        name: "SMARTY II", // 캐릭 이름
        filename: "ally_15", // 캐릭터의 파일 이름.
        feature: FEATURE.WIDE, // 특징
        star: 2, //별몇개(1~8성),

        w: 112,
        h: 126, // 이미지의 크기 (width, height)
        move_frame_num: 10, // 이동시 사용되는 frame의 수
        wait_frame_num: 10, // 대기시 사용되는 frame의 수
        attack_frame_num: 11, //14		// 공격시 사용되는 frame의 수
        beattack_frame_num: 5, // 당할때 사용되는 frame의 수

        fire_frame_num: 10, // 발사시 사용되는 frame의 수 +3은 후폭풍 프레임 수
        fire_img_frame_num: 1, // 미사일 이미지 프레임수 (이미지 갯수 )
        attack_fire_frame: 7, //9		// 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?

        attack_len: ATTACK_LEN.VH, //  공격거리(attack_len)
        move_speed: MOVE_SPEED.LO, // 체력(hp),이동거리(move_speed),
        attack_speed: ATTACK_SPEED.LO, // 공격속도임. 이 값은 tick값임  공격속도빠름(10), 보통(25), 느림(50) 정도를 잡으면 됨.

        ap_start: 15 * BALANCE.SMARTY_AP, // 캐릭터 level 1일때의 attack power임
        ap_end: 60 * BALANCE.SMARTY_AP, // 캐릭터 level MAX(즉 1성인 경우 20일때의 attack power임)

        hp_start: 17 * BALANCE.SMARTY_HP, // 캐릭터 level 1일때의 hp
        hp_end: 520 * BALANCE.SMARTY_HP, // 캐릭터 level MAX(즉 1성인 경우 20일때의 hp임)p)

        nm_start: 60, // 캐릭터 level 1일때의 Need Mineral임
        nm_end: 210, // 캐릭터 level MAX(즉 1성인 경우 20일때의 Need Mineral임)

        max_level: 30, // 성장할 수 있는 최고 level
        center_gap_x: 3, // wait 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // wait 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.

        //yhlee 2016 06 22 추가
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가?  피격마진 이라 부른다.
        gagebar_x: 16, //게이지 bar 표기 x좌표
        gagebar_y: -6 //게이지 bar 표기 y좌표

    },
    {
        name: "SMARTY III", // 캐릭 이름
        filename: "ally_16", // 캐릭터의 파일 이름.
        feature: FEATURE.WIDE, // 특징
        star: 3, //별몇개(1~8성),

        w: 133,
        h: 156, // 이미지의 크기 (width, height)
        move_frame_num: 10, // 이동시 사용되는 frame의 수
        wait_frame_num: 10, // 대기시 사용되는 frame의 수
        attack_frame_num: 11, //14			// 공격시 사용되는 frame의 수
        beattack_frame_num: 5, // 당할때 사용되는 frame의 수

        fire_frame_num: 10, // 발사시 사용되는 frame의 수 +3은 후폭풍 프레임 수
        fire_img_frame_num: 1, // 미사일 이미지 프레임수 (이미지 갯수 )
        attack_fire_frame: 7, //9		// 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?

        attack_len: ATTACK_LEN.VH, //  공격거리(attack_len)
        move_speed: MOVE_SPEED.LO, // 체력(hp),이동거리(move_speed),
        attack_speed: ATTACK_SPEED.LO, // 공격속도임. 이 값은 tick값임  공격속도빠름(10), 보통(25), 느림(50) 정도를 잡으면 됨.

        ap_start: 38 * BALANCE.SMARTY_AP, // 캐릭터 level 1일때의 attack power임
        ap_end: 180 * BALANCE.SMARTY_AP, // 캐릭터 level MAX(즉 1성인 경우 20일때의 attack power임)

        hp_start: 39 * BALANCE.SMARTY_HP, // 캐릭터 level 1일때의 hp
        hp_end: 1560 * BALANCE.SMARTY_HP, // 캐릭터 level MAX(즉 1성인 경우 20일때의 hp임)p)

        nm_start: 150, // 캐릭터 level 1일때의 Need Mineral임
        nm_end: 430, // 캐릭터 level MAX(즉 1성인 경우 20일때의 Need Mineral임)

        max_level: 40, // 성장할 수 있는 최고 level
        center_gap_x: 13, // wait 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // wait 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.

        //yhlee 2016 06 22 추가
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가?  피격마진 이라 부른다.
        gagebar_x: 17, //게이지 bar 표기 x좌표
        gagebar_y: 21 //게이지 bar 표기 y좌표

    },
    {
        name: "SMARTY IV", // 캐릭 이름
        filename: "ally_17", // 캐릭터의 파일 이름.
        feature: FEATURE.WIDE, // 특징
        star: 4, //별몇개(1~8성),

        w: 145,
        h: 163, // 이미지의 크기 (width, height)
        move_frame_num: 10, // 이동시 사용되는 frame의 수
        wait_frame_num: 10, // 대기시 사용되는 frame의 수
        attack_frame_num: 11, //14		// 공격시 사용되는 frame의 수
        beattack_frame_num: 5, // 당할때 사용되는 frame의 수

        fire_frame_num: 10, // 발사시 사용되는 frame의 수 +3은 후폭풍 프레임 수
        fire_img_frame_num: 1, // 미사일 이미지 프레임수 (이미지 갯수 )
        attack_fire_frame: 7, //9		// 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?

        attack_len: ATTACK_LEN.VH, //  공격거리(attack_len)
        move_speed: MOVE_SPEED.LO, // 체력(hp),이동거리(move_speed),
        attack_speed: ATTACK_SPEED.LO, // 공격속도임. 이 값은 tick값임  공격속도빠름(10), 보통(25), 느림(50) 정도를 잡으면 됨.

        ap_start: 109 * BALANCE.SMARTY_AP, // 캐릭터 level 1일때의 attack power임
        ap_end: 720 * BALANCE.SMARTY_AP, // 캐릭터 level MAX(즉 1성인 경우 20일때의 attack power임)

        hp_start: 125 * BALANCE.SMARTY_HP, // 캐릭터 level 1일때의 hp
        hp_end: 6240 * BALANCE.SMARTY_HP, // 캐릭터 level MAX(즉 1성인 경우 20일때의 hp임)p)

        nm_start: 350, // 캐릭터 level 1일때의 Need Mineral임
        nm_end: 800, // 캐릭터 level MAX(즉 1성인 경우 20일때의 Need Mineral임)

        max_level: 50, // 성장할 수 있는 최고 level
        center_gap_x: 6, // wait 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // wait 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.

        //yhlee 2016 06 22 추가
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가?  피격마진 이라 부른다.
        gagebar_x: 28, //게이지 bar 표기 x좌표
        gagebar_y: 40 //게이지 bar 표기 y좌표

    },
    {
        name: "SMARTY V", // 캐릭 이름
        filename: "ally_18", // 캐릭터의 파일 이름.
        feature: FEATURE.WIDE, // 특징
        star: 5, //별몇개(1~8성),

        w: 140,
        h: 170, // 이미지의 크기 (width, height)
        move_frame_num: 10, // 이동시 사용되는 frame의 수
        wait_frame_num: 10, // 대기시 사용되는 frame의 수
        attack_frame_num: 11, //14		// 공격시 사용되는 frame의 수
        beattack_frame_num: 5, // 당할때 사용되는 frame의 수

        fire_frame_num: 10, // 발사시 사용되는 frame의 수 +3은 후폭풍 프레임 수
        fire_img_frame_num: 1, // 미사일 이미지 프레임수 (이미지 갯수 )
        attack_fire_frame: 7, //9	// 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?

        attack_len: ATTACK_LEN.VH, //  공격거리(attack_len)
        move_speed: MOVE_SPEED.LO, // 체력(hp),이동거리(move_speed),
        attack_speed: ATTACK_SPEED.LO, // 공격속도임. 이 값은 tick값임  공격속도빠름(10), 보통(25), 느림(50) 정도를 잡으면 됨.

        ap_start: 414 * BALANCE.SMARTY_AP, // 캐릭터 level 1일때의 attack power임
        ap_end: 3600 * BALANCE.SMARTY_AP, // 캐릭터 level MAX(즉 1성인 경우 20일때의 attack power임)

        hp_start: 520 * BALANCE.SMARTY_HP, // 캐릭터 level 1일때의 hp
        hp_end: 31200 * BALANCE.SMARTY_HP, // 캐릭터 level MAX(즉 1성인 경우 20일때의 hp임)p)

        nm_start: 700, // 캐릭터 level 1일때의 Need Mineral임
        nm_end: 1360, // 캐릭터 level MAX(즉 1성인 경우 20일때의 Need Mineral임)

        max_level: 60, // 성장할 수 있는 최고 level
        center_gap_x: 18, // wait 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // wait 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.

        //yhlee 2016 06 22 추가
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가?  피격마진 이라 부른다.
        gagebar_x: 17, //게이지 bar 표기 x좌표
        gagebar_y: 47 //게이지 bar 표기 y좌표

    },
    {
        name: "SMARTY VI", // 캐릭 이름
        filename: "ally_19", // 캐릭터의 파일 이름.
        feature: FEATURE.WIDE, // 특징
        star: 6, //별몇개(1~8성),

        w: 139,
        h: 173, // 이미지의 크기 (width, height)
        move_frame_num: 10, // 이동시 사용되는 frame의 수
        wait_frame_num: 10, // 대기시 사용되는 frame의 수
        attack_frame_num: 11, //14		// 공격시 사용되는 frame의 수
        beattack_frame_num: 5, // 당할때 사용되는 frame의 수

        fire_frame_num: 10, // 발사시 사용되는 frame의 수 +3은 후폭풍 프레임 수
        fire_img_frame_num: 1, // 미사일 이미지 프레임수 (이미지 갯수 )
        attack_fire_frame: 7, //9		// 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?

        attack_len: ATTACK_LEN.VH, //  공격거리(attack_len)
        move_speed: MOVE_SPEED.LO, // 체력(hp),이동거리(move_speed),
        attack_speed: ATTACK_SPEED.LO, // 공격속도임. 이 값은 tick값임  공격속도빠름(10), 보통(25), 느림(50) 정도를 잡으면 됨.

        ap_start: 2007 * BALANCE.SMARTY_AP, // 캐릭터 level 1일때의 attack power임
        ap_end: 21600 * BALANCE.SMARTY_AP, // 캐릭터 level MAX(즉 1성인 경우 20일때의 attack power임)

        hp_start: 2674 * BALANCE.SMARTY_HP, // 캐릭터 level 1일때의 hp
        hp_end: 187200 * BALANCE.SMARTY_HP, // 캐릭터 level MAX(즉 1성인 경우 20일때의 hp임)p)

        nm_start: 1240, // 캐릭터 level 1일때의 Need Mineral임
        nm_end: 2150, // 캐릭터 level MAX(즉 1성인 경우 20일때의 Need Mineral임)

        max_level: 70, // 성장할 수 있는 최고 level
        center_gap_x: 18, // wait 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // wait 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.

        //yhlee 2016 06 22 추가
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가?  피격마진 이라 부른다.
        gagebar_x: 19, //게이지 bar 표기 x좌표
        gagebar_y: 37 //게이지 bar 표기 y좌표

    },
    {
        name: "KHAN II", // 캐릭 이름
        filename: "ally_20", // 캐릭터의 파일 이름.
        feature: FEATURE.HP, // 특징
        star: 2, //별몇개(1~8성),

        w: 127,
        h: 127, // 이미지의 크기 (width, height)
        move_frame_num: 12, // 이동시 사용되는 frame의 수
        wait_frame_num: 8, // 대기시 사용되는 frame의 수
        attack_frame_num: 8, //10		// 공격시 사용되는 frame의 수
        beattack_frame_num: 4, // 당할때 사용되는 frame의 수

        fire_frame_num: 5, // 발사시 사용되는 frame의 수
        fire_img_frame_num: 1, // 미사일 이미지 프레임수 (이미지 갯수 )
        attack_fire_frame: 5, //6		// 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?

        attack_len: ATTACK_LEN.LO, //  공격거리(attack_len)
        move_speed: MOVE_SPEED.MI, // 체력(hp),이동거리(move_speed),
        attack_speed: ATTACK_SPEED.MI, // 공격속도임. 이 값은 tick값임  공격속도빠름(10), 보통(25), 느림(50) 정도를 잡으면 됨.

        ap_start: 13 * BALANCE.KHAN_AP, // 캐릭터 level 1일때의 attack power임
        ap_end: 50 * BALANCE.KHAN_AP, // 캐릭터 level MAX(즉 1성인 경우 20일때의 attack power임)

        hp_start: 40 * BALANCE.KHAN_HP, // 캐릭터 level 1일때의 hp
        hp_end: 1200 * BALANCE.KHAN_HP, // 캐릭터 level MAX(즉 1성인 경우 20일때의 hp임)

        nm_start: 70, // 캐릭터 level 1일때의 Need Mineral임
        nm_end: 220, // 캐릭터 level MAX(즉 1성인 경우 20일때의 Need Mineral임)

        max_level: 30, // 성장할 수 있는 최고 level
        center_gap_x: -6, // wait 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // wait 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.

        //yhlee 2016 06 22 추가
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가?  피격마진 이라 부른다.
        gagebar_x: 32, //게이지 bar 표기 x좌표
        gagebar_y: -1 //게이지 bar 표기 y좌표

    },
    {
        name: "KHAN III", // 캐릭 이름
        filename: "ally_21", // 캐릭터의 파일 이름.
        feature: FEATURE.HP, // 특징
        star: 3, //별몇개(1~8성),

        w: 122,
        h: 121, // 이미지의 크기 (width, height)
        move_frame_num: 12, // 이동시 사용되는 frame의 수
        wait_frame_num: 8, // 대기시 사용되는 frame의 수
        attack_frame_num: 8, //10		// 공격시 사용되는 frame의 수
        beattack_frame_num: 4, // 당할때 사용되는 frame의 수

        fire_frame_num: 5, // 발사시 사용되는 frame의 수
        fire_img_frame_num: 1, // 미사일 이미지 프레임수 (이미지 갯수 )
        attack_fire_frame: 5, //6		// 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?

        attack_len: ATTACK_LEN.LO, //  공격거리(attack_len)
        move_speed: MOVE_SPEED.MI, // 체력(hp),이동거리(move_speed),
        attack_speed: ATTACK_SPEED.MI, // 공격속도임. 이 값은 tick값임  공격속도빠름(10), 보통(25), 느림(50) 정도를 잡으면 됨.

        ap_start: 31 * BALANCE.KHAN_AP, // 캐릭터 level 1일때의 attack power임
        ap_end: 150 * BALANCE.KHAN_AP, // 캐릭터 level MAX(즉 1성인 경우 20일때의 attack power임)

        hp_start: 90 * BALANCE.KHAN_HP, // 캐릭터 level 1일때의 hp
        hp_end: 3600 * BALANCE.KHAN_HP, // 캐릭터 level MAX(즉 1성인 경우 20일때의 hp임)

        nm_start: 160, // 캐릭터 level 1일때의 Need Mineral임
        nm_end: 440, // 캐릭터 level MAX(즉 1성인 경우 20일때의 Need Mineral임)

        max_level: 40, // 성장할 수 있는 최고 level
        center_gap_x: -7, // wait 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // wait 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.

        //yhlee 2016 06 22 추가
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가?  피격마진 이라 부른다.
        gagebar_x: 29, //게이지 bar 표기 x좌표
        gagebar_y: 0 //게이지 bar 표기 y좌표

    },
    {
        name: "KHAN IV", // 캐릭 이름
        filename: "ally_22", // 캐릭터의 파일 이름.
        feature: FEATURE.HP, // 특징
        star: 4, //별몇개(1~8성),

        w: 135,
        h: 123, // 이미지의 크기 (width, height)
        move_frame_num: 12, // 이동시 사용되는 frame의 수
        wait_frame_num: 8, // 대기시 사용되는 frame의 수
        attack_frame_num: 8, //10		// 공격시 사용되는 frame의 수
        beattack_frame_num: 4, // 당할때 사용되는 frame의 수

        fire_frame_num: 5, // 발사시 사용되는 frame의 수
        fire_img_frame_num: 1, // 미사일 이미지 프레임수 (이미지 갯수 )
        attack_fire_frame: 5, //6		// 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?

        attack_len: ATTACK_LEN.LO, //  공격거리(attack_len)
        move_speed: MOVE_SPEED.MI, // 체력(hp),이동거리(move_speed),
        attack_speed: ATTACK_SPEED.MI, // 공격속도임. 이 값은 tick값임  공격속도빠름(10), 보통(25), 느림(50) 정도를 잡으면 됨.

        ap_start: 91 * BALANCE.KHAN_AP, // 캐릭터 level 1일때의 attack power임
        ap_end: 600 * BALANCE.KHAN_AP, // 캐릭터 level MAX(즉 1성인 경우 20일때의 attack power임)

        hp_start: 288 * BALANCE.KHAN_HP, // 캐릭터 level 1일때의 hp
        hp_end: 14400 * BALANCE.KHAN_HP, // 캐릭터 level MAX(즉 1성인 경우 20일때의 hp임)

        nm_start: 360, // 캐릭터 level 1일때의 Need Mineral임
        nm_end: 810, // 캐릭터 level MAX(즉 1성인 경우 20일때의 Need Mineral임)

        max_level: 50, // 성장할 수 있는 최고 level
        center_gap_x: -4, // wait 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // wait 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.

        //yhlee 2016 06 22 추가
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가?  피격마진 이라 부른다.
        gagebar_x: 34, //게이지 bar 표기 x좌표
        gagebar_y: -2 //게이지 bar 표기 y좌표

    },
    {
        name: "KHAN V", // 캐릭 이름
        filename: "ally_23", // 캐릭터의 파일 이름.
        feature: FEATURE.HP, // 특징
        star: 5, //별몇개(1~8성),

        w: 121,
        h: 121, // 이미지의 크기 (width, height)
        move_frame_num: 12, // 이동시 사용되는 frame의 수
        wait_frame_num: 8, // 대기시 사용되는 frame의 수
        attack_frame_num: 8, //10		// 공격시 사용되는 frame의 수
        beattack_frame_num: 4, // 당할때 사용되는 frame의 수

        fire_frame_num: 5, // 발사시 사용되는 frame의 수
        fire_img_frame_num: 1, // 미사일 이미지 프레임수 (이미지 갯수 )
        attack_fire_frame: 5, //6		// 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?

        attack_len: ATTACK_LEN.LO, //  공격거리(attack_len)
        move_speed: MOVE_SPEED.MI, // 체력(hp),이동거리(move_speed),
        attack_speed: ATTACK_SPEED.MI, // 공격속도임. 이 값은 tick값임  공격속도빠름(10), 보통(25), 느림(50) 정도를 잡으면 됨.

        ap_start: 345 * BALANCE.KHAN_AP, // 캐릭터 level 1일때의 attack power임
        ap_end: 3000 * BALANCE.KHAN_AP, // 캐릭터 level MAX(즉 1성인 경우 20일때의 attack power임)

        hp_start: 1200 * BALANCE.KHAN_HP, // 캐릭터 level 1일때의 hp
        hp_end: 72000 * BALANCE.KHAN_HP, // 캐릭터 level MAX(즉 1성인 경우 20일때의 hp임)

        nm_start: 710, // 캐릭터 level 1일때의 Need Mineral임
        nm_end: 1370, // 캐릭터 level MAX(즉 1성인 경우 20일때의 Need Mineral임)

        max_level: 60, // 성장할 수 있는 최고 level
        center_gap_x: -8, // wait 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // wait 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.

        //yhlee 2016 06 22 추가
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가?  피격마진 이라 부른다.
        gagebar_x: 29, //게이지 bar 표기 x좌표
        gagebar_y: -2 //게이지 bar 표기 y좌표

    },
    {
        name: "KHAN VI", // 캐릭 이름
        filename: "ally_24", // 캐릭터의 파일 이름.
        feature: FEATURE.HP, // 특징
        star: 6, //별몇개(1~8성),

        w: 127,
        h: 134, // 이미지의 크기 (width, height)
        move_frame_num: 12, // 이동시 사용되는 frame의 수
        wait_frame_num: 8, // 대기시 사용되는 frame의 수
        attack_frame_num: 8, //10		// 공격시 사용되는 frame의 수
        beattack_frame_num: 4, // 당할때 사용되는 frame의 수

        fire_frame_num: 5, // 발사시 사용되는 frame의 수
        fire_img_frame_num: 1, // 미사일 이미지 프레임수 (이미지 갯수 )
        attack_fire_frame: 5, //6		// 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?

        attack_len: ATTACK_LEN.LO, //  공격거리(attack_len)
        move_speed: MOVE_SPEED.MI, // 체력(hp),이동거리(move_speed),
        attack_speed: ATTACK_SPEED.MI, // 공격속도임. 이 값은 tick값임  공격속도빠름(10), 보통(25), 느림(50) 정도를 잡으면 됨.

        ap_start: 1673 * BALANCE.KHAN_AP, // 캐릭터 level 1일때의 attack power임
        ap_end: 18000 * BALANCE.KHAN_AP, // 캐릭터 level MAX(즉 1성인 경우 20일때의 attack power임)

        hp_start: 6171 * BALANCE.KHAN_HP, // 캐릭터 level 1일때의 hp
        hp_end: 432000 * BALANCE.KHAN_HP, // 캐릭터 level MAX(즉 1성인 경우 20일때의 hp임)

        nm_start: 1250, // 캐릭터 level 1일때의 Need Mineral임
        nm_end: 2160, // 캐릭터 level MAX(즉 1성인 경우 20일때의 Need Mineral임)

        max_level: 70, // 성장할 수 있는 최고 level
        center_gap_x: -8, // wait 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // wait 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.

        //yhlee 2016 06 22 추가
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가?  피격마진 이라 부른다.
        gagebar_x: 33, //게이지 bar 표기 x좌표
        gagebar_y: -9 //게이지 bar 표기 y좌표

    },
    {
        name: "LODY I", // 캐릭 이름
        filename: "ally_25", // 캐릭터의 파일 이름.
        feature: FEATURE.ATTACK, // 특징
        star: 1, //별몇개(1~8성),

        w: 90,
        h: 116, // 이미지의 크기 (width, height)
        move_frame_num: 8, // 이동시 사용되는 frame의 수
        wait_frame_num: 8, // 대기시 사용되는 frame의 수
        attack_frame_num: 6, //8			// 공격시 사용되는 frame의 수
        beattack_frame_num: 4, // 당할때 사용되는 frame의 수

        fire_frame_num: 8, // 발사시 사용되는 frame의 수
        fire_img_frame_num: 1, // 미사일 이미지 프레임수 (이미지 갯수 )
        attack_fire_frame: 4, //6		// 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?

        attack_len: ATTACK_LEN.HI, // 공격거리(attack_len)
        move_speed: MOVE_SPEED.LO, // 체력(hp),이동거리(move_speed),
        attack_speed: ATTACK_SPEED.HI, // 공격속도임. 이 값은 tick값임  공격속도빠름(10), 보통(25), 느림(50) 정도를 잡으면 됨.

        ap_start: 3 * BALANCE.RUSY_AP, // 캐릭터 level 1일때의 attack power임
        ap_end: 40 * BALANCE.RUSY_AP, // 캐릭터 level MAX(즉 1성인 경우 20일때의 attack power임)

        hp_start: 12 * BALANCE.RUSY_HP, // 캐릭터 level 1일때의 hp
        hp_end: 240 * BALANCE.RUSY_HP, // 캐릭터 level MAX(즉 1성인 경우 20일때의 hp임)

        nm_start: 40, // 캐릭터 level 1일때의 Need Mineral임
        nm_end: 100, // 캐릭터 level MAX(즉 1성인 경우 20일때의 Need Mineral임)

        max_level: 20, // 성장할 수 있는 최고 level
        center_gap_x: -1, // wait 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // wait 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.

        //yhlee 2016 06 22 추가
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가?  피격마진 이라 부른다.
        gagebar_x: 10, //게이지 bar 표기 x좌표
        gagebar_y: -9 //게이지 bar 표기 y좌표

    },
    {
        name: "LODY II", // 캐릭 이름
        filename: "ally_26", // 캐릭터의 파일 이름.
        feature: FEATURE.ATTACK, // 특징
        star: 2, //별몇개(1~8성),

        w: 90,
        h: 116, // 이미지의 크기 (width, height)
        move_frame_num: 8, // 이동시 사용되는 frame의 수
        wait_frame_num: 8, // 대기시 사용되는 frame의 수
        attack_frame_num: 6, //8			// 공격시 사용되는 frame의 수
        beattack_frame_num: 4, // 당할때 사용되는 frame의 수

        fire_frame_num: 8, // 발사시 사용되는 frame의 수
        fire_img_frame_num: 1, // 미사일 이미지 프레임수 (이미지 갯수 )
        attack_fire_frame: 4, //6			// 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?

        attack_len: ATTACK_LEN.HI, // 공격거리(attack_len)
        move_speed: MOVE_SPEED.LO, // 체력(hp),이동거리(move_speed),
        attack_speed: ATTACK_SPEED.HI, // 공격속도임. 이 값은 tick값임  공격속도빠름(10), 보통(25), 느림(50) 정도를 잡으면 됨.

        ap_start: 20 * BALANCE.RUSY_AP, // 캐릭터 level 1일때의 attack power임
        ap_end: 80 * BALANCE.RUSY_AP, // 캐릭터 level MAX(즉 1성인 경우 20일때의 attack power임)

        hp_start: 16 * BALANCE.RUSY_HP, // 캐릭터 level 1일때의 hp
        hp_end: 480 * BALANCE.RUSY_HP, // 캐릭터 level MAX(즉 1성인 경우 20일때의 hp임)

        nm_start: 60, // 캐릭터 level 1일때의 Need Mineral임
        nm_end: 210, // 캐릭터 level MAX(즉 1성인 경우 20일때의 Need Mineral임)

        max_level: 30, // 성장할 수 있는 최고 level
        center_gap_x: -1, // wait 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // wait 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.

        //yhlee 2016 06 22 추가
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가?  피격마진 이라 부른다.
        gagebar_x: 10, //게이지 bar 표기 x좌표
        gagebar_y: -9 //게이지 bar 표기 y좌표

    },
    {
        name: "LODY III", // 캐릭 이름
        filename: "ally_27", // 캐릭터의 파일 이름.
        feature: FEATURE.ATTACK, // 특징
        star: 3, //별몇개(1~8성),

        w: 143,
        h: 116, // 이미지의 크기 (width, height)
        move_frame_num: 8, // 이동시 사용되는 frame의 수
        wait_frame_num: 8, // 대기시 사용되는 frame의 수
        attack_frame_num: 6, //8			// 공격시 사용되는 frame의 수
        beattack_frame_num: 4, // 당할때 사용되는 frame의 수

        fire_frame_num: 2, // 발사시 사용되는 frame의 수
        fire_img_frame_num: 1, // 미사일 이미지 프레임수 (이미지 갯수 )
        attack_fire_frame: 4, //6		// 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?

        attack_len: ATTACK_LEN.VL, // 공격거리(attack_len)
        move_speed: MOVE_SPEED.VH, // 체력(hp),이동거리(move_speed),
        attack_speed: ATTACK_SPEED.VH, // 공격속도임. 이 값은 tick값임  공격속도빠름(10), 보통(25), 느림(50) 정도를 잡으면 됨.

        ap_start: 50 * BALANCE.RUSY_AP, // 캐릭터 level 1일때의 attack power임
        ap_end: 240 * BALANCE.RUSY_AP, // 캐릭터 level MAX(즉 1성인 경우 20일때의 attack power임)

        hp_start: 36 * BALANCE.RUSY_HP, // 캐릭터 level 1일때의 hp
        hp_end: 1440 * BALANCE.RUSY_HP, // 캐릭터 level MAX(즉 1성인 경우 20일때의 hp임)

        nm_start: 150, // 캐릭터 level 1일때의 Need Mineral임
        nm_end: 430, // 캐릭터 level MAX(즉 1성인 경우 20일때의 Need Mineral임)

        max_level: 40, // 성장할 수 있는 최고 level
        center_gap_x: 30, // wait 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // wait 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.

        //yhlee 2016 06 22 추가
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가?  피격마진 이라 부른다.
        gagebar_x: 11, //게이지 bar 표기 x좌표
        gagebar_y: -9 //게이지 bar 표기 y좌표

    },
    {
        name: "LODY IV", // 캐릭 이름
        filename: "ally_28", // 캐릭터의 파일 이름.
        feature: FEATURE.ATTACK, // 특징
        star: 4, //별몇개(1~8성),

        w: 143,
        h: 116, // 이미지의 크기 (width, height)
        move_frame_num: 8, // 이동시 사용되는 frame의 수
        wait_frame_num: 8, // 대기시 사용되는 frame의 수
        attack_frame_num: 6, //8			// 공격시 사용되는 frame의 수
        beattack_frame_num: 4, // 당할때 사용되는 frame의 수

        fire_frame_num: 8, // 발사시 사용되는 frame의 수
        fire_img_frame_num: 1, // 미사일 이미지 프레임수 (이미지 갯수 )
        attack_fire_frame: 4, //6			// 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?

        attack_len: ATTACK_LEN.VL, // 공격거리(attack_len)
        move_speed: MOVE_SPEED.LO, // 체력(hp),이동거리(move_speed),
        attack_speed: ATTACK_SPEED.HI, // 공격속도임. 이 값은 tick값임  공격속도빠름(10), 보통(25), 느림(50) 정도를 잡으면 됨.

        ap_start: 145 * BALANCE.RUSY_AP, // 캐릭터 level 1일때의 attack power임
        ap_end: 1440 * BALANCE.RUSY_AP, // 캐릭터 level MAX(즉 1성인 경우 20일때의 attack power임)

        hp_start: 173 * BALANCE.RUSY_HP, // 캐릭터 level 1일때의 hp
        hp_end: 8640 * BALANCE.RUSY_HP, // 캐릭터 level MAX(즉 1성인 경우 20일때의 hp임)

        nm_start: 350, // 캐릭터 level 1일때의 Need Mineral임
        nm_end: 800, // 캐릭터 level MAX(즉 1성인 경우 20일때의 Need Mineral임)

        max_level: 50, // 성장할 수 있는 최고 level
        center_gap_x: 30, // wait 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // wait 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.

        //yhlee 2016 06 22 추가
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가?  피격마진 이라 부른다.
        gagebar_x: 11, //게이지 bar 표기 x좌표
        gagebar_y: -9 //게이지 bar 표기 y좌표

    },
    {
        name: "LODY V", // 캐릭 이름
        filename: "ally_29", // 캐릭터의 파일 이름.
        feature: FEATURE.ATTACK, // 특징
        star: 5, //별몇개(1~8성),

        w: 75,
        h: 116, // 이미지의 크기 (width, height)
        move_frame_num: 8, // 이동시 사용되는 frame의 수
        wait_frame_num: 8, // 대기시 사용되는 frame의 수
        attack_frame_num: 5, //8			// 공격시 사용되는 frame의 수
        beattack_frame_num: 4, // 당할때 사용되는 frame의 수

        fire_frame_num: 8, // 발사시 사용되는 frame의 수
        fire_img_frame_num: 1, // 미사일 이미지 프레임수 (이미지 갯수 )
        attack_fire_frame: 4, //6		// 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?

        attack_len: ATTACK_LEN.HI, // 공격거리(attack_len)
        move_speed: MOVE_SPEED.LO, // 체력(hp),이동거리(move_speed),
        attack_speed: ATTACK_SPEED.HI, // 공격속도임. 이 값은 tick값임  공격속도빠름(10), 보통(25), 느림(50) 정도를 잡으면 됨.

        ap_start: 793 * BALANCE.RUSY_AP, // 캐릭터 level 1일때의 attack power임
        ap_end: 5760 * BALANCE.RUSY_AP, // 캐릭터 level MAX(즉 1성인 경우 20일때의 attack power임)

        hp_start: 576 * BALANCE.RUSY_HP, // 캐릭터 level 1일때의 hp
        hp_end: 34560 * BALANCE.RUSY_HP, // 캐릭터 level MAX(즉 1성인 경우 20일때의 hp임)

        nm_start: 700, // 캐릭터 level 1일때의 Need Mineral임
        nm_end: 1360, // 캐릭터 level MAX(즉 1성인 경우 20일때의 Need Mineral임)

        max_level: 60, // 성장할 수 있는 최고 level
        center_gap_x: -8, // wait 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // wait 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.

        //yhlee 2016 06 22 추가
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가?  피격마진 이라 부른다.
        gagebar_x: 8, //게이지 bar 표기 x좌표
        gagebar_y: -9 //게이지 bar 표기 y좌표

    },
    {
        name: "LODY VI", // 캐릭 이름
        filename: "ally_30", // 캐릭터의 파일 이름.
        feature: FEATURE.ATTACK, // 특징
        star: 6, //별몇개(1~8성),

        w: 94,
        h: 122, // 이미지의 크기 (width, height)
        move_frame_num: 8, // 이동시 사용되는 frame의 수
        wait_frame_num: 8, // 대기시 사용되는 frame의 수
        attack_frame_num: 6, //8			// 공격시 사용되는 frame의 수
        beattack_frame_num: 4, // 당할때 사용되는 frame의 수

        fire_frame_num: 8, // 발사시 사용되는 frame의 수
        fire_img_frame_num: 1, // 미사일 이미지 프레임수 (이미지 갯수 )
        attack_fire_frame: 4, //6		// 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?

        attack_len: ATTACK_LEN.VH, // 공격거리(attack_len)
        move_speed: MOVE_SPEED.MI, // 체력(hp),이동거리(move_speed),
        attack_speed: ATTACK_SPEED.HI, // 공격속도임. 이 값은 tick값임  공격속도빠름(10), 보통(25), 느림(50) 정도를 잡으면 됨.

        ap_start: 3276 * BALANCE.RUSY_AP, // 캐릭터 level 1일때의 attack power임
        ap_end: 28800 * BALANCE.RUSY_AP, // 캐릭터 level MAX(즉 1성인 경우 20일때의 attack power임)

        hp_start: 2469 * BALANCE.RUSY_HP, // 캐릭터 level 1일때의 hp
        hp_end: 172800 * BALANCE.RUSY_HP, // 캐릭터 level MAX(즉 1성인 경우 20일때의 hp임)

        nm_start: 1240, // 캐릭터 level 1일때의 Need Mineral임
        nm_end: 2150, // 캐릭터 level MAX(즉 1성인 경우 20일때의 Need Mineral임)

        max_level: 70, // 성장할 수 있는 최고 level
        center_gap_x: -11, // wait 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // wait 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.

        //yhlee 2016 06 22 추가
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가?  피격마진 이라 부른다.
        gagebar_x: 18, //게이지 bar 표기 x좌표
        gagebar_y: -9 //게이지 bar 표기 y좌표

    },
    {
        name: "BEBEE I", // 캐릭 이름
        filename: "ally_31", // 캐릭터의 파일 이름.
        feature: FEATURE.ATTACK, // 특징
        star: 1, //별몇개(1~8성),

        w: 92,
        h: 139, // 이미지의 크기 (width, height)
        move_frame_num: 8, // 이동시 사용되는 frame의 수
        wait_frame_num: 8, // 대기시 사용되는 frame의 수
        attack_frame_num: 11, //15		// 공격시 사용되는 frame의 수
        beattack_frame_num: 4, // 당할때 사용되는 frame의 수

        fire_frame_num: 8, // 발사시 사용되는 frame의 수
        fire_img_frame_num: 1, // 미사일 이미지 프레임수 (이미지 갯수 )
        attack_fire_frame: 4, //8		// 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?

        attack_len: ATTACK_LEN.HI, // 공격거리(attack_len)
        move_speed: MOVE_SPEED.MI, // 체력(hp),이동거리(move_speed),
        attack_speed: ATTACK_SPEED.HI, // 공격속도임. 이 값은 tick값임  공격속도빠름(10), 보통(25), 느림(50) 정도를 잡으면 됨.

        ap_start: 2, // 캐릭터 level 1일때의 attack power임
        ap_end: 35, // 캐릭터 level MAX(즉 1성인 경우 20일때의 attack power임)

        hp_start: 10, // 캐릭터 level 1일때의 hp
        hp_end: 200, // 캐릭터 level MAX(즉 1성인 경우 20일때의 hp임)

        nm_start: 30, // 캐릭터 level 1일때의 Need Mineral임
        nm_end: 110, // 캐릭터 level MAX(즉 1성인 경우 20일때의 Need Mineral임)

        max_level: 20, // 성장할 수 있는 최고 level
        center_gap_x: -15, // wait 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // wait 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.

        //yhlee 2016 06 22 추가
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가?  피격마진 이라 부른다.
        gagebar_x: 22, //게이지 bar 표기 x좌표
        gagebar_y: -2 //게이지 bar 표기 y좌표

    },
    {
        name: "BEBEE II", // 캐릭 이름
        filename: "ally_32", // 캐릭터의 파일 이름.
        feature: FEATURE.ATTACK, // 특징
        star: 2, //별몇개(1~8성),

        w: 115,
        h: 135, // 이미지의 크기 (width, height)
        move_frame_num: 8, // 이동시 사용되는 frame의 수
        wait_frame_num: 8, // 대기시 사용되는 frame의 수
        attack_frame_num: 8, //12		// 공격시 사용되는 frame의 수
        beattack_frame_num: 4, // 당할때 사용되는 frame의 수

        fire_frame_num: 8, // 발사시 사용되는 frame의 수
        fire_img_frame_num: 1, // 미사일 이미지 프레임수 (이미지 갯수 )
        attack_fire_frame: 4, //7		// 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?

        attack_len: ATTACK_LEN.HI, // 공격거리(attack_len)
        move_speed: MOVE_SPEED.MI, // 체력(hp),이동거리(move_speed),
        attack_speed: ATTACK_SPEED.HI, // 공격속도임. 이 값은 tick값임  공격속도빠름(10), 보통(25), 느림(50) 정도를 잡으면 됨.

        ap_start: 18, // 캐릭터 level 1일때의 attack power임
        ap_end: 70, // 캐릭터 level MAX(즉 1성인 경우 20일때의 attack power임)

        hp_start: 13, // 캐릭터 level 1일때의 hp
        hp_end: 400, // 캐릭터 level MAX(즉 1성인 경우 20일때의 hp임)

        nm_start: 70, // 캐릭터 level 1일때의 Need Mineral임
        nm_end: 220, // 캐릭터 level MAX(즉 1성인 경우 20일때의 Need Mineral임)

        max_level: 30, // 성장할 수 있는 최고 level
        center_gap_x: -10, // wait 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // wait 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.

        //yhlee 2016 06 22 추가
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가?  피격마진 이라 부른다.
        gagebar_x: 26, //게이지 bar 표기 x좌표
        gagebar_y: -8 //게이지 bar 표기 y좌표

    },
    {
        name: "BEBEE III", // 캐릭 이름
        filename: "ally_33", // 캐릭터의 파일 이름.
        feature: FEATURE.ATTACK, // 특징
        star: 3, //별몇개(1~8성),

        w: 149,
        h: 126, // 이미지의 크기 (width, height)
        move_frame_num: 8, // 이동시 사용되는 frame의 수
        wait_frame_num: 8, // 대기시 사용되는 frame의 수
        attack_frame_num: 13, //16	// 공격시 사용되는 frame의 수
        beattack_frame_num: 4, // 당할때 사용되는 frame의 수

        fire_frame_num: 6, // 미사일이 몇번에 끊어서 날아 갈까.
        fire_img_frame_num: 1, // 미사일 이미지 프레임수 (이미지 갯수 )
        attack_fire_frame: 9, //12	// 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?

        attack_len: ATTACK_LEN.HI, // 공격거리(attack_len)
        move_speed: MOVE_SPEED.MI, // 체력(hp),이동거리(move_speed),
        attack_speed: ATTACK_SPEED.HI, // 공격속도임. 이 값은 tick값임  공격속도빠름(10), 보통(25), 느림(50) 정도를 잡으면 됨.

        ap_start: 44, // 캐릭터 level 1일때의 attack power임
        ap_end: 210, // 캐릭터 level MAX(즉 1성인 경우 20일때의 attack power임)

        hp_start: 30, // 캐릭터 level 1일때의 hp
        hp_end: 1200, // 캐릭터 level MAX(즉 1성인 경우 20일때의 hp임)

        nm_start: 160, // 캐릭터 level 1일때의 Need Mineral임
        nm_end: 440, // 캐릭터 level MAX(즉 1성인 경우 20일때의 Need Mineral임)

        max_level: 40, // 성장할 수 있는 최고 level
        center_gap_x: 0, // wait 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // wait 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.

        //yhlee 2016 06 22 추가
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가?  피격마진 이라 부른다.
        gagebar_x: 40, //게이지 bar 표기 x좌표
        gagebar_y: -13 //게이지 bar 표기 y좌표

    },
    {
        name: "BEBEE IV", // 캐릭 이름
        filename: "ally_34", // 캐릭터의 파일 이름.
        feature: FEATURE.ATTACK, // 특징
        star: 4, //별몇개(1~8성),

        w: 134,
        h: 134, // 이미지의 크기 (width, height)
        move_frame_num: 8, // 이동시 사용되는 frame의 수
        wait_frame_num: 8, // 대기시 사용되는 frame의 수
        attack_frame_num: 17, //20	// 공격시 사용되는 frame의 수
        beattack_frame_num: 4, // 당할때 사용되는 frame의 수

        fire_frame_num: 24, // 발사시 사용되는 frame의 수
        fire_img_frame_num: 12, // 미사일 이미지 프레임수 (이미지 갯수 )
        attack_fire_frame: 6, //8		// 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?

        attack_len: ATTACK_LEN.HI, // 공격거리(attack_len)
        move_speed: MOVE_SPEED.MI, // 체력(hp),이동거리(move_speed),
        attack_speed: ATTACK_SPEED.HI, // 공격속도임. 이 값은 tick값임  공격속도빠름(10), 보통(25), 느림(50) 정도를 잡으면 됨.

        ap_start: 127, // 캐릭터 level 1일때의 attack power임
        ap_end: 840, // 캐릭터 level MAX(즉 1성인 경우 20일때의 attack power임)

        hp_start: 96, // 캐릭터 level 1일때의 hp
        hp_end: 4800, // 캐릭터 level MAX(즉 1성인 경우 20일때의 hp임)

        nm_start: 360, // 캐릭터 level 1일때의 Need Mineral임
        nm_end: 810, // 캐릭터 level MAX(즉 1성인 경우 20일때의 Need Mineral임)

        max_level: 50, // 성장할 수 있는 최고 level
        center_gap_x: -40, // wait 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // wait 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.

        //yhlee 2016 06 22 추가
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가?  피격마진 이라 부른다.
        gagebar_x: 62, //게이지 bar 표기 x좌표
        gagebar_y: -7 //게이지 bar 표기 y좌표

    },
    {
        name: "BEBEE V", // 캐릭 이름
        filename: "ally_35", // 캐릭터의 파일 이름.
        feature: FEATURE.WIDE, // 특징		//ywlee_20160511
        //feature:FEATURE.ATTACK,			// 특징
        star: 5, //별몇개(1~8성),

        w: 204,
        h: 168, // 이미지의 크기 (width, height)
        move_frame_num: 8, // 이동시 사용되는 frame의 수
        wait_frame_num: 8, // 대기시 사용되는 frame의 수
        attack_frame_num: 9, // 공격시 사용되는 frame의 수
        beattack_frame_num: 5, // 당할때 사용되는 frame의 수

        fire_frame_num: 9, // 발사시 사용되는 frame의 수
        fire_img_frame_num: 9, // 미사일 이미지 프레임수 (이미지 갯수 )
        attack_fire_frame: 3, //1		// 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?

        attack_len: ATTACK_LEN.VL, // 공격거리(attack_len)
        move_speed: MOVE_SPEED.MI, // 체력(hp),이동거리(move_speed),
        attack_speed: ATTACK_SPEED.LO, // 공격속도임. 이 값은 tick값임  공격속도빠름(10), 보통(25), 느림(50) 정도를 잡으면 됨.

        ap_start: 328, // 캐릭터 level 1일때의 attack power임
        ap_end: 2850, // 캐릭터 level MAX(즉 1성인 경우 20일때의 attack power임)

        hp_start: 1200, // 캐릭터 level 1일때의 hp
        hp_end: 72000, // 캐릭터 level MAX(즉 1성인 경우 20일때의 hp임)

        nm_start: 710, // 캐릭터 level 1일때의 Need Mineral임
        nm_end: 1370, // 캐릭터 level MAX(즉 1성인 경우 20일때의 Need Mineral임)

        max_level: 60, // 성장할 수 있는 최고 level, 필요 없을 수도 있겠다. star로 부터 유추 할 수 있으니...

        center_gap_x: 25, // wait 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // wait 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.

        //yhlee 2016 06 22 추가
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가?  피격마진 이라 부른다.
        gagebar_x: 46, //게이지 bar 표기 x좌표
        gagebar_y: 29 //게이지 bar 표기 y좌표

    },
    {
        name: "BEBEE VI", // 캐릭 이름
        filename: "ally_36", // 캐릭터의 파일 이름.
        feature: FEATURE.WIDE, // 특징
        star: 6, //별몇개(1~8성),

        w: 254,
        h: 210, // 이미지의 크기 (width, height)
        move_frame_num: 5, // 이동시 사용되는 frame의 수
        wait_frame_num: 8, // 대기시 사용되는 frame의 수
        attack_frame_num: 9, //11		// 공격시 사용되는 frame의 수
        beattack_frame_num: 4, // 당할때 사용되는 frame의 수

        //ywlee_20160511
        //fire_frame_num:4,				// 발사시 사용되는 frame의 수
        fire_frame_num: 4, // 발사시 사용되는 frame의 수

        fire_img_frame_num: 1, // 미사일 이미지 프레임수 (이미지 갯수 )
        attack_fire_frame: 9, //10	// 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?

        attack_len: ATTACK_LEN.MI, // 공격거리(attack_len)
        move_speed: MOVE_SPEED.LO, // 체력(hp),이동거리(move_speed),
        attack_speed: ATTACK_SPEED.VL, // 공격속도임. 이 값은 tick값임  공격속도빠름(10), 보통(25), 느림(50) 정도를 잡으면 됨.

        ap_start: 1589, // 캐릭터 level 1일때의 attack power임
        ap_end: 17100, // 캐릭터 level MAX(즉 1성인 경우 20일때의 attack power임)

        hp_start: 6171, // 캐릭터 level 1일때의 hp
        hp_end: 432000, // 캐릭터 level MAX(즉 1성인 경우 20일때의 hp임)

        nm_start: 1250, // 캐릭터 level 1일때의 Need Mineral임
        nm_end: 2160, // 캐릭터 level MAX(즉 1성인 경우 20일때의 Need Mineral임)

        max_level: 70, // 성장할 수 있는 최고 level, 필요 없을 수도 있겠다. star로 부터 유추 할 수 있으니...

        center_gap_x: 0, // wait 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // wait 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.

        //yhlee 2016 06 22 추가
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가?  피격마진 이라 부른다.
        gagebar_x: 46, //게이지 bar 표기 x좌표
        gagebar_y: -12 //게이지 bar 표기 y좌표

    },
    {
        name: "RUBY I", // 캐릭 이름
        filename: "ally_37", // 캐릭터의 파일 이름.
        feature: FEATURE.WIDE, // 특징
        star: 1, //별몇개(1~8성),

        w: 81,
        h: 115, // 이미지의 크기 (width, height)
        move_frame_num: 7, // 이동시 사용되는 frame의 수
        wait_frame_num: 8, // 대기시 사용되는 frame의 수
        attack_frame_num: 8, // 공격시 사용되는 frame의 수
        beattack_frame_num: 6, // 당할때 사용되는 frame의 수

        fire_frame_num: 10, // 발사시 사용되는 frame의 수+5 후폭풍수
        fire_img_frame_num: 1, // 미사일 이미지 프레임수 (이미지 갯수 )
        attack_fire_frame: 6, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        attack_len: ATTACK_LEN.MI, // 공격거리(attack_len)
        move_speed: MOVE_SPEED.MI, // 체력(hp),이동거리(move_speed),
        attack_speed: ATTACK_SPEED.VL, // 공격속도임. 이 값은 tick값임  공격속도빠름(10), 보통(25), 느림(50) 정도를 잡으면 됨.

        ap_start: 3, // 캐릭터 level 1일때의 attack power임
        ap_end: 30, // 캐릭터 level MAX(즉 1성인 경우 20일때의 attack power임)

        hp_start: 13, // 캐릭터 level 1일때의 hp
        hp_end: 260, // 캐릭터 level MAX(즉 1성인 경우 20일때의 hp임)

        nm_start: 40, // 캐릭터 level 1일때의 Need Mineral임
        nm_end: 100, // 캐릭터 level MAX(즉 1성인 경우 20일때의 Need Mineral임)

        max_level: 20, // 성장할 수 있는 최고 level
        center_gap_x: -20, // wait 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // wait 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.

        //yhlee 2016 06 22 추가
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가?  피격마진 이라 부른다.
        gagebar_x: 20, //게이지 bar 표기 x좌표
        gagebar_y: -9 //게이지 bar 표기 y좌표

    },
    {
        name: "RUBY II", // 캐릭 이름
        filename: "ally_38", // 캐릭터의 파일 이름.
        feature: FEATURE.WIDE, // 특징
        star: 2, //별몇개(1~8성),

        w: 96,
        h: 116, // 이미지의 크기 (width, height)
        move_frame_num: 8, // 이동시 사용되는 frame의 수
        wait_frame_num: 8, // 대기시 사용되는 frame의 수
        attack_frame_num: 9, // 공격시 사용되는 frame의 수
        beattack_frame_num: 6, // 당할때 사용되는 frame의 수

        fire_frame_num: 10, // 발사시 사용되는 frame의 수+5 후폭풍수
        fire_img_frame_num: 5, // 미사일 이미지 프레임수 (이미지 갯수 )
        attack_fire_frame: 8, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        attack_len: ATTACK_LEN.HI, // 공격거리(attack_len)
        move_speed: MOVE_SPEED.MI, // 체력(hp),이동거리(move_speed),
        attack_speed: ATTACK_SPEED.MI, // 공격속도임. 이 값은 tick값임  공격속도빠름(10), 보통(25), 느림(50) 정도를 잡으면 됨.

        ap_start: 15, // 캐릭터 level 1일때의 attack power임
        ap_end: 60, // 캐릭터 level MAX(즉 1성인 경우 20일때의 attack power임)

        hp_start: 17, // 캐릭터 level 1일때의 hp
        hp_end: 520, // 캐릭터 level MAX(즉 1성인 경우 20일때의 hp임)

        nm_start: 60, // 캐릭터 level 1일때의 Need Mineral임
        nm_end: 210, // 캐릭터 level MAX(즉 1성인 경우 20일때의 Need Mineral임)

        max_level: 30, // 성장할 수 있는 최고 level
        center_gap_x: -10, // wait 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // wait 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.

        //yhlee 2016 06 22 추가
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가?  피격마진 이라 부른다.
        gagebar_x: 20, //게이지 bar 표기 x좌표
        gagebar_y: -8 //게이지 bar 표기 y좌표

    },
    {
        name: "RUBY III", // 캐릭 이름
        filename: "ally_39", // 캐릭터의 파일 이름.
        feature: FEATURE.WIDE, // 특징
        star: 3, //별몇개(1~8성),

        w: 116,
        h: 139, // 이미지의 크기 (width, height)
        move_frame_num: 6, // 이동시 사용되는 frame의 수
        wait_frame_num: 8, // 대기시 사용되는 frame의 수
        attack_frame_num: 9, // 공격시 사용되는 frame의 수
        beattack_frame_num: 6, // 당할때 사용되는 frame의 수

        fire_frame_num: 17, // 발사시 사용되는 frame의 수+7 후폭풍수
        fire_img_frame_num: 10, // 미사일 이미지 프레임수 (이미지 갯수 )
        attack_fire_frame: 8, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        attack_len: ATTACK_LEN.HI, // 공격거리(attack_len)
        move_speed: MOVE_SPEED.MI, // 체력(hp),이동거리(move_speed),
        attack_speed: ATTACK_SPEED.MI, // 공격속도임. 이 값은 tick값임  공격속도빠름(10), 보통(25), 느림(50) 정도를 잡으면 됨.

        ap_start: 38, // 캐릭터 level 1일때의 attack power임
        ap_end: 180, // 캐릭터 level MAX(즉 1성인 경우 20일때의 attack power임)

        hp_start: 39, // 캐릭터 level 1일때의 hp
        hp_end: 1560, // 캐릭터 level MAX(즉 1성인 경우 20일때의 hp임)

        nm_start: 150, // 캐릭터 level 1일때의 Need Mineral임
        nm_end: 430, // 캐릭터 level MAX(즉 1성인 경우 20일때의 Need Mineral임)

        max_level: 40, // 성장할 수 있는 최고 level
        center_gap_x: -15, // wait 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // wait 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.

        //yhlee 2016 06 22 추가
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가?  피격마진 이라 부른다.
        gagebar_x: 35, //게이지 bar 표기 x좌표
        gagebar_y: -9 //게이지 bar 표기 y좌표

    },
    {
        name: "RUBY IV", // 캐릭 이름
        filename: "ally_40", // 캐릭터의 파일 이름.
        feature: FEATURE.WIDE, // 특징
        star: 4, //별몇개(1~8성),

        w: 126,
        h: 119, // 이미지의 크기 (width, height)
        move_frame_num: 8, // 이동시 사용되는 frame의 수
        wait_frame_num: 8, // 대기시 사용되는 frame의 수
        attack_frame_num: 9, // 공격시 사용되는 frame의 수
        beattack_frame_num: 6, // 당할때 사용되는 frame의 수

        //fire_frame_num:30,				// 발사시 사용되는 frame의 수+24 후폭풍수
        fire_frame_num: 36, // 발사시 사용되는 frame의 수+24 후폭풍수
        fire_img_frame_num: 12, // 미사일 이미지 프레임수 (이미지 갯수 )
        attack_fire_frame: 8, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        attack_len: ATTACK_LEN.VH * 1.2, // 공격거리(attack_len)
        move_speed: MOVE_SPEED.MI, // 체력(hp),이동거리(move_speed),
        attack_speed: ATTACK_SPEED.VL * 2, // 공격속도임. 이 값은 tick값임  공격속도빠름(10), 보통(25), 느림(50) 정도를 잡으면 됨.

        ap_start: 109, // 캐릭터 level 1일때의 attack power임
        ap_end: 720, // 캐릭터 level MAX(즉 1성인 경우 20일때의 attack power임)

        hp_start: 125, // 캐릭터 level 1일때의 hp
        hp_end: 6240, // 캐릭터 level MAX(즉 1성인 경우 20일때의 hp임)

        nm_start: 350, // 캐릭터 level 1일때의 Need Mineral임
        nm_end: 800, // 캐릭터 level MAX(즉 1성인 경우 20일때의 Need Mineral임)

        max_level: 50, // 성장할 수 있는 최고 level
        center_gap_x: -40, // wait 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // wait 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.

        //yhlee 2016 06 22 추가
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가?  피격마진 이라 부른다.
        gagebar_x: 53, //게이지 bar 표기 x좌표
        gagebar_y: -13 //게이지 bar 표기 y좌표

    },
    {
        name: "RUBY V", // 캐릭 이름
        filename: "ally_41", // 캐릭터의 파일 이름.
        feature: FEATURE.WIDE, // 특징
        star: 5, //별몇개(1~8성),

        w: 123,
        h: 150, // 이미지의 크기 (width, height)
        move_frame_num: 8, // 이동시 사용되는 frame의 수
        wait_frame_num: 8, // 대기시 사용되는 frame의 수
        attack_frame_num: 14, // 공격시 사용되는 frame의 수
        beattack_frame_num: 6, // 당할때 사용되는 frame의 수
        /*
        		fire_frame_num:25,				// 발사시 사용되는 frame의 수+24 후폭풍수
        		fire_img_frame_num:1,			// 미사일 이미지 프레임수 (이미지 갯수 )
        		attack_fire_frame:12,			// 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        		attack_len:ATTACK_LEN.VH*1.2,		// 공격거리(attack_len)
        		move_speed:MOVE_SPEED.MI,		// 체력(hp),이동거리(move_speed),
        		attack_speed:ATTACK_SPEED.VL*2,	// 공격속도임. 이 값은 tick값임  공격속도빠름(10), 보통(25), 느림(50) 정도를 잡으면 됨.
        */

        fire_frame_num: 7, // 발사시 사용되는 frame의 수
        fire_img_frame_num: 1, // 미사일 이미지 프레임수 (이미지 갯수 )
        attack_fire_frame: 12, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        attack_len: ATTACK_LEN.VH, // 공격거리(attack_len)
        move_speed: MOVE_SPEED.MI, // 체력(hp),이동거리(move_speed),
        attack_speed: ATTACK_SPEED.MI, // 공격속도임. 이 값은 tick값임  공격속도빠름(10), 보통(25), 느림(50) 정도를 잡으면 됨.

        ap_start: 414, // 캐릭터 level 1일때의 attack power임
        ap_end: 3600, // 캐릭터 level MAX(즉 1성인 경우 20일때의 attack power임)

        hp_start: 520, // 캐릭터 level 1일때의 hp
        hp_end: 31200, // 캐릭터 level MAX(즉 1성인 경우 20일때의 hp임)

        nm_start: 700, // 캐릭터 level 1일때의 Need Mineral임
        nm_end: 1360, // 캐릭터 level MAX(즉 1성인 경우 20일때의 Need Mineral임)

        max_level: 60, // 성장할 수 있는 최고 level
        center_gap_x: -15, // wait 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // wait 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.

        //yhlee 2016 06 22 추가
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가?  피격마진 이라 부른다.
        gagebar_x: 33, //게이지 bar 표기 x좌표
        gagebar_y: 20 //게이지 bar 표기 y좌표

    },
    {
        name: "RUBY VI", // 캐릭 이름
        filename: "ally_42", // 캐릭터의 파일 이름.
        feature: FEATURE.WIDE, // 특징
        star: 6, //별몇개(1~8성),

        w: 265,
        h: 254, // 이미지의 크기 (width, height)
        move_frame_num: 12, // 이동시 사용되는 frame의 수
        wait_frame_num: 8, // 대기시 사용되는 frame의 수
        attack_frame_num: 10, // 공격시 사용되는 frame의 수
        beattack_frame_num: 6, // 당할때 사용되는 frame의 수

        fire_frame_num: 19, // 발사시 사용되는 frame의 수   실제 미사일 frame의 수 +8 , 포물선 frame 추가 +2 , 후폭풍 +9  포함 총합 19
        fire_img_frame_num: 1, // 미사일 이미지 프레임수 (이미지 갯수 )
        attack_fire_frame: 6, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        attack_len: ATTACK_LEN.VH + 10, // 공격거리(attack_len)
        move_speed: MOVE_SPEED.MI, // 체력(hp),이동거리(move_speed),
        attack_speed: ATTACK_SPEED.MI, // 공격속도임. 이 값은 tick값임  공격속도빠름(10), 보통(25), 느림(50) 정도를 잡으면 됨.

        ap_start: 2007, // 캐릭터 level 1일때의 attack power임
        ap_end: 21600, // 캐릭터 level MAX(즉 1성인 경우 20일때의 attack power임)

        hp_start: 2674, // 캐릭터 level 1일때의 hp
        hp_end: 350000, // 캐릭터 level MAX(즉 1성인 경우 20일때의 hp임)

        nm_start: 1240, // 캐릭터 level 1일때의 Need Mineral임
        nm_end: 2150, // 캐릭터 level MAX(즉 1성인 경우 20일때의 Need Mineral임)

        max_level: 70, // 성장할 수 있는 최고 level
        center_gap_x: 28, // wait 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // wait 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.

        //yhlee 2016 06 22 추가
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가?  피격마진 이라 부른다.
        gagebar_x: 81, //게이지 bar 표기 x좌표
        gagebar_y: -8 //게이지 bar 표기 y좌표

    },
    /// 황금맨 추가	/////
    {
        name: "GOLDMAN II", // 캐릭 이름
        filename: "ally_43", // 캐릭터의 파일 이름.
        feature: FEATURE.ATTACK, // 특징
        star: 2, //별몇개(1~8성),

        w: 202,
        h: 176, // 이미지의 크기 (width, height)
        move_frame_num: 11, // 이동시 사용되는 frame의 수
        wait_frame_num: 10, // 대기시 사용되는 frame의 수
        attack_frame_num: 11, // 공격시 사용되는 frame의 수
        beattack_frame_num: 6, // 당할때 사용되는 frame의 수

        fire_frame_num: 6, // 발사시 사용되는 frame의 수
        fire_img_frame_num: 0, // 미사일 이미지 프레임수 (이미지 갯수 ) - 몸빵임
        attack_fire_frame: 6, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        attack_len: ATTACK_LEN.VL, // 공격거리(attack_len)
        move_speed: MOVE_SPEED.LO, // 체력(hp),이동거리(move_speed),
        attack_speed: ATTACK_SPEED.MI, // 공격속도임. 이 값은 tick값임  공격속도빠름(10), 보통(25), 느림(50) 정도를 잡으면 됨.

        ap_start: 18, // 캐릭터 level 1일때의 attack power임
        ap_end: 70 * BALANCE.GOLDMAN_AP, // 캐릭터 level MAX(즉 1성인 경우 20일때의 attack power임)

        hp_start: 13, // 캐릭터 level 1일때의 hp
        hp_end: 400 * BALANCE.GOLDMAN_HP, // 캐릭터 level MAX(즉 1성인 경우 20일때의 hp임)

        nm_start: 70, // 캐릭터 level 1일때의 Need Mineral임
        nm_end: 220, // 캐릭터 level MAX(즉 1성인 경우 20일때의 Need Mineral임)

        max_level: 30, // 성장할 수 있는 최고 level
        center_gap_x: 20, // wait 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // wait 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.

        //yhlee 2016 06 22 추가
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가?  피격마진 이라 부른다.
        gagebar_x: 50, //게이지 bar 표기 x좌표
        gagebar_y: 15 //게이지 bar 표기 y좌표

    },
    {
        name: "GOLDMAN III", // 캐릭 이름
        filename: "ally_44", // 캐릭터의 파일 이름.
        feature: FEATURE.ATTACK, // 특징
        star: 3, //별몇개(1~8성),

        w: 196,
        h: 162, // 이미지의 크기 (width, height)
        move_frame_num: 11, // 이동시 사용되는 frame의 수
        wait_frame_num: 10, // 대기시 사용되는 frame의 수
        attack_frame_num: 12, // 공격시 사용되는 frame의 수
        beattack_frame_num: 6, // 당할때 사용되는 frame의 수

        fire_frame_num: 6, // 발사시 사용되는 frame의 수
        fire_img_frame_num: 0, // 미사일 이미지 프레임수 (이미지 갯수 ) - 몸빵임
        attack_fire_frame: 9, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        attack_len: ATTACK_LEN.VL, // 공격거리(attack_len)
        move_speed: MOVE_SPEED.LO, // 체력(hp),이동거리(move_speed),
        attack_speed: ATTACK_SPEED.MI, // 공격속도임. 이 값은 tick값임  공격속도빠름(10), 보통(25), 느림(50) 정도를 잡으면 됨.

        ap_start: 44, // 캐릭터 level 1일때의 attack power임
        ap_end: 210 * BALANCE.GOLDMAN_AP, // 캐릭터 level MAX(즉 1성인 경우 20일때의 attack power임)

        hp_start: 30, // 캐릭터 level 1일때의 hp
        hp_end: 1200 * BALANCE.GOLDMAN_HP, // 캐릭터 level MAX(즉 1성인 경우 20일때의 hp임)

        nm_start: 160, // 캐릭터 level 1일때의 Need Mineral임
        nm_end: 440, // 캐릭터 level MAX(즉 1성인 경우 20일때의 Need Mineral임)

        max_level: 40, // 성장할 수 있는 최고 level
        center_gap_x: 20, // wait 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // wait 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.

        //yhlee 2016 06 22 추가
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가?  피격마진 이라 부른다.
        gagebar_x: 50, //게이지 bar 표기 x좌표
        gagebar_y: 5 //게이지 bar 표기 y좌표

    },
    {
        name: "GOLDMAN IV", // 캐릭 이름
        filename: "ally_45", // 캐릭터의 파일 이름.
        feature: FEATURE.ATTACK, // 특징
        star: 4, //별몇개(1~8성),

        w: 254,
        h: 187, // 이미지의 크기 (width, height)
        move_frame_num: 12, // 이동시 사용되는 frame의 수
        wait_frame_num: 10, // 대기시 사용되는 frame의 수
        attack_frame_num: 14, // 공격시 사용되는 frame의 수
        beattack_frame_num: 6, // 당할때 사용되는 frame의 수

        fire_frame_num: 6, // 발사시 사용되는 frame의 수
        fire_img_frame_num: 0, // 미사일 이미지 프레임수 (이미지 갯수 ) - 몸빵임
        attack_fire_frame: 11, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        attack_len: ATTACK_LEN.VL, // 공격거리(attack_len)
        move_speed: MOVE_SPEED.MI, // 체력(hp),이동거리(move_speed),
        attack_speed: ATTACK_SPEED.MI, // 공격속도임. 이 값은 tick값임  공격속도빠름(10), 보통(25), 느림(50) 정도를 잡으면 됨.

        ap_start: 127, // 캐릭터 level 1일때의 attack power임
        ap_end: 840 * BALANCE.GOLDMAN_AP, // 캐릭터 level MAX(즉 1성인 경우 20일때의 attack power임)

        hp_start: 96, // 캐릭터 level 1일때의 hp
        hp_end: 4800 * BALANCE.GOLDMAN_HP, // 캐릭터 level MAX(즉 1성인 경우 20일때의 hp임)

        nm_start: 360, // 캐릭터 level 1일때의 Need Mineral임
        nm_end: 810, // 캐릭터 level MAX(즉 1성인 경우 20일때의 Need Mineral임)

        max_level: 50, // 성장할 수 있는 최고 level
        center_gap_x: 30, // wait 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // wait 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.

        //yhlee 2016 06 22 추가
        beattack_margine: -90, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가?  피격마진 이라 부른다.
        gagebar_x: 66, //게이지 bar 표기 x좌표
        gagebar_y: 30 //게이지 bar 표기 y좌표
    },
    {
        name: "GOLDMAN V", // 캐릭 이름
        filename: "ally_46", // 캐릭터의 파일 이름.
        feature: FEATURE.ATTACK, // 특징
        star: 5, //별몇개(1~8성),

        w: 254,
        h: 187, // 이미지의 크기 (width, height)
        move_frame_num: 12, // 이동시 사용되는 frame의 수
        wait_frame_num: 10, // 대기시 사용되는 frame의 수
        attack_frame_num: 12, // 공격시 사용되는 frame의 수
        beattack_frame_num: 6, // 당할때 사용되는 frame의 수

        fire_frame_num: 6, // 발사시 사용되는 frame의 수
        fire_img_frame_num: 0, // 미사일 이미지 프레임수 (이미지 갯수 ) - 몸빵임
        attack_fire_frame: 9, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        attack_len: ATTACK_LEN.VL, // 공격거리(attack_len)
        move_speed: MOVE_SPEED.HI, // 체력(hp),이동거리(move_speed),
        attack_speed: ATTACK_SPEED.VH, // 공격속도임. 이 값은 tick값임  공격속도빠름(10), 보통(25), 느림(50) 정도를 잡으면 됨.

        ap_start: 600, // 캐릭터 level 1일때의 attack power임
        ap_end: 3500 * BALANCE.GOLDMAN_AP, // 캐릭터 level MAX(즉 1성인 경우 20일때의 attack power임)

        hp_start: 600, // 캐릭터 level 1일때의 hp
        hp_end: 24000 * BALANCE.GOLDMAN_HP, // 캐릭터 level MAX(즉 1성인 경우 20일때의 hp임)

        nm_start: 710, // 캐릭터 level 1일때의 Need Mineral임
        nm_end: 1370, // 캐릭터 level MAX(즉 1성인 경우 20일때의 Need Mineral임)

        max_level: 60, // 성장할 수 있는 최고 level
        center_gap_x: 30, // wait 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // wait 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.

        //yhlee 2016 06 22 추가
        beattack_margine: -20, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가?  피격마진 이라 부른다.
        gagebar_x: 70, //게이지 bar 표기 x좌표
        gagebar_y: 35 //게이지 bar 표기 y좌표
    },
    {
        name: "GOLDMAN VI", // 캐릭 이름
        filename: "ally_47", // 캐릭터의 파일 이름.
        feature: FEATURE.WIDE, // 특징
        star: 6, //별몇개(1~8성),

        w: 296,
        h: 242, // 이미지의 크기 (width, height)
        move_frame_num: 12, // 이동시 사용되는 frame의 수
        wait_frame_num: 10, // 대기시 사용되는 frame의 수
        attack_frame_num: 12, // 공격시 사용되는 frame의 수
        beattack_frame_num: 6, // 당할때 사용되는 frame의 수

        fire_frame_num: 18, // 발사시 사용되는 frame의 수   //20이지만 18번쯤 날라 갈때 정산하는 것도 나쁘지 않다.
        fire_img_frame_num: 3, // 미사일 이미지 프레임수 (이미지 갯수 )
        attack_fire_frame: 8, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        attack_len: ATTACK_LEN.VH * 1.5, // 공격거리(attack_len)
        move_speed: MOVE_SPEED.MI, // 체력(hp),이동거리(move_speed),
        attack_speed: ATTACK_SPEED.HI, // 공격속도임. 이 값은 tick값임  공격속도빠름(10), 보통(25), 느림(50) 정도를 잡으면 됨.

        ap_start: 2000, // 캐릭터 level 1일때의 attack power임
        ap_end: 20000 * BALANCE.GOLDMAN_AP, // 캐릭터 level MAX(즉 1성인 경우 20일때의 attack power임)

        hp_start: 2057, // 캐릭터 level 1일때의 hp
        hp_end: 124000 * BALANCE.GOLDMAN_HP, // 캐릭터 level MAX(즉 1성인 경우 20일때의 hp임)

        nm_start: 1250, // 캐릭터 level 1일때의 Need Mineral임
        nm_end: 2160, // 캐릭터 level MAX(즉 1성인 경우 20일때의 Need Mineral임)

        max_level: 70, // 성장할 수 있는 최고 level
        center_gap_x: 12, // wait 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // wait 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.

        //yhlee 2016 06 22 추가
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가?  피격마진 이라 부른다.
        gagebar_x: 90, //게이지 bar 표기 x좌표
        gagebar_y: 35 //게이지 bar 표기 y좌표
    },
    {
        name: "GOLDMAN VII", // 캐릭 이름
        filename: "ally_48", // 캐릭터의 파일 이름.
        feature: FEATURE.WIDE, // 특징
        star: 7, //별몇개(1~8성),

        w: 311,
        h: 299, // 이미지의 크기 (width, height)
        move_frame_num: 10, // 이동시 사용되는 frame의 수
        wait_frame_num: 10, // 대기시 사용되는 frame의 수
        attack_frame_num: 12, // 공격시 사용되는 frame의 수
        beattack_frame_num: 6, // 당할때 사용되는 frame의 수

        fire_frame_num: 6, // 발사시 사용되는 frame의 수   //20이지만 18번쯤 날라 갈때 정산하는 것도 나쁘지 않다.
        fire_img_frame_num: 6, // 미사일 이미지 프레임수 (이미지 갯수 )
        attack_fire_frame: 7, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        attack_len: ATTACK_LEN.VH * 1.5, // 공격거리(attack_len)
        move_speed: MOVE_SPEED.VL, // 체력(hp),이동거리(move_speed),
        attack_speed: ATTACK_SPEED.VL * 1.2, // 공격속도임. 이 값은 tick값임  공격속도빠름(10), 보통(25), 느림(50) 정도를 잡으면 됨.

        ap_start: 10000, //10000						// 캐릭터 level 1일때의 attack power임
        ap_end: 200000 * BALANCE.GOLDMAN_AP, //100000						// 캐릭터 level MAX(즉 1성인 경우 20일때의 attack power임)

        hp_start: 10000, // 캐릭터 level 1일때의 hp
        hp_end: 450000 * BALANCE.GOLDMAN_HP, // 캐릭터 level MAX(즉 1성인 경우 20일때의 hp임)

        nm_start: 2700, //1800					// 캐릭터 level 1일때의 Need Mineral임
        nm_end: 4000, // 캐릭터 level MAX(즉 1성인 경우 20일때의 Need Mineral임)

        max_level: 80, // 성장할 수 있는 최고 level
        center_gap_x: -6, // wait 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: -3, // wait 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.

        //yhlee 2016 06 22 추가
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가?  피격마진 이라 부른다.
        gagebar_x: 130, //게이지 bar 표기 x좌표
        gagebar_y: 35 //게이지 bar 표기 y좌표
    },
    /// 황금맨 추가 -- 끝 -- ////


    {
        name: "RUSY VII", // 루시7성 - 대천사루시 - 특수기능:힐러 -- 힐러가 발동되면 우리 아군의 피를 10%씩 올려 준다.
        filename: "ally_49", // 캐릭터의 파일 이름.
        feature: FEATURE.WIDE, // 특징
        star: 7, //별몇개(1~8성),

        w: 384,
        h: 331, // 이미지의 크기 (width, height)
        move_frame_num: 10, // 이동시 사용되는 frame의 수
        wait_frame_num: 10, // 대기시 사용되는 frame의 수
        attack_frame_num: 18, // 공격 모션에 사용되는 frame의 수
        beattack_frame_num: 6, // 당할때 사용되는 frame의 수

        fire_frame_num: 8, //10,			// 발사시 사용되는 frame의 수 //몇frame으로 몇 단계로 날아 가겠느냐. 주로 아래 fire_img_frmae_num과 같다.
        fire_img_frame_num: 8, //10,			// 미사일 이미지 프레임수 (이미지 갯수 )

        attack_fire_frame: 13, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        attack_len: ATTACK_LEN.VH * 2.0, // 공격거리(attack_len)
        move_speed: MOVE_SPEED.HI, // 체력(hp),이동거리(move_speed),
        attack_speed: ATTACK_SPEED.MI, // 공격속도임. 이 값은 tick값임  공격속도빠름(10), 보통(25), 느림(50) 정도를 잡으면 됨.

        ap_start: 8000, // 캐릭터 level 1일때의 attack power임
        ap_end: 50000, // 캐릭터 level MAX(즉 1성인 경우 20일때의 attack power임)

        hp_start: 10000, // 캐릭터 level 1일때의 hp
        hp_end: 380000, // 캐릭터 level MAX(즉 1성인 경우 20일때의 hp임)

        nm_start: 1900, // 캐릭터 level 1일때의 Need Mineral임
        nm_end: 6000, // 캐릭터 level MAX(즉 1성인 경우 20일때의 Need Mineral임)

        max_level: 80, // 성장할 수 있는 최고 level
        center_gap_x: 8, // wait 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // wait 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.

        //yhlee 2016 06 22 추가
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가?  피격마진 이라 부른다.
        gagebar_x: 150, //게이지 bar 표기 x좌표
        gagebar_y: 116 //게이지 bar 표기 y좌표

    },
    {
        name: "RUSY VII", // 루시7성-쎈언니 - 특수기능: 반피, 한번의 공격으로 상대HP를 무조건 반피로 만든다. 만약, 반피보다 더 많이 깎여야 하는 공격은 그렇게 한다.
        filename: "ally_50", // 캐릭터의 파일 이름.
        feature: FEATURE.WIDE, // 특징
        star: 7, //별몇개(1~8성),

        w: 460,
        h: 277, // 이미지의 크기 (width, height)
        move_frame_num: 8, // 이동시 사용되는 frame의 수
        wait_frame_num: 8, // 대기시 사용되는 frame의 수
        attack_frame_num: 23, // 공격시 사용되는 frame의 수
        beattack_frame_num: 6, // 당할때 사용되는 frame의 수

        fire_frame_num: 5, // 발사시 사용되는 frame의 수 //몇frame으로 몇 단계로 날아 가겠느냐. //공격 몇frame에 damage 줄래
        fire_img_frame_num: 1, // 미사일 이미지 프레임수 (fire 이미지 갯수  )
        attack_fire_frame: 20 - 5, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가? 14 frame부터 발사해서 20 frame에 데미지를 입히자. -5는 fire_frame_num의 값이다.
        attack_len: ATTACK_LEN.MI, // 공격거리(attack_len)
        move_speed: MOVE_SPEED.VH * 2, // 체력(hp),이동거리(move_speed),
        attack_speed: ATTACK_SPEED.VH, // 공격속도임. 이 값은 tick값임  공격속도빠름(10), 보통(25), 느림(50) 정도를 잡으면 됨.

        ap_start: 11000, // 캐릭터 level 1일때의 attack power임
        ap_end: 210000, // 캐릭터 level MAX(즉 1성인 경우 20일때의 attack power임)

        hp_start: 50000, // 캐릭터 level 1일때의 hp
        hp_end: 550000, // 캐릭터 level MAX(즉 1성인 경우 20일때의 hp임)

        nm_start: 2000, // 캐릭터 level 1일때의 Need Mineral임
        nm_end: 5000, // 캐릭터 level MAX(즉 1성인 경우 20일때의 Need Mineral임)

        max_level: 80, // 성장할 수 있는 최고 level
        center_gap_x: 15, // wait 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // wait 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.

        //yhlee 2016 06 22 추가
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가?  피격마진 이라 부른다.
        gagebar_x: 121, //게이지 bar 표기 x좌표
        gagebar_y: 77 //게이지 bar 표기 y좌표

    },
    {
        name: "GINGERMAN II", // 캐릭 이름
        filename: "ally_51", // 캐릭터의 파일 이름.
        feature: FEATURE.ATTACK, // 특징
        star: 2, //별몇개(1~8성),

        w: 165,
        h: 160, // 이미지의 크기 (width, height)
        move_frame_num: 10, // 이동시 사용되는 frame의 수
        wait_frame_num: 10, // 대기시 사용되는 frame의 수
        attack_frame_num: 12, // 공격시 사용되는 frame의 수
        beattack_frame_num: 6, // 당할때 사용되는 frame의 수

        fire_frame_num: 7, // 상대편 damage를 몇 frame부터 줄 것인가 attack_frame_num보다 작아야 한다.
        fire_img_frame_num: 0, // 진저맨의 공격은 프레임에 붙어 있다. 그래서 0이다.
        attack_fire_frame: 5, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가? fire_frame_num(7);

        attack_len: ATTACK_LEN.VL, // 공격거리(attack_len)
        move_speed: MOVE_SPEED.HI, // 체력(hp),이동거리(move_speed),
        attack_speed: ATTACK_SPEED.MI, // 공격속도임. 이 값은 tick값임  공격속도빠름(10), 보통(25), 느림(50) 정도를 잡으면 됨.

        ap_start: 23, // 캐릭터 level 1일때의 attack power임
        ap_end: 91, // 캐릭터 level MAX(즉 1성인 경우 20일때의 attack power임)

        hp_start: 16, // 캐릭터 level 1일때의 hp
        hp_end: 480, // 캐릭터 level MAX(즉 1성인 경우 20일때의 hp임)

        nm_start: 84, // 캐릭터 level 1일때의 Need Mineral임
        nm_end: 264, // 캐릭터 level MAX(즉 1성인 경우 20일때의 Need Mineral임)

        max_level: 30, // 성장할 수 있는 최고 level
        center_gap_x: 16, // wait 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // wait 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.

        //yhlee 2016 06 22 추가
        beattack_margine: 20, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가?  피격마진 이라 부른다.
        gagebar_x: 46, //게이지 bar 표기 x좌표
        gagebar_y: 33 //게이지 bar 표기 y좌표

    },
    {
        name: "GINGERMAN III", // 캐릭 이름
        filename: "ally_52", // 캐릭터의 파일 이름.
        feature: FEATURE.ATTACK, // 특징
        star: 3, //별몇개(1~8성),

        w: 219,
        h: 153, // 이미지의 크기 (width, height)
        move_frame_num: 10, // 이동시 사용되는 frame의 수
        wait_frame_num: 10, // 대기시 사용되는 frame의 수
        attack_frame_num: 12, // 공격시 사용되는 frame의 수
        beattack_frame_num: 6, // 당할때 사용되는 frame의 수

        fire_frame_num: 7, // 발사시 사용되는 frame의 수
        fire_img_frame_num: 0, // 미사일 이미지 프레임수 (이미지 갯수 )
        attack_fire_frame: 4, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?

        attack_len: ATTACK_LEN.VL, // 공격거리(attack_len)
        move_speed: MOVE_SPEED.HI, // 체력(hp),이동거리(move_speed),
        attack_speed: ATTACK_SPEED.HI, // 공격속도임. 이 값은 tick값임  공격속도빠름(10), 보통(25), 느림(50) 정도를 잡으면 됨.

        ap_start: 57, // 캐릭터 level 1일때의 attack power임
        ap_end: 273, // 캐릭터 level MAX(즉 1성인 경우 20일때의 attack power임)

        hp_start: 36, // 캐릭터 level 1일때의 hp
        hp_end: 1440, // 캐릭터 level MAX(즉 1성인 경우 20일때의 hp임)

        nm_start: 192, // 캐릭터 level 1일때의 Need Mineral임
        nm_end: 528, // 캐릭터 level MAX(즉 1성인 경우 20일때의 Need Mineral임)

        max_level: 40, // 성장할 수 있는 최고 level

        center_gap_x: 28, // wait 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // wait 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.

        //yhlee 2016 06 22 추가
        beattack_margine: -80, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가?  피격마진 이라 부른다.
        gagebar_x: 57, //게이지 bar 표기 x좌표
        gagebar_y: 25 //게이지 bar 표기 y좌표

    },
    {
        name: "GINGERMAN IV", // 캐릭 이름
        filename: "ally_53", // 캐릭터의 파일 이름.
        feature: FEATURE.ATTACK, // 특징
        star: 4, //별몇개(1~8성),

        w: 224,
        h: 156, // 이미지의 크기 (width, height)
        move_frame_num: 10, // 이동시 사용되는 frame의 수
        wait_frame_num: 10, // 대기시 사용되는 frame의 수
        attack_frame_num: 12, // 공격시 사용되는 frame의 수
        beattack_frame_num: 6, // 당할때 사용되는 frame의 수

        fire_frame_num: 9, // 미사일 날라 가다가 몇 frame에 damage줄래? 6frame날라가고 후폭풍있는 10쯤
        fire_img_frame_num: 4, // 미사일 이미지 프레임수 (이미지 갯수 )
        attack_fire_frame: 9, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가? //사용안됨.

        attack_len: ATTACK_LEN.HI, // 공격거리(attack_len)
        move_speed: MOVE_SPEED.HI, // 체력(hp),이동거리(move_speed),
        attack_speed: ATTACK_SPEED.HI, // 공격속도임. 이 값은 tick값임  공격속도빠름(10), 보통(25), 느림(50) 정도를 잡으면 됨.

        ap_start: 165, // 캐릭터 level 1일때의 attack power임
        ap_end: 1092, // 캐릭터 level MAX(즉 1성인 경우 20일때의 attack power임)

        hp_start: 115, // 캐릭터 level 1일때의 hp
        hp_end: 5760, // 캐릭터 level MAX(즉 1성인 경우 20일때의 hp임)

        nm_start: 460, // 캐릭터 level 1일때의 Need Mineral임
        nm_end: 910, // 캐릭터 level MAX(즉 1성인 경우 20일때의 Need Mineral임)

        max_level: 50, // 성장할 수 있는 최고 level
        center_gap_x: 36, // wait 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // wait 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.

        //yhlee 2016 06 22 추가
        beattack_margine: 20, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가?  피격마진 이라 부른다.
        gagebar_x: 55, //게이지 bar 표기 x좌표
        gagebar_y: 15 //게이지 bar 표기 y좌표

    },
    {
        name: "GINGERMAN V", // 캐릭 이름 - 닌자
        filename: "ally_54", // 캐릭터의 파일 이름.
        feature: FEATURE.SPEED, // 특징
        star: 5, //별몇개(1~8성),

        w: 140,
        h: 275, // 이미지의 크기 (width, height)
        move_frame_num: 10, // 이동시 사용되는 frame의 수
        wait_frame_num: 10, // 대기시 사용되는 frame의 수
        attack_frame_num: 17, // 공격시 사용되는 frame의 수
        beattack_frame_num: 6, // 당할때 사용되는 frame의 수

        fire_frame_num: 7, // 미사일 날라 가다가 몇 frame에 damage줄래? 6frame날라가고 후폭풍있는 10쯤
        fire_img_frame_num: 7, // 미사일 이미지 프레임수 (이미지 갯수 )
        attack_fire_frame: 11, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가? //사용안함.

        attack_len: ATTACK_LEN.HI, // 공격거리(attack_len)
        move_speed: MOVE_SPEED.VH, // 체력(hp),이동거리(move_speed),
        attack_speed: ATTACK_SPEED.VH, // 공격속도임. 이 값은 tick값임  공격속도빠름(10), 보통(25), 느림(50) 정도를 잡으면 됨.

        ap_start: 600, // 캐릭터 level 1일때의 attack power임
        ap_end: 4550, // 캐릭터 level MAX(즉 1성인 경우 20일때의 attack power임)

        hp_start: 600, // 캐릭터 level 1일때의 hp
        hp_end: 28800, // 캐릭터 level MAX(즉 1성인 경우 20일때의 hp임)

        nm_start: 810, // 캐릭터 level 1일때의 Need Mineral임
        nm_end: 1470, // 캐릭터 level MAX(즉 1성인 경우 20일때의 Need Mineral임)

        max_level: 60, // 성장할 수 있는 최고 level
        center_gap_x: 0, // wait 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // wait 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.

        //yhlee 2016 06 22 추가
        beattack_margine: 20, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가?  피격마진 이라 부른다.
        gagebar_x: 42, //게이지 bar 표기 x좌표
        gagebar_y: 140 //게이지 bar 표기 y좌표

    },
    {
        name: "GINGERMAN VI", // 캐릭 이름
        filename: "ally_55", // 캐릭터의 파일 이름.
        feature: FEATURE.WIDE, // 특징
        star: 6, //별몇개(1~8성),

        w: 224,
        h: 160, // 이미지의 크기 (width, height)
        move_frame_num: 10, // 이동시 사용되는 frame의 수
        wait_frame_num: 10, // 대기시 사용되는 frame의 수
        attack_frame_num: 16, // 공격시 사용되는 frame의 수
        beattack_frame_num: 6, // 당할때 사용되는 frame의 수

        fire_frame_num: 9, // 미사일 날라 가다가 몇 frame에 damage줄래? 6frame날라가고 후폭풍있는 10쯤
        fire_img_frame_num: 3, // 미사일 이미지 프레임수 (이미지 갯수 )
        attack_fire_frame: 12, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가? //사용안함.

        attack_len: ATTACK_LEN.VH * 1.3, // 공격거리(attack_len)
        move_speed: MOVE_SPEED.HI, // 체력(hp),이동거리(move_speed),
        attack_speed: ATTACK_SPEED.HI, // 공격속도임. 이 값은 tick값임  공격속도빠름(10), 보통(25), 느림(50) 정도를 잡으면 됨.

        ap_start: 2100, // 캐릭터 level 1일때의 attack power임
        ap_end: 26000, // 캐릭터 level MAX(즉 1성인 경우 20일때의 attack power임)

        hp_start: 2100, // 캐릭터 level 1일때의 hp
        hp_end: 148800, // 캐릭터 level MAX(즉 1성인 경우 20일때의 hp임)

        nm_start: 1240, // 캐릭터 level 1일때의 Need Mineral임
        nm_end: 2150, // 캐릭터 level MAX(즉 1성인 경우 20일때의 Need Mineral임)

        max_level: 70, // 성장할 수 있는 최고 level

        center_gap_x: 16, // wait 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // wait 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.

        beattack_margine: -50, //적군이 아군 공격할때 얼마나 더 가깍이 가서 발사 할 것인가 이다.
        gagebar_x: 62, //게이지 bar 표기 x좌표
        gagebar_y: 14 //게이지 bar 표기 y좌표

    },
    {
        name: "GINGERMAN VII", // 캐릭 이름
        filename: "ally_56", // 캐릭터의 파일 이름.
        feature: FEATURE.WIDE, // 특징
        star: 7, //별몇개(1~8성),

        w: 308,
        h: 241, // 이미지의 크기 (width, height)
        move_frame_num: 10, // 이동시 사용되는 frame의 수
        wait_frame_num: 10, // 대기시 사용되는 frame의 수
        attack_frame_num: 17, // 공격시 사용되는 frame의 수
        beattack_frame_num: 6, // 당할때 사용되는 frame의 수

        fire_frame_num: 12, // 미사일 날라 가다가 몇 frame에 damage줄래? 6frame날라가고 후폭풍있는 10쯤
        fire_img_frame_num: 3 + 4 + 8, // 미사일 이미지 프레임수 (이미지 갯수 ) //날아갈때3, 돌아올때4, 샤라라8
        attack_fire_frame: 12, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가? //사용안함.

        attack_len: ATTACK_LEN.VH * 1.8, // 공격거리(attack_len)
        move_speed: MOVE_SPEED.HI, // 체력(hp),이동거리(move_speed),
        attack_speed: ATTACK_SPEED.HI, // 공격속도임. 이 값은 tick값임  공격속도빠름(10), 보통(25), 느림(50) 정도를 잡으면 됨.

        ap_start: 10000, // 캐릭터 level 1일때의 attack power임 20231016_dblee ap값 변경
        ap_end: 180000, // 캐릭터 level MAX(즉 1성인 경우 20일때의 attack power임)

        hp_start: 15000, // 캐릭터 level 1일때의 hp
        hp_end: 450000, // 캐릭터 level MAX(즉 1성인 경우 20일때의 hp임)

        nm_start: 3200, // 캐릭터 level 1일때의 Need Mineral임
        nm_end: 5000, // 캐릭터 level MAX(즉 1성인 경우 20일때의 Need Mineral임)

        max_level: 80, // 성장할 수 있는 최고 level
        center_gap_x: 37, // wait 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // wait 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.

        beattack_margine: -50, //적군이 아군 공격할때 얼마나 더 가깍이 가서 발사 할 것인가 이다.
        gagebar_x: 96, //게이지 bar 표기 x좌표
        gagebar_y: 80 - 20 //게이지 bar 표기 y좌표

    },
    //20190109_yhlee 벤시 추가
    {
        name: "BENSI II", // 캐릭 이름
        filename: "ally_57", // 캐릭터의 파일 이름.
        feature: FEATURE.ATTACK, // 특징
        star: 2, //별몇개(1~8성),

        w: 117,
        h: 151, // 이미지의 크기 (width, height)
        move_frame_num: 8, // 이동시 사용되는 frame의 수
        wait_frame_num: 8, // 대기시 사용되는 frame의 수
        attack_frame_num: 10, // 공격시 사용되는 frame의 수
        beattack_frame_num: 6, // 당할때 사용되는 frame의 수

        fire_frame_num: 10, // 발사시 사용되는 frame의 수
        fire_img_frame_num: 1, // 미사일 이미지 프레임수 (이미지 갯수 )
        attack_fire_frame: 8, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        attack_len: ATTACK_LEN.VH, // 공격거리(attack_len)
        move_speed: MOVE_SPEED.LO, // 체력(hp),이동거리(move_speed),
        attack_speed: ATTACK_SPEED.HI, // 공격속도임. 이 값은 tick값임  공격속도빠름(10), 보통(25), 느림(50) 정도를 잡으면 됨.

        ap_start: 23, // 캐릭터 level 1일때의 attack power임
        ap_end: 91, // 캐릭터 level MAX(즉 1성인 경우 20일때의 attack power임)

        hp_start: 16, // 캐릭터 level 1일때의 hp
        hp_end: 480, // 캐릭터 level MAX(즉 1성인 경우 20일때의 hp임)

        nm_start: 84, // 캐릭터 level 1일때의 Need Mineral임
        nm_end: 264, // 캐릭터 level MAX(즉 1성인 경우 20일때의 Need Mineral임)

        max_level: 30, // 성장할 수 있는 최고 level
        center_gap_x: 16, // wait 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // wait 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.

        //yhlee 2016 06 22 추가
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가?  피격마진 이라 부른다.
        gagebar_x: 17, //게이지 bar 표기 x좌표
        gagebar_y: -11 //게이지 bar 표기 y좌표

    },
    {
        name: "BENSI III", // 캐릭 이름
        filename: "ally_58", // 캐릭터의 파일 이름.
        feature: FEATURE.ATTACK, // 특징
        star: 3, //별몇개(1~8성),

        w: 130,
        h: 151, // 이미지의 크기 (width, height)
        move_frame_num: 8, // 이동시 사용되는 frame의 수
        wait_frame_num: 8, // 대기시 사용되는 frame의 수
        attack_frame_num: 8, // 공격시 사용되는 frame의 수
        beattack_frame_num: 6, // 당할때 사용되는 frame의 수

        fire_frame_num: 10, // 발사시 사용되는 frame의 수
        fire_img_frame_num: 1, // 미사일 이미지 프레임수 (이미지 갯수 )
        attack_fire_frame: 6, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        attack_len: ATTACK_LEN.VH, // 공격거리(attack_len)
        move_speed: MOVE_SPEED.LO, // 체력(hp),이동거리(move_speed),
        attack_speed: ATTACK_SPEED.HI, // 공격속도임. 이 값은 tick값임  공격속도빠름(10), 보통(25), 느림(50) 정도를 잡으면 됨.

        ap_start: 57, // 캐릭터 level 1일때의 attack power임
        ap_end: 273, // 캐릭터 level MAX(즉 1성인 경우 20일때의 attack power임)

        hp_start: 36, // 캐릭터 level 1일때의 hp
        hp_end: 1440, // 캐릭터 level MAX(즉 1성인 경우 20일때의 hp임)

        nm_start: 192, // 캐릭터 level 1일때의 Need Mineral임
        nm_end: 528, // 캐릭터 level MAX(즉 1성인 경우 20일때의 Need Mineral임)

        max_level: 40, // 성장할 수 있는 최고 level

        center_gap_x: 28, // wait 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // wait 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.

        //yhlee 2016 06 22 추가
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가?  피격마진 이라 부른다.
        gagebar_x: 17, //게이지 bar 표기 x좌표
        gagebar_y: -11 //게이지 bar 표기 y좌표

    },
    {
        name: "BENSI IV", // 캐릭 이름
        filename: "ally_59", // 캐릭터의 파일 이름.
        feature: FEATURE.ATTACK, // 특징
        star: 4, //별몇개(1~8성),

        w: 117,
        h: 151, // 이미지의 크기 (width, height)
        move_frame_num: 8, // 이동시 사용되는 frame의 수
        wait_frame_num: 8, // 대기시 사용되는 frame의 수
        attack_frame_num: 16, // 공격시 사용되는 frame의 수
        beattack_frame_num: 6, // 당할때 사용되는 frame의 수

        fire_frame_num: 6, // 발사시 사용되는 frame의 수
        fire_img_frame_num: 6, // 미사일 이미지 프레임수 (이미지 갯수 )
        attack_fire_frame: 11, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        attack_len: ATTACK_LEN.VH, // 공격거리(attack_len)
        move_speed: MOVE_SPEED.LO, // 체력(hp),이동거리(move_speed),
        attack_speed: ATTACK_SPEED.HI, // 공격속도임. 이 값은 tick값임  공격속도빠름(10), 보통(25), 느림(50) 정도를 잡으면 됨.

        ap_start: 165, // 캐릭터 level 1일때의 attack power임
        ap_end: 1092, // 캐릭터 level MAX(즉 1성인 경우 20일때의 attack power임)

        hp_start: 115, // 캐릭터 level 1일때의 hp
        hp_end: 5760, // 캐릭터 level MAX(즉 1성인 경우 20일때의 hp임)

        nm_start: 460, // 캐릭터 level 1일때의 Need Mineral임
        nm_end: 910, // 캐릭터 level MAX(즉 1성인 경우 20일때의 Need Mineral임)

        max_level: 50, // 성장할 수 있는 최고 level
        center_gap_x: 10, // wait 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // wait 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.

        //yhlee 2016 06 22 추가
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가?  피격마진 이라 부른다.
        gagebar_x: 17, //게이지 bar 표기 x좌표
        gagebar_y: -11 //게이지 bar 표기 y좌표

    },
    {
        name: "BENSI V", // 캐릭 이름
        filename: "ally_60", // 캐릭터의 파일 이름.
        feature: FEATURE.ATTACK, // 특징
        star: 5, //별몇개(1~8성),

        w: 152,
        h: 147, // 이미지의 크기 (width, height)
        move_frame_num: 8, // 이동시 사용되는 frame의 수
        wait_frame_num: 8, // 대기시 사용되는 frame의 수
        attack_frame_num: 11, // 공격시 사용되는 frame의 수
        beattack_frame_num: 6, // 당할때 사용되는 frame의 수

        fire_frame_num: 12, // 발사시 사용되는 frame의 수
        fire_img_frame_num: 12, // 미사일 이미지 프레임수 (이미지 갯수 )
        attack_fire_frame: 5, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        attack_len: ATTACK_LEN.VH, // 공격거리(attack_len)
        move_speed: MOVE_SPEED.LO, // 체력(hp),이동거리(move_speed),
        attack_speed: ATTACK_SPEED.HI, // 공격속도임. 이 값은 tick값임  공격속도빠름(10), 보통(25), 느림(50) 정도를 잡으면 됨.

        ap_start: 600, // 캐릭터 level 1일때의 attack power임
        ap_end: 4550, // 캐릭터 level MAX(즉 1성인 경우 20일때의 attack power임)

        hp_start: 600, // 캐릭터 level 1일때의 hp
        hp_end: 28800, // 캐릭터 level MAX(즉 1성인 경우 20일때의 hp임)

        nm_start: 810, // 캐릭터 level 1일때의 Need Mineral임
        nm_end: 1470, // 캐릭터 level MAX(즉 1성인 경우 20일때의 Need Mineral임)

        max_level: 60, // 성장할 수 있는 최고 level
        center_gap_x: 0, // wait 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // wait 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.


        //yhlee 2016 06 22 추가
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가?  피격마진 이라 부른다.
        gagebar_x: 49, //게이지 bar 표기 x좌표
        gagebar_y: -9 //게이지 bar 표기 y좌표

    },
    {
        name: "BENSI VI", // 캐릭 이름
        filename: "ally_61", // 캐릭터의 파일 이름.
        feature: FEATURE.ATTACK, // 특징
        star: 6, //별몇개(1~8성),

        w: 248,
        h: 296, // 이미지의 크기 (width, height)
        move_frame_num: 8, // 이동시 사용되는 frame의 수
        wait_frame_num: 8, // 대기시 사용되는 frame의 수
        attack_frame_num: 10, // 공격시 사용되는 frame의 수
        beattack_frame_num: 6, // 당할때 사용되는 frame의 수

        fire_frame_num: 10, // 발사시 사용되는 frame의 수
        fire_img_frame_num: 10, // 미사일 이미지 프레임수 (이미지 갯수 )
        attack_fire_frame: 4, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        attack_len: ATTACK_LEN.VH, // 공격거리(attack_len)
        move_speed: MOVE_SPEED.LO, // 체력(hp),이동거리(move_speed),
        attack_speed: ATTACK_SPEED.HI, // 공격속도임. 이 값은 tick값임  공격속도빠름(10), 보통(25), 느림(50) 정도를 잡으면 됨.

        ap_start: 2100, // 캐릭터 level 1일때의 attack power임
        ap_end: 26000, // 캐릭터 level MAX(즉 1성인 경우 20일때의 attack power임)

        hp_start: 2100, // 캐릭터 level 1일때의 hp
        hp_end: 148800, // 캐릭터 level MAX(즉 1성인 경우 20일때의 hp임)

        nm_start: 1240, // 캐릭터 level 1일때의 Need Mineral임
        nm_end: 2150, // 캐릭터 level MAX(즉 1성인 경우 20일때의 Need Mineral임)

        max_level: 70, // 성장할 수 있는 최고 level

        center_gap_x: -20, // wait 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // wait 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.

        //yhlee 2016 06 22 추가
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가?  피격마진 이라 부른다.
        gagebar_x: 102, //게이지 bar 표기 x좌표
        gagebar_y: 136 //게이지 bar 표기 y좌표

    },
    {
        name: "BENSI VII", // 캐릭 이름
        filename: "ally_62", // 캐릭터의 파일 이름.
        feature: FEATURE.WIDE, // 특징
        star: 7, //별몇개(1~8성),

        w: 300,
        h: 300, // 이미지의 크기 (width, height)
        move_frame_num: 8, // 이동시 사용되는 frame의 수
        wait_frame_num: 8, // 대기시 사용되는 frame의 수
        attack_frame_num: 16, // 공격시 사용되는 frame의 수
        beattack_frame_num: 6, // 당할때 사용되는 frame의 수

        fire_frame_num: 9, // 발사시 사용되는 frame의 수
        fire_img_frame_num: 9, // 미사일 이미지 프레임수 (이미지 갯수 )
        attack_fire_frame: 8, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        attack_len: ATTACK_LEN.VH, // 공격거리(attack_len)
        move_speed: MOVE_SPEED.LO, // 체력(hp),이동거리(move_speed),
        attack_speed: ATTACK_SPEED.HI, // 공격속도임. 이 값은 tick값임  공격속도빠름(10), 보통(25), 느림(50) 정도를 잡으면 됨.

        ap_start: 8000, // 캐릭터 level 1일때의 attack power임 20231016_dblee ap값 변경
        ap_end: 180000, // 캐릭터 level MAX(즉 1성인 경우 20일때의 attack power임)

        hp_start: 15000, // 캐릭터 level 1일때의 hp
        hp_end: 450000, // 캐릭터 level MAX(즉 1성인 경우 20일때의 hp임)

        nm_start: 3200, // 캐릭터 level 1일때의 Need Mineral임
        nm_end: 5000, // 캐릭터 level MAX(즉 1성인 경우 20일때의 Need Mineral임)

        max_level: 80, // 성장할 수 있는 최고 level
        center_gap_x: 37, // wait 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // wait 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.

        //yhlee 2016 06 22 추가
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가?  피격마진 이라 부른다.
        gagebar_x: 79, //게이지 bar 표기 x좌표
        gagebar_y: 144 //게이지 bar 표기 y좌표

    },
    //20190215_yhlee 에이스 7성 추가
    {
        name: "ACE VII", // 캐릭 이름
        filename: "ally_63", // 캐릭터의 파일 이름.
        feature: FEATURE.ATTACK, // 특징
        star: 7, //별몇개(1~8성),

        w: 315,
        h: 298, // 이미지의 크기 (width, height)
        move_frame_num: 13, // 이동시 사용되는 frame의 수
        wait_frame_num: 10, // 대기시 사용되는 frame의 수
        attack_frame_num: 15, // 공격시 사용되는 frame의 수
        beattack_frame_num: 6, // 당할때 사용되는 frame의 수

        fire_frame_num: 13, // 미사일 날라 가다가 몇 frame에 damage줄래? 6frame날라가고 후폭풍있는 10쯤
        fire_img_frame_num: 14, // 미사일 이미지 프레임수 (이미지 갯수 ) //날아갈때3, 돌아올때4, 샤라라8
        attack_fire_frame: 2, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가? //사용안함.

        attack_len: ATTACK_LEN.VH, // 공격거리(attack_len)
        move_speed: MOVE_SPEED.MI, // 체력(hp),이동거리(move_speed),
        attack_speed: ATTACK_SPEED.HI, // 공격속도임. 이 값은 tick값임  공격속도빠름(10), 보통(25), 느림(50) 정도를 잡으면 됨.

        ap_start: 8000, // 캐릭터 level 1일때의 attack power임
        ap_end: 400000, // 캐릭터 level MAX(즉 1성인 경우 20일때의 attack power임)

        hp_start: 25000, // 캐릭터 level 1일때의 hp
        hp_end: 500000, // 캐릭터 level MAX(즉 1성인 경우 20일때의 hp임)

        nm_start: 3000, // 캐릭터 level 1일때의 Need Mineral임
        nm_end: 5000, // 캐릭터 level MAX(즉 1성인 경우 20일때의 Need Mineral임)

        max_level: 80, // 성장할 수 있는 최고 level
        center_gap_x: 0, // wait 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // wait 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.

        beattack_margine: -70, //적군이 아군 공격할때 얼마나 더 가깍이 가서 발사 할 것인가 이다.
        gagebar_x: 207, //게이지 bar 표기 x좌표
        gagebar_y: 65 //게이지 bar 표기 y좌표

    },
    //20190624_yhlee  루비,비비 7성 추가
    {
        name: "BEBEE VII", // 캐릭 이름
        filename: "ally_64", // 캐릭터의 파일 이름.
        feature: FEATURE.WIDE, // 특징
        star: 7, //별몇개(1~8성),

        w: 274,
        h: 212, // 이미지의 크기 (width, height)
        move_frame_num: 4, // 이동시 사용되는 frame의 수
        wait_frame_num: 8, // 대기시 사용되는 frame의 수
        attack_frame_num: 12, // 공격시 사용되는 frame의 수
        beattack_frame_num: 6, // 당할때 사용되는 frame의 수

        fire_frame_num: 4, // 미사일 날라 가다가 몇 frame에 damage줄래? 6frame날라가고 후폭풍있는 10쯤
        fire_img_frame_num: 1, // 미사일 이미지 프레임수 (이미지 갯수 ) //날아갈때3, 돌아올때4, 샤라라8
        attack_fire_frame: 6, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가? //사용안함.

        attack_len: ATTACK_LEN.HI, // 공격거리(attack_len)
        move_speed: MOVE_SPEED.LO, // 체력(hp),이동거리(move_speed),
        attack_speed: ATTACK_SPEED.VL, // 공격속도임. 이 값은 tick값임  공격속도빠름(10), 보통(25), 느림(50) 정도를 잡으면 됨.

        ap_start: 8000, // 캐릭터 level 1일때의 attack power임
        ap_end: 120000, // 캐릭터 level MAX(즉 1성인 경우 20일때의 attack power임)

        hp_start: 8000, // 캐릭터 level 1일때의 hp
        hp_end: 500000, // 캐릭터 level MAX(즉 1성인 경우 20일때의 hp임) 20230424_dblee 440000 -> 500000 변경

        nm_start: 1900, // 캐릭터 level 1일때의 Need Mineral임
        nm_end: 6000, // 캐릭터 level MAX(즉 1성인 경우 20일때의 Need Mineral임)

        max_level: 80, // 성장할 수 있는 최고 level
        center_gap_x: 0, // wait 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // wait 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.

        beattack_margine: 0, //적군이 아군 공격할때 얼마나 더 가깍이 가서 발사 할 것인가 이다.
        gagebar_x: 46, //게이지 bar 표기 x좌표
        gagebar_y: -12, //게이지 bar 표기 y좌표

    },
    {
        name: "RUBY VII", // 캐릭 이름
        filename: "ally_65", // 캐릭터의 파일 이름.
        feature: FEATURE.WIDE, // 특징
        star: 7, //별몇개(1~8성),

        w: 249,
        h: 259, // 이미지의 크기 (width, height)
        move_frame_num: 12, // 이동시 사용되는 frame의 수
        wait_frame_num: 8, // 대기시 사용되는 frame의 수
        attack_frame_num: 10, // 공격시 사용되는 frame의 수
        beattack_frame_num: 6, // 당할때 사용되는 frame의 수

        fire_frame_num: 15, // 발사시 사용되는 frame의 수   실제 미사일 frame의 수 +8 , 포물선 frame 추가 +2 , 후폭풍 +5  포함 총합 15
        fire_img_frame_num: 1, // 미사일 이미지 프레임수 (이미지 갯수 )
        attack_fire_frame: 6, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?

        attack_len: ATTACK_LEN.VH + 10, // 공격거리(attack_len)
        move_speed: MOVE_SPEED.MI, // 체력(hp),이동거리(move_speed),
        attack_speed: ATTACK_SPEED.MI, // 공격속도임. 이 값은 tick값임  공격속도빠름(10), 보통(25), 느림(50) 정도를 잡으면 됨.

        ap_start: 8000, // 캐릭터 level 1일때의 attack power임
        ap_end: 250000, // 캐릭터 level MAX(즉 1성인 경우 20일때의 attack power임)

        hp_start: 20000, // 캐릭터 level 1일때의 hp
        hp_end: 450000, // 캐릭터 level MAX(즉 1성인 경우 20일때의 hp임)

        nm_start: 3000, // 캐릭터 level 1일때의 Need Mineral임
        nm_end: 5000, // 캐릭터 level MAX(즉 1성인 경우 20일때의 Need Mineral임)

        max_level: 80, // 성장할 수 있는 최고 level
        center_gap_x: 0, // wait 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // wait 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.

        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가?  피격마진 이라 부른다.
        gagebar_x: 81, //게이지 bar 표기 x좌표
        gagebar_y: -8, //게이지 bar 표기 y좌표

    },
    //20190704_yhlee  에코,스마티,칸 7성 추가
    {
        name: "ECHO VII", // 캐릭 이름 - 에코 7성 (프라임 에코)
        filename: "ally_66", // 캐릭터의 파일 이름.
        feature: FEATURE.SPEED, // 특징
        star: 7, //별몇개(1~8성),

        w: 226,
        h: 268, // 이미지의 크기 (width, height)
        move_frame_num: 10, // 이동시 사용되는 frame의 수
        wait_frame_num: 10, // 대기시 사용되는 frame의 수
        // 20220713_dblee 245, 250, 255, 260 stage에서 fire_frame_num 값이 커서 공격을 못하는 현상이 있어 KT와 동일하게 값을 통일 시킴
        attack_frame_num: 10, // 공격시 사용되는 frame의 수
        // attack_frame_num:23,			// 공격시 사용되는 frame의 수 - 원래 값

        beattack_frame_num: 8, // 당할때 사용되는 frame의 수


        // 20220713_dblee 245, 250, 255, 260 stage에서 fire_frame_num 값이 커서 공격을 못하는 현상이 있어 KT와 동일하게 값을 통일 시킴
        // attack, fire 관련 이미지를 수정함. - 서버에서 이미지를 가져 오도록 함.
        fire_frame_num: 8, // 미사일 날라 가다가 몇 frame에 damage줄래? 6frame날라가고 후폭풍있는 10쯤
        fire_img_frame_num: 8, // 미사일 이미지 프레임수 (이미지 갯수 )
        attack_fire_frame: 9, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가? //사용안함.
        /*
        		fire_frame_num:12,				// 미사일 날라 가다가 몇 frame에 damage줄래? 6frame날라가고 후폭풍있는 10쯤
        		fire_img_frame_num:17,			// 미사일 이미지 프레임수 (이미지 갯수 )
        		attack_fire_frame:12,			// 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가? //사용안함.
        */
        attack_len: ATTACK_LEN.VL, // 공격거리(attack_len)
        move_speed: MOVE_SPEED.VH, // 체력(hp),이동거리(move_speed),
        attack_speed: ATTACK_SPEED.VH, // 공격속도임. 이 값은 tick값임  공격속도빠름(10), 보통(25), 느림(50) 정도를 잡으면 됨.

        ap_start: 7000, // 캐릭터 level 1일때의 attack power임
        ap_end: 250000, // 캐릭터 level MAX(즉 1성인 경우 20일때의 attack power임)

        hp_start: 22000, // 캐릭터 level 1일때의 hp
        hp_end: 400000, // 캐릭터 level MAX(즉 1성인 경우 20일때의 hp임)


        nm_start: 1900, // 캐릭터 level 1일때의 Need Mineral임
        nm_end: 6000, // 캐릭터 level MAX(즉 1성인 경우 20일때의 Need Mineral임)

        max_level: 80, // 성장할 수 있는 최고 level
        center_gap_x: -45, // wait 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // wait 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.

        //yhlee 2016 06 22 추가
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가?  피격마진 이라 부른다.
        gagebar_x: 120, //게이지 bar 표기 x좌표
        gagebar_y: 50, //게이지 bar 표기 y좌표

    },
    {
        name: "SMARTY VII", // 캐릭 이름 - 스마티 7성 (가디언 스마티)
        filename: "ally_67", // 캐릭터의 파일 이름.
        feature: FEATURE.WIDE, // 특징
        star: 7, //별몇개(1~8성),

        w: 198,
        h: 230, // 이미지의 크기 (width, height)
        move_frame_num: 6, // 이동시 사용되는 frame의 수
        wait_frame_num: 8, // 대기시 사용되는 frame의 수
        attack_frame_num: 12, // 공격시 사용되는 frame의 수
        beattack_frame_num: 8, // 당할때 사용되는 frame의 수

        fire_frame_num: 14, // 발사시 사용되는 frame의 수   실제 미사일 frame의 수 +7 , 후폭풍 +10  포함 총합 17
        fire_img_frame_num: 14, // 미사일 이미지 프레임수 (이미지 갯수 )
        attack_fire_frame: 11, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가? //사용안함.

        attack_len: ATTACK_LEN.VH * 2, //  공격거리(attack_len)
        move_speed: MOVE_SPEED.LO, // 체력(hp),이동거리(move_speed),
        attack_speed: ATTACK_SPEED.LO, // 공격속도임. 이 값은 tick값임  공격속도빠름(10), 보통(25), 느림(50) 정도를 잡으면 됨.

        ap_start: 6000, // 캐릭터 level 1일때의 attack power임
        ap_end: 160000, // 캐릭터 level MAX(즉 1성인 경우 20일때의 attack power임)

        hp_start: 7000, // 캐릭터 level 1일때의 hp
        hp_end: 350000, // 캐릭터 level MAX(즉 1성인 경우 20일때의 hp임)p)

        nm_start: 2000, // 캐릭터 level 1일때의 Need Mineral임
        nm_end: 6000, // 캐릭터 level MAX(즉 1성인 경우 20일때의 Need Mineral임)

        max_level: 80, // 성장할 수 있는 최고 level
        center_gap_x: 0, // wait 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // wait 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.

        //yhlee 2016 06 22 추가
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가?  피격마진 이라 부른다.
        gagebar_x: 60, //게이지 bar 표기 x좌표
        gagebar_y: 30, //게이지 bar 표기 y좌표

    },
    {
        name: "KHAN VII", // 캐릭 이름 - 칸 7성 (아이언 칸)
        filename: "ally_68", // 캐릭터의 파일 이름.
        feature: FEATURE.HP, // 특징
        star: 7, //별몇개(1~8성),

        w: 254,
        h: 189, // 이미지의 크기 (width, height)
        move_frame_num: 6, // 이동시 사용되는 frame의 수
        wait_frame_num: 5, // 대기시 사용되는 frame의 수 (게임에서 사용)
        attack_frame_num: 6, // 공격시 사용되는 frame의 수
        beattack_frame_num: 8, // 당할때 사용되는 frame의 수

        fire_frame_num: 6, // 미사일 날라 가다가 몇 frame에 damage줄래? 6frame날라가고 후폭풍있는 10쯤
        fire_img_frame_num: 1, // 미사일 이미지 프레임수 (이미지 갯수 )
        attack_fire_frame: 6, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가? //사용안함.

        attack_len: ATTACK_LEN.VL, //  공격거리(attack_len)
        move_speed: MOVE_SPEED.MI, // 체력(hp),이동거리(move_speed),
        attack_speed: ATTACK_SPEED.MI, // 공격속도임. 이 값은 tick값임  공격속도빠름(10), 보통(25), 느림(50) 정도를 잡으면 됨.

        ap_start: 1, // 캐릭터 level 1일때의 attack power임
        ap_end: 1, // 캐릭터 level MAX(즉 1성인 경우 20일때의 attack power임)

        hp_start: 100000, // 캐릭터 level 1일때의 hp
        hp_end: 7776000, // 캐릭터 level MAX(즉 1성인 경우 20일때의 hp임)

        nm_start: 4500, // 캐릭터 level 1일때의 Need Mineral임
        nm_end: 9000, // 캐릭터 level MAX(즉 1성인 경우 20일때의 Need Mineral임)

        max_level: 80, // 성장할 수 있는 최고 level
        center_gap_x: -20, // wait 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // wait 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.

        //yhlee 2016 06 22 추가
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가?  피격마진 이라 부른다.
        gagebar_x: 100, //게이지 bar 표기 x좌표
        gagebar_y: 0, //게이지 bar 표기 y좌표

    },

    //20200113_yhlee 제이 캐릭터 추가
    {
        name: "JEY I", // 캐릭 이름 - 제이 1성
        filename: "ally_69", // 캐릭터의 파일 이름.
        feature: FEATURE.SPEED, // 특징
        star: 1, //별몇개(1~8성),

        w: 132,
        h: 139, // 이미지의 크기 (width, height)
        move_frame_num: 4, // 이동시 사용되는 frame의 수
        wait_frame_num: 6, // 대기시 사용되는 frame의 수 (게임에서 사용)
        attack_frame_num: 8, // 공격시 사용되는 frame의 수
        beattack_frame_num: 4, // 당할때 사용되는 frame의 수

        fire_frame_num: 10, // 미사일 날라 가다가 몇 frame에 damage줄래? 6frame날라가고 후폭풍있는 10쯤
        fire_img_frame_num: 5, // 미사일 이미지 프레임수 (이미지 갯수 )
        attack_fire_frame: 6, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가? //사용안함.

        attack_len: ATTACK_LEN.HI, //  공격거리(attack_len)
        move_speed: MOVE_SPEED.VH, // 체력(hp),이동거리(move_speed),
        attack_speed: ATTACK_SPEED.MI, // 공격속도임. 이 값은 tick값임  공격속도빠름(10), 보통(25), 느림(50) 정도를 잡으면 됨.

        ap_start: 1, // 캐릭터 level 1일때의 attack power임
        ap_end: 25, // 캐릭터 level MAX(즉 1성인 경우 20일때의 attack power임)
        // ap_end:0,						// 캐릭터 level MAX(즉 1성인 경우 20일때의 attack power임)

        hp_start: 10, // 캐릭터 level 1일때의 hp
        hp_end: 150, // 캐릭터 level MAX(즉 1성인 경우 20일때의 hp임)

        nm_start: 20, // 캐릭터 level 1일때의 Need Mineral임
        nm_end: 80, // 캐릭터 level MAX(즉 1성인 경우 20일때의 Need Mineral임)

        max_level: 20, // 성장할 수 있는 최고 level
        center_gap_x: 0, // wait 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // wait 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.

        //yhlee 2016 06 22 추가
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가?  피격마진 이라 부른다.
        gagebar_x: 36, //게이지 bar 표기 x좌표
        gagebar_y: -8, //게이지 bar 표기 y좌표

    },
    {
        name: "JEY II", // 캐릭 이름
        filename: "ally_70", // 캐릭터의 파일 이름.
        feature: FEATURE.SPEED, // 특징
        star: 2, //별몇개(1~8성),

        w: 125,
        h: 139, // 이미지의 크기 (width, height)
        move_frame_num: 4, // 이동시 사용되는 frame의 수
        wait_frame_num: 6, // 대기시 사용되는 frame의 수
        attack_frame_num: 8, // 공격시 사용되는 frame의 수
        beattack_frame_num: 4, // 당할때 사용되는 frame의 수

        fire_frame_num: 14, // 발사시 사용되는 frame의 수
        fire_img_frame_num: 7, // 미사일 이미지 프레임수 (이미지 갯수 )
        attack_fire_frame: 6, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        attack_len: ATTACK_LEN.HI, //  공격거리(attack_len)
        move_speed: MOVE_SPEED.VH, // 체력(hp),이동거리(move_speed),
        attack_speed: ATTACK_SPEED.MI, // 공격속도임. 이 값은 tick값임  공격속도빠름(10), 보통(25), 느림(50) 정도를 잡으면 됨.

        ap_start: 10, // 캐릭터 level 1일때의 attack power임
        ap_end: 50, // 캐릭터 level MAX(즉 1성인 경우 20일때의 attack power임)
        // ap_end:0,						// 캐릭터 level MAX(즉 1성인 경우 20일때의 attack power임)

        hp_start: 12, // 캐릭터 level 1일때의 hp
        hp_end: 300, // 캐릭터 level MAX(즉 1성인 경우 20일때의 hp임)

        nm_start: 40, // 캐릭터 level 1일때의 Need Mineral임
        nm_end: 190, // 캐릭터 level MAX(즉 1성인 경우 20일때의 Need Mineral임)

        max_level: 30, // 성장할 수 있는 최고 level
        center_gap_x: -10, // wait 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // wait 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.

        //yhlee 2016 06 22 추가
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가?  피격마진 이라 부른다.
        gagebar_x: 30, //게이지 bar 표기 x좌표
        gagebar_y: -8, //게이지 bar 표기 y좌표

    },
    {
        name: "JEY III", // 캐릭 이름
        filename: "ally_71", // 캐릭터의 파일 이름.
        feature: FEATURE.SPEED, // 특징
        star: 3, //별몇개(1~8성),

        w: 143,
        h: 145, // 이미지의 크기 (width, height)
        move_frame_num: 4, // 이동시 사용되는 frame의 수
        wait_frame_num: 6, // 대기시 사용되는 frame의 수
        attack_frame_num: 8, // 공격시 사용되는 frame의 수
        beattack_frame_num: 4, // 당할때 사용되는 frame의 수

        fire_frame_num: 5, // 발사시 사용되는 frame의 수
        fire_img_frame_num: 5, // 미사일 이미지 프레임수 (이미지 갯수 )
        attack_fire_frame: 6, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        attack_len: ATTACK_LEN.HI, //  공격거리(attack_len)
        move_speed: MOVE_SPEED.VH, // 체력(hp),이동거리(move_speed),
        attack_speed: ATTACK_SPEED.MI, // 공격속도임. 이 값은 tick값임  공격속도빠름(10), 보통(25), 느림(50) 정도를 잡으면 됨.

        ap_start: 25, // 캐릭터 level 1일때의 attack power임
        ap_end: 140, // 캐릭터 level MAX(즉 1성인 경우 20일때의 attack power임)
        // ap_end:0,						// 캐릭터 level MAX(즉 1성인 경우 20일때의 attack power임)

        hp_start: 27, // 캐릭터 level 1일때의 hp
        hp_end: 950, // 캐릭터 level MAX(즉 1성인 경우 20일때의 hp임)

        nm_start: 130, // 캐릭터 level 1일때의 Need Mineral임
        nm_end: 410, // 캐릭터 level MAX(즉 1성인 경우 20일때의 Need Mineral임)

        max_level: 40, // 성장할 수 있는 최고 level

        center_gap_x: -10, // wait 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // wait 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.

        //yhlee 2016 06 22 추가
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가?  피격마진 이라 부른다.
        gagebar_x: 40, //게이지 bar 표기 x좌표
        gagebar_y: -8, //게이지 bar 표기 y좌표

    },
    {
        name: "JEY IV", // 캐릭 이름
        filename: "ally_72", // 캐릭터의 파일 이름.
        feature: FEATURE.SPEED, // 특징
        star: 4, //별몇개(1~8성),

        w: 148,
        h: 146, // 이미지의 크기 (width, height)
        move_frame_num: 4, // 이동시 사용되는 frame의 수
        wait_frame_num: 6, // 대기시 사용되는 frame의 수
        attack_frame_num: 9, // 공격시 사용되는 frame의 수
        beattack_frame_num: 4, // 당할때 사용되는 frame의 수

        fire_frame_num: 5, // 발사시 사용되는 frame의 수
        fire_img_frame_num: 5, // 미사일 이미지 프레임수 (이미지 갯수 )
        attack_fire_frame: 8, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        attack_len: ATTACK_LEN.HI, //  공격거리(attack_len)
        move_speed: MOVE_SPEED.VH, // 체력(hp),이동거리(move_speed),
        attack_speed: ATTACK_SPEED.MI, // 공격속도임. 이 값은 tick값임  공격속도빠름(10), 보통(25), 느림(50) 정도를 잡으면 됨.

        ap_start: 73, // 캐릭터 level 1일때의 attack power임
        ap_end: 600, // 캐릭터 level MAX(즉 1성인 경우 20일때의 attack power임)
        // ap_end:0,					// 캐릭터 level MAX(즉 1성인 경우 20일때의 attack power임)

        hp_start: 86, // 캐릭터 level 1일때의 hp
        hp_end: 3900, // 캐릭터 level MAX(즉 1성인 경우 20일때의 hp임)

        nm_start: 330, // 캐릭터 level 1일때의 Need Mineral임
        nm_end: 780, // 캐릭터 level MAX(즉 1성인 경우 20일때의 Need Mineral임)

        max_level: 50, // 성장할 수 있는 최고 level
        center_gap_x: 0, // wait 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // wait 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.

        //yhlee 2016 06 22 추가
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가?  피격마진 이라 부른다.
        gagebar_x: 43, //게이지 bar 표기 x좌표
        gagebar_y: -8, //게이지 bar 표기 y좌표

    },
    {
        name: "JEY V", // 캐릭 이름
        filename: "ally_73", // 캐릭터의 파일 이름.
        feature: FEATURE.ATTACK, // 특징
        star: 5, //별몇개(1~8성),

        w: 241,
        h: 191, // 이미지의 크기 (width, height)
        move_frame_num: 4, // 이동시 사용되는 frame의 수
        wait_frame_num: 6, // 대기시 사용되는 frame의 수
        attack_frame_num: 14, // 공격시 사용되는 frame의 수
        beattack_frame_num: 4, // 당할때 사용되는 frame의 수

        fire_frame_num: 5, // 발사시 사용되는 frame의 수
        fire_img_frame_num: 5, // 미사일 이미지 프레임수 (이미지 갯수 )
        attack_fire_frame: 12, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        attack_len: ATTACK_LEN.VH * 1.2, // 공격거리(attack_len)
        move_speed: MOVE_SPEED.HI, // 체력(hp),이동거리(move_speed),
        attack_speed: ATTACK_SPEED.MI, // 공격속도임. 이 값은 tick값임  공격속도빠름(10), 보통(25), 느림(50) 정도를 잡으면 됨.

        ap_start: 328, // 캐릭터 level 1일때의 attack power임
        ap_end: 2850, // 캐릭터 level MAX(즉 1성인 경우 20일때의 attack power임)
        // ap_end:0,						// 캐릭터 level MAX(즉 1성인 경우 20일때의 attack power임)

        hp_start: 1200, // 캐릭터 level 1일때의 hp
        hp_end: 72000, // 캐릭터 level MAX(즉 1성인 경우 20일때의 hp임)

        nm_start: 710, // 캐릭터 level 1일때의 Need Mineral임
        nm_end: 1370, // 캐릭터 level MAX(즉 1성인 경우 20일때의 Need Mineral임)

        max_level: 60, // 성장할 수 있는 최고 level
        center_gap_x: 20, // wait 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // wait 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.

        //yhlee 2016 06 22 추가
        beattack_margine: -70, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가?  피격마진 이라 부른다.
        gagebar_x: 73, //게이지 bar 표기 x좌표
        gagebar_y: 21, //게이지 bar 표기 y좌표

    },
    {
        name: "JEY VI", // 캐릭 이름
        filename: "ally_74", // 캐릭터의 파일 이름.
        feature: FEATURE.WIDE, // 특징
        star: 6, //별몇개(1~8성),

        w: 271,
        h: 167, // 이미지의 크기 (width, height)
        move_frame_num: 4, // 이동시 사용되는 frame의 수
        wait_frame_num: 6, // 대기시 사용되는 frame의 수
        attack_frame_num: 12, // 공격시 사용되는 frame의 수
        beattack_frame_num: 4, // 당할때 사용되는 frame의 수

        fire_frame_num: 8, // 발사시 사용되는 frame의 수
        fire_img_frame_num: 4, // 미사일 이미지 프레임수 (이미지 갯수 )
        attack_fire_frame: 6, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        attack_len: ATTACK_LEN.VH * 1.5, // 공격거리(attack_len)
        move_speed: MOVE_SPEED.LO, // 체력(hp),이동거리(move_speed),
        attack_speed: ATTACK_SPEED.LO, // 공격속도임. 이 값은 tick값임  공격속도빠름(10), 보통(25), 느림(50) 정도를 잡으면 됨.

        ap_start: 2007, // 캐릭터 level 1일때의 attack power임
        ap_end: 25000, // 캐릭터 level MAX(즉 1성인 경우 20일때의 attack power임)
        // ap_end:0,						// 캐릭터 level MAX(즉 1성인 경우 20일때의 attack power임)

        hp_start: 2674, // 캐릭터 level 1일때의 hp
        hp_end: 250000, // 캐릭터 level MAX(즉 1성인 경우 20일때의 hp임)

        nm_start: 1240, // 캐릭터 level 1일때의 Need Mineral임
        nm_end: 2150, // 캐릭터 level MAX(즉 1성인 경우 20일때의 Need Mineral임)

        max_level: 70, // 성장할 수 있는 최고 level

        center_gap_x: 0, // wait 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // wait 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.

        //yhlee 2016 06 22 추가
        beattack_margine: -100, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가?  피격마진 이라 부른다.
        gagebar_x: 80, //게이지 bar 표기 x좌표
        gagebar_y: 1, //게이지 bar 표기 y좌표

    },
    {
        name: "JEY VII", // 캐릭 이름
        filename: "ally_75", // 캐릭터의 파일 이름.
        feature: FEATURE.WIDE, // 특징
        star: 7, //별몇개(1~8성),

        w: 259,
        h: 234, // 이미지의 크기 (width, height)
        move_frame_num: 8, // 이동시 사용되는 frame의 수
        wait_frame_num: 6, // 대기시 사용되는 frame의 수
        attack_frame_num: 15, // 공격시 사용되는 frame의 수
        beattack_frame_num: 4, // 당할때 사용되는 frame의 수

        fire_frame_num: 12, // 발사시 사용되는 frame의 수
        fire_img_frame_num: 6, // 미사일 이미지 프레임수 (이미지 갯수 )
        attack_fire_frame: 11, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        attack_len: ATTACK_LEN.VH * 1.8, // 공격거리(attack_len)
        move_speed: MOVE_SPEED.HI, // 체력(hp),이동거리(move_speed),
        attack_speed: ATTACK_SPEED.LO, // 공격속도임. 이 값은 tick값임  공격속도빠름(10), 보통(25), 느림(50) 정도를 잡으면 됨.

        ap_start: 6000, // 캐릭터 level 1일때의 attack power임
        ap_end: 180000, // 캐릭터 level MAX(즉 1성인 경우 20일때의 attack power임)
        // ap_end:0,						// 캐릭터 level MAX(즉 1성인 경우 20일때의 attack power임)

        hp_start: 7000, // 캐릭터 level 1일때의 hp
        hp_end: 380000, // 캐릭터 level MAX(즉 1성인 경우 20일때의 hp임)

        nm_start: 4950, // 캐릭터 level 1일때의 Need Mineral임
        nm_end: 9900, // 캐릭터 level MAX(즉 1성인 경우 20일때의 Need Mineral임)

        max_level: 80, // 성장할 수 있는 최고 level
        center_gap_x: 30, // wait 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // wait 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.

        //yhlee 2016 06 22 추가
        beattack_margine: -100, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가?  피격마진 이라 부른다.
        gagebar_x: 76, //게이지 bar 표기 x좌표
        gagebar_y: 0 //게이지 bar 표기 y좌표
    },
    //20210603_yhlee 소캐릭터 추가
    {
        name: "COW II", // 캐릭 이름
        filename: "ally_76", // 캐릭터의 파일 이름.
        feature: FEATURE.TARGET, // 특징
        star: 2, //별몇개(1~8성),

        w: 173,
        h: 157, // 이미지의 크기 (width, height)
        move_frame_num: 5, // 이동시 사용되는 frame의 수
        wait_frame_num: 6, // 대기시 사용되는 frame의 수
        attack_frame_num: 9, // 공격시 사용되는 frame의 수
        beattack_frame_num: 1, // 당할때 사용되는 frame의 수

        fire_frame_num: 5, // 발사시 사용되는 frame의 수
        fire_img_frame_num: 1, // 미사일 이미지 프레임수 (이미지 갯수 )
        attack_fire_frame: 4, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?

        attack_len: -200, //  공격거리(attack_len)
        move_speed: MOVE_SPEED.HI, // 체력(hp),이동거리(move_speed),
        attack_speed: ATTACK_SPEED.MI, // 공격속도임. 이 값은 tick값임  공격속도빠름(10), 보통(25), 느림(50) 정도를 잡으면 됨.

        ap_start: 12, // 캐릭터 level 1일때의 attack power임
        ap_end: 45, // 캐릭터 level MAX(즉 1성인 경우 20일때의 attack power임)

        hp_start: 1, // 캐릭터 level 1일때의 hp
        hp_end: 1, // 캐릭터 level MAX(즉 1성인 경우 20일때의 hp임)

        nm_start: 84, // 캐릭터 level 1일때의 Need Mineral임
        nm_end: 264, // 캐릭터 level MAX(즉 1성인 경우 20일때의 Need Mineral임)

        max_level: 30, // 성장할 수 있는 최고 level
        center_gap_x: 0, // wait 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // wait 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.

        //yhlee 2016 06 22 추가
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가?  피격마진 이라 부른다.
        gagebar_x: 56, //게이지 bar 표기 x좌표
        gagebar_y: 48, //게이지 bar 표기 y좌표

    },
    {
        name: "COW III", // 캐릭 이름
        filename: "ally_77", // 캐릭터의 파일 이름.
        feature: FEATURE.TARGET, // 특징
        star: 3, //별몇개(1~8성),

        w: 159,
        h: 170, // 이미지의 크기 (width, height)
        move_frame_num: 6, // 이동시 사용되는 frame의 수
        wait_frame_num: 6, // 대기시 사용되는 frame의 수
        attack_frame_num: 8, // 공격시 사용되는 frame의 수
        beattack_frame_num: 1, // 당할때 사용되는 frame의 수

        fire_frame_num: 5, // 발사시 사용되는 frame의 수
        fire_img_frame_num: 1, // 미사일 이미지 프레임수 (이미지 갯수 )
        attack_fire_frame: 3, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        attack_len: -200, //  공격거리(attack_len)
        move_speed: MOVE_SPEED.HI, // 체력(hp),이동거리(move_speed),
        attack_speed: ATTACK_SPEED.MI, // 공격속도임. 이 값은 tick값임  공격속도빠름(10), 보통(25), 느림(50) 정도를 잡으면 됨.

        ap_start: 27, // 캐릭터 level 1일때의 attack power임
        ap_end: 135, // 캐릭터 level MAX(즉 1성인 경우 20일때의 attack power임)

        hp_start: 1, // 캐릭터 level 1일때의 hp
        hp_end: 1, // 캐릭터 level MAX(즉 1성인 경우 20일때의 hp임)

        nm_start: 192, // 캐릭터 level 1일때의 Need Mineral임
        nm_end: 528, // 캐릭터 level MAX(즉 1성인 경우 20일때의 Need Mineral임)

        max_level: 40, // 성장할 수 있는 최고 level

        center_gap_x: -20, // wait 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // wait 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.

        //yhlee 2016 06 22 추가
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가?  피격마진 이라 부른다.
        gagebar_x: 48, //게이지 bar 표기 x좌표
        gagebar_y: 32, //게이지 bar 표기 y좌표

    },
    {
        name: "COW IV", // 캐릭 이름
        filename: "ally_78", // 캐릭터의 파일 이름.
        feature: FEATURE.TARGET, // 특징
        star: 4, //별몇개(1~8성),

        w: 229,
        h: 195, // 이미지의 크기 (width, height)
        move_frame_num: 5, // 이동시 사용되는 frame의 수
        wait_frame_num: 6, // 대기시 사용되는 frame의 수
        attack_frame_num: 9, // 공격시 사용되는 frame의 수
        beattack_frame_num: 1, // 당할때 사용되는 frame의 수

        fire_frame_num: 5, // 발사시 사용되는 frame의 수
        fire_img_frame_num: 1, // 미사일 이미지 프레임수 (이미지 갯수 )
        attack_fire_frame: 4, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        attack_len: -200, //  공격거리(attack_len)
        move_speed: MOVE_SPEED.HI, // 체력(hp),이동거리(move_speed),
        attack_speed: ATTACK_SPEED.MI, // 공격속도임. 이 값은 tick값임  공격속도빠름(10), 보통(25), 느림(50) 정도를 잡으면 됨.

        ap_start: 83, // 캐릭터 level 1일때의 attack power임
        ap_end: 545, // 캐릭터 level MAX(즉 1성인 경우 20일때의 attack power임)

        hp_start: 1, // 캐릭터 level 1일때의 hp
        hp_end: 1, // 캐릭터 level MAX(즉 1성인 경우 20일때의 hp임)

        nm_start: 460, // 캐릭터 level 1일때의 Need Mineral임
        nm_end: 910, // 캐릭터 level MAX(즉 1성인 경우 20일때의 Need Mineral임)

        max_level: 50, // 성장할 수 있는 최고 level
        center_gap_x: 25, // wait 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // wait 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.

        //yhlee 2016 06 22 추가
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가?  피격마진 이라 부른다.
        gagebar_x: 48, //게이지 bar 표기 x좌표
        gagebar_y: 46, //게이지 bar 표기 y좌표

    },
    {
        name: "COW V", // 캐릭 이름
        filename: "ally_79", // 캐릭터의 파일 이름.
        feature: FEATURE.TARGET, // 특징
        star: 5, //별몇개(1~8성),

        w: 381,
        h: 261, // 이미지의 크기 (width, height)
        move_frame_num: 7, // 이동시 사용되는 frame의 수
        wait_frame_num: 6, // 대기시 사용되는 frame의 수
        attack_frame_num: 7, // 공격시 사용되는 frame의 수
        beattack_frame_num: 1, // 당할때 사용되는 frame의 수

        fire_frame_num: 5, // 발사시 사용되는 frame의 수
        fire_img_frame_num: 1, // 미사일 이미지 프레임수 (이미지 갯수 )
        attack_fire_frame: 2, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        attack_len: -380, // 공격거리(attack_len)
        move_speed: MOVE_SPEED.HI, // 체력(hp),이동거리(move_speed),
        attack_speed: ATTACK_SPEED.MI, // 공격속도임. 이 값은 tick값임  공격속도빠름(10), 보통(25), 느림(50) 정도를 잡으면 됨.

        ap_start: 300, // 캐릭터 level 1일때의 attack power임
        ap_end: 2250, // 캐릭터 level MAX(즉 1성인 경우 20일때의 attack power임)

        hp_start: 1, // 캐릭터 level 1일때의 hp
        hp_end: 1, // 캐릭터 level MAX(즉 1성인 경우 20일때의 hp임)

        nm_start: 810, // 캐릭터 level 1일때의 Need Mineral임
        nm_end: 1470, // 캐릭터 level MAX(즉 1성인 경우 20일때의 Need Mineral임)

        max_level: 60, // 성장할 수 있는 최고 level
        center_gap_x: 150, // wait 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // wait 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.

        //yhlee 2016 06 22 추가
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가?  피격마진 이라 부른다.
        gagebar_x: 38, //게이지 bar 표기 x좌표
        gagebar_y: 81, //게이지 bar 표기 y좌표

    },
    {
        name: "COW VI", // 캐릭 이름
        filename: "ally_80", // 캐릭터의 파일 이름.
        feature: FEATURE.TARGET, // 특징
        star: 6, //별몇개(1~8성),

        w: 361,
        h: 292, // 이미지의 크기 (width, height)
        move_frame_num: 9, // 이동시 사용되는 frame의 수
        wait_frame_num: 6, // 대기시 사용되는 frame의 수
        attack_frame_num: 8, // 공격시 사용되는 frame의 수
        beattack_frame_num: 1, // 당할때 사용되는 frame의 수

        fire_frame_num: 5, // 발사시 사용되는 frame의 수
        fire_img_frame_num: 1, // 미사일 이미지 프레임수 (이미지 갯수 )
        attack_fire_frame: 3, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        attack_len: -380, // 공격거리(attack_len)
        move_speed: MOVE_SPEED.HI, // 체력(hp),이동거리(move_speed),
        attack_speed: ATTACK_SPEED.MI, // 공격속도임. 이 값은 tick값임  공격속도빠름(10), 보통(25), 느림(50) 정도를 잡으면 됨.

        ap_start: 1000, // 캐릭터 level 1일때의 attack power임
        ap_end: 13000, // 캐릭터 level MAX(즉 1성인 경우 20일때의 attack power임)

        hp_start: 1, // 캐릭터 level 1일때의 hp
        hp_end: 1, // 캐릭터 level MAX(즉 1성인 경우 20일때의 hp임)

        nm_start: 3200, // 캐릭터 level 1일때의 Need Mineral임
        nm_end: 5000, // 캐릭터 level MAX(즉 1성인 경우 20일때의 Need Mineral임)

        max_level: 70, // 성장할 수 있는 최고 level

        center_gap_x: 80, // wait 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // wait 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.

        //yhlee 2016 06 22 추가
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가?  피격마진 이라 부른다.
        gagebar_x: 70, //게이지 bar 표기 x좌표
        gagebar_y: 67, //게이지 bar 표기 y좌표

    },
    {
        name: "COW VII", // 캐릭 이름
        filename: "ally_81", // 캐릭터의 파일 이름.
        feature: FEATURE.TARGET, // 특징
        star: 7, //별몇개(1~8성),

        w: 325,
        h: 271, // 이미지의 크기 (width, height)
        move_frame_num: 9, // 이동시 사용되는 frame의 수
        wait_frame_num: 6, // 대기시 사용되는 frame의 수
        attack_frame_num: 8, // 공격시 사용되는 frame의 수
        beattack_frame_num: 1, // 당할때 사용되는 frame의 수

        fire_frame_num: 5, // 발사시 사용되는 frame의 수
        fire_img_frame_num: 1, // 미사일 이미지 프레임수 (이미지 갯수 )
        attack_fire_frame: 3, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        attack_len: -280, // 공격거리(attack_len)
        move_speed: MOVE_SPEED.HI, // 체력(hp),이동거리(move_speed),
        attack_speed: ATTACK_SPEED.MI, // 공격속도임. 이 값은 tick값임  공격속도빠름(10), 보통(25), 느림(50) 정도를 잡으면 됨.

        ap_start: 1100, // 캐릭터 level 1일때의 attack power임
        ap_end: 90000, // 캐릭터 level MAX(즉 1성인 경우 20일때의 attack power임)

        hp_start: 1, // 캐릭터 level 1일때의 hp
        hp_end: 1, // 캐릭터 level MAX(즉 1성인 경우 20일때의 hp임)

        nm_start: 4950, // 캐릭터 level 1일때의 Need Mineral임
        nm_end: 9900, // 캐릭터 level MAX(즉 1성인 경우 20일때의 Need Mineral임)

        max_level: 80, // 성장할 수 있는 최고 level
        center_gap_x: 50, // wait 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // wait 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.

        //yhlee 2016 06 22 추가
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가?  피격마진 이라 부른다.
        gagebar_x: 69, //게이지 bar 표기 x좌표
        gagebar_y: 88, //게이지 bar 표기 y좌표

    },
    // 20230619_dblee 캐릭터 8성 추가 (202306191437) - 용기사 에이스 (82)
    {
        name: "ACE VIII", // 캐릭 이름
        filename: "ally_82", // 캐릭터의 파일 이름.
        feature: FEATURE.ATTACK, // 특징. 도감에는 공격형. 실제로는 범위형으로 공격함.
        star: 8, //별몇개(1~8성),

        w: 499,
        h: 464, // 이미지의 크기 (width, height)
        move_frame_num: 12, // 이동시 사용되는 frame의 수
        wait_frame_num: 12, // 대기시 사용되는 frame의 수
        attack_frame_num: 13, // 공격시 사용되는 frame의 수
        beattack_frame_num: 4, // 당할때 사용되는 frame의 수

        fire_frame_num: 5, // 미사일 날라 가다가 몇 frame에 damage줄래? 6frame날라가고 후폭풍있는 10쯤
        fire_img_frame_num: 7, // 미사일 이미지 프레임수 (이미지 갯수 ) //날아갈때3, 돌아올때4, 샤라라8
        attack_fire_frame: 8, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?

        attack_len: ATTACK_LEN.VH - 20, // 330. 공격거리(attack_len)
        move_speed: MOVE_SPEED.HI, // 6. 	이동거리(move_speed)
        attack_speed: ATTACK_SPEED.HI, // 20. 	공격속도임. 이 값은 tick값임  공격속도빠름(10), 보통(25), 느림(50) 정도를 잡으면 됨.

        ap_start: 40000, // 캐릭터 level 1일때의 attack power임
        ap_end: 1600000, // 캐릭터 level MAX(즉 1성인 경우 20일때의 attack power임)

        hp_start: 100000, // 캐릭터 level 1일때의 hp
        hp_end: 1500000, // 캐릭터 level MAX(즉 1성인 경우 20일때의 hp임)

        nm_start: 1500, // 캐릭터 level 1일때의 Need Mineral임
        nm_end: 1800, // 캐릭터 level MAX(즉 1성인 경우 20일때의 Need Mineral임)

        max_level: 90, // 90~110. 시작하는 레벨. 성장할 수 있는 최고 level
        center_gap_x: 5, // wait 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // wait 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.

        beattack_margine: -70, //적군이 아군 공격할때 얼마나 더 가깍이 가서 발사 할 것인가 이다.
        gagebar_x: 207, //게이지 bar 표기 x좌표
        gagebar_y: 65, //게이지 bar 표기 y좌표

    },
    // 20230619_dblee 캐릭터 8성 추가 (202306191437) - 하이퍼 에코 (83)
    {
        name: "ECHO VIII", // 캐릭 이름
        filename: "ally_83", // 캐릭터의 파일 이름.
        feature: FEATURE.SPEED, // 특징
        star: 8, //별몇개(1~8성),

        w: 346,
        h: 240, // 이미지의 크기 (width, height)
        move_frame_num: 10, // 이동시 사용되는 frame의 수
        wait_frame_num: 10, // 대기시 사용되는 frame의 수
        attack_frame_num: 14, // 공격시 사용되는 frame의 수
        beattack_frame_num: 4, // 당할때 사용되는 frame의 수

        fire_frame_num: 3, // 미사일 날라 가다가 몇 frame에 damage줄래? 6frame날라가고 후폭풍있는 10쯤
        fire_img_frame_num: 5, // 미사일 이미지 프레임수 (이미지 갯수 )
        attack_fire_frame: 9, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가? //사용안함.

        attack_len: ATTACK_LEN.VH + 850, // 공격거리(attack_len)
        move_speed: MOVE_SPEED.VH, // 체력(hp),이동거리(move_speed),
        attack_speed: ATTACK_SPEED.LO, // 공격속도임. 이 값은 tick값임  공격속도빠름(10), 보통(25), 느림(50) 정도를 잡으면 됨.

        ap_start: 33000, // 캐릭터 level 1일때의 attack power임
        ap_end: 500000, // 캐릭터 level MAX(즉 1성인 경우 20일때의 attack power임)

        hp_start: 44000, // 캐릭터 level 1일때의 hp
        hp_end: 900000, // 캐릭터 level MAX(즉 1성인 경우 20일때의 hp임)


        nm_start: 1100, // 캐릭터 level 1일때의 Need Mineral임
        nm_end: 1300, // 캐릭터 level MAX(즉 1성인 경우 20일때의 Need Mineral임)

        max_level: 90, // 성장할 수 있는 최고 level
        center_gap_x: 8, // wait 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // wait 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.

        beattack_margine: -100, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가?  피격마진 이라 부른다.
        gagebar_x: 130, //게이지 bar 표기 x좌표
        gagebar_y: 20, //게이지 bar 표기 y좌표

    },
    // 20230619_dblee 캐릭터 8성 추가 (202306191437) - 행성 스마티 (84)
    {
        name: "SMARTY VIII", // 캐릭 이름
        filename: "ally_84", // 캐릭터의 파일 이름.
        feature: FEATURE.WIDE, // 특징
        star: 8, //별몇개(1~8성),

        w: 258,
        h: 407, // 이미지의 크기 (width, height)
        move_frame_num: 8, // 이동시 사용되는 frame의 수
        wait_frame_num: 10, // 대기시 사용되는 frame의 수
        attack_frame_num: 12, // 공격시 사용되는 frame의 수
        beattack_frame_num: 4, // 당할때 사용되는 frame의 수

        fire_frame_num: 14, // 미사일 날라 가다가 몇 frame에 damage줄래? 6frame날라가고 후폭풍있는 10쯤
        fire_img_frame_num: 18, // 미사일 이미지 프레임수 (이미지 갯수 )
        attack_fire_frame: 8, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가? //사용안함.

        attack_len: ATTACK_LEN.VH + 525, //  공격거리(attack_len)
        move_speed: MOVE_SPEED.LO, // 체력(hp),이동거리(move_speed),
        attack_speed: ATTACK_SPEED.LO, // 공격속도임. 이 값은 tick값임  공격속도빠름(10), 보통(25), 느림(50) 정도를 잡으면 됨.

        ap_start: 14000, // 캐릭터 level 1일때의 attack power임
        ap_end: 480000, // 캐릭터 level MAX(즉 1성인 경우 20일때의 attack power임)

        hp_start: 20000, // 캐릭터 level 1일때의 hp
        hp_end: 850000, // 캐릭터 level MAX(즉 1성인 경우 20일때의 hp임)p)

        nm_start: 1400, // 캐릭터 level 1일때의 Need Mineral임
        nm_end: 1700, // 캐릭터 level MAX(즉 1성인 경우 20일때의 Need Mineral임)

        max_level: 90, // 성장할 수 있는 최고 level
        center_gap_x: -10, // wait 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // wait 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.

        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가?  피격마진 이라 부른다.
        gagebar_x: 110, //게이지 bar 표기 x좌표
        gagebar_y: 120, //게이지 bar 표기 y좌표

    },
    // 20230619_dblee 캐릭터 8성 추가 (202306191437) - 아이언팔라딘 칸 (85)
    {
        name: "KHAN VIII", // 캐릭 이름
        filename: "ally_85", // 캐릭터의 파일 이름.
        feature: FEATURE.HP, // 특징
        star: 8, //별몇개(1~8성),

        w: 610,
        h: 475, // 이미지의 크기 (width, height)
        move_frame_num: 8, // 이동시 사용되는 frame의 수
        wait_frame_num: 10, // 대기시 사용되는 frame의 수 (게임에서 사용)
        attack_frame_num: 15, // 공격시 사용되는 frame의 수
        beattack_frame_num: 4, // 당할때 사용되는 frame의 수

        fire_frame_num: 11, // 미사일 날라 가다가 몇 frame에 damage줄래? 6frame날라가고 후폭풍있는 10쯤
        fire_img_frame_num: 1, // 미사일 이미지 프레임수 (이미지 갯수 )
        attack_fire_frame: 9, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가? //사용안함.

        attack_len: ATTACK_LEN.VL - 140, //  공격거리(attack_len) -265
        move_speed: MOVE_SPEED.HI, // 체력(hp),이동거리(move_speed),
        attack_speed: ATTACK_SPEED.MI, // 공격속도임. 이 값은 tick값임  공격속도빠름(10), 보통(25), 느림(50) 정도를 잡으면 됨.

        ap_start: 4750, // 캐릭터 level 1일때의 attack power임
        ap_end: 40000, // 캐릭터 level MAX(즉 1성인 경우 20일때의 attack power임)

        hp_start: 200000, // 캐릭터 level 1일때의 hp
        hp_end: 15552000, // 캐릭터 level MAX(즉 1성인 경우 20일때의 hp임)

        nm_start: 2000, // 캐릭터 level 1일때의 Need Mineral임
        nm_end: 2000, // 캐릭터 level MAX(즉 1성인 경우 20일때의 Need Mineral임)

        max_level: 90, // 성장할 수 있는 최고 level
        center_gap_x: 30, // wait 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // wait 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.

        //yhlee 2016 06 22 추가
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가?  피격마진 이라 부른다.
        gagebar_x: 220, //게이지 bar 표기 x좌표
        gagebar_y: 190
    },
    // 20230619_dblee 캐릭터 8성 추가 (202306191437) - 얼음여왕 루시 (86)
    {
        name: "RUSY VIII", // 캐릭터 이름
        filename: "ally_86", // 캐릭터의 파일 이름.
        feature: FEATURE.WIDE, // 특징
        star: 8, //별몇개(1~8성),

        w: 274,
        h: 326, // 이미지의 크기 (width, height)
        move_frame_num: 10, // 이동시 사용되는 frame의 수
        wait_frame_num: 10, // 대기시 사용되는 frame의 수
        attack_frame_num: 10, // 공격 모션에 사용되는 frame의 수
        beattack_frame_num: 4, // 당할때 사용되는 frame의 수

        fire_frame_num: 6, // 미사일 날라 가다가 몇 frame에 damage줄래? 6frame날라가고 후폭풍있는 10쯤
        fire_img_frame_num: 8, // 미사일 이미지 프레임수 (이미지 갯수 )
        attack_fire_frame: 8, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?

        attack_len: ATTACK_LEN.VH + 600, // 공격거리(attack_len)
        move_speed: MOVE_SPEED.VH + 2, // 이동거리(move_speed),
        attack_speed: ATTACK_SPEED.MI, // 공격속도임. 이 값은 tick값임  공격속도빠름(10), 보통(25), 느림(50) 정도를 잡으면 됨.

        ap_start: 22000, // 캐릭터 level 1일때의 attack power임
        ap_end: 480000, // 캐릭터 level MAX(즉 1성인 경우 20일때의 attack power임)

        hp_start: 120000, // 캐릭터 level 1일때의 hp
        hp_end: 900000, // 캐릭터 level MAX(즉 1성인 경우 20일때의 hp임)

        nm_start: 1200, // 캐릭터 level 1일때의 Need Mineral임
        nm_end: 1500, // 캐릭터 level MAX(즉 1성인 경우 20일때의 Need Mineral임)

        max_level: 90, // 성장할 수 있는 최고 level
        center_gap_x: -12, // wait 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // wait 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.

        //yhlee 2016 06 22 추가
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가?  피격마진 이라 부른다.
        gagebar_x: 113, //게이지 bar 표기 x좌표
        gagebar_y: 0, //게이지 bar 표기 y좌표

    },
    // 20230619_dblee 캐릭터 8성 추가 (202306191437) - 아이돌 루시 (87)
    {
        name: "RUSY VIII", // 캐릭터 이름
        filename: "ally_87", // 캐릭터의 파일 이름.
        feature: FEATURE.WIDE, // 특징
        star: 8, //별몇개(1~8성),

        w: 284,
        h: 319, // 이미지의 크기 (width, height)
        move_frame_num: 10, // 이동시 사용되는 frame의 수
        wait_frame_num: 10, // 대기시 사용되는 frame의 수
        attack_frame_num: 11, // 공격시 사용되는 frame의 수
        beattack_frame_num: 4, // 당할때 사용되는 frame의 수

        fire_frame_num: 7, // 발사시 사용되는 frame의 수 //몇frame으로 몇 단계로 날아 가겠느냐. //공격 몇frame에 damage 줄래
        fire_img_frame_num: 9, // 미사일 이미지 프레임수 (fire 이미지 갯수  )
        attack_fire_frame: 7, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가? 14 frame부터 발사해서 20 frame에 데미지를 입히자. -5는 fire_frame_num의 값이다.
        attack_len: ATTACK_LEN.VH + 330, // 공격거리(attack_len)
        move_speed: MOVE_SPEED.VH, // 체력(hp),이동거리(move_speed),
        attack_speed: ATTACK_SPEED.VH + 7, // 공격속도임. 이 값은 tick값임  공격속도빠름(10), 보통(25), 느림(50) 정도를 잡으면 됨.

        ap_start: 18000, // 캐릭터 level 1일때의 attack power임
        ap_end: 420000, // 캐릭터 level MAX(즉 1성인 경우 20일때의 attack power임)

        hp_start: 60000, // 캐릭터 level 1일때의 hp
        hp_end: 1100000, // 캐릭터 level MAX(즉 1성인 경우 20일때의 hp임)

        nm_start: 1400, // 캐릭터 level 1일때의 Need Mineral임
        nm_end: 1600, // 캐릭터 level MAX(즉 1성인 경우 20일때의 Need Mineral임)

        max_level: 90, // 성장할 수 있는 최고 level
        center_gap_x: -30, // wait 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // wait 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.

        //yhlee 2016 06 22 추가
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가?  피격마진 이라 부른다.
        gagebar_x: 140, //게이지 bar 표기 x좌표
        gagebar_y: -30, //게이지 bar 표기 y좌표

    },
    // 20230619_dblee 캐릭터 8성 추가 (202306191437) - 사신 비비 (88)
    {
        name: "BEBEE VIII", // 캐릭 이름
        filename: "ally_88", // 캐릭터의 파일 이름.
        feature: FEATURE.WIDE, // 특징
        star: 8, //별몇개(1~8성),

        w: 437,
        h: 487, // 이미지의 크기 (width, height)
        move_frame_num: 10, // 이동시 사용되는 frame의 수
        wait_frame_num: 10, // 대기시 사용되는 frame의 수
        attack_frame_num: 14, // 공격시 사용되는 frame의 수
        beattack_frame_num: 4, // 당할때 사용되는 frame의 수

        fire_frame_num: 5, // 미사일 날라 가다가 몇 frame에 damage줄래? 6frame날라가고 후폭풍있는 10쯤
        fire_img_frame_num: 6, // 미사일 이미지 프레임수 (이미지 갯수 ) //날아갈때3, 돌아올때4, 샤라라8
        attack_fire_frame: 10, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가? //사용안함.

        attack_len: ATTACK_LEN.VH + 350, // 공격거리(attack_len)
        move_speed: MOVE_SPEED.HI, // 체력(hp),이동거리(move_speed),
        attack_speed: ATTACK_SPEED.VL, // 공격속도임. 이 값은 tick값임  공격속도빠름(10), 보통(25), 느림(50) 정도를 잡으면 됨.

        ap_start: 24000, // 캐릭터 level 1일때의 attack power임
        ap_end: 480000, // 캐릭터 level MAX(즉 1성인 경우 20일때의 attack power임)

        hp_start: 50000, // 캐릭터 level 1일때의 hp
        hp_end: 1200000, // 캐릭터 level MAX(즉 1성인 경우 20일때의 hp임) 20230424_dblee 330000 -> 500000 변경

        nm_start: 1300, // 캐릭터 level 1일때의 Need Mineral임
        nm_end: 1700, // 캐릭터 level MAX(즉 1성인 경우 20일때의 Need Mineral임)

        max_level: 90, // 성장할 수 있는 최고 level
        center_gap_x: 10, // wait 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // wait 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.

        beattack_margine: 0, //적군이 아군 공격할때 얼마나 더 가깍이 가서 발사 할 것인가 이다.
        gagebar_x: 170, //게이지 bar 표기 x좌표
        gagebar_y: 130, //게이지 bar 표기 y좌표

    },
    // 20230619_dblee 캐릭터 8성 추가 (202306191437) - 유니콘 루비 (89)
    {
        name: "RUBY VIII", // 캐릭 이름
        filename: "ally_89", // 캐릭터의 파일 이름.
        feature: FEATURE.WIDE, // 특징
        star: 8, //별몇개(1~8성),

        w: 264,
        h: 299, // 이미지의 크기 (width, height)
        move_frame_num: 7, // 이동시 사용되는 frame의 수
        wait_frame_num: 10, // 대기시 사용되는 frame의 수
        attack_frame_num: 10, // 공격시 사용되는 frame의 수
        beattack_frame_num: 4, // 당할때 사용되는 frame의 수

        fire_frame_num: 5, // 발사시 사용되는 frame의 수   실제 미사일 frame의 수 +8 , 포물선 frame 추가 +2 , 후폭풍 +5  포함 총합 15
        fire_img_frame_num: 8, // 미사일 이미지 프레임수 (이미지 갯수 )
        attack_fire_frame: 6, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?

        attack_len: ATTACK_LEN.HI + 80, // 공격거리(attack_len)
        move_speed: MOVE_SPEED.MI, // 체력(hp),이동거리(move_speed),
        attack_speed: ATTACK_SPEED.MI, // 공격속도임. 이 값은 tick값임  공격속도빠름(10), 보통(25), 느림(50) 정도를 잡으면 됨.

        ap_start: 24000, // 캐릭터 level 1일때의 attack power임
        ap_end: 750000, // 캐릭터 level MAX(즉 1성인 경우 20일때의 attack power임)

        hp_start: 40000, // 캐릭터 level 1일때의 hp
        hp_end: 1100000, // 캐릭터 level MAX(즉 1성인 경우 20일때의 hp임)

        nm_start: 1400, // 캐릭터 level 1일때의 Need Mineral임
        nm_end: 1700, // 캐릭터 level MAX(즉 1성인 경우 20일때의 Need Mineral임)

        max_level: 90, // 성장할 수 있는 최고 level
        center_gap_x: 5, // wait 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // wait 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.

        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가?  피격마진 이라 부른다.
        gagebar_x: 95, //게이지 bar 표기 x좌표
        gagebar_y: 0, //게이지 bar 표기 y좌표

    },
    // 20230619_dblee 캐릭터 8성 추가 (202306191437) - 제우스 황금맨 (90)
    {
        name: "GOLDMAN VIII", // 캐릭터 이름
        filename: "ally_90", // 캐릭터의 파일 이름.
        feature: FEATURE.WIDE, // 특징
        star: 8, //별몇개(1~8성),

        w: 271,
        h: 359, // 이미지의 크기 (width, height)
        move_frame_num: 10, // 이동시 사용되는 frame의 수
        wait_frame_num: 10, // 대기시 사용되는 frame의 수
        attack_frame_num: 10, // 공격시 사용되는 frame의 수
        beattack_frame_num: 4, // 당할때 사용되는 frame의 수

        fire_frame_num: 5, // 발사시 사용되는 frame의 수   //20이지만 18번쯤 날라 갈때 정산하는 것도 나쁘지 않다.
        fire_img_frame_num: 8, // 미사일 이미지 프레임수 (이미지 갯수 )
        attack_fire_frame: 6, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?


        attack_len: ATTACK_LEN.VH + 250, // 공격거리(attack_len)
        move_speed: MOVE_SPEED.LO + 1, // 이동거리(move_speed),
        attack_speed: ATTACK_SPEED.VL + 10, // 공격속도임. 이 값은 tick값임  공격속도빠름(10), 보통(25), 느림(50) 정도를 잡으면 됨.

        ap_start: 50000, // 캐릭터 level 1일때의 attack power임
        ap_end: 800000, // 캐릭터 level MAX(즉 1성인 경우 20일때의 attack power임)

        hp_start: 50000, // 캐릭터 level 1일때의 hp
        hp_end: 1350000, // 캐릭터 level MAX(즉 1성인 경우 20일때의 hp임)

        nm_start: 1400, //1800					// 캐릭터 level 1일때의 Need Mineral임
        nm_end: 1800, // 캐릭터 level MAX(즉 1성인 경우 20일때의 Need Mineral임)

        max_level: 90, // 성장할 수 있는 최고 level
        center_gap_x: 0, // wait 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: -3, // wait 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.

        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가?  피격마진 이라 부른다.
        gagebar_x: 92, //게이지 bar 표기 x좌표
        gagebar_y: 0, //게이지 bar 표기 y좌표
    },
    // 20230619_dblee 캐릭터 8성 추가 (202306191437) - 고위악마 진저맨 (91) - 이펙트 이미지 있음
    {
        name: "GINGERMAN VIII", // 캐릭터 이름
        filename: "ally_91", // 캐릭터의 파일 이름.
        feature: FEATURE.WIDE, // 특징
        star: 8, //별몇개(1~8성),

        w: 360,
        h: 284, // 이미지의 크기 (width, height)
        move_frame_num: 10, // 이동시 사용되는 frame의 수
        wait_frame_num: 10, // 대기시 사용되는 frame의 수
        attack_frame_num: 13, // 공격시 사용되는 frame의 수
        beattack_frame_num: 4, // 당할때 사용되는 frame의 수

        fire_frame_num: 6, // 미사일 날라 가다가 몇 frame에 damage줄래? 6frame날라가고 후폭풍있는 10쯤
        fire_img_frame_num: 6, // 미사일 이미지 프레임수 (이미지 갯수 ) //날아갈때3, 돌아올때4, 샤라라8
        attack_fire_frame: 9, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가? //사용안함.

        attack_len: 450, // 공격거리(attack_len)  ATTACK_LEN.HI+80 미사일이 날아가는 애니 보여주기 위한 수치를 450으로 변경함
        move_speed: MOVE_SPEED.HI, // 체력(hp),이동거리(move_speed),
        attack_speed: ATTACK_SPEED.HI, // 공격속도임. 이 값은 tick값임  공격속도빠름(10), 보통(25), 느림(50) 정도를 잡으면 됨.

        ap_start: 16000, // 캐릭터 level 1일때의 attack power임
        ap_end: 600000, // 캐릭터 level MAX(즉 1성인 경우 20일때의 attack power임)

        hp_start: 60000, // 캐릭터 level 1일때의 hp
        hp_end: 1350000, // 캐릭터 level MAX(즉 1성인 경우 20일때의 hp임)

        nm_start: 1500, // 캐릭터 level 1일때의 Need Mineral임
        nm_end: 1800, // 캐릭터 level MAX(즉 1성인 경우 20일때의 Need Mineral임)

        max_level: 90, // 성장할 수 있는 최고 level
        center_gap_x: -18, // wait 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // wait 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.

        beattack_margine: 0, //적군이 아군 공격할때 얼마나 더 가깍이 가서 발사 할 것인가 이다.
        gagebar_x: 170, //게이지 bar 표기 x좌표
        gagebar_y: -25, //게이지 bar 표기 y좌표

    },
    // 20230619_dblee 캐릭터 8성 추가 (202306191437) - 구미호 벤시 (92)
    {
        name: "BENSI VIII", // 캐릭터 이름
        filename: "ally_92", // 캐릭터의 파일 이름.
        feature: FEATURE.WIDE, // 특징
        star: 8, //별몇개(1~8성),

        w: 235,
        h: 271, // 이미지의 크기 (width, height)
        move_frame_num: 10, // 이동시 사용되는 frame의 수
        wait_frame_num: 10, // 대기시 사용되는 frame의 수
        attack_frame_num: 10, // 공격시 사용되는 frame의 수
        beattack_frame_num: 4, // 당할때 사용되는 frame의 수

        fire_frame_num: 4, // 발사시 사용되는 frame의 수
        fire_img_frame_num: 6, // 미사일 이미지 프레임수 (이미지 갯수 )
        attack_fire_frame: 7, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?

        attack_len: ATTACK_LEN.VH + 100, // 공격거리(attack_len)
        move_speed: MOVE_SPEED.LO, // 체력(hp),이동거리(move_speed),
        attack_speed: ATTACK_SPEED.HI, // 공격속도임. 이 값은 tick값임  공격속도빠름(10), 보통(25), 느림(50) 정도를 잡으면 됨.

        ap_start: 16000, // 캐릭터 level 1일때의 attack power임
        ap_end: 650000, // 캐릭터 level MAX(즉 1성인 경우 20일때의 attack power임)

        hp_start: 65000, // 캐릭터 level 1일때의 hp
        hp_end: 1350000, // 캐릭터 level MAX(즉 1성인 경우 20일때의 hp임)

        nm_start: 1500, // 캐릭터 level 1일때의 Need Mineral임
        nm_end: 1700, // 캐릭터 level MAX(즉 1성인 경우 20일때의 Need Mineral임)

        max_level: 90, // 성장할 수 있는 최고 level
        center_gap_x: -12, // wait 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // wait 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.

        //yhlee 2016 06 22 추가
        beattack_margine: 50, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가?  피격마진 이라 부른다.
        gagebar_x: 95, //게이지 bar 표기 x좌표
        gagebar_y: 30, //게이지 bar 표기 y좌표

    },
    // 20230619_dblee 캐릭터 8성 추가 (202306191437) - 소환사 제이 (93)
    {
        name: "JEY VIII", // 캐릭 이름
        filename: "ally_93", // 캐릭터의 파일 이름.
        feature: FEATURE.WIDE, // 특징
        star: 8, //별몇개(1~8성),

        w: 282,
        h: 392, // 이미지의 크기 (width, height)
        move_frame_num: 8, // 이동시 사용되는 frame의 수
        wait_frame_num: 10, // 대기시 사용되는 frame의 수
        attack_frame_num: 12, // 공격시 사용되는 frame의 수
        beattack_frame_num: 4, // 당할때 사용되는 frame의 수

        fire_frame_num: 4, // 발사시 사용되는 frame의 수
        fire_img_frame_num: 5, // 미사일 이미지 프레임수 (이미지 갯수 )
        attack_fire_frame: 8, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?

        attack_len: ATTACK_LEN.VH + 850, // 공격거리(attack_len)
        move_speed: MOVE_SPEED.HI, // 체력(hp),이동거리(move_speed),
        attack_speed: ATTACK_SPEED.LO, // 공격속도임. 이 값은 tick값임  공격속도빠름(10), 보통(25), 느림(50) 정도를 잡으면 됨.

        ap_start: 16000, // 캐릭터 level 1일때의 attack power임
        ap_end: 650000, // 캐릭터 level MAX(즉 1성인 경우 20일때의 attack power임)

        hp_start: 65000, // 캐릭터 level 1일때의 hp
        hp_end: 1200000, // 캐릭터 level MAX(즉 1성인 경우 20일때의 hp임)

        nm_start: 2200, // 캐릭터 level 1일때의 Need Mineral임
        nm_end: 2900, // 캐릭터 level MAX(즉 1성인 경우 20일때의 Need Mineral임)

        max_level: 90, // 성장할 수 있는 최고 level
        center_gap_x: -15, // wait 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // wait 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.

        beattack_margine: -100, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가?  피격마진 이라 부른다.
        gagebar_x: 120, //게이지 bar 표기 x좌표
        gagebar_y: 110, //게이지 bar 표기 y좌표

    },
    // 20230619_dblee 캐릭터 8성 추가 (202306191437) - DJ 쿠 (94)
    {
        name: "COW VIII", // 캐릭 이름
        filename: "ally_94", // 캐릭터의 파일 이름.
        feature: FEATURE.TARGET, // 특징
        star: 8, //별몇개(1~8성),

        w: 325,
        h: 271, // 이미지의 크기 (width, height)
        move_frame_num: 10, // 이동시 사용되는 frame의 수
        wait_frame_num: 10, // 대기시 사용되는 frame의 수
        attack_frame_num: 6, // 공격시 사용되는 frame의 수
        beattack_frame_num: 1, // 당할때 사용되는 frame의 수

        fire_frame_num: 5, // 발사시 사용되는 frame의 수
        fire_img_frame_num: 1, // 미사일 이미지 프레임수 (이미지 갯수 )
        attack_fire_frame: 3, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?

        attack_len: -280, // 공격거리(attack_len)
        move_speed: MOVE_SPEED.HI, // 체력(hp),이동거리(move_speed),
        attack_speed: ATTACK_SPEED.LO, // 공격속도임. 이 값은 tick값임  공격속도빠름(10), 보통(25), 느림(50) 정도를 잡으면 됨.

        ap_start: 16000, // 캐릭터 level 1일때의 attack power임
        ap_end: 630000, // 캐릭터 level MAX(즉 1성인 경우 20일때의 attack power임)

        hp_start: 1, // 캐릭터 level 1일때의 hp
        hp_end: 1, // 캐릭터 level MAX(즉 1성인 경우 20일때의 hp임)

        nm_start: 2200, // 캐릭터 level 1일때의 Need Mineral임
        nm_end: 2900, // 캐릭터 level MAX(즉 1성인 경우 20일때의 Need Mineral임)

        max_level: 90, // 성장할 수 있는 최고 level
        center_gap_x: 10, // wait 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // wait 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.

        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가?  피격마진 이라 부른다.
        gagebar_x: 100, //게이지 bar 표기 x좌표
        gagebar_y: 120, //게이지 bar 표기 y좌표

    },
];

/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
// 적군 캐릭터 정의
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
var ENEMY_MINUS1 = 0.8; //1~30까지의 캐릭의 능력치의 공격력,방어력을 80%로 줄인다.



var CHAR_YOUR_TEAM = [{}, //연산편의를 위해 0번 배열은 사용하지 않음.
    {
        name: "1", // 캐릭 번호 - 카드병정(파랑클로버)
        dirname: "enemy_1", // 디렉토리 이름
        feature: FEATURE.ATTACK, // 특징
        w: 109,
        h: 131, // 이미지의 크기 (width, height)
        move_frame_num: 8, // 이동시 사용되는 frame의 수
        attack_frame_num: 8, // 공격시 사용되는 frame의 수
        beattack_frame_num: 4, //6		// 공격당할때 사용되는 프레임수
        wait_frame_num: 8, // 대기시 사용되는 frame의 수

        fire_frame_num: 4, // 공격시 미사일에 사용되는 frame의 수
        attack_fire_frame: 5, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        move_speed: MOVE_SPEED.LO, // 이동속도
        attack_speed: ATTACK_SPEED.VL, // 공격속도
        attack_len: ATTACK_LEN.LO, // 공격거리

        attack_power: 2, // 공격력(attack_power)
        hp: 10, // 체력(hp)
        missile_gap_x: -122, // 캐릭터 미사일 발사 x좌표
        missile_gap_y: 25, // 캐릭터 미사일 발사 y좌표

        center_gap_x: 9, // attack 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // attack 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.

        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가? 나즈굴은 80 즉, 피격마진 이라 부른다.

        gagebar_x: 24, //게이지 bar 표기 x좌표
        gagebar_y: 0 //게이지 bar 표기 y좌표
    },
    {
        name: "2", // 캐릭 이름 - 카드병정(검정 에이스)
        dirname: "enemy_2", // 캐릭터의 파일 이름.
        feature: FEATURE.ATTACK, // 특징
        w: 109,
        h: 131, // 이미지의 크기 (width, height)
        move_frame_num: 8, // 이동시 사용되는 frame의 수
        attack_frame_num: 8, // 공격시 사용되는 frame의 수
        beattack_frame_num: 4, // 공격당할때 사용되는 프레임수
        wait_frame_num: 8, // 대기시 사용되는 frame의 수

        fire_frame_num: 4, // 공격시 미사일에 사용되는 frame의 수
        attack_fire_frame: 5, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        move_speed: MOVE_SPEED.LO, // 이동 속도, very high
        attack_speed: ATTACK_SPEED.VL, // 공격속도임 보통(MI)
        attack_len: ATTACK_LEN.LO, // 공격거리(attack_len),

        attack_power: 3, // 공격력(attack_power)
        hp: 20, // 체력(hp)
        missile_gap_x: -122, // 캐릭터 미사일 발사 x좌표
        missile_gap_y: 25, // 캐릭터 미사일 발사 y좌표

        center_gap_x: 9, // attack 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // attack 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.

        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가? 나즈굴은 80 즉, 피격마진 이라 부른다.

        gagebar_x: 24, //게이지 bar 표기 x좌표
        gagebar_y: 0 //게이지 bar 표기 y좌표
    },
    {
        name: "3", // 캐릭 이름 - 벌레몬1
        dirname: "enemy_3", // 캐릭터의 파일 이름.
        feature: FEATURE.ATTACK, // 특징
        w: 61,
        h: 105, // 이미지의 크기 (width, height)
        move_frame_num: 8, // 이동시 사용되는 frame의 수
        attack_frame_num: 11, // 공격시 사용되는 frame의 수
        beattack_frame_num: 4, // 공격당할때 사용되는 프레임수
        wait_frame_num: 8, // 대기시 사용되는 frame의 수

        fire_frame_num: 6, // 공격시 미사일에 사용되는 frame의 수
        attack_fire_frame: 5, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        move_speed: MOVE_SPEED.LO, // 이동 속도, very high
        attack_speed: ATTACK_SPEED.VL, // 공격속도임 보통(MI)
        attack_len: ATTACK_LEN.HI, // 공격거리(attack_len),

        attack_power: 5, // 공격력(attack_power)
        hp: 40, // 체력(hp)
        missile_gap_x: 21, // 캐릭터 미사일 발사 x좌표
        missile_gap_y: 31, // 캐릭터 미사일 발사 y좌표

        center_gap_x: 1, // attack 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // attack 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가? 나즈굴은 80 즉, 피격마진 이라 부른다.

        gagebar_x: -1, //게이지 bar 표기 x좌표
        gagebar_y: 8 //게이지 bar 표기 y좌표
    },
    {
        name: "4", // 캐릭 번호 - 카드병정(빨강 다이아몬드)
        dirname: "enemy_4", // 디렉토리 이름
        feature: FEATURE.ATTACK, // 특징
        w: 109,
        h: 131, // 이미지의 크기 (width, height)
        move_frame_num: 8, // 이동시 사용되는 frame의 수
        attack_frame_num: 8, // 공격시 사용되는 frame의 수
        beattack_frame_num: 4, // 공격당할때 사용되는 프레임수
        wait_frame_num: 8, // 대기시 사용되는 frame의 수

        fire_frame_num: 4, // 공격시 미사일에 사용되는 frame의 수
        attack_fire_frame: 5, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        move_speed: MOVE_SPEED.MI, // 이동 속도, very high
        attack_speed: ATTACK_SPEED.LO, // 공격속도임 보통(MI)
        attack_len: ATTACK_LEN.LO, // 공격거리(attack_len),

        attack_power: 10, // 공격력(attack_power)
        hp: 50, // 체력(hp)
        missile_gap_x: -122, // 캐릭터 미사일 발사 x좌표
        missile_gap_y: 25, // 캐릭터 미사일 발사 y좌표

        center_gap_x: 9, // attack 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // attack 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.

        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가? 나즈굴은 80 즉, 피격마진 이라 부른다.

        gagebar_x: 24, //게이지 bar 표기 x좌표
        gagebar_y: 0 //게이지 bar 표기 y좌표
    },
    {
        name: "5", // 캐릭 번호 - 문어탱1
        dirname: "enemy_5", // 디렉토리 이름
        feature: FEATURE.WIDE, // 특징
        w: 129,
        h: 165, // 이미지의 크기 (width, height)
        move_frame_num: 8, // 이동시 사용되는 frame의 수
        attack_frame_num: 10, // 공격시 사용되는 frame의 수
        beattack_frame_num: 4, // 공격당할때 사용되는 프레임수
        wait_frame_num: 10, // 대기시 사용되는 frame의 수

        fire_frame_num: 4, // 공격시 미사일에 사용되는 frame의 수
        attack_fire_frame: 5, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        move_speed: MOVE_SPEED.VL, // 이동 속도, very high
        attack_speed: ATTACK_SPEED.VL, // 공격속도임 보통(MI)
        attack_len: ATTACK_LEN.HI, // 공격거리(attack_len),

        attack_power: 15, // 공격력(attack_power),
        hp: 70, // 체력(hp)
        missile_gap_x: 57, // 캐릭터 미사일 발사 x좌표
        missile_gap_y: 6, // 캐릭터 미사일 발사 y좌표

        center_gap_x: -6, // attack 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: -6, // attack 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가? 나즈굴은 80 즉, 피격마진 이라 부른다.

        gagebar_x: 49, //게이지 bar 표기 x좌표
        gagebar_y: 20 //게이지 bar 표기 y좌표
    },
    {
        name: "6", // 캐릭 번호 - 카드병정(빨강 다이아몬드)
        dirname: "enemy_6", // 디렉토리 이름
        feature: FEATURE.ATTACK, // 특징
        w: 109,
        h: 131, // 이미지의 크기 (width, height)
        move_frame_num: 8, // 이동시 사용되는 frame의 수
        attack_frame_num: 8, // 공격시 사용되는 frame의 수
        beattack_frame_num: 4, // 공격당할때 사용되는 프레임수
        wait_frame_num: 8, // 대기시 사용되는 frame의 수

        fire_frame_num: 4, // 공격시 미사일에 사용되는 frame의 수
        attack_fire_frame: 5, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        move_speed: MOVE_SPEED.MI, // 이동 속도, very high
        attack_speed: ATTACK_SPEED.MI, // 공격속도임 보통(MI)
        attack_len: ATTACK_LEN.LO, // 공격거리(attack_len),

        attack_power: 30, // 공격력(attack_power)
        hp: 100, // 체력(hp)
        missile_gap_x: -122, // 캐릭터 미사일 발사 x좌표
        missile_gap_y: 25, // 캐릭터 미사일 발사 y좌표

        center_gap_x: 9, // attack 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // attack 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가? 나즈굴은 80 즉, 피격마진 이라 부른다.

        gagebar_x: 25, //게이지 bar 표기 x좌표
        gagebar_y: 4 //게이지 bar 표기 y좌표
    },
    {
        name: "7", // 캐릭 번호 - 젤몬1
        dirname: "enemy_7", // 캐릭터의 파일 이름.
        feature: FEATURE.WIDE, // 특징
        w: 109,
        h: 116, // 이미지의 크기 (width, height)
        move_frame_num: 9, // 이동시 사용되는 frame의 수
        attack_frame_num: 10, // 공격시 사용되는 frame의 수
        beattack_frame_num: 4, // 공격당할때 사용되는 프레임수
        fire_frame_num: 7, // 공격시 미사일에 사용되는 frame의 수 // Jell은 자기의무기가 따로 없다. 그래도 우선 7로 해서 해보자. 정아씨의 다양성을 구현하기 위해~~^^;
        wait_frame_num: 8, // 대기시 사용되는 frame의 수

        attack_fire_frame: 4, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        move_speed: MOVE_SPEED.VL, // 이동 속도, very high
        attack_speed: ATTACK_SPEED.VL, // 공격속도임 보통(MI)
        attack_len: ATTACK_LEN.LO, // 공격거리(attack_len),

        attack_power: 40, // 공격력(attack_power)
        hp: 150, // 체력(hp)
        missile_gap_x: 0, // 캐릭터 미사일 발사 x좌표
        missile_gap_y: 0, // 캐릭터 미사일 발사 y좌표
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가? 나즈굴은 80 즉, 피격마진 이라 부른다.

        center_gap_x: -2, // attack 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: -19, // attack 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.

        gagebar_x: 26, //게이지 bar 표기 x좌표
        gagebar_y: 16 //게이지 bar 표기 y좌표
    },
    {
        name: "8", // 캐릭 번호 - 락맨1
        dirname: "enemy_8", // 캐릭터의 파일 이름.
        feature: FEATURE.HP, // 특징
        w: 169,
        h: 143, // 이미지의 크기 (width, height)
        move_frame_num: 12, // 이동시 사용되는 frame의 수
        attack_frame_num: 11, // 공격시 사용되는 frame의 수
        beattack_frame_num: 4, // 공격당할때 사용되는 프레임수
        wait_frame_num: 10, // 대기시 사용되는 frame의 수

        fire_frame_num: 9, // 공격시 미사일에 사용되는 frame의 수
        attack_fire_frame: 3, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        move_speed: MOVE_SPEED.LO, // 이동 속도, very high
        attack_speed: ATTACK_SPEED.LO, // 공격속도임 보통(MI)
        attack_len: ATTACK_LEN.VL, // 공격거리(attack_len),

        attack_power: 60, // 공격력(attack_power)
        hp: 400, // 체력(hp)
        missile_gap_x: 21, // 캐릭터 미사일 발사 x좌표
        missile_gap_y: 31, // 캐릭터 미사일 발사 y좌표
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가? 나즈굴은 80 즉, 피격마진 이라 부른다.

        center_gap_x: -22, // attack 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // attack 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.

        gagebar_x: 76, //게이지 bar 표기 x좌표
        gagebar_y: 2 //게이지 bar 표기 y좌표
    },
    {
        name: "9", // 캐릭 이름 - 벌레몬2
        dirname: "enemy_9", // 캐릭터의 파일 이름.
        feature: FEATURE.ATTACK, // 특징
        w: 61,
        h: 105, // 이미지의 크기 (width, height)
        move_frame_num: 8, // 이동시 사용되는 frame의 수
        attack_frame_num: 11, // 공격시 사용되는 frame의 수
        beattack_frame_num: 4, // 공격당할때 사용되는 프레임수
        wait_frame_num: 8, // 대기시 사용되는 frame의 수

        fire_frame_num: 6, // 공격시 미사일에 사용되는 frame의 수
        attack_fire_frame: 5, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        move_speed: MOVE_SPEED.MI, // 이동 속도, very high
        attack_speed: ATTACK_SPEED.VL, // 공격속도임 보통(MI)
        attack_len: ATTACK_LEN.MI, // 공격거리(attack_len),

        attack_power: 70, // 공격력(attack_power)
        hp: 500, // 체력(hp)
        missile_gap_x: 21, // 캐릭터 미사일 발사 x좌표
        missile_gap_y: 31, // 캐릭터 미사일 발사 y좌표

        center_gap_x: 1, // attack 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // attack 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가? 나즈굴은 80 즉, 피격마진 이라 부른다.

        gagebar_x: -1, //게이지 bar 표기 x좌표
        gagebar_y: 6 //게이지 bar 표기 y좌표
    },
    {
        name: "10", // 캐릭 번호 - 젤몬2
        dirname: "enemy_10", // 캐릭터의 파일 이름.
        feature: FEATURE.WIDE, // 특징
        w: 109,
        h: 116, // 이미지의 크기 (width, height)
        move_frame_num: 9, // 이동시 사용되는 frame의 수
        attack_frame_num: 10, // 공격시 사용되는 frame의 수
        beattack_frame_num: 4, // 공격당할때 사용되는 프레임수
        fire_frame_num: 7, // 공격시 미사일에 사용되는 frame의 수 // Jell은 자기의무기가 따로 없다. 그래도 우선 7로 해서 해보자. 정아씨의 다양성을 구현하기 위해~~^^;
        wait_frame_num: 8, // 대기시 사용되는 frame의 수

        attack_fire_frame: 4, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        move_speed: MOVE_SPEED.VL, // 이동 속도, very high
        attack_speed: ATTACK_SPEED.VL, // 공격속도임 보통(MI)
        attack_len: ATTACK_LEN.LO, // 공격거리(attack_len),

        attack_power: 120, // 공격력(attack_power)
        hp: 1500, // 체력(hp)
        missile_gap_x: 0, // 캐릭터 미사일 발사 x좌표
        missile_gap_y: 0, // 캐릭터 미사일 발사 y좌표

        center_gap_x: -2, // attack 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: -19, // attack 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가? 나즈굴은 80 즉, 피격마진 이라 부른다.

        gagebar_x: 26, //게이지 bar 표기 x좌표
        gagebar_y: 16 //게이지 bar 표기 y좌표
    },
    {
        name: "11", // 캐릭 번호 - 문어탱2
        dirname: "enemy_11", // 디렉토리 이름
        feature: FEATURE.WIDE, // 특징
        w: 129,
        h: 165, // 이미지의 크기 (width, height)
        move_frame_num: 8, // 이동시 사용되는 frame의 수
        attack_frame_num: 10, // 공격시 사용되는 frame의 수
        beattack_frame_num: 4, // 공격당할때 사용되는 프레임수
        wait_frame_num: 10, // 대기시 사용되는 frame의 수

        fire_frame_num: 4, // 공격시 미사일에 사용되는 frame의 수
        attack_fire_frame: 5, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        move_speed: MOVE_SPEED.VL, // 이동 속도, very high
        attack_speed: ATTACK_SPEED.LO, // 공격속도임 보통(MI)
        attack_len: ATTACK_LEN.HI, // 공격거리(attack_len),

        attack_power: 170, // 공격력(attack_power),
        hp: 2500, // 체력(hp)
        missile_gap_x: 57, // 캐릭터 미사일 발사 x좌표
        missile_gap_y: 6, // 캐릭터 미사일 발사 y좌표

        center_gap_x: -6, // attack 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: -6, // attack 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가? 나즈굴은 80 즉, 피격마진 이라 부른다.

        gagebar_x: 48, //게이지 bar 표기 x좌표
        gagebar_y: 21 //게이지 bar 표기 y좌표
    },
    {
        name: "12", // 캐릭 번호 - 락맨2
        dirname: "enemy_12", // 캐릭터의 파일 이름.
        feature: FEATURE.HP, // 특징
        w: 169,
        h: 143, // 이미지의 크기 (width, height)
        move_frame_num: 12, // 이동시 사용되는 frame의 수
        attack_frame_num: 11, // 공격시 사용되는 frame의 수
        beattack_frame_num: 4, // 공격당할때 사용되는 프레임수
        wait_frame_num: 10, // 대기시 사용되는 frame의 수

        fire_frame_num: 9, // 공격시 미사일에 사용되는 frame의 수
        attack_fire_frame: 3, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        move_speed: MOVE_SPEED.LO, // 이동 속도, very high
        attack_speed: ATTACK_SPEED.LO, // 공격속도임 보통(MI)
        attack_len: ATTACK_LEN.VL, // 공격거리(attack_len),

        attack_power: 220, // 공격력(attack_power)
        hp: 3500, // 체력(hp)
        missile_gap_x: 21, // 캐릭터 미사일 발사 x좌표
        missile_gap_y: 31, // 캐릭터 미사일 발사 y좌표

        center_gap_x: -22, // attack 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // attack 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가? 나즈굴은 80 즉, 피격마진 이라 부른다.

        gagebar_x: 76, //게이지 bar 표기 x좌표
        gagebar_y: 2 //게이지 bar 표기 y좌표
    },
    {
        name: "13", // 캐릭 번호 - 젤몬3
        dirname: "enemy_13", // 캐릭터의 파일 이름.
        feature: FEATURE.WIDE, // 특징
        w: 109,
        h: 116, // 이미지의 크기 (width, height)
        move_frame_num: 9, // 이동시 사용되는 frame의 수
        attack_frame_num: 10, // 공격시 사용되는 frame의 수
        beattack_frame_num: 4, // 공격당할때 사용되는 프레임수
        fire_frame_num: 7, // 공격시 미사일에 사용되는 frame의 수 // Jell은 자기의무기가 따로 없다. 그래도 우선 7로 해서 해보자. 정아씨의 다양성을 구현하기 위해~~^^;
        wait_frame_num: 8, // 대기시 사용되는 frame의 수

        attack_fire_frame: 4, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        move_speed: MOVE_SPEED.VL, // 이동 속도, very high
        attack_speed: ATTACK_SPEED.VL, // 공격속도임 보통(MI)
        attack_len: ATTACK_LEN.LO, // 공격거리(attack_len),

        attack_power: 250, // 공격력(attack_power)
        hp: 3600, // 체력(hp)
        missile_gap_x: 0, // 캐릭터 미사일 발사 x좌표
        missile_gap_y: 0, // 캐릭터 미사일 발사 y좌표

        center_gap_x: -22, // attack 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // attack 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가? 나즈굴은 80 즉, 피격마진 이라 부른다.

        gagebar_x: 27, //게이지 bar 표기 x좌표
        gagebar_y: 14 //게이지 bar 표기 y좌표

    },
    {
        name: "14", // 캐릭 번호 - 문어탱3
        dirname: "enemy_14", // 디렉토리 이름
        feature: FEATURE.WIDE, // 특징
        w: 129,
        h: 165, // 이미지의 크기 (width, height)
        move_frame_num: 8, // 이동시 사용되는 frame의 수
        attack_frame_num: 10, // 공격시 사용되는 frame의 수
        beattack_frame_num: 4, // 공격당할때 사용되는 프레임수
        wait_frame_num: 10, // 대기시 사용되는 frame의 수

        fire_frame_num: 4, // 공격시 미사일에 사용되는 frame의 수
        attack_fire_frame: 5, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        move_speed: MOVE_SPEED.VL, // 이동 속도, very high
        attack_speed: ATTACK_SPEED.LO, // 공격속도임 보통(MI)
        attack_len: ATTACK_LEN.HI, // 공격거리(attack_len),

        attack_power: 300, // 공격력(attack_power),
        hp: 3800, // 체력(hp)
        missile_gap_x: 57, // 캐릭터 미사일 발사 x좌표
        missile_gap_y: 6, // 캐릭터 미사일 발사 y좌표

        center_gap_x: -6, // attack 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: -6, // attack 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가? 나즈굴은 80 즉, 피격마진 이라 부른다.

        gagebar_x: 47, //게이지 bar 표기 x좌표
        gagebar_y: 21 //게이지 bar 표기 y좌표

    },
    {
        name: "15", // 캐릭 번호 - 락맨3
        dirname: "enemy_15", // 캐릭터의 파일 이름.
        feature: FEATURE.HP, // 특징
        w: 169,
        h: 143, // 이미지의 크기 (width, height)
        move_frame_num: 12, // 이동시 사용되는 frame의 수
        attack_frame_num: 11, // 공격시 사용되는 frame의 수
        beattack_frame_num: 4, // 공격당할때 사용되는 프레임수
        wait_frame_num: 10, // 대기시 사용되는 frame의 수

        fire_frame_num: 9, // 공격시 미사일에 사용되는 frame의 수
        attack_fire_frame: 3, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        move_speed: MOVE_SPEED.LO, // 이동 속도, very high
        attack_speed: ATTACK_SPEED.LO, // 공격속도임 보통(MI)
        attack_len: ATTACK_LEN.VL, // 공격거리(attack_len),

        attack_power: 350, // 공격력(attack_power)
        hp: 4500, // 체력(hp)
        missile_gap_x: 21, // 캐릭터 미사일 발사 x좌표
        missile_gap_y: 31, // 캐릭터 미사일 발사 y좌표

        center_gap_x: -22, // attack 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // attack 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가? 나즈굴은 80 즉, 피격마진 이라 부른다.

        gagebar_x: 76, //게이지 bar 표기 x좌표
        gagebar_y: 2 //게이지 bar 표기 y좌표

    },
    {
        name: "16", // 캐릭 이름 - 벌레몬3
        dirname: "enemy_16", // 캐릭터의 파일 이름.
        feature: FEATURE.ATTACK, // 특징
        w: 61,
        h: 105, // 이미지의 크기 (width, height)
        move_frame_num: 8, // 이동시 사용되는 frame의 수
        attack_frame_num: 11, // 공격시 사용되는 frame의 수
        beattack_frame_num: 4, // 공격당할때 사용되는 프레임수
        wait_frame_num: 8, // 대기시 사용되는 frame의 수

        fire_frame_num: 6, // 공격시 미사일에 사용되는 frame의 수
        attack_fire_frame: 5, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        move_speed: MOVE_SPEED.MI, // 이동 속도, very high
        attack_speed: ATTACK_SPEED.VL, // 공격속도임 보통(MI)
        attack_len: ATTACK_LEN.HI, // 공격거리(attack_len),

        attack_power: 400, // 공격력(attack_power)
        hp: 4000, // 체력(hp)
        missile_gap_x: 21, // 캐릭터 미사일 발사 x좌표
        missile_gap_y: 31, // 캐릭터 미사일 발사 y좌표

        center_gap_x: 1, // attack 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // attack 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가? 나즈굴은 80 즉, 피격마진 이라 부른다.

        gagebar_x: -1, //게이지 bar 표기 x좌표
        gagebar_y: 8 //게이지 bar 표기 y좌표

    },
    {
        name: "17", // 캐릭 이름 - 유령몬1
        dirname: "enemy_17", // 캐릭터의 파일 이름.
        feature: FEATURE.ATTACK, // 특징
        w: 91,
        h: 152, // 이미지의 크기 (width, height)
        move_frame_num: 8, // 이동시 사용되는 frame의 수
        attack_frame_num: 8, // 공격시 사용되는 frame의 수
        beattack_frame_num: 4, // 공격당할때 사용되는 프레임수
        wait_frame_num: 8, // 대기시 사용되는 frame의 수

        fire_frame_num: 6, // 공격시 미사일에 사용되는 frame의 수
        attack_fire_frame: 5, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        move_speed: MOVE_SPEED.VL, // 이동 속도, very high
        attack_speed: ATTACK_SPEED.LO, // 공격속도임 보통(MI)
        attack_len: ATTACK_LEN.MI, // 공격거리(attack_len),

        attack_power: 500, // 공격력(attack_power)
        hp: 4200, // 체력(hp)
        missile_gap_x: -218, // 캐릭터 미사일 발사 x좌표
        missile_gap_y: 32, // 캐릭터 미사일 발사 y좌표
        center_gap_x: -1, // attack 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: -14, // attack 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가? 나즈굴은 80 즉, 피격마진 이라 부른다.

        gagebar_x: 16, //게이지 bar 표기 x좌표
        gagebar_y: 35 //게이지 bar 표기 y좌표

    },
    {
        name: "18", // 캐릭 이름 - 벌레몬4
        dirname: "enemy_18", // 캐릭터의 파일 이름.
        feature: FEATURE.ATTACK, // 특징
        w: 61,
        h: 105, // 이미지의 크기 (width, height)
        move_frame_num: 8, // 이동시 사용되는 frame의 수
        attack_frame_num: 11, // 공격시 사용되는 frame의 수
        beattack_frame_num: 4, // 공격당할때 사용되는 프레임수
        wait_frame_num: 8, // 대기시 사용되는 frame의 수

        fire_frame_num: 6, // 공격시 미사일에 사용되는 frame의 수
        attack_fire_frame: 5, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        move_speed: MOVE_SPEED.LO, // 이동 속도, very high
        attack_speed: ATTACK_SPEED.VL, // 공격속도임 보통(MI)
        attack_len: ATTACK_LEN.HI, // 공격거리(attack_len),

        attack_power: 700, // 공격력(attack_power)
        hp: 5000, // 체력(hp)
        missile_gap_x: 21, // 캐릭터 미사일 발사 x좌표
        missile_gap_y: 31, // 캐릭터 미사일 발사 y좌표

        center_gap_x: 1, // attack 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // attack 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가? 나즈굴은 80 즉, 피격마진 이라 부른다.

        gagebar_x: -1, //게이지 bar 표기 x좌표
        gagebar_y: 8 //게이지 bar 표기 y좌표

    },
    {
        name: "19", // 캐릭 이름 - 유령몬2
        dirname: "enemy_19", // 캐릭터의 파일 이름.
        feature: FEATURE.ATTACK, // 특징
        w: 91,
        h: 152, // 이미지의 크기 (width, height)
        move_frame_num: 8, // 이동시 사용되는 frame의 수
        attack_frame_num: 8, // 공격시 사용되는 frame의 수
        beattack_frame_num: 4, // 공격당할때 사용되는 프레임수
        wait_frame_num: 8, // 대기시 사용되는 frame의 수

        fire_frame_num: 6, // 공격시 미사일에 사용되는 frame의 수
        attack_fire_frame: 5, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        move_speed: MOVE_SPEED.VL, // 이동 속도, very high
        attack_speed: ATTACK_SPEED.LO, // 공격속도임 보통(MI)
        attack_len: ATTACK_LEN.MI, // 공격거리(attack_len),

        attack_power: 800, // 공격력(attack_power)
        hp: 6500, // 체력(hp)
        missile_gap_x: -218, // 캐릭터 미사일 발사 x좌표
        missile_gap_y: 32, // 캐릭터 미사일 발사 y좌표
        center_gap_x: -1, // attack 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: -14, // attack 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가? 나즈굴은 80 즉, 피격마진 이라 부른다.

        gagebar_x: 16, //게이지 bar 표기 x좌표
        gagebar_y: 35 //게이지 bar 표기 y좌표

    },
    {
        name: "20", // 캐릭 번호 - 젤몬4
        dirname: "enemy_20", // 캐릭터의 파일 이름.
        feature: FEATURE.WIDE, // 특징
        w: 109,
        h: 116, // 이미지의 크기 (width, height)
        move_frame_num: 9, // 이동시 사용되는 frame의 수
        attack_frame_num: 10, // 공격시 사용되는 frame의 수
        beattack_frame_num: 4, // 공격당할때 사용되는 프레임수
        fire_frame_num: 7, // 공격시 미사일에 사용되는 frame의 수 // Jell은 자기의무기가 따로 없다. 그래도 우선 7로 해서 해보자. 정아씨의 다양성을 구현하기 위해~~^^;
        wait_frame_num: 8, // 대기시 사용되는 frame의 수

        attack_fire_frame: 4, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        move_speed: MOVE_SPEED.VL, // 이동 속도, very high
        attack_speed: ATTACK_SPEED.VL, // 공격속도임 보통(MI)
        attack_len: ATTACK_LEN.LO, // 공격거리(attack_len),

        attack_power: 900, // 공격력(attack_power)
        hp: 10000, // 체력(hp)
        missile_gap_x: 0, // 캐릭터 미사일 발사 x좌표
        missile_gap_y: 0, // 캐릭터 미사일 발사 y좌표

        center_gap_x: -2, // attack 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: -19, // attack 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.

        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가? 나즈굴은 80 즉, 피격마진 이라 부른다.

        gagebar_x: 26, //게이지 bar 표기 x좌표
        gagebar_y: 16 //게이지 bar 표기 y좌표
    },
    {
        name: "21", // 캐릭 번호 - 문어탱4
        dirname: "enemy_21", // 디렉토리 이름
        feature: FEATURE.WIDE, // 특징
        w: 129,
        h: 165, // 이미지의 크기 (width, height)
        move_frame_num: 8, // 이동시 사용되는 frame의 수
        attack_frame_num: 10, // 공격시 사용되는 frame의 수
        beattack_frame_num: 4, // 공격당할때 사용되는 프레임수
        wait_frame_num: 10, // 대기시 사용되는 frame의 수

        fire_frame_num: 4, // 공격시 미사일에 사용되는 frame의 수
        attack_fire_frame: 5, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        move_speed: MOVE_SPEED.VL, // 이동 속도, very high
        attack_speed: ATTACK_SPEED.LO, // 공격속도임 보통(MI)
        attack_len: ATTACK_LEN.VH, // 공격거리(attack_len),

        attack_power: 1000, // 공격력(attack_power),
        hp: 7500, // 체력(hp)
        missile_gap_x: 57, // 캐릭터 미사일 발사 x좌표
        missile_gap_y: 6, // 캐릭터 미사일 발사 y좌표

        center_gap_x: -6, // attack 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: -6, // attack 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가? 나즈굴은 80 즉, 피격마진 이라 부른다.

        gagebar_x: 48, //게이지 bar 표기 x좌표
        gagebar_y: 21 //게이지 bar 표기 y좌표

    },
    {
        name: "22", // 캐릭 번호 - 락맨4
        dirname: "enemy_22", // 캐릭터의 파일 이름.
        feature: FEATURE.HP, // 특징
        w: 169,
        h: 143, // 이미지의 크기 (width, height)
        move_frame_num: 12, // 이동시 사용되는 frame의 수
        attack_frame_num: 11, // 공격시 사용되는 frame의 수
        beattack_frame_num: 4, // 공격당할때 사용되는 프레임수
        wait_frame_num: 10, // 대기시 사용되는 frame의 수

        fire_frame_num: 9, // 공격시 미사일에 사용되는 frame의 수
        attack_fire_frame: 3, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        move_speed: MOVE_SPEED.LO, // 이동 속도, very high
        attack_speed: ATTACK_SPEED.LO, // 공격속도임 보통(MI)
        attack_len: ATTACK_LEN.VL, // 공격거리(attack_len),

        attack_power: 1300, // 공격력(attack_power)
        hp: 32000, // 체력(hp)
        missile_gap_x: 21, // 캐릭터 미사일 발사 x좌표
        missile_gap_y: 31, // 캐릭터 미사일 발사 y좌표

        center_gap_x: -22, // attack 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // attack 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가? 나즈굴은 80 즉, 피격마진 이라 부른다.

        gagebar_x: 76, //게이지 bar 표기 x좌표
        gagebar_y: 2 //게이지 bar 표기 y좌표

    },
    {
        name: "23", // 캐릭 이름 - 유령몬3
        dirname: "enemy_23", // 캐릭터의 파일 이름.
        feature: FEATURE.ATTACK, // 특징
        w: 91,
        h: 152, // 이미지의 크기 (width, height)
        move_frame_num: 8, // 이동시 사용되는 frame의 수
        attack_frame_num: 8, // 공격시 사용되는 frame의 수
        beattack_frame_num: 4, // 공격당할때 사용되는 프레임수
        wait_frame_num: 8, // 대기시 사용되는 frame의 수

        fire_frame_num: 6, // 공격시 미사일에 사용되는 frame의 수
        attack_fire_frame: 5, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        move_speed: MOVE_SPEED.VL, // 이동 속도, very high
        attack_speed: ATTACK_SPEED.LO, // 공격속도임 보통(MI)
        attack_len: ATTACK_LEN.MI, // 공격거리(attack_len),

        attack_power: 1600, // 공격력(attack_power)
        hp: 35000, // 체력(hp)
        missile_gap_x: -218, // 캐릭터 미사일 발사 x좌표
        missile_gap_y: 32, // 캐릭터 미사일 발사 y좌표

        center_gap_x: -1, // attack 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: -14, // attack 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가? 나즈굴은 80 즉, 피격마진 이라 부른다.

        gagebar_x: 16, //게이지 bar 표기 x좌표
        gagebar_y: 35 //게이지 bar 표기 y좌표

    },
    {
        name: "24", // 캐릭 이름 - 눈사람몬1
        dirname: "enemy_24", // 캐릭터의 파일 이름.
        feature: FEATURE.WIDE, // 특징
        w: 204,
        h: 217, // 이미지의 크기 (width, height)
        move_frame_num: 8, // 이동시 사용되는 frame의 수
        attack_frame_num: 8, // 공격시 사용되는 frame의 수
        beattack_frame_num: 4, // 공격당할때 사용되는 프레임수
        wait_frame_num: 8, // 대기시 사용되는 frame의 수

        fire_frame_num: 5, // 공격시 미사일에 사용되는 frame의 수
        attack_fire_frame: 4, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        move_speed: MOVE_SPEED.LO, // 이동 속도, very high
        attack_speed: ATTACK_SPEED.HI, // 공격속도임 보통(MI)
        attack_len: ATTACK_LEN.VL, // 공격거리(attack_len),

        attack_power: 3000, // 공격력(attack_power)
        hp: 60000, // 체력(hp)
        missile_gap_x: -218, // 캐릭터 미사일 발사 x좌표
        missile_gap_y: 32, // 캐릭터 미사일 발사 y좌표

        center_gap_x: -46, // attack 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: -34, // attack 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가? 나즈굴은 80 즉, 피격마진 이라 부른다.

        gagebar_x: 122, //게이지 bar 표기 x좌표
        gagebar_y: 70 //게이지 bar 표기 y좌표

    },
    {
        name: "25", // 캐릭 이름 - 벌레몬5
        dirname: "enemy_25", // 캐릭터의 파일 이름.
        feature: FEATURE.ATTACK, // 특징
        w: 61,
        h: 105, // 이미지의 크기 (width, height)
        move_frame_num: 8, // 이동시 사용되는 frame의 수
        attack_frame_num: 11, // 공격시 사용되는 frame의 수
        beattack_frame_num: 4, // 공격당할때 사용되는 프레임수
        wait_frame_num: 8, // 대기시 사용되는 frame의 수

        fire_frame_num: 6, // 공격시 미사일에 사용되는 frame의 수
        attack_fire_frame: 5, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        move_speed: MOVE_SPEED.MI, // 이동 속도, very high
        attack_speed: ATTACK_SPEED.MI, // 공격속도임 보통(MI)
        attack_len: ATTACK_LEN.HI, // 공격거리(attack_len),

        attack_power: 4500, // 공격력(attack_power)
        hp: 80000, // 체력(hp)
        missile_gap_x: 21, // 캐릭터 미사일 발사 x좌표
        missile_gap_y: 31, // 캐릭터 미사일 발사 y좌표

        center_gap_x: 1, // attack 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // attack 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가? 나즈굴은 80 즉, 피격마진 이라 부른다.

        gagebar_x: -1, //게이지 bar 표기 x좌표
        gagebar_y: 8 //게이지 bar 표기 y좌표
    },
    {
        name: "26", // 캐릭 번호 - 젤몬5
        dirname: "enemy_26", // 캐릭터의 파일 이름.
        feature: FEATURE.WIDE, // 특징
        w: 109,
        h: 116, // 이미지의 크기 (width, height)
        move_frame_num: 8, // 이동시 사용되는 frame의 수
        attack_frame_num: 10, // 공격시 사용되는 frame의 수
        beattack_frame_num: 4, // 공격당할때 사용되는 프레임수
        fire_frame_num: 7, // 공격시 미사일에 사용되는 frame의 수 // Jell은 자기의무기가 따로 없다. 그래도 우선 7로 해서 해보자. 정아씨의 다양성을 구현하기 위해~~^^;
        wait_frame_num: 8, // 대기시 사용되는 frame의 수

        attack_fire_frame: 4, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        move_speed: MOVE_SPEED.VL, // 이동 속도, very high
        attack_speed: ATTACK_SPEED.VL, // 공격속도임 보통(MI)
        attack_len: ATTACK_LEN.LO, // 공격거리(attack_len),

        attack_power: 6000, // 공격력(attack_power)
        hp: 100000, // 체력(hp)
        missile_gap_x: 0, // 캐릭터 미사일 발사 x좌표
        missile_gap_y: 0, // 캐릭터 미사일 발사 y좌표

        center_gap_x: -2, // attack 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: -19, // attack 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가? 나즈굴은 80 즉, 피격마진 이라 부른다.

        gagebar_x: 26, //게이지 bar 표기 x좌표
        gagebar_y: 16 //게이지 bar 표기 y좌표

    },
    {
        name: "27", // 캐릭 번호 - 문어탱5
        dirname: "enemy_27", // 디렉토리 이름
        feature: FEATURE.WIDE, // 특징
        w: 129,
        h: 165, // 이미지의 크기 (width, height)
        move_frame_num: 8, // 이동시 사용되는 frame의 수
        attack_frame_num: 10, // 공격시 사용되는 frame의 수
        beattack_frame_num: 4, // 공격당할때 사용되는 프레임수
        wait_frame_num: 10, // 대기시 사용되는 frame의 수

        fire_frame_num: 4, // 공격시 미사일에 사용되는 frame의 수
        attack_fire_frame: 5, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        move_speed: MOVE_SPEED.VL, // 이동 속도, very high
        attack_speed: ATTACK_SPEED.LO, // 공격속도임 보통(MI)
        attack_len: ATTACK_LEN.VH, // 공격거리(attack_len),

        attack_power: 10000, // 공격력(attack_power),
        hp: 80000, // 체력(hp)
        missile_gap_x: 57, // 캐릭터 미사일 발사 x좌표
        missile_gap_y: 6, // 캐릭터 미사일 발사 y좌표

        center_gap_x: -6, // attack 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: -6, // attack 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가? 나즈굴은 80 즉, 피격마진 이라 부른다.

        gagebar_x: 48, //게이지 bar 표기 x좌표
        gagebar_y: 21 //게이지 bar 표기 y좌표
    },
    {
        name: "28", // 캐릭 번호 - 락맨5
        dirname: "enemy_28", // 캐릭터의 파일 이름.
        feature: FEATURE.HP, // 특징
        w: 169,
        h: 143, // 이미지의 크기 (width, height)
        move_frame_num: 12, // 이동시 사용되는 frame의 수
        attack_frame_num: 11, // 공격시 사용되는 frame의 수
        beattack_frame_num: 4, // 공격당할때 사용되는 프레임수
        wait_frame_num: 10, // 대기시 사용되는 frame의 수

        fire_frame_num: 9, // 공격시 미사일에 사용되는 frame의 수
        attack_fire_frame: 3, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        move_speed: MOVE_SPEED.MI, // 이동 속도, very high
        attack_speed: ATTACK_SPEED.LO, // 공격속도임 보통(MI)
        attack_len: ATTACK_LEN.VL, // 공격거리(attack_len),

        attack_power: 20000, // 공격력(attack_power)
        hp: 200000, // 체력(hp)
        missile_gap_x: 21, // 캐릭터 미사일 발사 x좌표
        missile_gap_y: 31, // 캐릭터 미사일 발사 y좌표

        center_gap_x: -22, // attack 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // attack 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가? 나즈굴은 80 즉, 피격마진 이라 부른다.

        gagebar_x: 85, //게이지 bar 표기 x좌표
        gagebar_y: 2 //게이지 bar 표기 y좌표

    },
    {
        name: "29", // 캐릭 이름 - 눈사람몬2
        dirname: "enemy_29", // 캐릭터의 파일 이름.
        feature: FEATURE.WIDE, // 특징
        w: 204,
        h: 217, // 이미지의 크기 (width, height)
        move_frame_num: 8, // 이동시 사용되는 frame의 수
        attack_frame_num: 8, // 공격시 사용되는 frame의 수
        beattack_frame_num: 4, // 공격당할때 사용되는 프레임수
        wait_frame_num: 8, // 대기시 사용되는 frame의 수

        fire_frame_num: 5, // 공격시 미사일에 사용되는 frame의 수
        attack_fire_frame: 4, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        move_speed: MOVE_SPEED.LO, // 이동 속도, very high
        attack_speed: ATTACK_SPEED.HI, // 공격속도임 보통(MI)
        attack_len: ATTACK_LEN.VL, // 공격거리(attack_len),

        attack_power: 35000, // 공격력(attack_power)
        hp: 230000, // 체력(hp)
        missile_gap_x: 0, // 캐릭터 미사일 발사 x좌표
        missile_gap_y: 0, // 캐릭터 미사일 발사 y좌표

        center_gap_x: -46, // attack 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: -34, // attack 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가? 나즈굴은 80 즉, 피격마진 이라 부른다.

        gagebar_x: 122, //게이지 bar 표기 x좌표
        gagebar_y: 70 //게이지 bar 표기 y좌표

    },
    {
        name: "30", // 캐릭 이름 - 눈사람몬3
        dirname: "enemy_30", // 캐릭터의 파일 이름.
        feature: FEATURE.WIDE, // 특징
        w: 204,
        h: 217, // 이미지의 크기 (width, height)
        move_frame_num: 8, // 이동시 사용되는 frame의 수
        attack_frame_num: 8, // 공격시 사용되는 frame의 수
        beattack_frame_num: 4, // 공격당할때 사용되는 프레임수
        wait_frame_num: 8, // 대기시 사용되는 frame의 수

        fire_frame_num: 5, // 공격시 미사일에 사용되는 frame의 수
        attack_fire_frame: 4, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        move_speed: MOVE_SPEED.MI, // 이동 속도, very high
        attack_speed: ATTACK_SPEED.HI, // 공격속도임 보통(MI)
        attack_len: ATTACK_LEN.VL, // 공격거리(attack_len),

        attack_power: 35000, // 공격력(attack_power)
        hp: 230000, // 체력(hp)
        missile_gap_x: 0, // 캐릭터 미사일 발사 x좌표
        missile_gap_y: 0, // 캐릭터 미사일 발사 y좌표

        center_gap_x: -46, // attack 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: -34, // attack 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가? 나즈굴은 80 즉, 피격마진 이라 부른다.

        gagebar_x: 122, //게이지 bar 표기 x좌표
        gagebar_y: 74 //게이지 bar 표기 y좌표

    },



    //2016.06.08  yhlee 적군 케릭 추가
    //타입을 정하기 전까지 모든 케릭 적군 케릭 1번인 파랑 카드 변정을 기준으로 해서 작성하였다.
    {
        name: "31", // 캐릭 이름 - 설인 1
        dirname: "enemy_31", // 캐릭터의 파일 이름.
        feature: FEATURE.HP, // 특징
        w: 309,
        h: 288, // 이미지의 크기 (width, height)
        move_frame_num: 8, // 이동시 사용되는 frame의 수
        attack_frame_num: 11, // 공격시 사용되는 frame의 수
        beattack_frame_num: 4, // 공격당할때 사용되는 프레임수
        wait_frame_num: 8, // 대기시 사용되는 frame의 수

        fire_frame_num: 3, // 공격시 미사일에 사용되는 frame의 수
        attack_fire_frame: 8, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        move_speed: MOVE_SPEED.HI, // 이동속도
        attack_speed: ATTACK_SPEED.VL, // 공격속도
        attack_len: ATTACK_LEN.VL - 30, // 공격거리

        attack_power: 40000, // 공격력(attack_power)
        hp: 250000, // 체력(hp)

        missile_gap_x: 0, // 캐릭터 미사일 발사 x좌표
        missile_gap_y: 0, // 캐릭터 미사일 발사 y좌표

        center_gap_x: 0, // attack 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: -20, // attack 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.
        beattack_margine: 55, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가? 나즈굴은 80 즉, 피격마진 이라 부른다.

        gagebar_x: 107, //게이지 bar 표기 x좌표
        gagebar_y: 94 //게이지 bar 표기 y좌표

    },
    {
        name: "32", // 캐릭 이름 - 고슴도치 1
        dirname: "enemy_32", // 캐릭터의 파일 이름.
        feature: FEATURE.ATTACK, // 특징
        w: 130,
        h: 175, // 이미지의 크기 (width, height)
        move_frame_num: 7, // 이동시 사용되는 frame의 수
        attack_frame_num: 5, // 공격시 사용되는 frame의 수
        beattack_frame_num: 4, // 공격당할때 사용되는 프레임수
        wait_frame_num: 8, // 대기시 사용되는 frame의 수

        fire_frame_num: 7, // 공격시 미사일에 사용되는 frame의 수
        attack_fire_frame: 4, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        move_speed: MOVE_SPEED.VH, // 이동속도
        attack_speed: ATTACK_SPEED.VH, // 공격속도
        attack_len: ATTACK_LEN.LO, // 공격거리

        attack_power: 35000, // 공격력(attack_power)
        hp: 230000, // 체력(hp)
        missile_gap_x: -180, // 캐릭터 미사일 발사 x좌표
        missile_gap_y: 50, // 캐릭터 미사일 발사 y좌표

        center_gap_x: 0, // attack 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: -30, // attack 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가? 나즈굴은 80 즉, 피격마진 이라 부른다.

        gagebar_x: 28, //게이지 bar 표기 x좌표
        gagebar_y: 71 //게이지 bar 표기 y좌표

    },
    {
        name: "33", // 캐릭 이름 - 고슴도치 2
        dirname: "enemy_33", // 캐릭터의 파일 이름.
        feature: FEATURE.ATTACK, // 특징
        w: 145,
        h: 192, // 이미지의 크기 (width, height)
        move_frame_num: 7, // 이동시 사용되는 frame의 수
        attack_frame_num: 5, // 공격시 사용되는 frame의 수
        beattack_frame_num: 4, // 공격당할때 사용되는 프레임수
        wait_frame_num: 8, // 대기시 사용되는 frame의 수

        fire_frame_num: 7, //5		// 공격시 미사일에 사용되는 frame의 수
        attack_fire_frame: 4, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        move_speed: MOVE_SPEED.VH, // 이동속도
        attack_speed: ATTACK_SPEED.VH, // 공격속도
        attack_len: ATTACK_LEN.LO, // 공격거리

        attack_power: 38000, // 공격력(attack_power)
        hp: 250000, // 체력(hp)
        missile_gap_x: -200, // 캐릭터 미사일 발사 x좌표
        missile_gap_y: 50, // 캐릭터 미사일 발사 y좌표

        center_gap_x: 0, // attack 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: -30, // attack 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가? 나즈굴은 80 즉, 피격마진 이라 부른다.

        gagebar_x: 41, //게이지 bar 표기 x좌표
        gagebar_y: 72 //게이지 bar 표기 y좌표

    },
    {
        name: "34", // 캐릭 이름 - 설인 2
        dirname: "enemy_34", // 캐릭터의 파일 이름.
        feature: FEATURE.ATTACK, // 특징
        w: 320,
        h: 329, // 이미지의 크기 (width, height)
        move_frame_num: 8, // 이동시 사용되는 frame의 수
        attack_frame_num: 11, // 공격시 사용되는 frame의 수
        beattack_frame_num: 4, // 공격당할때 사용되는 프레임수
        wait_frame_num: 8, // 대기시 사용되는 frame의 수

        fire_frame_num: 8, // 공격시 미사일에 사용되는 frame의 수
        attack_fire_frame: 10, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        move_speed: MOVE_SPEED.HI, // 이동속도
        attack_speed: ATTACK_SPEED.VL, // 공격속도
        attack_len: ATTACK_LEN.MI, // 공격거리

        attack_power: 80000, // 공격력(attack_power)
        hp: 300000, // 체력(hp)
        missile_gap_x: -20, // 캐릭터 미사일 발사 x좌표
        missile_gap_y: -70, // 캐릭터 미사일 발사 y좌표

        center_gap_x: 0, // attack 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: -30, // attack 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.
        beattack_margine: 60, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가? 나즈굴은 80 즉, 피격마진 이라 부른다.

        gagebar_x: 107, //게이지 bar 표기 x좌표
        gagebar_y: 117 //게이지 bar 표기 y좌표

    },
    {
        name: "35", // 캐릭 이름 - 고슴도치 3
        dirname: "enemy_35", // 캐릭터의 파일 이름.
        feature: FEATURE.ATTACK, // 특징
        w: 196,
        h: 269, // 이미지의 크기 (width, height)
        move_frame_num: 7, // 이동시 사용되는 frame의 수
        attack_frame_num: 8, // 공격시 사용되는 frame의 수
        beattack_frame_num: 4, // 공격당할때 사용되는 프레임수
        wait_frame_num: 8, // 대기시 사용되는 frame의 수

        fire_frame_num: 7, // 공격시 미사일에 사용되는 frame의 수
        attack_fire_frame: 4, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        move_speed: MOVE_SPEED.VH, // 이동속도
        attack_speed: ATTACK_SPEED.VH, // 공격속도
        attack_len: ATTACK_LEN.LO, // 공격거리

        attack_power: 55000, // 공격력(attack_power)
        hp: 350000, // 체력(hp)
        missile_gap_x: -180, // 캐릭터 미사일 발사 x좌표
        missile_gap_y: 160, // 캐릭터 미사일 발사 y좌표

        center_gap_x: 0, // attack 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: -50, // attack 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가? 나즈굴은 80 즉, 피격마진 이라 부른다.

        gagebar_x: 69, //게이지 bar 표기 x좌표
        gagebar_y: 118 //게이지 bar 표기 y좌표

    },
    {
        name: "36", // 캐릭 이름 - 설인 3
        dirname: "enemy_36", // 캐릭터의 파일 이름.
        feature: FEATURE.WIDE, // 특징
        w: 372,
        h: 374, // 이미지의 크기 (width, height)
        move_frame_num: 8, // 이동시 사용되는 frame의 수
        attack_frame_num: 16, // 공격시 사용되는 frame의 수
        beattack_frame_num: 4, // 공격당할때 사용되는 프레임수
        wait_frame_num: 8, // 대기시 사용되는 frame의 수

        fire_frame_num: 10, //8,				// 공격시 미사일에 사용되는 frame의 수
        attack_fire_frame: 11, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        move_speed: MOVE_SPEED.HI, // 이동속도
        attack_speed: ATTACK_SPEED.VL, // 공격속도
        attack_len: ATTACK_LEN.VH, // 공격거리

        attack_power: 80000, // 공격력(attack_power)
        hp: 500000, // 체력(hp)
        missile_gap_x: 0, // 캐릭터 미사일 발사 x좌표
        missile_gap_y: 30, // 캐릭터 미사일 발사 y좌표

        center_gap_x: 0, // attack 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: -30, // attack 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.
        beattack_margine: 60, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가? 나즈굴은 80 즉, 피격마진 이라 부른다.

        gagebar_x: 131, //게이지 bar 표기 x좌표
        gagebar_y: 122 //게이지 bar 표기 y좌표

    },
    {
        name: "37", // 캐릭 이름 - 거북이 1
        dirname: "enemy_37", // 캐릭터의 파일 이름.
        feature: FEATURE.ATTACK, // 특징
        w: 150,
        h: 144, // 이미지의 크기 (width, height)
        move_frame_num: 16, // 이동시 사용되는 frame의 수
        attack_frame_num: 12, // 공격시 사용되는 frame의 수
        beattack_frame_num: 4, // 공격당할때 사용되는 프레임수
        wait_frame_num: 8, // 대기시 사용되는 frame의 수

        fire_frame_num: 9, // 공격시 미사일에 사용되는 frame의 수
        attack_fire_frame: 3, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        move_speed: MOVE_SPEED.LO, // 이동속도
        attack_speed: ATTACK_SPEED.VL, // 공격속도
        attack_len: ATTACK_LEN.VL, // 공격거리

        attack_power: 45000, // 공격력(attack_power)
        hp: 380000, // 체력(hp)
        missile_gap_x: 0, // 캐릭터 미사일 발사 x좌표
        missile_gap_y: 0, // 캐릭터 미사일 발사 y좌표

        center_gap_x: 0, // attack 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // attack 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가? 나즈굴은 80 즉, 피격마진 이라 부른다.

        gagebar_x: 38, //게이지 bar 표기 x좌표
        gagebar_y: 39 //게이지 bar 표기 y좌표

    },
    {
        name: "38", // 캐릭 이름 - 드래곤 1
        dirname: "enemy_38", // 캐릭터의 파일 이름.
        feature: FEATURE.ATTACK, // 특징
        w: 228,
        h: 198, // 이미지의 크기 (width, height)
        move_frame_num: 8, // 이동시 사용되는 frame의 수
        attack_frame_num: 9, // 공격시 사용되는 frame의 수
        beattack_frame_num: 4, // 공격당할때 사용되는 프레임수
        wait_frame_num: 8, // 대기시 사용되는 frame의 수

        fire_frame_num: 6, // 공격시 미사일에 사용되는 frame의 수
        attack_fire_frame: 6, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        move_speed: MOVE_SPEED.MI, // 이동속도
        attack_speed: ATTACK_SPEED.VL, // 공격속도
        attack_len: ATTACK_LEN.LO, // 공격거리

        attack_power: 100000, // 공격력(attack_power)
        hp: 600000, // 체력(hp)
        missile_gap_x: -100, // 캐릭터 미사일 발사 x좌표
        missile_gap_y: 100, // 캐릭터 미사일 발사 y좌표

        center_gap_x: 0, // attack 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // attack 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가? 나즈굴은 80 즉, 피격마진 이라 부른다.

        gagebar_x: 44, //게이지 bar 표기 x좌표
        gagebar_y: 20 //게이지 bar 표기 y좌표

    },
    {
        name: "39", // 캐릭 이름 - 거북이 2
        dirname: "enemy_39", // 캐릭터의 파일 이름.
        feature: FEATURE.ATTACK, // 특징
        w: 210,
        h: 144, // 이미지의 크기 (width, height)
        move_frame_num: 16, // 이동시 사용되는 frame의 수
        attack_frame_num: 12, // 공격시 사용되는 frame의 수
        beattack_frame_num: 4, // 공격당할때 사용되는 프레임수
        wait_frame_num: 8, // 대기시 사용되는 frame의 수

        fire_frame_num: 8, // 공격시 미사일에 사용되는 frame의 수
        attack_fire_frame: 6, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가? //20170623_ywlee 거북이2번 상대편에게 damage안주는 현상 수정(13 --> 6)
        move_speed: MOVE_SPEED.LO, // 이동속도
        attack_speed: ATTACK_SPEED.VL, // 공격속도
        attack_len: ATTACK_LEN.VL - 10, // 공격거리

        attack_power: 110000, // 공격력(attack_power)
        hp: 600000, // 체력(hp)
        missile_gap_x: 0, // 캐릭터 미사일 발사 x좌표
        missile_gap_y: 0, // 캐릭터 미사일 발사 y좌표

        center_gap_x: 0, // attack 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // attack 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가? 나즈굴은 80 즉, 피격마진 이라 부른다.

        gagebar_x: 67, //게이지 bar 표기 x좌표
        gagebar_y: 32 //게이지 bar 표기 y좌표

    },
    {
        name: "40", // 캐릭 이름 - 드래곤 2
        dirname: "enemy_40", // 캐릭터의 파일 이름.
        feature: FEATURE.WIDE, // 특징
        w: 231,
        h: 212, // 이미지의 크기 (width, height)
        move_frame_num: 6, // 이동시 사용되는 frame의 수
        attack_frame_num: 10, // 공격시 사용되는 frame의 수
        beattack_frame_num: 5, // 공격당할때 사용되는 프레임수
        wait_frame_num: 8, // 대기시 사용되는 frame의 수

        fire_frame_num: 8, // 공격시 미사일에 사용되는 frame의 수
        attack_fire_frame: 3, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        move_speed: MOVE_SPEED.HI, // 이동속도
        attack_speed: ATTACK_SPEED.MI, // 공격속도
        attack_len: ATTACK_LEN.LO, // 공격거리

        attack_power: 110000, // 공격력(attack_power)
        hp: 650000, // 체력(hp)
        missile_gap_x: -150, // 캐릭터 미사일 발사 x좌표
        missile_gap_y: 50, // 캐릭터 미사일 발사 y좌표

        center_gap_x: 0, // attack 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // attack 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가? 나즈굴은 80 즉, 피격마진 이라 부른다.

        gagebar_x: 60, //게이지 bar 표기 x좌표
        gagebar_y: 19 //게이지 bar 표기 y좌표

    },
    {
        name: "41", // 캐릭 이름 - 거북이 3
        dirname: "enemy_41", // 캐릭터의 파일 이름.
        feature: FEATURE.WIDE, // 특징
        w: 236,
        h: 200, // 이미지의 크기 (width, height)
        move_frame_num: 16, // 이동시 사용되는 frame의 수
        attack_frame_num: 11, // 공격시 사용되는 frame의 수
        beattack_frame_num: 4, // 공격당할때 사용되는 프레임수
        wait_frame_num: 8, // 대기시 사용되는 frame의 수

        fire_frame_num: 9, // 공격시 미사일에 사용되는 frame의 수
        attack_fire_frame: 7, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        move_speed: MOVE_SPEED.LO, // 이동속도
        attack_speed: ATTACK_SPEED.VL, // 공격속도
        attack_len: ATTACK_LEN.VH + 10, // 공격거리

        attack_power: 115000, // 공격력(attack_power)
        hp: 650000, // 체력(hp)
        missile_gap_x: 70, // 캐릭터 미사일 발사 x좌표
        missile_gap_y: 0, // 캐릭터 미사일 발사 y좌표

        center_gap_x: 0, // attack 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: -30, // attack 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가? 나즈굴은 80 즉, 피격마진 이라 부른다.

        gagebar_x: 83, //게이지 bar 표기 x좌표
        gagebar_y: 52 //게이지 bar 표기 y좌표

    },
    {
        name: "42", // 캐릭 이름 - 드래곤 3
        dirname: "enemy_42", // 캐릭터의 파일 이름.
        feature: FEATURE.WIDE, // 특징
        w: 320,
        h: 491, // 이미지의 크기 (width, height)
        move_frame_num: 8, // 이동시 사용되는 frame의 수
        attack_frame_num: 24, // 공격시 사용되는 frame의 수
        beattack_frame_num: 4, // 공격당할때 사용되는 프레임수
        wait_frame_num: 8, // 대기시 사용되는 frame의 수

        fire_frame_num: 8, // 공격시 미사일에 사용되는 frame의 수
        attack_fire_frame: 15, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        move_speed: MOVE_SPEED.VH, // 이동속도
        attack_speed: ATTACK_SPEED.VH, // 공격속도
        attack_len: ATTACK_LEN.HI, // 공격거리 //MI --> HI

        attack_power: 120000, // 공격력(attack_power)
        hp: 800000, // 체력(hp)
        missile_gap_x: -300, // 캐릭터 미사일 발사 x좌표
        missile_gap_y: 70, // 캐릭터 미사일 발사 y좌표

        center_gap_x: 0, // attack 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: -100, // attack 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가? 나즈굴은 80 즉, 피격마진 이라 부른다.

        gagebar_x: 79, //게이지 bar 표기 x좌표
        gagebar_y: 262 //게이지 bar 표기 y좌표

    },
    {
        name: "43", // 캐릭 이름 - 나즈굴 1
        dirname: "enemy_43", // 캐릭터의 파일 이름.
        feature: FEATURE.ATTACK, // 특징
        w: 210,
        h: 154, // 이미지의 크기 (width, height)
        move_frame_num: 12, // 이동시 사용되는 frame의 수
        attack_frame_num: 10, // 공격시 사용되는 frame의 수
        beattack_frame_num: 4, // 공격당할때 사용되는 프레임수
        wait_frame_num: 8, // 대기시 사용되는 frame의 수

        fire_frame_num: 8, // 공격시 미사일에 사용되는 frame의 수
        attack_fire_frame: 8, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        move_speed: MOVE_SPEED.LO, // 이동속도
        attack_speed: ATTACK_SPEED.MI, // 공격속도
        attack_len: ATTACK_LEN.VH * 1.4, // 공격거리

        attack_power: 187000, // 공격력(attack_power) //1.5 --> 1.3  20170919_ywlee//1.3 -> 1.1 yhlee
        hp: 900000, // 체력(hp) //1.5 --> 1.2   20170919_ywlee//1.2 -> 1.1 yhlee
        // hp:1,							// 체력(hp)
        missile_gap_x: 0, // 캐릭터 미사일 발사 x좌표
        missile_gap_y: 0, // 캐릭터 미사일 발사 y좌표

        center_gap_x: 0, // attack 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 20, // attack 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.
        beattack_margine: 80, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가? 나즈굴은 80 즉, 피격마진 이라 부른다.

        gagebar_x: 84, //게이지 bar 표기 x좌표
        gagebar_y: -1 //게이지 bar 표기 y좌표

    },
    {
        name: "44", // 캐릭 이름 - 트롤 1
        dirname: "enemy_44", // 캐릭터의 파일 이름.
        feature: FEATURE.HP, // 특징
        w: 193,
        h: 167, // 이미지의 크기 (width, height)
        move_frame_num: 12, // 이동시 사용되는 frame의 수
        attack_frame_num: 8, // 공격시 사용되는 frame의 수
        beattack_frame_num: 4, // 공격당할때 사용되는 프레임수
        wait_frame_num: 8, // 대기시 사용되는 frame의 수

        fire_frame_num: 3, // 공격시 미사일에 사용되는 frame의 수
        attack_fire_frame: 6, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        move_speed: MOVE_SPEED.VH, // 이동속도
        attack_speed: ATTACK_SPEED.VL, // 공격속도
        attack_len: ATTACK_LEN.VL, // 공격거리

        // attack_power:170000*100, 				// 공격력(attack_power)
        //20191001_yhlee 아이템 추가로 인하여 트롤의 공격력을 원샷원킬나도록 합니다.
        attack_power: 17000000000, // 공격력(attack_power)
        hp: 950000, // 체력(hp)//1.3 -> 1.1 yhlee
        missile_gap_x: 0, // 캐릭터 미사일 발사 x좌표
        missile_gap_y: 0, // 캐릭터 미사일 발사 y좌표

        center_gap_x: -30, // attack 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 20, // attack 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.
        beattack_margine: 80, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가? 나즈굴은 80 즉, 피격마진 이라 부른다.

        gagebar_x: 90, //게이지 bar 표기 x좌표
        gagebar_y: -4 //게이지 bar 표기 y좌표

    },
    {
        name: "45", // 캐릭 이름 - 나즈굴 2
        dirname: "enemy_45", // 캐릭터의 파일 이름.
        feature: FEATURE.WIDE, // 특징
        w: 238,
        h: 167, // 이미지의 크기 (width, height)
        move_frame_num: 12, // 이동시 사용되는 frame의 수
        attack_frame_num: 10, // 공격시 사용되는 frame의 수
        beattack_frame_num: 4, // 공격당할때 사용되는 프레임수
        wait_frame_num: 8, // 대기시 사용되는 frame의 수

        fire_frame_num: 8, // 공격시 미사일에 사용되는 frame의 수
        attack_fire_frame: 8, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        move_speed: MOVE_SPEED.LO, // 이동속도
        attack_speed: ATTACK_SPEED.VL * 2, // 공격속도
        attack_len: ATTACK_LEN.VH * 1.2, // 공격거리//1.5 -> 1.2 yhlee

        attack_power: 150000, // 공격력(attack_power)//190000*1.5 -> 150000*1.0 yhlee
        hp: 1000000, // 체력(hp)//1.5 -> 1.1 yhlee
        missile_gap_x: 0, // 캐릭터 미사일 발사 x좌표
        missile_gap_y: 0, // 캐릭터 미사일 발사 y좌표

        center_gap_x: -30, // attack 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 20, // attack 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.
        beattack_margine: 80, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가? 나즈굴은 80 즉, 피격마진 이라 부른다.

        gagebar_x: 104, //게이지 bar 표기 x좌표
        gagebar_y: 6 //게이지 bar 표기 y좌표

    },
    {
        name: "46", // 캐릭 이름 - 트롤 2
        dirname: "enemy_46", // 캐릭터의 파일 이름.
        feature: FEATURE.ATTACK, // 특징
        w: 224,
        h: 178, // 이미지의 크기 (width, height)
        move_frame_num: 12, // 이동시 사용되는 frame의 수
        attack_frame_num: 8, // 공격시 사용되는 frame의 수
        beattack_frame_num: 4, // 공격당할때 사용되는 프레임수
        wait_frame_num: 8, // 대기시 사용되는 frame의 수

        fire_frame_num: 3, // 공격시 미사일에 사용되는 frame의 수
        attack_fire_frame: 6, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        move_speed: MOVE_SPEED.VH, // 이동속도
        attack_speed: ATTACK_SPEED.VL, // 공격속도
        attack_len: ATTACK_LEN.VL, // 공격거리

        // attack_power:190000*100, 				// 공격력(attack_power)
        //20191001_yhlee 아이템 추가로 인하여 트롤의 공격력을 원샷원킬나도록 합니다.
        attack_power: 19000000000, // 공격력(attack_power)
        hp: 1100000, // 체력(hp)//1.3 -> 1.1 yhlee
        missile_gap_x: 0, // 캐릭터 미사일 발사 x좌표
        missile_gap_y: 0, // 캐릭터 미사일 발사 y좌표

        center_gap_x: -30, // attack 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 20, // attack 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.
        beattack_margine: 100, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가? 나즈굴은 80 즉, 피격마진 이라 부른다.

        gagebar_x: 111, //게이지 bar 표기 x좌표
        gagebar_y: -11 //게이지 bar 표기 y좌표

    },
    {
        name: "47", // 캐릭 이름 - 나즈굴 3
        dirname: "enemy_47", // 캐릭터의 파일 이름.
        feature: FEATURE.WIDE, // 특징
        w: 265,
        h: 183, // 이미지의 크기 (width, height)
        move_frame_num: 12, // 이동시 사용되는 frame의 수
        attack_frame_num: 10, // 공격시 사용되는 frame의 수
        beattack_frame_num: 4, // 공격당할때 사용되는 프레임수
        wait_frame_num: 8, // 대기시 사용되는 frame의 수

        fire_frame_num: 8, // 공격시 미사일에 사용되는 frame의 수
        attack_fire_frame: 8, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        move_speed: MOVE_SPEED.MI, // 이동속도
        attack_speed: ATTACK_SPEED.VL, // 공격속도
        attack_len: ATTACK_LEN.VH * 1.5, // 공격거리//1.6 -> 1.5 yhlee

        attack_power: 170000, // 공격력(attack_power)//210000*1.5 -> 170000 * 1.0 yhlee
        hp: 1250000, // 체력(hp)//1.5 -> 1.1 yhlee
        missile_gap_x: 0, // 캐릭터 미사일 발사 x좌표
        missile_gap_y: 0, // 캐릭터 미사일 발사 y좌표

        center_gap_x: -30, // attack 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 20, // attack 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.
        beattack_margine: 90, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가? 나즈굴은 80 즉, 피격마진 이라 부른다.

        gagebar_x: 123, //게이지 bar 표기 x좌표
        gagebar_y: -1 //게이지 bar 표기 y좌표

    },
    //===-----------------------------------------==현재 여기까지가 160 stage까지임
    {
        name: "48", // 캐릭 이름 - 트롤3
        dirname: "enemy_48", // 캐릭터의 파일 이름.
        feature: FEATURE.ATTACK, // 특징
        w: 275,
        h: 199, // 이미지의 크기 (width, height)
        move_frame_num: 6, // 이동시 사용되는 frame의 수
        attack_frame_num: 7, // 공격시 사용되는 frame의 수
        beattack_frame_num: 4, // 공격당할때 사용되는 프레임수
        wait_frame_num: 4, // 대기시 사용되는 frame의 수

        fire_frame_num: 3, // 공격시 미사일에 사용되는 frame의 수
        attack_fire_frame: 6, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        move_speed: MOVE_SPEED.VH * 1.4, // 이동속도
        attack_speed: ATTACK_SPEED.MI, // 공격속도
        attack_len: ATTACK_LEN.VL, // 공격거리

        // attack_power:200000*100, 				// 공격력(attack_power)
        //20191001_yhlee 아이템 추가로 인하여 트롤의 공격력을 원샷원킬나도록 합니다.
        attack_power: 20000000000, // 공격력(attack_power)
        hp: 2000000, // 체력(hp)
        missile_gap_x: 0, // 캐릭터 미사일 발사 x좌표
        missile_gap_y: 0, // 캐릭터 미사일 발사 y좌표

        center_gap_x: -30, // attack 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 20, // attack 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.
        beattack_margine: 130, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가? 나즈굴은 80 즉, 피격마진 이라 부른다.

        gagebar_x: 139, //게이지 bar 표기 x좌표
        gagebar_y: -12 //게이지 bar 표기 y좌표

    },
    {
        name: "49", // 캐릭 이름 - 해골 1
        dirname: "enemy_49", // 캐릭터의 파일 이름.
        feature: FEATURE.WIDE, // 특징
        w: 309,
        h: 305, // 이미지의 크기 (width, height)
        move_frame_num: 6, // 이동시 사용되는 frame의 수
        attack_frame_num: 6, // 공격시 사용되는 frame의 수
        beattack_frame_num: 4, // 공격당할때 사용되는 프레임수
        wait_frame_num: 4, // 대기시 사용되는 frame의 수

        fire_frame_num: 4, // 공격시 미사일에 사용되는 frame의 수
        attack_fire_frame: 6, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        move_speed: MOVE_SPEED.MI, // 이동속도
        attack_speed: ATTACK_SPEED.VH, // 공격속도
        attack_len: ATTACK_LEN.VH * 1.5, // 공격거리

        attack_power: 230000, // 공격력(attack_power)
        hp: 2100000, // 체력(hp)
        missile_gap_x: 120, // 캐릭터 미사일 발사 x좌표
        missile_gap_y: 20, // 캐릭터 미사일 발사 y좌표

        center_gap_x: -10, // attack 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: -50, // attack 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.
        beattack_margine: 100, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가? 나즈굴은 80 즉, 피격마진 이라 부른다.

        gagebar_x: 154, //게이지 bar 표기 x좌표
        gagebar_y: 114 //게이지 bar 표기 y좌표

    },
    {
        name: "50", // 캐릭 이름 - 좀비 1
        dirname: "enemy_50", // 캐릭터의 파일 이름.
        feature: FEATURE.WIDE, // 특징
        w: 142,
        h: 196, // 이미지의 크기 (width, height)
        move_frame_num: 6, // 이동시 사용되는 frame의 수
        attack_frame_num: 8, // 공격시 사용되는 frame의 수
        beattack_frame_num: 4, // 공격당할때 사용되는 프레임수
        wait_frame_num: 4, // 대기시 사용되는 frame의 수

        fire_frame_num: 8, // 공격시 미사일에 사용되는 frame의 수
        attack_fire_frame: 2, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        move_speed: MOVE_SPEED.VH, // 이동속도
        attack_speed: ATTACK_SPEED.HI, // 공격속도
        attack_len: ATTACK_LEN.VH, // 공격거리

        attack_power: 240000, // 공격력(attack_power)
        hp: 2500000, // 체력(hp)
        missile_gap_x: -310, // 캐릭터 미사일 발사 x좌표
        missile_gap_y: 70, // 캐릭터 미사일 발사 y좌표

        center_gap_x: 0, // attack 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 20, // attack 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가? 나즈굴은 80 즉, 피격마진 이라 부른다.

        gagebar_x: 61, //게이지 bar 표기 x좌표
        gagebar_y: -5 //게이지 bar 표기 y좌표

    },
    {
        name: "51", // 캐릭 이름 - 해골 2
        dirname: "enemy_51", // 캐릭터의 파일 이름.
        feature: FEATURE.WIDE, // 특징
        w: 387,
        h: 372, // 이미지의 크기 (width, height)
        move_frame_num: 6, // 이동시 사용되는 frame의 수
        attack_frame_num: 6, // 공격시 사용되는 frame의 수
        beattack_frame_num: 4, // 공격당할때 사용되는 프레임수
        wait_frame_num: 4, // 대기시 사용되는 frame의 수

        fire_frame_num: 4, // 공격시 미사일에 사용되는 frame의 수
        attack_fire_frame: 6, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        move_speed: MOVE_SPEED.HI, // 이동속도
        attack_speed: ATTACK_SPEED.VH, // 공격속도
        attack_len: ATTACK_LEN.VH * 1.7, // 공격거리

        attack_power: 375000, // 공격력(attack_power)
        hp: 2750000, // 체력(hp)
        missile_gap_x: 120, // 캐릭터 미사일 발사 x좌표
        missile_gap_y: 20, // 캐릭터 미사일 발사 y좌표

        center_gap_x: -10, // attack 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: -80, // attack 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.
        beattack_margine: 130, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가? 나즈굴은 80 즉, 피격마진 이라 부른다.

        gagebar_x: 195, //게이지 bar 표기 x좌표
        gagebar_y: 162 //게이지 bar 표기 y좌표

    },
    {
        name: "52", // 캐릭 이름 - 좀비 2
        dirname: "enemy_52", // 캐릭터의 파일 이름.
        feature: FEATURE.WIDE, // 특징
        w: 199,
        h: 209, // 이미지의 크기 (width, height)
        move_frame_num: 6, // 이동시 사용되는 frame의 수
        attack_frame_num: 8, // 공격시 사용되는 frame의 수
        beattack_frame_num: 4, // 공격당할때 사용되는 프레임수
        wait_frame_num: 4, // 대기시 사용되는 frame의 수

        fire_frame_num: 8, // 공격시 미사일에 사용되는 frame의 수
        attack_fire_frame: 2, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        move_speed: MOVE_SPEED.VH, // 이동속도
        attack_speed: ATTACK_SPEED.VH, // 공격속도
        attack_len: ATTACK_LEN.VH, // 공격거리

        attack_power: 260000, // 공격력(attack_power)
        hp: 3500000, // 체력(hp)
        missile_gap_x: -443, // 캐릭터 미사일 발사 x좌표
        missile_gap_y: 78, // 캐릭터 미사일 발사 y좌표

        center_gap_x: 0, // attack 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 10, // attack 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가? 나즈굴은 80 즉, 피격마진 이라 부른다.

        gagebar_x: 75, //게이지 bar 표기 x좌표
        gagebar_y: -2 //게이지 bar 표기 y좌표

    },
    {
        name: "53", // 캐릭 이름 - 해골 3
        dirname: "enemy_53", // 캐릭터의 파일 이름.
        feature: FEATURE.WIDE, // 특징
        w: 342,
        h: 354, // 이미지의 크기 (width, height)
        move_frame_num: 6, // 이동시 사용되는 frame의 수
        attack_frame_num: 6, // 공격시 사용되는 frame의 수
        beattack_frame_num: 4, // 공격당할때 사용되는 프레임수
        wait_frame_num: 4, // 대기시 사용되는 frame의 수

        fire_frame_num: 4, // 공격시 미사일에 사용되는 frame의 수
        attack_fire_frame: 6, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        move_speed: MOVE_SPEED.VH, // 이동속도
        attack_speed: ATTACK_SPEED.VH, // 공격속도
        attack_len: ATTACK_LEN.VH * 2.0, // 공격거리

        attack_power: 202500, // 공격력(attack_power)
        hp: 916667, // 체력(hp)
        missile_gap_x: 120, // 캐릭터 미사일 발사 x좌표
        missile_gap_y: 20, // 캐릭터 미사일 발사 y좌표

        center_gap_x: 0, // attack 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: -60, // attack 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.
        beattack_margine: 100, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가? 나즈굴은 80 즉, 피격마진 이라 부른다.

        gagebar_x: 156, //게이지 bar 표기 x좌표
        gagebar_y: 128 //게이지 bar 표기 y좌표
    },
    //-------------------180 스테이지----------------------------------------------
    {
        name: "54", // 캐릭 이름 - 좀비 3
        dirname: "enemy_54", // 캐릭터의 파일 이름.
        feature: FEATURE.WIDE, // 특징
        w: 249,
        h: 216, // 이미지의 크기 (width, height)
        move_frame_num: 12, // 이동시 사용되는 frame의 수
        attack_frame_num: 14, // 공격시 사용되는 frame의 수
        beattack_frame_num: 6, // 공격당할때 사용되는 프레임수
        wait_frame_num: 8, // 대기시 사용되는 frame의 수

        fire_frame_num: 13, // 공격시 미사일에 사용되는 frame의 수
        attack_fire_frame: 2, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        move_speed: MOVE_SPEED.VH, // 이동속도
        attack_speed: ATTACK_SPEED.VH, // 공격속도
        attack_len: ATTACK_LEN.VH, // 공격거리

        attack_power: 260000, // 공격력(attack_power)
        hp: 4000000, // 체력(hp)
        missile_gap_x: -683, // 캐릭터 미사일 발사 x좌표
        missile_gap_y: -140, // 캐릭터 미사일 발사 y좌표

        center_gap_x: 20, // attack 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 20, // attack 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가? 나즈굴은 80 즉, 피격마진 이라 부른다.

        gagebar_x: 76, //게이지 bar 표기 x좌표
        gagebar_y: -4 //게이지 bar 표기 y좌표

    },
    {
        name: "55", // 캐릭 이름 - 인어 1
        dirname: "enemy_55", // 캐릭터의 파일 이름.
        feature: FEATURE.WIDE, // 특징
        w: 130,
        h: 146, // 이미지의 크기 (width, height)
        move_frame_num: 8, // 이동시 사용되는 frame의 수
        attack_frame_num: 7, // 공격시 사용되는 frame의 수
        beattack_frame_num: 6, // 공격당할때 사용되는 프레임수
        wait_frame_num: 8, // 대기시 사용되는 frame의 수

        fire_frame_num: 5, // 공격시 미사일에 사용되는 frame의 수
        attack_fire_frame: 7, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        move_speed: MOVE_SPEED.VH * 5, // 이동속도
        attack_speed: ATTACK_SPEED.VL, // 공격속도
        attack_len: ATTACK_LEN.MI, // 공격거리

        attack_power: 6000000, // 공격력(attack_power)
        // attack_power:1, 				// 공격력(attack_power)
        hp: 6000000, // 체력(hp)
        missile_gap_x: 150, // 캐릭터 미사일 발사 x좌표
        missile_gap_y: -50, // 캐릭터 미사일 발사 y좌표

        center_gap_x: 0, // attack 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // attack 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가? 나즈굴은 80 즉, 피격마진 이라 부른다.

        gagebar_x: 29, //게이지 bar 표기 x좌표
        gagebar_y: 14 //게이지 bar 표기 y좌표

    },
    {
        name: "56", // 캐릭 이름 - 문어 1
        dirname: "enemy_56", // 캐릭터의 파일 이름.
        feature: FEATURE.WIDE, // 특징
        w: 258,
        h: 241, // 이미지의 크기 (width, height)
        move_frame_num: 5, // 이동시 사용되는 frame의 수
        attack_frame_num: 8, // 공격시 사용되는 frame의 수
        beattack_frame_num: 4, // 공격당할때 사용되는 프레임수
        wait_frame_num: 8, // 대기시 사용되는 frame의 수

        fire_frame_num: 6, // 공격시 미사일에 사용되는 frame의 수
        attack_fire_frame: 7, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        move_speed: MOVE_SPEED.LO, // 이동속도
        attack_speed: ATTACK_SPEED.VL, // 공격속도
        attack_len: ATTACK_LEN.VH * 2, // 공격거리

        attack_power: 400000, // 공격력(attack_power)
        hp: 2500000, // 체력(hp)
        missile_gap_x: 50, // 캐릭터 미사일 발사 x좌표
        missile_gap_y: 130, // 캐릭터 미사일 발사 y좌표

        center_gap_x: 0, // attack 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // attack 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가? 나즈굴은 80 즉, 피격마진 이라 부른다.

        gagebar_x: 107, //게이지 bar 표기 x좌표
        gagebar_y: 33 //게이지 bar 표기 y좌표

    },
    {
        name: "57", // 캐릭 이름 - 인어 2
        dirname: "enemy_57", // 캐릭터의 파일 이름.
        feature: FEATURE.WIDE, // 특징
        w: 145,
        h: 159, // 이미지의 크기 (width, height)
        move_frame_num: 8, // 이동시 사용되는 frame의 수
        attack_frame_num: 7, // 공격시 사용되는 frame의 수
        beattack_frame_num: 6, // 공격당할때 사용되는 프레임수
        wait_frame_num: 8, // 대기시 사용되는 frame의 수

        fire_frame_num: 5, // 공격시 미사일에 사용되는 frame의 수
        attack_fire_frame: 7, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        move_speed: MOVE_SPEED.VH * 6, // 이동속도
        attack_speed: ATTACK_SPEED.VL, // 공격속도
        attack_len: ATTACK_LEN.HI, // 공격거리

        attack_power: 9000000, // 공격력(attack_power)
        // attack_power:1, 				// 공격력(attack_power)
        hp: 8000000, // 체력(hp)
        missile_gap_x: 150, // 캐릭터 미사일 발사 x좌표
        missile_gap_y: -60, // 캐릭터 미사일 발사 y좌표

        center_gap_x: 0, // attack 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // attack 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가? 나즈굴은 80 즉, 피격마진 이라 부른다.

        gagebar_x: 37, //게이지 bar 표기 x좌표
        gagebar_y: 16 //게이지 bar 표기 y좌표

    },
    {
        name: "58", // 캐릭 이름 - 문어 2
        dirname: "enemy_58", // 캐릭터의 파일 이름.
        feature: FEATURE.WIDE, // 특징
        w: 264,
        h: 240, // 이미지의 크기 (width, height)
        move_frame_num: 5, // 이동시 사용되는 frame의 수
        attack_frame_num: 7, // 공격시 사용되는 frame의 수
        beattack_frame_num: 6, // 공격당할때 사용되는 프레임수
        wait_frame_num: 8, // 대기시 사용되는 frame의 수

        fire_frame_num: 10, // 공격시 미사일에 사용되는 frame의 수
        attack_fire_frame: 3, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        move_speed: MOVE_SPEED.LO, // 이동속도
        attack_speed: ATTACK_SPEED.VL, // 공격속도
        attack_len: ATTACK_LEN.VH * 2.1, // 공격거리

        attack_power: 700000, // 공격력(attack_power)
        // attack_power:1000, 				// 공격력(attack_power)
        hp: 2600000, // 체력(hp)
        missile_gap_x: 220, // 캐릭터 미사일 발사 x좌표
        missile_gap_y: 50, // 캐릭터 미사일 발사 y좌표

        center_gap_x: 0, // attack 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // attack 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가? 나즈굴은 80 즉, 피격마진 이라 부른다.

        gagebar_x: 111, //게이지 bar 표기 x좌표
        gagebar_y: 32 //게이지 bar 표기 y좌표

    },
    {
        name: "59", // 캐릭 이름 - 인어 3
        dirname: "enemy_59", // 캐릭터의 파일 이름.
        feature: FEATURE.WIDE, // 특징
        w: 202,
        h: 210, // 이미지의 크기 (width, height)
        move_frame_num: 8, // 이동시 사용되는 frame의 수
        attack_frame_num: 7, // 공격시 사용되는 frame의 수
        beattack_frame_num: 6, // 공격당할때 사용되는 프레임수
        wait_frame_num: 8, // 대기시 사용되는 frame의 수

        fire_frame_num: 5, // 공격시 미사일에 사용되는 frame의 수
        attack_fire_frame: 7, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        move_speed: MOVE_SPEED.VH * 7, // 이동속도
        attack_speed: ATTACK_SPEED.VL, // 공격속도
        attack_len: ATTACK_LEN.VH, // 공격거리

        attack_power: 12000000, // 공격력(attack_power)
        // attack_power:2, 				// 공격력(attack_power)
        hp: 10000000, // 체력(hp)
        missile_gap_x: 150, // 캐릭터 미사일 발사 x좌표
        missile_gap_y: -60, // 캐릭터 미사일 발사 y좌표

        center_gap_x: 0, // attack 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // attack 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.
        beattack_margine: 50, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가? 나즈굴은 80 즉, 피격마진 이라 부른다.

        gagebar_x: 73, //게이지 bar 표기 x좌표
        gagebar_y: 20 //게이지 bar 표기 y좌표

    },
    {
        name: "60", // 캐릭 이름 - 문어 3
        dirname: "enemy_60", // 캐릭터의 파일 이름.
        feature: FEATURE.WIDE, // 특징
        w: 264,
        h: 263, // 이미지의 크기 (width, height)
        move_frame_num: 5, // 이동시 사용되는 frame의 수
        attack_frame_num: 17, // 공격시 사용되는 frame의 수
        beattack_frame_num: 6, // 공격당할때 사용되는 프레임수
        wait_frame_num: 8, // 대기시 사용되는 frame의 수

        fire_frame_num: 13, // 공격시 미사일에 사용되는 frame의 수
        attack_fire_frame: 12, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        move_speed: MOVE_SPEED.LO, // 이동속도
        attack_speed: ATTACK_SPEED.VL, // 공격속도
        attack_len: ATTACK_LEN.VH * 2.2, // 공격거리

        // attack_power:1500000*3, 				// 공격력(attack_power)
        // hp:5000000*3,							// 체력(hp)
        //20200406_yhlee 하드모드 난이도 조정
        attack_power: 2000000, // 공격력(attack_power)
        hp: 6250000, // 체력(hp)
        missile_gap_x: -1130, // 캐릭터 미사일 발사 x좌표
        missile_gap_y: -200, // 캐릭터 미사일 발사 y좌표

        center_gap_x: 0, // attack 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 10, // attack 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가? 나즈굴은 80 즉, 피격마진 이라 부른다.

        gagebar_x: 118, //게이지 bar 표기 x좌표
        gagebar_y: 14 //게이지 bar 표기 y좌표

    },
    //20200424_yhlee 201스테이지 추가로 인하여 적군들을 선언합니다
    //하드모드가 위의 능력치의 6배를 하였다 201스테이지는 하드모드 200을 지나온것이기때문에.
    //6배수치보다 높아야한다.
    //201~
    {
        name: "61", // 캐릭 이름 - 스컬독
        dirname: "enemy_61", // 캐릭터의 파일 이름.
        feature: FEATURE.WIDE, // 특징
        w: 153,
        h: 154, // 이미지의 크기 (width, height)
        move_frame_num: 8, // 이동시 사용되는 frame의 수
        attack_frame_num: 20, // 공격시 사용되는 frame의 수
        beattack_frame_num: 6, // 공격당할때 사용되는 프레임수
        wait_frame_num: 8, // 대기시 사용되는 frame의 수

        fire_frame_num: 7, // 공격시 미사일에 사용되는 frame의 수
        attack_fire_frame: 14, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        move_speed: MOVE_SPEED.MI, // 이동속도
        attack_speed: ATTACK_SPEED.VH, // 공격속도
        attack_len: ATTACK_LEN.VH * 2.5, // 공격거리

        attack_power: 6000000, // 공격력(attack_power)
        // attack_power:1, 				// 공격력(attack_power)
        hp: 25000000, // 체력(hp)
        missile_gap_x: -774, // 캐릭터 미사일 발사 x좌표
        missile_gap_y: -98, // 캐릭터 미사일 발사 y좌표

        center_gap_x: 0, // attack 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // attack 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가? 나즈굴은 80 즉, 피격마진 이라 부른다.

        gagebar_x: 42, //게이지 bar 표기 x좌표
        gagebar_y: 7, //게이지 bar 표기 y좌표

    },
    {
        name: "62", // 캐릭 이름 - 시크릿
        dirname: "enemy_62", // 캐릭터의 파일 이름.
        feature: FEATURE.WIDE, // 특징
        w: 124,
        h: 121, // 이미지의 크기 (width, height)
        move_frame_num: 8, // 이동시 사용되는 frame의 수
        attack_frame_num: 12, // 공격시 사용되는 frame의 수
        beattack_frame_num: 6, // 공격당할때 사용되는 프레임수
        wait_frame_num: 8, // 대기시 사용되는 frame의 수

        fire_frame_num: 4, // 공격시 미사일에 사용되는 frame의 수
        attack_fire_frame: 6, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        move_speed: MOVE_SPEED.MI, // 이동속도
        attack_speed: ATTACK_SPEED.VH, // 공격속도
        attack_len: ATTACK_LEN.LO, // 공격거리

        attack_power: 4000000, // 공격력(attack_power)
        hp: 30000000, // 체력(hp)
        missile_gap_x: -163, // 캐릭터 미사일 발사 x좌표
        missile_gap_y: -7, // 캐릭터 미사일 발사 y좌표

        center_gap_x: 0, // attack 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // attack 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가? 나즈굴은 80 즉, 피격마진 이라 부른다.

        gagebar_x: 39, //게이지 bar 표기 x좌표
        gagebar_y: 5, //게이지 bar 표기 y좌표

    },
    {
        name: "63", // 캐릭 이름 - 중형 스컬독
        dirname: "enemy_63", // 캐릭터의 파일 이름.
        feature: FEATURE.WIDE, // 특징
        w: 178,
        h: 182, // 이미지의 크기 (width, height)
        move_frame_num: 8, // 이동시 사용되는 frame의 수
        attack_frame_num: 19, // 공격시 사용되는 frame의 수
        beattack_frame_num: 6, // 공격당할때 사용되는 프레임수
        wait_frame_num: 8, // 대기시 사용되는 frame의 수

        fire_frame_num: 5, // 공격시 미사일에 사용되는 frame의 수
        attack_fire_frame: 14, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        move_speed: MOVE_SPEED.VH, // 이동속도
        attack_speed: ATTACK_SPEED.VH, // 공격속도
        attack_len: ATTACK_LEN.VH * 2.5, // 공격거리

        attack_power: 5100000, // 공격력(attack_power)
        // attack_power:1, 				// 공격력(attack_power)
        hp: 26000000, // 체력(hp)
        missile_gap_x: -834, // 캐릭터 미사일 발사 x좌표
        missile_gap_y: -31, // 캐릭터 미사일 발사 y좌표

        center_gap_x: 0, // attack 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // attack 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가? 나즈굴은 80 즉, 피격마진 이라 부른다.

        gagebar_x: 51, //게이지 bar 표기 x좌표
        gagebar_y: 14, //게이지 bar 표기 y좌표

    },
    {
        name: "64", // 캐릭 이름 - 원통 시크릿
        dirname: "enemy_64", // 캐릭터의 파일 이름.
        feature: FEATURE.WIDE, // 특징
        w: 163,
        h: 135, // 이미지의 크기 (width, height)
        move_frame_num: 8, // 이동시 사용되는 frame의 수
        attack_frame_num: 15, // 공격시 사용되는 frame의 수
        beattack_frame_num: 6, // 공격당할때 사용되는 프레임수
        wait_frame_num: 8, // 대기시 사용되는 frame의 수

        fire_frame_num: 8, // 공격시 미사일에 사용되는 frame의 수
        attack_fire_frame: 5, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        move_speed: MOVE_SPEED.MI, // 이동속도
        attack_speed: ATTACK_SPEED.VH, // 공격속도
        attack_len: ATTACK_LEN.HI, // 공격거리

        attack_power: 6000000, // 공격력(attack_power)
        hp: 35000000, // 체력(hp)
        missile_gap_x: -375, // 캐릭터 미사일 발사 x좌표
        missile_gap_y: -197, // 캐릭터 미사일 발사 y좌표

        center_gap_x: 0, // attack 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // attack 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가? 나즈굴은 80 즉, 피격마진 이라 부른다.

        gagebar_x: 59, //게이지 bar 표기 x좌표
        gagebar_y: 2, //게이지 bar 표기 y좌표

    },
    {
        name: "65", // 캐릭 이름 - 대형 스컬독
        dirname: "enemy_65", // 캐릭터의 파일 이름.
        feature: FEATURE.WIDE, // 특징
        w: 215,
        h: 185, // 이미지의 크기 (width, height)
        move_frame_num: 8, // 이동시 사용되는 frame의 수
        attack_frame_num: 19, // 공격시 사용되는 frame의 수
        beattack_frame_num: 6, // 공격당할때 사용되는 프레임수
        wait_frame_num: 8, // 대기시 사용되는 frame의 수

        fire_frame_num: 7, // 공격시 미사일에 사용되는 frame의 수
        attack_fire_frame: 13, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        move_speed: MOVE_SPEED.VH, // 이동속도
        attack_speed: ATTACK_SPEED.VH, // 공격속도
        attack_len: ATTACK_LEN.VH * 2.5, // 공격거리

        attack_power: 6500000, // 공격력(attack_power)
        // attack_power:1, 				// 공격력(attack_power)
        hp: 27000000, // 체력(hp)
        missile_gap_x: -795, // 캐릭터 미사일 발사 x좌표
        missile_gap_y: -66, // 캐릭터 미사일 발사 y좌표

        center_gap_x: 0, // attack 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // attack 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가? 나즈굴은 80 즉, 피격마진 이라 부른다.

        gagebar_x: 67, //게이지 bar 표기 x좌표
        gagebar_y: 10, //게이지 bar 표기 y좌표

    },
    {
        name: "66", // 캐릭 이름 - 상자 시크릿
        dirname: "enemy_66", // 캐릭터의 파일 이름.
        feature: FEATURE.WIDE, // 특징
        w: 195,
        h: 175, // 이미지의 크기 (width, height)
        move_frame_num: 8, // 이동시 사용되는 frame의 수
        attack_frame_num: 18, // 공격시 사용되는 frame의 수
        beattack_frame_num: 6, // 공격당할때 사용되는 프레임수
        wait_frame_num: 8, // 대기시 사용되는 frame의 수

        fire_frame_num: 9, // 공격시 미사일에 사용되는 frame의 수
        attack_fire_frame: 10, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        move_speed: MOVE_SPEED.MI, // 이동속도
        attack_speed: ATTACK_SPEED.VH, // 공격속도
        attack_len: ATTACK_LEN.VH * 2, // 공격거리

        attack_power: 6500000, // 공격력(attack_power)
        // attack_power:0, 				// 공격력(attack_power)
        hp: 29000000, // 체력(hp)
        missile_gap_x: 130, // 캐릭터 미사일 발사 x좌표
        missile_gap_y: -180, // 캐릭터 미사일 발사 y좌표

        center_gap_x: 0, // attack 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // attack 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가? 나즈굴은 80 즉, 피격마진 이라 부른다.

        gagebar_x: 72, //게이지 bar 표기 x좌표
        gagebar_y: 29, //게이지 bar 표기 y좌표

    },
    //보스 스테이지에 추가할 보스 패턴 4마리 보스는 같으나 패턴이 다르기에 4마리로 추가합니다
    {
        name: "67", // 캐릭 이름 - 201~ 220 보스 1번  공격 1패턴
        dirname: "enemy_67", // 캐릭터의 파일 이름.
        feature: FEATURE.WIDE, // 특징
        w: 740,
        h: 568, // 이미지의 크기 (width, height)
        move_frame_num: 6, // 이동시 사용되는 frame의 수
        attack_frame_num: 11, // 공격시 사용되는 frame의 수
        beattack_frame_num: 3, // 공격당할때 사용되는 프레임수
        wait_frame_num: 6, // 대기시 사용되는 frame의 수

        fire_frame_num: 4, // 공격시 미사일에 사용되는 frame의 수
        attack_fire_frame: 8, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        move_speed: MOVE_SPEED.VH, // 이동속도
        attack_speed: ATTACK_SPEED.VH, // 공격속도
        attack_len: ATTACK_LEN.VL, // 공격거리

        attack_power: 10000000, // 공격력(attack_power)
        // attack_power:1, 				// 공격력(attack_power)
        hp: 60000000, // 체력(hp)
        missile_gap_x: 0, // 캐릭터 미사일 발사 x좌표
        missile_gap_y: 0, // 캐릭터 미사일 발사 y좌표

        center_gap_x: 0, // attack 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // attack 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가? 나즈굴은 80 즉, 피격마진 이라 부른다.

        gagebar_x: 330, //게이지 bar 표기 x좌표
        gagebar_y: 144, //게이지 bar 표기 y좌표
    },
    {
        name: "68", // 캐릭 이름 - 201~ 220 보스 1번  공격 2패턴
        dirname: "enemy_68", // 캐릭터의 파일 이름.
        feature: FEATURE.WIDE, // 특징
        w: 740,
        h: 568, // 이미지의 크기 (width, height)
        move_frame_num: 6, // 이동시 사용되는 frame의 수
        attack_frame_num: 11, // 공격시 사용되는 frame의 수
        beattack_frame_num: 3, // 공격당할때 사용되는 프레임수
        wait_frame_num: 6, // 대기시 사용되는 frame의 수

        fire_frame_num: 10, // 공격시 미사일에 사용되는 frame의 수
        attack_fire_frame: 8, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        move_speed: MOVE_SPEED.VH, // 이동속도
        attack_speed: ATTACK_SPEED.VH, // 공격속도
        attack_len: ATTACK_LEN.VH * 2.5, // 공격거리

        attack_power: 10000000, // 공격력(attack_power)
        hp: 60000000, // 체력(hp)
        missile_gap_x: -142, // 캐릭터 미사일 발사 x좌표
        missile_gap_y: 80, // 캐릭터 미사일 발사 y좌표

        center_gap_x: 0, // attack 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // attack 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가? 나즈굴은 80 즉, 피격마진 이라 부른다.

        gagebar_x: 330, //게이지 bar 표기 x좌표
        gagebar_y: 144, //게이지 bar 표기 y좌표

    },
    {
        name: "69", // 캐릭 이름 - 201~ 220 보스 1번  공격 3패턴
        dirname: "enemy_69", // 캐릭터의 파일 이름.
        feature: FEATURE.WIDE, // 특징
        w: 740,
        h: 568, // 이미지의 크기 (width, height)
        move_frame_num: 6, // 이동시 사용되는 frame의 수
        attack_frame_num: 9, // 공격시 사용되는 frame의 수
        beattack_frame_num: 3, // 공격당할때 사용되는 프레임수
        wait_frame_num: 6, // 대기시 사용되는 frame의 수

        fire_frame_num: 9, // 공격시 미사일에 사용되는 frame의 수
        attack_fire_frame: 6, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        move_speed: MOVE_SPEED.VH, // 이동속도
        attack_speed: ATTACK_SPEED.VH, // 공격속도
        attack_len: ATTACK_LEN.VH * 2.5, // 공격거리

        attack_power: 10000000, // 공격력(attack_power)
        // attack_power:1, 				// 공격력(attack_power)
        hp: 60000000, // 체력(hp)
        missile_gap_x: -142, // 캐릭터 미사일 발사 x좌표
        missile_gap_y: 80, // 캐릭터 미사일 발사 y좌표

        center_gap_x: 0, // attack 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // attack 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가? 나즈굴은 80 즉, 피격마진 이라 부른다.

        gagebar_x: 330, //게이지 bar 표기 x좌표
        gagebar_y: 144, //게이지 bar 표기 y좌표

    },
    {
        name: "70", // 캐릭 이름 - 201~ 220 보스 1번  공격 4패턴
        dirname: "enemy_70", // 캐릭터의 파일 이름.
        feature: FEATURE.WIDE, // 특징
        w: 740,
        h: 568, // 이미지의 크기 (width, height)
        move_frame_num: 6, // 이동시 사용되는 frame의 수
        attack_frame_num: 9, // 공격시 사용되는 frame의 수
        beattack_frame_num: 3, // 공격당할때 사용되는 프레임수
        wait_frame_num: 6, // 대기시 사용되는 frame의 수

        fire_frame_num: 9, // 공격시 미사일에 사용되는 frame의 수
        attack_fire_frame: 4, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        move_speed: MOVE_SPEED.VH, // 이동속도
        attack_speed: ATTACK_SPEED.VH, // 공격속도
        attack_len: ATTACK_LEN.VH * 2.4, // 공격거리

        attack_power: 10000000, // 공격력(attack_power)
        // attack_power:1, 				// 공격력(attack_power)
        hp: 60000000, // 체력(hp)
        missile_gap_x: -838, // 캐릭터 미사일 발사 x좌표
        missile_gap_y: 29, // 캐릭터 미사일 발사 y좌표

        center_gap_x: 0, // attack 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // attack 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가? 나즈굴은 80 즉, 피격마진 이라 부른다.

        gagebar_x: 330, //게이지 bar 표기 x좌표
        gagebar_y: 144, //게이지 bar 표기 y좌표

    },
    //221~
    //20210222_yhlee 240스테이지 추가
    {
        name: "71", // 캐릭 이름 - 핑크젤리
        dirname: "enemy_71", // 캐릭터의 파일 이름.
        feature: FEATURE.WIDE, // 특징
        w: 425,
        h: 282, // 이미지의 크기 (width, height)
        move_frame_num: 9, // 이동시 사용되는 frame의 수
        attack_frame_num: 12, // 공격시 사용되는 frame의 수
        beattack_frame_num: 6, // 공격당할때 사용되는 프레임수
        wait_frame_num: 8, // 대기시 사용되는 frame의 수

        fire_frame_num: 5, // 공격시 미사일에 사용되는 frame의 수
        attack_fire_frame: 6, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        move_speed: MOVE_SPEED.HI, // 이동속도
        attack_speed: ATTACK_SPEED.VH, // 공격속도
        attack_len: ATTACK_LEN.VL, // 공격거리

        attack_power: 6000000, // 공격력(attack_power)
        // attack_power:1, 				// 공격력(attack_power)
        hp: 25000000, // 체력(hp)
        missile_gap_x: -155, // 캐릭터 미사일 발사 x좌표
        missile_gap_y: 69, // 캐릭터 미사일 발사 y좌표

        center_gap_x: 0, // attack 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // attack 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.
        beattack_margine: 232, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가? 나즈굴은 80 즉, 피격마진 이라 부른다.

        gagebar_x: 277, //게이지 bar 표기 x좌표
        gagebar_y: 84, //게이지 bar 표기 y좌표

    },
    {
        name: "72", // 캐릭 이름 - 프로그
        dirname: "enemy_72", // 캐릭터의 파일 이름.
        feature: FEATURE.WIDE, // 특징
        w: 210,
        h: 157, // 이미지의 크기 (width, height)
        move_frame_num: 8, // 이동시 사용되는 frame의 수
        attack_frame_num: 11, // 공격시 사용되는 frame의 수
        beattack_frame_num: 6, // 공격당할때 사용되는 프레임수
        wait_frame_num: 10, // 대기시 사용되는 frame의 수

        fire_frame_num: 5, // 공격시 미사일에 사용되는 frame의 수
        attack_fire_frame: 7, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        move_speed: MOVE_SPEED.MI, // 이동속도
        attack_speed: ATTACK_SPEED.VH, // 공격속도
        attack_len: ATTACK_LEN.VL, // 공격거리

        attack_power: 6500000, // 공격력(attack_power)
        // attack_power:1, 				// 공격력(attack_power)
        hp: 32000000, // 체력(hp)
        missile_gap_x: -155, // 캐릭터 미사일 발사 x좌표
        missile_gap_y: 69, // 캐릭터 미사일 발사 y좌표

        center_gap_x: 0, // attack 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // attack 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.
        beattack_margine: 100, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가? 나즈굴은 80 즉, 피격마진 이라 부른다.

        gagebar_x: 109, //게이지 bar 표기 x좌표
        gagebar_y: -4, //게이지 bar 표기 y좌표

    },
    {
        name: "73", // 캐릭 이름 - 옐로우 젤리
        dirname: "enemy_73", // 캐릭터의 파일 이름.
        feature: FEATURE.WIDE, // 특징
        w: 510,
        h: 283, // 이미지의 크기 (width, height)
        move_frame_num: 8, // 이동시 사용되는 frame의 수
        attack_frame_num: 11, // 공격시 사용되는 frame의 수
        beattack_frame_num: 6, // 공격당할때 사용되는 프레임수
        wait_frame_num: 8, // 대기시 사용되는 frame의 수

        fire_frame_num: 5, // 공격시 미사일에 사용되는 frame의 수
        attack_fire_frame: 7, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        move_speed: MOVE_SPEED.VH, // 이동속도
        attack_speed: ATTACK_SPEED.VH, // 공격속도
        attack_len: ATTACK_LEN.VL, // 공격거리

        attack_power: 8000000, // 공격력(attack_power)
        hp: 40000000, // 체력(hp)
        missile_gap_x: -155, // 캐릭터 미사일 발사 x좌표
        missile_gap_y: 69, // 캐릭터 미사일 발사 y좌표

        center_gap_x: 0, // attack 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 10, // attack 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.
        beattack_margine: 300, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가? 나즈굴은 80 즉, 피격마진 이라 부른다.

        gagebar_x: 325, //게이지 bar 표기 x좌표
        gagebar_y: 62, //게이지 bar 표기 y좌표

    },
    {
        name: "74", // 캐릭 이름 - 네온 프로그
        dirname: "enemy_74", // 캐릭터의 파일 이름.
        feature: FEATURE.WIDE, // 특징
        w: 250,
        h: 185, // 이미지의 크기 (width, height)
        move_frame_num: 10, // 이동시 사용되는 frame의 수
        attack_frame_num: 15, // 공격시 사용되는 frame의 수
        beattack_frame_num: 6, // 공격당할때 사용되는 프레임수
        wait_frame_num: 10, // 대기시 사용되는 frame의 수

        fire_frame_num: 5, // 공격시 미사일에 사용되는 frame의 수
        attack_fire_frame: 10, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        move_speed: MOVE_SPEED.VH + 50, // 이동속도
        attack_speed: ATTACK_SPEED.VH, // 공격속도
        attack_len: ATTACK_LEN.HI, // 공격거리

        attack_power: 8500000, // 공격력(attack_power)
        hp: 45000000, // 체력(hp)
        missile_gap_x: 3, // 캐릭터 미사일 발사 x좌표
        missile_gap_y: 69, // 캐릭터 미사일 발사 y좌표

        center_gap_x: 0, // attack 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // attack 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.
        beattack_margine: 123, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가? 나즈굴은 80 즉, 피격마진 이라 부른다.

        gagebar_x: 138, //게이지 bar 표기 x좌표
        gagebar_y: 1, //게이지 bar 표기 y좌표

    },
    {
        name: "75", // 캐릭 이름 - 블루젤리
        dirname: "enemy_75", // 캐릭터의 파일 이름.
        feature: FEATURE.WIDE, // 특징
        w: 283,
        h: 283, // 이미지의 크기 (width, height)
        move_frame_num: 9, // 이동시 사용되는 frame의 수
        attack_frame_num: 18, // 공격시 사용되는 frame의 수
        beattack_frame_num: 6, // 공격당할때 사용되는 프레임수
        wait_frame_num: 7, // 대기시 사용되는 frame의 수

        fire_frame_num: 7, // 공격시 미사일에 사용되는 frame의 수
        attack_fire_frame: 11, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        move_speed: MOVE_SPEED.VH, // 이동속도
        attack_speed: ATTACK_SPEED.VL, // 공격속도
        attack_len: ATTACK_LEN.VH * 2, // 공격거리

        attack_power: 9000000, // 공격력(attack_power)
        hp: 50000000, // 체력(hp)
        missile_gap_x: 218, // 캐릭터 미사일 발사 x좌표
        missile_gap_y: 0, // 캐릭터 미사일 발사 y좌표

        center_gap_x: 0, // attack 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // attack 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.
        beattack_margine: 100, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가? 나즈굴은 80 즉, 피격마진 이라 부른다.

        gagebar_x: 114, //게이지 bar 표기 x좌표
        gagebar_y: 28, //게이지 bar 표기 y좌표

    },
    {
        name: "76", // 캐릭 이름 - 미치광이 프로그
        dirname: "enemy_76", // 캐릭터의 파일 이름.
        feature: FEATURE.WIDE, // 특징
        w: 400,
        h: 274, // 이미지의 크기 (width, height)
        move_frame_num: 9, // 이동시 사용되는 frame의 수
        attack_frame_num: 18, // 공격시 사용되는 frame의 수
        beattack_frame_num: 6, // 공격당할때 사용되는 프레임수
        wait_frame_num: 8, // 대기시 사용되는 frame의 수

        fire_frame_num: 5, // 공격시 미사일에 사용되는 frame의 수
        attack_fire_frame: 15, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        move_speed: MOVE_SPEED.VH + 50, // 이동속도
        attack_speed: ATTACK_SPEED.VH, // 공격속도
        attack_len: ATTACK_LEN.VL, // 공격거리

        attack_power: 10000000, // 공격력(attack_power)
        hp: 65000000, // 체력(hp)
        missile_gap_x: -155, // 캐릭터 미사일 발사 x좌표
        missile_gap_y: 69, // 캐릭터 미사일 발사 y좌표

        center_gap_x: 0, // attack 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // attack 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.
        beattack_margine: 177, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가? 나즈굴은 80 즉, 피격마진 이라 부른다.

        gagebar_x: 176, //게이지 bar 표기 x좌표
        gagebar_y: 34, //게이지 bar 표기 y좌표

    },
    {
        name: "77", // 캐릭 이름 - 221~ 240 에 등장하는 가운데 서있는 석상
        dirname: "enemy_77", // 캐릭터의 파일 이름.
        feature: FEATURE.WIDE, // 특징
        w: 173,
        h: 493, // 이미지의 크기 (width, height)
        move_frame_num: 1, // 이동시 사용되는 frame의 수
        attack_frame_num: 1, // 공격시 사용되는 frame의 수
        beattack_frame_num: 1, // 공격당할때 사용되는 프레임수
        wait_frame_num: 1, // 대기시 사용되는 frame의 수

        fire_frame_num: 1, // 공격시 미사일에 사용되는 frame의 수
        attack_fire_frame: 1, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        move_speed: 0, // 이동속도
        attack_speed: ATTACK_SPEED.VL, // 공격속도
        attack_len: ATTACK_LEN.VL, // 공격거리

        attack_power: 0, // 공격력(attack_power)
        hp: 80000000, // 체력(hp) // 20211119_dblee 1/10로 조정함.
        missile_gap_x: 0, // 캐릭터 미사일 발사 x좌표
        missile_gap_y: 0, // 캐릭터 미사일 발사 y좌표

        center_gap_x: 0, // attack 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // attack 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가? 나즈굴은 80 즉, 피격마진 이라 부른다.

        gagebar_x: 12, //게이지 bar 표기 x좌표
        gagebar_y: -15, //게이지 bar 표기 y좌표

    },
    {
        name: "78", // 캐릭 이름 - 221~ 240 에 등장하는 가운데 서있는 석상
        dirname: "enemy_78", // 캐릭터의 파일 이름.
        feature: FEATURE.WIDE, // 특징
        w: 200,
        h: 503, // 이미지의 크기 (width, height)
        move_frame_num: 1, // 이동시 사용되는 frame의 수
        attack_frame_num: 1, // 공격시 사용되는 frame의 수
        beattack_frame_num: 1, // 공격당할때 사용되는 프레임수
        wait_frame_num: 1, // 대기시 사용되는 frame의 수

        fire_frame_num: 1, // 공격시 미사일에 사용되는 frame의 수
        attack_fire_frame: 1, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        move_speed: 0, // 이동속도
        attack_speed: ATTACK_SPEED.VL, // 공격속도
        attack_len: ATTACK_LEN.VL, // 공격거리

        attack_power: 0, // 공격력(attack_power)
        hp: 90000000, // 체력(hp) // 20211119_dblee 1/10로 조정함.
        missile_gap_x: 0, // 캐릭터 미사일 발사 x좌표
        missile_gap_y: 0, // 캐릭터 미사일 발사 y좌표

        center_gap_x: 0, // attack 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // attack 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가? 나즈굴은 80 즉, 피격마진 이라 부른다.

        gagebar_x: 25, //게이지 bar 표기 x좌표
        gagebar_y: -22, //게이지 bar 표기 y좌표

    },
    {
        name: "79", // 캐릭 이름 - 221~ 240 에 등장하는 가운데 서있는 석상
        dirname: "enemy_79", // 캐릭터의 파일 이름.
        feature: FEATURE.WIDE, // 특징
        w: 229,
        h: 496, // 이미지의 크기 (width, height)
        move_frame_num: 1, // 이동시 사용되는 frame의 수
        attack_frame_num: 1, // 공격시 사용되는 frame의 수
        beattack_frame_num: 1, // 공격당할때 사용되는 프레임수
        wait_frame_num: 1, // 대기시 사용되는 frame의 수

        fire_frame_num: 1, // 공격시 미사일에 사용되는 frame의 수
        attack_fire_frame: 1, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        move_speed: 0, // 이동속도
        attack_speed: ATTACK_SPEED.VL, // 공격속도
        attack_len: ATTACK_LEN.VL, // 공격거리

        attack_power: 0, // 공격력(attack_power)
        hp: 100000000, // 체력(hp) // 20211119_dblee 1/10로 조정함.
        missile_gap_x: 0, // 캐릭터 미사일 발사 x좌표
        missile_gap_y: 0, // 캐릭터 미사일 발사 y좌표

        center_gap_x: 0, // attack 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // attack 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가? 나즈굴은 80 즉, 피격마진 이라 부른다.

        gagebar_x: 40, //게이지 bar 표기 x좌표
        gagebar_y: -23, //게이지 bar 표기 y좌표

    },
    {
        name: "80", // 캐릭 이름 - 221~ 240 에 등장하는 가운데 서있는 석상
        dirname: "enemy_80", // 캐릭터의 파일 이름.
        feature: FEATURE.WIDE, // 특징
        w: 225,
        h: 491, // 이미지의 크기 (width, height)
        move_frame_num: 1, // 이동시 사용되는 frame의 수
        attack_frame_num: 1, // 공격시 사용되는 frame의 수
        beattack_frame_num: 1, // 공격당할때 사용되는 프레임수
        wait_frame_num: 1, // 대기시 사용되는 frame의 수

        fire_frame_num: 1, // 공격시 미사일에 사용되는 frame의 수
        attack_fire_frame: 1, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        move_speed: 0, // 이동속도
        attack_speed: ATTACK_SPEED.VL, // 공격속도
        attack_len: ATTACK_LEN.VL, // 공격거리

        attack_power: 0, // 공격력(attack_power)
        hp: 150000000, // 체력(hp) // 20211119_dblee 1/10로 조정함.
        missile_gap_x: 0, // 캐릭터 미사일 발사 x좌표
        missile_gap_y: 0, // 캐릭터 미사일 발사 y좌표

        center_gap_x: 0, // attack 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // attack 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가? 나즈굴은 80 즉, 피격마진 이라 부른다.

        gagebar_x: 38, //게이지 bar 표기 x좌표
        gagebar_y: -23, //게이지 bar 표기 y좌표

    },
    {
        name: "81", // 캐릭 이름 아이볼
        dirname: "enemy_81", // 캐릭터의 파일 이름.
        feature: FEATURE.WIDE, // 특징
        w: 182,
        h: 144, // 이미지의 크기 (width, height)
        move_frame_num: 8, // 이동시 사용되는 frame의 수
        attack_frame_num: 14, // 공격시 사용되는 frame의 수
        beattack_frame_num: 6, // 공격당할때 사용되는 프레임수
        wait_frame_num: 8, // 대기시 사용되는 frame의 수

        fire_frame_num: 10, // 공격시 미사일에 사용되는 frame의 수
        attack_fire_frame: 9, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        move_speed: 57, // 이동속도
        attack_speed: 10, // 공격속도
        attack_len: 380, // 공격거리  ATTACK_LEN.VL  - KT 밸런스 적용 450->380

        attack_power: 15000000, // 공격력(attack_power) - LG 밸런스 적용 *0.8
        hp: 50000000, // 체력(hp) - LG 밸런스 적용 *0.8
        missile_gap_x: -450, // 캐릭터 미사일 발사 x좌표
        missile_gap_y: -3, // 캐릭터 미사일 발사 y좌표

        center_gap_x: 0, // attack 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // attack 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가? 나즈굴은 80 즉, 피격마진 이라 부른다.

        gagebar_x: 60, //게이지 bar 표기 x좌표
        gagebar_y: -13, //게이지 bar 표기 y좌표

    },
    {
        name: "82", // 캐릭 이름  문
        dirname: "enemy_82", // 캐릭터의 파일 이름.
        feature: FEATURE.WIDE, // 특징
        w: 203,
        h: 221, // 이미지의 크기 (width, height)
        move_frame_num: 8, // 이동시 사용되는 frame의 수
        attack_frame_num: 14, // 공격시 사용되는 frame의 수
        beattack_frame_num: 6, // 공격당할때 사용되는 프레임수
        wait_frame_num: 8, // 대기시 사용되는 frame의 수
        // effect_frame_num: 10
        fire_frame_num: 8, // 공격시 미사일에 사용되는 frame의 수 8 -> 4
        attack_fire_frame: 9, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        move_speed: 57, // 이동속도
        attack_speed: 30, // 공격속도
        attack_len: 860, // 공격거리
        attack_power: 21000000, // 공격력(attack_power)  - LG 밸런스 적용 *0.8
        hp: 55000000, // 체력(hp) - LG 밸런스 적용 *0.8
        missile_gap_x: 78, // 캐릭터 미사일 발사 x좌표
        missile_gap_y: 42, // 캐릭터 미사일 발사 y좌표

        center_gap_x: 0, // attack 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // attack 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가? 나즈굴은 80 즉, 피격마진 이라 부른다.

        gagebar_x: 98, //게이지 bar 표기 x좌표
        gagebar_y: 10, //게이지 bar 표기 y좌표

    },
    {
        name: "83", // 캐릭 이름 레드 아이볼
        dirname: "enemy_83", // 캐릭터의 파일 이름.
        feature: FEATURE.WIDE, // 특징
        w: 208,
        h: 165, // 이미지의 크기 (width, height)
        move_frame_num: 8, // 이동시 사용되는 frame의 수
        attack_frame_num: 14, // 공격시 사용되는 frame의 수
        beattack_frame_num: 6, // 공격당할때 사용되는 프레임수
        wait_frame_num: 8, // 대기시 사용되는 frame의 수

        fire_frame_num: 10, // 공격시 미사일에 사용되는 frame의 수
        attack_fire_frame: 9, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        move_speed: 57, // 이동속도
        attack_speed: 10, // 공격속도
        attack_len: 530, // 공격거리 - KT 밸런스 적용 800->530

        attack_power: 22000000, // 공격력(attack_power) - LG 밸런스 적용 *0.8
        hp: 70000000, // 체력(hp) - LG 밸런스 적용 *0.8
        missile_gap_x: -640, // 캐릭터 미사일 발사 x좌표
        missile_gap_y: -63, // 캐릭터 미사일 발사 y좌표

        center_gap_x: 0, // attack 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // attack 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가? 나즈굴은 80 즉, 피격마진 이라 부른다.

        gagebar_x: 60, //게이지 bar 표기 x좌표
        gagebar_y: -13, //게이지 bar 표기 y좌표

    },
    {
        name: "84", // 캐릭 이름 그린 문
        dirname: "enemy_84", // 캐릭터의 파일 이름.
        feature: FEATURE.WIDE, // 특징
        w: 230,
        h: 232, // 이미지의 크기 (width, height)
        move_frame_num: 8, // 이동시 사용되는 frame의 수
        attack_frame_num: 14, // 공격시 사용되는 frame의 수
        beattack_frame_num: 6, // 공격당할때 사용되는 프레임수
        wait_frame_num: 8, // 대기시 사용되는 frame의 수

        fire_frame_num: 8, // 공격시 미사일에 사용되는 frame의 수
        attack_fire_frame: 9, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        move_speed: 57, // 이동속도
        attack_speed: 30, // 공격속도
        attack_len: 860, // 공격거리

        attack_power: 23000000, // 공격력(attack_power) - LG 밸런스 적용 *0.8
        hp: 75000000, // 체력(hp) - LG 밸런스 적용 *0.8
        missile_gap_x: 78, // 캐릭터 미사일 발사 x좌표
        missile_gap_y: 42, // 캐릭터 미사일 발사 y좌표

        center_gap_x: 0, // attack 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // attack 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가? 나즈굴은 80 즉, 피격마진 이라 부른다.

        gagebar_x: 98, //게이지 bar 표기 x좌표
        gagebar_y: 10, //게이지 bar 표기 y좌표

    },
    {
        name: "85", // 캐릭 이름 퍼플 아이볼
        dirname: "enemy_85", // 캐릭터의 파일 이름.
        feature: FEATURE.WIDE, // 특징
        w: 232,
        h: 194, // 이미지의 크기 (width, height)
        move_frame_num: 8, // 이동시 사용되는 frame의 수
        attack_frame_num: 14, // 공격시 사용되는 frame의 수
        beattack_frame_num: 6, // 공격당할때 사용되는 프레임수
        wait_frame_num: 8, // 대기시 사용되는 frame의 수

        fire_frame_num: 10, // 공격시 미사일에 사용되는 frame의 수
        attack_fire_frame: 9, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        move_speed: 57, // 이동속도
        attack_speed: 10, // 공격속도
        attack_len: 560, // 공격거리 - KT 밸런스 적용 650->560

        attack_power: 25000000, // 공격력(attack_power) - LG 밸런스 적용 *0.8
        hp: 80000000, // 체력(hp) - LG 밸런스 적용 *0.8
        missile_gap_x: -600, // 캐릭터 미사일 발사 x좌표
        missile_gap_y: -45, // 캐릭터 미사일 발사 y좌표

        center_gap_x: 0, // attack 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // attack 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가? 나즈굴은 80 즉, 피격마진 이라 부른다.

        gagebar_x: 60, //게이지 bar 표기 x좌표
        gagebar_y: -13, //게이지 bar 표기 y좌표

    },
    {
        name: "86", // 캐릭 이름 블루 문
        dirname: "enemy_86", // 캐릭터의 파일 이름.
        feature: FEATURE.WIDE, // 특징
        w: 255,
        h: 255, // 이미지의 크기 (width, height)
        move_frame_num: 8, // 이동시 사용되는 frame의 수
        attack_frame_num: 14, // 공격시 사용되는 frame의 수
        beattack_frame_num: 6, // 공격당할때 사용되는 프레임수
        wait_frame_num: 8, // 대기시 사용되는 frame의 수
        // effect_frame_num: 10
        fire_frame_num: 8, // 공격시 미사일에 사용되는 frame의 수
        attack_fire_frame: 9, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        move_speed: 57, // 이동속도
        attack_speed: 30, // 공격속도
        attack_len: 860, // 공격거리

        attack_power: 30000000, // 공격력(attack_power) - LG 밸런스 적용 *0.8
        hp: 95000000, // 체력(hp) - LG 밸런스 적용 *0.8
        missile_gap_x: 78, // 캐릭터 미사일 발사 x좌표
        missile_gap_y: 42, // 캐릭터 미사일 발사 y좌표

        center_gap_x: 0, // attack 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // attack 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.
        beattack_margine: 0, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가? 나즈굴은 80 즉, 피격마진 이라 부른다.

        gagebar_x: 98, //게이지 bar 표기 x좌표
        gagebar_y: 10, //게이지 bar 표기 y좌표

    },
    {
        name: "87", // 캐릭 이름 거인 - 갈
        dirname: "enemy_87", // 캐릭터의 파일 이름.
        feature: FEATURE.WIDE, // 특징
        w: 1050,
        h: 900, // 이미지의 크기 (width, height)
        move_frame_num: 24, // 이동시 사용되는 frame의 수
        attack_frame_num: 29, // 공격시 사용되는 frame의 수
        beattack_frame_num: 10, // 공격당할때 사용되는 프레임수
        wait_frame_num: 4, // 대기시 사용되는 frame의 수

        fire_frame_num: 15, // 공격시 미사일에 사용되는 frame의 수
        attack_fire_frame: 15, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        move_speed: 1, // 이동속도
        attack_speed: 5, // 공격속도
        attack_len: -300, // 공격거리

        attack_power: 100000000, // 공격력(attack_power) - LG 밸런스 적용 *0.8
        hp: 5000000000, // 체력(hp) - LG 밸런스 적용 *0.8
        missile_gap_x: 1, // 캐릭터 미사일 발사 x좌표
        missile_gap_y: 1, // 캐릭터 미사일 발사 y좌표

        center_gap_x: 0, // attack 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함. - 메인화면, 결과화면에서 캐릭터 위치 잡을때 사용
        center_gap_y: 0, // attack 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.
        beattack_margine: 400, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가? 나즈굴은 80 즉, 피격마진 이라 부른다. - 아이언칸의 방어 위치 값. (100)

        gagebar_x: 390, //게이지 bar 표기 x좌표
        gagebar_y: 420, //게이지 bar 표기 y좌표

    },
    {
        name: "88", // 캐릭 이름 거인-파
        dirname: "enemy_88", // 캐릭터의 파일 이름.
        feature: FEATURE.WIDE, // 특징
        w: 1050,
        h: 900, // 이미지의 크기 (width, height)
        move_frame_num: 24, // 이동시 사용되는 frame의 수
        attack_frame_num: 29, // 공격시 사용되는 frame의 수
        beattack_frame_num: 10, // 공격당할때 사용되는 프레임수
        wait_frame_num: 4, // 대기시 사용되는 frame의 수

        fire_frame_num: 15, // 공격시 미사일에 사용되는 frame의 수
        attack_fire_frame: 15, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        move_speed: 1, // 이동속도
        attack_speed: 5, // 공격속도
        attack_len: -300, // 공격거리

        attack_power: 100000000, // 공격력(attack_power) - LG 밸런스 적용 *0.8
        hp: 6000000000, // 체력(hp) - LG 밸런스 적용 *0.8
        missile_gap_x: 1, // 캐릭터 미사일 발사 x좌표
        missile_gap_y: 1, // 캐릭터 미사일 발사 y좌표

        center_gap_x: 0, // attack 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // attack 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.
        beattack_margine: 400, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가? 나즈굴은 80 즉, 피격마진 이라 부른다.

        gagebar_x: 390, //게이지 bar 표기 x좌표
        gagebar_y: 420, //게이지 bar 표기 y좌표

    },
    {
        name: "89", // 캐릭 이름 거인-보
        dirname: "enemy_89", // 캐릭터의 파일 이름.
        feature: FEATURE.WIDE, // 특징
        w: 1050,
        h: 900, // 이미지의 크기 (width, height)
        move_frame_num: 24, // 이동시 사용되는 frame의 수
        attack_frame_num: 29, // 공격시 사용되는 frame의 수
        beattack_frame_num: 10, // 공격당할때 사용되는 프레임수
        wait_frame_num: 4, // 대기시 사용되는 frame의 수

        fire_frame_num: 15, // 공격시 미사일에 사용되는 frame의 수
        attack_fire_frame: 15, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        move_speed: 1, // 이동속도
        attack_speed: 5, // 공격속도
        attack_len: -300, // 공격거리

        attack_power: 100000000, // 공격력(attack_power) - LG 밸런스 적용 *0.8
        hp: 6500000000, // 체력(hp) - LG 밸런스 적용 *0.8
        missile_gap_x: 1, // 캐릭터 미사일 발사 x좌표
        missile_gap_y: 1, // 캐릭터 미사일 발사 y좌표

        center_gap_x: 0, // attack 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // attack 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.
        beattack_margine: 400, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가? 나즈굴은 80 즉, 피격마진 이라 부른다.

        gagebar_x: 390, //게이지 bar 표기 x좌표
        gagebar_y: 420, //게이지 bar 표기 y좌표

    },
    {
        name: "90", // 캐릭 이름 거인-검
        dirname: "enemy_90", // 캐릭터의 파일 이름.
        feature: FEATURE.WIDE, // 특징
        w: 1050,
        h: 900, // 이미지의 크기 (width, height)
        move_frame_num: 24, // 이동시 사용되는 frame의 수
        attack_frame_num: 29, // 공격시 사용되는 frame의 수
        beattack_frame_num: 10, // 공격당할때 사용되는 프레임수
        wait_frame_num: 4, // 대기시 사용되는 frame의 수

        fire_frame_num: 15, // 공격시 미사일에 사용되는 frame의 수
        attack_fire_frame: 15, // 공격 모션중 몇 프레임 부터 발사를 시작 할 것인가?
        move_speed: 2, // 이동속도
        attack_speed: 5, // 공격속도
        attack_len: -300, // 공격거리

        attack_power: 100000000, // 공격력(attack_power) - LG 밸런스 적용 *0.8
        hp: 7000000000, // 체력(hp) - LG 밸런스 적용 *0.8
        missile_gap_x: 1, // 캐릭터 미사일 발사 x좌표
        missile_gap_y: 1, // 캐릭터 미사일 발사 y좌표

        center_gap_x: 0, // attack 01 이 중간을 기준으로 왼쪽으로 얼마나 치우쳤느냐, 결국 center_gap_x만큼 더해서 중심 맞추기 위함.
        center_gap_y: 0, // attack 01 이 중간을 기준으로 위쪽으로 얼마나 취우쳤느냐, 결국 center_gap_y만큼 더해서 중심 맞추기 위함.
        beattack_margine: 400, // 미사일 맞을때, 몇 픽셀 더 들어가서 맞아야 하는가? 나즈굴은 80 즉, 피격마진 이라 부른다.

        gagebar_x: 390, //게이지 bar 표기 x좌표
        gagebar_y: 420, //게이지 bar 표기 y좌표
    },
];

/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
// Payment정의 - 마켓의 숫자들을 서버에서 관리하자.
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////

//할로윈 이벤트 시작 (루비 , 마일리지 1+1 )20171030_yhlee
var MARKET_DESIGN = {
    ROW1: // 루비를 골드로 전환하는 비율 display용
        [{},
            {
                gold: 17000,
                ruby: 10
            }, //10 루비를 17000골드로 변환
            {
                gold: 54000,
                ruby: 30
            },
            {
                gold: 133000,
                ruby: 70
            },
            {
                gold: 200000,
                ruby: 100
            },
            {
                gold: 315000,
                ruby: 150
            },
        ],

    ROW2: // 루비를 돈으로 구매하는 비율 display용
        [{},
            //paymentwall일 경우
            {
                ruby: 10,
                won: '0.99$',
                pid: "facebook_goods_1"
            },
            {
                ruby: 40,
                won: '2.99$',
                pid: "facebook_goods_3"
            },
            {
                ruby: 70,
                won: '4.99$',
                pid: "facebook_goods_5"
            },
            {
                ruby: 100,
                won: '6.99$',
                pid: "facebook_goods_6"
            },
            {
                ruby: 900,
                won: '49.99$',
                pid: "goods_50"
            }
        ],
    PREPAID: 5000, // SS,LG - 5000원 -- 서버 기록용으로만 사용됨, 실제로는 5.0$임 _ paymentwall 사이트에 "ss_eldorado_pass"로 기록됨.

    //20210625_yhlee BP 이벤트를 자동화 하면서 BP이벤트 수량을 지정합니다
    BP_EVENT: [0, 1, 2, 5, 8, 30], // 뽑기시 BP 지급 이벤트
    EVENT_TAG: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // SS, LG event라는 표기를 할것인가 말것인가. 0번지는 무시 1번지 부터 시작
    tmp: ""
}
// SS,LG 코드임. 코드 통합으로 적용함. 다른 플랫폼에서는 사용하지 않음
// 20220422_dblee  SS에서는 auto_event_value() 함수에서 DEFINE_redefine_price() 재정의 됨. 따라서 이것을 사용하지 않음.
//20180108_ywlee 가격을 재 설정 한다.
//S_marketstore.init()에서 불려 진다.
function DEFINE_redefine_price() {
    // 20220422_dblee 삼성 플랫폼에서는 countryCode대신 countryCode_inDB 값을 사용하여 상품 정보를 읽어 오도록 한다. (202204221015)
    //20200409_yhlee VN의 DB를 나눔으로서 셋탑에서의 나라가 VN일떄 표시되도록 변경합니다.
    if (glo.fun.is_goods_for_VN()) {
        //20190704_yhlee 베트남 결제 금액 추가
        MARKET_DESIGN.ROW2[1].ruby = 20;
        MARKET_DESIGN.ROW2[2].ruby = 70;
        MARKET_DESIGN.ROW2[3].ruby = 150;
        MARKET_DESIGN.ROW2[4].ruby = 350;
        MARKET_DESIGN.ROW2[5].ruby = 800;

        MARKET_DESIGN.ROW2[1].won = '20.000đ';
        MARKET_DESIGN.ROW2[2].won = '50.000đ';
        MARKET_DESIGN.ROW2[3].won = '100.000đ';
        MARKET_DESIGN.ROW2[4].won = '200.000đ';
        MARKET_DESIGN.ROW2[5].won = '400.000đ';
    } else {
        MARKET_DESIGN.ROW2[1].ruby = 10;
        MARKET_DESIGN.ROW2[2].ruby = 40;
        MARKET_DESIGN.ROW2[3].ruby = 70;
        MARKET_DESIGN.ROW2[4].ruby = 100;
        MARKET_DESIGN.ROW2[5].ruby = 900;

        if (gTARGET_PLATFORM == gPLATFORM.LGWEBOS_TV) {
            MARKET_DESIGN.ROW2[1].won = '0.90$';
            MARKET_DESIGN.ROW2[2].won = '2.90$';
            MARKET_DESIGN.ROW2[3].won = '4.90$';
            MARKET_DESIGN.ROW2[4].won = '6.90$';
            MARKET_DESIGN.ROW2[5].won = '49.90$';
        } else if (gTARGET_PLATFORM == gPLATFORM.TIZEN_TV || glo.fun.is_glo_platform()) {
            MARKET_DESIGN.ROW2[1].won = '0.99$';
            MARKET_DESIGN.ROW2[2].won = '2.99$';
            MARKET_DESIGN.ROW2[3].won = '4.99$';
            MARKET_DESIGN.ROW2[4].won = '6.99$';
            MARKET_DESIGN.ROW2[5].won = '49.90$';
        }
    }
}

// 20230914_dblee SS,LG의 달러, 베트남 동 가격을 추가함.
//20171014_ywlee 마일리지 시스템
//해당금액에 맞는 보너스 포인트를 return한다.
//마일리지는 1000원당 5점이다.
MARKET_DESIGN.get_bonus_point = function(won) {
    var point = 0;
    switch (won) {
        case 0.99:
        case 0.9:
        case '0.99$':
        case '0.90$':
            //20190704_yhlee 베트남 결제 금액 추가
        case 20000:
        case '20.000đ':
        case '1,000원':
        case '1,100원':
            point = 5;
            break;
        case 1.99:
        case 1.9:
        case '1.99$':
        case '1.90$':
        case '2,000원':
            point = 10;
            break;
            //20190704_yhlee 베트남 결제 금액 추가
        case 50000:
        case '50.000đ':
        case '2,500원':
            point = 12;
            break;
        case 2.99:
        case 2.9:
        case '2.99$':
        case '2.90$':
        case '3,000원':
        case '3,300원':
            point = 15;
            break;
        case 3.99:
        case 3.9:
        case '3.99$':
        case '3.90$':
        case '4,000원':
            point = 20;
            break;
        case 4.99:
        case 4.9:
        case '4.99$':
        case '4.90$':
        case 100000:
        case '100.000đ':
        case '5,000원':
        case '5,500원':
            point = 25;
            break;
        case 5.99:
        case 5.9:
        case '5.99$':
        case '5.90$':
        case '6,000원':
            point = 30;
            break;
        case 6.9:
        case 6.99:
        case '6.99$':
        case '6.90$':
        case '7,000원':
            point = 35;
            break;
        case 7.99:
        case 7.9:
        case '7.99$':
        case '7.90$':
        case '8,000원':
            point = 40;
            break;
        case 8.9:
        case 8.99:
        case '8.99$':
        case '8.90$':
        case '9,000원':
            point = 45;
            break;
        case 9.9:
        case 9.99:
        case '9.99$':
        case '9.90$':
        case 200000:
        case '200.000đ':
        case '10,000원':
        case '11,000원':
            point = 50;
            break;
        case '15,000원':
        case '16,500원':
            point = 75;
            break;
            //20190704_yhlee 베트남 결제 금액 추가
        case 400000:
        case '400.000đ':
        case '20,000원':
            point = 100;
            break;
        case 49.9:
        case 49.90:
        case '49.9$':
        case '49.90$':
        case '50,000원':
            point = 250;
            break;
    }

    // return point;
    //--------------------------------------------------------------------
    //20210625_yhlee 이벤트가 진행 여부를 확인합니다.
    // if(AUTO_EVENT_FLAG[11] == 1){	return point*2; }
    //20210818_yhlee_1 루비 1+1 이벤트
    if (AUTO_EVENT_FLAG[11] == 1 || AUTO_EVENT_FLAG[3] == 1) {
        return point * 2;
    } else {
        return point;
    }
    //--------------------------------------------------------------------
}


/////////////////////////////////////////////////
//20200526_yhlee 패키지 상품을 정의합니다
// 20240328_dblee_1032 2024년4월부터 기간한정상품을 구매회수를 10회에서 20회로 변경함
var PACKAGE_DESIGN = {

    ROW1: // 패키지  display용
        [{},
            //     gold = 획득 골드 양	,	ruby = 획득 루비 양
            //     won = 실제 판매가	,	zzinwon = 골드,루비를 일반상점에서 살때 드는 비용
            //     cur_buy_num = 현재 구매 횟수(DB에 저장된 값)    ,	max_buy_num = 최대 구매할수 있는 횟수
            {
                gold: 400000,
                ruby: 0,
                won: '3$',
                won_vn: '60.000đ',
                zzinwon: '15$',
                zzinwon_vn: '300.000đ',
                cur_buy_num: -1,
                max_buy_num: 20,
            }, //골드 40만
            {
                gold: 800000,
                ruby: 0,
                won: '5$',
                won_vn: '100.000đ',
                zzinwon: '25$',
                zzinwon_vn: '500.000đ',
                cur_buy_num: -1,
                max_buy_num: 20,
            }, //골드 80만
            {
                gold: 0,
                ruby: 120,
                won: '3$',
                won_vn: '60.000đ',
                zzinwon: '9$',
                zzinwon_vn: '180.000đ',
                cur_buy_num: -1,
                max_buy_num: 20,
            }, //루비 120개
            {
                gold: 0,
                ruby: 240,
                won: '5$',
                won_vn: '100.000đ',
                zzinwon: '15$',
                zzinwon_vn: '300.000đ',
                cur_buy_num: -1,
                max_buy_num: 20,
            }, //루비 240개
        ]
}
var PACKAGE_OPEN = 1; // 패키지 상품을 오픈 할지 말지는 정합니다. 한번 오픈하면 필요가없습니다.   0 = 오픈하지 않음  , 1 = 오픈
/////////////////////////////////////////////////


// 20230914_dblee  PaymentWall 에서 사용하는 함수이다. 현재는 사용하지 않는다.
//20180108_ywlee USER.lang == LANG.VIETNAM 값으로 처리
// SS, LG, GLO용
function DEFINE_get_pid_use_lang(select) {
    var pid;
    if (gTARGET_PLATFORM == gPLATFORM.TIZEN_TV)
        var country = gLOCAL_SET; //이부장님이 만들어둔 전역변수 국가 불러오는 코드

    switch (USER.lang) {
        case LANG.VIETNAM: //베트남
            if (gTARGET_PLATFORM == gPLATFORM.LGWEBOS_TV) {
                switch (select) {
                    case 1:
                        pid = "vnd_lg_goods_1";
                        break; //베트남은 10만동(5천원)으로 통일
                    case 2:
                        pid = "vnd_lg_goods_1";
                        break;
                    case 3:
                        pid = "vnd_lg_goods_1";
                        break;
                    case 4:
                        pid = "vnd_lg_goods_2";
                        break;
                    case 5:
                        pid = "vnd_lg_goods_2";
                        break;
                }
            } else if (gTARGET_PLATFORM == gPLATFORM.TIZEN_TV) {
                switch (select) { //베트남의 경우 금액 통일
                    case 1:
                        pid = "vnd_tizen_goods_1";
                        break;
                    case 2:
                        pid = "vnd_tizen_goods_1";
                        break;
                    case 3:
                        pid = "vnd_tizen_goods_1";
                        break;
                        // 20170622_yhlee 상품 가격 변경
                        // 20170814_yhlee 페이먼트에서 지원 결제금액이 10만동,30만동,50만동이라 결제가 불가능하여 다시 주석처리합니다.
                        // 20171017_yhlee 페이먼트에서 20만동이 결제가능으로 변경되어 다시 추가합니다
                    case 4:
                        pid = "vnd_tizen_goods_2";
                        break;
                    case 5:
                        pid = "vnd_tizen_goods_2";
                        break;
                }
            } else if (glo.fun.is_glo_platform()) {
                switch (select) { //베트남의 경우 금액 통일
                    case 1:
                        pid = "vnd_facebook_goods_1";
                        break;
                    case 2:
                        pid = "vnd_facebook_goods_1";
                        break;
                    case 3:
                        pid = "vnd_facebook_goods_1";
                        break;

                    case 4:
                        pid = "vnd_facebook_goods_2";
                        break;
                    case 5:
                        pid = "vnd_facebook_goods_2";
                        break;
                }
            }
            //재구매 이벤트 상품 코드 리턴 하기 위해서 //20180107_ywlee
            try {
                if (select == 3 && S_EVENT.status == 2)
                    pid = "event_rebuy_vn";
            } catch (e) {}
            if (gTARGET_PLATFORM == gPLATFORM.TIZEN_TV) {
                var server_url = 'http://175.126.195.19/ELDORADO_SS/Counter/test_vie.php';
                $.post(server_url, {
                        'HOST_ID': gEntrix.host_id,
                        'ETC': country + "--" + MARKET_DESIGN.ROW2[select].won + "--" + pid
                    },
                    function(data) {
                        //alert("------------------->data1:"+data); //요거 실행하면 php에서 echo 한거 나옴 "result = ok" 나옴.
                    }
                );
            }
            break;
        default: //미국,영국 등등..
            if (gTARGET_PLATFORM == gPLATFORM.LGWEBOS_TV) {
                switch (select) {
                    case 1:
                        pid = "lg_goods_1";
                        break;
                    case 2:
                        pid = "lg_goods_3";
                        break;
                    case 3:
                        pid = "lg_goods_5";
                        break;
                    case 4:
                        pid = "lg_goods_6";
                        break;
                        //case 5: pid = "lg_goods_7";break;
                    case 5:
                        pid = "goods_50";
                        break; //50$짜리 이벤트 한번 해보자 20180107_ywlee
                }
            } else if (gTARGET_PLATFORM == gPLATFORM.TIZEN_TV) {
                // 20170622_yhlee 상품 가격 변경
                switch (select) {
                    case 1:
                        pid = "tizen_goods_1";
                        break;
                    case 2:
                        pid = "tizen_goods_3";
                        break;
                    case 3:
                        pid = "tizen_goods_5";
                        break;
                    case 4:
                        pid = "tizen_goods_6";
                        break;
                        //case 5: pid = "tizen_goods_7";break;
                    case 5:
                        pid = "goods_50";
                        break; //50$짜리 이벤트 한번 해보자 20180107_ywlee
                }
            } else if (glo.fun.is_glo_platform()) {
                switch (select) { //베트남의 경우 금액 통일
                    case 1:
                        pid = "facebook_goods_1";
                        break;
                    case 2:
                        pid = "facebook_goods_3";
                        break;
                    case 3:
                        pid = "facebook_goods_5";
                        break;
                    case 4:
                        pid = "facebook_goods_6";
                        break;
                        //case 5: pid = "tizen_goods_7";break;
                    case 5:
                        pid = "goods_50";
                        break; //50$짜리 이벤트 한번 해보자 20180107_ywlee
                }
            }
            //재구매 이벤트 상품 코드 리턴 하기 위해서 //20180107_ywlee
            try {
                if (select == 3 && S_EVENT.status == 2)
                    pid = "event_rebuy_en";
            } catch (e) {}
            if (gTARGET_PLATFORM == gPLATFORM.TIZEN_TV) {
                var server_url = 'http://175.126.195.19/ELDORADO_SS/Counter/test_vie.php';
                $.post(server_url, {
                        'HOST_ID': gEntrix.host_id,
                        'ETC': country + "--" + MARKET_DESIGN.ROW2[select].won + "--" + pid
                    },
                    function(data) {
                        //alert("------------------->data1:"+data); //요거 실행하면 php에서 echo 한거 나옴 "result = ok" 나옴.
                    }
                );
            }
            break;
    }

    return pid;
}


//2016.08.01 이벤트를 위해 추가 -- 아이스크림 이벤트 - KT에서 사용하고 있고 SS,LG에는 없음. 관련 코드 - S_eventpage.js
var gEVENT = {
    //1차 체크 -- ACTVIE로 체크함.
    ACTIVE: false, // (true,false) 이벤트를 보여 줄 것인가 말것인가의 결정, 아래 기간도 있지만 안전 장치를 위해 ACTIVE 전역변수 영입

    //2차 체크 -- 날짜로 체크함.
    start_day: new Date(2016, 7, 1, 0, 0, 0), //이벤트 시작 시간 -- 2016년 8월 6일 0시 0분 0초		//자바스크립트 월 함수는 0부터 시작하기 때문에 1을 빼야 한다.
    end_day: new Date(2016, 7, 31, 23, 59, 59) //이벤트 종료 시각 -- 2016년 8월 31일 23시 59분 59초	//자바스크립트 월 함수는 0부터 시작하기 때문에 1을 빼야 한다.

};

// 20240125_dblee 아래 이벤트는 사용하지 않음
//오광전 맞고에 들어간 이벤트
var EVENT = [{},
    { //1번 이벤트
        active: 0, //이벤트 실행 여부 (0-->중지, 1-->진행)
        name: "공격력,방어력,메테오 무료 체험", //이벤트 이름
        start: "2017-02-10 13:00:00", //이벤트 시작 시간 (2016-01-01 13:20:00) 형식으로 표기
        end: "2017-02-14 14:00:00" //이벤트 종료 시간
    },
    { //2번 이벤트
        active: 0, //이벤트 실행 여부 (0-->중지, 1-->진행)
        name: "연속뽑기 30% 할인 이벤트", //이벤트 이름
        start: "2017-02-10 13:00:00", //이벤트 시작 시간 (2016-01-01 13:20:00) 형식으로 표기
        end: "2017-04-15 14:00:00", //이벤트 종료 시간
        value: 30 //20% 할인 30%이면 30이라 적으면 된다.
    },
    { //3번 이벤트
        active: 0, //이벤트 실행 여부 (0-->중지, 1-->진행)
        name: "메달 이벤트 - 꽝없다. 금메달 확률 상승", //이벤트 이름
        start: "2017-02-10 13:00:00", //이벤트 시작 시간 (2016-01-01 13:20:00) 형식으로 표기
        end: "2017-02-15 14:00:00" //이벤트 종료 시간
    },
    /*
    	{  //4번 이벤트 - full pay event ==>엘도라도에서는 자리 문제 등으로 진행 안함.
    		active	: 0,										//이벤트 실행 여부 (0-->중지, 1-->진행)
    		name	: "20만원 만땅 결제 이벤트",				//이벤트 이름
    		start   : "2017-01-01 00:00:00",					//이벤트 시작 시간 (2016-01-01 13:20:00) 형식으로 표기
    		end		: "2017-02-31 23:59:59",					//이벤트 종료 시간  ==> 크게 잡아둬야 함.
    		min     : 0,										//이벤트 최소 조건 - 10만원 이상 결제시, 0 --> 0원 이상 결제시...즉,모든 사용자에게 보여 주기
    	},
    */
    { //4번 이벤트
        active: 1, //이벤트 실행 여부 (0-->중지, 1-->진행)
        name: "PVP 점수 value(2)배, 획득골드 value(2)배", //이벤트 이름
        start: "2017-01-01 00:00:00", //이벤트 시작 시간 (2016-01-01 13:20:00) 형식으로 표기
        end: "2017-02-31 23:59:59", //이벤트 종료 시간  ==> 크게 잡아둬야 함.
        value: 1.5 //pvp점수 2배일경우 2, 1.5배 일경우 1.5
    }
];
// 20240125_dblee 아래 이벤트는 사용하지 않음
//해당하는 event_num이 active되었는가? 그렇다면 return true; 그렇지 않다면 return false;
EVENT.is_active = function(event_num) {
    //우선 active가 0이면 return flase
    if (EVENT[event_num].active == 0) {
        utilConsoleLog("이벤트가 activation되지 않았습니다.");
        return false;
    }


    //기간이 맞는가 체크 한다.
    var start = new Date(EVENT[event_num].start).getTime(); //시작시간(타임스탬프)
    var end = new Date(EVENT[event_num].end).getTime(); //종료시간(타임스탬프)
    var cur = new Date().getTime(); //현재시각

    if (start <= cur && cur <= end) {
        utilConsoleLog("이벤트 기간 입니다.");
        return true;
    } else {
        utilConsoleLog("이벤트 기간이 아닙니다. " + event_num + "번 이벤트의 active를 0에서 1로 변경 바랍니다.");
        return false;
    }

}


var DEFINE = {
    KEYLOCKTIME: 300, // GLO는 300, 나머지는 700 사용함.   // NAVER5분 게임에서 화면 전환시 KEY를 LOCK하는 시간 400ms,  DEFINE.KEYLOCKTIME
    RANKING_PERCENT: 50, //연결점수는 이전 wave clear점수의 80% //랭킹관련,PvP게임 관련 //20170912_ywlee 80 -> 50 변경 SS, LG // 20230503_dblee 80 -> 50 조정. 모바일과 동일. DLive, LGH, HCN

    MONTH_MAX_PAYMENT: 200000, //월구매한도 정의 g.MONTH_MAX_PAYMENT에 값을 다시 setting함. -- Dlive 사업자 요구에 따라 현재(2017.1) 20만원임.
    // UPGRADE_MAX			: 140,		//업그레이드에서 max //120 ->140
    // USER_LEVEL_MAX		: 140,		//사용자 레벨 MAX //120 --> 140
    // USER_STORAGE_MAX	: 100,		//캐릭터 저장소 ( 기존 30에서 1씩 증가해서 최고 60까지 증가 가능 )
    //20210331_yhlee 업그레이드 및 유저 레벨 160으로 상승 및 캐릭터 저장소 120으로 증가
    UPGRADE_MAX: 160, //업그레이드에서 max //140 ->160
    USER_LEVEL_MAX: 160, //사용자 레벨 MAX //140 --> 160
    USER_STORAGE_MAX: 160, //캐릭터 저장소 ( 기존 30에서 1씩 증가해서 최고 60까지 증가 가능 ) // 20240208_dblee 아군저장소 120 -> 160 변경

    //20191001_yhlee 아이템 메뉴 추가로 인하여 추가합니다.
    USER_ITEM_MAX: 60, //아이템 저장소 (기본 60) 항상  MAX = 216
    USER_ITEM_PAGE_MAX: 5, //아이템 저장소의 페이지 수 즉 12칸이 1페이지 이다. ITEM_STORAGE_MAX 수치에 따라 자동으로 변경됨 // MAX = 18

    //20200918_yhlee 아이템 저장소 추가를 위해 MAX 수치를 정합니다
    //굳이 페이지 단위가 아니여도 된다 칸수로 MAX값을 지정하면 된다.
    ITEM_STORAGE_MAX: 100, //증가할수있는 최대 칸수    ( 최대 MAX = 총합 218칸 , 18페이지 )

    //20210331_yhlee 미사일 레벨을 120으로 변경으로 추가합니다.
    MISSILE_RECHARGE_MAX: 120,

    BUY_EVENT_PROBABILITY_MAINMENU_BACK: 10, //메인메뉴에서 back했을 경우 첫구매 재구매 이벤트 나타탈 확률 --- 30%일 경우 30
    BUY_EVENT_PROBABILITY_MARKETSTORE_IN: 10, //마켓스토어 진입했을때 첫구매,재구매 이벤트 나타날 확률 -------- 30%일 경우 30

    //20190308_yhlee 월드 보스전 데미지 표시
    DAMAGE_MAX_NUM: 20, //피격당할때 -20 표기하는 damge 숫자, 20개 정도면 충분할 듯

    //20210603_yhlee 소캐릭터가 대포를 터트릴 확률입니다.
    RASER_DESTROY_PERCENT: {
        COW76: 5, //2성 소 캐릭터가 대포와 충돌하는 경우 대포가 파괴 될 확률   0.5%
        COW77: 10, //3성 소 캐릭터가 대포와 충돌하는 경우 대포가 파괴 될 확률   1%
        COW78: 30, //4성 소 캐릭터가 대포와 충돌하는 경우 대포가 파괴 될 확률   3%
        COW79: 100, //5성 소 캐릭터가 대포와 충돌하는 경우 대포가 파괴 될 확률   10%
        COW80: 400, //6성 소 캐릭터가 대포와 충돌하는 경우 대포가 파괴 될 확률   40%
        COW81: 1000, //7성 소 캐릭터가 대포와 충돌하는 경우 대포가 파괴 될 확률   100%
        COW94: 1000 // 20230619_dblee 캐릭터 8성 추가 (202306191437) - 8성 소 캐릭터
    },
    //20210603_yhlee 소캐릭터 추가로 소캐릭터가 미사일을 떨어트리고 날아가는 속도 최소 120을 해야 화면을 넘어서 지나갑니다.
    COW_MOVE_SPEED: 120,

    //20180315_ywlee 루시7성에 대한 define들
    //대천사루시
    RUSY: {
        C49_PROP: //대천사루시 발동확률 -- S_game_raser.js파일에서 사용함.
        {
            LEVEL80: 60, //level 0 ~ 80이하일때 발동확률 60%
            LEVEL85: 70, //level 80 ~ 85이하일때 발동확률 70%
            LEVEL90: 80, //level 85 ~ 90이하일때 발동확률 80%
            LEVEL95: 90, //level 90 ~ 96이하일때 발동확률 90%
            LEVEL100: 100 //level 96 ~ 100이하일때 발동확률 100%
        },
        //20190704_yhlee 칸 7성 추가로 칸(원샷원킬 방어)도 이확률을 그대로 사용합니다.
        //20190704_yhlee 에코 7성 추가로 에코 능력(아군순간이동)도 이확률을 그대로 사용합니다.
        C50_PROP: //쎈언니루시 발동확률 -- S_game.js파일에서 사용 함.
        {
            LEVEL80: 60, //level 0 ~ 80이하일때 발동확률 60%
            LEVEL85: 70, //level 80 ~ 85이하일때 발동확률 70%
            LEVEL90: 80, //level 85 ~ 90이하일때 발동확률 80%
            LEVEL95: 90, //level 90 ~ 96이하일때 발동확률 90%
            LEVEL100: 100 //level 96 ~ 100이하일때 발동확률 100%
        }
    },
    IS_ERROR_LOG: 0 // 20240325_dblee HCN에서 사용함.

};
//랭킹게임에서 이어서 하기에 필요한 루비 수
DEFINE.get_needruby_for_ranking_connect = function() {
    if (USER.clear_wave <= 20)
        return 1; //실제 사용자 보상은 2
    else if (USER.clear_wave <= 30)
        return 2; //실제 사용자 보상은 3
    else
        return 3; //실제 사용자 보상은 5
}


//게임시작전 게임에 영향을 미치는 공격력,체략,메테오공격에 대한 정의
DEFINE.board = function() {
    //캐릭공격력
    S_GAME.board.menu[1].upgrade = 50; //30%향상
    S_GAME.board.menu[1].need_ruby = 1; //필요루비 1개

    //캐릭체력
    S_GAME.board.menu[2].upgrade = 50; //30%향상
    S_GAME.board.menu[2].need_ruby = 1; //필요루비 1개

    //메테오공격
    S_GAME.board.menu[3].upgrade = 1; //추가 1회
    S_GAME.board.menu[3].need_ruby = 1; //필요루비 1개

    //무료체험 이벤트 진행 중이면
    if (EVENT.is_active(1)) {
        S_GAME.board.menu[1].need_ruby = 0;
        S_GAME.board.menu[2].need_ruby = 0;
        S_GAME.board.menu[3].need_ruby = 0;
    }
}

// 20240522_dblee_1420 define에 정의된 변수를 Global로 이동 시킴.
//뽑기확률 20181226_yhlee
// 20230306_dblee_엘도라도 뽑기 개선안 적용
// var GACHA_PROBABILITY =
// {
// 	//가차1 --	3성,		2성,		1성 뽑힐 확률  //NORMAL (1성 ~ 3성) ,1회
// 	// gacha1 : [0,	20,		30,		50], //총합이 100이 되어야 함.
// 	gacha1 : [0,	4,	12, 36, 24, 24], //총합이 100이 되어야 함.

// 	//가차2 --		5성,	4성,	3성,	2성,	1성이 뽑힐 확률 // NORMAL PLUS (1성 ~ 5성) ,1회
// 	// gacha2 : [0,	5,		10,		20,		30,		35], //총합이 100이 되어야 함.
// 	gacha2 : [0,	12, 22, 36, 16, 14], //총합이 100이 되어야 함.

// 	//가차3 --		5성,	4성,	3성 //// PREMIUM (3성 ~ 5성) ,1회
// 	//gacha3 : [0,	10,		35,		55],
// 	// gacha3 : [0,	8,		37,		55],
// 	gacha3 : [0,	4, 20, 48, 28],

// 	//가차4 --		5성,	4성		3성 //PREMIUM PLUS(3성 ~ 5성) ,5+1 =6회

// 	// gacha4 : [0,	15,		45,		40]
// 	gacha4 : [0,	4, 20, 48, 28]
// 	// 20211119_dblee 뽑기 확률 조정 [0,   10,     45,     45] > [0,   15,     45,     40]
// 	// gacha4 : [0,	20,		40,		40]
// 	//2017년6월17일 5성 뽑기확률 2배 이벤트
// 	//20170621_yhlee 뽑기 확률 이벤트 종료

// }

//20191001_yhlee 아이템 추가
//뽑기확률
var ITEM_GACHA_PROBABILITY = {
    //가차1 --		F,		E 뽑힐 확률  //NORMAL (F ~ E) ,1회
    // gacha1 : [0,	80,		20], //총합이 100이 되어야 함.

    // //가차2 --		F,	    E,		D// NORMAL PLUS (F ~ D) ,1회
    // gacha2 : [0,	70,		27,		3], //총합이 100이 되어야 함.

    // //가차3 --		E,		D,		C // PREMIUM (E ~ C) ,1회
    // gacha3 : [0,	94,		5,		1],

    // //가차4 --		E,		D		C //PREMIUM PLUS(E ~ C) ,5+1 =6회
    // gacha4 : [0,	94,		5,		1]

    //20200325_yhlee 아이템 리메이크로 인한 확률 변경
    //가차1 --		F,		E 뽑힐 확률  //NORMAL (F 등급 ) ,1회
    gacha1: [0, 100, 0], //총합이 100이 되어야 함.

    //가차2 --		E,		D,		C // PREMIUM (E ~ C) [칼/날개] ,1회
    gacha2: [0, 70, 25, 5], //총합이 100이 되어야 함.

    //가차3 --		E,		D,		C // PREMIUM (E ~ C) [방패/시계] ,1회
    gacha3: [0, 70, 25, 5],

    //가차4 --		E,		D,		C //PREMIUM PLUS(E ~ C) [칼/날개] ,5+1 =6회
    gacha4: [0, 70, 25, 5],

    //가차5 --		E,		D,		C //PREMIUM PLUS(E ~ C) [방패/시계] ,5+1 =6회
    gacha5: [0, 70, 25, 5]
}


//20201110_yhlee 요일던전추가로 보상에 대한 확률을 추가합니다.
var DAYDUNGEON_REWARD_PROBABILITY = {
    //쉬움 --		F,		E	  // 쉬움  F등급
    level1: [0, 100, 0], //총합이 100이 되어야 함.

    //보통 --		E,		D  // 보통  F등급
    level2: [0, 99, 1], //총합이 100이 되어야 함.

    //어려움 --		D,		C  // 어려움  F등급
    level3: [0, 99, 1, ] //총합이 100이 되어야 함.

}

//빈도 조정을 위해 이쪽으로 뺌.
var REALTIME_NOTICE_LIMIT_RANKING = 10; //실시간 공지를 하늘정원 10위 갱신까지 보여 준다. // 20240215_dblee 사용하지 않음
var REALTIME_NOTICE_LIMIT_RANKING_PVP = 5; //실시간 공지에서 PVP랭킹 5등 까지의 갱신만 보여 준다. // 20240215_dblee 사용하지 않음

/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
// global변수의 선언
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
var g = {
    blink: {
        //변수
        value: 0, // focus의 깜빡임을 나타낼 변수  0 --> opacity:0, 1--> opacity :1
        scene: null, // blink를 호출한 scenario, 이변수를 기반으로 blink를 종료 한다.
        timer: null,

        //상수
        SHOW_TIMER: 700, //blink관련 보여지는 시간
        HIDE_TIMER: 300 //blink관련 안보이게 하는 시간
    },
    REWARD_TIME_MS: 11 * 60 * 60 * 1000, //보상시간정의 12시간임. --> 11시간으로 변경함. 2018년7월 즈음.

    // 20190109_yhlee  벤시 추가 57~62
    // 20190215_yhlee  에이스 7성 추가 63
    // 20190624_yhlee  루비,비비 7성 추가 64,65
    // 20190704_yhlee  에코,스마티,칸 7성 추가
    // 20200113_yhlee 제이 캐릭터 추가
    // 20210603_yhlee 소 캐릭터 추가
    // 20230619_dblee 캐릭터 8성 추가 (202306191437)
    STAR: [ //별들에 대한 캐릭터 번호 정의 -- 진화에 대한 표식 이며, 스테이지 클리어시 보상기준이 된다.
        [], //empty
        [0, 1, 2, 3, 4, 25, 31, 37, 0, 0, 0, 69, 0], //1성
        [0, 5, 10, 15, 20, 26, 32, 38, 43, 51, 57, 70, 76], //2성
        [0, 6, 11, 16, 21, 27, 33, 39, 44, 52, 58, 71, 77], //3성
        [0, 7, 12, 17, 22, 28, 34, 40, 45, 53, 59, 72, 78], //4성
        [0, 8, 13, 18, 23, 29, 35, 41, 46, 54, 60, 73, 79], //5성
        [0, 9, 14, 19, 24, 30, 36, 42, 47, 55, 61, 74, 80], //6성
        [0, 63, 66, 67, 68, 49, 64, 65, 48, 56, 62, 75, 81, 50], //7성
        [0, 82, 83, 84, 85, 87, 88, 89, 90, 91, 92, 93, 94, 86], //8성
    ],
    // 20230619_dblee 캐릭터 8성 추가 (202306191437)
    //20191122_chkim
    //각캐릭터 별로 1성~8성까지 캐릭터 번호가 들어가있다 .--시작은 도감에서 이름 추가부분떄문에 넣지만 나중에 쓸일것 같다.20170705_yhlee
    CHAR_NUM: [
        [], //empty
        [0, 1, 5, 6, 7, 8, 9, 63, 82], //에이스 1성~8성 캐릭터 번호 //20190215_yhlee  에이스 7성 추가 63
        [0, 2, 10, 11, 12, 13, 14, 66, 83], //에코 1성~8성 캐릭터 번호 //20190704_yhlee  에코,스마티,칸 7성 추가
        [0, 3, 15, 16, 17, 18, 19, 67, 84], //스마티 1성~8성 캐릭터 번호 //20190704_yhlee  에코,스마티,칸 7성 추가
        [0, 4, 20, 21, 22, 23, 24, 68, 85], //칸 1성~8성 캐릭터 번호 //20190704_yhlee  에코,스마티,칸 7성 추가
        [0, 25, 26, 27, 28, 29, 30, 49, 50, 87, 86], //루시 1성~8성 캐릭터 번호 //20180315_ywlee 루시7성 2개 추가 // 8성 2개 추가
        [0, 31, 32, 33, 34, 35, 36, 64, 88], //비비 1성~8성 캐릭터 번호//20190624_yhlee  루비,비비 7성 추가 64,65
        [0, 37, 38, 39, 40, 41, 42, 65, 89], //루비 1성~8성 캐릭터 번호//20190624_yhlee  루비,비비 7성 추가 64,65
        [0, 43, 44, 45, 46, 47, 48, 90], //황금맨 2성~8성 캐릭터 번호
        [0, 51, 52, 53, 54, 55, 56, 91], //진저맨 2성~8성 캐릭터 번호
        [0, 57, 58, 59, 60, 61, 62, 92], //벤시 2성~8성 캐릭터 번호  //20190109_yhlee  벤시 추가 57~62
        [0, 69, 70, 71, 72, 73, 74, 75, 93], //제이 1성~8성 캐릭터 번호  //20200113_yhlee 제이 캐릭터 추가
        [0, 76, 77, 78, 79, 80, 81, 94], //소 2성~8성 캐릭터 번호  //20210603_yhlee 소 캐릭터 추가
    ],

    //ywlee_20160526
    MONTH_MAX_PAYMENT: DEFINE.MONTH_MAX_PAYMENT, // DLive, LHG, HCN - 200000, //월결제 한도 20만원 --> 구매한도 수정시, MS_popup_txt1를 검색하여 함께 수정 해 줘야 함.

    METOR_POWER: 500, //metor 공격 당했을 경우 damage정도
    tutorial_mode: 0, //0 -> normal mode, tutorial mode
    flag_over1time: 0, //게임시작하고 1시간이 지나면 이 flag가 1이 된다.

    flag_pay_once: 0, // 1번이라도 결제 성공 하면 pay_once의 값이 1로 된다.

    flag_getscore: 0, // DLive, LHG, HCN - 하늘정원의 나의 점수를 받아왔나? 받아오면 1 받아오지 못하면 0이 된다.

    //사용자 보상관련 get_reward.php를 호출해서 값이 setting됨.
    REWARD: {
        status: 0, //0-->초기값,  1-->보상받을게 있다. 2---> 보상지불완료했다., 3---> 보상받을게 없다.
        why: "", //보상사유 (PvP대전 보상)
        what: "", //보상내용 (예: RUBY, GOLD, CHAR)
        what_value: 0 //보상숫자
    },

    //20210114_yhlee 우편함 모두 받기를 위해 추가합니다
    REWARD_ALL: {
        ruby: 0,
        gold: 0,
        bp: 0,
        char: "",
        item: "",
    },

    SERVER_URL: "", // LGH, HCN의 util_Global.js에서 사용함.

    URL_common: "http://218.38.52.246/ELDORADO_COMMON/", // DLive, LHG, HCN - 엘도라도 실시간 공지를 위한 것 bueldorado.cafe24.com

    CHAR_BOOK_FLAG: 1, //도감을 보여줄지 말지 정하는 flag             1  : 보여줌      0 : 보여주지 않음

    timestamp_flag: 0, //서버에 timestamp요청할때 0으로 하고 요청하고, 요청완료되면 1로 바뀜.
    timestamp_start: 0, //실제 서버에서 받아온 timestamp값을 기록한다. timestamp_flag가0일때는 의미없는 data임. --> 게임 시작시 최초 1회만 불려짐
    timestamp_due: 0, //게임시작부터 흐른시간 1초에 한번씩 증가 된다.

    stage_time_temp: 0, //서버에서 시간을 받아와서 저장할 변수   저장하고 상황에 맞게 시작시 시작변수에 값 저장 클리어시 클리어 변수에 값 저장.
    stage_time_start: 0, //스테이지 시작 시간
    stage_time_end: 0, //스테이지 클리어 시간

    //20190709_yhlee 우편함 추가를위해 선언합니다.
    //사용자 보상관련 get_reward2.php를 호출해서 값이 setting됨.
    REWARD: null,

    facebook: // SS, GLO
    {
        flag: 0, //0 ---> 아직 facebook연동안됨, 1---> facebook연동 됨.
        name: null, //facebook 이름
        timer: null,
        id: null //facebook id
    },
    name_change_ruby: 100, // 이름 변경시 소모되는 루비 수
    //20210407_yhlee 모바일 연동 추가로 모바일 접속을 알기 위해 추가
    daily_run_count: 0,
    MAX_TRAINING_NUM: 5, // SS, LG, KT 기본 출전 4명까지 가능함.
    // GLO
    LIMIT: {
        PV: 20000, //PV제한으로 트래픽을 조정한다.
        PVstring: "죄송합니다.<br>" +
            "일일 접속자 수를 초과 하였습니다. <br>" +
            "내일 다시 이용 바랍니다." +
            "<br><br>" +
            "Sorry!.<br>" +
            "Today user over.<br>" +
            "Please try again tomorrow."
    },
    tmp: 0
}
// 2016.05.11
// 사용자 레벨 업그레이드시 루비 보상
// LEVEL_five: 레벨 5단위시 보상 루비 개수
// LEVEL_other: 레벨 5단위 제한한 보상 루비 개수
// CJH, CNM은 기존의 4, 2 루비 개수를 줌.
var LEVELUP_RUBY_BONUS = {
    'LEVEL_five': 4,
    'LEVEL_other': 2
};

//자동 플레이 추가합니다. 20190104_yhlee
var AUTOPLAY = {

    paid: 0, //0 ---> 자동 플레이를 구매하지 않았다  1---> 자동 플레이를 구매했다
    on_off: 0, //0 ---> 자동 플레이 끔  1---> 자동 플레이 켬
    end_time: 0, //종료 시간   -> 타임 스탬프로 저장하여 계산하도록 하자.
    stop_flag: 0, //0 ---> 자동플레이를 진행중에 중지  1---> 자동 플레이 진행중
    event_flag: 0, //0 ---> 무료 이벤트 진행 중이지 않다  1---> 무료 이벤트 진행 중

    //자동 플레이 구매 가격
    // 구매 가격 1일에 10bp
    get_day: 1, //자동 플레이 구매시 일수. DLive, LGH, HCN, KT
    need_bp: 10, //자동 플레이 구매 BP 가격.  DLive, LGH, HCN, KT  


    acc_gold: 0, //자동 플레이 완료후 획득한 골드를 기록에 남깁니다
    acc_stage: 0, //자동 플레이 진행한 스테이지를 기록에 남깁니다
    acc_start_time: 0, //자동 플레이 시작 시간을 기록에 남깁니다
    acc_end_time: 0, //자동 플레이 종료 시간을 기록에 남깁니다
    acc_tot_time: 0 //자동 플레이 진행한 시간을 기록에 남깁니다
}


//20200706_yhlee 유료 스테이지 21 -> 41로 변경  SS, LG
var USERPAY_STAGE = 101; // 101, 41

//20170523_yhlee 개인별 / 국가별 보상을 저장합니다.
var PVP_REWARD = {
    //개인별 보상 루비 개수  (항상 6개 이여야 한다.)
    ALONE: [0, 300, 200, 150, 100, 50, 20], // 실제로 지급하는 루비 갯수는 php 에서 수정해야한다 .pvp_reward_run.php
    //국가별 보상 루비 개수 (항상 보상은 3개이다 )
    COUNTRY: {
        // TOP1 : [0,500,400,300,200,100,3],//1등 국가 개인보상
        // TOP2 : [0,400,300,200,100,50,2],//2등 국가 개인보상
        // TOP3 : [0,300,200,100,50,30,1]//3등 국가 개인보상
        TOP1: [0, 300, 200, 100, 50, 30, 3], //1등 국가 개인보상
        TOP2: [0, 200, 100, 50, 25, 15, 2], //2등 국가 개인보상
        TOP3: [0, 100, 50, 25, 15, 10, 1] //3등 국가 개인보상
    }
}



// 20240522_dblee_1420 define에 정의된 변수를 Global로 이동 시킴.

// // 20230306_dblee_엘도라도 뽑기 개선안 적용
// //20171014_ywlee 마일리지 시스템
// var NEED_BONUS_POINT = 450;  //6성 뽑기를 위한 필요 포인터(마일리지) 1000원(1$)당 5점, 20만원은 1000점.

// // 20230306_dblee_엘도라도 뽑기 개선안 적용
// //20180509_ywlee BP 5성뽑기 추가
// var NEED_BONUS_POINT5 = 75; //5성 뽑기를 위한 필요 포인터  (3만원 상당)

// //20190308_yhlee 보스가 죽었을때 지급 되는 루비 수량
// var BOSS_DIE_RUBY = 100;

// //20190308_yhlee 보스전에 입장가능한가를 확인하는 변수입니다.   1 입장가능    -1 입장 불가  0 초기값
// var BOSS_GOIN_FLAG = 0;

// //20190425_yhlee 행운 이벤트 추가
// var LUCK_EVENT_FLAG = 0;   // 행운 이벤트 이벤트 플러그     1 이벤트 진행    0 이벤트 진행하지 않음
// var LUCK_EVENT_NEED_RUBY = [0,10,30,80,200,400,750];
// var LUCK_EVENT_GET_RUBY = [0,
// 							[15,20],//첫번째 루비 투자 후 보상 15 ~ 20 개 획득
// 							[40,50],//두번째 루비 투자 후 보상 40 ~ 50 개 획득
// 							[100,150],//100 ~ 150 개 획득
// 							[250,300],//250 ~ 300 개 획득
// 							[450,550],//450 ~ 550 개 획득
// 							[800,1000]//마지막 루비 투자 후 보상 800 ~ 1000 개 획득
// 							];


/*********************************************************************************/
/////////////////////////////////////////////////////////////////////////////////
//실제 소스 코드에 적용 되어야 하나 급박한 수정사항의 경우 여기에 우선 적용 한다.
/////////////////////////////////////////////////////////////////////////////////
// 20240404_dblee_1606 define.js에서 window.addEventListener('load', function() { temporary_run();}, true); 주석처리하고 Main.onLoad()내에서 temporary_run() 호출함.
// temporary_run 함수 내에서 window.SERVER_URL를 사용할 때 주의 해야 한다.
// window.addEventListener('load', function() { temporary_run();}, true);
function temporary_run() {

    //이달의 캐릭터
    DEFINEJS_EVENT.this_month_char();

    //오류사항 수정 - 차후 버전발행에 포함 할것
    DEFINEJS_EVENT.bug_fix();
}

/*********************************************************************************
		  defjine.js파일에서 이벤트를 위해 짜집기되는 함수들의 모음
**********************************************************************************/
var DEFINEJS_EVENT = {};


//이달의 캐릭터 이벤트
DEFINEJS_EVENT.this_month_char = function() {

    DEFINEJS_EVENT.this_month_char_name = ""; // 20230711_dblee 이달의 캐릭터의 이름을 초기화 함

    DEFINEJS_EVENT.char_event_filename = null;

    var cur = parseInt(g.timestamp_start, 10) + parseInt(g.timestamp_due, 10);

    //현재시간을 받아오지 못했다면 이벤트 진행 하지 마라.
    if (cur == 0) {
        setTimeout(DEFINEJS_EVENT.this_month_char, 50);
        return;
    }

    //언어설정을 받아오지 못하였으면 이벤트를 진행하지 마라
    if (USER.lang == -1) {
        setTimeout(DEFINEJS_EVENT.this_month_char, 50);
        return;
    }


    // 에이스 공격력2배, 이동속도 2배======================================================================================= chkim
    var start = new Date("2025/02/01 00:00:00").getTime(); //시작시간(타임스탬프)
    var end = new Date("2025/02/28 23:59:59").getTime(); //종료시간(타임스탬프)
    if (start <= cur && cur <= end) {
        DEFINEJS_EVENT.char_event_filename = "ace";

        DEFINEJS_EVENT.this_month_char_name = "ace"; // 20230711_dblee 이달의 캐릭터의 공격력2배 적용함.

        //이동속도 2배
        CHAR_OUR_TEAM[1].move_speed = CHAR_OUR_TEAM[1].move_speed * 2;
        CHAR_OUR_TEAM[5].move_speed = CHAR_OUR_TEAM[5].move_speed * 2;
        CHAR_OUR_TEAM[6].move_speed = CHAR_OUR_TEAM[6].move_speed * 2;
        CHAR_OUR_TEAM[7].move_speed = CHAR_OUR_TEAM[7].move_speed * 2;
        CHAR_OUR_TEAM[8].move_speed = CHAR_OUR_TEAM[8].move_speed * 2;
        CHAR_OUR_TEAM[9].move_speed = CHAR_OUR_TEAM[9].move_speed * 2;
        CHAR_OUR_TEAM[63].move_speed = CHAR_OUR_TEAM[63].move_speed * 2;
        CHAR_OUR_TEAM[82].move_speed = CHAR_OUR_TEAM[82].move_speed * 2; // 20230619_dblee 캐릭터 8성 추가 (202306191437)

        // CHAR_OUR_TEAM 바뀌면 SOCKET에 할당된 것도 다시 돌려야 함
        // 20230711_dblee 아래 코드 누락되어 추가함.
        //SOCKET에 벌써 할당 되었다면 한번더 할당 해야 selected된놈들까지 속성이 빠뀐다.
        for (var i = 1; i <= MAX_SOCKET_NUMBER; i++) {
            if (STORAGE.data1.selected_user[i] > 0)
                SOCKET.storage_ch_to_socket(i, STORAGE.data1.selected_user[i]);
        }

    }

    // 진저맨 공격력2배=======================================================================================
    var start = new Date("2025/03/01 00:00:00").getTime(); //시작시간(타임스탬프)
    var end = new Date("2025/03/31 23:59:59").getTime(); //종료시간(타임스탬프)
    if (start <= cur && cur <= end) {
        DEFINEJS_EVENT.char_event_filename = "gingerman";

        DEFINEJS_EVENT.this_month_char_name = "gingerman"; // 20230711_dblee 이달의 캐릭터 이름을 넣으면 적용됨

    }


    // 밴시 공격력2배 사거리 2배 =============================================================================
    var start = new Date("2025/04/01 00:00:00").getTime(); //시작시간(타임스탬프)
    var end = new Date("2025/04/30 23:59:59").getTime(); //종료시간(타임스탬프)
    if (start <= cur && cur <= end) {
        DEFINEJS_EVENT.char_event_filename = "bensi";

        DEFINEJS_EVENT.this_month_char_name = "bensi"; // 20230711_dblee 이달의 캐릭터 이름을 넣으면 적용됨

        //사거리2배
        CHAR_OUR_TEAM[57].attack_len = CHAR_OUR_TEAM[57].attack_len * 2;
        CHAR_OUR_TEAM[58].attack_len = CHAR_OUR_TEAM[58].attack_len * 2;
        CHAR_OUR_TEAM[59].attack_len = CHAR_OUR_TEAM[59].attack_len * 2;
        CHAR_OUR_TEAM[60].attack_len = CHAR_OUR_TEAM[60].attack_len * 2;
        CHAR_OUR_TEAM[61].attack_len = CHAR_OUR_TEAM[61].attack_len * 2;
        CHAR_OUR_TEAM[62].attack_len = CHAR_OUR_TEAM[62].attack_len * 2;
        CHAR_OUR_TEAM[92].attack_len = CHAR_OUR_TEAM[92].attack_len * 2; // 20230619_dblee 캐릭터 8성 추가 (202306191437)

        // CHAR_OUR_TEAM 바뀌면 SOCKET에 할당된 것도 다시 돌려야 함
        //SOCKET에 벌써 할당 되었다면 한번더 할당 해야 selected된놈들까지 속성이 빠뀐다.
        for (var i = 1; i <= MAX_SOCKET_NUMBER; i++) {
            if (STORAGE.data1.selected_user[i] > 0)
                SOCKET.storage_ch_to_socket(i, STORAGE.data1.selected_user[i]);
        }

    }


    // 칸 체력,이동속도 각 2배=======================================================================================
    var start = new Date("2025/05/01 00:00:00").getTime(); //시작시간(타임스탬프)
    var end = new Date("2025/05/31 23:59:59").getTime(); //종료시간(타임스탬프)
    if (start <= cur && cur <= end) {
        DEFINEJS_EVENT.char_event_filename = "khan";

        DEFINEJS_EVENT.this_month_char_name = "khan"; // 20230711_dblee 이달의 캐릭터 이름을 넣으면 적용됨

        //이동스피드 2배
        CHAR_OUR_TEAM[4].move_speed *= 2;
        CHAR_OUR_TEAM[20].move_speed *= 2;
        CHAR_OUR_TEAM[21].move_speed *= 2;
        CHAR_OUR_TEAM[22].move_speed *= 2;
        CHAR_OUR_TEAM[23].move_speed *= 2;
        CHAR_OUR_TEAM[24].move_speed *= 2;
        CHAR_OUR_TEAM[68].move_speed *= 2;
        CHAR_OUR_TEAM[85].move_speed *= 2; // 20230619_dblee 캐릭터 8성 추가 (202306191437)

        // CHAR_OUR_TEAM 바뀌면 SOCKET에 할당된 것도 다시 돌려야 함
        //SOCKET에 벌써 할당 되었다면 한번더 할당 해야 selected된놈들까지 속성이 빠뀐다.
        for (var i = 1; i <= MAX_SOCKET_NUMBER; i++) {
            if (STORAGE.data1.selected_user[i] > 0)
                SOCKET.storage_ch_to_socket(i, STORAGE.data1.selected_user[i]);
        }

    }

    // 에코 공격력2배, 이동속도 2배======================================================================================= chkim
    var start = new Date("2024/08/01 00:00:00").getTime(); //시작시간(타임스탬프)
    var end = new Date("2024/08/31 23:59:59").getTime(); //종료시간(타임스탬프)
    if (start <= cur && cur <= end) {
        DEFINEJS_EVENT.char_event_filename = "echo";

        DEFINEJS_EVENT.this_month_char_name = "echo"; // 20230711_dblee 이달의 캐릭터 이름을 넣으면 적용됨

        //이동속도 2배
        CHAR_OUR_TEAM[2].move_speed = CHAR_OUR_TEAM[2].move_speed * 2;
        CHAR_OUR_TEAM[10].move_speed = CHAR_OUR_TEAM[10].move_speed * 2;
        CHAR_OUR_TEAM[11].move_speed = CHAR_OUR_TEAM[11].move_speed * 2;
        CHAR_OUR_TEAM[12].move_speed = CHAR_OUR_TEAM[12].move_speed * 2;
        CHAR_OUR_TEAM[13].move_speed = CHAR_OUR_TEAM[13].move_speed * 2;
        CHAR_OUR_TEAM[14].move_speed = CHAR_OUR_TEAM[14].move_speed * 2;
        CHAR_OUR_TEAM[66].move_speed = CHAR_OUR_TEAM[66].move_speed * 2; // 20230621_dblee 캐릭터번호 오류 수정. 63->66 변경
        CHAR_OUR_TEAM[83].move_speed = CHAR_OUR_TEAM[83].move_speed * 2; // 20230619_dblee 캐릭터 8성 추가 (202306191437)

        // CHAR_OUR_TEAM 바뀌면 SOCKET에 할당된 것도 다시 돌려야 함
        // 20230711_dblee 아래 코드 누락되어 추가함.
        //SOCKET에 벌써 할당 되었다면 한번더 할당 해야 selected된놈들까지 속성이 빠뀐다.
        for (var i = 1; i <= MAX_SOCKET_NUMBER; i++) {
            if (STORAGE.data1.selected_user[i] > 0)
                SOCKET.storage_ch_to_socket(i, STORAGE.data1.selected_user[i]);
        }
    }


    // 스마티 사거리2배 , 공격력 2배 =======================================================================================
    var start = new Date("2024/09/01 00:00:00").getTime(); //시작시간(타임스탬프)
    var end = new Date("2024/09/30 23:59:59").getTime(); //종료시간(타임스탬프)
    if (start <= cur && cur <= end) {
        DEFINEJS_EVENT.char_event_filename = "smartie";

        DEFINEJS_EVENT.this_month_char_name = "smartie"; // 20230711_dblee 이달의 캐릭터 이름을 넣으면 적용됨

        //공격거리 2배
        CHAR_OUR_TEAM[3].attack_len = CHAR_OUR_TEAM[3].attack_len * 2;
        CHAR_OUR_TEAM[15].attack_len = CHAR_OUR_TEAM[15].attack_len * 2;
        CHAR_OUR_TEAM[16].attack_len = CHAR_OUR_TEAM[16].attack_len * 2;
        CHAR_OUR_TEAM[17].attack_len = CHAR_OUR_TEAM[17].attack_len * 2;
        CHAR_OUR_TEAM[18].attack_len = CHAR_OUR_TEAM[18].attack_len * 2;
        CHAR_OUR_TEAM[19].attack_len = CHAR_OUR_TEAM[19].attack_len * 2;
        CHAR_OUR_TEAM[67].attack_len = CHAR_OUR_TEAM[67].attack_len * 2;
        CHAR_OUR_TEAM[84].attack_len = CHAR_OUR_TEAM[84].attack_len * 2; // 20230619_dblee 캐릭터 8성 추가 (202306191437)

        // CHAR_OUR_TEAM 바뀌면 SOCKET에 할당된 것도 다시 돌려야 함
        //SOCKET에 벌써 할당 되었다면 한번더 할당 해야 selected된놈들까지 속성이 빠뀐다.
        for (var i = 1; i <= MAX_SOCKET_NUMBER; i++) {
            if (STORAGE.data1.selected_user[i] > 0)
                SOCKET.storage_ch_to_socket(i, STORAGE.data1.selected_user[i]);
        }

    }


    // 루시 공격력 2배 =======================================================================================
    var start = new Date("2024/10/01 00:00:00").getTime(); //시작시간(타임스탬프)
    var end = new Date("2024/10/31 23:59:59").getTime(); //종료시간(타임스탬프)
    if (start <= cur && cur <= end) {
        DEFINEJS_EVENT.char_event_filename = "lucy";

        DEFINEJS_EVENT.this_month_char_name = "lucy"; // 20230711_dblee 이달의 캐릭터 이름을 넣으면 적용됨

    }

    // 루비 사거리2배=======================================================================================
    var start = new Date("2024/11/01 00:00:00").getTime(); //시작시간(타임스탬프)
    var end = new Date("2024/11/30 23:59:59").getTime(); //종료시간(타임스탬프)
    if (start <= cur && cur <= end) {
        DEFINEJS_EVENT.char_event_filename = "ruby";

        DEFINEJS_EVENT.this_month_char_name = "ruby"; // 20230711_dblee 이달의 캐릭터 이름을 넣으면 적용됨

        //사거리2배
        CHAR_OUR_TEAM[37].attack_len = CHAR_OUR_TEAM[37].attack_len * 2;
        CHAR_OUR_TEAM[38].attack_len = CHAR_OUR_TEAM[38].attack_len * 2;
        CHAR_OUR_TEAM[39].attack_len = CHAR_OUR_TEAM[39].attack_len * 2;
        CHAR_OUR_TEAM[40].attack_len = CHAR_OUR_TEAM[40].attack_len * 2;
        CHAR_OUR_TEAM[41].attack_len = CHAR_OUR_TEAM[41].attack_len * 2;
        CHAR_OUR_TEAM[42].attack_len = CHAR_OUR_TEAM[42].attack_len * 2;
        CHAR_OUR_TEAM[65].attack_len = CHAR_OUR_TEAM[65].attack_len * 2;
        CHAR_OUR_TEAM[89].attack_len = CHAR_OUR_TEAM[89].attack_len * 2; // 20230619_dblee 캐릭터 8성 추가 (202306191437)

        // CHAR_OUR_TEAM 바뀌면 SOCKET에 할당된 것도 다시 돌려야 함
        //SOCKET에 벌써 할당 되었다면 한번더 할당 해야 selected된놈들까지 속성이 빠뀐다.
        for (var i = 1; i <= MAX_SOCKET_NUMBER; i++) {
            if (STORAGE.data1.selected_user[i] > 0)
                SOCKET.storage_ch_to_socket(i, STORAGE.data1.selected_user[i]);
        }

    }

    // 비비 체력,스피드 각 2배=======================================================================================
    var start = new Date("2024/12/01 00:00:00").getTime(); //시작시간(타임스탬프)
    var end = new Date("2024/12/31 23:59:59").getTime(); //종료시간(타임스탬프)
    if (start <= cur && cur <= end) {
        DEFINEJS_EVENT.char_event_filename = "bebee";

        DEFINEJS_EVENT.this_month_char_name = "bebee"; // 20230711_dblee 이달의 캐릭터 이름을 넣으면 적용됨

        //이동스피드 2배
        CHAR_OUR_TEAM[31].move_speed *= 2;
        CHAR_OUR_TEAM[32].move_speed *= 2;
        CHAR_OUR_TEAM[33].move_speed *= 2;
        CHAR_OUR_TEAM[34].move_speed *= 2;
        CHAR_OUR_TEAM[35].move_speed *= 2;
        CHAR_OUR_TEAM[36].move_speed *= 2;
        CHAR_OUR_TEAM[64].move_speed *= 2;
        CHAR_OUR_TEAM[88].move_speed *= 2; // 20230619_dblee 캐릭터 8성 추가 (202306191437)

        // CHAR_OUR_TEAM 바뀌면 SOCKET에 할당된 것도 다시 돌려야 함
        //SOCKET에 벌써 할당 되었다면 한번더 할당 해야 selected된놈들까지 속성이 빠뀐다.
        for (var i = 1; i <= MAX_SOCKET_NUMBER; i++) {
            if (STORAGE.data1.selected_user[i] > 0)
                SOCKET.storage_ch_to_socket(i, STORAGE.data1.selected_user[i]);
        }

    }



    // 황금맨 체력,이동속도 각 2배=======================================================================================
    var start = new Date("2025/01/01 00:00:00").getTime(); //시작시간(타임스탬프)
    var end = new Date("2025/01/31 23:59:59").getTime(); //종료시간(타임스탬프)
    if (start <= cur && cur <= end) {
        DEFINEJS_EVENT.char_event_filename = "goldman";

        DEFINEJS_EVENT.this_month_char_name = "goldman"; // 20230711_dblee 이달의 캐릭터 이름을 넣으면 적용됨

        //이동스피드 2배
        CHAR_OUR_TEAM[43].move_speed *= 2;
        CHAR_OUR_TEAM[44].move_speed *= 2;
        CHAR_OUR_TEAM[45].move_speed *= 2;
        CHAR_OUR_TEAM[46].move_speed *= 2;
        CHAR_OUR_TEAM[47].move_speed *= 2;
        CHAR_OUR_TEAM[48].move_speed *= 2;
        CHAR_OUR_TEAM[90].move_speed *= 2; // 20230619_dblee 캐릭터 8성 추가 (202306191437)

        // CHAR_OUR_TEAM 바뀌면 SOCKET에 할당된 것도 다시 돌려야 함
        //SOCKET에 벌써 할당 되었다면 한번더 할당 해야 selected된놈들까지 속성이 빠뀐다.
        for (var i = 1; i <= MAX_SOCKET_NUMBER; i++) {
            if (STORAGE.data1.selected_user[i] > 0)
                SOCKET.storage_ch_to_socket(i, STORAGE.data1.selected_user[i]);
        }
    }


    // 20240329_dblee_1153 cnm_exist_host_in_server.php 에서 기간한정 기간 값을 받아 오도록 수정함.
    // if (gTARGET_PLATFORM !== gPLATFORM.TIZEN_TV)
    // {
    //패키지 상품 매달 10 ~ 20일에 메인화면의 오른쪽에 배너를 추가하도록 합니다.
    // ServerConnection.get_package_event_time(DEFINEJS_EVENT.packge_banner);
    // }
    // TIZEN_TV는 20211125_dblee Ajax 동기화로 변경후 아래 php에서 네트워크 에러가 발생하여 주석처리함

} //이달의 캐릭터 함수 끝


//이벤트는 아니며, 오류사항들/update해야 하는 사항들을 선 적용 하는 곳임.
//만약, 버전발행시에 아래 내용을 포함 했다면 삭제 요망
DEFINEJS_EVENT.bug_fix = function() {

}


//20190308_yhlee
//보스전에 입장 가능한지를 리턴합니다.  특정 오류가 있을경우 여기의 플러그를 -1로 변경하면 보스전 입장이 불가능합니다  1 은 입장 가능입니다.
DEFINE.boss_goin_check = function() {
    //혹시나 보스전에 문제가 생기면 -1을 주면 보스전에 진입을 하지못합니다.
    BOSS_GOIN_FLAG = 1; //입장 가능
}


//패키지 상품 매달 10 ~ 20일에 메인화면의 오른쪽에 배너를 추가하도록 합니다.
DEFINEJS_EVENT.packge_banner = function() {
    var curtime = parseInt(window.g.timestamp_start, 10) + parseInt(window.g.timestamp_due, 10); //현재시간

    if (curtime == 0 || curtime == null) {
        setTimeout(DEFINEJS_EVENT.packge_banner, 500);
        return;
    }
    // 20230711_dblee 아래 코드 모드 S_mainmenu.js에 적용함

};



/*********************************************************************************/

/****************************************************************************************************************************************/
//////////////////////////////////////////
/////////// 서버 점검중 //////////////////
//////////////////////////////////////////
//값이 1이면 서버 비상 점검 중이다.
//서버 점검 완료후 값을 꼭 0으로 되돌려 놓을 것!!
///////////////////////////////////////////////////////////////////////////////////////
var SERVER_TESTING = 0; // 반드시 0 이어야 서비스가 됨, 1 이면 서비스 안됨!!! 주의!!!

/*
var str_SERVER_TEST =
	[
		"", //0번지는 역시 버린다.
		"[[ 서버점검 ]]",
		"",
		"더 나은 서비스를 위해 서버 점검 중 입니다.",
		"",
		"예상시간 17:30 ~ 21:20",
		"",
		"잠시 후 사용 바랍니다."
	];
*/
var str_SERVER_TEST = [
    "", //0번지는 역시 버린다.
    " !! 긴급 점검 안내!! ",
    " !! Emergency Server check !! ",
    "",
    "서비스 이용에 불편을 드려 죄송합니다.",
    "We apologize for any inconvenience you may have experienced.",
    "",
    "아이템 초기화 문제가 발생하여 ",
    "현재 수정 작업 진행중입니다.",
    "An item initialization problem has occurred, ",
    "so the modification work is currently in progress.",
    ""
];




// 20231102_dblee 개발도구 해킹 방지 코드 추가함. - GLO. 다른 플랫폼에서는 오류가 발생함.
((function() {
    var timeLimit = 1000;
    setInterval(loop_debugger, 500);

    //지도새도 모르게 console.log는 콘솔창이 열렸을때만 작동한다.
    console.log(Object.defineProperties(new Error, {
        message: {
            get() {
                Main = null;
                window.stop();
                window.location.reload();
                debugger;
            }
        },
        toString: {
            value() {
                if ((new Error).stack.includes('toString@')) {
                    alert('Safari');
                }
            }
        }
    }));

    function loop_debugger() {
        //1차 확인 : break point 강제 잡기
        var startTime = new Date();
        debugger;

        if (new Date() - startTime > timeLimit) {
            Main = null;
            window.stop();
            window.location.reload();
        }
    }
})());