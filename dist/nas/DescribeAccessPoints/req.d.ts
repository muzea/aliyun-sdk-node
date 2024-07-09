export interface DescribeAccessPointsRequest {
    /**
     * 文件系统ID。
     * @example `174494****`
     */
    "FileSystemId"?: string;
    /**
     * 权限组名称。
     * 当目标文件系统为通用型NAS，此参数必填。
     * 默认权限组：DEFAULT_VPC_GROUP_NAME（专有网络默认权限组）。
     * @example `DEFAULT_VPC_GROUP_NAME`
     */
    "AccessGroup"?: string;
    /**
     * 每次查询结果的个数。
     * 取值范围：10~100。默认值：10。
     * @example `10`
     */
    "MaxResults"?: number;
    /**
     * 查询凭证（Token），取值为上一次 API 调用返回的 NextToken 参数值。
     * @example `MTY4NzcxOTcwMjAzMDk2Nzc0MyM4MDM4****`
     */
    "NextToken"?: string;
}
