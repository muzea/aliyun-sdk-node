export interface GetSecretParametersRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 参数名称，可以由多个参数名称组成一个JSON数组，格式为 \["xxxxxxxxx", "yyyyyyyyy", … "zzzzzzzzz"\] ，最多支持10个参数名称，参数名称之间用半角逗号（,）隔开。
     * @example `["secretParameter","secretParameter1"]`
     */
    "Names": string;
    /**
     * 是否解密参数值。
     * 取值范围：
     * - true
     * - false（默认）
     * @example `false`
     */
    "WithDecryption"?: boolean;
}
