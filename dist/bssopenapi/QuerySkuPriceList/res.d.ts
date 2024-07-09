export interface QuerySkuPriceListResponse {
    /**
     * Id of the request
     * @example `F5B803CF-94D8-43AF-ADB3-D819AAD30E27`
     */
    RequestId: string;
    /**
     * 状态码。
     * @example `Success`
     */
    Code: string;
    /**
     * 返回消息
     * @example `Successful!`
     */
    Message: string;
    /**
     * 是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 定价对象sku信息
         */
        SkuPricePage: {
            /**
             * sku总数量
             * @example `18732`
             */
            TotalCount: number;
            /**
             * 下一页的token
             * @example `080112060a0422020800180022490a470342000000315333303332363436363336333433393636333136333338333733373333333133373336363336323634363336363337333836333636333636313336363433363332`
             */
            NextPageToken: string;
            /**
             * sku列表
             */
            SkuPriceList: {
                /**
                 * sku code
                 * @example `017c15a31507bc6de22aa93777461adc`
                 */
                SkuCode: string;
                /**
                 * sku价格列表
                 */
                CskuPriceList: {
                    /**
                     * csku code，价格唯一编码
                     * @example `ac74dd7b52ae6389ddef099283fb8275`
                     */
                    CskuCode: string;
                    /**
                     * 币种
                     * @example `CNY`
                     */
                    Currency: string;
                    /**
                     * 用量单位
                     * @example `个`
                     */
                    UsageUnit: string;
                    /**
                     * 价格类型
                     * @example `hourPrice`
                     */
                    PriceType: string;
                    /**
                     * 定价模式
                     * @example `STEP_ARRIVE`
                     */
                    PriceMode: string;
                    /**
                     * 价格
                     * @example `100`
                     */
                    Price: string;
                    /**
                     * 价格单位
                     * @example `美元/个`
                     */
                    PriceUnit: string;
                    /**
                     * 当PriceMode是STEP_ACCUMULATION 、STEP_ARRIVE时，本字段有值，指定Range范围；
                     * 当PriceMode是
                     * NORMAL_PRICE时，本字段值是NULL
                     */
                    RangeList: {
                        /**
                         * 因子code
                         * @example `212fbd27866307fc79ecf06934a88b2c`
                         */
                        FactorCode: string;
                        /**
                         * 最小值
                         * @example `1`
                         */
                        Min: string;
                        /**
                         * 最大值
                         * @example `10`
                         */
                        Max: string;
                        /**
                         * 区间闭合类型
                         * @example `LORC`
                         */
                        Type: string;
                    }[];
                }[];
                /**
                 * 因子值集合
                 */
                SkuFactorMap: any;
            }[];
        };
    };
}
