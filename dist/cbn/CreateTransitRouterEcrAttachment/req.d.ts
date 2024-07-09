export interface CreateTransitRouterEcrAttachmentRequest {
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `02fb3da4-130e-11e9-8e44-001****`
     */
    "ClientToken"?: string;
    /**
     * 云企业网实例ID。
     * @example `cen-7qthudw0ll6jmc****`
     */
    "CenId"?: string;
    /**
     * 转发路由器实例ID。
     * @example `tr-bp1su1ytdxtataupl****`
     */
    "TransitRouterId"?: string;
    /**
     * 转发路由器实例所属的地域ID。
     * 您可以通过调用[DescribeChildInstanceRegions](~~132080~~)接口获取地域ID。
     * @example `eu-central-1`
     */
    "RegionId"?: string;
    /**
     * ECR连接的名称。
     * 名称可以为空或长度为1～128个字符，不能以http://或https://开头。
     * @example `nametest`
     */
    "TransitRouterAttachmentName"?: string;
    /**
     * ECR连接描述。
     * 描述可以为空或长度为1～256个字符，不能以http://或https://开头。
     * @example `testdesc`
     */
    "TransitRouterAttachmentDescription"?: string;
    /**
     * 关联的专线网关实例ID。
     * @example `ecr-upyc0viial107r****`
     */
    "EcrId": string;
    /**
     * ECR实例所属阿里云账号（主账号）ID。默认值为当前登录的阿里云账号ID。
     * > 如果您要加载跨账号的网络实例，本参数必填。
     * @example `1250123456123456`
     */
    "EcrOwnerId"?: number;
    /**
     * 是否只预检此次请求。取值：
     * - **true**：发送检查请求，不会修改VPN连接的配置。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后直接修改VPN连接的配置。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 标签信息列表。
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
