export interface ListTaskItemsResponse {
    /**
     * 错误信息
     * @example `无`
     */
    Message: string;
    /**
     * 请求 ID
     * @example `59b0bbfe-929b-4a8c-9833-3ce70b4bad38`
     */
    RequestId: string;
    /**
     * 无
     */
    Data: {
        /**
         * 状态
         * @example `completed`
         */
        Status: string;
        /**
         * 创建日期
         * @example `2020-07-14T14:01:41.000+08:00`
         */
        CreatedAt: string;
        /**
         * 检测失败时的错误信息
         * @example `检测失败`
         */
        Message: string;
        /**
         * 检测结果输出，该结果是一个 JSON 格式。不同的检测项格式不一样。
         * @example `{}`
         */
        Output: string;
        /**
         * 检测项名称
         * @example `身份证识别`
         */
        Name: string;
        /**
         * 检测的视频分段号码
         * @example `1`
         */
        SegmentSeq: number;
    }[];
    /**
     * 状态码
     * @example `OK`
     */
    Code: string;
}
