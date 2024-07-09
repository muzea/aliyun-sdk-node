export interface RemoveDrdsDbRequest {
    /**
     * 目标数据库所属的DRDS实例ID。
     * @example `drds************`
     */
    "DrdsInstanceId": string;
    /**
     * 目标数据库名称。
     * @example `test`
     */
    "DbName": string;
}
