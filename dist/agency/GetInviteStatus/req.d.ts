export interface GetInviteStatusRequest {
    /**
     * inviteId list
     */
    "InviteStatusList": {
        /**
         * 邀请ID，来自接口 InviteSubAccount
         * @example `123`
         */
        InviteId: number;
    }[];
}
