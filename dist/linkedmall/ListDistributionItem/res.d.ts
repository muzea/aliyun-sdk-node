export interface ListDistributionItemResponse {
    /**
     * 每次请求操作对应的操作日志号，由系统自动生成，返回给租户，可用于排查问题，双方日志中统一透出此标识
     * @example `1`
     */
    LogsId: string;
    /**
     * POP请求流水号，建议租户日志中也输出此流水号，双方排查问题方便
     * @example `539E5C68-D8B5-57EC-9D9B-58AFD9E0****`
     */
    RequestId: string;
    /**
     * 错误子代码。一般用于显示业务类的错误代码，一般建议关注此类错误
     * @example `SUCCESS`
     */
    SubCode: string;
    /**
     * 业务处理相关的错误信息，一般建议关注此类错误
     * @example `1004`
     */
    SubMessage: string;
    /**
     * pageSize
     * @example `20`
     */
    PageSize: number;
    /**
     * 当前页
     * @example `1`
     */
    PageNumber: number;
    /**
     * 总数量
     * @example `1`
     */
    TotalCount: number;
    /**
     * 本次执行的结果成功与否
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
         */
        DistributionMallId: string;
        /**
         * LM商品ID
         */
        LmItemId: string;
        /**
         * 商品Id
         */
        ItemId: number;
        /**
         * String类型商品Id，用于解决前端number类型超出长度限制
         */
        ItemIdStr: string;
        /**
         * 商品名称
         */
        ItemName: string;
        /**
         * 类目ID
         */
        CategoryId: number;
        /**
         * 类目链，父类目在前，子类目在后，叶子类目最后
         */
        CategoryChain: {
            CategoryId: number;
            Name: string;
            ParentId: number;
            Level: number;
            Leaf: boolean;
        }[];
        /**
         * 商品在linkedmall平台上的分类：实物商品（entity），猫超卡券（aliComBenifit），电影票（movieTicket）
         */
        Category: string;
        /**
         * linkedmall商品状态
         */
        Status: number;
        /**
         * 商品剩余库存：MIN
         */
        Quantity: number;
        SimpleQuantity: string;
        HasQuantity: boolean;
        /**
         * 累计售出数量
         */
        TotalSoldQuantity: number;
        SimpleTotalSoldQuantity: string;
        /**
         * 创建时间
         */
        GmtCreate: string;
        /**
         * 最后修改/生效时间
         */
        GmtModified: string;
        /**
         * 图片url
         */
        PicUrl: string;
        /**
         * 商品描述信息
         */
        ItemDesc: string;
        /**
         * IC划线价
         */
        ReservedPrice: number;
        ReservedPriceScope: string;
        PriceCentScope: string;
        /**
         * 是否可销售，目前追要判断了商品的状态是否正常，同时库存要求大于0;
         */
        IsCanSell: boolean;
        /**
         * 对商品不可售的原因描述
         */
        Tips: string;
        /**
         * 商品名称
         */
        ItemTitle: string;
        /**
         * 主图
         */
        MainPicUrl: string;
        /**
         * 商品详情介绍-图片介绍信息
         */
        DescOption: string;
        PropertiesJson: string;
        /**
         * 商品图片URL，最多5张，一般是Detail上轮播，从itemDO.commonItemImageList属性转换而来。对应EPP的silders
         */
        ItemImages: string[];
        /**
         * sku列表
         */
        SkuList: {
            LmItemId: string;
            ItemId: number;
            /**
             * 没有sku的商品，skuId填-1
             */
            SkuId: number;
            /**
             * 商品剩余库存：MIN
             */
            Quantity: number;
            SimpleQuantity: string;
            HasQuantity: boolean;
            /**
             * 状态
             */
            Status: number;
            /**
             * 当前售价（分）
             */
            PriceCent: number;
            /**
             * IC SKU 一口价
             */
            ReservedPrice: number;
            /**
             * sku描述信息
             */
            SkuDesc: string;
            /**
             * sku图片
             */
            SkuPicUrl: string;
            /**
             * sku标题
             */
            SkuTitle: string;
            /**
             * 最后修改/生效时间
             */
            GmtModified: string;
            /**
             * sku的扩展属性list
             */
            LmAttributeModels: {
                AttrId: number;
                Value: string;
                Name: string;
                Description: string;
                DataType: string;
                Restriction: string;
                Category: number;
                ScopeList: string[];
            }[];
            /**
             * 客户自定义属性
             */
            CustomizedAttributeMap: any;
            CanSell: boolean;
            Tips: string;
            SkuPropertiesJson: string;
            /**
             * 设置基础库/系统扩展属性
             */
            SkuProperties: any;
            /**
             * 存放买断权益对接模式下：promotionId（权益ID），securityCode（安全码）
             */
            ExtInfo: string;
            lmSkuAttributeMap: any;
        }[];
        LmAttributeModels: {
            AttrId: number;
            Value: string;
            Name: string;
            Description: string;
            DataType: string;
            Restriction: string;
            Category: number;
            ScopeList: string[];
        }[];
        LmAttributeMap: any;
    }[];
}
