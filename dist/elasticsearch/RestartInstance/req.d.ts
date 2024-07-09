export interface RestartInstanceRequest {
    /**
     *  实例ID。
     * @example `es-cn-nif1q8auz0003****`
     */
    "InstanceId": string;
    /**
     * 是否忽略集群状态，强制重启。
     * @example `false`
     */
    "force"?: boolean;
    /**
     * 用于保证请求的幂等性。由客户端生成该参数值，要保证在不同请求间唯一，最大不值过64个ASCII字符。
     * @example `5A2CFF0E-5718-45B5-9D4D-70B3FF****`
     */
    "clientToken"?: string;
    "body"?: string;
}
