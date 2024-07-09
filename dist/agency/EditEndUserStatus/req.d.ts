export interface EditEndUserStatusRequest {
    /**
     * 待处理客户uid
     * @example `1792155717328010`
     */
    "Uid"?: number;
    /**
     * ### 停机状态
     * - postPayFreeze  后付费停机
     * - postPayThaw 后付费复机
     * @example `postPayFreeze`
     */
    "CreditStatus"?: string;
}
