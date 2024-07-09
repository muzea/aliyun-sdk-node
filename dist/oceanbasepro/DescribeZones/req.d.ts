export interface DescribeZonesRequest {
    /**
     * OceanBase 集群系列。
     * NORMAL（默认）：高可用版本。
     * @example `NORMAL`
     */
    "Series"?: string;
    /**
     * 集群的部署类型。
     * - multiple：多机房。
     * - single：单机房。
     * - dual：双机房。
     * @example `single`
     */
    "DeployType"?: string;
    /**
     * cpu架构
     * @example `x86`
     */
    "CpuArch"?: string;
}
