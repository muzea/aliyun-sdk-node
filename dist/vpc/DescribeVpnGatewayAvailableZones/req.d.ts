export interface DescribeVpnGatewayAvailableZonesRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 带宽规格。
     * - 对于IPsec连接绑定VPN网关实例的场景，该参数表示VPN网关实例的带宽规格。
     * - 对于IPsec连接绑定转发路由器的场景，该参数表示您期望的IPsec连接可以支持的带宽规格。
     * 不同的带宽规格可能会影响查询出的可用区信息。取值：
     * - **5M**
     * - **10M**
     * - **20M**
     * - **50M**
     * - **100M**
     * - **200M**
     * - **500M**
     * - **1000M**
     * @example `5M`
     */
    "Spec": string;
    /**
     * 返回结果显示的语言。取值：
     * - **zh-CN**：中文。
     * - **en-US**（默认值）：英文。
     * @example `zh-CN`
     */
    "AcceptLanguage"?: string;
}
