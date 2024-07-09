export interface SubmitSqlFlashbackTaskRequest {
    /**
     * DRDS实例ID。
     * @example `drds*********`
     */
    "DrdsInstanceId": string;
    /**
     * DRDS数据库名称。
     * @example `test`
     */
    "DbName": string;
    /**
     * 执行闪回SQL的开始时间。
     * @example `2019-09-10 20:23:23`
     */
    "StartTime": string;
    /**
     * 闪回SQL执行的结束时间。
     * @example `2019-09-10 23:23:23`
     */
    "EndTime": string;
    /**
     * 闪回SQL的Trace ID。
     * @example `ase*****`
     */
    "TraceId"?: string;
    /**
     * 执行闪回SQL操作的表名。
     * @example `test`
     */
    "TableName"?: string;
    /**
     * SQL的类型，取值范围为INSERT、UPDATE、DELETE，多种类型间用英文逗号（,）分隔。
     * @example `INSERT,UPDATE`
     */
    "SqlType"?: string;
    /**
     * 闪回SQL的主键。
     * @example `11111`
     */
    "SqlPk"?: string;
    /**
     * 精确匹配或者模糊匹配，取值范围如下：
     * * 0：精确匹配
     * * 1：模糊匹配
     * @example `0`
     */
    "RecallType"?: number;
    /**
     * 恢复类型，取值范围如下：
     * * 1：镜像恢复
     * * 0：逆向恢复
     * @example `0`
     */
    "RecallRestoreType": number;
}
