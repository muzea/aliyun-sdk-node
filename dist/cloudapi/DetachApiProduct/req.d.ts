export interface DetachApiProductRequest {
    /**
     * API产品ID
     * @example `117b7a64a8b3f064eaa4a47ac62aac5e`
     */
    "ApiProductId": string;
    /**
     * API 列表
     */
    "Apis": {
        /**
         * API的ID
         * @example `ba84c55eca46488598da17c0609f3ead`
         */
        ApiId: string;
        /**
         * 环境名称，取值为：
         * - **RELEASE**：线上
         * - **PRE**：预发
         * - **TEST**：测试
         * @example `RELEASE`
         */
        StageName: string;
    }[];
}
