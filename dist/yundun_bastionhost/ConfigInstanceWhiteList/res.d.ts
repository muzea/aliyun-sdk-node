export interface ConfigInstanceWhiteListResponse {
    /**
     * 已配置公网IP地址白名单的堡垒机实例ID。
     * @example `bastionhost-cn-78v1gh****`
     */
    InstanceId: string;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `47820E32-5968-45CF-982F-09CB80DC180B`
     */
    RequestId: string;
}
