export interface DescribeRegionsResponse {
    /**
     * 请求ID。
     * @example `2F026E79-30AD-47B6-9E7D-D1D4BA77F1F1`
     */
    RequestId: string;
    Regions: {
        /**
         * 可用地域的集合。
         */
        Region: {
            /**
             * 地域名称。
             * @example `华东2（上海）`
             */
            LocalName: string;
            /**
             * 当前地域下智能接入网关服务的Endpoint。
             * @example `smartag.cn-shanghai.aliyuncs.com`
             */
            RegionEndpoint: string;
            /**
             * 地域ID。
             * @example `cn-shanghai`
             */
            RegionId: string;
        }[];
    };
}
