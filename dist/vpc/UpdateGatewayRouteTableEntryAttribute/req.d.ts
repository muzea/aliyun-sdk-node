export interface UpdateGatewayRouteTableEntryAttributeRequest {
    /**
     * 要修改的网关路由表所在地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `ap-southeast-6`
     */
    "RegionId": string;
    /**
     * 要修改的网关路由表ID。
     * @example `vtb-5ts0ohchwkp3dydt2****`
     */
    "IPv4GatewayRouteTableId"?: string;
    /**
     * 要修改的网关路由表ID。
     * @example `vtb-5ts0ohchwkp3dydt2****`
     */
    "GatewayRouteTableId"?: string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 是否只预检此次请求。取值：
     * - **true**：发送检查请求，不会修改网关路由表。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后返回HTTP 2xx状态码并直接修改网关路由表。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 网关路由表的路由条目的目标网段。
     * @example `47.100.XX.XX/16`
     */
    "DestinationCidrBlock": string;
    /**
     * 要修改的路由条目下一跳类型。取值：
     * - **Instance**：ECS实例。
     * - **NetworkInterface**：弹性网卡实例。
     * - **Local**：本地。
     * @example `Instance`
     */
    "NextHopType": string;
    /**
     * 要修改的下一跳的实例ID。
     * - 当**NextHopType**取值为**Instance**时，**NextHopId**为ECS实例ID。
     * - 当**NextHopType**取值为**NetworkInterface**时，**NextHopId**为弹性网卡实例ID。
     * - 当**NextHopType**取值为**Local**时，**NextHopId**为空，表示本地。
     * > 当路由条目的下一跳类型为**Instance**或**NetworkInterface**时需要修改下一跳，您需要先将**NextHopType**修改为**Local**，然后再将**NextHopType**修改为**Instance**或**NetworkInterface**之后修改具体的**NextHopId**。当下一跳类型为弹性网卡或ECS实例时，不支持直接修改下一跳为其他的弹性网卡或ECS实例。
     * @example `i-bp18xq9yguxoxe7m****`
     */
    "NextHopId"?: string;
    /**
     * 网关路由表的名称。
     * 长度为2～128个字符，必须以字母或中文开头，可包含数字、半角句号（.）、下划线（_）和短划线（-）。
     * @example `test`
     */
    "Name"?: string;
    /**
     * 网关路由表的描述信息。
     * 长度为2～256个字符，必须以字母或中文开头，但不能以`http://`或`https://`开头。
     * @example `new`
     */
    "Description"?: string;
}
