export interface ListFacegroupsResponse {
    /**
     * 人脸分组列表
     */
    items: any[];
    /**
     * 下一页起始资源标识符, 最后一页该值为空。
     * @example `NWQ1Yjk4YmI1ZDRlYmU1Y2E0YWE0NmJhYWJmODBhNDQ2NzhlMTRhMg`
     */
    next_marker: string;
    /**
     * 命中的文件总数
     * @example `30`
     */
    total_count: number;
}
