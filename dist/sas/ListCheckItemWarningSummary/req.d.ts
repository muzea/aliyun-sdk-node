export interface ListCheckItemWarningSummaryRequest {
    /**
     * 基线分类名称。
     * @example `weak_password`
     */
    "RiskType"?: string;
    /**
     * 检查项分类名称。
     * @example `hc.check.type.attack_defense`
     */
    "CheckType"?: string;
    /**
     * 风险状态。默认为null，查询全部状态。取值：
     * - **1**：未通过
     * - **3**：已通过
     * @example `3`
     */
    "CheckWarningStatus"?: number;
    /**
     * 风险等级。默认为null，查询所有等级。取值：
     * - **high**：高危
     * - **medium**：中危
     * - **low**：低危
     * @example `medium`
     */
    "CheckLevel"?: string;
    /**
     * 检查项名称模糊匹配。
     * @example `password`
     */
    "CheckItemFuzzy"?: string;
    /**
     * 容器安全查询参数名称。
     * @example `clusterId`
     */
    "ContainerFieldName"?: string;
    /**
     * 容器安全查询参数值。
     * @example `c471f0f61b9c04f8380556e922cf1****`
     */
    "ContainerFieldValue"?: string;
    /**
     * 请求和接收消息的语言类型。默认值为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 设置从返回结果的第几页开始显示查询结果。默认值为**1**，表示从第1页开始显示。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 分页查询时，每页显示的数据最大条数。每页默认显示的数据条数为20条，PageSize参数值为空时，将默认返回20条数据。
     * > 建议PageSize取值不要为空。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 要查询的资产分组ID。
     * > 您可以调用[DescribeAllGroups](~~DescribeAllGroups~~)接口获取该参数。
     * @example `1161****`
     */
    "GroupId"?: number;
    /**
     * 数据来源。默认值为**default**。取值：
     * - **agentless**：无代理检测
     * - **default**：主机基线
     * @example `agentless`
     */
    "Source"?: string;
    /**
     * 指定要查询的服务器UUID列表。
     * > 您可以调用[DescribeCloudCenterInstances](~~141932~~)接口获取服务器的UUID。
     */
    "UuidList"?: string[];
}
