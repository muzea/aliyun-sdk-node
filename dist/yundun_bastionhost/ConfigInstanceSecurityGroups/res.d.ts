export interface ConfigInstanceSecurityGroupsResponse {
    /**
     * 已配置安全组的堡垒机实例ID。
     * @example `bastionhost-cn-78v1gh****`
     */
    InstanceId: string;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `0ECCC399-4D35-48A7-8379-5C6180E66235`
     */
    RequestId: string;
}
