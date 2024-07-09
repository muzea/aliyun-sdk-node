export interface SetPolicyCommandConfigRequest {
    /**
     * 堡垒机的实例ID。
     * > 您可以调用[DescribeInstances](~~153281~~)接口获取该参数。
     * @example `bastionhost-cn-78v1ghxxxxx`
     */
    "InstanceId": string;
    /**
     * 堡垒机的区域ID。
     * > 区域ID和区域名称的对应关系，请参见[地域和可用区](~~40654~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 指定需要修改的控制策略ID。
     * > 您可以调用[ListPolicies](~~2758876~~)接口获取该参数。
     * @example `45`
     */
    "PolicyId": string;
    /**
     * 命令控制配置。
     * > 仅适用于Linux主机。
     */
    "CommandConfig": {
        /**
         * 命令控制配置。
         */
        Deny: {
            /**
             * 命令控制类型。取值：
             * - **black**：黑名单模式
             * - **white**：白名单模式
             * @example `white`
             */
            AclType: string;
            /**
             * 命令列表。
             * > AclType 设置为 white 时，Commands 为必填。
             */
            Commands: string[];
        };
        /**
         * 命令审批配置。
         * > 命令审批对命令控制（白名单或黑名单）以外的命令生效。命令控制策略生效的优先级高于命令审批。
         */
        Approval: {
            /**
             * 需要审批的命令列表。
             */
            Commands: string[];
        };
    };
}
