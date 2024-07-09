export interface DeleteAccountRequest {
    /**
     * 待删除的成员ID。
     * @example `169946124551****`
     */
    "AccountId": string;
    /**
     * 可以选择放弃并继续执行成员删除的检查项ID。
     * 该ID从[GetAccountDeletionCheckResult](~~448775~~)的返回参数AbandonableChecks中获取。
     */
    "AbandonableCheckId"?: string[];
}
