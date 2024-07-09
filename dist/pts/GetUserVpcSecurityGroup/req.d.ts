export interface GetUserVpcSecurityGroupRequest {
    /**
     * 第几页。
     * @example `1`
     */
    "PageNumber": number;
    /**
     * 每页显示条数。
     * @example `1`
     */
    "PageSize": number;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 专有网络ID。
     * @example `vpc-bp10xjz7c7oqjgasodihj1kx7t`
     */
    "VpcId": string;
}
