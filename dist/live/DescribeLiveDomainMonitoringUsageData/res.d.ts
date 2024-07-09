export interface DescribeLiveDomainMonitoringUsageDataResponse {
    /**
     * 域名。
     * @example `example.com`
     */
    DomainName: string;
    /**
     * 查询结束时间。
     * @example `2022-12-10T22:00:00Z`
     */
    EndTime: string;
    /**
     * 监播场次ID。
     * @example `e62af24d-a354-3b0c-9f1f-da592c4b****`
     */
    InstanceId: string;
    MonitoringData: {
        /**
         * 广目监播用量明细。
         */
        MonitoringDataItem: {
            /**
             * 域名。只有当**Split**指定了domain时有效。
             * @example `example.com`
             */
            DomainName: string;
            /**
             * 时长，单位为分钟。
             * @example `2000`
             */
            Duration: number;
            /**
             * 监播场次ID。只有当**Split**指定了instance时有效。
             * @example `e62af24d-a354-3b0c-9f1f-da592c4b****`
             */
            InstanceId: string;
            /**
             * 直播中心Region。只有当**Split**指定了Region时有效。
             * @example `cn-shanghai`
             */
            Region: string;
            /**
             * 分辨率.。只有当**Split**指定了resolution时有效。
             * @example `720P`
             */
            Resolution: string;
            /**
             * 时间片起始时刻。
             * @example `2022-12-10T20:00:00Z`
             */
            TimeStamp: string;
        }[];
    };
    /**
     * 直播中心Region。
     * @example `cn-shanghai`
     */
    Region: string;
    /**
     * 请求ID。
     * @example `3C6CCEC4-6B88-4D4A-93E4-D47B3D92CF8F`
     */
    RequestId: string;
    /**
     * 查询起始时间。
     * @example `2022-12-10T20:00:00Z`
     */
    StartTime: string;
}
