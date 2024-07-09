export interface DescribeRegionsResponse {
    /**
     * 请求ID。
     * @example `815240e2-aa37-4c26-9cca-05d4df3e8fe6`
     */
    RequestId: string;
    Regions: {
        /**
         * 地域。
         */
        Region: {
            /**
             * 地域ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
        }[];
    };
}
