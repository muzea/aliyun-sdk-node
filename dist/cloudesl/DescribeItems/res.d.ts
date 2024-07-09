export interface DescribeItemsResponse {
    /**
     * 自定义模板ID
     * @example `1223`
     */
    TemplateSceneId: string;
    /**
     * 错误消息。
     * @example `The specified resource type is invalid.`
     */
    ErrorMessage: string;
    /**
     * 请求状态标识。
     * @example `true`
     */
    Success: boolean;
    /**
     * 出错提示消息
     * @example `success`
     */
    Message: string;
    /**
     * 动态错误信息，用于替换返回参数**ErrMessage**错误信息中的**%s**。
     * @example `The specified store %s does not exist.`
     */
    DynamicMessage: string;
    /**
     * 总数。
     * @example `100`
     */
    TotalCount: number;
    /**
     * 动态错误码
     * @example `PlatformResponseError.%s`
     */
    DynamicCode: string;
    /**
     * 请求ID。
     * @example `E69C8998-1787-4999-8C75-D663FF1173CF`
     */
    RequestId: string;
    /**
     * 错误码
     * @example `MandatoryParameters`
     */
    ErrorCode: string;
    /**
     * 内部错误码。
     * @example `-1001`
     */
    Code: string;
    /**
     * 分页参数：当前页码，默认值1。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 分页参数：每页显示条数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 商品信息列表。
     */
    Items: {
        /**
         * 实际销售价格（单位：分）。
         * @example `500`
         */
        ActionPrice: number;
        /**
         * 商品标题。
         * @example `纯牛奶`
         */
        ItemTitle: string;
        /**
         * 品牌名称，最长64字符；
         * @example `阿里巴巴`
         */
        BrandName: string;
        /**
         * 溯源码，最长128个字符；
         * @example `123456`
         */
        SourceCode: string;
        /**
         * 计价单位，最长64个字符；
         * @example `瓶`
         */
        PriceUnit: string;
        /**
         * 一类商品类目ID。
         * @example `酒类`
         */
        ForestFirstId: string;
        /**
         * 自定义属性F。
         * @example `自定义属性F`
         */
        CustomizeFeatureF: string;
        /**
         * 自定义属性A。
         * @example `自定义属性A`
         */
        CustomizeFeatureA: string;
        /**
         * 自定义属性K。
         * @example `自定义属性K`
         */
        CustomizeFeatureK: string;
        /**
         * 自定义模板ID
         * @example `11223`
         */
        TemplateSceneId: string;
        /**
         * 自定义属性D。
         * @example `自定义属性D`
         */
        CustomizeFeatureD: string;
        /**
         * 会员价（单位：分）。
         * @example `4000`
         */
        MemberPrice: number;
        /**
         * 促销开始时间 UTC格式 "yyyy-MM-dd'T'HH:mm:ss'Z'"。
         * @example `2022-04-25T16:00:00Z`
         */
        PromotionStart: string;
        /**
         * 型号，最长64个字符；
         * @example `CH8850AS`
         */
        ModelNumber: string;
        /**
         * 品类，最长64个字符；
         * @example `手机`
         */
        CategoryName: string;
        /**
         * 自定义属性E。
         * @example `自定义属性E`
         */
        CustomizeFeatureE: string;
        /**
         * 建议零售价（单位：分）。
         * @example `500`
         */
        SuggestPrice: number;
        /**
         * 规格，最长64个字符；
         * @example `1台/盒`
         */
        SaleSpec: string;
        /**
         * 促销文案，最长64个字符；
         * @example `买一送一`
         */
        PromotionText: string;
        /**
         * 等级，最长32个字符；
         * @example `一级`
         */
        Rank: string;
        /**
         * 促销原因，最长64个字符；
         * @example `情人节活动`
         */
        PromotionReason: string;
        /**
         * 自定义属性G。
         * @example `自定义属性G`
         */
        CustomizeFeatureG: string;
        /**
         * 销售价格（单位：分）。
         * @example `500`
         */
        SalesPrice: number;
        /**
         * 自定义属性H。
         * @example `自定义属性H`
         */
        CustomizeFeatureH: string;
        /**
         * 原价（单位：分）。
         * @example `500`
         */
        OriginalPrice: number;
        /**
         * 更新时间。
         * @example `2020-03-09T00:00:00Z`
         */
        GmtModified: string;
        /**
         * 自定义属性I。
         * @example `自定义属性I`
         */
        CustomizeFeatureI: string;
        /**
         * 产地，最长64个字符；
         * @example `中国`
         */
        ProductionPlace: string;
        /**
         * 自定义属性B。
         * @example `1:1:16`
         */
        CustomizeFeatureB: string;
        /**
         * 商品简称，不输入则从商品全称中截取，最长64字符；
         * @example `牛奶`
         */
        ItemShortTitle: string;
        /**
         * 自定义属性N。
         * @example `自定义属性N`
         */
        CustomizeFeatureN: string;
        /**
         * 是否匹配会员模板显示，默认值为false；
         * @example `false`
         */
        BeMember: boolean;
        /**
         * 税费信息，最长32个字符；
         * @example `增值税`
         */
        TaxFee: string;
        /**
         * 库存状态，返回值对应关系：
         * - `OUT_OF_STOCK`：缺货
         * - `NORMAL`：正常。
         * @example `OUT_OF_STOCK`
         */
        InventoryStatus: string;
        /**
         * 社区镜像认证企业名称。
         * @example `天猫超市`
         */
        SupplierName: string;
        /**
         * 商品图片URL。
         * @example `http://m.taobao.com/xxx.html`
         */
        ItemPicUrl: string;
        /**
         * 能效，最长64个字符；
         * @example `1kw/h`
         */
        EnergyEfficiency: string;
        /**
         * 自定义属性L。
         * @example `自定义属性L`
         */
        CustomizeFeatureL: string;
        /**
         * 自定义属性C。
         * @example `自定义属性C`
         */
        CustomizeFeatureC: string;
        /**
         * 自定义商品条码，只允许输入构成整数的阿拉伯数字。
         * @example `123456`
         */
        ItemId: string;
        /**
         * 生产商，最长128个字符；
         * @example `广东省深圳`
         */
        Manufacturer: string;
        /**
         * 材质，最长64个字符；
         * @example `金属`
         */
        Material: string;
        /**
         * 自定义属性O。
         * @example `自定义属性O`
         */
        CustomizeFeatureO: string;
        /**
         * 自定义属性P
         * @example `自定义属性P`
         */
        CustomizeFeatureP: string;
        /**
         * 自定义属性Q
         * @example `自定义属性Q`
         */
        CustomizeFeatureQ: string;
        /**
         * 自定义属性R
         * @example `自定义属性R`
         */
        CustomizeFeatureR: string;
        /**
         * 自定义属性S
         * @example `自定义属性S`
         */
        CustomizeFeatureS: string;
        /**
         * 自定义属性T
         * @example `自定义属性T`
         */
        CustomizeFeatureT: string;
        /**
         * 自定义属性U
         * @example `自定义属性U`
         */
        CustomizeFeatureU: string;
        /**
         * 自定义属性V
         * @example `自定义属性V`
         */
        CustomizeFeatureV: string;
        /**
         * 自定义属性W
         * @example `自定义属性W`
         */
        CustomizeFeatureW: string;
        /**
         * 自定义属性X
         * @example `自定义属性X`
         */
        CustomizeFeatureX: string;
        /**
         * 自定义属性Y
         * @example `自定义属性Y`
         */
        CustomizeFeatureY: string;
        /**
         * 自定义属性Z
         * @example `自定义属性Z`
         */
        CustomizeFeatureZ: string;
        /**
         * 自定义属性J。
         * @example `酸酸甜甜，肉厚饱满`
         */
        CustomizeFeatureJ: string;
        /**
         * 敏感数据识别规则的创建时间。格式：时间戳。单位：毫秒。
         * @example `2020-03-09T00:00:00Z`
         */
        GmtCreate: string;
        /**
         * 自定义属性M。
         * @example `自定义属性M`
         */
        CustomizeFeatureM: string;
        /**
         * 是否匹配促销模板显示，默认值为false；
         * @example `false`
         */
        BePromotion: boolean;
        /**
         * SKuID。
         * @example `123456`
         */
        SkuId: string;
        /**
         * 是否匹配溯源模板显示，默认值为false；
         * @example `false`
         */
        BeSourceCode: boolean;
        /**
         * 二类商品类目ID。
         * @example `白酒`
         */
        ForestSecondId: string;
        /**
         * 商品二维码地址，最长1024个字符；
         * @example `http://m.taobao.com/xxx.html`
         */
        ItemQrCode: string;
        /**
         * 商品信息坐标，此字段不用填。
         * @example `1`
         */
        ItemInfoIndex: number;
        /**
         * 促销结束时间 UTC格式 "yyyy-MM-dd'T'HH:mm:ss'Z'"。
         * @example `2020-02-11T00:00:00Z`
         */
        PromotionEnd: string;
        /**
         * 商品条码。
         * @example `01838`
         */
        ItemBarCode: string;
        /**
         * 是否添加了自定义属性。
         * @example `true`
         */
        BeClearance: boolean;
    }[];
}
