export interface DeleteScheduledSQLRequest {
    /**
     * Project名称
     * @example `ali-test-project
    `
     */
    "project"?: string;
    /**
     * 已存在的唯一任务名称
     * @example `sql-123456789-123456
    `
     */
    "scheduledSQLName"?: string;
}
