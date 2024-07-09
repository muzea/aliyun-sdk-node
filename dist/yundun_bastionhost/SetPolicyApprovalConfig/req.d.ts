export interface SetPolicyApprovalConfigRequest {
    /**
     * 堡垒机的实例ID。
     * > 可通过调用DescribeInstances接口获取堡垒机实例ID。
     * @example `bastionhost-cn-st220aw****`
     */
    "InstanceId": string;
    /**
     * 堡垒机的地域ID。
     * > 地域ID和地域名称的对应关系，请参见[地域和可用区](~~40654~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 指定需要修改的控制策略ID。
     * > 您可以调用[ListPolicies](~~2758876~~)接口获取该参数。
     * @example `7`
     */
    "PolicyId": string;
    /**
     * 控制策略中的运维审批配置。
     */
    "ApprovalConfig": {
        /**
         * 控制策略中的运维审批配置。取值：
         * - **On**：开启运维审批
         * - **Off**：关闭运维审批
         * @example `On`
         */
        SwitchStatus: string;
    };
}
