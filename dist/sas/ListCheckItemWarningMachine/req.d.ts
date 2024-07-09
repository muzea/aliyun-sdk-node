export interface ListCheckItemWarningMachineRequest {
    /**
     * 检查项ID。
     * @example `8`
     */
    "CheckId": number;
    /**
     * 检查项所属类别。
     * @example `cis`
     */
    "RiskType"?: string;
    /**
     * 检查项状态。默认为null。取值：
     * - 1：未通过
     * - 2：验证中
     * - 3：已通过
     * - 6：已忽略
     * - 7：修复中
     * @example `3`
     */
    "Status"?: number;
    /**
     * 机器模糊匹配。
     * @example `225`
     */
    "Remark"?: string;
    /**
     * 容器安全查询参数名称。
     * @example `clusterId`
     */
    "ContainerFieldName"?: string;
    /**
     * 容器安全查询参数值。
     * @example `ce89cdd0ea732472a8703821b19e****`
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
     * 设置从返回结果的第几页开始显示查询结果。起始值为**1**。默认值为**1**，表示从第**1**页开始显示。
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
     * 要查询的资产分组ID。
     * > 您可以调用[DescribeAllGroups](~~130972~~)接口获取该参数。
     * @example `1161****`
     */
    "GroupId"?: number;
    /**
     * 数据来源，为空时默认查询主机基线结果。取值：
     * - **default**：主机
     * - **agentless**：agentless
     * @example `agentless`
     */
    "Source"?: string;
    /**
     * 指定服务器UUID列表。
     */
    "UuidList"?: string[];
}
