export interface GetDatasourceTableRequest {
    /**
     * 实例ID，可从ListInstances获取。
     * @example `fs-cn-********`
     */
    "InstanceId": string;
    /**
     * 数据源ID，可从接口ListDatasources获取。
     * @example `3`
     */
    "DatasourceId": string;
    /**
     * 数据表名称。
     * @example `table1`
     */
    "TableName": string;
}
