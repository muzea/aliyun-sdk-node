export interface ModifyCloudDriveGroupsRequest {
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
     * 团队共享盘的状态。
     * @example `disabled`
     */
    "Status"?: string;
    /**
     * 团队共享盘的存储峰值。单位：Byte（字节）。
     * @example `1073741824`
     */
    "TotalSize"?: number;
    /**
     * 团队空间ID列表。
     */
    "GroupId"?: string[];
}
