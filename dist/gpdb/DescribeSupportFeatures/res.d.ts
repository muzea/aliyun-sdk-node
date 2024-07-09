export interface DescribeSupportFeaturesResponse {
    /**
     * 请求ID。
     * @example `63E5BE60-91FF-57F1-B873-7F1EB734B93D_2724`
     */
    RequestId: string;
    /**
     * 实例ID。
     * @example `gp-bp12ga6v69h86****`
     */
    DBInstanceId: string;
    /**
     * 当前实例支持的功能特性。目前仅支持查询如下功能特性：
     * - sample_data：样本数据集，更多介绍，请参见[样本数据集](~~452278~~)。
     * - diagnose_and_optimize：诊断与优化，更多介绍，请参见[诊断与优化](~~323453~~)。
     * @example `[ "sample_data", "diagnose_and_optimize" ]`
     */
    SupportFeatureList: string;
}
