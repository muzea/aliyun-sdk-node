export interface DescribeWarningMachinesRequest {
    /**
     * 访问源的IP地址。
     * @example `1.2.XX.XX`
     */
    "SourceIp"?: string;
    /**
     * 设置请求和接收消息的语言类型，默认为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 执行基线检查的服务器的名称。
     * @example `oracle-win-001****`
     */
    "MachineName"?: string;
    /**
     * 执行基线检查的服务器ID。多个ID之间使用半角逗号（,）分隔。
     * @example `9888955c-0076-49da-bd9c-34f5492b****`
     */
    "Uuids"?: string;
    /**
     * 风险项的ID。
     * > 您可调用[DescribeCheckWarningSummary](~~DescribeCheckWarningSummary~~)接口获取风险项ID。
     * @example `196`
     */
    "RiskId": number;
    /**
     * 基线检查策略的ID。
     * @example `16`
     */
    "StrategyId"?: number;
    /**
     * 设置分页查询时，每页显示的服务器信息的数量。默认值为**10**，表示每页显示10条服务器信息，最大不超过100。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 设置从返回结果的第几页开始显示查询结果。默认值为**1**，表示从第1页开始显示。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 指定要查询的容器集群的ID。
     * > 您可以调用[DescribeGroupedContainerInstances](~~DescribeGroupedContainerInstances~~)接口获取该参数。
     * @example `c7e3c5b420a7947c2933303144688****`
     */
    "ClusterId"?: string;
    /**
     * 容器检索字段。取值：
     * - **CONTAINER_ID**：容器ID。
     * - **IMAGE**：镜像名称。
     * - **NAMESPACE**：命名空间。
     * - **NODE_NAME**：节点名称。
     * - **POD_IP**：pod地址。
     * - **HOST_IP**：主机地址。
     * - **INSTANCE_ID**：实例ID。
     * @example `containerId`
     */
    "ContainerFieldName"?: string;
    /**
     * 查询容器检索的值。
     * @example `c8bb3ef0f5ccf45508f0fd1ffc200****`
     */
    "ContainerFieldValue"?: string;
    /**
     * 查询类型。取值：
     * - **containerId**：容器ID
     * - **uuid**：资产ID
     * @example `uuid`
     */
    "TargetType"?: string;
    /**
     * 是否存在风险。取值：
     * - **1**：有风险。
     * - **0**：无风险。
     * @example `1`
     */
    "HaveRisk"?: number;
    /**
     * 要查询的资产分组ID。
     * > 您可以调用[DescribeAllGroups](~~130972~~)接口获取该参数。
     * @example `123`
     */
    "GroupId"?: number;
}
