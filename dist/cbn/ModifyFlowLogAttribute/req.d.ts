export interface ModifyFlowLogAttributeRequest {
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的RequestId作为ClientToken标识。每次API请求的RequestId可能不一样。
     * @example `123e4567-e89b-12d3-a456-42665544****`
     */
    "ClientToken"?: string;
    /**
     * 流日志的新名称。
     * 名称可以为空或长度为1～128个字符，不能以http://或https://开头。
     * @example `myFlowlog`
     */
    "FlowLogName"?: string;
    /**
     * 流日志新的描述信息。
     * 描述可以为空或长度为1～256个字符，不能以http://或https://开头。
     * @example `myFlowlog`
     */
    "Description"?: string;
    /**
     * 流日志所属的地域ID。
     * 您可以通过调用[DescribeChildInstanceRegions](~~132080~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 流日志ID。
     * @example `flowlog-m5evbtbpt****`
     */
    "FlowLogId": string;
    /**
     * 云企业网实例ID。
     * @example `cen-7qthudw0ll6jmc****`
     */
    "CenId": string;
}
