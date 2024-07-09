export interface CreatePolicyRequest {
    /**
     * 要新建控制策略的堡垒机实例的ID。
     * > 您可以调用[DescribeInstances](~~153281~~)接口获取该参数。
     * @example `bastionhost-cn-20p364c1w0g`
     */
    "InstanceId": string;
    /**
     * 指定需创建控制策略所在的堡垒机的地域ID。
     * >地域ID和地域名称的对应关系，请参见[地域和可用区](~~40654~~)。
     * @example `cn-shanghai`
     */
    "RegionId"?: string;
    /**
     * 指定控制策略名称。最大128字符。
     * @example `policytest`
     */
    "PolicyName": string;
    /**
     * 控制策略的备注。最大500字符。
     * @example `comment`
     */
    "Comment"?: string;
    /**
     * 控制策略的优先级。
     * - 优先级可设置范围：1~100。默认值为1，即最高优先级。
     * - 不同控制策略可以设置相同的优先级。多个控制策略的优先级相同时，最新创建的策略优先级最高。在一条策略中，若命令控制和命令审批里设置有相同的命令，则优先级从高到低是拒绝、允许、审批。
     * @example `1`
     */
    "Priority"?: string;
}
