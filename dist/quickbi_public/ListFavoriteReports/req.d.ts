export interface ListFavoriteReportsRequest {
    /**
     * 要查询用户在Quick BI中的UserID。
     * @example `b5d8fd9348cc4327****afb604`
     */
    "UserId": string;
    /**
     * 作品名称的关键字。
     * @example `财务报表`
     */
    "Keyword"?: string;
    /**
     * 查询作品的类型（填空查询所有类型）。取值范围 ：
     * - DATAPRODUCT：数据门户
     * - PAGE：仪表板
     * - REPORT：电子表格
     * @example `PAGE`
     */
    "TreeType"?: string;
    /**
     * 查询作品列表的行数：
     * 默认值：10
     * 最大值：9999
     * @example `10`
     */
    "PageSize"?: number;
}
