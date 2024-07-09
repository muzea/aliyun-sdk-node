export interface GetParameterRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 参数名称。取值范围：内容限制为字母、数字、中划线、下划线，长度不能超过200字符。
     * @example `MyParameter`
     */
    "Name": string;
    /**
     * 参数版本号。取值范围：1-100。
     * @example `1`
     */
    "ParameterVersion"?: number;
    /**
     * 资源组ID。
     * @example `rg-acfmxsn4m*****`
     */
    "ResourceGroupId"?: string;
}
