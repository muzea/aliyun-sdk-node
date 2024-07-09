export interface GetInstanceResourceTableRequest {
    /**
     * 实例ID，可通过接口[ListInstances](~~2411819~~)获取。
     * @example `pairec-cn-test1`
     */
    "InstanceId": string;
    /**
     * 资源ID。
     * @example `reso-2s416t***`
     */
    "ResourceId": string;
    /**
     * 表名称过滤。
     * @example `test_table`
     */
    "TableName": string;
}
