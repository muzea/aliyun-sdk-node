export interface DescribeRestoreTaskListRequest {
    /**
     * 备份计划ID。
     * > 请填入本参数BackupPlanId或RestoreTaskId。
     * @example `dbs1hvb0wwwXXXXX`
     */
    "BackupPlanId"?: string;
    /**
     * 恢复任务ID，支持多个查询，使用半角逗号（,）分隔。您可以调用[CreateRestoreTask](~~437226~~)接口获取该参数。
     * > 请填入本参数RestoreTaskId或BackupPlanId，同时填入时会导致报错。
     * @example `s102h7rf5anq`
     */
    "RestoreTaskId"?: string;
    /**
     * 每页的记录数，取值为1~100。
     * > 默认为30。
     * @example `30`
     */
    "PageSize"?: number;
    /**
     * 页码，大于等于0且不超过Integer的最大值，默认值为：0。
     * @example `1`
     */
    "PageNum"?: number;
    /**
     * 用于保证请求的幂等性，防止重复提交请求。
     * @example `ETnLKlblzczshOTUbOCzxxxxxxx`
     */
    "ClientToken"?: string;
    /**
     * 开始备份时间。
     * @example `1570701361528`
     */
    "StartTimestamp"?: number;
    /**
     * 结束备份时间。
     * @example `1570701361528`
     */
    "EndTimestamp"?: number;
}
