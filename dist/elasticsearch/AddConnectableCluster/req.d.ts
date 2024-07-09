export interface AddConnectableClusterRequest {
    /**
     * 当前实例ID。
     * @example `es-cn-n6w1o1x0w001c****`
     */
    "InstanceId": string;
    /**
     * 用于保证请求的幂等性。由客户端生成该参数值，要保证在不同请求间唯一，最大不超过64个ASCII字符。
     * @example `5A2CFF0E-5718-45B5-9D4D-70B3FF****`
     */
    "clientToken"?: string;
    /**
     * 远程实例ID。用来指定需要进行网络互通的远程实例ID，要求与当前实例在同一专有网络下。
     * @example `{     "instanceId":"es-cn-09k1rgid9000g****" }`
     */
    "body"?: string;
}
