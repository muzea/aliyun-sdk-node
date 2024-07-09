export interface ListPipelineIdsRequest {
    /**
     * Logstash实例ID。
     * @example `ls-cn-7g1umu96oit2e****`
     */
    "InstanceId": string;
    /**
     * 请求体参数，详情请参见下文的RequestBody章节。
     * @example `{     "userName":"elastic",     "password":"xxxxxx" }`
     */
    "body"?: string;
}
