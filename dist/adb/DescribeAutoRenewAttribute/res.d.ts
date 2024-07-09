export interface DescribeAutoRenewAttributeResponse {
    /**
     * 总记录数。
     * @example `20`
     */
    TotalRecordCount: number;
    /**
     * 每页记录数。
     * @example `30`
     */
    PageRecordCount: number;
    /**
     * 请求ID。
     * @example `1AD222E9-E606-4A42-BF6D-8A4442913CEF`
     */
    RequestId: string;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: number;
    Items: {
        /**
         * 集群续费信息列表。
         */
        AutoRenewAttribute: {
            /**
             * 集群ID。
             * @example `am-bp11q28kvl688****`
             */
            DBClusterId: string;
            /**
             * 续费时长单位，取值说明：
             * - **Year**：年。
             * - **Month**：月。
             * @example `Year`
             */
            PeriodUnit: string;
            /**
             * 续费时长。
             * @example `1`
             */
            Duration: number;
            /**
             * 续费状态。取值说明：
             * - **AutoRenewal**：自动续费。
             * - **Normal**：手动续费，集群到期前通过短信提醒。
             * - **NotRenewal**：到期不续费，集群到期前无提醒，只在到期前第三天发送不续费提醒。
             * @example `AutoRenewal`
             */
            RenewalStatus: string;
            /**
             * 是否开启自动续费，取值说明：
             * - **true**：开启。
             * - **false**：关闭。
             * @example `true`
             */
            AutoRenewEnabled: boolean;
            /**
             * 地域ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
        }[];
    };
}
