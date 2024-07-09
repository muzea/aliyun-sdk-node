export interface UpdateAcceleratorCrossBorderModeRequest {
    /**
     * 全球加速实例所属的地域ID，仅取值：**cn-hangzhou**。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
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
     * 全球加速实例的传输网络质量类型。取值：
     * <props="china">
     * - **bgpPro**：精品带宽跨境加速。使用BGP精品线路，实现跨境网络加速。相比联通专线跨境，简化了跨境资质审批流程。</props>
     * <props="china">
     * - **private**：联通跨境专线加速。使用联通专线线路，相比精品带宽跨境，加速效果更好，但需要进行跨境合规认证，申请联通跨境业务资质。</props>
     * <props="intl">
     * - **bgpPro**：精品带宽跨域加速。使用BGP精品线路，实现跨境网络加速。相比跨域专线线路，简化了企业实名登记流程。</props>
     * <props="intl">
     * - **private**：专线跨域加速。使用跨域专线线路，相比精品带宽跨域，加速效果更好，但需要进行企业实名认证。</props>
     * @example `bgpPro`
     */
    "CrossBorderMode": string;
}
