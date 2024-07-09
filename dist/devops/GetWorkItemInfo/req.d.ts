export interface GetWorkItemInfoRequest {
    /**
     * 企业标识，也称企业id，字符串形式，可在云效访问链接中获取，如https://devops.aliyun.com/organizatio
     * @example `5e706xxxxxx01xxx96`
     */
    "organizationId": string;
    /**
     * 工作项id，同workitemIdentifier字段，工作项唯一标识，可以在获取工作项列表的接口ListWorkItems中获取
     * @example `ce2xxxx21580baxxxx633f13`
     */
    "workitemId": string;
}
