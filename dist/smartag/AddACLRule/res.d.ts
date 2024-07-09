export interface AddACLRuleResponse {
    /**
     * 访问控制规则授权策略。
     * - **accept**：允许。
     * - **drop**：拒绝。
     * @example `drop`
     */
    Policy: string;
    /**
     * 访问控制规则描述信息。
     * @example `test`
     */
    Description: string;
    /**
     * 请求ID。
     * @example `880F84CB-9B54-4413-A8A3-8832C82D1BC4`
     */
    RequestId: string;
    /**
     * 源端口范围。
     * @example `1/65535`
     */
    SourcePortRange: string;
    /**
     * 源网段。
     * 源网段格式为CIDR格式。例如：192.168.1.0/24。
     * @example `192.168.20.0/24`
     */
    SourceCidr: string;
    /**
     * 访问控制规则优先级。
     * 数值越小，优先级越高。同优先级时，首先下发到智能接入网关设备的规则优先生效。
     * @example `1`
     */
    Priority: number;
    /**
     * 访问控制实例ID。
     * @example `acl-xhwhyuo43l0*******`
     */
    AclId: string;
    /**
     * 访问控制规则ID。
     * @example `acr-c1hkd054qywi******`
     */
    AcrId: string;
    /**
     * 目的端口范围。
     * @example `1/65535`
     */
    DestPortRange: string;
    /**
     * 访问控制规则应用方向。取值：
     * - **in**：入方向，指从外部访问智能接入网关实例所在的本地分支的流量。
     * - **out**：出方向，指从智能接入网关实例所在的本地分支访问外部的流量。
     * @example `out`
     */
    Direction: string;
    DpiGroupIds: {
        DpiGroupId: string[];
    };
    /**
     * 访问控制规则名称。
     * @example `doctest`
     */
    Name: string;
    /**
     * 访问控制规则类型。
     * - **LAN**：私网，表示针对私网地址的流量设置访问控制规则。
     * - **WAN**：公网，表示针对公网地址的流量设置访问控制规则。
     * @example `LAN`
     */
    Type: string;
    /**
     * 创建访问控制规则时的时间戳。
     * 时间戳格式为Long型，优先级相同时，时间戳小的访问控制规则优先生效。
     * @example `1553766882689`
     */
    GmtCreate: number;
    /**
     * 目的网段。
     * 目的网段格式为CIDR格式。例如：192.168.10.0/24。
     * @example `192.168.10.0/24`
     */
    DestCidr: string;
    DpiSignatureIds: {
        DpiSignatureId: string[];
    };
    /**
     * 访问控制规则应用的协议。
     * @example `TCP`
     */
    IpProtocol: string;
}
