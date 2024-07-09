export interface DescribeILMPolicyResponse {
    /**
     * 请求ID。
     * @example `FF44681E-FD41-4FDE-B8DF-295DCDD6****`
     */
    RequestId: string;
    /**
     * 指定索引生命周期的详情。
     */
    Result: {
        /**
         * 索引生命周期名称。
         * @example `ilm-history-ilm-policy`
         */
        name: string;
        /**
         * 索引生命周期内容。
         * @example `{"cold":{"minAge":"30d","actions":{"allocate":{"numberOfReplicas":1,"require":{"boxType":"warm"}},"setPriority":{"priority":100}}},"hot":{"minAge":"0s","actions":{"rollover":{"maxAge":"30d","maxDocs":10000,"maxSize":"50gb"},"setPriority":{"priority":1000}}},"delete":{"minAge":"30d","actions":{"delete":{}}}}`
         */
        phases: any;
    };
}
