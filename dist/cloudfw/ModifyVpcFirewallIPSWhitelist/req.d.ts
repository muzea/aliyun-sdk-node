export interface ModifyVpcFirewallIPSWhitelistRequest {
    /**
     * 请求和接收消息的语言类型。取值：
     * - **zh**（默认）：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 当前阿里云账号的成员账号UID。
     * @example `1415189284827022`
     */
    "MemberUid"?: number;
    /**
     * VPC边界防火墙的实例ID。
     * @example `vfw-d7b8ce273791475b9b0b`
     */
    "VpcFirewallId": string;
    /**
     * 白名单类型。取值：
     *  - **1**：目的类型
     * - **2**：源类型
     * @example `1`
     */
    "WhiteType": number;
    /**
     * 列表类型。取值：
     *  - **1**：用户自定义类型
     * - **2**：地址簿类型
     * @example `1`
     */
    "ListType": number;
    /**
     * 对应列表类型的值。
     * @example `10.130.0.0/20,10.130.17.11/32`
     */
    "ListValue"?: string;
}
