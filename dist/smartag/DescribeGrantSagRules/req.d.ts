export interface DescribeGrantSagRulesRequest {
    /**
     * 智能接入网关实例所属的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 智能接入网关实例ID。
     * @example `sag-hdg*************`
     */
    "SmartAGId": string;
    /**
     * 分页查询时的页码。
     * 默认值是**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时每页展示的授权条目数。
     * 默认值为**10**，最大值为**50**。
     * @example `10`
     */
    "PageSize"?: number;
}
