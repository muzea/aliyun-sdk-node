export interface ListCheckTypesRequest {
    /**
     * 基线的ID。
     * > 您可调用[DescribeCheckWarningSummary](~~116179~~)接口获取基线ID。
     * @example `34`
     */
    "RiskId"?: number;
    /**
     * 设置请求和接收消息的语言类型，默认为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 设置从返回结果的第几页开始显示查询结果。默认值为**1**，表示从第1页开始显示。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 指定分页查询时，每页显示的数据最大条数。每页默认显示的数据条数为20条，PageSize参数值为空时，将默认返回20条数据。
     * > 建议PageSize取值不要为空。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 指定的服务器的UUID。
     * >调用[DescribeCloudCenterInstances](~~DescribeCloudCenterInstances~~)接口可以获取该参数。
     * @example `293b07cb-db2d-4f39-941f-b2e4abb8****`
     */
    "Uuid"?: string;
    /**
     * 是否查询检查项列表，默认为false。取值：
     * - **false**：不查询
     * - **true**：查询
     * @example `true`
     */
    "ShowChecks"?: boolean;
    /**
     * 数据的来源。取值：
     * - **default**：主机基线
     * - **agentless**：无代理检测基线
     * @example `agentless`
     */
    "Source"?: string;
}
