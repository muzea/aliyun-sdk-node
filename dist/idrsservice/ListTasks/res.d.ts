export interface ListTasksResponse {
    /**
     * 错误信息
     * @example `-`
     */
    Message: string;
    /**
     * 请求 ID
     * @example `59b0bbfe-929b-4a8c-9833-3ce70b4bad38`
     */
    RequestId: string;
    /**
     * -
     */
    Data: {
        /**
         * 数据
         */
        Items: {
            /**
             * 状态
             * @example `runnable`
             */
            Status: string;
            /**
             * 视频 meta 地址
             * @example `http://oss.aliyuncs.com/1.mp4.meta?expire=2010323&sign=sf2324`
             */
            VideoMetaUrl: string;
            /**
             * 创建日期
             * @example `2020-07-14T14:01:41.000+08:00`
             */
            CreatedAt: string;
            /**
             * ID
             * @example `59b0bbfe-929b-4a8c-9833-3ce70b4bad38`
             */
            Id: string;
            /**
             * 视频地址
             * @example `http://oss.aliyuncs.com/1.mp4?expire=2010323&sign=sf2324`
             */
            VideoUrl: string;
        }[];
        /**
         * 页数
         * @example `1`
         */
        TotalPages: number;
        /**
         * 条目数
         * @example `1`
         */
        TotalElements: number;
    };
    /**
     * 状态码
     * @example `OK`
     */
    Code: string;
}
