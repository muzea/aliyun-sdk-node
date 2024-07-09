export interface DescribeLiveStreamsControlHistoryResponse {
    /**
     * 请求ID。
     * @example `9C31856F-386D-4DB3-BE79-A0AA493D702A`
     */
    RequestId: string;
    ControlInfo: {
        /**
         * 直播流的操作记录。
         */
        LiveStreamControlInfo: {
            /**
             * 用户端的IP地址。
             * @example `10.207.XX.XX`
             */
            ClientIP: string;
            /**
             * 操作执行的时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2015-12-01T16:36:18Z`
             */
            TimeStamp: string;
            /**
             * 执行的操作名称。
             * @example `DescribeLiveStreamsControlHistory`
             */
            Action: string;
            /**
             * 播流名称。
             * @example `liveStream****`
             */
            StreamName: string;
        }[];
    };
}
