export interface DescribeSceneDefenseObjectsResponse {
    /**
     * 本次请求是否成功调用。取值：
     * - **true**：表示调用成功。
     * - **false**：表示调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 本次请求的ID。
     * @example `FE07E73F-F19E-4A51-B62F-AC59E3B962D8`
     */
    RequestId: string;
    /**
     * 定制场景策略的防护对象信息。
     */
    Objects: {
        /**
         * 策略防护的域名。
         * @example `www.aliyundoc.com`
         */
        Domain: string;
        /**
         * 定制场景策略的ID。
         * @example `47e07ebd-0ba5-4afc-957b-59d15b90****`
         */
        PolicyId: string;
        /**
         * 策略防护的高防实例IP。
         * @example `203.XX.XX.119`
         */
        Vip: string;
    }[];
}
