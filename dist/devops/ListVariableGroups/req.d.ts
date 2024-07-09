export interface ListVariableGroupsRequest {
    /**
     * 企业标识，也称企业id，字符串形式，可在云效访问链接中获取，如https://devops.aliyun.com/organization/【OrganizationId】
     * @example `5ebbc0228123212b59xxxxx`
     */
    "organizationId": string;
    /**
     * 排序条件，默认id
     * @example `ID`
     */
    "pageSort"?: string;
    /**
     * 排序顺序	 DESC降序 ASC升序
     * @example `DESC`
     */
    "pageOrder"?: string;
    /**
     * 分页token，上一次请求的出参nextToken
     * @example `aaaaaa`
     */
    "nextToken"?: string;
    /**
     * 最大返回数
     * @example `20`
     */
    "maxResults"?: number;
}
