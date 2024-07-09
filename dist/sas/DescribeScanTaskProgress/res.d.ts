export interface DescribeScanTaskProgressResponse {
    /**
     * 病毒扫描任务扫描的资产信息。该参数使用JSON数组转化的字符串格式表示。包含以下字段：
     * - **type**：执行病毒扫描的资产类型。取值：
     *     - **groupId**：服务器分组。
     *     - **uuid**：服务器。
     * - **name**：服务器分组名称或服务器的名称。
     * - **target**：执行病毒扫描的资产。以下是该字段的取值说明：
     *     - **type**的值为**groupId**时，该字段为服务器分组ID。
     *     - **type**的值为**uuid**时，该字段为服务器的UUID。
     * @example `[{"type":"uuid","name":"host001","target":"503201a7-14c6-4280-801b-1169ed42****"}]`
     */
    TargetInfo: string;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `EA15BA8A-D631-4375-8D40-CB7C769B0279`
     */
    RequestId: string;
    /**
     * 病毒扫描任务的进度。取值：
     * - **init**：扫描任务初始化中。
     * - **Processing**：扫描任务进行中。
     * - **Success**：扫描任务已完成。
     * - **Failed**：扫描任务执行失败。
     * @example `Success`
     */
    ScanTaskProgress: string;
}
