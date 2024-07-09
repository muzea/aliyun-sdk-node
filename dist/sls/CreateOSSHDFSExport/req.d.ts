export interface CreateOSSHDFSExportRequest {
    /**
     * Project名称
     * @example `my-project`
     */
    "project": string;
    /**
     * OSS投递任务配置
     */
    "body"?: {
        /**
         * OSS投递任务唯一标识
         * @example `export-osshdfs-1234567890-123456`
         */
        name: string;
        /**
         * 任务显示名
         * @example `my-oss-hdfs-job
        `
         */
        displayName: string;
        /**
         * 任务描述
         * @example `创建一个OSS-HDFS投递任务
        `
         */
        description: string;
        /**
         * 任务配置
         */
        configuration: any;
    };
}
