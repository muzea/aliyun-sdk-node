export interface DeleteSecretParameterRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 加密参数名称。取值范围：内容限制为字母、数字、中划线、下划线，长度不能超过180字符，且不能以ALIYUN、ACS、ALIBABA、ALICLOUD、OOS开头。
     * @example `MySecretParameter`
     */
    "Name": string;
}
