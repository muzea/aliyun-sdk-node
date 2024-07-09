export interface DescribeFailoverTestJobsRequest {
    /**
     * 故障演练任务所在的地域。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 第一次查询和没有下一次查询时，均无需填写。
     * - 如果有下一次查询，取值为上一次API调用返回的NextToken值。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    "NextToken"?: string;
    /**
     * 分批次查询时每次显示的条目数。取值范围：**1~100**，默认值为20。
     * @example `20`
     */
    "MaxResults"?: number;
    /**
     * 过滤信息。
     */
    "Filter"?: {
        /**
         * 过滤条件。取值：
         * - **JobId**：故障演练任务ID。
         * - **JobName**：故障演练任务名称。
         * - **JobStatus**：故障演练任务状态。
         * - **ResourceId**：故障演练资源ID。
         * - **ResourceName**：故障演练资源名称。
         * - **ResourceType**：故障演练资源类型。
         * > 请确保最多输入5个不重复的过滤条件。当输入资源ID或资源名称时，需同时输入资源类型。所有过滤条件需同时满足才能得到准确的查询结果。
         * @example `JobId`
         */
        Key: string;
        /**
         * 过滤条件对应的过滤值。
         * > 请确保每个过滤条件可以包含最多5个过滤值。这些过滤值之间采用"或"的关系，即只需满足其中任一过滤值，即可认为符合该过滤条件。
         */
        Value: string[];
    }[];
}
