export interface ListRecyclebinResponse {
    /**
     * 回收站中的文件和文件夹列表
     */
    items: any[];
    /**
     * 下一页起始资源标识符, 最后一页该值为空
     * @example `NWQ1Yjk4YmI1ZDRlYmU1Y2E0YWE0NmJhYWJmODBhNDQ2NzhlMTRhM1`
     */
    next_marker: string;
}
