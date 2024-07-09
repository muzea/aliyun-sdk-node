export interface ModifyCloudDriveUsersRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 企业网盘ID。
     * @example `cn-hangzhou+cds-596198****`
     */
    "CdsId": string;
    /**
     * 用户个人盘的状态。
     * @example `enabled`
     */
    "Status"?: string;
    /**
     * 用户个人盘的存储峰值。该值不可大于企业网盘中可分配的剩余容量。单位：Byte（字节）。
     * @example `1024`
     */
    "UserMaxSize": number;
    /**
     * 终端用户ID列表。
     */
    "EndUserId": string[];
}
