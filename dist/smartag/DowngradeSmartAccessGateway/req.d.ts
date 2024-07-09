export interface DowngradeSmartAccessGatewayRequest {
    /**
     * 智能接入网关实例ID。
     * @example `sag-nylv14tghsk26c*****`
     */
    "SmartAGId": string;
    /**
     * 智能接入网关的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 智能接入网关的带宽。
     *
     * - 如果网关设备规格为**SAG-100wm**，带宽取值：**2~50Mbps**。
     *
     * - 如果网关设备规格为**SAG-1000**，带宽取值：**10~500Mbps**。
     * @example `20`
     */
    "BandWidthSpec"?: number;
    /**
     * 是否是自动支付预付费实例的账单。取值：
     * - **true**：是。
     * - **false**（默认值）：不是。
     * @example `true`
     */
    "AutoPay": boolean;
}
