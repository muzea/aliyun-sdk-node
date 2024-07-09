export interface DescribeRouteDistributionStrategiesRequest {
    /**
     * 智能接入网关实例的地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 智能接入网关实例ID。
     * @example `sag-erx3qta5xg5zyq****`
     */
    "SmartAGId": string;
    /**
     * 路由类型：
     * - **cloud**：云上路由。智能接入网关到云上资源的路由。
     * - **local**：线下路由。智能接入网关到线下节点的路由。
     * @example `cloud`
     */
    "SourceType": string;
    /**
     * 当前分页的页码数。默认值为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页展示时，每个分页包含的列表条目数。默认为**10**。
     * @example `10`
     */
    "PageSize"?: number;
}
