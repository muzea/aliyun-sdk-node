export interface DescribeWebAccessModeResponse {
    /**
     * 本次请求的ID。
     * @example `0bcf28g5-d57c-11e7-9bs0-d89d6717dxbc`
     */
    RequestId: string;
    /**
     * 网站业务的接入模式信息。
     */
    DomainModes: {
        /**
         * 接入模式。取值：
         * - **0**：A记录接入
         * - **1**：高防模式
         * - **2**：回源模式
         * @example `0`
         */
        AccessMode: number;
        /**
         * 网站域名。
         * @example `www.aliyun.com`
         */
        Domain: string;
    }[];
}
