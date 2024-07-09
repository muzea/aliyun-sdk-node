export interface DetachKeyPairRequest {
    /**
     * 指定的轻量应用服务器所属的地域ID。
     * @example `cn-hangzhou	`
     */
    "RegionId": string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](~~25693~~)。
     * @example `123e4567-e89b-12d3-a456-426655440000	`
     */
    "ClientToken"?: string;
    /**
     * 解绑SSH密钥对的实例ID。最多支持50个实例ID。
     */
    "InstanceIds": string[];
    /**
     * 密钥对名称。必须保持名称唯一性。 长度为2~64个英文或中文字符。必须以大小写字母或中文开头，不能以 http:// 和 https:// 开头。可以包含数字、半角冒号（:）、下划线（_）或者短划线（-）。
     * @example `KeyPairName`
     */
    "KeyPairName": string;
}
