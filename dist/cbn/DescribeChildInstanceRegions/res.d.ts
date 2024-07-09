export interface DescribeChildInstanceRegionsResponse {
    /**
     * 请求ID。
     * @example `D5CEED59-36AA-47CC-9D81-16F71C46BD80`
     */
    RequestId: string;
    Regions: {
        /**
         * 地域信息列表。
         */
        Region: {
            /**
             * 地域名称
             * @example `华东 1`
             */
            LocalName: string;
            /**
             * 地域ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
        }[];
    };
}
