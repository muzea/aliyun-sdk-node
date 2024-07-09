export interface BatchInsertItemsRequest {
    /**
     * 门店ID或商家自定义门店ID，一次最多插入100条数据。
     * @example `s-dxsxx****`
     */
    "StoreId": string;
    /**
     * 系统扩展字段，请忽略；
     * @example `{}`
     */
    "ExtraParams"?: string;
    /**
     * 默认值为false，如果配置为true则商品信息会更新门店下其它ItemId字段相同的商品信息；如果一次商品列表中包含多个ItemId相同的商品，则以排在最后那个内容做更新；
     * @example `true`
     */
    "SyncByItemId"?: boolean;
    /**
     * 商品信息列表。
     */
    "ItemInfo": {
        /**
         * 实际销售价格(单位:分)。
         * @example `500`
         */
        ActionPrice: number;
        /**
         * 商品全称，最长100字符；
         * @example `光明儿童星`
         */
        ItemTitle: string;
        /**
         * 品牌名称，最长64字符；
         * @example `光明乳业`
         */
        BrandName: string;
        /**
         * 溯源码，最长128个字符；
         * @example `1234567`
         */
        SourceCode: string;
        /**
         * 计价单位，最长64个字符；
         * @example `箱`
         */
        PriceUnit: string;
        /**
         * 一类商品类目ID，最长32个字符；
         * @example `食品`
         */
        ForestFirstId: string;
        /**
         * 自定义属性F，最长64个字符；
         * @example `自定义属性F`
         */
        CustomizeFeatureF: string;
        /**
         * 自定义属性A，最长64个字符；
         * @example `自定义属性A`
         */
        CustomizeFeatureA: string;
        /**
         * 自定义属性K，最长128个字符；
         * @example `自定义属性K`
         */
        CustomizeFeatureK: string;
        /**
         * 客户自定义模板ID，如果有输入有效字符则匹配客户自定义模板进行商品展示，默认值为空字符“”；
         * @example `23452`
         */
        TemplateSceneId: string;
        /**
         * 自定义属性D，最长64个字符；
         * @example `自定义属性D`
         */
        CustomizeFeatureD: string;
        /**
         * 会员价(单位:分)。
         * @example `800`
         */
        MemberPrice: number;
        /**
         * 型号，最长64个字符；
         * @example `330`
         */
        ModelNumber: string;
        /**
         * 促销开始时间 UTC格式 "yyyy-MM-dd'T'HH:mm:ss'Z'"。
         * @example `2020-02-10T00:00:00Z`
         */
        PromotionStart: string;
        /**
         * 品类，最长64个字符；
         * @example `饮料`
         */
        CategoryName: string;
        /**
         * 自定义属性E，最长64个字符；
         * @example `自定义属性E`
         */
        CustomizeFeatureE: string;
        /**
         * 建议零售价(单位:分)。
         * @example `600`
         */
        SuggestPrice: number;
        /**
         * 规格，最长64个字符；
         * @example `330毫升`
         */
        SaleSpec: string;
        /**
         * 促销文案，最长64个字符；
         * @example `买一送一`
         */
        PromotionText: string;
        /**
         * 促销原因，最长64个字符；
         * @example `儿童节活动`
         */
        PromotionReason: string;
        /**
         * 等级，最长32个字符；
         * @example `1级`
         */
        Rank: string;
        /**
         * 自定义属性G，最长64个字符；
         * @example `自定义属性G`
         */
        CustomizeFeatureG: string;
        /**
         * 销售价格(单位:分)。
         * @example `1000`
         */
        SalesPrice: number;
        /**
         * 自定义属性H，最长64个字符；
         * @example `自定义属性H`
         */
        CustomizeFeatureH: string;
        /**
         * 原价(单位:分)。
         * @example `1000`
         */
        OriginalPrice: number;
        /**
         * 自定义属性I，最长64个字符；
         * @example `自定义属性I`
         */
        CustomizeFeatureI: string;
        /**
         * 产地，最长64个字符；
         * @example `中国`
         */
        ProductionPlace: string;
        /**
         * 自定义属性B，最长64个字符；
         * @example `自定义属性B`
         */
        CustomizeFeatureB: string;
        /**
         * 商品简称，不输入则从商品全称中截取，最长64字符；
         * @example `牛奶`
         */
        ItemShortTitle: string;
        /**
         * 自定义属性N，最长128个字符；
         * @example `自定义属性N`
         */
        CustomizeFeatureN: string;
        /**
         * 是否匹配会员模板显示，默认值为false；
         * @example `true`
         */
        BeMember: boolean;
        /**
         * 税费信息，最长32个字符；
         * @example `增值税`
         */
        TaxFee: string;
        /**
         * 是否匹配缺货模板显示，可选值：
         * - `OUT_OF_STOCK`：缺货
         * - `NORMAL`：正常。
         * 默认值NORMAL，如果配置为OUT_OF_STOCK则会配置缺货模板进行显示
         * @example `OUT_OF_STOCK`
         */
        InventoryStatus: string;
        /**
         * 商品图片URL，最长128个字符；
         * @example `http://m.taobao.com/xxx.html`
         */
        ItemPicUrl: string;
        /**
         * 经销商，最长128个字符；
         * @example `天猫超市`
         */
        SupplierName: string;
        /**
         * 自定义属性L，最长128个字符；
         * @example `自定义属性L`
         */
        CustomizeFeatureL: string;
        /**
         * 能效，最长64个字符；
         * @example `2焦/毫升`
         */
        EnergyEfficiency: string;
        /**
         * 自定义属性C，最长64个字符；
         * @example `自定义属性C`
         */
        CustomizeFeatureC: string;
        /**
         * 自定义商品条码，只允许输入构成整数的阿拉伯数字。
         * @example `1234567`
         */
        ItemId: string;
        /**
         * 生产商，最长128个字符；
         * @example `中国制造`
         */
        Manufacturer: string;
        /**
         * 材质，最长64个字符；
         * @example `新鲜牛奶`
         */
        Material: string;
        /**
         * 自定义属性J，最长64个字符；
         * @example `自定义属性J`
         */
        CustomizeFeatureJ: string;
        /**
         * 自定义属性O，最长128个字符；
         * @example `自定义属性O`
         */
        CustomizeFeatureO: string;
        /**
         * 自定义属性P，最长512字符
         * @example `自定义属性P`
         */
        CustomizeFeatureP: string;
        /**
         * 自定义属性Q，最长512字符
         * @example `自定义属性Q`
         */
        CustomizeFeatureQ: string;
        /**
         * 自定义属性R，最长512字符
         * @example `自定义属性R`
         */
        CustomizeFeatureR: string;
        /**
         * 自定义属性S，最长512字符
         * @example `自定义属性S`
         */
        CustomizeFeatureS: string;
        /**
         * 自定义属性T，最长512字符
         * @example `自定义属性T`
         */
        CustomizeFeatureT: string;
        /**
         * 自定义属性U，最长512字符
         * @example `自定义属性U`
         */
        CustomizeFeatureU: string;
        /**
         * 自定义属性V，最长512字符
         * @example `自定义属性V`
         */
        CustomizeFeatureV: string;
        /**
         * 自定义属性W，最长512字符
         * @example `自定义属性W`
         */
        CustomizeFeatureW: string;
        /**
         * 自定义属性X，最长512字符
         * @example `345678`
         */
        CustomizeFeatureX: string;
        /**
         * 自定义属性Y，最长512字符
         * @example `YYY`
         */
        CustomizeFeatureY: string;
        /**
         * 自定义属性Z，最长512字符
         * @example `ZZZZ`
         */
        CustomizeFeatureZ: string;
        /**
         * 商品ID(SKU)，最长64个字符；
         * @example `1234567`
         */
        SkuId: string;
        /**
         * 自定义属性M，最长128个字符；
         * @example `自定义属性M`
         */
        CustomizeFeatureM: string;
        /**
         * 是否匹配促销模板显示，默认值为false；
         * @example `true`
         */
        BePromotion: boolean;
        /**
         * 是否匹配溯源模板显示，默认值为false；
         * @example `true`
         */
        BeSourceCode: boolean;
        /**
         * 二类商品类目ID，最长32个字符；
         * @example `饮料`
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
         * @example `2020-02-01T00:00:00Z`
         */
        PromotionEnd: string;
        /**
         * 商品条码，字符不区分大小写，最长64；
         * @example `690560583****`
         */
        ItemBarCode: string;
        /**
         * 是否匹配出清，默认值为false；
         * @example `false`
         */
        BeClearance: boolean;
    }[];
}
