export interface ListSecretParameterVersionsRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 参数名称。
     * @example `MySecretParameter`
     */
    "Name": string;
    /**
     * 分页大小。取值范围：10-100。默认为50。
     * @example `10`
     */
    "MaxResults"?: number;
    /**
     * 翻页标记的Token。
     * @example `MTRBMDc0NjAtRUJFNy00N0NBLTk3NTctMTJDQzQ3NjFENDdB`
     */
    "NextToken"?: string;
    /**
     * 参数共享类型。
     * @example `Private`
     */
    "ShareType"?: string;
    /**
     * 是否解密参数值。只有参数为true时，返回值的value才会有结果，否则为空。
     * @example `false`
     */
    "WithDecryption"?: boolean;
}
