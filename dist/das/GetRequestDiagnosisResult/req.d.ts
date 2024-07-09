export interface GetRequestDiagnosisResultRequest {
    /**
     * 实例ID。
     * @example `rm-0iwhhl8gx0ld6****`
     */
    "InstanceId": string;
    /**
     * 节点ID。
     * > 对于PolarDB MySQL版、PolarDB PostgreSQL版（兼容Oracle）和云数据库MongoDB等集群实例，需要提供节点ID。
     * @example `202****`
     */
    "NodeId"?: string;
    /**
     * 诊断ID，[CreateRequestDiagnosis](~~341609~~)接口返回的诊断唯一标识。
     * @example `61820b594664275c4429****`
     */
    "MessageId": string;
    /**
     * SQL模板ID。
     * > 此参数是DAS控制台调用API时使用，用户使用此API时无需传入。
     * @example `None`
     */
    "SqlId"?: string;
    /**
     * 任务来源。
     * > 此参数是DAS控制台调用API时使用，用户使用此API时无需传入。
     * @example `None`
     */
    "Source"?: string;
}
