export interface DeleteFileResponse {
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
     * @example `9520943DC264`
     */
    file_id: string;
    /**
     * 异步任务id，只有异步处理的场景才会返回。后续可以调用 [GetAsyncTask](~~440456~~)，传递异步任务 id，获取任务信息。
     * @example `000e89fb-cf8f-11e9-8ab4-b6e980803a3b`
     */
    async_task_id: string;
}
