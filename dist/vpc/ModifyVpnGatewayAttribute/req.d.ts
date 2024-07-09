export interface ModifyVpnGatewayAttributeRequest {
    /**
     * VPN网关实例所在的地域ID。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的RequestId作为ClientToken标识。每次API请求的RequestId不一样。
     * @example `123e4567-e89b-12d3-a456-4266****`
     */
    "ClientToken"?: string;
    /**
     *  VPN网关实例的ID。
     * @example `vpn-bp1q8bgx4xnkm2ogj****`
     */
    "VpnGatewayId": string;
    /**
     * VPN网关的新名称。
     * 长度为2～100个字符，不能以`http://`或`https://`开头，需要以大写或小写字母开头，后面可包含大小写字母、数字、下划线（_）、短划线（-）和半角句号（.），不支持其他特殊字符。
     * @example `myvpn`
     */
    "Name"?: string;
    /**
     * VPN网关新的描述信息。
     *
     * 描述信息长度为1～100个字符，不能以`http://`或`https://`开头。
     * @example `test`
     */
    "Description"?: string;
    /**
     * 是否将BGP路由自动传播到VPC。取值：
     * - **true**：自动传播。
     * - **false**：不自动传播。
     * @example `true`
     */
    "AutoPropagate"?: boolean;
}
