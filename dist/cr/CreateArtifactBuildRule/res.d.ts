export interface CreateArtifactBuildRuleResponse {
    /**
     * 返回值。
     * @example `success`
     */
    Code: string;
    /**
     * 是否成功。
     * @example `true`
     */
    IsSuccess: boolean;
    /**
     * 请求ID。
     * @example `C8E90AB5-0A96-5D12-9E59-11EE46360642`
     */
    RequestId: string;
    /**
     * 构建规则ID。
     * @example `crabr-7dfa5qye5****`
     */
    BuildRuleId: string;
}
