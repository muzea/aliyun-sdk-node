export interface StartOSSIngestionRequest {
    /**
     * Project名称
     * @example `ali-test-project
    `
     */
    "project": string;
    /**
     * OSS导入任务名称
     * @example `ingest-oss-123456`
     */
    "ossIngestionName": string;
}
