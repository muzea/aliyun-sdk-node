export interface UpdateOSSIngestionRequest {
    /**
     *
     * @example `ali-test-project
    `
     */
    "project": string;
    /**
     * OSS导入任务名称
     * @example `ingest-oss-123455`
     */
    "ossIngestionName": string;
    /**
     * 请求体。
     */
    "body"?: {
        /**
         * OSS导入任务描述
         * @example `OSS导入`
         */
        description: string;
        /**
         * OSS导入任务展示名称
         * @example `OSS导入`
         */
        displayName: string;
        /**
         * 调度类型，一般默认不需要填写。如果有强定时需求，如必须是每周一八点进行一次导入，可使用cron形式
         */
        schedule: any;
        /**
         * OSS导入配置
         */
        configuration: any;
    };
}
