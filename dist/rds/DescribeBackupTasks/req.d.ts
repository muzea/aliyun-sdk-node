export interface DescribeBackupTasksRequest {
    /**
     * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
     * @example `ETnLKlblzczshOTUbOCz****`
     */
    "ClientToken"?: string;
    /**
     * 备用参数。
     * @example `无`
     */
    "Flag"?: string;
    /**
     * 实例ID。可调用DescribeDBInstances获取。
     * @example `rm-uf6wjk5****`
     */
    "DBInstanceId": string;
    /**
     * 备份任务ID。
     * @example `476****`
     */
    "BackupJobId"?: number;
    /**
     * 备份模式，取值：
     * * **Automated**：系统自动备份
     * * **Manual**：手动备份
     * @example `Automated`
     */
    "BackupMode"?: string;
    /**
     * 备份任务状态，取值：
     * * **NoStart**：未开始
     * * **Progressing**：正在进行中
     * 默认为所有状态。
     * @example `NoStart`
     */
    "BackupJobStatus"?: string;
}
