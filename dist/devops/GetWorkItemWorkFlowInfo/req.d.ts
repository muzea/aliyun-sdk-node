export interface GetWorkItemWorkFlowInfoRequest {
    /**
     * 企业标识，也称企业id，字符串形式，可在云效访问链接中获取，如https:
     * //devops.aliyun.com/organization/【OrganizationId】
     * @example `5ebbc0228123212b59xxxxx`
     */
    "organizationId": string;
    /**
     * 对应工作项类型的工作流配置id，该值可以从页面接口请求：https:
     * //devops.aliyun.com/projex/api/workitem/workitemType/setting/space/getSpaceWorkitemTypeScope?spaceType=Project&spaceIdentifier=c595d0c3df4c743ac811......&workitemTypeIdentifier=ba102e46bc6a8483...... 中获取。对应的字段值在result-> configurations-> 中configType为Workflow的identifier。
     * @example `711d33c738b9171c45fa......`
     */
    "configurationId"?: string;
    /**
     * 工作项id，同workitemIdentifier字段，工作项唯一标识
     * @example `fd0xxxxx00d355b05df60xxxx`
     */
    "workitemId"?: string;
}
