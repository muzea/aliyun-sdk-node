export interface GetInstanceResponse {
    /**
     * 请求id。
     * @example `728C5E01-ABF6-5AA8-B9FC-B3BA05DECC77`
     */
    RequestId: string;
    /**
     * 实例id。
     * @example `pairec-test1`
     */
    InstanceId: string;
    /**
     * 实例类型。
     * ● basic-基础版
     * ● highleve-升级版
     * ● advance-进阶版
     * ● standard-标准版
     * @example `basic`
     */
    Type: string;
    /**
     * 实例状态。
     * ● Initializing-初始化中
     * ● Stopped-停止服务
     * ● Running-运行中
     * @example `Initializing`
     */
    Status: string;
    /**
     * 区域ID。
     * ● cn-shenzhen - 深圳
     * ● cn-hangzhou - 杭州
     * ● cn-beijing - 北京
     * ● cn-shanghai - 上海
     * @example `cn-shenzhen`
     */
    RegionId: string;
    /**
     * 实例创建时间。
     * @example `2022-10-13 17:34:52.0`
     */
    GmtCreateTime: string;
    /**
     * 实例更新时间。
     * @example `2022-11-05 09:02:30.0`
     */
    GmtModifiedTime: string;
    /**
     * 实例过期时间。
     * @example `2022-12-14 00:00:00.0`
     */
    ExpiredTime: string;
    /**
     * 实例所属的商品code。
     * @example `airec_developers_public_cn`
     */
    CommodityCode: string;
    /**
     * 实例的付费类型，目前仅支持Subscription（预付费）。
     * @example `Subscription`
     */
    ChargeType: string;
    /**
     * 实例配置。
     */
    Config: {
        /**
         * 服务引擎列表。
         */
        Engines: {
            /**
             * 组件代码。
             * @example `feature`
             */
            ComponentCode: string;
            /**
             * 组件类型。
             * @example `Hologres`
             */
            Type: string;
            /**
             * 元数据。
             */
            Meta: any;
        }[];
        /**
         * 配套功能列表。
         */
        Monitors: {
            /**
             * 组件代码。
             * @example `featuresets`
             */
            ComponentCode: string;
            /**
             * 组件类型。
             * @example `Platform`
             */
            Type: string;
            /**
             * 元数据。
             */
            Meta: any;
        }[];
        /**
         * 建模环境列表。
         */
        DataManagements: {
            /**
             * 组件代码。
             * @example `storage`
             */
            ComponentCode: string;
            /**
             * 组件类型。
             * @example `OSS`
             */
            Type: string;
            /**
             * 元数据。
             */
            Meta: any;
        }[];
    };
}
