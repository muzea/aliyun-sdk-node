export interface DescribeSDGDeploymentStatusRequest {
    /**
     * SDG的ID。
     * @example `sdg-xxxx`
     */
    "SDGId": string;
    /**
     * 页码，起始值为：**1**，默认值：**1**。
     * @example `1`
     */
    "PageNumber"?: string;
    /**
     * 每页行数。
     * @example `10`
     */
    "PageSize"?: string;
}
