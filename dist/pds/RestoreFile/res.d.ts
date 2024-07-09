export interface RestoreFileResponse {
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
     * 文件或文件夹ID
     * @example `4221bf6e6ab43a255edc4463bffa6f5f5d317401`
     */
    file_id: string;
    /**
     * 异步任务ID
     * 如果是恢复文件，返回空字符串，说明不需要异步处理，已处理成功。
     * 如果是恢复文件夹，返回非空字符串，说明需要经过异步处理恢复。调用GetAsyncTask，传递异步任务ID，获取任务信息。
     * @example `4221bf6e6ab43c255edc4463bf3a6f5f5d317406`
     */
    async_task_id: string;
}
