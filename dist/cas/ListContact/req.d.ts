export interface ListContactRequest {
    /**
     * 搜索关键词。例如姓名、邮箱和电话中的关键字。
     * @example `186`
     */
    "Keyword"?: string;
    /**
     * 分页查询时，设置每页显示联系人的个数。
     * @example `20`
     */
    "ShowSize"?: number;
    /**
     * 分页，当前页，默认1。
     * @example `1`
     */
    "CurrentPage"?: number;
}
