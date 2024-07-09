export interface DeleteMessageContactRequest {
    /**
     * 联系人ID。
     * @example `c-qL4HqKONzOM7****`
     */
    "ContactId": string;
    /**
     * 是否保留成员中的联系人。取值：
     * - true（默认值）：保留。保留成员中的此联系人，联系人仍可以接收成员的消息。
     * - false：不保留。将此联系人从成员中移除，此联系人不再接收成员的消息。当选择False时此接口结果异步返回，您可以通过[GetMessageContactDeletionStatus](~~GetMessageContactDeletionStatus~~)获取删除结果。
     * @example `true`
     */
    "RetainContactInMembers"?: boolean;
}
