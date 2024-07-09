export interface DetectApplicationMonitorRequest {
    /**
     * 全球加速实例所属的地域，仅取值：**cn-hangzhou**。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 需要开启诊断的源站探测任务ID。
     * @example `2c8dbdf9-a3ab-46a1-85a4-f094965e****`
     */
    "TaskId": string;
}
