export interface DescribeInstanceGrantedToExpressConnectRouterRequest {
    /**
     * 专线网关实例ID。
     * @example `ecr-mezk2idmsd0vx2****`
     */
    "EcrId": string;
    /**
     * 授权网络实例所在的地域。
     * @example `cn-hangzhou`
     */
    "InstanceRegionId"?: string;
    /**
     * 授权实例的ID。
     * @example `vbr-j6cwxhgg0s5nuephp****`
     */
    "InstanceId"?: string;
    /**
     * 授权网络实例所属阿里云账号（主账号）ID。
     * @example `129845258050****`
     */
    "InstanceOwnerId"?: number;
    /**
     * 网络实例的类型。取值：
     * - **VBR**：边界路由器实例。
     * - **VPC**：专有网络实例。
     * @example `VBR`
     */
    "InstanceType"?: string;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 第一次查询和没有下一次查询时，均无需填写。
     * - 如果有下一次查询，取值为上一次 API 调用返回的 NextToken 值。
     * @example `gAAAAABkyGzFbZR2NnxnyVk0EiL7F3qMBtBim8Es0mugRT3qb8yEHAMaHGanzuaHUmiEq9QRmok0RgxJAINBOJZa5KPjopEu_Q==`
     */
    "NextToken"?: string;
    /**
     * 本次读取的最大数据量。取值范围：1～2147483647。默认值为20。
     * @example `20`
     */
    "MaxResults"?: number;
    /**
     * 标签列表。
     */
    "TagModels"?: {
        /**
         * 资源的标签键。最多支持输入20个标签键。如果传入该值，则不能输入空字符串。
         * 最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `key`
         */
        TagKey: string;
        /**
         * 资源的标签值。最多支持输入20个标签值。如果传入该值，则不能输入空字符串。
         * 最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `value
        `
         */
        TagValue: string;
    }[];
    /**
     * 实例所属的资源组ID。
     * @example `rg-aek2tsvbnfe****`
     */
    "ResourceGroupId"?: string;
    /**
     * 是否只预检此次请求。取值：
     * - **true**：发送检查请求，不会修改服务资源。
     * - **false**（默认值）：发送正常请求。
     * @example `true`
     */
    "DryRun"?: boolean;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `02fb3da4-130e-11e9-8e44-00****
    `
     */
    "ClientToken"?: string;
}
