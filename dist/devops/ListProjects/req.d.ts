export interface ListProjectsRequest {
    /**
     * 企业标识，也称企业id，字符串形式，可在云效访问链接中获取，如https://devops.aliyun.com/organization/【OrganizationId】
     * @example `5ebbc0228123212b59xxxxx`
     */
    "organizationId": string;
    /**
     * 1. 全部项目的搜索条件为：
     * {"conditionGroups":[[{"className":"user","fieldIdentifier":"users","format":"multiList","operator":"CONTAINS","value":["5f2bfdacb69d...]}],[{"className":"string","fieldIdentifier":"scope","format":"list","operator":"CONTAINS","value":["public"]}]]}
     * 2. 我管理的项项目条件为：
     * {"conditionGroups":[[{"className":"user","fieldIdentifier":"project.admin","format":"multiList","operator":"CONTAINS","value":["5f2bfdacb69d..."]}]]}
     * 3. 具体其他的搜索条件，可以参考页面上的项目列表中请求/project/search/list的搜索参数。
     * @example `附加过滤条件`
     */
    "extraConditions"?: string;
    /**
     * 过滤条件
     * @example `{
          "conditionGroups": [
                []
          ]
    }`
     */
    "conditions"?: string;
    /**
     * 项目类型，这里填Project即可
     * @example `Project`
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
    "maxResults"?: number;
    /**
     * 公开类型，all/collect，分别代表所有的项目或者我收藏的
     * @example `all`
     */
    "scope"?: string;
}
