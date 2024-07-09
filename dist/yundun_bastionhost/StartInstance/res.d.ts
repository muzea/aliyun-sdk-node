export interface StartInstanceResponse {
    /**
     * 已启用的堡垒机的实例ID。
     * @example `bastionhost-cn-78v1gh****`
     */
    InstanceId: string;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `0F85AE0A-6A87-48F3-A0C7-90B998788A36`
     */
    RequestId: string;
}
