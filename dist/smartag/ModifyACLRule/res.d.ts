export interface ModifyACLRuleResponse {
    /**
     * 访问控制规则授权策略。
     * - **accept**：允许。
     * - **drop**：拒绝。
     * @example `accept`
     */
    Policy: string;
    /**
     * 访问控制规则描述信息。
     * @example `test`
     */
    Description: string;
    /**
     * 请求ID。
     * @example `7F3DD2C1-0F6B-4575-9106-B2D50DF7A711`
     */
    RequestId: string;
    /**
     * 源端口范围。
     * @example `-1/-1`
     */
    SourcePortRange: string;
    /**
     * 源网段。
     * 源网段格式为CIDR格式。例如：192.168.1.0/24。
     * @example `0.0.0.0/0`
     */
    SourceCidr: string;
    /**
     * 访问控制规则优先级。
     * 数值越小，优先级越高。同优先级时，先下发到智能接入网关设备的规则优先生效。
     * @example `1`
     */
    Priority: number;
    /**
     * 访问控制实例ID。
     * @example `acl-jdc7tir4fkplwr****`
     */
    AclId: string;
    /**
     * 访问控制规则ID。
     * @example `acr-r8hezn2pi39s5a****`
     */
    AcrId: string;
    /**
     * 目的端口范围。
     * @example `-1/-1`
     */
    DestPortRange: string;
    /**
     * 访问控制规则应用方向。取值：
     * - **in**：入方向，指从外部访问智能接入网关实例所在的本地网络的方向。
     * - **out**：出方向，指从智能接入网关实例所在的本地网络访问外部的方向。
     * @example `in`
     */
    Direction: string;
    DpiGroupIds: {
        /**
         * 访问控制规则匹配的应用组ID列表。
         */
        DpiGroupId: string[];
    };
    /**
     * 访问控制规则名称。
     * @example `doctest`
     */
    Name: string;
    /**
     * 创建访问控制规则时的时间戳。
     * 时间戳格式为Long型，优先级相同时，时间戳小的访问控制规则优先生效。
     * @example `1553777700000`
     */
    GmtCreate: number;
    /**
     * 目的网段。
     * 目的网段格式为CIDR格式。例如：192.168.10.0/24。
     * @example `0.0.0.0/0`
     */
    DestCidr: string;
    DpiSignatureIds: {
        /**
         * 访问控制规则匹配的应用ID列表。
         */
        DpiSignatureId: string[];
    };
    /**
     * 访问控制规则应用的协议。
     * @example `ALL`
     */
    IpProtocol: string;
}
