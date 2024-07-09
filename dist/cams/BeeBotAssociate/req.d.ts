export interface BeeBotAssociateRequest {
    /**
     * 机器人实例ID。
     * @example `1`
     */
    "ChatBotInstanceId": string;
    /**
     * Isv校验码，用于校验子账号是否由ISV授权
     * @example `ksiekdki39ksks93939`
     */
    "IsvCode"?: string;
    /**
     * 会话ID,用于标识一个访问者的会话和保持上下文信息
     * @example `2334324234`
     */
    "SessionId"?: string;
    /**
     * 视角编码列表。
     */
    "Perspective"?: string[];
    /**
     * 推荐问题数量，1 - 10
     * @example `3`
     */
    "RecommendNum"?: number;
    /**
     * 机器人访问者输入
     * @example `你好`
     */
    "Utterance"?: string;
    /**
     * ISV子客户的SpaceId
     * @example `293483938849493`
     */
    "CustSpaceId"?: string;
}
