export interface SetPolicyIPAclConfigRequest {
    /**
     * 堡垒机的实例ID。
     * > 可通过调用[DescribeInstances](~~153281~~)接口获取堡垒机实例ID。
     * @example `bastionhost-cn-st220aw****`
     */
    "InstanceId": string;
    /**
     * 堡垒机的地域ID。
     * > Region ID和地域名称的对应关系，请参见[地域和可用区](~~40654~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 指定需要修改的控制策略ID。
     * > 您可以调用[ListPolicies](~~2758876~~)接口获取该参数。
     * @example `3`
     */
    "PolicyId": string;
    /**
     * 来源IP限制配置。
     */
    "IPAclConfig": {
        /**
         * 来源IP限制模式。取值：
         * - **black**：黑名单模式
         * - **white**：白名单模式
         * @example `white`
         */
        AclType: string;
        /**
         * 来源IP限制列表。
         * > - AclType 设置为 white 时，IPs列表内容必填。
         * > - AclType 设置为black 但暂不需要设置来源IP黑名单时，IPs请传空列表。
         */
        IPs: string[];
    };
}
