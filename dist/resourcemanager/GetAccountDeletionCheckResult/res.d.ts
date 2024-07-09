export interface GetAccountDeletionCheckResultResponse {
    /**
     * 请求ID。
     * @example `54AC391D-4F7F-5F08-B8D3-0AECDE6EC5BD`
     */
    RequestId: string;
    /**
     * 成员删除检查结果。
     */
    AccountDeletionCheckResultInfo: {
        /**
         * 检查状态。取值：
         * - PreCheckComplete：检查完成。
         * - PreChecking：检查中。
         * @example `PreCheckComplete`
         */
        Status: string;
        /**
         * 是否允许删除。取值：
         * - true：允许删除。
         * - false：不允许删除。
         * @example `false`
         */
        AllowDelete: string;
        /**
         * 不允许删除的原因。
         * > 当AllowDelete为false时，返回该参数值。
         */
        NotAllowReason: {
            /**
             * 检查项描述。
             * @example `This account is an Enterprise Finance associated account. Please remove the financial association of this account before deleting it.`
             */
            Description: string;
            /**
             * 检查项ID。
             * @example `NON_SP_efc`
             */
            CheckId: string;
            /**
             * 检查项所属的云服务名称。
             * @example `Enterprise finance`
             */
            CheckName: string;
        }[];
        /**
         * 您可以选择放弃并继续执行成员删除的检查项。
         * > 当AllowDelete为true时，可能返回该参数值。
         */
        AbandonableChecks: {
            /**
             * 检查项描述。
             * @example `存在云产品实例运行，请联系客服人员提工单处理。`
             */
            Description: string;
            /**
             * 检查项ID。
             * @example `NON_SP_cs`
             */
            CheckId: string;
            /**
             * 检查项所属的云服务名称。
             * @example `容器服务`
             */
            CheckName: string;
        }[];
    };
}
