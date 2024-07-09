export interface ModifyPolicyRequest {
    /**
     * 指定要修改的控制策略所在堡垒机的实例id。
     * >您可以调用[describeinstances](~~153281~~)接口获取该参数。
     * @example `bastionhost-cn-09k1u8mv501`
     */
    "InstanceId": string;
    /**
     * 指定要修改的控制策略所在堡垒机的地域ID。
     * > 地域ID和地域名称的对应关系，请参见[地域和可用区](~~40654~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 指定要修改的控制策略的ID。
     * @example `7`
     */
    "PolicyId": string;
    /**
     * 修改后的控制策略名称。
     * @example `test`
     */
    "PolicyName"?: string;
    /**
     * 修改后的控制策略备注。
     * @example `测试`
     */
    "Comment"?: string;
    /**
     * 指定修改后的控制策略的优先级，1~100，数字越小优先级越高。默认 1。
     * @example `3`
     */
    "Priority"?: string;
}
