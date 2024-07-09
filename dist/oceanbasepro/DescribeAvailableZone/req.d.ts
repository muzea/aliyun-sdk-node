export interface DescribeAvailableZoneRequest {
    /**
     * 实例类型。
     * @example `cluster`
     */
    "InstanceType": string;
    /**
     * 系列。
     * @example `normal`
     */
    "Series"?: string;
    /**
     * 部署方案。
     * @example `multiple`
     */
    "DeployType"?: string;
    /**
     * 节点规划。
     * @example `oceanbase.cluster.cd8.xlarge`
     */
    "Spec"?: string;
    /**
     * OceanBase 版本号。
     * @example `3.2.4.4`
     */
    "ObVersion"?: string;
    /**
     * cpu架构
     * @example `x86`
     */
    "CpuArch"?: string;
}
