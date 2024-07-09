export interface ListHostGroupsRequest {
    /**
     * 企业标识，也称企业id，字符串形式，可在云效访问链接中获取，如  https:// devops.aliyun.com/organization/【OrgId】
     * @example `5ebbc0228123212b59xxxxx`
     */
    "organizationId": string;
    /**
     * 主机组id，多个逗号分割
     * @example `121,1212121232`
     */
    "ids"?: string;
    /**
     * 主机组创建时间
     * @example `1586863220000`
     */
    "createStartTime"?: number;
    /**
     * 主机组结束时间
     * @example `1586863220000`
     */
    "createEndTime"?: number;
    /**
     * 主机组名称
     * @example `主机组`
     */
    "name"?: string;
    /**
     * 创建阿里云账号id，多个逗号分割
     * @example `1112122121,3223332`
     */
    "creatorAccountIds"?: string;
    /**
     * 分页token
     * @example `221212221`
     */
    "nextToken"?: string;
    /**
     * 结果返回个数
     * @example `30`
     */
    "maxResults"?: number;
    /**
     * 排序条件ID
     * @example `ID`
     */
    "pageSort"?: string;
    /**
     * 排序顺序 DESC  降序 ASC升序
     * @example `DESC`
     */
    "pageOrder"?: string;
}
