export interface DescribeLivePushProxyUsageDataResponse {
    /**
     * 结束时间。
     * @example `2022-10-10T21:00:00Z`
     */
    EndTime: string;
    PushProxyData: {
        /**
         * 直播中心转推用量数据。
         */
        PushProxyDataItem: {
            /**
             * 用量域名，SplitBy指定domain时，分组输出。
             * @example `example.com`
             */
            DomainName: string;
            /**
             * 直播中心，SplitBy指定region时，分组输出。
             * @example `cn-beijing`
             */
            Region: string;
            /**
             * 直播中心转推峰值路数，单位：路。
             * @example `8`
             */
            StreamCount: number;
            /**
             * 时间片起始时刻。
             * @example `2022-10-10T20:00:00Z`
             */
            TimeStamp: string;
        }[];
    };
    /**
     * 该条任务请求ID。
     * @example `4B460F8B-993C-4F48-B98A-910811DEBFEB`
     */
    RequestId: string;
    /**
     * 起始时间。
     * @example `2022-10-10T20:00:00Z`
     */
    StartTime: string;
}
