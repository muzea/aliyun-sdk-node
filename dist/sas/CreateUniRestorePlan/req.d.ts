export interface CreateUniRestorePlanRequest {
    /**
     * 恢复时间点。
     * >调用[DescribeRestorePlans](~~DescribeRestorePlans~~)接口可以获取该参数。
     * @example `1656957664000`
     */
    "TimePoint": number;
    /**
     * 数据库防勒索备份策略的ID。
     * >调用[DescribeUniBackupPolicies](~~DescribeUniBackupPolicies~~)接口可以获取该参数。
     * @example `123`
     */
    "PolicyId": number;
    /**
     * 数据库名称。
     * @example `qtc`
     */
    "Database"?: string;
    /**
     * 恢复目标服务器数据库备份客户端唯一标识。
     * >调用[DescribeUniBackupDatabase](~~DescribeUniBackupDatabase~~)接口可以获取该参数。
     * @example `ac457b30598d11ed800000163e02****`
     */
    "InstanceUuid"?: string;
    /**
     * 针对ORACLE数据库查询备份时，对应查询可恢复的时间点中所选择记录的**reset_time**值。
     * >调用[DescribeUniRecoverableList](~~DescribeUniRecoverableList~~)接口可以获取该参数。
     * @example `2022-10-29 01:06:24`
     */
    "ResetTime"?: string;
    /**
     * 针对ORACLE数据库查询备份时，对应查询可恢复的时间点中所选择记录的**reset_scn**值。
     * >调用[DescribeUniRecoverableList](~~DescribeUniRecoverableList~~)接口可以获取该参数。
     * @example `925702.0`
     */
    "ResetScn"?: string;
    /**
     * 恢复数据库类型为MSSQL时，数据库恢复信息。格式为JSON字符串格式，取值：
     * - **name**：数据库名称
     * - **files**：数据库文件路径
     * >调用[DescribeUniRecoverableList](~~DescribeUniRecoverableList~~)接口可以获取该参数。
     * @example `{"files": {"qtc":"F:\\database\\qtc.mdf","qtc_log":"F:\\database\\qtc_0.ldf"},
    "name":"qtc"}`
     */
    "RestoreInfo"?: string;
}
