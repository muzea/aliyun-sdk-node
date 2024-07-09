export interface ListFunctionExecuteLogResponse {
    /**
     * 日志列表
     */
    LogList: {
        /**
         * 分页信息
         */
        Pagination: {
            /**
             * 目标页号
             * @example `1`
             */
            PageIndex: number;
            /**
             * 每页所显示的项数
             * @example `10`
             */
            PageSize: number;
            /**
             * 是否有下一页
             * @example `true`
             */
            HasNextPage: boolean;
        };
        /**
         * 日志数组
         */
        Logs: {
            /**
             * 函数执行时，标准输出的日志内容
             * @example `2018-08-21T03:28:50.267Z 5f541c0a-2175-7651-7b7e-c8a0bff5cb7e [info] This is output of console.log`
             */
            Message: string;
            /**
             * 后端运行环境调用的编号
             * @example `5f541c0a-2175-7651-7b7e-c8a0bff5cb7e`
             */
            BackEndRequestId: string;
        }[];
    };
    /**
     * 请求ID
     * @example `629586FE-CB2E-4742-995E-121F952CEB72`
     */
    RequestId: string;
}
