export interface ListDeliveryResponse {
    /**
     * 返回的详细内容。
     */
    Data: {
        /**
         * 威胁分析用户侧日志服务Project名字，格式：aliyun-cloudsiem-data-${aliUid}-${region}。
         * @example `aliyun-cloudsiem-data-127608589417****-cn-shanghai`
         */
        ProjectName: string;
        /**
         * 威胁分析用户侧LogStore的名字，格式：cloud_siem。
         * @example `cloud-siem`
         */
        LogStoreName: string;
        /**
         * 日志分析页面中查询分析的URL。
         * @example `https://sls4service.console.aliyun.com/lognext/project/aliyun-cloudsiem-data-127608589417****-cn-shanghai
        /logsearch/cloud-siem?isShare=true&hideTopbar=true&hideSidebar=true&ignoreTabLocalStorage=true`
         */
        SearchUrl: string;
        /**
         * 日志分析页面中报表展示的URL。
         * @example `https://sls4service.console.aliyun.com/lognext/project/aliyun-cloudsiem-data-127608589417****-cn-shanghai
        /dashboard/cloud-siem?isShare=true&hideTopbar=true&hideSidebar=true&ignoreTabLocalStorage=true`
         */
        DashboardUrl: string;
        /**
         * 是否展示投递开关，默认true，取值：
         * - true：显示投递开关
         * - false：隐藏投递开关
         * @example `true`
         */
        DisplaySwitchOrNot: boolean;
        /**
         * 产品列表。
         */
        ProductList: {
            /**
             * 云产品编码。取值：
             * - qcloud_waf
             * - qlcoud_cfw
             * - hcloud_waf
             * - hcloud_cfw
             * - ddos
             * - sas
             * - cfw
             * - config
             * - csk
             * - fc
             * - rds
             * - nas
             * - apigateway
             * - cdn
             * - mongodb
             * - eip
             * - slb
             * - vpc
             * - actiontrail
             * - waf
             * - bastionhost
             * - oss
             * - polardb
             * @example `sas`
             */
            ProductCode: string;
            /**
             * 该参数已废弃，无需关注。
             * @example `Security Center`
             */
            ProductName: string;
            /**
             * 存在日志分类的日志列表，比如云安全中心，存在主机、网络等分组，分组信息为key，分组所包含的日志为value。
             */
            LogMap: any;
            /**
             * 没有更细分类的云产品。
             */
            LogList: {
                /**
                 * 日志编码。
                 * @example `cloud_siem_config_log`
                 */
                LogCode: string;
                /**
                 * 该参数已废弃，无需关注。
                 * @example `audit log`
                 */
                LogName: string;
                /**
                 * 该参数已废弃，无需关注。
                 * @example `audit log
                `
                 */
                LogNameEn: string;
                /**
                 * 日志语言编码，用于进行多语言名字的展示。
                 * @example `${sas.cloudsiem.prod.cloud_siem_aegis_crack_from_beaver}`
                 */
                LogNameKey: string;
                /**
                 * 日志投递状态。取值：
                 * - true：正在投递
                 * - false：投递被关闭
                 * @example `true`
                 */
                Status: boolean;
                /**
                 * 是否可以操作日志投递开关，日志投递开关只限于威胁分析委派管理员进行操作。取值：
                 * - true：可以操作
                 * - false：不可以操作
                 * @example `true`
                 */
                CanOperateOrNot: boolean;
                /**
                 * 日志在LogStore中的Topic，是LogStore的索引字段，通过该字段，能够区分不同的日志。
                 * @example `sas_login_event`
                 */
                Topic: string;
                /**
                 * 扩展参数。
                 */
                ExtraParameters: {
                    /**
                     * 扩展参数标识。
                     * @example `flag`
                     */
                    Key: string;
                    /**
                     * 扩展参数值。
                     * @example `value`
                     */
                    Value: string;
                }[];
            }[];
        }[];
    };
    /**
     * 请求消息ID。
     * @example `6276D891-58D4-55B2-87B9-74D413F7****`
     */
    RequestId: string;
}
