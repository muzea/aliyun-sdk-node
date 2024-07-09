export interface UploadReportResponse {
    /**
     * requestId
     * @example `84118BF0-56F7-54D2-8C1A-35BBBB*****`
     */
    RequestId: string;
    /**
     * code
     * @example `OK`
     */
    Code: string;
    /**
     * 提示
     * @example `无`
     */
    Message: string;
    /**
     * 数据
     */
    Data: {
        /**
         * 双录记录 ID
         * @example `59b0bbfe-929b-4a8c-9833-3ce7****`
         */
        Id: string;
        /**
         * 创建时间
         * @example `2020-07-14T14:01:41.000+08:00`
         */
        CreatedAt: string;
        /**
         * 视频地址
         * @example `http://oss.aliyuncs.com/1.mp4`
         */
        VideoUrl: string;
        /**
         * meta 地址
         * @example `http://oss.aliyuncs.com/1.mp4.meta`
         */
        MetaUrl: string;
        /**
         * 结果地址
         * @example `http://oss.aliyuncs.com/1.mp4.json`
         */
        ResultUrl: string;
        /**
         * 录制时间
         * @example `2020-07-14T14:01:41.000+08:00`
         */
        RecordAt: string;
        /**
         * 时长
         * @example `12`
         */
        Duration: number;
        /**
         * mrtc录制ID
         * @example `record_6570315480571566****
        `
         */
        RtcRecordId: string;
        /**
         * 业务ID，用户自定义
         * @example `ads32efef43`
         */
        OuterBusinessId: string;
    };
    /**
     * 给 pop 使用的
     * @example `True`
     */
    Success: boolean;
    /**
     * HTTP 状态码
     * @example `200`
     */
    HttpCode: number;
    /**
     * 错误列表
     */
    Errors: {
        /**
         * 错误 ID
         * @example `无`
         */
        Field: string;
        /**
         * 错误信息
         * @example `无`
         */
        Message: string;
    }[];
}
