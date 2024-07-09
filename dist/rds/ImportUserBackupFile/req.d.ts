export interface ImportUserBackupFileRequest {
    /**
     * RDS地域ID。可调用DescribeRegions获取。
     * > * 本参数的值为您希望创建RDS实例的地域ID。
     * > * 需要和**BucketRegion**参数的值保持一致。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * MySQL数据库的版本号。当前仅支持传入**5.7**。
     * @example `5.7`
     */
    "EngineVersion"?: string;
    /**
     * 自建MySQL 5.7备份文件所在OSS Bucket的地域ID。可调用DescribeRegions获取。
     * @example `cn-hangzhou`
     */
    "BucketRegion": string;
    /**
     * 描述OSS Bucket中备份文件信息的JSON数组。示例：
     * `{"Bucket":"test", "Object":"test/test_db_employees.xb","Location":"ap-southeast-1"}`
     * 数组中各参数的说明如下：
     * * **Bucket**：备份文件所在OSS Bucket的名称。可调用[GetBucket](~~31965~~)获取。
     * * **Object**：备份文件所在目录的详细路径。可调用[GetObject](~~31980~~)获取。
     * * **Location**：OSS Bucket所在地域的ID。可调用[GetBucketLocation](~~31967~~)获取。
     * @example `{"Bucket":"test", "Object":"test/test_db_employees.xb","Location":"ap-southeast-1"}`
     */
    "BackupFile": string;
    /**
     * 要导入的用户备份的备注信息。
     * @example `BackupTest`
     */
    "Comment"?: string;
    /**
     * 还原用户备份所需存储空间大小。单位：GB。
     * > * 默认为备份文件的5倍大小。
     * > * 最小值为20。
     * @example `20`
     */
    "RestoreSize"?: number;
    /**
     * 用户备份文件保留时长。单位：天。取值为大于**0**的Integer类型整数。
     * @example `30`
     */
    "Retention"?: number;
    /**
     * 可用区ID。可调用DescribeRegions查询。
     * > * 设置可用区后，系统会在该可用区内创建一个秒级快照，大幅节省备份导入所需要的时间。
     * > * 调用CreateDBInstance使用用户备份创建新实例时，该可用区即为新实例所在的可用区。
     * @example `cn-hangzhou-b`
     */
    "ZoneId"?: string;
    /**
     * 资源组ID。可调用DescribeDBInstanceAttribute获取。
     * @example `rg-acfmy****`
     */
    "ResourceGroupId"?: string;
}
