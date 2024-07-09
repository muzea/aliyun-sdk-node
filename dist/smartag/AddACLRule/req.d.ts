export interface AddACLRuleRequest {
    /**
     * 访问控制实例所属地域ID。
     * 您可以通过调用[DescribeRegions](~~69813~~)接口获取地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 访问控制实例ID。
     * @example `acl-xhwhyuo43l0n*****`
     */
    "AclId": string;
    /**
     * 访问控制规则描述信息。
     * 描述长度为**1~512**个字符。
     * @example `desctest`
     */
    "Description"?: string;
    /**
     * 访问控制规则应用方向。取值：
     * - **in**：入方向，指从外部访问智能接入网关实例所在的本地分支的流量。
     * - **out**：出方向，指从智能接入网关实例所在的本地分支访问外部的流量。
     * @example `in`
     */
    "Direction": string;
    /**
     * 源网段。
     * 源网段格式为CIDR格式。例如：192.168.1.0/24。
     * @example `192.168.20.0/24`
     */
    "SourceCidr": string;
    /**
     * 目的网段。
     * 目的网段格式为CIDR格式。例如：192.168.10.0/24。
     * @example `192.168.10.0/24`
     */
    "DestCidr": string;
    /**
     * 访问控制规则应用的协议。
     * 访问控制功能支持的协议类型，请以控制台为准。协议格式不区分大小写。
     * @example `tcp`
     */
    "IpProtocol": string;
    /**
     * 源端口范围。
     * 取值范围：**-1**或**1**~**65535**。
     * 源端口范围格式例如：1/200、80/80，其中-1/-1代表不限制端口。
     * @example `1/200`
     */
    "SourcePortRange": string;
    /**
     * 目的端口范围。
     * 取值范围：**-1**或**1**~**65535**。
     * 目的端口范围格式例如：1/200、80/80，其中-1/-1代表不限制端口。
     * @example `1/200`
     */
    "DestPortRange": string;
    /**
     * 访问控制规则授权策略。取值：
     * - **accept**：允许。
     * - **drop**：拒绝。
     * @example `accept`
     */
    "Policy": string;
    /**
     * 访问控制规则优先级。
     * 数值越小，优先级越高。同优先级时，首先下发到智能接入网关设备的规则优先生效。
     * 取值范围：**1~100**。默认值：**1**。
     * @example `12`
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
     * 长度为2~100个字符，以大小写字母或中文开头，可包含数字、半角句号（.）、下划线（_）和短划线（-）。
     * @example `doctest`
     */
    "Name"?: string;
    /**
     * 当前访问控制规则匹配的应用ID列表。
     * 您可以通过[ListDpiSignatures](~~196630~~)查询应用ID及其对应的应用信息。N的最大值为**10**。
     * @example `1`
     */
    "DpiSignatureIds"?: string[];
    /**
     * 当前访问控制规则匹配的应用组ID列表。
     * 您可以通过[ListDpiGroups](~~196754~~)查询应用组ID及其包含的应用信息。N的最大值为**10**。
     * @example `20`
     */
    "DpiGroupIds"?: string[];
}
