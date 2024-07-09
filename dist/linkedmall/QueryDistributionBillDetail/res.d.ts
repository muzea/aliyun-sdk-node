export interface QueryDistributionBillDetailResponse {
    /**
     * 每次请求操作对应的操作日志号，由系统自动生成，返回给租户，可用于排查问题，双方日志中统一透出此标识
     * @example `1`
     */
    LogsId: string;
    /**
     * 请求流水号
     * @example `A7BE4356-7F92-533E-A31B-2EBF2D67****`
     */
    RequestId: string;
    /**
     * 错误子代码。一般用于显示业务类的错误代码，一般建议关注此类错误
     * @example `200`
     */
    SubCode: string;
    /**
     * 业务处理相关的错误信息，一般建议关注此类错误
     * @example `SUCCESS`
     */
    SubMessage: string;
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
     * 账单数据
     */
    Model: {
        /**
         * 页码
         * @example `1`
         */
        PageNumber: number;
        /**
         * 每页数量
         * @example `20`
         */
        PageSize: number;
        /**
         * 账单总个数
         * @example `685`
         */
        Total: number;
        /**
         * 账单明细链接地址列表
         */
        Data: string[];
    };
}
