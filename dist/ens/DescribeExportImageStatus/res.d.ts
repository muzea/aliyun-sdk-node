export interface DescribeExportImageStatusResponse {
    /**
     * 镜像导出状态，如下所示：
     * -  Exporting：导出中。
     * -  Exported：已导出。
     * -  ExportError：镜像导出发生异常。
     * -  Unexported：未导出。
     * @example `Exporting`
     */
    ImageExportStatus: string;
    /**
     * 请求ID。
     * @example `14BBB3A0-3DBE-54F5-AEC8-01D3F6B1EBE2`
     */
    RequestId: string;
}
