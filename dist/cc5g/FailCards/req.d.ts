export interface FailCardsRequest {
    /**
     * 卡的iccid列表，最多200条。
     * @example `FailCards`
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
     * @example `TF-CreateServerlessDBInstance-1639649079-51d933f6-0251-4057-9276`
     */
    "ClientToken"?: string;
    /**
     * 是否只预检此次请求。取值：
     * - **true**：发送检查请求，不会激活/恢复卡状态。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后激活/恢复卡状态。
     * @example `false`
     */
    "DryRun"?: boolean;
}
