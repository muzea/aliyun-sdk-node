export interface CreateVSwitchRequest {
    /**
     * ENS节点ID。
     * @example `cn-xian-unicom`
     */
    "EnsRegionId": string;
    /**
     * 交换机的网段。交换机网段要求如下：
     * - 交换机的网段的掩码长度范围为16~29位。
     * - 交换机的网段必须从属于所在VPC的网段。
     * - 交换机的网段不能与所在VPC中路由条目的目标网段相同，但可以是目标网段的子集。
     * @example `172.16.0.0/24`
     */
    "CidrBlock": string;
    /**
     * 交换机名称。命名规则如下：
     * - 长度为2~128个英文或中文字符。
     * - 必须以大小字母或中文开头，不能以 http://和https://开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。
     * 默认值：空。
     * @example `Test交换机`
     */
    "VSwitchName"?: string;
    /**
     * 交换机的描述信息。
     * 描述长度为2~256个字符，必须以字母或中文开头，但不能以http://或https://开头。
     * @example `This is my vswitch.`
     */
    "Description"?: string;
    /**
     * 要创建的交换机所属的网络ID。
     * @example `n-257gqcdfvx6n****`
     */
    "NetworkId"?: string;
}
