export interface SubmitSmoothExpandPreCheckRequest {
    /**
     * DRDS实例ID。
     * @example `drds*******`
     */
    "DrdsInstanceId": string;
    /**
     * DRDS数据库名称。
     * @example `test`
     */
    "DbName": string;
    /**
     * 数据库的类型，取值范围如下：
     * * RDS
     * * POLARDB
     * @example `RDS`
     */
    "DbInstType": string;
}
