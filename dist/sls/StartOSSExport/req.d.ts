export interface StartOSSExportRequest {
    /**
     * Project名称
     * @example `my-project
    `
     */
    "project": string;
    /**
     * 已存在的唯一任务名称
     * @example `export-oss-1234567890-123456
    `
     */
    "ossExportName": string;
}
