export interface DescribeDcdnWafPolicyDomainsRequest {
    /**
     * 防护策略ID，仅支持单个输入。
     * @example `100001`
     */
    "PolicyId": number;
    /**
     * 页码，默认值**1**，取值范围：**1**~**100000**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页显示的域名个数，默认值**20**，取值范围：**1**~**500**之间的任意整数。
     * @example `20`
     */
    "PageSize"?: number;
}
