export interface DescribeLiveCenterTransferResponse {
    LiveCenterTransferInfoList: {
        /**
         * 直播转推服务列表。
         */
        LiveCenterTransferInfo: {
            /**
             * 直播流应用名称。
             * @example `teststream`
             */
            AppName: string;
            /**
             * 播流域名。
             * @example `example.com`
             */
            DomainName: string;
            /**
             * 转推的第三方直播地址。
             * @example `rtmp://push.example2.aliyunlive.com/testapp1/teststream2`
             */
            DstUrl: string;
            /**
             * 转推结束时间。
             * @example `2022-04-29T15:16:00Z`
             */
            EndTime: string;
            /**
             * 转推开始时间。
             * @example `2022-04-28T15:16:00Z`
             */
            StartTime: string;
            /**
             * 直播流名称。
             * @example `teststream`
             */
            StreamName: string;
            /**
             * 转推有效时间。取值：
             * - **always**：永久生效。
             * - **time**：指定时间内有效。
             * @example `time`
             */
            TransferArgs: string;
        }[];
    };
    /**
     * 请求ID。
     * @example `C4865B85-664B-19D3-BB16-C62FB83C8226`
     */
    RequestId: string;
}
