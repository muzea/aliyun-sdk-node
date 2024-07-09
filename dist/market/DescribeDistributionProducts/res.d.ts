export interface DescribeDistributionProductsResponse {
    /**
     * 请求 ID
     * @example `5BD09171-MB74-18D8-890E-C70C067527BE`
     */
    RequestId: string;
    /**
     * 当前页数
     * @example `1`
     */
    PageNumber: number;
    /**
     * 每页的推广商品数量。
     * @example `10`
     */
    PageSize: number;
    /**
     * 符合搜索条件的推广商品数
     * @example `50`
     */
    TotalCount: number;
    /**
     * 推广商品信息
     */
    Results: {
        /**
         * 商品类目，一级类目名称
         * @example `API市场`
         */
        FirstCategoryName: string;
        /**
         * 商品类目，二级类目名称
         * @example `生活服务`
         */
        SecondCategoryName: string;
        /**
         * 商品类型
         *         APP 应用类
         *         SERVICE 服务类
         *         CHENGPIN_SITE 成品网站
         *         SITE_CUSTOM_SERVICE 定制网站
         *         SITE_PROMOTION_RUN 网站推广运营
         *         ENT_APP_SOFT 应用软件
         *         CLOUD_SERVICE 云服务
         *         EIF 企信宝
         *         BASIC_TOOLS 基础工具
         *         BASIC_SERVICES 基础服务
         *         JIANZHAN_XITONG 建站系统
         *         APP_COUPLES 应用伴侣
         *         MIRRORS_MARKET 镜像市场
         *         MIRRORS_MARKET_BASIC_ENVIRONMENT 基础环境
         *         MIRRORS_MARKET_APPLICATION_SOFTWARE 应用软件
         *         MIRROR 镜像类
         *         DINGDING 钉钉类
         *         DOWNLOAD 下载类
         *         EXTENDED 未知类
         *         API_SERVICE API类
         *         ROS 资源编排类
         *         DOCKER 容器类
         *         LICENSE 授权码类
         *         SAAS_WUYING 应用软件-无影应用
         * @example `API类`
         */
        Type: string;
        /**
         * 商品主图url
         * @example `//photogallery.oss-cn-hangzhou.aliyuncs.com/photo/1744526877246715/09605255-87fd-44d1-8143-96ebc8019d46.jpeg`
         */
        ImageUrl: string;
        /**
         * 商品code
         * @example `cmap*****`
         */
        Code: string;
        /**
         * 商品名称
         * @example `手机号码在网状态查询`
         */
        Name: string;
        /**
         * 商品简介
         * @example `运营商号码状态查询】精准实时空号检测，手机号在网状态查询，返回正常、空号、通话中、在网但不可用、关机、呼叫转移、疑似关机、携号转网、号码错误、停机等多种状态。`
         */
        ShortDescription: string;
        /**
         * 商品默认规格价格，如100代表100,单位CNY
         * @example `100`
         */
        Price: string;
        /**
         * 商品用户评分
         * @example `5`
         */
        Score: string;
        /**
         * 商品近180天成交
         * @example `109`
         */
        TradeCount: string;
        /**
         * 商品买家评论数
         * @example `55`
         */
        UserCommentCount: string;
        /**
         * 商品返佣比例,如30，代表30%
         * @example `30`
         */
        SubmissionRadio: string;
        /**
         * 推广服务商名称
         * @example `深圳市****有限公司`
         */
        SupplierName: string;
        /**
         * 推广服务商(商品供应商)阿里云UID
         * @example `1911534921******`
         */
        SupplierUId: string;
    }[];
}
