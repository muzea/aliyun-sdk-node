export interface DescribeAnycastPopLocationsResponse {
    /**
     * 接入区域的接入点信息列表。
     */
    AnycastPopLocationList: {
        /**
         * 接入点地域名称。
         * @example `us-west-1-pop`
         */
        RegionName: string;
        /**
         * 接入点地域ID。
         * @example `us-west-1-pop`
         */
        RegionId: string;
    }[];
    /**
     * 请求ID。
     * @example `4EC47282-1B74-4534-BD0E-403F3EE64CAF`
     */
    RequestId: string;
    /**
     * 接入点列表条目数。
     * @example `1`
     */
    Count: string;
}
