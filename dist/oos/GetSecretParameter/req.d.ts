export interface GetSecretParameterRequest {
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
     * 参数版本号。取值范围：1-100。
     * @example `1`
     */
    "ParameterVersion"?: number;
    /**
     * 是否解密参数值。只有参数为true时，返回值的value才会有结果，否则为空。
     * @example `false`
     */
    "WithDecryption"?: boolean;
}
