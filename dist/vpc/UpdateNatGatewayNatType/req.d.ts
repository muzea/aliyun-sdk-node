export interface UpdateNatGatewayNatTypeRequest {
    /**
     * 要升级的普通型公网NAT网关所属的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-qingdao`
     */
    "RegionId": string;
    /**
     * 要升级的普通型公网NAT网关实例ID。
     * @example `ngw-bp1b0lic8uz4r6vf2****`
     */
    "NatGatewayId": string;
    /**
     * 升级后增强型公网NAT网关所属的交换机。
     * >如果不设置该参数，系统会随机将增强型公网NAT网关创建在VPC内的任意一台交换机。
     * @example `vsw-bp17nszybg8epodke****`
     */
    "VSwitchId": string;
    /**
     * 公网NAT网关类型。取值：**Enhanced**，表示增强型公网NAT网关。
     * @example `Enhanced`
     */
    "NatType": string;
    /**
     * 是否只预检此次请求，取值：
     * **true**：发送请求，不会升级公网NAT网关类型。检查项包括AccessKey是否有效、RAM用户的授权情况和是否填写了必需参数。如果检查不通过，则返回对应错误。如果检查通过，会返回错误码`DryRunOperation`。
     * **false**（默认值）：发送正常请求，通过检查后返回2xx HTTP状态码并直接升级公网NAT网关类型。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**可能不一样。
     * @example `0c593ea1-3bea-11e9-b96b-88e9fe637760`
     */
    "ClientToken"?: string;
}
