export interface CreateTransitRouterVpcAttachmentRequest {
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * >若您未指定，则系统自动使用API请求的RequestId作为ClientToken标识。每次API请求的RequestId不一样。
     * @example `02fb3da4-130e-11e9-8e44-001****`
     */
    "ClientToken"?: string;
    /**
     * 云企业网实例ID。
     * @example `cen-j3jzhw1zpau2km****`
     */
    "CenId"?: string;
    /**
     * 企业版转发路由器实例ID。
     * @example `tr-bp1su1ytdxtataupl****`
     */
    "TransitRouterId"?: string;
    /**
     * VPC实例所属地域ID。
     * 您可以通过调用[DescribeChildInstanceRegions](~~132080~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * VPC连接的名称。
     * 名称可以为空或长度为1～128个字符，不能以http://或https://开头。
     * @example `testname`
     */
    "TransitRouterAttachmentName"?: string;
    /**
     * VPC连接的描述信息。
     * 描述可以为空或长度为1～256个字符，不能以http://或https://开头。
     * @example `testname`
     */
    "TransitRouterAttachmentDescription"?: string;
    /**
     * VPC实例ID。
     * @example `vpc-bp1kbjcre9vtsebo1****`
     */
    "VpcId": string;
    /**
     * VPC实例所属阿里云账号（主账号）ID。默认值为当前登录的阿里云账号ID。
     * > 如果您要加载跨账号的网络实例，本参数必填。
     * @example `1250123456123456`
     */
    "VpcOwnerId"?: number;
    /**
     * 付费方式。默认值：**POSTPAY**，表示按量付费。
     * @example `POSTPAY`
     */
    "ChargeType"?: string;
    /**
     * 是否对此次请求执行预检，包括权限、实例状态校验等。取值：
     * - **false**（默认值）：发送正常请求，通过检查后直接创建VPC连接。
     * - **true**：发送检查请求，只进行校验，不会创建VPC连接。检查项包括是否填写了必需参数、请求格式等。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 请在企业版转发路由器的可用区中选择一个交换机实例。
     * 一次最多支持添加10组信息。
     */
    "ZoneMappings": {
        /**
         * 在企业版转发路由器支持的可用区中选择一个交换机实例。
         * 一次最多支持为10个可用区选择交换机实例。
         * @example `vsw-bp1a214sbus8z3b54****`
         */
        VSwitchId: string;
        /**
         * 企业版转发路由器支持的可用区的ID。
         * 您可以通过[DescribeZones](~~36064~~)接口查询可用区的ID。
         * 一次最多支持选择10个可用区。
         * @example `cn-hangzhou-h`
         */
        ZoneId: string;
    }[];
    /**
     * 是否使企业版转发路由器自动发布路由到VPC实例。
     * - **false**（默认值）：否。
     * - **true**：是。
     * @example `true`
     */
    "AutoPublishRouteEnabled"?: boolean;
    /**
     * 标签信息。
     * 一次最多支持输入20个标签信息。
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
         * @example `tagtest`
         */
        Value: string;
    }[];
}
