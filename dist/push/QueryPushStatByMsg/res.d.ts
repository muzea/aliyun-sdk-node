export interface QueryPushStatByMsgResponse {
    /**
     * 请求ID。
     * @example `CF195C34-98FB-491A-98D7-19CBC1FA880B`
     */
    RequestId: string;
    PushStats: {
        /**
         * 消息/通知的推送结果统计PushStat组成的数组。
         */
        PushStat: {
            /**
             * 消息ID。
             * @example `510427`
             */
            MessageId: string;
            /**
             * 通知在设备上被清除的数目。
             * @example `10`
             */
            DeletedCount: number;
            /**
             * 通知在设备上被点击的数目。
             * @example `30`
             */
            OpenedCount: number;
            /**
             * （可为空）短信复合推送成功收到的短信数目。
             * @example `0`
             */
            SmsReceiveSuccessCount: number;
            /**
             * （可为空）短信复合推送跳过发送短信的数目，例如未绑手机号。
             * @example `0`
             */
            SmsSkipCount: number;
            /**
             * （可为空）短信复合推送发出但是手机未收到的短信数目。
             * @example `0`
             */
            SmsReceiveFailedCount: number;
            /**
             * （可为空）短信复合推送短信发送失败的数目，例如未开通对应服务、未授权通过、参数错误等。
             * @example `0`
             */
            SmsFailedCount: number;
            /**
             * 实际送达到设备的数目。
             * @example `60`
             */
            ReceivedCount: number;
            /**
             * 推送服务端实际发出的数目。
             * @example `100`
             */
            SentCount: number;
            /**
             * （可为空）短信复合推送发出的短信数目。
             * @example `0`
             */
            SmsSentCount: number;
            /**
             * 推送服务端接收到的推送数目。
             * @example `120`
             */
            AcceptCount: number;
        }[];
    };
}
