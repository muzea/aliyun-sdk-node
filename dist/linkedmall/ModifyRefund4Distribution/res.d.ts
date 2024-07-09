export interface ModifyRefund4DistributionResponse {
    /**
     * 每次请求操作对应的操作日志号，由系统自动生成，返回给租户，可用于排查问题，双方日志中统一透出此标识
     * @example `1`
     */
    LogsId: string;
    /**
     * POP请求流水号，建议租户日志中也输出此流水号，双方排查问题方便
     * @example `539E5C68-D8B5-57EC-9****8AFD9E0`
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
     * pageSize
     * @example `1`
     */
    PageSize: number;
    /**
     * 当前页
     * @example `1`
     */
    PageNumber: number;
    /**
     * 总数量
     * @example `1`
     */
    TotalCount: number;
    /**
     * 本次执行的结果成功与否
     * @example `SUCCESS`
     */
    Success: boolean;
    /**
     * 返回的执行结果码， 正确为字符串 0000
     * @example `0000`
     */
    Code: string;
    /**
     * 错误消息
     * @example `""`
     */
    Message: string;
    /**
     * 请求结果数据
     */
    Model: {
        /**
         * 当前发起逆向的子分销订单号
         * @example `DIS_153***851`
         */
        SubDistributionOrderId: string;
        /**
         * 逆向的状态
         * @example `5`
         */
        DisputeStatus: number;
        /**
         * 退款类型
         * @example `1`
         */
        DisputeType: number;
        /**
         * 纠纷id
         * @example `235***343`
         */
        DisputeId: number;
    };
}
