export interface ListProjectWorkitemTypesRequest {
    /**
     * 企业标识，也称企业id，字符串形式，可在云效访问链接中获取，如https://devops.aliyun.com/organization/【OrganizationId】
     * @example `5ebbc0228123212b59xxxxx`
     */
    "organizationId": string;
    /**
     * 项目id，同spaceIdentifier，项目唯一标识
     * @example `asd345xxxxx9q9845xxxxx34`
     */
    "projectId": string;
    /**
     * 空间类型，这里填Project即可。
     * @example `Project`
     */
    "spaceType": string;
    /**
     * 工作项类型，需求为Req，缺陷为Bug，任务为Task，风险为Risk
     * @example `Req`
     */
    "category": string;
}
