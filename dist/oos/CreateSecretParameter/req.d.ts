export interface CreateSecretParameterRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 参数名称。取值范围：内容限制为字母、数字、中划线、下划线，长度不能超过180字符，且不能以ALIYUN、ACS、ALIBABA、ALICLOUD、OOS开头。
     * @example `MySecretParameter`
     */
    "Name": string;
    /**
     * 参数类型。取值范围：Secret。
     * @example `Secret`
     */
    "Type"?: string;
    /**
     * 参数内容。长度限制为4096。
     * @example `SecretParameter`
     */
    "Value": string;
    /**
     * 要给参数添加的描述信息。长度限制为200字符
     * @example `SecretParameter`
     */
    "Description"?: string;
    /**
     * 加密使用的KMS的KeyId。
     * @example `80e9409f-78fa-42ab-84bd-83f40c******`
     */
    "KeyId"?: string;
    /**
     * 保证请求的幂等性。该值由客户端生成，并且必须是全局唯一的。
     * 长度不超过64个字符，可包含英文字母、数字、短划线（-）和下划线（_）。
     * 更多详情，请参见如何保证幂等性。
     * @example `123e4567-e89b-12d3-a456-42665544****`
     */
    "ClientToken"?: string;
    /**
     * 参数的约束条件，默认为空，取值范围：
     * - AllowedValues  参数允许值，数组类型的字符串
     * - AllowedPattern  正则字符串
     * - MinLength  参数最小长度
     * - MaxLength  参数最大长度
     * @example `'{''AllowedValues":["secretparameter"],"AllowedPattern":"secretparameter","MinLength":0,"MaxLength":20}'`
     */
    "Constraints"?: string;
    /**
     * 标签。
     * @example `{"k1": "v1", "k2": "v2"}`
     */
    "Tags"?: any;
    /**
     * 资源组ID。
     * @example `rg-acfmxsn4m4******`
     */
    "ResourceGroupId"?: string;
    /**
     * KMS实例的实例ID。
     * @example `kst-hzz****`
     */
    "DKMSInstanceId"?: string;
}
