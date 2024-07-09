export interface DescribeDcdnWafDefaultRulesRequest {
    /**
     * 查询条件，JSON序列化后的字符串。
     * 格式如下：` QueryArgs={"DefenseScene":"anti_scan"}`
     * @example `{"DefenseScene":"anti_scan"}`
     */
    "QueryArgs"?: string;
}
