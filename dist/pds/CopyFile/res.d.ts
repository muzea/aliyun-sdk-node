export interface CopyFileResponse {
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
     * 复制后的新文件或文件夹 id
     * @example `4221bf6e6ab43a255edc4463bffa6f5f5d317401`
     */
    file_id: string;
    /**
     * 异步任务id。
     * 当复制的是文件时，不返回该字段；当复制的是文件夹时，为后台异步复制，会返回该字段，调用GetAsyncTask，传递异步任务id，获取任务信息。
     * @example `000e89fb-cf8f-11e9-8ab4-b6e980803a3b`
     */
    async_task_id: string;
}
