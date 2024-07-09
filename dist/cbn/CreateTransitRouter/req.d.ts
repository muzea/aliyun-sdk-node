export interface CreateTransitRouterRequest {
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `02fb3da4-130e-11e9-8e44-001****`
     */
    "ClientToken"?: string;
    /**
     * 云企业网实例ID。
     * @example `cen-j3jzhw1zpau2km****`
     */
    "CenId": string;
    /**
     * 企业版转发路由器实例所属地域ID。
     * 您可以通过调用[DescribeChildInstanceRegions](~~132080~~)接口获取地域ID。
     * @example `cn-zhangjiakou`
     */
    "RegionId": string;
    /**
     * 企业版转发路由器实例的名称。
     * 名称可以为空或长度为1～128个字符，不能以http://或https://开头。
     * @example `testname`
     */
    "TransitRouterName"?: string;
    /**
     * 企业版转发路由器实例的描述。
     * 描述可以为空或长度为1～256个字符，不能以http://或https://开头。
     * @example `testdesc`
     */
    "TransitRouterDescription"?: string;
    /**
     * 是否对此次创建请求执行预检，包括权限、实例状态校验等。取值：
     * - **false**（默认值）：发送正常请求，通过检查后直接创建企业版转发路由器实例。
     * - **true**：发送检查请求，只进行校验，不会创建企业版转发路由器实例。检查项包括是否填写了必需参数、请求格式等。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 是否开启企业版转发路由器的组播功能。取值：
     * - **false**（默认值）：不开启。
     * - **true**：开启。
     * 仅部分地域的企业版转发路由器支持组播功能，您可以调用[ListTransitRouterAvailableResource](~~261356~~)接口查询支持组播功能的地域信息。
     * @example `false`
     */
    "SupportMulticast"?: boolean;
    /**
     * 转发路由器地址段列表。
     */
    "TransitRouterCidrList"?: {
        /**
         * 转发路由器地址段。
         * @example `192.168.10.0/24`
         */
        Cidr: string;
        /**
         * 转发路由器地址段的名称。
         * 名称长度为1~128个字符。
         * @example `nametest`
         */
        Name: string;
        /**
         * 转发路由器地址段的描述信息。
         * 描述长度为1~256个字符。
         * @example `desctest`
         */
        Description: string;
        /**
         * 是否允许系统自动在转发路由器路由表中添加转发路由器地址段的路由。
         * - **true**（默认值）：允许。
         *
         *      如果您选择了允许，则在您创建了私网网关类型的VPN连接，并为私网网关类型的VPN连接创建了路由学习关系后，系统自动在与VPN连接建立路由学习关系的转发路由器路由表中添加一条路由条目：
         *     目标网段为转发路由器地址段的黑洞路由，其中转发路由器地址段指已为IPsec连接分配网关IP地址的地址段。
         *      该黑洞路由仅会被传播至转发路由器下边界路由器VBR（Virtual Border Router）实例的路由表中。
         * - **false**：不允许。
         * @example `true`
         */
        PublishCidrRoute: boolean;
    }[];
    /**
     * 标签信息。
     */
    "Tag"?: {
        /**
         * 资源的标签键。
         * 一旦传入该值，则不允许为空字符串。最多支持64个字符，不能以`aliyun`或者`acs:`开头，不能包含`http://`或者`https:// `。
         * 一次最多支持输入20个标签的标签键。
         * @example `tagtest`
         */
        Key: string;
        /**
         * 资源的标签值。
         * 标签值可以为空或输入不超过128个字符的字符串，不能以`aliyun`或者`acs:`开头，不能包含`http://`或者`https:// `。
         * 每一个标签键对应一个标签值，一次最多支持输入20个标签键对应的标签值。
         * @example `TagValue`
         */
        Value: string;
    }[];
}
