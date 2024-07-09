export interface ModifyDataSourceRequest {
    /**
     * 实例ID。
     * @example `airec-cn-o400whm78004`
     */
    "instanceId": string;
    /**
     * 要修改数据源的数据表名称。
     * @example `behavior`
     */
    "tableName"?: string;
}
