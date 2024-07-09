export interface ListParameterVersionsRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 参数名称。
     * @example `MyParameter`
     */
    "Name": string;
    /**
     * 分页大小。取值范围：10-100。默认为50。
     * @example `50`
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
}
