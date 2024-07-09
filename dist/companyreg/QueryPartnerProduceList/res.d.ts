export interface QueryPartnerProduceListResponse {
    /**
     * 请求id
     * @example `1A13ABB5-7649-5031-B55C-D2E38F9F189D`
     */
    RequestId: string;
    /**
     * 当前页码
     * @example `1`
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
     * 总记录数
     * @example `34`
     */
    TotalItemNum: number;
    /**
     * 交付单列表
     */
    Data: {
        /**
         * 交付单ID
         * @example `P20211216204717000001`
         */
        BizId: string;
        /**
         * 业务类型
         * @example `esp.cdn`
         */
        BizType: string;
        /**
         * 手机号
         * @example `18600000001`
         */
        mobile: string;
    }[];
}
