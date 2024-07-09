export interface DescribeRtcMPUEventSubResponse {
    /**
     * 请求ID
     * @example `******3B-0E1A-586A-AC29-742247******`
     */
    RequestId: string;
    /**
     * 事件回调信息
     */
    SubInfo: {
        /**
         * 事件回调ID
         * @example `Sub-******9799B2C4500******`
         */
        SubId: string;
        /**
         * 订阅的应用ID
         * @example `yourAppId`
         */
        AppId: string;
        /**
         * 指定接收回调的混流任务的频道ID，用英文逗号“,”隔开。如果为空，表示所有频道都接收回调
         * @example `yourCh1,yourCh2`
         */
        ChannelIds: string;
        /**
         * 事件回调的创建时间，格式为：yyyy-MM-ddTHH:mm:ssZ（UTC时间）
         * @example `2024-04-09 18:00:00Z`
         */
        CreateTime: string;
        /**
         * 回调地址
         * @example `http://testcallback***.com/callback`
         */
        CallbackUrl: string;
    };
}
