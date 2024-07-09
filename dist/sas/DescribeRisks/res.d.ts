export interface DescribeRisksResponse {
    /**
     * 基线列表。
     */
    Risks: {
        /**
         * 基线ID。
         * @example `54`
         */
        RiskId: number;
        /**
         * 基线的名称。
         * @example `Alibaba Cloud Standard - Ubuntu Security Baseline`
         */
        RiskName: string;
        /**
         * 基线详细描述。
         * @example `Ubuntu 14, Ubuntu 16, Ubuntu 18, Ubuntu 20 baseline based on Alibaba Cloud best security practices`
         */
        RiskDetail: string;
        /**
         * 基线分类名称。
         * @example `cis`
         */
        RiskType: string;
        /**
         * 基线分类显示名称
         * @example `Best security practices`
         */
        TypeAlias: string;
        /**
         * 基线子分类。
         * @example `hc_ubuntu`
         */
        SubRiskType: string;
        /**
         * 基线子分类显示名称。
         * @example `Alibaba Cloud Standard - Ubuntu Security Baseline`
         */
        SubTypeAlias: string;
    }[];
    /**
     * 查询到的基线数据的总条数。
     * @example `23`
     */
    TotalCount: number;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `EA54FE21-B006-5DFF-8D64-C4FFECDA****`
     */
    RequestId: string;
}
