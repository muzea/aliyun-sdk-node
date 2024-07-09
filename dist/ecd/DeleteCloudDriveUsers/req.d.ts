export interface DeleteCloudDriveUsersRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 企业网盘ID。
     * @example `cn-hangzhou+cds-64326*****`
     */
    "CdsId": string;
    /**
     * 终端用户ID列表。
     */
    "EndUserId"?: string[];
}
