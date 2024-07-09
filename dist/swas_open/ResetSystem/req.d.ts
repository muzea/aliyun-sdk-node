export interface ResetSystemRequest {
    /**
     * 指定的轻量应用服务器的实例ID。
     * @example `ace0706b2ac4454d984295a94213****`
     */
    "InstanceId": string;
    /**
     * 地域ID。您可以调用[ListRegions](~~189315~~)查询可用地域。
     * @example `cn-hangzhou	`
     */
    "RegionId": string;
    /**
     * 目标镜像ID。如果不输入目标镜像ID，默认为重置当前镜像。
     * @example `794c230fd3e64ea19f83f4d7a0ad****`
     */
    "ImageId"?: string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](~~25693~~)。
     * @example `123e4567-e89b-12d3-a456-426655440000	`
     */
    "ClientToken"?: string;
}
