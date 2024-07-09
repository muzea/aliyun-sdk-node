export interface CreateEaiEcsResponse {
    /**
     * 请求ID。
     * @example `F5FEB9AA-C108-577C-AB3D-D13524AF****`
     */
    RequestId: string;
    /**
     * EAIS实例ID。
     * @example `eais-sz8t15a7gt7z7j7i****`
     */
    ElasticAcceleratedInstanceId: string;
    /**
     * ECS实例ID。
     * @example `i-bp1hjrvleawl4ogb****`
     */
    ClientInstanceId: string;
}
