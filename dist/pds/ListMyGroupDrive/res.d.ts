export interface ListMyGroupDriveResponse {
    /**
     * 返回的空间信息列表
     */
    items: any[];
    /**
     * 下一页起始资源标识符, 最后一页该值为空。
     * @example `NWQ1Yjk4YmI1ZDRlYmU1Y2E0YWE0NmJhYWJmODBhNDQ2NzhlMTRhMg`
     */
    next_marker: string;
    root_group_drive: any;
}
