export interface ListTablesRequest {
    /**
     * 租户ID，可通过调用接口[GetUserActiveTenant](~~198073~~)或[ListUserTenants](~~198074~~)获取该参数的值。
     * @example `3***`
     */
    "Tid"?: number;
    /**
     * 物理库ID，可通过调用接口[ListDatabases](~~141873~~)或[SearchDatabase](~~141876~~)获取该参数的值。
     * @example `1860****`
     */
    "DatabaseId": string;
    /**
     * 第几页。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页数据量。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 表搜索名，支持模糊搜索。
     * @example `test`
     */
    "SearchName"?: string;
    /**
     * 是否返回表的唯一识别码GUID（Globally Unique Identifier），取值如下：
     * - **true**：返回表的GUID
     * - **false**：不返回表的GUID
     * @example `true`
     */
    "ReturnGuid"?: boolean;
}
