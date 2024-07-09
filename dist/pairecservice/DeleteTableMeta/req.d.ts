export interface DeleteTableMetaRequest {
    /**
     * 数据表ID。
     * @example `2`
     */
    "TableMetaId": string;
    /**
     * 实例ID，可通过接口[ListInstances](~~2411819~~)获取。
     * @example `实例ID	pairec-cn-test1`
     */
    "InstanceId": string;
}
