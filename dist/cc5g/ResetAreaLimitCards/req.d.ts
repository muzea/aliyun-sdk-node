export interface ResetAreaLimitCardsRequest {
    /**
     * 物联网SIM卡卡号，每次最大50条
     */
    "Iccids": string[];
    /**
     * 地域ID
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 保证请求幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**可能不一样。
     * @example `TF-******-1633255280-43c94bf7-2dd3-4c14-8`
     */
    "ClientToken"?: string;
    /**
     * 是否只预检此次请求。取值：
     * - **true**：发送检查请求，不会创建批量操作卡任务。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查直接创建批量操作卡任务。
     * @example `true`
     */
    "DryRun"?: boolean;
    /**
     * 省份。
     * @example `湖南省`
     */
    "Province": string;
}
