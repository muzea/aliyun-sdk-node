export interface QueryItemGuideRetailPriceResponse {
    /**
     * 每次请求操作对应的操作日志号，由系统自动生成，返回给租户，可用于排查问题，双方日志中统一透出此标识
     * @example `1`
     */
    LogsId: string;
    /**
     * POP请求流水号，建议租户日志中也输出此流水号，双方排查问题方便
     * @example `E090F1A0-7454-5F36-933C-E6332CE2****`
     */
    RequestId: string;
    /**
     * 错误子代码。一般用于显示业务类的错误代码，一般建议关注此类错误
     * @example `200`
     */
    SubCode: string;
    /**
     * 业务处理相关的错误信息，一般建议关注此类错误
     * @example `SUCCESS`
     */
    SubMessage: string;
    /**
     * 本次执行的结果成功与否
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回的执行结果码， 正确为字符串 0000
     * @example `0000`
     */
    Code: string;
    /**
     * 错误消息
     * @example `SUCCESS`
     */
    Message: string;
    /**
     * 请求结果数据
     */
    Model: {
        /**
         * 分销商城ID
         * @example `19e690e*****07a29c8`
         */
        DistributionMallId: string;
        /**
         * LM商品ID
         * @example `1000****-630292****`
         */
        LmItemId: string;
        /**
         * 商品id
         * @example `65******0310`
         */
        ItemId: number;
        /**
         * 商品标题
         * @example `****酸菜`
         */
        ItemTitle: string;
        /**
         * 商品划线价、原价
         * @example `2000`
         */
        ReservedPrice: number;
        /**
         * 商品划线价、原价范围
         * @example `1000~2000`
         */
        ReservedPriceScope: string;
        /**
         * 建议零售价范围
         * @example `1000~2000`
         */
        GuideRetailPriceScope: string;
        /**
         * 商品规格
         */
        SkuModels: {
            /**
             * 分销商城ID
             * @example `39cc1****5c7211005187c`
             */
            DistributionMallId: string;
            /**
             * LM商品ID
             * @example `10***642-6831****869`
             */
            LmItemId: string;
            /**
             * 商品id
             * @example `6487****621`
             */
            ItemId: number;
            /**
             * 规格ID
             * @example `488****548894`
             */
            SkuId: number;
            /**
             * 规格标题
             * @example `美味****原味2盒`
             */
            SkuTitle: string;
            /**
             * 商品划线价、原价
             * @example `8000`
             */
            ReservedPrice: number;
            /**
             * 建议零售价
             * @example `7960`
             */
            GuideRetailPrice: number;
            /**
             * 当前售价
             * @example `7960`
             */
            PriceCent: number;
            /**
             * 状态：1：商品可售卖
             * @example `1`
             */
            Status: number;
            LowGuideRetailPrice: number;
        }[];
        LowGuideRetailPriceScope: string;
    }[];
}
