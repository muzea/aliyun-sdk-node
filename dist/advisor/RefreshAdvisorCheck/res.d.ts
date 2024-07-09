export interface RefreshAdvisorCheckResponse {
    /**
     * 请求返回数据。
     */
    Data: {
        /**
         * 请求是否成功。
         * @example `true`
         */
        Success: boolean;
        /**
         * 链路追踪ID。
         * @example `manual-1be17af1121b4974822e69daee4f2481`
         */
        TraceId: string;
        /**
         * 后台生成的任务ID。
         * @example `95906135`
         */
        TaskId: number;
    };
    /**
     * 请求ID。
     * @example `566331F9-5AB3-550F-B745-A730331F97A9`
     */
    RequestId: string;
}
