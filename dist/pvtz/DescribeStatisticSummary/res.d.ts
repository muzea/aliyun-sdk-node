export interface DescribeStatisticSummaryResponse {
    /**
     * 昨日请求总量。
     * @example `2254`
     */
    TotalCount: number;
    /**
     * 请求ID。
     * @example `A73F3BD0-B1A8-42A9-A9B6-689BBABC4891`
     */
    RequestId: string;
    ZoneRequestTops: {
        /**
         * Zone请求量Top3。
         */
        ZoneRequestTop: {
            /**
             * 请求量。
             * @example `2251`
             */
            RequestCount: number;
            /**
             * Zone名称。
             * @example `host.local`
             */
            ZoneName: string;
            /**
             * 业务类型。取值：
             * - AUTH_ZONE：权威zone。
             * - RESOLVER_RULE：转发规则。
             * @example `AUTH_ZONE`
             */
            BizType: string;
        }[];
    };
    VpcRequestTops: {
        /**
         * VPC请求量Top3。
         */
        VpcRequestTop: {
            /**
             * VPC ID。
             * @example `vpc-xxxxxxxxxx`
             */
            VpcId: string;
            /**
             * vpc类型。
             * - STANDARD：标准VPC。
             * - EDS：无影工作区VPC。
             * @example `STANDARD`
             */
            VpcType: string;
            /**
             * 地域名称。
             * @example `华北 2`
             */
            RegionName: string;
            /**
             * 隧道ID。
             * @example `46574`
             */
            TunnelId: string;
            /**
             * 请求量。
             * @example `2254`
             */
            RequestCount: number;
            /**
             *
             * 地域ID。
             * @example `cn-beijing`
             */
            RegionId: string;
        }[];
    };
}
