export interface ListDistributionMallResponse {
    /**
     * 每次请求操作对应的操作日志号，由系统自动生成，返回给租户，可用于排查问题，双方日志中统一透出此标识
     * @example `1`
     */
    LogsId: string;
    /**
     * POP请求流水号，建议租户日志中也输出此流水号，双方排查问题方便
     * @example `1718921E-C8D4-55E1-B8D4-114AE537C1B7`
     */
    RequestId: string;
    /**
     * 错误子代码。一般用于显示业务类的错误代码，一般建议关注此类错误
     * @example `SUCCESS`
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
     * @example `1`
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
         * 分销商城id
         */
        DistributionMallId: string;
        /**
         * 分销商城名称
         */
        DistributionMallName: string;
        /**
         * 渠道供应商id
         */
        ChannelSupplierId: string;
        /**
         * 商城模式
         */
        DistributionMallType: string;
        /**
         * 开始时间
         */
        StartDate: string;
        /**
         * 结束时间
         */
        EndDate: string;
        /**
         * 分销商城状态
         */
        Status: string;
    }[];
}
