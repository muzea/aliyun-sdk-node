export interface DescribeRegionsResponse {
    /**
     * 请求ID。
     * @example `17EE62D8-064E-5404-8B0D-72122478****`
     */
    RequestId: string;
    /**
     * 地域和可用区信息合集。
     */
    Regions: {
        /**
         * 地域名称。
         * @example `华东1（杭州）`
         */
        LocalName: string;
        /**
         * 地域对应的接入地址（Endpoint）。
         * @example `ebs.cn-hangzhou.aliyuncs.com`
         */
        RegionEndpoint: string;
        /**
         * 地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 可用区信息合集。
         */
        Zones: {
            /**
             * 可用区名称。
             * @example `杭州 可用区H`
             */
            LocalName: string;
            /**
             * 可用区ID。
             * @example `cn-hangzhou-h`
             */
            ZoneId: string;
            /**
             * 资源类型列表。
             */
            ResourceTypes: string[];
        }[];
    }[];
}
