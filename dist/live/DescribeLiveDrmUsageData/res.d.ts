export interface DescribeLiveDrmUsageDataResponse {
    DrmUsageData: {
        /**
         * 每个时间间隔的DRM用量数据。
         */
        DataModule: {
            /**
             * 调用次数。
             * @example `1`
             */
            Count: number;
            /**
             * 用量域名，SplitBy指定domain时，分组输出。
             * @example `example.com`
             */
            Domain: string;
            /**
             * DRM类型，SplitBy指定drm_type时，分组输出。
             * @example `Widevine`
             */
            DrmType: string;
            /**
             * 直播中心，SplitBy指定region时，分组输出。
             * @example `cn-beijing`
             */
            Region: string;
            /**
             * 时间片起始时刻。
             * @example `2021-05-01T16:00:00Z`
             */
            TimeStamp: string;
        }[];
    };
    /**
     * 请求ID。
     * @example `91FC2D9D-B042-4634-8A5C-7B8E7482C22D`
     */
    RequestId: string;
}
