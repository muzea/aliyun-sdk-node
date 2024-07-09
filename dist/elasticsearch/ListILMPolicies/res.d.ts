export interface ListILMPoliciesResponse {
    /**
     * 请求ID。
     * @example `F99407AB-2FA9-489E-A259-40CF6DCC****`
     */
    RequestId: string;
    /**
     * 请求返回的索引生命周期策略列表。
     */
    Result: {
        /**
         * 索引生命周期策略名称。
         * @example `policy-1`
         */
        name: string;
        /**
         * 索引生命周期内容。
         * @example `{"hot":{"minAge":"0ms","actions":{"rollover":{"maxSize":"50gb","maxAge":"30d"},"setPriority":{"priority":100}}},"delete":{"minAge":"3d","actions":{"delete":{}}}}`
         */
        phases: any;
    }[];
}
