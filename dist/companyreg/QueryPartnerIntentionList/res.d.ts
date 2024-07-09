export interface QueryPartnerIntentionListResponse {
    /**
     * 请求id
     * @example `78E9DC76-7DFD-5975-99B0-4A95E8A92F5D`
     */
    RequestId: string;
    /**
     * 当前页码
     * @example `2`
     */
    CurrentPageNum: number;
    /**
     * 总页码
     * @example `13`
     */
    TotalPageNum: number;
    /**
     * 每页显示条数。
     * @example `20`
     */
    PageSize: number;
    /**
     * 总条数
     * @example `319`
     */
    TotalItemNum: number;
    /**
     * 需求单列表
     */
    Data: {
        /**
         * 业务ID
         * @example `I20211117092704000001`
         */
        BizId: string;
        /**
         * 手机号
         * @example `18700000003`
         */
        Mobile: string;
        /**
         * 业务类型
         * @example `esp.wangwen`
         */
        BizType: string;
    }[];
}
