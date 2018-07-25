//先定义可能出现的牌型
const CARD_TYPE = {
    //各种牌型的对应数字
    PASS_CARDS : -2, //过
	NO_CARDS : -1, //前面还没有牌（首家）
	ERROR_CARDS : 0, //错误牌型
	SINGLE_CARD : 1, //单牌
	DOUBLE_CARD : 2, //对子
	THREE_CARD : 3,//3不带
	THREE_ONE_CARD : 4,//3带1
	THREE_TWO_CARD : 5, //3带2
	BOMB_TWO_CARD : 6, //4带2
	STRAIGHT : 7, //连牌
	CONNECT_CARD : 8, //连对
	AIRCRAFT : 9, //飞机不带
	AIRCRAFT_CARD : 10, //飞机带单牌
	AIRCRAFT_WING : 11, //飞机带对子
	BOMB_CARD : 12, //炸弹
	KINGBOMB_CARD : 13//王炸
};

module.exports = CARD_TYPE;

