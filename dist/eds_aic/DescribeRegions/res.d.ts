export interface DescribeRegionsResponse {
    /**
     * 请求ID。
     * @example `A87B3769-0D05-5383-B236-5798B455****`
     */
    RequestId: string;
    /**
     * 可用地域。
     */
    RegionModels: {
        /**
         * 地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
    }[];
}
