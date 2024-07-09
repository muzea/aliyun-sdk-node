export interface DescribeSmartAccessGatewayClientUsersRequest {
    /**
     * 智能接入网关App实例所属的地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 智能接入网关App实例ID。
     * @example `sag-kzo5dvms3dqii3*****`
     */
    "SmartAGId": string;
    /**
     * 客户端的用户名。
     * @example `username`
     */
    "UserName"?: string;
    /**
     * 查询页码。默认值：**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时每页的条目数。默认值：**10**。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 客户端的邮箱地址。
     * @example `username@example.com`
     */
    "UserMail"?: string;
}
