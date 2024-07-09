export interface DescribeDcdnWafPoliciesRequest {
    /**
     * 按条件查询，JSON序列化后的字符串。
     * 格式如下：```QueryArgs={"PolicyIds":"防护策略ID","RuleIds":"防护规则ID范围","PolicyNameLike":"防护策略名称","DomainNames":"防护域名","PolicyType":"default","DefenseScenes":"waf_group","PolicyStatus":"on","OrderBy":"GmtModified","Desc":"false"}```
     * >不传默认查询所有防护策略。
     * @example `{"PolicyNameLIike":"test_policy"}`
     */
    "QueryArgs"?: string;
    /**
     * 页码，默认值**1**，取值范围：**1**~**100000**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页显示的防护策略个数，默认值**20**，取值范围：**1**~**500**之前的任意整数。
     * @example `20`
     */
    "PageSize"?: number;
}
