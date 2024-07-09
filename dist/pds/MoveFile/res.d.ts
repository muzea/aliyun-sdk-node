export interface MoveFileResponse {
    /**
     * 域id
     * @example `bj1`
     */
    domain_id: string;
    /**
     * 空间id
     * @example `1`
     */
    drive_id: string;
    /**
     * 文件id
     * @example `fileid1`
     */
    file_id: string;
    /**
     * 异步任务id。
     * 如果返回为空字符串，表示直接移动成功。
     * 如果返回非空字符串，表示需要经过异步处理。调用GetAsyncTask，传递异步任务id，获取任务信息。
     * @example `23ebd1a24dba4166b1527add476ef2866051b4d5del106`
     */
    async_task_id: string;
    /**
     * 文件是否已存在
     * @example `false`
     */
    exist: boolean;
}
