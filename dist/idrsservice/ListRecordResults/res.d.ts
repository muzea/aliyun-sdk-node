export interface ListRecordResultsResponse {
    /**
     * requestId
     * @example `A1899517-BB99-5D3E-A71B-97524DCB0942`
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
         * 总数据项数
         * @example `10`
         */
        TotalElements: number;
        /**
         * 总页数
         * @example `11`
         */
        TotalPages: number;
        /**
         * 当前页面数据项
         */
        Items: {
            /**
             * 双录记录 ID
             * @example `A1899517-BB99-5D3E-A71B-97524DCB0942`
             */
            Id: string;
            /**
             * 创建时间
             * @example `2020-07-14T14:01:41.000+08:00`
             */
            CreatedAt: string;
            /**
             * 业务检测流程名
             * @example `process name`
             */
            DetectProcessName: string;
            /**
             * 部门名
             * @example `XX部门`
             */
            DepartmentName: string;
            /**
             * 应用名
             * @example `myapp`
             */
            AppName: string;
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
             * @example `22`
             */
            Duration: number;
            /**
             * 检测状态
             * @example `runnable`
             */
            Status: string;
            /**
             * mrtc 房间 ID
             * @example `642662467657798`
             */
            RoomId: string;
            /**
             * mrtc录制ID
             * @example `record_65703154805715668342`
             */
            RtcRecordId: string;
            /**
             * 业务ID，用户自定义
             * @example `fasfasda`
             */
            OuterBusinessId: string;
        }[];
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
         * @example `A1899517-BB99-5D3E-A71B-97524DCB0942`
         */
        Field: string;
        /**
         * 错误信息
         * @example `无`
         */
        Message: string;
    }[];
}
