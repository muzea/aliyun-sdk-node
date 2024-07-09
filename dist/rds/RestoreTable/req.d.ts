export interface RestoreTableRequest {
    /**
     * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
     * @example `ETnLKlblzczshOTUbOCz****`
     */
    "ClientToken"?: string;
    /**
     * 实例ID。
     * @example `rm-uf6wjk5****`
     */
    "DBInstanceId": string;
    /**
     * 备份集ID。您可以通过DescribeBackups接口获取备份集列表。
     * >**BackupId**和**RestoreTime**两者至少传入一个。
     * @example `902****`
     */
    "BackupId"?: string;
    /**
     * 备份保留周期内的任意时间点。格式：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * > * **BackupId**和**RestoreTime**两者至少传入一个。
     * > * 实例必须已开启[日志备份](~~98818~~)。
     * @example `2011-06-11T16:00:00Z`
     */
    "RestoreTime"?: string;
    /**
     * 指定恢复的库表。格式：
     * ```[{"type":"db","name":"<数据库1名称>","newname":"<新数据库1名称>","tables":[{"type":"table","name":"<数据库1内的表1名称>","newname":"<新的表1名称>"},{"type":"table","name":"<数据库1内的表2名称>","newname":"<新的表2名称>"}]},{"type":"db","name":"<数据库2名称>","newname":"<新数据库2名称>","tables":[{"type":"table","name":"<数据库2内的表3名称>","newname":"<新的表3名称>"},{"type":"table","name":"<数据库2内的表4名称>","newname":"<新的表4名称>"}]}]```
     * @example `[{"type":"db","name":"testdb1","newname":"testdb1_new","tables":[{"type":"table","name":"testdb1table1","newname":"testdb1table1_new"}]}]`
     */
    "TableMeta": string;
    /**
     * 是否开启极速库表恢复。取值：
     * * **true**：开启
     * * **false**：关闭
     * >关于极速库表恢复的更多信息，请参见[恢复库表](~~103175~~)。
     * @example `true`
     */
    "InstantRecovery"?: boolean;
}
