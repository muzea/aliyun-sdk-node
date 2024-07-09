export interface RunFunctionResponse {
    /**
     * 请求ID。
     * @example `F75E60FA-7583-4E2E-AC14-6C608F89804`
     */
    RequestId: string;
    /**
     * 函数中返回的数据，格式为 JSON String。
     * @example `{"name":"tom"}`
     */
    Result: string;
    /**
     * 函数运行元数据。
     */
    RuntimeMeta: {
        /**
         * 执行时间，单位毫秒。
         * @example `523`
         */
        InvocationDuration: number;
        /**
         * 请求ID。
         * @example `980879201561364765437209427735`
         */
        RequestId: string;
        /**
         * 计费时间，单位毫秒。
         * @example `600`
         */
        BillingDuration: number;
        /**
         * 占用内存，单位 MB。
         * @example `27`
         */
        MaxMemoryUsage: number;
    };
}
