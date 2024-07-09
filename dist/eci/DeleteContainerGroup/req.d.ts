export interface DeleteContainerGroupRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * ECI实例ID，即容器组ID。
     * @example `eci-2zelg8vwnlzdhf8hv****`
     */
    "ContainerGroupId": string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](~~25693~~)。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 是否强制清理资源。取值范围：
     * - true：不等待graceful termination超时时间，强制清理资源。
     * - false（默认值）：等待graceful termination超时时间，正常清理资源。
     * @example `true`
     */
    "Force"?: boolean;
}
