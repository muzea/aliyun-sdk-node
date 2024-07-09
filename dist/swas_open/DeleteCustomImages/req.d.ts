export interface DeleteCustomImagesRequest {
    /**
     * 地域ID。您可以调用[ListRegions](~~189315~~)查询可用地域。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 轻量应用服务器的镜像ID。取值可以由多个实例ID组成一个JSON数组，最多支持15个ID，ID之间用半角逗号（,）隔开。
     * @example `["m-2zehv38jjmwva1ee****", "m-bp1hj0zhmheyq2kz****"]`
     */
    "ImageIds": string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](~~25693~~)。
     * @example `123e4567-e89b-12d3-a456-426655440000	`
     */
    "ClientToken"?: string;
}
