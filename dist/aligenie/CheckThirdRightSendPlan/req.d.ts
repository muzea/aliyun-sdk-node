export interface CheckThirdRightSendPlanRequest {
    /**
     * 设备类型
     * @example `ailabs`
     */
    "BizType"?: string;
    /**
     * 设备分组
     * @example `cc`
     */
    "BizGroup"?: string;
    /**
     * 设备sn
     * @example `01000019100307010000600`
     */
    "Sn"?: string;
    /**
     * 供应商id
     * @example `1`
     */
    "SupplierId"?: number;
    /**
     * 扩展字段
     * @example `{}`
     */
    "ExtendInfo"?: any;
}
