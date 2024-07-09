export interface ListUserSolutionsResponse {
    /**
     * 当前页码
     * @example `8`
     */
    CurrentPageNum: number;
    /**
     * 总页码
     * @example `1`
     */
    TotalPageNum: number;
    /**
     * 每页显示条数
     * @example `20`
     */
    PageSize: number;
    /**
     * 请求id
     * @example `2174AA97-56FB-50FA-B243-0460B9E4CE0C`
     */
    RequestId: string;
    /**
     * 总条目数
     * @example `344`
     */
    TotalItemNum: number;
    /**
     * 返回数据
     */
    Data: {
        /**
         * 状态
         * @example `1`
         */
        Status: number;
        /**
         * 更新时间
         * @example `164454443222`
         */
        UpdateTime: number;
        /**
         * 交付单ID
         * @example `P20210924151843000001`
         */
        DeliveryOrderBizId: string;
        /**
         * 创建时间
         * @example `164454443222`
         */
        CreateTime: number;
        /**
         * 用户UID
         * @example `1219541161213057`
         */
        UserId: string;
        /**
         * 方案ID
         * @example `S20210924151843000001`
         */
        BizId: string;
        /**
         * 服务商code
         * @example `jinsan`
         */
        PartnerCode: string;
        /**
         * 驳回原因
         * @example `无`
         */
        Reason: string;
        /**
         * 需求派单ID
         * @example `A20210924151843000001`
         */
        IntentionAssignBizId: string;
        /**
         * 需求ID
         * @example `I20210924151843000001`
         */
        IntentionBizId: string;
        /**
         * 业务类型
         * @example `esp.logo`
         */
        BizType: string;
    }[];
}
