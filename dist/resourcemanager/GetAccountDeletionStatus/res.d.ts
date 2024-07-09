export interface GetAccountDeletionStatusResponse {
    /**
     * 成员删除状态。
     */
    RdAccountDeletionStatus: {
        /**
         * 状态。取值：
         * - Success：删除成功。
         * - Checking：检查中。
         * - Deleting：删除中。
         * - CheckFailed：检查失败。
         * - DeleteFailed：删除失败。
         * @example `Success`
         */
        Status: string;
        /**
         * 成员ID。
         * @example `169946124551****`
         */
        AccountId: string;
        /**
         * 删除开始时间。
         * @example `2022-08-23T17:05:30+08:00`
         */
        CreateTime: string;
        /**
         * 删除结束时间。
         * @example `2022-08-23T17:06:01+08:00`
         */
        DeletionTime: string;
        /**
         * 删除失败原因。
         */
        FailReasonList: {
            /**
             * 检查项所属的云服务名称。
             * @example `Others`
             */
            Name: string;
            /**
             * 检查项描述。
             * @example `This account has a payer account. Please release the financial relationship of this account first.`
             */
            Description: string;
        }[];
        /**
         * 删除类型。取值：
         * - 0：直接删除。如果成员最近30天内不存在后付费资源，则系统会直接删除该成员。
         * - 1：静默期删除。如果成员最近30天内存在后付费资源，则会进入静默期。等待静默期结束后，系统才会开始删除该成员。关于静默期的更多信息，请参见[什么是成员删除的静默期](~~446079~~)。
         * @example `0`
         */
        DeletionType: string;
    };
    /**
     * 请求ID。
     * @example `8AA43293-7C8F-5730-8F2D-7F864EC092C5`
     */
    RequestId: string;
}
