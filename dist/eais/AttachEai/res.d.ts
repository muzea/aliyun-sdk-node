export interface AttachEaiResponse {
    /**
     * 请求ID。
     * @example `C3BCB7DA-BEB6-4982-A765-6EA61EC8****`
     */
    RequestId: string;
    /**
     * EAIS实例ID。
     * @example `eais-sz8t15a7gt7z7j7i****`
     */
    ElasticAcceleratedInstanceId: string;
    /**
     * ECS或ECI实例ID。
     * @example `i-wz93g6pyat2g7t7o****`
     */
    ClientInstanceId: string;
}
