export interface CreateTransitRouterVpnAttachmentRequest {
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `123e4567-e89b-12d3-a456-42665544****`
     */
    "ClientToken"?: string;
    /**
     * 是否只预检此次请求。取值：
     * - **true**：发送检查请求，不会创建VPN连接。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后直接创建VPN连接。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 云企业网实例ID。
     * @example `cen-rsgxs8ng2awen2****`
     */
    "CenId"?: string;
    /**
     * 转发路由器实例ID。
     * @example `tr-p0wm740vjnbaprv0m****`
     */
    "TransitRouterId"?: string;
    /**
     * 转发路由器实例所属的地域ID。
     * 您可以通过调用[DescribeChildInstanceRegions](~~132080~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * VPN连接的名称。
     * 名称可以为空或长度为1～128个字符，不能以http://或https://开头。
     * @example `nametest`
     */
    "TransitRouterAttachmentName"?: string;
    /**
     * VPN连接的描述信息。
     * 描述可以为空或长度为1～256个字符，不能以http://或https://开头。
     * @example `desctest`
     */
    "TransitRouterAttachmentDescription"?: string;
    /**
     * IPsec连接ID。
     * @example `vco-p0w042cqwvlhl4zyw****`
     */
    "VpnId": string;
    /**
     * IPsec连接所属的阿里云账号（主账号）ID。
     * - 如果不输入本参数，默认使用当前登录的阿里云账号ID。
     * - 如果您要连接跨账号的IPsec连接时，本参数必填。
     * @example `1210123456123456`
     */
    "VpnOwnerId"?: number;
    /**
     * 是否允许转发路由器实例自动向IPsec连接发布路由条目。取值：
     * - **true**（默认值）：允许。
     * - **false**：不允许。
     * @example `true`
     */
    "AutoPublishRouteEnabled"?: boolean;
    /**
     * 计费方式。
     * 仅取值：**POSTPAY**（默认值），表示按使用量付费。
     * @example `POSTPAY`
     */
    "ChargeType"?: string;
    /**
     * 当前地域下的可用区ID。
     * 系统将在您指定的可用区下创建资源。
     */
    "Zone": {
        /**
         * 可用区ID。
         * 您可以通过调用[ListTransitRouterAvailableResource](~~261356~~)接口获取地域ID。
         * @example `cn-hangzhou-h`
         */
        ZoneId: string;
    }[];
    /**
     * 标签信息列表。
     * 一次最多支持输入20个标签信息。
     */
    "Tag"?: {
        /**
         * 资源的标签键。
         * 一旦传入该值，则不允许为空字符串。最多支持64个字符，不能以`aliyun`或者`acs:`开头，不能包含`http://`或者`https:// `。
         * 一次最多支持输入20个标签的标签键。
         * @example `TagKey`
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
