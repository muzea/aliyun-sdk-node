export interface DescribeLiveStreamMergeResponse {
    LiveStreamMergeList: {
        /**
         * 直播流信息列表。
         */
        LiveStreamMerge: {
            /**
             * 合流输出App名称。
             * @example `app`
             */
            AppName: string;
            /**
             * 当前使用的App。
             * @example `app1`
             */
            AppUsing: string;
            /**
             * 播流域名。
             * @example `example.com`
             */
            DomainName: string;
            /**
             * 合流结束时间。
             * @example `2020-05-29T01:00:00Z`
             */
            EndTime: string;
            /**
             * 合流输入第3路-第N路的app和stream。
             * @example `app3/stream3,app4/stream4,app5/stream5,…,appN/streamN`
             */
            ExtraInAppStreams: string;
            /**
             * 合流输入主流应用名称。
             * @example `app1`
             */
            InAppName1: string;
            /**
             * 合流输入备流应用名称。
             * @example `app2`
             */
            InAppName2: string;
            /**
             * 合流输入主流直播流名称。
             * @example `InStream1`
             */
            InStreamName1: string;
            /**
             * 合流输入备流直播流名称。
             * @example `stream2`
             */
            InStreamName2: string;
            /**
             * 直播流协议。
             * @example `rtmp`
             */
            Protocol: string;
            /**
             * 合流开始时间。
             * @example `2020-05-29T00:00:00Z`
             */
            StartTime: string;
            /**
             * 合流输出Stream名称。
             * @example `StreamName`
             */
            StreamName: string;
            /**
             * 当前使用的Stream。
             * @example `InStream1`
             */
            StreamUsing: string;
        }[];
    };
    /**
     * 请求ID。
     * @example `16A96B9A-F203-4EC5-8E43-CB92E68F4CD8`
     */
    RequestId: string;
}
