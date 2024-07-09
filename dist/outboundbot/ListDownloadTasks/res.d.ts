export interface ListDownloadTasksResponse {
    /**
     * http状态码
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 接口状态码
     * @example `OK`
     */
    Code: string;
    /**
     * 接口提示消息
     * @example `Success`
     */
    Message: string;
    /**
     * 请求id
     * @example `904CFA7B-8AD9-50FF-9B3E-404B20B9EE31`
     */
    RequestId: string;
    /**
     * 是否成功
     * @example `True`
     */
    Success: boolean;
    /**
     * 下载任务列表
     */
    DownloadTasks: {
        /**
         * 页号
         * @example `1`
         */
        PageNumber: number;
        /**
         * 个数
         * @example `20`
         */
        PageSize: number;
        /**
         * 总计个数
         * @example `2`
         */
        TotalCount: number;
        /**
         * 下载任务数组
         */
        List: {
            /**
             * 导出状态
             * @example `Empty`
             */
            Status: string;
            /**
             * 标题
             * @example `GUI-TEST-新建风险`
             */
            Title: string;
            /**
             * 过期时间
             * @example `1646792941`
             */
            ExpireTime: number;
            /**
             * 任务id
             * @example `6b0e547e-501c-480a-812f-d27e28e74f9a`
             */
            TaskId: string;
            /**
             * 下载任务文件列表
             */
            DownloadTaskFiles: {
                /**
                 * 文件状态
                 * @example `Empty`
                 */
                Status: string;
                /**
                 * 标题
                 * @example `GUI-TEST-新建风险`
                 */
                Title: string;
                /**
                 * 完成进度
                 * @example `10`
                 */
                Progress: number;
                /**
                 * 文件id
                 * @example `UPLOADED/RECORDING/d5c651b3-3c0f-44b8-aafd-40526f2fb43d/dd33377f-abad-471b-84dd-04aed572ce60_2.wav`
                 */
                FileId: string;
            }[];
        }[];
    };
}
