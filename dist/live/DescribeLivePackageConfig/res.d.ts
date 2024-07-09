export interface DescribeLivePackageConfigResponse {
    LivePackageConfigList: {
        /**
         * 封装配置列表
         */
        LivePackageConfig: {
            /**
             * App名。
             * @example `AppName`
             */
            AppName: string;
            /**
             * 直播域名（主播放域名）。
             * @example `example.com`
             */
            DomainName: string;
            /**
             * 是否忽略转码流，取值：
             * - **true**（默认值）：忽略。
             * - **false**：不忽略。
             * @example `true`
             */
            IgnoreTranscode: boolean;
            /**
             * Part切片时长，单位：毫秒。
             * @example `0`
             */
            PartDuration: number;
            /**
             * 直播协议与封装格式。
             * @example `HLS_CMAF`
             */
            Protocol: string;
            /**
             * 切片时长，单位：秒。
             * @example `5`
             */
            SegmentDuration: number;
            /**
             * 直播M3U8切片个数。
             * @example `3`
             */
            SegmentNum: number;
            /**
             * 直播流名。
             * @example `StreamName`
             */
            StreamName: string;
        }[];
    };
    /**
     * 排序。取值：
     * - **asc**（默认值）：升序。
     * - **desc**：降序。
     * @example `asc`
     */
    Order: string;
    /**
     * 当前页码。
     * @example `1`
     */
    PageNum: number;
    /**
     * 每页大小。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `1FEDCFD8-4C5D-5CB3-A5A1-0B59E5AE57B0`
     */
    RequestId: string;
    /**
     * 总个数。
     * @example `1`
     */
    TotalNum: number;
    /**
     * 总页数。
     * @example `10`
     */
    TotalPage: number;
}
