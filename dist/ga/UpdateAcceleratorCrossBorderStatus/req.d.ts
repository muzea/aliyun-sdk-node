export interface UpdateAcceleratorCrossBorderStatusRequest {
    /**
     * 全球加速实例所在的地域ID，仅取值**cn-hangzhou**。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**可能不一样。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 全球加速实例ID。
     * > 该全球加速实例需为按流量的带宽计费方式。
     * @example `ga-bp1odcab8tmno0hdq****`
     */
    "AcceleratorId": string;
    /**
     * 全球加速实例是否开启跨境线路功能。取值：
     * - **true**：开启跨境线路功能，可以加速跨境线路。
     * - **false**：关闭跨境线路功能，不可以加速跨境线路。
     * @example `true`
     */
    "CrossBorderStatus": boolean;
}
