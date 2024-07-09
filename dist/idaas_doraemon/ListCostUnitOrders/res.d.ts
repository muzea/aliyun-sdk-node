export interface ListCostUnitOrdersResponse {
    /**
     * 请求ID
     * @example `A82621A5-715C-5486-80E9-9262EE43BA55`
     */
    RequestId: string;
    /**
     * 总页数
     * @example `2`
     */
    TotalPages: number;
    /**
     * 总条目数
     * @example `12`
     */
    TotalElements: number;
    /**
     * 页大小
     * @example `10`
     */
    PageSize: number;
    /**
     * 返回记录列表
     */
    Items: {
        /**
         * 阿里云订单编号
         * @example `215222637610732`
         */
        AliOrderCode: string;
        /**
         * 阿里云订单实例名称
         * @example `idaas_auth_public_cn-pl32pciy101`
         */
        AliOrderInstanceId: string;
        /**
         * 总计 CU 值，单位厘，实际购买 CU 乘以 1000
         * @example `100000`
         */
        TotalCostUnit: number;
        /**
         * 已用 CU 值，单位厘，实际使用 CU 乘以 1000
         * @example `100`
         */
        UsedCostUnit: number;
        /**
         * 订单状态。VALID：有效、REFUND：退款、EXPIRED：过期
         * @example `VALID`
         */
        OrderStatus: string;
        /**
         * 创建时间
         * @example `1646028448000`
         */
        CreateTime: number;
        /**
         * 过期时间
         * @example `1923321600000`
         */
        ExpiredTime: number;
        /**
         * 退款时间，毫秒时间戳，退款时才有值
         * @example `1923321600000`
         */
        RefundTime: number;
        Exhausted: boolean;
    }[];
}
