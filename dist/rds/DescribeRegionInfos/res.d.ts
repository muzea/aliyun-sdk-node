export interface DescribeRegionInfosResponse {
    /**
     * 请求ID。
     * @example `5414A4E5-4C36-4461-95FC-****`
     */
    RequestId: string;
    Regions: {
        /**
         * 地域列表。
         */
        RDSRegion: {
            /**
             * 地域ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
        }[];
    };
}
