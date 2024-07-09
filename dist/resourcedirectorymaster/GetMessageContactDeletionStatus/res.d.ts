export interface GetMessageContactDeletionStatusResponse {
    /**
     * 请求ID。
     * @example `95060F1D-6990-4645-8920-A81D1BBFE992`
     */
    RequestId: string;
    /**
     * 联系人删除信息。
     */
    ContactDeletionStatus: {
        /**
         * 联系人删除状态。取值：
         * - Deleting：删除中。
         * - Failed：删除失败。
         * @example `Deleting`
         */
        Status: string;
        /**
         * 联系人ID。
         * @example `c-qL4HqKONzOM7****`
         */
        ContactId: string;
        /**
         * 删除失败的联系人列表。
         */
        FailReasonList: {
            /**
             * 成员ID。
             * @example `199796839435****`
             */
            AccountId: string;
            /**
             * 联系人接收的消息分类。
             */
            MessageTypes: string[];
        }[];
    };
}
