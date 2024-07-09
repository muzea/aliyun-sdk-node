export interface DescribeVersionsResponse {
    /**
     * 请求ID
     * @example `BD65C0AD-D3C6-48D3-8D93-38D2015C****`
     */
    RequestId: string;
    /**
     * 可用ASM版本信息
     */
    VersionInfo: {
        /**
         * ASM规格，取值：
         * - `Default`：ASM标准版
         * - `Pro`：ASM商业版（专业版）
         * @example `Default`
         */
        Edition: string;
        /**
         * 当前规格下可用的ASM版本列表
         */
        Versions: string[];
    }[];
}
