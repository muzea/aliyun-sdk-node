export interface ListPipelineRequest {
    /**
     * Logstash实例ID。
     * @example `ls-cn-oew1qbgl****`
     */
    "InstanceId": string;
    /**
     * 管道ID。
     * @example `pipeline_test`
     */
    "pipelineId"?: string;
    /**
     * 分页查询时，设置当前页面的页码。取值范围：1~200，默认值：1。
     * @example `1`
     */
    "page"?: number;
    /**
     * 分页查询时，设置每页包含管道的数量。取值范围：1~200。
     * @example `15`
     */
    "size"?: number;
}
