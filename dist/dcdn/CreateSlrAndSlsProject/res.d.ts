export interface CreateSlrAndSlsProjectResponse {
    /**
     * 请求ID。
     * @example `fe33a379-5053-4f22-a73c-826e2b44355d`
     */
    RequestId: string;
    /**
     * 创建的日志服务（SLS）信息。
     */
    SlsInfo: {
        /**
         * 日志服务（SLS）项目。
         * @example `dcdn-edge-rtlog-cn-cfc7****`
         */
        Project: string;
        /**
         * 日志服务（SLS）日志库。
         * @example `dcdn-edge-trlog`
         */
        LogStore: string;
        /**
         * 日志服务（SLS）接入点。
         * @example `cn-shanghai.log.*.com`
         */
        EndPoint: string;
        /**
         * 日志服务（SLS）区域。
         * @example `cn-shanghai`
         */
        Region: string;
    };
}
