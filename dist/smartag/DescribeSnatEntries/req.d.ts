export interface DescribeSnatEntriesRequest {
    /**
     * 智能接入网关实例所在的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 智能接入网关实例ID。
     * @example `sag-whfn************`
     */
    "SmartAGId": string;
    /**
     * 实例状态列表的页码，默认值为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页行数，默认值为**10**，最大值为**50**。
     * @example `2`
     */
    "PageSize"?: number;
}
