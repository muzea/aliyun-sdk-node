export interface FilterUsersRequest {
    /**
     * 分页查询时每页行数（大于100时会自动重置为100）。
     * @example `10`
     */
    "MaxResults"?: number;
    /**
     * 下一次查询的Token。首次调用接口时无需设置该参数。如果一次查询结果并没有完整返回所有的结果，则返回的NextToken不为空。您可以在查询中上传返回的NextToken继续查询。
     * @example `caeba0bbb2be03f84eb48b699f0a****`
     */
    "NextToken"?: string;
    /**
     * 模糊搜索字符串，支持匹配用户名（EndUserId）和邮箱（Email）。该字段支持使用通配符（\*），例如将该字段设为a*m，则返回用户名或邮箱以a开头、以m结尾的所有结果。
     * @example `a*m`
     */
    "Filter"?: string;
    /**
     * 要模糊查询的用户属性列表。
     */
    "PropertyFilterParam"?: {
        /**
         * 属性ID。
         * @example `328`
         */
        PropertyId: number;
        /**
         * 属性值ID。
         * @example `1255`
         */
        PropertyValueIds: string;
    }[];
    /**
     * 属性名和属性值信息列表。
     */
    "PropertyKeyValueFilterParam"?: {
        /**
         * 属性名。
         * @example `job`
         */
        PropertyKey: string;
        /**
         * 属性值。
         * @example `dev`
         */
        PropertyValues: string;
    }[];
    /**
     * 是否返回已分配给该用户的云电脑数量。
     * @example `true`
     */
    "IncludeDesktopCount"?: boolean;
    /**
     * 是否返回已分配给该用户的云电脑池数量。
     * @example `false`
     */
    "IncludeDesktopGroupCount"?: boolean;
    /**
     * 企业组织ID。
     * @example `org-aliyun-wy-org-id`
     */
    "OrgId"?: string;
    /**
     * 账号激活类型。
     * @example `Normal`
     */
    "OwnerType"?: string;
    /**
     * 需精确排除的用户名（EndUserId）列表。
     */
    "ExcludeEndUserIds"?: string[];
    /**
     * 支持的排序参数。
     */
    "OrderParam"?: {
        /**
         * 按此参数排序。
         * @example `id`
         */
        OrderField: string;
        /**
         * 升序或降序。
         * @example `DESC`
         */
        OrderType: string;
    };
}
