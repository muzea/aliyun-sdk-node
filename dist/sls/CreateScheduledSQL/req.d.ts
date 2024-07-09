export interface CreateScheduledSQLRequest {
    /**
     * Project名称
     * @example `ali-test-project
    `
     */
    "project": string;
    /**
     * 定时SQL任务配置
     */
    "body"?: {
        /**
         * 定时SQL任务唯一标识
         * @example `sql-123456789-123456`
         */
        name: string;
        /**
         * 任务显示名
         * @example `ali-test-scheduled-sql`
         */
        displayName: string;
        /**
         * 任务描述
         * @example `创建一个定时SQL任务`
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
