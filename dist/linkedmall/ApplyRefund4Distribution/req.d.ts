export interface ApplyRefund4DistributionRequest {
    /**
     * 分销商ID
     * @example `7662***125`
     */
    "DistributorId"?: string;
    /**
     * 子分销订单ID
     * @example `DIS_343***445`
     */
    "SubDistributionOrderId"?: string;
    /**
     * 退款类型
     * @example `1`
     */
    "BizClaimType"?: number;
    /**
     * 申请退款金额
     * @example `790`
     */
    "ApplyRefundFee"?: number;
    /**
     * 退货数量
     * @example `1`
     */
    "ApplyRefundCount"?: number;
    /**
     * 退款原因ID
     * @example `500325`
     */
    "ApplyReasonTextId"?: number;
    /**
     * 留言
     * @example `快递滞留 买家申请退款`
     */
    "LeaveMessage"?: string;
    /**
     * 凭证列表
     */
    "LeavePictureLists"?: {
        /**
         * 图片地址
         * @example `https://aliyundoc.com`
         */
        Picture: string;
        /**
         * 图片描述
         * @example `商品破损`
         */
        Desc: string;
    }[];
    /**
     * 货物状态
     * @example `1`
     */
    "GoodsStatus"?: number;
    /**
     * 租户Id
     * @example `213**761`
     */
    "TenantId"?: string;
}
