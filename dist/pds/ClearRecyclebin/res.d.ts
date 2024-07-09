export interface ClearRecyclebinResponse {
    /**
     * 域ID
     * @example `bj1`
     */
    domain_id: string;
    /**
     * 空间ID
     * @example `1`
     */
    drive_id: string;
    /**
     * 异步任务ID
     * 调用GetAsyncTask，传递异步任务ID，获取任务信息
     * @example `13ebd3a24dba4166b1527add676ef2866051b4d5dele16`
     */
    async_task_id: string;
}
