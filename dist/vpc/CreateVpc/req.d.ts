export interface CreateVpcRequest {
    /**
     * VPC所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * VPC的网段。
     * - 建议您使用192.168.0.0/16、172.16.0.0/12、10.0.0.0/8三个RFC标准私网网段及其子网作为专有网络的主IPv4网段，网段掩码有效范围为8~28位。
     * - 您也可以使用除100.64.0.0/10、224.0.0.0/4、127.0.0.0/8或169.254.0.0/16及其子网外的自定义地址段作为专有网络的主IPv4网段。
     * @example `172.16.0.0/12`
     */
    "CidrBlock"?: string;
    /**
     * VPC的IPv6网段。
     * @example `2408:XXXX:0:6a::/56`
     */
    "Ipv6CidrBlock"?: string;
    /**
     * VPC的名称。
     * 长度为1～128个字符，不能以`http://`或`https://`开头。
     * @example `abc`
     */
    "VpcName"?: string;
    /**
     * 是否开启IPv6网段。取值：
     * - **false**（默认值）：不开启。
     * - **true**：开启。
     * @example `false`
     */
    "EnableIpv6"?: boolean;
    /**
     * VPC的描述信息。
     * 长度为1～256个字符，不能以`http://`或`https://`开头。
     * @example `This is my first Vpc`
     */
    "Description"?: string;
    /**
     * 资源组ID。
     * 关于资源组的更多信息，请参见[什么是资源组](~~94475~~)。
     * @example `rg-acfmxazb4ph6aiy****`
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
     * 是否只预检此次请求。取值：
     * - **true**：发送检查请求，不会创建VPC。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后返回HTTP 2xx状态码并直接创建VPC。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 用户网段，如需定义多个网段请使用半角逗号（,）隔开，最多支持3个网段。
     * 关于用户网段的详细信息，请参见[专有网络FAQ](~~185311~~)的`什么是用户网段`。
     * @example `192.168.0.0/12`
     */
    "UserCidr"?: string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * VPC的IPv6地址段类型。取值：
     * - **BGP**（默认值）：阿里云BGP IPv6。
     * - **ChinaMobile**：中国移动（单线）。
     * - **ChinaUnicom**：中国联通（单线）。
     * - **ChinaTelecom**：中国电信（单线）。
     * > 如果是开通了单线带宽白名单的用户，该字段可以设置为**ChinaTelecom**（中国电信）、**ChinaUnicom**（中国联通）或**ChinaMobile**（中国移动）。
     * @example `BGP`
     */
    "Ipv6Isp"?: string;
    /**
     * IPv4类型的IPAM地址池实例ID。
     * @example `ipam-pool-sycmt3p2a9v63i****`
     */
    "Ipv4IpamPoolId"?: string;
    /**
     * 通过输入掩码的方式从IPAM地址池分配VPC。
     * > 指定IPAM地址池创建VPC时，参数CidrBlock或Ipv4CidrMask至少输入一个。
     * @example `12`
     */
    "Ipv4CidrMask"?: number;
}
