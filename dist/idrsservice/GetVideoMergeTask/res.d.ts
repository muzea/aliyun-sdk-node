export interface GetVideoMergeTaskResponse {
    /**
     * requestId
     * @example `89A61EB9-2FF8-595D-89D3-845C8B615011`
     */
    RequestId: string;
    /**
     * code
     * @example `OK`
     */
    Code: string;
    /**
     * 提示
     * @example `-`
     */
    Message: string;
    /**
     * 数据
     */
    Data: {
        /**
         * 视频合并后的合流视频地址
         * @example `http://xxx.mp4`
         */
        MergeFileId: string;
        /**
         * 客户端流量调用id
         * @example `2fr4fa55-2364-4d79-aeb4-c093ec4a4fd4`
         */
        ClientTraceId: string;
        /**
         * 任务id
         * @example `368cfa55-2364-4d79-aeb4-c0956c4a45cd`
         */
        TaskId: string;
        /**
         * 时长
         * @example `22`
         */
        Duration: number;
        /**
         * 视频宽
         * @example `0.6`
         */
        Width: number;
        /**
         * 视频画面高
         * @example `0.6`
         */
        Height: number;
    };
    /**
     * 给 pop 使用的
     * @example `True`
     */
    Success: boolean;
    /**
     * http状态码
     * @example `200`
     */
    HttpCode: number;
    /**
     * 错误列表
     */
    Errors: {
        /**
         * 错误 ID
         * @example `A1899517-BB99-5D3E-A71B-97524DCB0942`
         */
        Field: string;
        /**
         * 错误信息
         * @example `-`
         */
        Message: string;
    }[];
}
