export interface DescribeRegionsResponse {
    /**
     * 请求ID。
     * @example `D6E068C3-25BC-455A-85FE-45F0B22ECB1F`
     */
    RequestId: string;
    Regions: {
        /**
         * 地域详情信息列表。
         */
        RDSRegion: {
            /**
             * 地域下的可用区ID。
             * @example `ap-southeast-1a`
             */
            ZoneId: string;
            /**
             * 地域ID。
             * @example `ap-southeast-1`
             */
            RegionId: string;
        }[];
    };
}
