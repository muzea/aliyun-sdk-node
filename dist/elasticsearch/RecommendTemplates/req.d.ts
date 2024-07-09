export interface RecommendTemplatesRequest {
    /**
     * 集群ID。
     * @example `es-cn-oew20apwz0007****`
     */
    "InstanceId": string;
    /**
     * 集群使用的场景化模板类型。可选值：
     * - general：通用场景
     * - analysisVisualization：数据分析场景
     * - dbAcceleration：数据库加速场景
     * - search：搜索场景
     * - log：日志场景
     * > 商业版实例支持通用场景、数据分析场景、数据库加速场景和搜索场景；日志增强版仅支持日志场景。
     * @example `general`
     */
    "usageScenario": string;
}
