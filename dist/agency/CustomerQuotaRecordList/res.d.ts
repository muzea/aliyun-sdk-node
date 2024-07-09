export interface CustomerQuotaRecordListResponse {
    /**
     * 总条数
     * @example `10`
     */
    Total: number;
    /**
     * 当前页码
     * @example `1`
     */
    PageNo: number;
    /**
     * 当前每页条数
     * @example `10`
     */
    PageSize: number;
    /**
     * 返回结果列表数据。
     */
    Data: {
        /**
         * 操作发起方式
         * API/ACPN
         * @example `ACPN`
         */
        OperationSubmitType: string;
        /**
         * 操作时间
         * @example `2023-12-15 10:34:36 UTC+8`
         */
        OperationTime: string;
        /**
         * 变更类型描述
         * @example `Quota Adjustment`
         */
        OperationTypeDesc: string;
        /**
         * 操作人uid
         * @example `5113766248601929`
         */
        OperationUid: string;
        /**
         * 变更后金额
         * @example `121.00`
         */
        UpdateAfterAmount: string;
        /**
         * 变更金额
         * @example `-100.00`
         */
        UpdateAmount: string;
        /**
         * 变更前金额
         * @example `221.00`
         */
        UpdateBeforeAmount: string;
        /**
         * 变更类型code
         * 枚举：all 全部，quota_create 创建，quota_amount_adjust 额度调整
         * @example `quota_amount_adjust`
         */
        OperationTypeCode: string;
    }[];
    /**
     * 请求id
     * @example `2103a0ae16849855284594613d874e`
     */
    RequestId: string;
    /**
     * 返回结果描述
     * @example `SUCCESS`
     */
    Msg: string;
    /**
     * 返回结果状态码，200是成功
     * @example `200`
     */
    Code: string;
}
