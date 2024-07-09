export interface DescribeGrantSagVbrRulesRequest {
    /**
     * 智能接入网关实例所在地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 智能接入网关实例ID。
     * @example `sag-0nnteglltw6z4b****`
     */
    "SmartAGId"?: string;
    /**
     * 边界路由器实例ID。
     * @example `vbr-bp13gtbhdp0pfqg6s****`
     */
    "VbrInstanceId"?: string;
    /**
     * 分页查询时的页码。默认值为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时每页的条目数。默认值为**10**。
     * @example `10`
     */
    "PageSize"?: number;
}
