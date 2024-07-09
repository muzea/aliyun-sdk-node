export interface DescribeContainerCriteriaRequest {
    /**
     * 检索项。取值：
     * - **pod**：pod。
     * - **appName**：应用名称。
     * - **clusterId**：集群编号。
     * - **namespace**：命名空间。
     * - **image**：镜像。
     * - **containerScan**：容器扫描。
     * @example `clusterId`
     */
    "GroupField"?: string;
    /**
     * 检索项对应值。支持应用名称、节点名称、命名空间、集群名称、公网IP、Pod地址、地域、Pod、实例ID、集群ID、容器ID模糊搜索。
     * @example `cfb41a869c71e4678a97021582dd8a****`
     */
    "Value"?: string;
}
