export interface StopAlertResponse {
    /**
     * 执行结果状态。
     * - True：执行成功。
     * - False：执行失败。
     * @example `True`
     */
    status: boolean;
    /**
     * 执行失败时返回信息提示。
     * @example `Success`
     */
    msg: string;
}
