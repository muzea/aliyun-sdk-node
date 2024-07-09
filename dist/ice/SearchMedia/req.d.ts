export interface SearchMediaRequest {
    /**
     * 过滤条件。语法规则，请参见[媒资搜索协议](~~2584256~~)。
     * @example `title = '中国' and utcCreate = ['1693367158561','1693367158562']`
     */
    "Match"?: string;
    /**
     * 排序字段和排序顺序。多个使用英文逗号（,）分隔。
     * @example `utcCreate:Desc`
     */
    "SortBy"?: string;
    /**
     * 当前页码。默认值为1。
     * @example `1`
     */
    "PageNo"?: number;
    /**
     * 每页返回的数据条数。默认值为10，最大值为50。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 实体ID。
     * @example `2d3bf1e35a1e42b5ab338d701efa****`
     */
    "EntityId"?: string;
    /**
     * 翻页标识。32字段。第一次执行搜索请求时不用设置本参数。搜索请求命中数据时，服务端会返回该参数值，用于记录当前搜索数据的位置地址。请记录返回的参数值，下一次搜索时按下述要求或建议设置本参数：需要遍历搜索条件命中的所有数据时，本参数必须设置。当PageNo参数取值超过200时，建议设置本参数优化搜索性能。只能向后翻页，最大翻页距离为1000媒资。
     * @example `F8C4F642184DBDA5D93907A70AAE****`
     */
    "ScrollToken"?: string;
    /**
     * 搜索库。
     * @example `test-1`
     */
    "SearchLibName"?: string;
}
