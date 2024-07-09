export interface GetRulesCountResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `BE120DAB-F4E7-4C53-ADC3-A97578AB****`
     */
    RequestId: string;
    /**
     * 用户自定义规则总数。
     * @example `10`
     */
    TotalUserDefineRuleCount: number;
    /**
     * 系统防御规则总数。
     * @example `10`
     */
    TotalSystemClientRuleCount: number;
}
