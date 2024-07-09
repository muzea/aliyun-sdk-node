export interface ListLogicTablesRequest {
    /**
     * 租户ID。
     * > 取自系统右上角头像处悬停展示的租户ID信息，详情请参见[查看租户信息](~~181330~~)。
     * @example `-1`
     */
    "Tid"?: number;
    /**
     * 逻辑库ID。
     * @example `1`
     */
    "DatabaseId": string;
    /**
     * 第几页。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页记录数。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 逻辑表搜索关键字，前缀匹配。
     * @example `test`
     */
    "SearchName"?: string;
    /**
     * 是否返回表的GUID。
     * @example `true`
     */
    "ReturnGuid"?: boolean;
}
