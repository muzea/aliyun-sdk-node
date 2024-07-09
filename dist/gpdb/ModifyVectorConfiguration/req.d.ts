export interface ModifyVectorConfigurationRequest {
    /**
     * 实例ID。
     * > 您可以调用[DescribeDBInstances](~~86911~~)接口查看目标地域下所有的AnalyticDB PostgreSQL实例的实例ID。
     * @example `gp-bp12ga6v69h86****`
     */
    "DBInstanceId"?: string;
    /**
     * 是开开启向量引擎优化配置。取值如下：
     * - **enabled**：开启向量引擎优化。
     * - **disabled**：不开启向量引擎优化。
     * > - 对于主流分析场景、数仓场景、实时数仓等场景，建议**不开启**向量引擎优化。
     * - 对于使用向量分析引擎用于AIGC、向量检索等场景用户，建议**开启**向量引擎优化。
     * @example `enabled`
     */
    "VectorConfigurationStatus"?: string;
}
