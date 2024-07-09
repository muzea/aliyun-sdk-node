export interface DescribeDcdnWafRulesRequest {
    /**
     * 查询条件，JSON序列化后的字符串。
     * 格式如下：```QueryArgs={"PolicyIds":"防护策略ID范围","RuleIds":"防护规则ID范围","RuleNameLike":"防护规则名称","DomainNames":"防护域名","DefenseScenes":"waf_group","RuleStatus":"on","OrderBy":"GmtModified","Desc":"false"}```
     * >不传默认查询所有防护规则。
     * @example `{"RuleIds":"100001,200002"}`
     */
    "QueryArgs"?: string;
    /**
     * 页码，默认值**1**，取值范围：**1**~**100000**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页显示的防护规则个数，默认值**20**，取值范围：**1**~**500**之间的任意整数。
     * @example `20`
     */
    "PageSize"?: number;
}
