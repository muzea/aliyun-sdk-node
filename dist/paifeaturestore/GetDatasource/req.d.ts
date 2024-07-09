export interface GetDatasourceRequest {
    /**
     * 实例ID，可通过接口ListInstances获取。
     * @example `fs-********`
     */
    "InstanceId": string;
    /**
     * 数据源ID，可通过接口ListDatasources获取。
     * @example `datasource1`
     */
    "DatasourceId": string;
}
