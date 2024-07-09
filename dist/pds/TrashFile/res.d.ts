export interface TrashFileResponse {
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
     * @example `4221bf6e6ab43c255edc4463bf3a6f5f5d317406`
     */
    file_id: string;
    /**
     * 异步任务ID
     * 如果返回为空字符串，表示直接放入回收站成功。
     * 如果返回非空字符串，表示需要经过异步处理。调用GetAsyncTask，传递异步任务ID，获取任务信息。
     * @example `13ebd3a24dba4166b1527add676ef2866051b4d5dele16`
     */
    async_task_id: string;
}
