export interface BeeBotChatRequest {
    /**
     * 会话ID, 用于标识一个访问者的会话和上下文信息。
     * @example `en`
     */
    "SessionId"?: string;
    /**
     * 机器人访问者输入。
     * @example `659216218162179`
     */
    "Utterance": string;
    /**
     * Isv校验码，用于校验子账号是否由ISV授权。
     * @example `ksiekdki39ksks93939`
     */
    "IsvCode"?: string;
    /**
     * 机器人实例ID。
     * @example `1`
     */
    "ChatBotInstanceId": string;
    /**
     * 知识库中知识标题ID。
     * @example `1`
     */
    "KnowledgeId"?: string;
    /**
     * 对话流中意图名称，若指定此名称，机器人会直接进入此意图做问答。
     * @example `intent`
     */
    "IntentName"?: string;
    /**
     * 访问者ID。用于识别当前会话中的用户。
     * @example `861500000000`
     */
    "SenderId"?: string;
    /**
     * 当前会话中访问的昵称。
     * @example `nick`
     */
    "SenderNick"?: string;
    /**
     * 视角编码列表。
     */
    "Perspective"?: string[];
    /**
     * 用户自定义参数集，一个JSON格式的用户自定义参数集，可以传入用户自定义的参数到各对话引擎。
     * @example `{\"skills\":\"chat_search\",\"accessToken\":\"73f4d5c8e8c334d9b538890bca68ac9a\",\"senderStaffId\":\"1697204021326\",\"senderCorpId\":\"dingee291fb2828058b9\"}`
     */
    "VendorParam"?: any;
    /**
     * ISV子客户的SpaceId
     * @example `293483938849493`
     */
    "CustSpaceId"?: string;
}
