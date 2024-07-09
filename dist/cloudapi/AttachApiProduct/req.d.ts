export interface AttachApiProductRequest {
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
         * @example `551877242a4b4f3a84a56b7c3570e4a7`
         */
        ApiId: string;
        /**
         * 环境名称，枚举为：
         * - **RELEASE**: 线上
         * - **PRE**: 预发
         * - **TEST**: 测试
         * @example `RELEASE`
         */
        StageName: string;
    }[];
}
