export interface ListTransitRouterCidrAllocationRequest {
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `123e4567-e89b-12d3-a456-426****`
     */
    "ClientToken"?: string;
    /**
     * 转发路由器实例ID。
     * @example `tr-p0w3x8c9em72a40nw****`
     */
    "TransitRouterId": string;
    /**
     * 转发路由器实例所属的地域ID。
     * 您可以通过调用[DescribeChildInstanceRegions](~~132080~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 转发路由器地址段ID。
     * 您可以通过调用[ListTransitRouterCidr](~~462772~~)接口查询转发路由器地址段ID。
     * @example `cidr-0zv0q9crqpntzz****`
     */
    "TransitRouterCidrId"?: string;
    /**
     * 转发路由器地址段下已分配地址的网段。
     * @example `192.168.10.0/28`
     */
    "CidrBlock"?: string;
    /**
     * 转发路由器地址段。
     * @example `192.168.10.0/24`
     */
    "Cidr"?: string;
    /**
     * 专用网段。
     * 仅取值：**VPN**，表示您要查询系统保留的用于系统后台创建VPN连接的网段。
     * @example `VPN`
     */
    "DedicatedOwnerId"?: string;
    /**
     * 网络实例连接ID。
     * @example `tr-attach-2nalp6yksc805w****`
     */
    "AttachmentId"?: string;
    /**
     * 网络实例连接的名称。
     * @example `nametest`
     */
    "AttachmentName"?: string;
    /**
     * 是否只预检此次请求。取值：
     * - **true**：发送检查请求，不会开始查询转发路由器地址段分配详情。检查项包括是否填写了必需参数、请求格式、业务限制等。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后直接查询转发路由器地址段分配详情。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 分批次查询时每次显示的条目数。
     * - 如果您不指定**MaxResults**参数的值，则表示您不需要分批次查询。调用该接口后返回参数**MaxResults**的值表示列表条目总数。
     * - 如果您指定**MaxResults**参数的值，则表示您需要分批次查询。取值范围：**1**~**100**。建议指定**MaxResults**参数的值为**20**。
     *   调用该接口后返回参数**MaxResults**的值表示当前查询批次下列表条目的数量。
     * @example `20`
     */
    "MaxResults"?: number;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 第一次查询和没有下一次查询时，均无需填写。
     * - 如果有下一次查询，取值为上一次API调用返回的**NextToken**值。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    "NextToken"?: string;
}
