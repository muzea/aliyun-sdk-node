export interface ListDpiGroupsRequest {
    /**
     * 地域ID。
     * 您可以通过[DescribeRegions](~~69813~~)查询智能接入网关支持的地域以及对应的地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 下一页查询开始的Token。
     * @example `FFPSpX59Eb****`
     */
    "NextToken"?: string;
    /**
     * 列表分页查询时每页展示的应用组个数。
     * 取值范围：**1**~**100**。
     * 默认值：**20**。
     * @example `3`
     */
    "MaxResults"?: number;
    /**
     * 应用组ID。
     * 系统允许您通过应用组ID指定查询一个或多个应用组信息，您一次最多可以查询10个指定的应用组信息。
     * @example `1`
     */
    "DpiGroupIds"?: string[];
    /**
     * 应用组名称。
     * 系统允许您通过应用组名称指定查询一个或多个应用组信息，您一次最多可以查询10个指定的应用组信息。
     * @example `P2P`
     */
    "DpiGroupNames"?: string[];
}
