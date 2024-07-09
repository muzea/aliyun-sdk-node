export interface ListResourceExecutionStatusResponse {
    /**
     * 翻页标记的Token
     * @example `MTRBMDc0NjAtRUJFNy00N0NBLTk3NTctMTJDQzQ`
     */
    NextToken: string;
    /**
     * 请求ID
     * @example `ED571CBD-9F96-419D-B919-CF340BBCA157`
     */
    RequestId: string;
    /**
     * 分页大小
     * @example `50`
     */
    MaxResults: number;
    /**
     * 资源执行信息
     */
    ResourceExecutionStatus: {
        /**
         * 模板输出结果
         * @example `{ 				"commandOutput": "hello\n" 			}`
         */
        Outputs: string;
        /**
         * 执行状态
         * @example `Success`
         */
        Status: string;
        /**
         * 执行时间
         * @example `2020-11-13T08:48:34Z`
         */
        ExecutionTime: string;
        /**
         * 资源ID
         * @example `i-bp1e1bxxxxxxxxxxxxxx`
         */
        ResourceId: string;
        /**
         * 执行ID
         * @example `exec-6be6d6ff805349d9ac13`
         */
        ExecutionId: string;
    }[];
}
