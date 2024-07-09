export interface DeleteSiteMonitorsRequest {
    /**
     * 待删除的任务ID。多个任务ID之间用半角逗号（,）分隔。
     * @example `01adacc2-ece5-41b6-afa2-3143ab5d****,43bd1ead-514f-4524-813e-228ce091****`
     */
    "TaskIds": string;
    /**
     * 删除任务的同时是否删除报警规则。取值：
     * - true（默认值）：删除报警规则。
     * - false：不删除报警规则。
     * @example `true`
     */
    "IsDeleteAlarms"?: boolean;
}
