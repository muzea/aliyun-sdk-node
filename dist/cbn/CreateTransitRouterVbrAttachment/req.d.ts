export interface CreateTransitRouterVbrAttachmentRequest {
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
    "CenId"?: string;
    /**
     * 企业版转发路由器实例ID。
     * @example `tr-bp1su1ytdxtataupl****`
     */
    "TransitRouterId"?: string;
    /**
     * VBR实例所属地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * VBR连接名称。
     * 名称可以为空或长度为1～128个字符，不能以http://或https://开头。
     * @example `testname`
     */
    "TransitRouterAttachmentName"?: string;
    /**
     * VBR连接描述。
     * 描述可以为空或长度为1～256个字符，不能以http://或https://开头。
     * @example `testdesc`
     */
    "TransitRouterAttachmentDescription"?: string;
    /**
     * VBR实例ID。
     * @example `vbr-bp1svadp4lq38janc****`
     */
    "VbrId": string;
    /**
     * VBR实例所属阿里云账号（主账号）ID。默认值为当前登录的阿里云账号ID。
     * > 如果您要加载跨账号的网络实例，本参数必填。
     * @example `1250123456123456`
     */
    "VbrOwnerId"?: number;
    /**
     * 是否使企业版转发路由器自动发布路由到VBR实例。
     * - **false**（默认值）：否。
     * - **true**：是。
     * @example `false`
     */
    "AutoPublishRouteEnabled"?: boolean;
    /**
     * 是否对此次请求执行预检，包括权限、实例状态校验等。取值：
     * - **false**（默认值）：发送正常请求，通过检查后直接创建VBR连接。
     * - **true**：发送检查请求，只进行校验，不会创建VBR连接。检查项包括是否填写了必需参数、请求格式等。如果检查不通过，则返回对应错误。如果检查通过，则返回对应请求ID。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 标签信息。
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
