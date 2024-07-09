export interface DescribeRegionsResponse {
    /**
     * 请求ID。
     * @example `73469C7-AA6F-4DC5-B3DB-A3DC0DE3****`
     */
    RequestId: string;
    /**
     * 地域信息的集合。
     */
    Regions: {
        /**
         * 当前地域是否支持经典网络类型的伸缩组。取值范围：
         * - true：不支持。
         * - false：支持。
         * @example `false`
         */
        ClassicUnavailable: boolean;
        /**
         * 地域对应的接入地址（Endpoint）。
         * @example `ess.aliyuncs.com`
         */
        RegionEndpoint: string;
        /**
         * 地域名称。
         * @example `华北2（北京）`
         */
        LocalName: string;
        /**
         * 当前地域是否支持VPC网络类型的伸缩组，取值范围：
         * - true：不支持。
         * - false：支持。
         * @example `false`
         */
        VpcUnavailable: boolean;
        /**
         * 地域ID。
         * @example `cn-beijing`
         */
        RegionId: string;
    }[];
}
