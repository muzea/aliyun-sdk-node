export interface ListBackupRecordRequest {
    /**
     * 要查询的防勒索策略防护的服务器的识别信息。可输入服务器的IP地址或实例ID。
     * @example `192.168.XX.XX`
     */
    "MachineRemark"?: string;
    /**
     * 备份任务状态列表。取值：
     * - **BACKUP_COMPLETE**：备份成功
     * - **BACKUP_FAILED**：备份失败
     * - **PARTIAL_COMPLETE**：部分备份成功
     */
    "StatusList"?: string[];
    /**
     * 备份开始时间，格式为时间戳（单位为毫秒）。
     * @example `1699514211000`
     */
    "BackupStartTime"?: number;
    /**
     * 备份结束时间，格式为时间戳（单位为毫秒）。
     * @example `1699600611000`
     */
    "BackupEndTime"?: number;
    /**
     * 设置从返回结果的第几页开始显示查询结果。默认值为**1**，表示从第1页开始显示。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 分页查询时，每页显示的数据最大条数。每页默认显示的数据条数为20条，PageSize参数值为空时，将默认返回20条数据。
     * > 建议PageSize取值不要为空。
     * @example `20`
     */
    "PageSize"?: number;
}
