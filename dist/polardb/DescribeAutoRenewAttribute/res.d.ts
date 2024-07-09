export interface DescribeAutoRenewAttributeResponse {
    /**
     * 总记录数。
     * @example `1`
     */
    TotalRecordCount: number;
    /**
     * 总页数。
     * @example `1`
     */
    PageRecordCount: number;
    /**
     * 请求ID。
     * @example `65D7ACE6-4A61-4B6E-B357-8CB24A******`
     */
    RequestId: string;
    /**
     * 页数。
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
             * @example `pc-*****************`
             */
            DBClusterId: string;
            /**
             * 时长单位：
             * - Year：年。
             * - Month：月。
             * @example `Month`
             */
            PeriodUnit: string;
            /**
             * 续费时长。
             * @example `4`
             */
            Duration: number;
            /**
             * 续费状态，取值范围如下：
             * - AutoRenewal：自动续费。
             * - Normal：手动续费，到期前短信提醒。
             * - NotRenewal：到期不续费，到期前无提醒，只在到期前第三天发送不续费提醒。
             * @example `AutoRenewal`
             */
            RenewalStatus: string;
            /**
             * 是否开启自动续费：
             * - true：开启。
             * - false：关闭。
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
