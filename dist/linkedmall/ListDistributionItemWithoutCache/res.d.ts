export interface ListDistributionItemWithoutCacheResponse {
    /**
     * 每次请求操作对应的操作日志号，由系统自动生成，返回给租户，可用于排查问题，双方日志中统一透出此标识
     * @example `1`
     */
    LogsId: string;
    /**
     * POP请求流水号，建议租户日志中也输出此流水号，双方排查问题方便
     * @example `5127621C-****-5DCA-9745-2936B31DFD12`
     */
    RequestId: string;
    /**
     * 错误子代码。一般用于显示业务类的错误代码，一般建议关注此类错误
     * @example `205`
     */
    SubCode: string;
    /**
     * 业务处理相关的错误信息，一般建议关注此类错误
     * @example `SUCCESS`
     */
    SubMessage: string;
    /**
     * 每页显示条数
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
     * @example `27303`
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
         * 商品规格列表
         */
        SkuModels: {
            /**
             * 分销商城ID
             * @example `19e690e*****07a29c8`
             */
            DistributionMallId: string;
            /**
             * 预留扩展字段,JSON-Map结构
             * @example `{}`
             */
            ExtJson: string;
            /**
             * LM商品ID
             * @example `10000***-6193664*****`
             */
            LmItemId: string;
            /**
             * IC商品ID
             * @example `6193664*****`
             */
            ItemId: number;
            /**
             * 规格ID
             * @example `488****548894`
             */
            SkuId: number;
            /**
             * Sku对应的属性PV值组合
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
             * @example `美味****原味2盒`
             */
            SkuTitle: string;
            /**
             * SKU库存。如果商品有配送区域库存，且查询接口里指定了配送区域，则返回的是对应区域库存
             * @example `30000`
             */
            Quantity: number;
            /**
             * SKU模糊化库存
             * 例如：有货、无货、库存紧张
             * @example `有货、无货、库存紧张`
             */
            SimpleQuantity: string;
            /**
             * 是否有库存，返回的是库存状态，有或者没有
             * @example `true`
             */
            HasQuantity: boolean;
            /**
             * IC SKU 一口价，划线价，商品原价（分）
             * @example `8000`
             */
            ReservedPrice: number;
            /**
             * 商品销售价格（分）
             * 渠道商供货价格
             * @example `7960`
             */
            PriceCent: number;
            /**
             * 供货价（分）
             * @example `7960`
             */
            SupplierPrice: number;
            /**
             * 商品规格售卖状态
             * 1：商品可售卖
             * 2：商品不可售卖
             * 3：商品价格异常
             * 4：商品被删除
             * @example `1`
             */
            Status: number;
            /**
             * 规格维度的扩展属性PV
             * （客户自定义属性）
             */
            CustomizedAttributeMap: any;
            /**
             * 规格维度的扩展属性PV
             * （商家扩展属性或系统扩展属性）
             */
            LmSkuAttributeMap: any;
            /**
             * 不可售编码，可售时为空
             * @example `CAN_NOT_BE_SOLD`
             */
            IsCanNotBeSoldCode: string;
            /**
             * 不可售消息，可售时为空
             * @example `商品不可售`
             */
            IsCanNotBeSoldMessage: string;
            InvoiceType: number;
        }[];
        /**
         * Sku属性PV对列表
         */
        SkuPropertys: {
            /**
             * 规格属性ID
             * @example `44042249****`
             */
            Id: number;
            /**
             * 属性键P
             * @example `颜色分类`
             */
            Text: string;
            /**
             * 属性值列表
             */
            Values: {
                /**
                 * 属性值ID
                 * @example `600***`
                 */
                Id: number;
                /**
                 * 属性值V
                 * @example `橙色`
                 */
                Text: string;
            }[];
        }[];
        /**
         * lm商品ID
         * @example `1000****-630292****`
         */
        LmItemId: string;
        /**
         * IC商品ID
         * @example `65******0310`
         */
        ItemId: number;
        /**
         * 商品名称
         * @example `美味****原味2盒`
         */
        ItemTitle: string;
        /**
         * 主图
         * @example `pic/edf8d848fa80b1cac055c94652*****.jpg
        `
         */
        MainPicUrl: string;
        /**
         * 轮播图第一张图
         * @example `pic/edf8d848fa80b1cac055c94652*****.jpg
        `
         */
        FirstPicUrl: string;
        /**
         * 商品图片URL，最多10张，一般是Detail上轮播
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
         * @example `2000`
         */
        ReservedPrice: number;
        /**
         * 商品库存，如果只有一个SKU，则直接是SKU上的库存。
         * @example `200`
         */
        Quantity: number;
        /**
         * 模糊化库存
         * 例如：有货、无货、库存紧张
         * @example `有货
        无货
        库存紧张`
         */
        SimpleQuantity: string;
        /**
         * 是否有库存，返回的是库存状态，有或者没有
         * @example `true`
         */
        HasQuantity: boolean;
        /**
         * 类目ID
         * @example `5001****`
         */
        CategoryId: number;
        /**
         * 类目ID，父类目在前，子类目在后
         */
        CategoryIds: number[];
        /**
         * 商品所在省份：如浙江
         * @example `浙江`
         */
        Prov: string;
        /**
         * 商品所在城市：如杭州
         * @example `杭州`
         */
        City: string;
        /**
         * 产品属性或产品参数，供Detail页面显示使用
         * 例如：
         * {颜色分类: ["桔色", "军绿色"]}
         */
        Properties: any;
        /**
         * 商家配置产品特征
         *  tax_invoice：税率
         *  tax_rate_code：税码，全国统一
         * extraPeriod：保质期，用于食品
         * food_pro_date：生产日期
         */
        Features: any;
        /**
         * 关键属性，供Detail页面显示使用
         * 例如：
         * [{value: "军绿色", key: "颜色分类"}, {value: "桔色", key: "颜色分类"}]
         */
        IforestProps: any[];
        /**
         * 是否包邮
         * @example `true`
         */
        IsSellerPayPostfee: boolean;
        /**
         * 是否可销售，目前追要判断了商品的状态是否正常，同时库存要求大于0
         * @example `true`
         */
        IsCanSell: boolean;
        /**
         * 商品在linkedmall平台的类型
         * entity：实物商品
         * aliComBenifit：虚拟商品
         * @example `entity`
         */
        LmItemCategory: string;
        /**
         * 商品维度的扩展属性PV
         */
        CustomizedAttributeMap: any;
        /**
         * 商品维度的扩展属性PV
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
         * 视频地址
         * @example `http://video***.oss-cn-shanghai.aliyuncs.com/vms-test/video/edf8d848fa80b1cac055c94652******.mp4`
         */
        VideoUrl: string;
        /**
         * 视频封面地址
         * @example `http://video***.oss-cn-shanghai.aliyuncs.com/vms-test/pic/edf8d848fa80b1cac055c94652*****.jpg`
         */
        VideoPicUrl: string;
        /**
         * 不可售编码，可售时为空
         * @example `CAN_NOT_BE_SOLD`
         */
        IsCanNotBeSoldCode: string;
        /**
         * 不可售消息，可售时为空
         * @example `商品不可售`
         */
        IsCanNotBeSoldMessage: string;
        /**
         * 总量库存值
         * @example `100000`
         */
        ItemTotalValue: number;
        /**
         * 总量库存模糊值
         * 例如：
         * 有货、无货、库存紧张
         * @example `有货`
         */
        ItemTotalSimpleValue: string;
        /**
         * 发票类型
         * @example `1`
         */
        InvoiceType: number;
    }[];
}
