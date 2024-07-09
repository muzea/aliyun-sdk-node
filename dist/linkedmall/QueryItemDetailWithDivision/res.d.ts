export interface QueryItemDetailWithDivisionResponse {
    /**
     * 每次请求操作对应的操作日志号，由系统自动生成，返回给租户，可用于排查问题，双方日志中统一透出此标识
     * @example `1`
     */
    LogsId: string;
    /**
     * POP请求流水号，建议租户日志中也输出此流水号，双方排查问题方便
     * @example `BA157565-3358-5D80-9330-************`
     */
    RequestId: string;
    /**
     * 错误子代码。一般用于显示业务类的错误代码，一般建议关注此类错误
     * @example `201`
     */
    SubCode: string;
    /**
     * 业务处理相关的错误信息，一般建议关注此类错误
     * @example `SUCCESS`
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
     * @example `19`
     */
    TotalCount: number;
    /**
     * 本次执行的结果成功与否
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回的执行结果码， 正确为字符串 0000
     * @example `SUCCESS`
     */
    Code: string;
    /**
     * 错误消息
     * @example `Success`
     */
    Message: string;
    /**
     * 请求结果数据
     */
    Model: {
        /**
         * 分销商城ID
         * @example `122889******114694`
         */
        DistributionMallId: string;
        /**
         * sku list
         */
        SkuModels: {
            /**
             * 分销商城ID
             * @example `401e6c8****39b05797ac841907ca`
             */
            DistributionMallId: string;
            /**
             * 预留扩展字段,JSON-Map结构
             * @example `{\"outShopId\":\"3163****7\"}`
             */
            ExtJson: string;
            /**
             * LM商品ID
             * @example `10026053-67222490****`
             */
            LmItemId: string;
            /**
             * IC商品ID
             * @example `56090358****`
             */
            ItemId: number;
            /**
             * skuId(如果一个品没有sku，则构造一个id为-1的sku。数量库里0和-1都是表示没有SKU的商品，DB 中统一使用-1)，如 3428785463017
             * @example `-1`
             */
            SkuId: number;
            /**
             * Sku对应的属性PV值组合，如 1627207:28320;5919063:6536025;12304035:75366283;122216431:27772
             * @example `1627207:28320;5919063:6536025;12304035:75366283;122216431:27772`
             */
            SkuPvs: string;
            /**
             * Sku图片
             * @example `img/12344***.jpg`
             */
            SkuPicUrl: string;
            /**
             * SKU对应的属性显示Title。多个属性组合值之间用斜线分隔。
             * @example `*****罐头`
             */
            SkuTitle: string;
            /**
             * SKU库存。如果商品有配送区域库存，且查询接口里指定了配送区域，则返回的是对应区域库存
             * @example `-1`
             */
            Quantity: number;
            /**
             * SKU模糊化库存
             * @example `有货、无货、库存紧张`
             */
            SimpleQuantity: string;
            /**
             * 是否有库存，返回的是库存状态，有或者没有
             * @example `true`
             */
            HasQuantity: boolean;
            /**
             * IC SKU 一口价
             * @example `788`
             */
            ReservePrice: number;
            /**
             * 商品销售价格（分）
             * @example `3990`
             */
            PriceCent: number;
            /**
             * 供货价（分）
             * @example `9900`
             */
            SupplierPrice: number;
            /**
             * 商品规格对应的售卖状态
             * @example `1`
             */
            Status: number;
            /**
             * 客户自定义属性
             */
            CustomizedAttributeMap: any;
            /**
             * Linkedmall 平台SKU的属性
             */
            LmSkuAttributeMap: any;
            /**
             * 不可售code  可售时为null
             * @example `NULL`
             */
            CanNotBeSoldCode: string;
            /**
             * 不可售Massage 可售时为null
             * @example `NULL`
             */
            CanNotBeSoldMassage: string;
            /**
             * 发票类型
             */
            InvoiceType: number;
        }[];
        /**
         * Sku属性PV对列表，用于渲染页面下单时，选择下单参数
         */
        SkuPropertys: {
            /**
             * sku属性id
             * @example `44042249****`
             */
            Id: number;
            /**
             * 属性名
             * @example `162720***`
             */
            Text: string;
            /**
             * 属性值集合
             */
            Values: {
                /**
                 * 属性值id
                 * @example `44042249****`
                 */
                Id: number;
                /**
                 * 属性值
                 * @example `颜色~~白色`
                 */
                Text: string;
            }[];
        }[];
        /**
         * LM商品ID
         * @example `10000**-630292***`
         */
        LmItemId: string;
        /**
         * IC商品ID
         * @example `65******0310`
         */
        ItemId: number;
        /**
         * 商品名称
         * @example `夏季***百搭小白鞋`
         */
        ItemTitle: string;
        /**
         * 主图
         * @example `pic/edf8d848fa80b1cac055c94652*****.jpg
        `
         */
        MainPicUrl: string;
        /**
         * itemDO.commonItemImageList第一张
         * @example `pic/edf8d848fa80b1cac055c94652*****.jpg
        `
         */
        FirstPicUrl: string;
        /**
         * 商品图片URL，最多5张，一般是Detail上轮播，从itemDO.commonItemImageList属性转换而来。对应EPP的silders
         */
        ItemImages: string[];
        /**
         * 商品详情介绍-图片介绍，URL
         * @example `pic/edf8d848fa80b1cac055c94652*****.jpg`
         */
        DescPath: string;
        /**
         * 商品详情介绍-图片介绍信息
         * @example `<img>pic/edf8d848fa80b1cac055c94652*****.jpg</img>`
         */
        DescOption: string;
        /**
         * 商品最低价格（分）。如果只有一个SKU，则直接为SKU上的销售价（减掉积分抵扣后），一般用在Detail页面，没有选择Sku时，显示的SKU里的最低价（减掉积分抵扣后）
         * @example `3900`
         */
        MinPrice: number;
        /**
         * 商品原价，可用于显示划线价
         * @example `3900`
         */
        ReservePrice: number;
        /**
         * 商品库存，如果只有一个SKU，则直接是SKU上的库存。如果商品有配送区域库存，且查询接口里指定了配送区域，则返回的是对应区域库存
         * @example `-1`
         */
        Quantity: number;
        /**
         * 模糊化库存
         * @example `有货
        无货
        库存紧张`
         */
        SimpleQuantity: string;
        /**
         * 是否有库存，返回的是库存状态，有或者没有
         */
        HasQuantity: boolean;
        /**
         * 类目ID
         * @example `50011****`
         */
        CategoryId: number;
        /**
         * 类目ID，父类目在前，子类目在后
         */
        CategoryIds: number[];
        /**
         * 商品所在城市：如杭州
         * @example `浙江`
         */
        Prov: string;
        /**
         * 商品所在省份：如浙江
         * @example `杭州`
         */
        City: string;
        /**
         * 产品属性，产品参数，供Detail页面显示使用
         */
        Properties: any;
        /**
         * 产品特征
         */
        Features: any;
        /**
         * 宝石路属性，关键属性，供Detail页面显示使用
         */
        IforestProps: any[];
        /**
         * 是否包邮
         * @example `true`
         */
        SellerPayPostfee: boolean;
        /**
         * 是否可销售，目前追要判断了商品的状态是否正常，同时库存要求大于0;
         * @example `true`
         */
        CanSell: boolean;
        /**
         * 商品在linkedmall平台的类型
         * @example `entity`
         */
        LmItemCategory: string;
        /**
         * 客户自定义属性
         */
        CustomizedAttributeMap: any;
        /**
         * Linkedmall 平台商品属性
         */
        LmItemAttributeMap: any;
        /**
         * 当前时间
         * @example `2020-01-01 00:00:00`
         */
        Current: string;
        /**
         * 虚拟商品类型,该字段为枚举类型，值为cardRoll（卡券）、rechageableCard（充值卡）、fuelCard（油卡）
         * @example `cardRoll`
         */
        VirtualItemType: string;
        /**
         * 卖家类型：可以用于区分商品类型，null或是0-集市卖家，1-天猫卖家，2-1688卖家，4-后端商家，8-1688云电商卖家
         * @example `1`
         */
        UserType: number;
        /**
         * 是否开通担保交易 0 未开通，1 已开通，2 未设置, 3 审核中, 4 开通失败
         * @example `1`
         */
        SecuredTransactions: number;
        /**
         * 外部商品id (来自第三方的商品)
         * @example `44042249****
        `
         */
        ThirdPartyItemId: string;
        /**
         * 商品来源 (标记第三方商品的来源)
         * @example `三方商品来源`
         */
        ThirdPartyName: string;
        /**
         * 视频url
         * @example `video/edf8d848fa80b1cac055c94652******.mp4`
         */
        VideoUrl: string;
        /**
         * 视频封面url
         * @example `pic/edf8d848fa80b1cac055c94652*****.jpg`
         */
        VideoPicUrl: string;
        /**
         * 不可售code  可售时为null
         * @example `NULL`
         */
        CanNotBeSoldCode: string;
        /**
         * 不可售Massage 可售时为null
         * @example `NULL`
         */
        CanNotBeSoldMassage: string;
        /**
         * 总量库存值
         * @example `-1`
         */
        ItemTotalValue: number;
        /**
         * 商品库存
         * @example `有货`
         */
        ItemTotalSimpleValue: string;
        /**
         * 发票类型
         * @example `1`
         */
        InvoiceType: number;
    };
}
