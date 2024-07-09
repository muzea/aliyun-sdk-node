export interface UpdateScheduledSQLRequest {
    /**
     * Project名称
     * @example `ali-test-project`
     */
    "project": string;
    /**
     * 已存在的唯一任务名称
     * @example `sql-123456789-123456`
     */
    "scheduledSQLName": string;
    /**
     * 定时SQL任务配置
     */
    "body"?: {
        /**
         * 任务显示名
         * @example `ali-test-scheduled-sql`
         */
        displayName: string;
        /**
         * 任务描述
         * @example `更新定时SQL任务
        `
         */
        description: string;
        /**
         * 任务调度配置
         */
        schedule: any;
        /**
         * 任务配置
         */
        configuration: any;
    };
}
