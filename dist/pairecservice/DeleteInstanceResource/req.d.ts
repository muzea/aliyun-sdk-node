export interface DeleteInstanceResourceRequest {
    /**
     * 实例ID，可通过接口[ListInstances](~~2411819~~)获取。
     * @example `pairec-cn-test123`
     */
    "InstanceId": string;
    /**
     * 资源ID。
     * @example `reso-2s416t***`
     */
    "ResourceId": string;
}
