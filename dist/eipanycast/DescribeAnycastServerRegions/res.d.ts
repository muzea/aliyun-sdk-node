export interface DescribeAnycastServerRegionsResponse {
    /**
     * 请求ID。
     * @example `4EC47282-1B74-4534-BD0E-403F3EE64CAF`
     */
    RequestId: string;
    /**
     * 列表条目数。
     * @example `1`
     */
    Count: string;
    /**
     * Anycast EIP可绑定的后端地域信息列表。
     */
    AnycastServerRegionList: {
        /**
         * 可绑定地域名称。
         * @example `eu-west-1-gb33-a01`
         */
        RegionName: string;
        /**
         * 可绑定地域ID。
         * @example `eu-west-1`
         */
        RegionId: string;
    }[];
}
