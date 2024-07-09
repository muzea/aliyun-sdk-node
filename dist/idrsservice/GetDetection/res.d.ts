export interface GetDetectionResponse {
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
         * 状态
         * @example `runnable`
         */
        Status: string;
        /**
         * 部门名称
         * @example `部门`
         */
        DepartmentName: string;
        /**
         * 任务列表
         */
        Tasks: {
            /**
             * 任务状态
             * @example `runnable`
             */
            Status: string;
            /**
             * 视频 meta 地址
             * @example `http://oss.aliyun.com/1.mp4.meta`
             */
            VideoMetaUrl: string;
            /**
             * 创建日期
             * @example `2020-07-14T14:01:41.000+08:00`
             */
            CreatedAt: string;
            /**
             * 任务 ID
             * @example `59b0bbfe-929b-4a8c-9833-3ce70b4bad38`
             */
            Id: string;
            /**
             * 视频地址
             * @example `http://oss.aliyun.com/1.mp4`
             */
            VideoUrl: string;
        }[];
        /**
         * 录制类型
         * @example `local`
         */
        RecordingType: string;
        /**
         * 创建日期
         * @example `2020-07-14T14:01:41.000+08:00`
         */
        CreatedAt: string;
        /**
         * 部门 ID
         * @example `59b0bbfe-929b-4a8c-9833-3ce70b4bad38`
         */
        DepartmentId: string;
        /**
         * ID
         * @example `59b0bbfe-929b-4a8c-9833-3ce70b4bad38`
         */
        Id: string;
        /**
         * 规则名称
         * @example `default`
         */
        RuleName: string;
        /**
         * 规则 ID
         * @example `59b0bbfe-929b-4a8c-9833-3ce70b4bad38`
         */
        RuleId: string;
    };
    /**
     * 返回码
     * @example `OK`
     */
    Code: string;
}
