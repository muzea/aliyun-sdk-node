export interface DescribeZonesResponse {
    /**
     * 页面大小。
     * @example `20`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `6856BCF6-11D6-4D7E-AC53-FD579933522B`
     */
    RequestId: string;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 总页数。
     * @example `3`
     */
    TotalPages: number;
    /**
     * 总个数。
     * @example `27`
     */
    TotalItems: number;
    Zones: {
        /**
         * zone列表。
         */
        Zone: {
            /**
             * 更新时间。
             * @example `2018-01-03T08:57Z`
             */
            UpdateTime: string;
            ResourceTags: {
                /**
                 * 资源标签列表。
                 */
                ResourceTag: {
                    /**
                     * 资源标签键。
                     * @example `env`
                     */
                    Key: string;
                    /**
                     * 资源标签值。
                     * @example `daily`
                     */
                    Value: string;
                }[];
            };
            /**
             * Zone类型。
             * - **AUTH_ZONE**: 权威Zone。
             * - **CLOUD_PRODUCT_ZONE**: 云产品PrivateZone。
             * @example `AUTH_ZONE`
             */
            ZoneType: string;
            /**
             * zone备注信息。
             * @example `test`
             */
            Remark: string;
            /**
             * 创建时间。
             * @example `2017-12-28T13:08Z`
             */
            CreateTime: string;
            /**
             * 解析记录数。
             * @example `2`
             */
            RecordCount: number;
            /**
             * zone名称。
             * @example `test.com`
             */
            ZoneName: string;
            /**
             * 递归解析代理模式。
             * - **ZONE**: 全部劫持
             * - **RECORD**：开启递归解析代理
             * @example `ZONE`
             */
            ProxyPattern: string;
            /**
             * 更新时间（时间戳）。
             * @example `1514969843000`
             */
            UpdateTimestamp: number;
            /**
             * 资源组ID。
             * @example `rg-xxxxx`
             */
            ResourceGroupId: string;
            /**
             * zone ID。
             * @example `6d83e3b31aa60ca4aaa7161f1b6baa95`
             */
            ZoneId: string;
            /**
             * 云产品类型。
             * - 若ZoneType为权威zone，则此为空；
             * - 若ZoneType为云产品zone，则此为云产品类型。
             * @example `BLINK`
             */
            ZoneTag: string;
            /**
             * 是否是反解zone。
             * - **true**：是反解zone
             * - **false**：非反解zone
             * @example `false`
             */
            IsPtr: boolean;
            /**
             * 创建时间（时间戳）。
             * @example `1514466483000`
             */
            CreateTimestamp: number;
            /**
             * 内置权威位置区。
             * - **NORMAL_ZONE**：普通区
             * - **FAST_ZONE**：快速区
             * @example `NORMAL_ZONE`
             */
            DnsGroup: string;
            /**
             * zone创建者
             * @example `5463564356`
             */
            Creator: string;
            /**
             * 账号类型。
             * - **CUSTOMER**：主账号
             * - **SUB**：子账号
             * - **STS**：角色扮演
             * - **OTHER**：其他
             * @example `SUB`
             */
            CreatorSubType: string;
            /**
             * Zone切换位置区状态。
             * - **true**：切换中
             * - **false**：未切换
             * @example `false`
             */
            DnsGroupChanging: boolean;
        }[];
    };
}
