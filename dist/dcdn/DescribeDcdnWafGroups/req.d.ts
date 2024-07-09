export interface DescribeDcdnWafGroupsRequest {
    /**
     * 语言类型，将以此语言返回。取值范围：
     * - **en**：英文 (默认)。
     * - **zh**：中文。
     * @example `zh`
     */
    "Language"?: string;
    /**
     * 查询条件，JSON序列化后的字符串。格式如下：
     * `QueryArgs={"PolicyIds":"防护策略ID范围","RuleIds":"防护规则ID范围","RuleNameLike":"防护规则名称","DomainNames":"防护域名","DefenseScenes":"waf_group","RuleStatus":"on","OrderBy":"GmtModified","Desc":"false"}`
     * >不传默认查询所有防护规则。
     * @example `{"RuleIds":"100001,200002"}`
     */
    "QueryArgs"?: string;
    /**
     * 当前页码，默认值**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页大小，默认**20**。
     * @example `20`
     */
    "PageSize"?: number;
}
