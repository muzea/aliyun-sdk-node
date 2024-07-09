export interface DescribeUserOnlineClientStatisticsRequest {
    /**
     * 智能接入网关APP实例所在的地域。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 智能接入网关APP实例ID。
     * @example `sag-sfjg*****`
     */
    "SmartAGId": string;
    /**
     * 用户名列表，多个用户用“,”隔开，最多可同时查询50个用户信息。
     * @example `doctest`
     */
    "UserNames": string[];
}
