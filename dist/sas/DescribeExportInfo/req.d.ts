export interface DescribeExportInfoRequest {
    /**
     * 导出任务的ID。
     * > 您可以调用[ExportRecord](~~ExportRecord~~)接口发起导出后获取该参数。
     * @example `111`
     */
    "ExportId": number;
}
