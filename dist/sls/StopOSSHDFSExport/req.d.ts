export interface StopOSSHDFSExportRequest {
    /**
     * Project名称
     * @example `my-project`
     */
    "project": string;
    /**
     * 已存在的唯一任务名称
     * @example `export-osshdfs-123456789-123456
    `
     */
    "ossExportName": string;
}
