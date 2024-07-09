export interface ModifyACLRuleRequest {
    /**
     * 访问控制实例所属地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 访问控制实例ID。
     * @example `acl-xhwhyuo43l0n*******`
     */
    "AclId": string;
    /**
     * 访问控制规则ID。
     * 您可以通过调用接口[DescribeACLAttribute](~~114017~~)查询访问控制实例下访问控制规则的ID。
     * @example `acr-u98qztgtgvhb********`
     */
    "AcrId": string;
    /**
     * 访问控制规则的描述信息。
     * 描述长度为**1**~**512**个字符。
     * @example `test`
     */
    "Description"?: string;
    /**
     * 访问控制规则应用方向。取值：
     * - **in**：入方向，指从外部访问智能接入网关实例所在的本地网络的方向。
     * - **out**：出方向，指从智能接入网关实例所在的本地网络访问外部的方向。
     * @example `in`
     */
    "Direction"?: string;
    /**
     * 源网段。
     * 源网段格式为CIDR格式。例如：192.168.1.0/24。
     * @example `0.0.0.0/0`
     */
    "SourceCidr"?: string;
    /**
     * 目的网段。
     * 目的网段格式为CIDR格式。例如：192.168.10.0/24。
     * @example `0.0.0.0/0`
     */
    "DestCidr"?: string;
    /**
     * 访问控制规则应用的协议。
     * 访问控制功能支持的协议类型，请以控制台为准。协议格式不区分大小写。
     * @example `tcp`
     */
    "IpProtocol"?: string;
    /**
     * 源端口范围。取值范围：**-1**或**1**~**65535**。
     * 目的端口范围格式示例：
     * - 1/200，表示端口范围1至200。
     * - 80/80，表示端口80。
     * - -1/-1，表示不限制端口。
     * @example `80/80`
     */
    "SourcePortRange"?: string;
    /**
     * 目的端口范围。取值范围：**-1**或**1**~**65535**。
     * 目的端口范围格式示例：
     * - 1/200，表示端口范围1至200。
     * - 80/80，表示端口80。
     * - -1/-1，表示不限制端口。
     * @example `80/80`
     */
    "DestPortRange"?: string;
    /**
     * 访问控制规则授权策略。取值：
     * - **accept**：允许。
     * - **drop**：拒绝。
     * @example `accept`
     */
    "Policy"?: string;
    /**
     * 访问控制规则优先级。
     * 数值越小，优先级越高。同优先级时，先下发到智能接入网关设备的规则优先生效。
     * 取值范围：**1~100**。默认值：**1**。
     * @example `2`
     */
    "Priority"?: number;
    /**
     * 访问控制规则类型。取值：
     * - **LAN**：（默认值）私网，表示针对私网地址的流量设置访问控制规则。
     * - **WAN**：公网，表示针对公网地址的流量设置访问控制规则。
     * @example `LAN`
     */
    "Type"?: string;
    /**
     * 访问控制规则名称。
     * 名称长度为2~128个字符，以大小写字母或中文开头，可包含数字、下划线（_）和短划线（-）。
     * @example `doctest`
     */
    "Name"?: string;
    /**
     * 访问控制规则匹配的应用ID列表。
     */
    "DpiSignatureIds"?: string[];
    /**
     * 访问控制规则匹配的应用组ID列表。
     */
    "DpiGroupIds"?: string[];
}
