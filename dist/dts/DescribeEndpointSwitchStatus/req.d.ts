export interface DescribeEndpointSwitchStatusRequest {
    /**
     * 地域ID，传入本参数来指定实例所在地域，详情请参见[支持的地域列表](~~141033~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 任务ID，成功调用[SwitchSynchronizationEndpoint](~~201858~~)接口后会返回该值。
     * @example `11****`
     */
    "TaskId": string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。
     * @example `0c593ea1-3bea-11e9-b96b-88e9fe63****`
     */
    "ClientToken"?: string;
    /**
     * 阿里云主账号ID，无需设置，该参数即将下线。
     * @example `12323344****`
     */
    "AccountId"?: string;
    "ResourceGroupId"?: string;
}
