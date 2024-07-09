export interface DisassociateMembersResponse {
    /**
     * 请求ID。
     * @example `95060F1D-6990-4645-8920-A81D1BBFE992`
     */
    RequestId: string;
    /**
     * 解绑目标。
     */
    Members: {
        /**
         * 联系人ID。
         * @example `c-qL4HqKONzOM7****`
         */
        ContactId: string;
        /**
         * 解绑目标ID。取值：
         * - 资源目录ID。
         * - 资源夹ID。
         * - 成员ID。
         * @example `fd-ZDNPiT****`
         */
        MemberId: string;
        /**
         * 解绑时间。
         * @example `2023-03-27 17:19:21`
         */
        ModifyDate: string;
    }[];
}
