export interface DescribeDcdnSLSRealTimeLogTypeResponse {
    /**
     * 请求ID。
     * @example `0AEDAF20-4DDF-4165-8750-47FF9C1929C9`
     */
    RequestId: string;
    Content: {
        /**
         * 返回结果内容。
         */
        Business: {
            /**
             * 业务类型描述。
             * @example `用户访问日志`
             */
            Desc: string;
            /**
             * 业务类型。取值如下：
             * - **dcdn_log_access_l1**：用户访问日志。
             * - **dcdn_log_er**：边缘程序日志。
             * - **dcdn_log_waf**：WAF拦截日志。
             * @example `dcdn_log_access_l1`
             */
            BusinessType: string;
        }[];
    };
}
