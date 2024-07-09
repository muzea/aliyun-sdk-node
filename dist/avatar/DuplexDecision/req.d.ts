export interface DuplexDecisionRequest {
    /**
     * 租户ID，从虚拟数字人开放平台中获取的TenantId
     * @example `xxxxx`
     */
    "TenantId": number;
    /**
     * App ID。在业务配置详情页的右下角可以看到开发者信息AppId
     * @example `12131231`
     */
    "AppId": string;
    /**
     * 对话的会话id
     * @example `xxxxxxxxxx`
     */
    "SessionId": string;
    /**
     * 业务请求id，每次请求的唯一id
     * @example `xxxxxxxxxx`
     */
    "BizRequestId": string;
    /**
     * 当前通话状态 ；
     * 1. “ROBOT_TALK”：即数字人在播报，用户可打断。数字人只要在播报时就传该状态
     * 2. “USER_TALK”：即数字人未播报并且用户在说话，机器人可承接。
     * @example `ROBOT_TALK`
     */
    "DialogStatus": string;
    /**
     * 调用时机:
     * 1. 0： 句中
     * 2. 1： 句尾
     * @example `1`
     */
    "CallTime": number;
    /**
     * ASR识别的用户说的话对应的文本内容
     * @example `你好`
     */
    "Text": string;
    /**
     * 对话上下文
     */
    "DialogContext"?: {
        /**
         * 当前会话轮次。
         * @example `1`
         */
        CurUtteranceIdx: number;
        /**
         * 对话历史（可以取最近的20轮对话）
         */
        Histories: {
            /**
             * 用户说的话
             * @example `你好`
             */
            User: string;
            /**
             *  数字人回复的问答结果
             * @example `你好啊`
             */
            Robot: string;
        }[];
    };
    /**
     * 打断类型：不传默认为0
     * 1. 0：算法语义打断类型
     * 2. 1：自定义打断词
     * 3. 2：自定义打断词+算法语义打断
     * @example `1`
     */
    "InterruptType"?: number;
    /**
     * 自定义的打断词列表，词的数目不超过100，每个词的字数不超过10个字，InterruptType为1时，该字段必填
     */
    "CustomKeywords"?: string[];
}
