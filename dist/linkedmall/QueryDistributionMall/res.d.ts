export interface QueryDistributionMallResponse {
    /**
     * 每次请求操作对应的操作日志号，由系统自动生成，返回给租户，可用于排查问题，双方日志中统一透出此标识
     * @example `1`
     */
    LogsId: string;
    /**
     * POP请求流水号，建议租户日志中也输出此流水号，双方排查问题方便
     * @example `539E5C68-D8B5-57EC-9D9B-58AFD9E0****`
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
     * @example `10`
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
         * 分销商id
         * @example `1`
         */
        DistributorId: string;
        /**
         * 分销商城id
         * @example `1`
         */
        DistributionMallId: string;
        /**
         * 分销商城名称
         * @example `分销商城名称`
         */
        DistributionMallName: string;
        /**
         * 渠道供应商id
         */
        ChannelSupplierId: string;
        /**
         * 商城模式（SaaS，API）
         * @example `SaaS`
         */
        DistributionMallType: string;
        /**
         * 开始时间
         * @example `2021-12-10 00:00:00`
         */
        StartDate: string;
        /**
         * 结束时间
         * @example `2022-10-31 23:59:59`
         */
        EndDate: string;
        /**
         * 分销商城状态
         * @example `""`
         */
        Status: string;
    };
    /**
     * 渠道公共数据
     */
    BizViewData: any;
}
