export interface ListPipelineGroupPipelinesRequest {
    /**
     * 企业标识，也称企业id，字符串形式，可在云效访问链接中获取，如https://devops.aliyun.com/organization/【OrganizationId】
     * @example `5ebbc0228123212b59xxxxx`
     */
    "organizationId": string;
    /**
     * 每页数量。最大支持50
     * @example `10`
     */
    "maxResults"?: number;
    /**
     * 分页token
     * @example `aaaa`
     */
    "nextToken"?: string;
    /**
     * 流水线分组id
     * @example `111`
     */
    "groupId": number;
    /**
     * 流水线名称
     * @example `流水线`
     */
    "pipelineName"?: string;
    /**
     * 流水线最后执行开始时间
     * @example `1586863220000`
     */
    "executeStartTime"?: number;
    /**
     * 流水线最后执行结束时间
     * @example `1586863220000`
     */
    "executeEndTime"?: number;
    /**
     * 流水线创建开始时间
     * @example `1586863220000`
     */
    "createStartTime"?: number;
    /**
     * 流水线最后运行状态，多个逗号分割，SUCCESS 运行成功,   RUNNING 运行中,FAIL 运行失败,CANCELED 已取消,WAITING等待中
     * @example `RUNNING,SUCCESS`
     */
    "resultStatusList"?: string;
    /**
     * 流水线创建结束时间
     * @example `1586863220000`
     */
    "createEndTime"?: number;
}
