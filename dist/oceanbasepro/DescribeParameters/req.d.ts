export interface DescribeParametersRequest {
    /**
     * OceanBase 集群 ID。
     * @example `ob317v4uif****`
     */
    "InstanceId": string;
    /**
     * 参数类型。
     * 当前支持集群（CLUSTER）和租户（TENANT）。
     * @example `TENANT`
     */
    "Dimension": string;
    /**
     * 参数类型的资源标识。
     * 如果为集群参数可以不填，若为租户的参数，则传入租户的 TenantId。
     * @example `ob2mr3oae0****`
     */
    "DimensionValue"?: string;
}
