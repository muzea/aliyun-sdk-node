export interface DescribeRegionsResponse {
    /**
     * 请求ID。
     * @example `632BBAE2-9C44-4212-8B51-B54742DA9713`
     */
    RequestId: string;
    Regions: {
        /**
         * 地域信息。
         */
        Region: {
            /**
             * 地域名称。
             * @example `华东1（杭州）`
             */
            LocalName: string;
            /**
             * 接入地址。
             * @example `tag.aliyuncs.com`
             */
            RegionEndpoint: string;
            /**
             * 地域ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
        }[];
    };
}
