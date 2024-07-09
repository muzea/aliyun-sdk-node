export interface UpdateOSSExportRequest {
    /**
     * Project名称
     * @example `my-project`
     */
    "project": string;
    /**
     * 已存在的唯一任务名称
     * @example `export-oss-1234567890-123456
    `
     */
    "ossExportName": string;
    /**
     * OSS投递任务配置
     */
    "body"?: {
        /**
         * 任务显示名
         * @example `my-oss-job
        `
         */
        displayName: string;
        /**
         * 任务描述
         * @example `更新OSS投递任务
        `
         */
        description: string;
        /**
         * 任务配置
         */
        configuration: any;
    };
}
