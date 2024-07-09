export interface DescribeBackupFilesRequest {
    /**
     * 备份文件ID。
     * @example `bf-dxrh5jrv0zpb8****`
     */
    "BackupFileId"?: string;
    /**
     * 备份文件名称模糊查询。
     * @example `测试`
     */
    "BackupFileName"?: string;
    /**
     * 实例组ID。
     * @example `ag-fxdx91jsfyiy3****`
     */
    "InstanceGroupId"?: string;
    /**
     * 实例ID。
     * @example `acp-34pqe4r0kd9kn****`
     */
    "AndroidInstanceId"?: string;
    /**
     * 实例名称模糊查询。
     * @example `acp-34pqe4r0kd9kn****`
     */
    "AndroidInstanceName"?: string;
    /**
     * 描述模糊查询。
     * @example `测试`
     */
    "Description"?: string;
    /**
     * 查询当前时间之后的备份文件。
     * @example `2024-05-23 10:00:00`
     */
    "StartTime"?: string;
    /**
     * 查询当前时间之前的备份文件。
     * @example `2024-05-20 10:00:00`
     */
    "EndTime"?: string;
    /**
     * 备份文件的Owner。
     * @example `test1`
     */
    "EndUserId"?: string;
    /**
     * 分页查询时每页的最大条目数。取值范围1～100，默认值为10。
     * @example `10`
     */
    "MaxResults"?: number;
    /**
     * 用来表示当前开始读取的位置。置空表示从头开始。
     * @example `AAAAAV3MpHK1AP0pfERHZN5pu6l5V9uON****`
     */
    "NextToken"?: string;
}
