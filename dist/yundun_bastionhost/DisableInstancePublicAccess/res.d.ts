export interface DisableInstancePublicAccessResponse {
    /**
     * 已关闭公网访问开关的堡垒机的实例ID。
     * @example `bastionhost-cn-78v1gh****`
     */
    InstanceId: string;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `76FAAF15-D3A3-4099-9941-FC408D9FDB4C`
     */
    RequestId: string;
}
