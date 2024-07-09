export interface DeleteDatasourceRequest {
    /**
     * 实例ID，可通过接口ListInstances获取。
     * @example `fs-cn-********`
     */
    "InstanceId": string;
    /**
     * 数据源ID，可通过接口ListDatasources获取。
     * @example `3`
     */
    "DatasourceId": string;
}
