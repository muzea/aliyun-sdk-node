export interface ListPipelineRunsRequest {
    /**
     * 企业标识，也称企业id，字符串形式，可在云效访问链接中获取，如https://devops.aliyun.com/organization/【OrganizationId】
     * @example `5ebbc0228123212b59xxxxx`
     */
    "organizationId": string;
    /**
     * 开始时间
     * @example `1586863220000`
     */
    "startTime"?: number;
    /**
     * 结束时间
     * @example `1586863220000`
     */
    "endTime"?: number;
    /**
     * 状态 FAIL 运行失败 SUCCESS 运行成功 RUNNING 运行中
     * @example `RUNNING`
     */
    "status"?: string;
    /**
     * 最大返回数量
     * @example `20`
     */
    "maxResults"?: number;
    /**
     * 分页token
     * @example `aaaaaa`
     */
    "nextToken"?: string;
    /**
     * 流水线ID，可在流水线链接中获取，如https://flow.aliyun.com/pipelines/【PipelineId】/current
     * @example `1233`
     */
    "pipelineId": number;
    /**
     * - 触发模式
     *
     *   1人工触发
     *
     *   2定时触发
     *   3代码提交触发
     *
     *   5流水线触发
     *   6WEBHOOK触发
     * @example `1`
     */
    "triggerMode"?: number;
}
