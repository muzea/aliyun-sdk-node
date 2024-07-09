export interface DisassociateMembersRequest {
    /**
     * 联系人ID。
     * @example `c-qL4HqKONzOM7****`
     */
    "ContactId": string;
    /**
     * 解绑目标。
     */
    "Members": string[];
}
