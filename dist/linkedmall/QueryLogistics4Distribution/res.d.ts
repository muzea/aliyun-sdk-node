export interface QueryLogistics4DistributionResponse {
    /**
     * 每次请求操作对应的操作日志号，由系统自动生成，返回给租户，可用于排查问题，双方日志中统一透出此标识
     * @example `1`
     */
    LogsId: string;
    /**
     * POP请求流水号，建议租户日志中也输出此流水号，双方排查问题方便
     * @example `A7BE4356-7F92-533E-A31B-2EBF2D67****`
     */
    RequestId: string;
    /**
     * 错误子代码。一般用于显示业务类的错误代码，一般建议关注此类错误
     * @example `1004`
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
     * @example `SUCCESS`
     */
    Message: string;
    /**
     * 请求结果数据
     */
    Model: {
        /**
         * 数据来源：如：菜鸟裹裹
         * @example `菜鸟裹裹`
         */
        DataProvider: string;
        /**
         * 数据来源说明，如：本数据由菜⻦裹裹提供
         * @example `本数据由菜鸟裹裹提供`
         */
        DataProviderTitle: string;
        /**
         * 货物信息列表
         */
        Goods: {
            /**
             * 货物名字，不保证有，⼀个主单只有⼀个商品可能没有该值，物流未获取物流
             * 公司物流号之前也没有该值
             * @example `货物名称`
             */
            GoodName: string;
            ItemId: string;
            /**
             * 下单数量
             * @example `1`
             */
            Quantity: number;
            SkuId: string;
        }[];
        /**
         * 本单物流公司code
         * @example `SF`
         */
        LogisticsCompanyCode: string;
        /**
         * 本单物流公司名称
         * @example `顺丰`
         */
        LogisticsCompanyName: string;
        /**
         * 物流信息列表
         */
        LogisticsDetailList: {
            /**
             * 发生时间
             * @example `2022-02-21 08:23:21`
             */
            OcurrTimeStr: string;
            /**
             * 物流信息
             * @example `""`
             */
            StanderdDesc: string;
        }[];
        /**
         * 运单号
         * @example `SF124142********`
         */
        MailNo: string;
    }[];
}
