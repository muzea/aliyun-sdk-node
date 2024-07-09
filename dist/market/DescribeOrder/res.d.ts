export interface DescribeOrderResponse {
    /**
     * 订购商品名称
     * @example `saas服务产品`
     */
    ProductName: string;
    /**
     * 卖家公司名称
     * @example `**科技股份有限公司`
     */
    SupplierCompanyName: string;
    /**
     * 订单原价（元）
     * @example `10.0`
     */
    OriginalPrice: number;
    /**
     * 阿里云用户唯一标识（aliyunPK）
     * @example `190311111111****`
     */
    AliUid: number;
    /**
     * 已使用代金券金额（元）
     * @example `0.0`
     */
    CouponPrice: number;
    /**
     * 账号数
     * @example `0`
     */
    AccountQuantity: number;
    /**
     * 预付费的时间单位。取值：
     * - MONTH：单月
     * - SEASON：季度
     * - HALFYEAR：半年
     * - YEAR：一年
     * - TWOYEARS：两年
     * - ONCE：单次
     * @example `MONTH`
     */
    PeriodType: string;
    /**
     * 请求 ID
     * @example `6EF60BEC-0242-43AF-BB20-270359FB54A7`
     */
    RequestId: string;
    /**
     * 付款状态。取值：
     * - PAID 已支付
     * - UNPAID 未支付
     * @example `PAID`
     */
    PayStatus: string;
    /**
     * 实际支付金额（元）
     * @example `0.0`
     */
    PaymentPrice: number;
    /**
     * 订单状态。取值：
     * - NORMAL 正常
     * - REFUND 退款
     * - DELETE 作废
     * @example `NORMAL`
     */
    OrderStatus: string;
    /**
     * 订购商品规格 Code
     * @example `cmgj02****-prepay`
     */
    ProductSkuCode: string;
    /**
     * 付款时间
     * @example `1531191675000`
     */
    PaidOn: number;
    /**
     * 订单模块信息。示例中的参数说明如下：
     * - package_quantity： 使用次数（API 商品特有模块）
     * - package_version：版本
     * - ord_time： 时长
     * - order_num： 数量
     * - code：模块 Code
     * - globarKey： 模块 key
     * - name： 模块名称
     * - value： 模块值
     * @example `{ "package_quantity": { "code": "package_quantity", "globarKey": "cmapi014302_package_quantity_package_quantity_10000", "name": "10000次", "value": "10000" }, "package_version": { "code": "package_version", "globarKey": "cmapi014302_package_version_package_version_yuncode830200000", "name": "0元／10000次", "value": "yuncode830200000" }, "ord_time": { "code": "ord_time", "globarKey": "cmapi014302_ord_time_ord_time_6:Month", "name": "6个月", "value": "6:Month" }, "order_num": { "code": "order_num", "globarKey": "cmapi014302_order_num_order_num_1", "name": "1", "value": "1" } }`
     */
    Components: any;
    /**
     * 下单时间
     * @example `1531191564000`
     */
    CreatedOn: number;
    /**
     * 订单类型。取值：
     * - NEW 新购订单
     * - RENEW 续费订单
     * - TRIAL 试用订单
     * @example `NEW`
     */
    OrderType: string;
    /**
     * 订单应收金额（元）
     * @example `0.0`
     */
    TotalPrice: number;
    /**
     * 订购数量
     * @example `1`
     */
    Quantity: number;
    /**
     * 订单ID
     * @example `202211111111111`
     */
    OrderId: number;
    /**
     * 商品Code
     * @example `cmgj02****`
     */
    ProductCode: string;
    SupplierTelephones: {
        /**
         * 卖家客服热线
         */
        Telephone: string[];
    };
    InstanceIds: {
        /**
         * 订单关联业务实例
         */
        InstanceId: string[];
    };
}
