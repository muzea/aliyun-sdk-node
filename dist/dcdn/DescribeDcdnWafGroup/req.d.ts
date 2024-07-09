export interface DescribeDcdnWafGroupRequest {
    /**
     * 语言类型，将以此语言返回。取值范围：
     * - **en**：英文。
     * - **zh**：中文。
     * @example `zh`
     */
    "Language": string;
    /**
     * WAF规则组ID。您可以通过[DescribeDcdnWafGroups](~~DescribeDcdnWafGroups~~)接口查询。
     * @example `1012`
     */
    "Id": number;
    /**
     * 待查询规则组的范围。
     * - **in**：规则内，返回该规则组内的规则。
     * - **out**：规则外，返回在规则全集中并且不在该规则组中的规则。
     * @example `in`
     */
    "Scope": string;
    /**
     * 查询条件，JSON序列化后的字符串。格式如下：
     * `QueryArgs={"PolicyIds":"防护策略ID范围","RuleIds":"防护规则ID范围","RuleNameLike":"防护规则名称","DomainNames":"防护域名","DefenseScenes":"waf_group","RuleStatus":"on","OrderBy":"GmtModified","Desc":"false"}`
     * >不传默认查询所有防护规则。
     * @example `{"RiskLevel":"","ProtectionType":"","ApplicationType":"","RuleIdLike":""}`
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
