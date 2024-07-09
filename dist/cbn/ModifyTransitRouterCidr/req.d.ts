export interface ModifyTransitRouterCidrRequest {
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的RequestId作为ClientToken标识。每次API请求的RequestId不一样。
     * @example `123e4567-e89b-12d3-a456-426****`
     */
    "ClientToken"?: string;
    /**
     * 转发路由器实例ID。
     * @example `tr-gw8ergozrv77rtbjd****`
     */
    "TransitRouterId": string;
    /**
     * 转发路由器地址段ID。
     * 您可以通过调用[ListTransitRouterCidr](~~462772~~)接口查询转发路由器地址段ID。
     * @example `cidr-0zv0q9crqpntzz****`
     */
    "TransitRouterCidrId": string;
    /**
     * 转发路由器实例所属的地域ID。
     * 您可以通过调用[DescribeChildInstanceRegions](~~132080~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 转发路由器地址段的新名称。
     * 名称可以为空或长度为1～128个字符，不能以http://或https://开头。
     * @example `nametest`
     */
    "Name"?: string;
    /**
     * 转发路由器地址段新的描述信息。
     * 描述可以为空或长度为1～256个字符，不能以http://或https://开头。
     * @example `desctest`
     */
    "Description"?: string;
    /**
     * 新的转发路由器地址段。
     * @example `192.168.10.0/24`
     */
    "Cidr"?: string;
    /**
     * 是否只预检此次请求。取值：
     * - **true**：发送检查请求，不会修改转发路由器地址段。检查项包括是否填写了必需参数、请求格式、业务限制等。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后直接修改转发路由器地址段。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 是否允许系统自动在转发路由器路由表中添加转发路由器地址段的路由。
     * - **true**：允许。
     *
     *      如果您选择了允许，则在您创建了私网网关类型的VPN连接，并为私网网关类型的VPN连接创建了路由学习关系后，系统自动在与VPN连接建立路由学习关系的转发路由器路由表中添加一条路由条目：目标网段为转发路由器地址段的黑洞路由，其中转发路由器地址段指已为IPsec连接分配网关IP地址的地址段。
     *         该黑洞路由仅会被传播至转发路由器下VBR实例的路由表中。
     * - **false**：不允许。
     * @example `true`
     */
    "PublishCidrRoute"?: boolean;
}
