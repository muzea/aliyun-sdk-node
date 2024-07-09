export interface ListPipelinesRequest {
    /**
     * 企业标识，也称企业id，字符串形式，可在云效访问链接中获取，如https://devops.aliyun.com/organization/【OrganizationId】
     * @example `5ebbc0228123212b59xxxxx`
     */
    "organizationId": string;
    /**
     * 流水线名称
     * @example `流水线A`
     */
    "pipelineName"?: string;
    /**
     * 创建者阿里云账号Id，多个逗号分割
     * @example `112122121`
     */
    "creatorAccountIds"?: string;
    /**
     * 执行者阿里云账号id，多个逗号分割
     * @example `1111111`
     */
    "executeAccountIds"?: string;
    /**
     * 状态列表，多个逗号分割，SUCCESS,RUNNING,FAIL,CANCELED,WAITING
     * @example `RUNNING,SUCCESS`
     */
    "statusList"?: string;
    /**
     * 创建开始时间
     * @example `1586863220000`
     */
    "createStartTime"?: number;
    /**
     * 创建结束时间
     * @example `1586863220000`
     */
    "createEndTime"?: number;
    /**
     * 执行开始时间
     * @example `1586863220000`
     */
    "executeStartTime"?: number;
    /**
     * 执行结束时间
     * @example `1586863220000`
     */
    "executeEndTime"?: number;
    /**
     * 最大返回数量
     * @example `20`
     */
    "maxResults"?: number;
    /**
     * 分页token
     * @example `aaaaaaaaaa`
     */
    "nextToken"?: string;
}
