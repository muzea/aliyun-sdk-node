export interface CallBackThirdRightSendPlanRequest {
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
     * 设备对应的sn
     * @example `01000019100307010000600`
     */
    "Sn"?: string;
    /**
     * 供应商id
     * @example `1`
     */
    "SupplierId"?: number;
    /**
     * 精灵id
     * @example `1dsds2FzCXFGVA1ADS`
     */
    "GenieOpenId"?: string;
    /**
     * 领取状态
     * @example `1`
     */
    "ReceiveStatus"?: number;
    /**
     * 1001 日卡 1002 月卡 1003 季卡 1004 年卡
     * @example `1001`
     */
    "CardType"?: number;
    /**
     * 错误信息
     * @example `领取异常`
     */
    "ErrorMsg"?: string;
    /**
     * 扩展字段
     * @example `{}`
     */
    "ExtendInfo"?: any;
}
