export interface ListUserDetailSolutionsResponse {
    /**
     * 当前页码
     * @example `5`
     */
    CurrentPageNum: number;
    /**
     * 总页码
     * @example `1`
     */
    TotalPageNum: number;
    /**
     * 请求id
     * @example `2174AA97-56FB-50FA-B243-0460B9E4CE0C`
     */
    RequestId: string;
    /**
     * 分页大小。
     * @example `20`
     */
    PageSize: number;
    /**
     * 总数。
     * @example `1`
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
         * @example `15556223433`
         */
        UpdateTime: number;
        /**
         * 交付单ID
         * @example `P20211222161651000001`
         */
        DeliveryOrderBizId: string;
        /**
         * 创建时间
         * @example `15556223433`
         */
        CreateTime: number;
        /**
         * 用户UID
         * @example `1219541161213057`
         */
        UserId: string;
        /**
         * 业务ID
         * @example `S20211222161651000001`
         */
        BizId: string;
        /**
         * 服务商code
         * @example `jinsan`
         */
        PartnerCode: string;
        /**
         * 扩展信息
         * @example `{}`
         */
        ExtInfo: string;
        /**
         * 业务类型
         * @example `esp.wangwen`
         */
        BizType: string;
        /**
         * 需求ID
         * @example `I20211222161651000001`
         */
        IntentionBizId: string;
        /**
         * 原因
         * @example `无`
         */
        Reason: string;
        /**
         * 派单ID
         * @example `A20211222161651000001`
         */
        IntentionAssignBizId: string;
    }[];
}
