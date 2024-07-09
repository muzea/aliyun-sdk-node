export interface ModifyRefund4DistributionRequest {
    /**
     * 分销商ID
     * @example `766***221`
     */
    "DistributorId"?: string;
    /**
     * 子分销订单ID
     * @example `DIS_153***851`
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
         * 图片描述
         * @example `https://aliyundoc.com`
         */
        Desc: string;
        /**
         * 图片地址
         * @example `商品破损`
         */
        Picture: string;
    }[];
    /**
     * 货物状态
     * @example `1`
     */
    "GoodsStatus"?: number;
    /**
     * 纠纷id
     * @example `235***343`
     */
    "DisputeId"?: number;
    /**
     * 租户Id
     * @example `213**112`
     */
    "TenantId"?: string;
}
