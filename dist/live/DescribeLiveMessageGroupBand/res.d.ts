export interface DescribeLiveMessageGroupBandResponse {
    /**
     * 请求ID。
     * @example `021D1FE7-2E87-16AC-9364-4E7EA47C0931`
     */
    RequestId: string;
    /**
     * 群组ID。
     * @example `qingluanbanch_abc_1`
     */
    GroupId: string;
    /**
     * 被禁言的用户列表。
     */
    BannedUserList: string[];
    /**
     * 不被禁言的用户列表。
     */
    UnbannedUserList: string[];
    /**
     * 是否全员禁言。
     * @example `false`
     */
    IsbannedAll: boolean;
}
