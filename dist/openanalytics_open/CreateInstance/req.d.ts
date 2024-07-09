export interface CreateInstanceRequest {
    /**
     * 地域ID。
     * @example `cn-beijing`
     */
    "RegionId"?: string;
    /**
     * 固定为**POSTPAY**。暂只支持创建后付费实例。
     * @example `POSTPAY`
     */
    "ChargeType": string;
    /**
     * 实例类型，取值说明：
     * - **CU_SPARK**：云原生Spark引擎。
     * - **CU_PRESTO**：兼容开源Presto语法。
     * @example `CU_PRESTO`
     */
    "InstanceType": string;
    /**
     * component模块的JSON序列化。
     * @example `"{\"operable\":\"false\",\"max_cu\":\"8\",\"instance_name\":\"api-test-9\",\"min_cu\":\"0\",\"engine\":\"spark\",\"region\":\"cn-hangzhou\",\"app_name\":\"xx\",\"app_version_name\":\"xx\"}"`
     */
    "Component": string;
}
