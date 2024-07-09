export interface DescribeUsersRequest {
    /**
     * 分页查询时每页行数。
     * - 取值范围：1~500。
     * - 默认值：500。
     * @example `10`
     */
    "MaxResults"?: number;
    /**
     * 下一次查询的Token。首次调用接口时无需设置该参数。
     * 如果一次查询结果并没有完整返回所有的结果，则返回的NextToken不为空。您可以在查询中上传返回的NextToken继续查询。
     * @example `caeba0bbb2be03f84eb48b699f0a****`
     */
    "NextToken"?: string;
    /**
     * 模糊搜索字符串，支持匹配用户名（EndUserId）和邮箱（Email）。该字段支持使用通配符（*），例如将该字段设为`a*m`，则返回用户名或邮箱以`a`开头、以`m`结尾的所有结果。
     * @example `a*m`
     */
    "Filter"?: string;
    /**
     * 需精确匹配的用户名（EndUserId）列表。
     */
    "EndUserIds"?: string[];
    /**
     * 需精确排除的用户名（EndUserId）列表。
     */
    "ExcludeEndUserIds"?: string[];
    /**
     * 按组织ID精确匹配，查询归属该组织的用户列表。
     * @example `org-4mdgc1cocc59z****`
     */
    "OrgId"?: string;
    /**
     * 按用户组ID精确匹配，查询归属该用户组的用户列表。
     * @example `ug-12341234****`
     */
    "GroupId"?: string;
}
