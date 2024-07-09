export interface SearchStoriesResponse {
    /**
     * 故事列表
     */
    items: any[];
    /**
     * 下次查询位置
     * @example `Yjk4YmI1ZDRlYmU1Y2E0YWE0NmJ***`
     */
    next_marker: string;
}
