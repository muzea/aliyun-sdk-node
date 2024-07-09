export interface DescribeExpressConnectRouterChildInstanceRequest {
    /**
     * 专线网关实例ID。
     * @example `ecr-mezk2idmsd0vx2****`
     */
    "EcrId": string;
    /**
     * 专线网关与VPC或TR的关联ID。
     * @example `ecr-assoc-9p2qxx5phpca2m****
    `
     */
    "AssociationId"?: string;
    /**
     * 待卸载的网络实例ID。
     * @example `vbr-j6cwxhgg0s5nuephp****`
     */
    "ChildInstanceId"?: string;
    /**
     * 网络实例的类型。取值：**VBR**：边界路由器实例。
     * @example `VBR`
     */
    "ChildInstanceType"?: string;
    /**
     * 网络实例所在的地域。
     * @example `cn-hangzhou`
     */
    "ChildInstanceRegionId"?: string;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 第一次查询和没有下一次查询时，均无需填写。
     * - 如果有下一次查询，取值为上一次 API 调用返回的 NextToken 值。
     * @example `AAAAAYws9fJ0Ur4MGm/5OkDoW/Zn0J0/sCjivzwX9oBcwFnWaaas/kSG+J/WzLOxJHS4****`
     */
    "NextToken"?: string;
    /**
     * 本次读取的最大数据量。取值范围：1~2147483647。默认值为20。
     * @example `20`
     */
    "MaxResults"?: number;
    /**
     * 是否只预检此次请求。取值：
     * - **true**：发送检查请求，不会修改服务资源。
     * - **false**（默认值）：发送正常请求。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `02fb3da4-130e-11e9-8e44-00****`
     */
    "ClientToken"?: string;
}
