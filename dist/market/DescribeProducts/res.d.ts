export interface DescribeProductsResponse {
    /**
     * 请求 ID
     * @example `A077D99E-0C4D-421E-A5D4-F533F6657817`
     */
    RequestId: string;
    /**
     * 当前页数
     * @example `1`
     */
    PageNumber: number;
    /**
     * 每页显示商品数
     * @example `10`
     */
    PageSize: number;
    /**
     * 符合搜索条件的商品数
     * @example `75`
     */
    TotalCount: number;
    ProductItems: {
        /**
         * 商品信息
         */
        ProductItem: {
            /**
             * 价格信息。
             * @example `{'DiscountPrice': 0.0, 'TradePrice': 15750.0, 'Currency': 'CNY', 'OriginalPrice': 15750.0, 'RuleIds': {'RuleId': []}, 'Coupons': {'Coupon': []}}`
             */
            PriceInfo: string;
            /**
             * 交付方式
             * @example `镜像`
             */
            DeliveryWay: string;
            /**
             * 图片 URL
             * @example `https://oss.aliyuncs.com/photogallery/photo/1904996544835414/7549/767d6d07-8366-4822-b84e-61f6ea10d146.png`
             */
            ImageUrl: string;
            /**
             * 质保时间
             * @example `1天`
             */
            WarrantyDate: string;
            /**
             * 产品标签
             * @example `企业,上云,Windows,Windows server 2012,Apache,Nginx,Windows面板`
             */
            Tags: string;
            /**
             * 评分
             * @example `5.0`
             */
            Score: string;
            /**
             * 供应商 ID
             * @example `228399`
             */
            SupplierId: number;
            /**
             * 交付时间
             * @example `windows`
             */
            OperationSystem: string;
            /**
             * 商品简介
             * @example `【定制建站一条龙服务+阿里云独享服务器】由客户经理与设计师提供一对一服务，应用标准化全自动服务流程体系，帮助企业轻松拥有官方网站。该建站产品与<em>ECS</em>下单时同时购买，<em>ECS</em>最低配置1核1G即可。购买须知：请在购买<em>ECS</em>配置安全组时选择HTTP：80端口 ...`
             */
            ShortDescription: string;
            /**
             * 交付时间
             * @example `1天`
             */
            DeliveryDate: string;
            /**
             * 详情页URL
             * @example `/products/53616009/cmjj02****.html`
             */
            TargetUrl: string;
            /**
             * 商品码
             * @example `cmjj02****`
             */
            Code: string;
            /**
             * 类目 ID
             * @example `53398003`
             */
            CategoryId: number;
            /**
             * 商品名称
             * @example `PHP多版本环境（Windows2012 | phpStudy）`
             */
            Name: string;
            /**
             * 建议价格
             * @example `10元/月`
             */
            SuggestedPrice: string;
            /**
             * 供应商名称
             * @example `长沙****有限公司`
             */
            SupplierName: string;
        }[];
    };
}
