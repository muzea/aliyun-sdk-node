export interface ListWorkItemWorkFlowStatusRequest {
    /**
     * 企业标识，也称企业id，字符串形式，可在云效访问链接中获取，如https://devops.aliyun.com/organization/【OrganizationId】
     * @example `5ebbc0228123212b59xxxxx`
     */
    "organizationId": string;
    /**
     * 空间类型
     * @example `Project`
     */
    "spaceType": string;
    /**
     * 工作项大类型，需求为Req，缺陷为Bug，任务为Task，风险为Risk
     * @example `Req`
     */
    "workitemCategoryIdentifier": string;
    /**
     * 工作项小类型id，可以从ListProjectWorkitemTypes获取，对应字段为identifier。如果不填，则默认为默认工作流。
     * @example `例：5e7xxxxb3cd3711dd6xxx2c`
     */
    "workitemTypeIdentifier"?: string;
    /**
     * 项目id，同projectId字段，项目唯一标识id
     * @example `例：5e70xxxxxxcd000xxxxe96`
     */
    "spaceIdentifier": string;
}
