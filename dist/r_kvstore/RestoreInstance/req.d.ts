export interface RestoreInstanceRequest {
    /**
     * 实例ID。
     * @example `r-bp1zxszhcgatnx****`
     */
    "InstanceId": string;
    /**
     * 实例的备份文件ID。您可以调用[DescribeBackups](~~61081~~)查询。
     * @example `78241****`
     */
    "BackupId"?: string;
    /**
     * 恢复类型，取值：
     * * **0**：默认值，恢复指定的备份集。><danger>备份集的数据会覆盖当前数据库中所有数据，请谨慎操作。></danger>
     * * **1**：恢复至指定的时间点，仅当实例开启了[数据闪回](~~148479~~)功能时，您才可以传入该值。传入为该值时，您还需要传入**RestoreTime**参数。
     * @example `1`
     */
    "RestoreType"?: string;
    /**
     * 要恢复的时间点，格式为<i>yyyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
     * > * 当实例开启了[数据闪回](~~148479~~)后，您可以传入本参数和**FilterKey**参数实现将指定Key的数据恢复至某个时间点（秒级），其他的Key不受影响，可实现更精细化的数据恢复。
     * > * 传入本参数时，要求**RestoreType**参数传入的值为**1**。
     * @example `2021-07-06T07:25:57Z`
     */
    "RestoreTime"?: string;
    /**
     * 指定要恢复的Key，支持正则表达式，多个值使用英文逗号（,）分隔。
     * > * 例如正则表达式中，星号（`*`）表示匹配前面子表达式任意次，本参数传入`h.*llo`，系统将匹配`hllo`或`heeeello`等字符串。
     * > * 传入本参数时，要求**RestoreType**参数传入的值为**1**。
     * @example `key:00000007198*`
     */
    "FilterKey"?: string;
    /**
     * 对Key的过期时间进行偏移处理，格式为yyyy-MM-ddTHH:mmZ（UTC时间）。实例会将Key在指定闪回时间点所剩余的过期时长，偏移至设置的过期偏移时间点开始计算。
     * > 该时间点不能早于指定的闪回时间点，也不能晚于提交恢复任务的时间点。
     * @example `2021-07-06T08:25:57Z`
     */
    "TimeShift"?: string;
}
