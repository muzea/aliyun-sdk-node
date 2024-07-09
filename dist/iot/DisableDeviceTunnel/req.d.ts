export interface DisableDeviceTunnelRequest {
    /**
     * 实例ID：
     * - 企业版实例：必须传入此参数。您可在物联网平台控制台的**实例概览**页面，查看您的企业版实例ID。
     * - 公共实例：无需传入此参数。
     * @example `iot_instc_pu****_c*-v64********`
     */
    "IotInstanceId"?: string;
    /**
     * 网关所属产品的Key，产品的唯一标识符。
     * @example `a1Wmy******`
     */
    "ProductKey": string;
    /**
     * 网关的设备名称。
     * @example `LEGatewayAuto_B3XM******`
     */
    "DeviceName": string;
}
