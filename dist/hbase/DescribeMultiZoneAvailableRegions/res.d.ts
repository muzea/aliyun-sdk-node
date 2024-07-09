export interface DescribeMultiZoneAvailableRegionsResponse {
    /**
     * 请求Id。
     * @example `F03BB273-45EE-4B6C-A329-A6E6A8D15856`
     */
    RequestId: string;
    Regions: {
        /**
         * 可用地域集合。
         */
        Region: {
            /**
             * 地域请求地址。
             * @example `hbase.aliyuncs.com`
             */
            RegionEndpoint: string;
            /**
             * 地域名称，会根据指定的语言返回。
             * @example `华南1（深圳）`
             */
            LocalName: string;
            /**
             * 地域Id。
             * @example `cn-shenzhen`
             */
            RegionId: string;
            AvailableCombines: {
                /**
                 * 可用的可用区组合。
                 */
                AvailableCombine: {
                    /**
                     * 可用区组合Id。
                     * @example `cn-shenzhen-****-aliyun`
                     */
                    Id: string;
                    Zones: {
                        Zone: string[];
                    };
                }[];
            };
        }[];
    };
}
