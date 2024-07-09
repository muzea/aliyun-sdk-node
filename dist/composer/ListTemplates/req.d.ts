export interface ListTemplatesRequest {
    /**
     * 当前页码。起始值：1。默认值：1
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页大小，最大 100，默认值为 10
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 根据指定关键词搜索模板，如果指定了 Tag，则无效
     * @example `test`
     */
    "Name"?: string;
    /**
     * 根据指定的标签获取模板
     * @example `财务管理`
     */
    "Tag"?: string;
    /**
     * 模板语言：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
}
