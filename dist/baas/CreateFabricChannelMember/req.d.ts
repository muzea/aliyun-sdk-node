export interface CreateFabricChannelMemberRequest {
    /**
     * 通道ID
     * @example `chan-channelx-1l1hmckuuisxo`
     */
    "ChannelId": string;
    /**
     * 组织列表。
     */
    "Organization": {
        /**
         * 组织ID
         * @example `peers-aaaaaa1-1oxw31d046jtl`
         */
        OrganizationId: string;
    }[];
}
