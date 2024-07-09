export interface DescribeCharsetRequest {
    /**
     * 租户模式。
     * 当前支持 Oracle 模式（Oracle）、MySQL模式（MySQL）。
     * 详情参见：DescribeInstanceTenantModes。
     * @example `Oracle`
     */
    "TenantMode": string;
    /**
     * 实例的系列  - normal（默认）：标准集群版（云盘）  - normal_ssd：标准集群版（本地盘） - history：历史库集群版。
     * @example `normal`
     */
    "Series"?: string;
    /**
     * OceanBase 集群 ID。
     * @example `ob317v4uif****`
     */
    "InstanceId"?: string;
}
