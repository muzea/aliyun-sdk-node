export interface GetTaskResponse {
    /**
     * 错误信息
     * @example `无`
     */
    Message: string;
    /**
     * 请求 ID
     * @example `A1899517-BB99-5D3E-A71B-97524DCB0942`
     */
    RequestId: string;
    /**
     * 任务数据
     */
    Data: {
        /**
         * 任务状态
         * @example `runnable`
         */
        Status: string;
        /**
         * 创建日期
         * @example `2020-07-14T14:01:41.000+08:00`
         */
        CreatedAt: string;
        /**
         * 检测任务 ID
         * @example `59b0bbfe-929b-4a8c-9833-3ce70b4bad38`
         */
        Id: string;
        /**
         * 检测结果视频 URL
         * @example `http://oss.aliyuncs.com/1.mp4`
         */
        VideoUrl: string;
    };
    /**
     * 状态码
     * @example `OK`
     */
    Code: string;
}
