export interface ListEventSubEventResponse {
    /**
     * 请求ID。
     * @example `CC8CB656-A7BA-1811-9D6B-4CC187E988BD`
     */
    RequestId: string;
    /**
     * 当前页返回的回调记录总数。
     * @example `1`
     */
    Count: number;
    /**
     * 是否有下一页。
     * @example `false`
     */
    HasMore: boolean;
    /**
     * 回调记录。
     */
    Logs: {
        /**
         * 订阅的应用ID。
         * @example `9qb1****`
         */
        AppId: string;
        /**
         * 订阅事件ID。
         * @example `ad53276431c****`
         */
        SubId: string;
        /**
         * 回调记录ID。
         * @example `875d5266cbabb1834cc84a105cf6****`
         */
        MessageId: string;
        /**
         * 回调内容详情。
         * @example `{\"MsgId\":\"875d5266cbabb1834cc84a105cf68454\",\"MsgTimestamp\":1697545591,\"SubscribeId\":\"09be0d2254cb5a89f4cbd86403ec5343\",\"AppId\":\"xxx\",\"ChannelId\":\"9099\",\"Contents\":[{\"Event\":\"UserEvent\",\"UserEvent\":{\"UserId\":\"linux_test\",\"EventTag\":\"Leave\",\"SessionId\":\"je7y2sBZJZQ0VBJZrh4LnBkxvGH2WyVs\",\"Timestamp\":1697545591,\"ChannelProfile\":\"interactive_live\",\"US\":5068748604047364,\"Reason\":1,\"Role\":1,\"TerminalType\":6,\"UserType\":2}}]}`
         */
        Data: string;
        /**
         * 回调时长，单位：毫秒。
         * @example `22`
         */
        Cost: number;
        /**
         * 产生回调记录的时间。
         * @example `2023-10-17 20:26:31.988`
         */
        Time: string;
        /**
         * 回调地址。
         * @example `http://****.com/callback`
         */
        Url: string;
        /**
         * 错误码，200为回调成功。
         * @example `200`
         */
        Code: number;
    }[];
}
