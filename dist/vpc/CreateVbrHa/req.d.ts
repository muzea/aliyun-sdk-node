export interface CreateVbrHaRequest {
    /**
     * VBR倒换组的描述信息。
     * 长度为 2～256个字符，必须以字母或中文开头，但不能以`http://` 或`https://`开头。
     * @example `VBRHa`
     */
    "Description"?: string;
    /**
     * VBR倒换组名称。
     * @example `VBRHa`
     */
    "Name"?: string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `CBCE910E-D396-4944-8****`
     */
    "ClientToken"?: string;
    /**
     * 是否只预检此次请求。取值范围：
     * - **true**：发送检查请求，不会启动实例。检查项包括是否填写了必需参数、请求格式、实例状态。如果检查不通过，则返回对应错误。如果检查通过，则返回`DRYRUN.SUCCESS`。
     * - **false**（默认值）：发送正常请求，通过检查后直接启动实例。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * VBR实例ID。
     * @example `vbr-bp1jcg5cmxjbl9xgc****`
     */
    "VbrId": string;
    /**
     * VBR倒换组中另一个VBR的实例ID。
     * @example `vbr-bp12mw1f8k3jgygk9****`
     */
    "PeerVbrId": string;
    /**
     * VBR所属的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}
