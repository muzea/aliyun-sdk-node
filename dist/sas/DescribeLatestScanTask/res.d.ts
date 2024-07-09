export interface DescribeLatestScanTaskResponse {
    /**
     * 病毒扫描任务扫描的资产信息。该参数使用JSON数组转化的字符串格式表示。包含以下字段：
     * - **type**：执行病毒扫描的资产类型。取值：
     *     - **groupId**：服务器分组。
     *     - **uuid**：服务器。
     * - **name**：服务器分组名称或服务器的名称。
     * - **target**：执行病毒扫描的资产。以下是该字段的取值说明：
     *     - **type**的值为**groupId**时，该字段为服务器分组ID。
     *     - **type**的值为**uuid**时，该字段为服务器的UUID。
     * @example `[{"type":"uuid","name":"Host001","target":"503201a7-14c6-4280-801b-1169ed42****"}]`
     */
    TargetInfo: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `7E0618A9-D5EF-4220-9471-C42XXXXXXXX`
     */
    RequestId: string;
    /**
     * 最新检测时间戳，单位为毫秒。
     * @example `1671610264000`
     */
    LastCheckTime: number;
    /**
     * 服务器存在的病毒检测风险数量。
     * @example `1`
     */
    RiskNum: number;
    /**
     * 资产的id。
     */
    Uuids: string[];
}
