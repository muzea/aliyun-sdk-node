export interface JoinSecurityGroupRequest {
    /**
     * 安全组ID。
     * @example `sg-bp67acfmxazb4ph***`
     */
    "SecurityGroupId": string;
    /**
     * 实例ID。
     * @example `i-bp67acfmxazb4ph***`
     */
    "InstanceId"?: string;
    /**
     * 弹性网卡ID。
     * @example `eni-58z57orgmt6d1****`
     */
    "NetworkInterfaceId"?: string;
}
