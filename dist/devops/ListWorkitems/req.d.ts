export interface ListWorkitemsRequest {
    /**
     * 企业标识，也称企业id，字符串形式，可在云效访问链接中获取，如https://devops.aliyun.com/organization/【OrganizationId】
     * @example `5ebbc0228123212b59xxxxx`
     */
    "organizationId": string;
    /**
     * 资源类型
     * @example `Project`
     */
    "spaceType": string;
    /**
     * 项目id，同projectId，项目唯一标识id
     * @example `8fb83debd69a6c7c6626......`
     */
    "spaceIdentifier": string;
    /**
     * 工作项大类型，需求为Req，缺陷为Bug，任务为Task，风险为Risk，原始诉求为Request，主题为Topic
     * @example `Req`
     */
    "category": string;
    /**
     * 第一页值不需要填写，后面每一页的值需要从前一次调用结果中获取到此字段，然后获取后面的分页数据
     * @example `""`
     */
    "nextToken"?: string;
    /**
     * 每页最大返回数量，0-200，默认值20
     * @example `20`
     */
    "maxResults"?: string;
    /**
     * 过滤条件，可以参考页面上的工作项列表中请求workitem/list的搜索参数。
     * 注意：里面的人员id，要为阿里云accountID，即账号ID
     * @example `{"conditionGroups":[]}`
     */
    "conditions"?: string;
    /**
     * 额外条件，当该字段不为空时，conditions也不能为空
     * @example `{"conditionGroups":[]}`
     */
    "extraConditions"?: string;
    /**
     * 分组条件，可以参考页面上的工作项列表中请求workitem/list的搜索参数。
     * 注意：里面的人员id，要为阿里云accountID，即账号ID
     * @example `{"fieldIdentifier":"tag","className":"tag","format":"multiList","value":["c76e0e4bf64801cfad73......"],"operator":"EQUALS"}`
     */
    "groupCondition"?: string;
    /**
     * 排序顺序，可以参考页面上的工作项列表中请求workitem/list的搜索参数。
     * 注意：里面的人员id，要为阿里云accountID，即账号ID
     * @example `{"fieldIdentifier":"status","format":"list","order":"desc","className":"status"}`
     */
    "orderBy"?: string;
    /**
     * 搜索类型，默认是LIST，还可支持树形TREE等类型，具体更多参见页面请求的参数。
     * @example `LIST`
     */
    "searchType"?: string;
}
