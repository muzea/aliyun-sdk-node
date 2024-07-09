export interface DisableInstanceAccessControlRequest {
    /**
     * 访问控制策略ID。
     * @example `acl-grgqc0mnuhkqciwtam`
     */
    "AclId": string;
    /**
     * 实例ID
     * @example `apigateway-cn-v6419k43xxxxx`
     */
    "InstanceId": string;
    /**
     * IP版本，可以设置为**ipv4**或者**ipv6**。
     * @example `ipv4`
     */
    "AddressIPVersion"?: string;
}
