export interface DeleteUserBackupFileRequest {
    /**
     * 用户备份ID。可调用ListUserBackupFiles获取。
     * @example `b-w1haya7e4i25****`
     */
    "BackupId": string;
    /**
     * 地域ID。可调用DescribeRegions获取。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 资源组ID。可调用DescribeDBInstanceAttribute获取。
     * @example `rg-acfmy****`
     */
    "ResourceGroupId"?: string;
}
