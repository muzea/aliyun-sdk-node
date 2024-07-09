export interface ListWarningConfigResponse {
    /**
     * 结果代码，**200**表示成功，若为别的值则表示失败，调用方可根据此字段判断失败原因。
     * @example `200`
     */
    Code: string;
    /**
     * 出错时表示出错详情，成功时为successful。
     * @example `successful`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `82C91484-B2D5-4D2A-A21F-A6D73F4D55C6`
     */
    RequestId: string;
    /**
     * 请求是否成功，调用方可根据此字段来判断请求是否成功：true表示成功；false/null表示失败。
     * @example `true`
     */
    Success: boolean;
    Data: {
        /**
         * 详细返回数据。
         */
        WarningConfigInfo: {
            /**
             * 启用状态，可能值：0未启用；1启用。
             * @example `1`
             */
            Status: number;
            /**
             * 预警配置名称。
             * @example `投诉预警`
             */
            ConfigName: string;
            /**
             * 最后更新时间。
             * @example `2019-10-29T17:24Z`
             */
            UpdateTime: string;
            /**
             * 预警配置ID。
             * @example `32`
             */
            ConfigId: number;
            /**
             * 创建时间。
             * @example `2019-10-29T15:30Z`
             */
            CreateTime: string;
            RuleList: {
                /**
                 * 预警配置所设置的规则列表。
                 */
                WarningRule: {
                    /**
                     * 规则名称。
                     * @example `客户可能要投诉`
                     */
                    RuleName: string;
                    /**
                     * 规则ID。
                     * @example `33452`
                     */
                    Rid: number;
                }[];
            };
            Channels: {
                /**
                 * 订阅渠道。
                 */
                Channel: {
                    /**
                     * 订阅推送类型，可取值：0（钉钉）；1（回调）。
                     * @example `0`
                     */
                    Type: number;
                    /**
                     * 推送地址URL。
                     * @example `oapi.dingtalk.com/robot/send?access_token=c55628f700eb9ad2a3ca`
                     */
                    Url: string;
                }[];
            };
            RidList: {
                /**
                 * 预警配置所设置的规则的ID集合。
                 */
                RidList: string[];
            };
        }[];
    };
}
