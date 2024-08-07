export interface CreateDhcpOptionsSetRequest {
    /**
     * DHCP选项集所在的地域。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * DNS服务器IP。最多传入4个DNS服务器IP，DNS服务器IP之间用半角逗号（,）隔开。
     * >未传入任何DNS服务器IP时，ECS实例默认使用阿里云提供的DNS服务器IP（100.100.2.136和100.100.2.138）。
     * @example `192.XX.XX.123`
     */
    "DomainNameServers"?: string;
    /**
     * DHCP选项集的名称。
     * 长度为1～128个字符，必须以字母或中文开头，可包含数字、下划线（_）和短划线（-）。
     * @example `name`
     */
    "DhcpOptionsSetName"?: string;
    /**
     * DHCP选项集的描述。
     * 描述可以为空或填写长度为1～256个字符，必须以字母或中文开头，但不能以`http://`或`https://`开头。
     * @example `description`
     */
    "DhcpOptionsSetDescription"?: string;
    /**
     * 主机名后缀，例如example.com。
     * DHCP选项集关联VPC后，会自动将主机名后缀同步给VPC中ECS实例。
     * @example `example.com`
     */
    "DomainName"?: string;
    /**
     * DHCP选项集所属的资源组ID。
     * @example `rg-acfmxazb4ph****`
     */
    "ResourceGroupId"?: string;
    /**
     * 资源的标签。
     */
    "Tag"?: {
        /**
         * 资源的标签键。最多支持输入20个标签键。如需传入该值，则不能输入空字符串。
         * 一个标签键最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `FinanceDept`
         */
        Key: string;
        /**
         * 资源的标签值。最多支持输入20个标签值。如需传入该值，可以输入空字符串。
         * 最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `FinanceJoshua`
         */
        Value: string;
    }[];
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `0c593ea1-3bea-11e9-b96b-88e9fe637760`
     */
    "ClientToken"?: string;
    /**
     * 是否只预检此次请求，取值：
     * **true**：发送检查请求，不会创建DHCP选项集。检查项包括是否填写了必需参数、请求格式和限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * **false**（默认值）：发送正常请求，通过检查后返回HTTP 2xx状态码并直接创建DHCP选项集。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     *  IPv4 DHCP选项集的租赁时间。
     * - 租赁时间设置为小时时：单位：h。取值范围：**24h~1176h**，**87600h~175200h**。   默认值：**87600h**。
     * - 租赁时间设置为天时：单位：d。取值范围： **1d~49d**，**3650d~7300d**。   默认值：**3650d** 。
     * > 输入参数取值时，必须输入参数的单位。
     * @example `3650d`
     */
    "LeaseTime"?: string;
    /**
     * IPv6 DHCP选项集的租赁时间。
     * - 租赁时间设置为小时时：单位：h。取值范围：**24h~1176h**，**87600h~175200h**。   默认值：**87600h**。
     * - 租赁时间设置为天时：单位：d。取值范围： **1d~49d**，**3650d~7300d**。   默认值：**3650d** 。
     * > 输入参数取值时，必须输入参数的单位。
     * @example `3650d`
     */
    "Ipv6LeaseTime"?: string;
}
