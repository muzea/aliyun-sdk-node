export interface DeleteVbrHaRequest {
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `CBCE910E-D396-4944-8****`
     */
    "ClientToken"?: string;
    /**
     * VBR倒换组实例ID。
     * @example `vbrha-sa1******`
     */
    "InstanceId": string;
    /**
     * VBR所属的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}
