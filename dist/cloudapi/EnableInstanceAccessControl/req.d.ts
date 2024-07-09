export interface EnableInstanceAccessControlRequest {
    /**
     * 访问控制策略ID。
     * @example `acl-bp11escro2et2tioscy52`
     */
    "AclId": string;
    /**
     * 实例ID
     * @example `apigateway-cn-v6419k43xxxxx`
     */
    "InstanceId": string;
    /**
     * 访问控制的类型：
     * - black：黑名单
     * - white：白名单
     * @example `black`
     */
    "AclType": string;
    /**
     * IP版本，可以设置为**ipv4**或者**ipv6**。
     * @example `ipv4`
     */
    "AddressIPVersion"?: string;
}
