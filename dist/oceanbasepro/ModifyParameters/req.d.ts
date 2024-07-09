export interface ModifyParametersRequest {
    /**
     * OceanBase 集群 ID。
     * @example `ob317v4uif****`
     */
    "InstanceId": string;
    /**
     * 参数类型的资源标识。
     * 如为集群参数可不填，如为租户的参数，则传入租户的 TenantId。
     * @example `t4qx8****`
     */
    "DimensionValue"?: string;
    /**
     * 参数类型。
     * 当前支持集群（CLUSTER）和租户（TENANT）。
     * @example `TENANT`
     */
    "Dimension": string;
    /**
     * 参数信息。
     * 其为一个 JSON 格式的数组，数组中每个对象包括两个元素：参数名称（Name）和参数值（Value）。
     * > <br>集群和租户可修改的参数名称和参数值的范围不同，详见 DescribeParameters。
     * @example `[{"Name":"connect_timeout","Value":"20"}]`
     */
    "Parameters": string;
}
