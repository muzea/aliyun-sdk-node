export interface DescribeRegionsRequest {
    /**
     * 语言。
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 用户Ip。
     * @example `192.0.2.0`
     */
    "UserClientIp"?: string;
    /**
     * 支持的语言。包括以下取值：
     * - 中文：zh-CN
     * - 英文：en-US
     * - 日文：ja
     * @example `zh-CN`
     */
    "AcceptLanguage"?: string;
    /**
     * 授权资源的所属用户主账号ID。
     * @example `111222333`
     */
    "AuthorizedUserId"?: number;
    /**
     * VPC类型：
     * - STANDARD：标准VPC。
     * - EDS：无影工作区VPC。
     * @example `STANDARD`
     */
    "VpcType"?: string;
    /**
     * 场景信息。
     * - AUTH：内置权威
     * - FWD：转发管理
     * - RA：流量分析
     * @example `AUTH`
     */
    "Scene"?: string;
}
