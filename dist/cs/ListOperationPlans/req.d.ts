export interface ListOperationPlansRequest {
    /**
     * 集群ID。
     * @example `c29ced64b3dfe4f33b57ca0aa9f68****`
     */
    "cluster_id"?: string;
    /**
     * 执行计划类型。
     * @example `cluster_upgrade`
     */
    "type"?: string;
}
