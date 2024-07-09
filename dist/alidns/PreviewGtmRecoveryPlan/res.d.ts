export interface PreviewGtmRecoveryPlanResponse {
    /**
     * 分页查询时设置的每页行数，最大值**100**，默认为**20**。
     * @example `5`
     */
    PageSize: number;
    /**
     * 唯一请求识别码。
     * @example `853805EA-3D47-47D5-9A1A-A45C24313ABD`
     */
    RequestId: string;
    /**
     * 当前页数，起始值为**1**，默认为**1**。
     * @example `1`
     */
    PageNumber: number;
    Previews: {
        /**
         * 容灾预案执行预览。
         */
        Preview: {
            /**
             * 实例ID。
             * @example `gtm-cn-wwo3a3hbz**`
             */
            InstanceId: string;
            SwitchInfos: {
                /**
                 * 切换信息。
                 */
                SwitchInfo: {
                    /**
                     * 策略名称。
                     * @example `hrb5ju`
                     */
                    StrategyName: string;
                    /**
                     * 格式化的消息内容。
                     * @example `默认地址池（默认地址池1）切换备用地址池（备用地址池1）`
                     */
                    Content: string;
                }[];
            };
            /**
             * 实例名称。
             * @example `name-example`
             */
            Name: string;
            /**
             * 用户域名（列表）。
             * @example `30.yyy.com`
             */
            UserDomainName: string;
        }[];
    };
    /**
     * 总页数。
     * @example `3`
     */
    TotalPages: number;
    /**
     * 总个数。
     * @example `15`
     */
    TotalItems: number;
}
