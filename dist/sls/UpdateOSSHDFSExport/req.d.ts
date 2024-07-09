export interface UpdateOSSHDFSExportRequest {
    /**
     * Project名称
     * @example `my-project`
     */
    "project": string;
    /**
     * 已存在的唯一任务名称
     * @example `export-osshdfs-1234567890-123456
    `
     */
    "ossExportName": string;
    /**
     * OSS-HDFS投递任务配置
     */
    "body"?: {
        /**
         * 任务显示名
         * @example `my-oss-hdfs-job
        `
         */
        displayName: string;
        /**
         * 任务描述
         * @example `更新OSS-HDFS投递任务
        `
         */
        description: string;
        /**
         * 任务配置
         */
        configuration: any;
    };
}
