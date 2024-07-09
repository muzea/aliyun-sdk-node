export interface ListAclsRequest {
    /**
     * 全球加速实例所属的地域ID，仅取值：**cn-hangzhou**。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 访问控制策略组ID，一次最多支持查询10个访问控制策略组ID。
     */
    "AclIds"?: string[];
    /**
     * 访问控制策略组名称。一次最多支持查询10个访问控制策略组名称。
     * 名称长度为 1~128 个字符，以大小写字母或中文开头，可包含数字、半角句号（.）下划线（_）和短划线（-）。
     * @example `test-acl`
     */
    "AclName"?: string;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 第一次查询和没有下一次查询时，均无需填写。
     * - 如果有下一次查询，取值为上一次API调用返回的NextToken值。
     * @example `caeba0bbb2be03f84eb48b699f0a****`
     */
    "NextToken"?: string;
    /**
     * 分页查询时每页显示的条目数。取值范围：**1**~**50**。默认值：**10**。
     * @example `10`
     */
    "MaxResults"?: number;
    /**
     * 资源组ID。
     * @example `rg-aek2lgw4evw****`
     */
    "ResourceGroupId"?: string;
    /**
     * 访问控制策略组的标签。
     */
    "Tag"?: {
        /**
         * 访问控制策略组的标签键。一旦输入该值，则不允许为空字符串。
         * 最多支持64个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * 最多支持输入20个标签键。
         * @example `tag-key`
         */
        Key: string;
        /**
         * 访问控制策略组的标签值。一旦输入该值，可以为空字符串。
         * 最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * 最多支持输入20个标签值。
         * @example `tag-value`
         */
        Value: string;
    }[];
}
