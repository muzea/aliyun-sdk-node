export interface DescribeRegionsResponse {
    /**
     * 请求ID。
     * @example `F5FEB9AA-C108-577C-AB3D-D13524AF****`
     */
    RequestId: string;
    Regions: {
        /**
         * 地域信息集合。
         */
        Region: {
            /**
             * 地域对应的接入地址（Endpoint）。
             * @example `eais.cn-shenzhen.aliyuncs.com`
             */
            RegionEndpoint: string;
            /**
             * 地域名称。
             * @example `华南1（深圳）`
             */
            LocalName: string;
            /**
             * 地域ID。
             * @example `cn-shenzhen`
             */
            RegionId: string;
        }[];
    };
}
