export interface DescribeCheckWarningSummaryRequest {
    /**
     * 访问源IP地址。
     * @example `219.133.XX.XX`
     */
    "SourceIp"?: string;
    /**
     * 请求和接收消息的语言类型。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 基线一级类型。
     * > 调用[DescribeRiskType](~~DescribeRiskType~~)接口获取该参数。
     * @example `database`
     */
    "TypeName"?: string;
    /**
     * 检查项状态。取值：
     * - **1**：未通过
     * - **2**：验证中
     * - **3**：已通过
     * - **5**：已失效
     * - **6**：已忽略
     * @example `1`
     */
    "Status"?: string;
    /**
     * 基线检查的状态。取值：
     * - **1**：未通过
     * - **3**：已通过
     * @example `1`
     */
    "RiskStatus"?: number;
    /**
     * 基线检查风险项名称。
     * @example `Redis`
     */
    "RiskName"?: string;
    /**
     * 基线检查策略ID。
     * @example `1`
     */
    "StrategyId"?: number;
    /**
     * 资产UUID。
     * > 调用[DescribeCloudCenterInstances](~~DescribeCloudCenterInstances~~)接口获取该参数。
     * @example `f03259d8-1e81-4fae-bcbb-275fb5****`
     */
    "Uuids"?: string;
    /**
     * 分页查询时，显示的每页数据的最大条数。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 分页查询时的页码。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 指定要查询的容器集群的ID。
     * > 您可以调用[DescribeGroupedContainerInstances](~~DescribeGroupedContainerInstances~~)接口获取该参数。
     * @example `c80dae73bd1be442699766b14ffd0****`
     */
    "ClusterId"?: string;
    /**
     * 容器字段。取值：
     * - **clusterId**：集群编号
     * - **image**：镜像名称
     * - **imageId**：镜像编号
     * - **namespace**：命名空间
     * @example `namespace`
     */
    "ContainerFieldName"?: string;
    /**
     * 容器字段对应值。
     * @example `c819391d2d520485fa3e81e2dc2ea****`
     */
    "ContainerFieldValue"?: string;
    /**
     * 查询类型。取值：
     * - **uuid**：资产ID
     * @example `uuid`
     */
    "TargetType"?: string;
    /**
     * 指定查询的服务器的分组ID。
     * > 您可调用[DescribeAllGroups](~~DescribeAllGroups~~)接口获取服务器的分组ID。
     * @example `123`
     */
    "GroupId"?: number;
}
