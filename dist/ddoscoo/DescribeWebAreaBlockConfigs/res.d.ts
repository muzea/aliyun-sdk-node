export interface DescribeWebAreaBlockConfigsResponse {
    /**
     * 本次请求的ID。
     * @example `0bcf28g5-d57c-11e7-9bs0-d89d6717dxbc`
     */
    RequestId: string;
    /**
     * 区域封禁（针对域名）的配置信息。
     */
    AreaBlockConfigs: {
        /**
         * 网站域名。
         * @example `www.aliyun.com`
         */
        Domain: string;
        /**
         * 封禁地区信息。
         */
        RegionList: {
            /**
             * 地区。
             * @example `CN-SHANGHAI`
             */
            Region: string;
            /**
             * 封禁状态。取值：
             * - **0**：未封禁
             * - **1**：已封禁
             * @example `0`
             */
            Block: number;
        }[];
    }[];
}
