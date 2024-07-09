export interface UpdateUserBackupFileRequest {
    /**
     * 用户备份ID。可调用ListUserBackupFiles获取。
     * @example `b-g14d0m772f7b****`
     */
    "BackupId": string;
    /**
     * 地域ID。可调用DescribeRegions获取。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 需要修改的备注信息。
     * @example `CommentTest`
     */
    "Comment"?: string;
    /**
     * 需要修改的用户备份保留时长。单位：天。取值为大于0的Integer类型整数。
     * @example `30`
     */
    "Retention"?: number;
    /**
     * 资源组ID。可调用DescribeDBInstanceAttribute接口获取。
     * @example `rg-acfmy****`
     */
    "ResourceGroupId"?: string;
}
