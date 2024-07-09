export interface DescribeCloudDriveGroupsRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 企业网盘ID。
     * @example `cn-shanghai+cds-135515****`
     */
    "CdsId": string;
    /**
     * 团队空间ID列表。
     */
    "GroupId"?: string[];
    /**
     * 团队空间名称，支持模糊查询。
     * @example `测试团队1`
     */
    "GroupName"?: string;
    /**
     * 待查询对象的父节点ID。查询根节点时，填`root`。
     * 默认为空，表示查询全部。
     * @example `cg-e70ga4ixp30ur****`
     */
    "ParentGroupId"?: string;
    /**
     * 团队空间状态。
     * @example `enabled`
     */
    "DriveStatus"?: string;
    /**
     * 团队类型。默认为空，表示查询全部。
     * @example `org`
     */
    "GroupType"?: string;
    /**
     * 是否添加空间。默认为空，表示查询全部。
     * @example `binding`
     */
    "DriveType": string;
    /**
     * 办公网络ID。
     * @example `cn-hangzhou+dir-jedbpr4sl9l37****`
     */
    "DirectoryId"?: string;
    /**
     * 办公网络名称。
     * @example `testDirectoryName	`
     */
    "DirectoryName"?: string;
    /**
     * 分页查询时每页行数。
     * - 最大值：100
     * - 默认值：20
     * @example `10`
     */
    "MaxResults"?: number;
    /**
     * 查询凭证（Token）。取值为上一次调用该接口返回的`NextToken`参数值，初次调用接口时无需设置该参数。
     * @example `AAAAAV3MpHK1AP0pfERHZN5pu6lY3I2VNHLwy+nIoSXh****`
     */
    "NextToken"?: string;
}
