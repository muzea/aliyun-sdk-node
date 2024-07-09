export interface DescribeRegionsResponse {
    /**
     * 本次请求的ID。
     * @example `5093C7EE-8E27-5FC9-9B88-40626BA540C0`
     */
    RequestId: string;
    Regions: {
        /**
         * DDoS基础防护支持的地域列表。
         */
        Region: {
            /**
             * 地域的英文名称。
             * @example `East China 1`
             */
            RegionEnName: string;
            /**
             * 地域的中文名称。
             * @example `华东1（杭州）`
             */
            RegionName: string;
            /**
             * 地域ID。
             * @example `cn-hangzhou`
             */
            RegionNoAlias: string;
            /**
             * 地域的编码。
             * @example `cn-hangzhou-dg-a01`
             */
            RegionNo: string;
        }[];
    };
}
