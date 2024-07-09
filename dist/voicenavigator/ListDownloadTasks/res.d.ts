export interface ListDownloadTasksResponse {
    /**
     * http状态码
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 状态码
     * @example `OK`
     */
    Code: string;
    /**
     * 错误信息
     * @example `successful`
     */
    Message: string;
    /**
     * 请求id
     * @example `D24E0148-6D40-550E-9471-B2C5A34C3D12`
     */
    RequestId: string;
    /**
     * 是否成功
     * @example `True`
     */
    Success: boolean;
    /**
     * 下载任务数据
     */
    DownloadTasks: {
        /**
         * 页号
         * @example `1`
         */
        PageNumber: number;
        /**
         * 页面大小
         * @example `10`
         */
        PageSize: number;
        /**
         * 总数量
         * @example `2`
         */
        TotalCount: number;
        /**
         * 下载任务数组
         */
        List: {
            /**
             * 状态
             * @example `Expired`
             */
            Status: string;
            /**
             * 标题
             * @example `批量高阶内存整理_2022_02_17_10`
             */
            Title: string;
            /**
             * 过期时间
             * @example `1637119221702`
             */
            ExpireTime: number;
            /**
             * 任务id
             * @example `cb9aba69-f578-42b2-aa2f-3e5a41947db8`
             */
            TaskId: string;
            /**
             * 下载任务文件列表
             */
            DownloadTaskFiles: {
                /**
                 * 状态
                 * @example `Published`
                 */
                Status: string;
                /**
                 * 标题
                 * @example `CBU阿里通信反馈-声音延迟`
                 */
                Title: string;
                /**
                 * 下载任务完成进度
                 * @example `70`
                 */
                Progress: number;
                /**
                 * 文件id
                 * @example `c32bf5675b704dc5b19200a89d2e85f1`
                 */
                FileId: string;
            }[];
        }[];
    };
}
