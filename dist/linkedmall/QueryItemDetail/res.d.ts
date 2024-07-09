export interface QueryItemDetailResponse {
    /**
     * 每次请求操作对应的操作日志号，由系统自动生成，返回给租户，可用于排查问题，双方日志中统一透出此标识
     * @example `1`
     */
    LogsId: string;
    /**
     * POP请求流水号，建议租户日志中也输出此流水号，双方排查问题方便
     * @example `E46C790E-B1F2-51EF-B6F8-B52404B5****`
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
     * @example `5`
     */
    TotalCount: number;
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
     * @example `BizItemGroup [LMALL20210830****] has not the item [65728655****].`
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
         * sku list
         */
        SkuModels: {
            /**
             * 分销商城ID
             */
            DistributionMallId: string;
            /**
             * 预留扩展字段,JSON-Map结构
             */
            ExtJson: string;
            /**
             * LM商品ID
             */
            LmItemId: string;
            /**
             * IC商品ID
             */
            ItemId: number;
            /**
             * 没有sku的商品，skuId填-1
             */
            SkuId: number;
            /**
             * Sku对应的属性PV值组合，如 1627207:28320;5919063:6536025;12304035:75366283;122216431:27772
             */
            SkuPvs: string;
            /**
             * Sku图片
             */
            SkuPicUrl: string;
            /**
             * SKU对应的属性显示Title。多个属性组合值之间用斜线分隔。
             */
            SkuTitle: string;
            /**
             * SKU库存。如果商品有配送区域库存，且查询接口里指定了配送区域，则返回的是对应区域库存
             */
            Quantity: number;
            /**
             * SKU模糊化库存
             */
            SimpleQuantity: string;
            /**
             * 是否有库存，返回的是库存状态，有或者没有
             */
            HasQuantity: boolean;
            /**
             * IC SKU 一口价
             */
            ReservedPrice: number;
            /**
             * 商品销售价格（分）
             */
            PriceCent: number;
            /**
             * 商品规格对应的售卖状态
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
             */
            CanNotBeSoldCode: string;
            /**
             * 不可售Massage 可售时为null
             */
            CanNotBeSoldMessage: string;
            /**
             * 发票类型,见 com.aliyun.linkedmall.itemservice.client.enums.BasicItemInvoiceTypeEnum
             */
            InvoiceType: number;
        }[];
        /**
         * Sku属性PV对列表，用于渲染页面下单时，选择下单参数
         */
        SkuPropertys: {
            Id: number;
            Text: string;
            Values: {
                Id: number;
                Text: string;
            }[];
        }[];
        /**
         * LM商品ID
         */
        LmItemId: string;
        /**
         * 商品ID
         * @example `65******0310`
         */
        ItemId: number;
        /**
         * 商品名称
         * @example `大自然酸菜(美好生鲜)`
         */
        ItemTitle: string;
        /**
         * 主图
         */
        MainPicUrl: string;
        /**
         * 商品主图
         * @example `http://yicaivodcache.oss-cn-shanghai.aliyuncs.com/vms-test/vms3/pic/edf8d848fa80b1cac055c94652f*****.jpg`
         */
        FirstPicUrl: string;
        /**
         * 商品图片列表
         */
        ItemImages: string[];
        /**
         * 商品详情介绍-图片介绍，URL
         */
        DescPath: string;
        /**
         * 商品详情描述
         * @example `{}`
         */
        DescOption: string;
        /**
         * 商品最低价格（分）。如果只有一个SKU，则直接为SKU上的销售价（减掉积分抵扣后），一般用在Detail页面，没有选择Sku时，显示的SKU里的最低价（减掉积分抵扣后）
         */
        MinPrice: number;
        /**
         * 商品原价，可用于显示划线价
         */
        ReservedPrice: number;
        /**
         * 商品库存，如果只有一个SKU，则直接是SKU上的库存。如果商品有配送区域库存，且查询接口里指定了配送区域，则返回的是对应区域库存
         */
        Quantity: number;
        /**
         * 模糊化库存
         */
        SimpleQuantity: string;
        /**
         * 是否有库存，返回的是库存状态，有或者没有
         */
        HasQuantity: boolean;
        /**
         * 最后⼀级的类⽬ID，之后会提供类⽬查询接⼝来获取商品所属类⽬信息
         * @example `50011982`
         */
        CategoryId: number;
        /**
         * 类目ID，父类目在前，子类目在后
         */
        CategoryIds: number[];
        /**
         * 商品所在城市：如杭州
         */
        Prov: string;
        /**
         * 商品所在省份：如浙江
         */
        City: string;
        /**
         * 产品参数
         */
        Properties: any;
        /**
         * 产品特征，从itemDO.Features转换而来
         */
        Features: any;
        /**
         * 商品详情页商品名称下面的三列属性
         */
        IforestProps: any[];
        /**
         * 是否包邮
         */
        IsSellerPayPostfee: boolean;
        /**
         * 是否可销售，目前追要判断了商品的状态是否正常，同时库存要求大于0;
         */
        IsCanSell: boolean;
        /**
         * 商品类别
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
         */
        Current: string;
        /**
         * 虚拟商品类型,该字段为枚举类型，值为cardRoll（卡券）、rechageableCard（充值卡）、fuelCard（油卡）
         */
        VirtualItemType: string;
        /**
         * 外部商品id (来自第三方的商品)
         */
        ThirdPartyItemId: string;
        /**
         * 商品来源 (标记第三方商品的来源)
         */
        ThirdPartyName: string;
        /**
         * 视频链接地址
         * @example `http://yicaivodcache.oss-cn-shanghai.aliyuncs.com/vms-test/vms3/video/edf8d848fa80b1cac055c94652******.mp4`
         */
        VideoUrl: string;
        /**
         * 视频头图链接地址
         * @example `http://yicaivodcache.oss-cn-shanghai.aliyuncs.com/vms-test/vms3/pic/edf8d848fa80b1cac055c94652*****.jpg`
         */
        VideoPicUrl: string;
        /**
         * 不可售code  可售时为null
         */
        CanNotBeSoldCode: string;
        /**
         * 不可售Massage 可售时为null
         */
        CanNotBeSoldMessage: string;
        /**
         * 总量库存值
         */
        ItemTotalValue: number;
        ItemTotalSimpleValue: string;
        /**
         * 发票类型,见 com.aliyun.linkedmall.itemservice.client.enums.BasicItemInvoiceTypeEnum
         */
        InvoiceType: number;
    };
    /**
     * 渠道公共数据
     */
    BizViewData: any;
}
