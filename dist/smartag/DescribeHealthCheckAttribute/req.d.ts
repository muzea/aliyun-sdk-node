export interface DescribeHealthCheckAttributeRequest {
    /**
     * 智能接入网关实例的地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 健康检查实例ID。
     * @example `hc-1k4ucuq77b56x4****`
     */
    "HcInstanceId": string;
    /**
     * 智能接入网关实例ID。
     * @example `sag-1um5x5nwhilymw****`
     */
    "SmartAGId": string;
}
