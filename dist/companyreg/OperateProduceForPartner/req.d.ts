export interface OperateProduceForPartnerRequest {
    /**
     * 操作类型
     * @example `CERT_MATERIAL_SUBMITTED`
     */
    "OperateType"?: string;
    /**
     * 业务ID
     * @example `P20210930105636000001`
     */
    "BizId"?: string;
    /**
     * 扩展信息
     * @example `{\"beianServiceNumber\":\"9969c666-0935-4c5b-8042-926ff546e39f\"}`
     */
    "ExtInfo"?: string;
    /**
     * 业务类型
     * @example `esp.beian_assist`
     */
    "BizType"?: string;
}
