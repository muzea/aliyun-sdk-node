export interface ListUserBackupFilesRequest {
    /**
     * 通过用户备份文件的状态查询目标用户备份。取值：
     * * **Importing**：导入中。
     * * **Failed**：导入失败。
     * * **CheckSuccess**：校验通过。
     * * **BackupSuccess**：导入成功。
     * * **Deleted**：已删除。
     * @example `CheckSuccess`
     */
    "Status"?: string;
    /**
     * 地域ID。可调用DescribeRegions获取。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 通过备注信息查询目标用户备份。
     * >您可输入目标用户备份的部分备注信息进行模糊匹配。
     * @example `BackupTest`
     */
    "Comment"?: string;
    /**
     * 通过用户备份ID查询目标用户备份。
     * @example `b-kwwvr7v8t7of****`
     */
    "BackupId"?: string;
    /**
     * 通过用户备份文件的OSS下载地址查询目标用户备份。如何获取用户备份文件的OSS下载地址，请参见[上传Object后如何获取访问URL](~~39607~~)。
     * @example `https://****.oss-ap-****.aliyuncs.com/backup_qp.xb`
     */
    "OssUrl"?: string;
    /**
     * 通过标签信息查询目标用户备份。
     * @example `key1:value1`
     */
    "Tags"?: string;
    /**
     * 资源组ID。可调用DescribeDBInstanceAttribute获取。
     * @example `rg-acfmy****`
     */
    "ResourceGroupId"?: string;
}
