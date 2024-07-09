export interface UpdateTransitRouterVbrAttachmentAttributeRequest {
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `02fb3da4-130e-11e9-8e44-001****`
     */
    "ClientToken"?: string;
    /**
     * VBR连接ID。
     * @example `tr-attach-oyf70wfuorwx87****`
     */
    "TransitRouterAttachmentId": string;
    /**
     * VBR连接的新名称。
     * 名称可以为空或长度为1～128个字符，不能以http://或https://开头。
     * @example `testname`
     */
    "TransitRouterAttachmentName"?: string;
    /**
     * VBR连接新的描述信息。
     * 描述可以为空或长度为1～256个字符，不能以http://或https://开头。
     * @example `testdesc`
     */
    "TransitRouterAttachmentDescription"?: string;
    /**
     * 是否允许企业版转发路由器向VBR实例中自动发布路由。取值：
     * - **true**：允许。
     * - **false**：禁止。
     * @example `true`
     */
    "AutoPublishRouteEnabled"?: boolean;
    /**
     * 是否对此次请求执行预检，包括权限、实例状态校验等。取值：
     * - **false**（默认值）：发送正常请求，通过检查后直接修改VBR连接的名称和描述信息。
     * - **true**：发送检查请求，只进行校验，不会修改VBR连接的配置信息。检查项包括是否填写了必需参数、请求格式等。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * @example `false`
     */
    "DryRun"?: boolean;
}
