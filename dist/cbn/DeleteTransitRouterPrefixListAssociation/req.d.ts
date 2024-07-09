export interface DeleteTransitRouterPrefixListAssociationRequest {
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**可能不一样。
     * @example `123e4567-e89b-12d3-a456-4266****`
     */
    "ClientToken"?: string;
    /**
     * 转发路由器实例所属的地域ID。
     * 您可以通过调用[DescribeChildInstanceRegions](~~132080~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 转发路由器实例ID。
     * @example `tr-6ehx7q2jze8ch5ji0****`
     */
    "TransitRouterId": string;
    /**
     * 前缀列表ID。
     * @example `pl-6ehtn5kqxgeyy08fi****`
     */
    "PrefixListId": string;
    /**
     * 转发路由器路由表ID。
     * @example `vtb-6ehgc262hr170qgyc****`
     */
    "TransitRouterTableId": string;
    /**
     * 下一跳连接ID。
     * > 如果**NextHopType**的取值为**BlackHole**，本参数需输入**BlackHole**。
     * @example `tr-attach-flbq507rg2ckrj****`
     */
    "NextHop": string;
    /**
     * 下一跳类型。取值：
     * - **BlackHole**：表示前缀列表下的网段均为黑洞路由，所有去往前缀列表下网段的流量均会被丢弃。
     * - **VPC**：表示前缀列表下网段的下一跳为专有网络VPC（Virtual Private Cloud）连接。
     * - **VBR**：表示前缀列表下网段的下一跳为边界路由器VBR（Virtual Border Router）连接。
     * - **TR**：表示前缀列表下网段的下一跳为跨地域连接。
     * @example `VPC`
     */
    "NextHopType"?: string;
    /**
     * 是否只预检此次请求。取值：
     * - **true**：发送检查请求，不会解除绑定关系。检查项包括是否填写了必需参数、请求格式、业务限制等。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后直接解除绑定关系。
     * @example `false`
     */
    "DryRun"?: boolean;
}
