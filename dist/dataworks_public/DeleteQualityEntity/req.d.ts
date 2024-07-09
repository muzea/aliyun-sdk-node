export interface DeleteQualityEntityRequest {
    /**
     * 分区表达式的ID。
     * @example `1234`
     */
    "EntityId": number;
    /**
     * 引擎或者数据源的名称。
     * @example `autotest`
     */
    "ProjectName": string;
    /**
     * 引擎或者数据源的类型。支持EMR、Hologres、AnalyticDB for PostgreSQL、CDH、MaxCompute、Kafka和DataHub数据源。
     * @example `odps`
     */
    "EnvType": string;
    /**
     * DataWorks项目空间ID
     * @example `12345`
     */
    "ProjectId": number;
}
