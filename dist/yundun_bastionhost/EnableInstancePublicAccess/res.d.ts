export interface EnableInstancePublicAccessResponse {
    /**
     * 已开启公网访问开关的堡垒机的实例ID。
     * @example `bastionhost-cn-78v1gh****`
     */
    InstanceId: string;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `D47B5043-FDD6-4FBE-976E-5FC67A23578F`
     */
    RequestId: string;
}
