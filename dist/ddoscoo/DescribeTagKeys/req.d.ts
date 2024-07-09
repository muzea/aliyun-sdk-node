export interface DescribeTagKeysRequest {
    /**
     * DDoS高防实例所属地域ID。取值固定为**cn-hangzhou**，表示中国内地，即DDoS高防（中国内地）服务。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * DDoS高防实例在资源管理服务中所属的资源组ID。
     * 不设置该参数表示默认资源组。
     * @example `rg-acfm2pz25js****`
     */
    "ResourceGroupId"?: string;
    /**
     * 资源类型。取值固定为**INSTANCE**，表示DDoS高防实例。
     * @example `INSTANCE`
     */
    "ResourceType": string;
    /**
     * 分页查询时，设置每页包含标签键的数量。默认值为**10**。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 分页查询时，设置当前页面的页码。默认值为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
}
