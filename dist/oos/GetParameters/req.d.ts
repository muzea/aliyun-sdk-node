export interface GetParametersRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 参数名称，可以由多个参数名称组成一个JSON数组，格式为 \["xxxxxxxxx", "yyyyyyyyy", … "zzzzzzzzz"\] ，最多支持10个参数名称，参数名称之间用半角逗号（,）隔开。
     * @example `["parameter1","parameter2"]`
     */
    "Names": string;
}
