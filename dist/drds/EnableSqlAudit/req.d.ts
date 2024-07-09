export interface EnableSqlAuditRequest {
    /**
     * DRDS实例ID。
     * @example `drds***********`
     */
    "DrdsInstanceId": string;
    /**
     * 开启SQL审计的数据库名称。
     * @example `test`
     */
    "DbName": string;
    /**
     * 是否回溯历史SQL进行审计。
     * @example `true`
     */
    "IsRecall"?: boolean;
    /**
     * 回溯开始时间，格式为时间戳（单位为毫秒）。
     * @example `1568875132000`
     */
    "RecallStartTimestamp"?: string;
    /**
     * 回溯结束时间，格式为时间戳（单位为毫秒）。
     * >回溯结束时间需晚于开始时间。
     * @example `1568875132000`
     */
    "RecallEndTimestamp"?: string;
}
