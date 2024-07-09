export interface DeleteCloudDriveGroupsRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 企业网盘ID。
     * @example `cn-hangzhou+cds-532033****`
     */
    "CdsId": string;
    /**
     * 团队空间ID列表。
     */
    "GroupId"?: string[];
}
