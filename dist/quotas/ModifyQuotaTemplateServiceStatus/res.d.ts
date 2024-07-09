export interface ModifyQuotaTemplateServiceStatusResponse {
    /**
     * 请求ID。
     * @example `D47B3A10-CDAC-5412-B2EE-EC9A3DBE9053`
     */
    RequestId: string;
    /**
     * 配额模板的状态。
     */
    TemplateServiceStatus: {
        /**
         * 配额模板的状态。取值：
         * - -1：禁用。
         * - 1：开启。
         * @example `1`
         */
        ServiceStatus: number;
        /**
         * 资源目录ID。
         * @example `rd-pG****`
         */
        ResourceDirectoryId: string;
    };
}
