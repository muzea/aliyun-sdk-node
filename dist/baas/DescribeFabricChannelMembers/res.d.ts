export interface DescribeFabricChannelMembersResponse {
    /**
     * 请求ID
     * @example `1890FA4F-067A-4CE9-AC9B-2BD2E58FB5D3`
     */
    RequestId: string;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误码
     * @example `200`
     */
    ErrorCode: number;
    /**
     * 通道的成员列表
     */
    Result: {
        /**
         * 是否包含节点
         * @example `true`
         */
        WithPeer: boolean;
        /**
         * 接受时间
         * @example `1544411108000`
         */
        AcceptTime: string;
        /**
         * 组织域名
         * @example `hello`
         */
        OrganizationDomain: string;
        /**
         * 状态
         * @example `Running`
         */
        State: string;
        /**
         * 邀请时间
         * @example `1544411108000`
         */
        InviteTime: string;
        /**
         * 通道ID
         * @example `chan-channelx-1l1hmckuuisxo`
         */
        ChannelId: string;
        /**
         * 组织名
         * @example `name`
         */
        OrganizationName: string;
        /**
         * 组织描述
         * @example `description`
         */
        OrganizationDescription: string;
        /**
         * 组织ID
         * @example `peers-aaaaaa1-1oxw31d046jtl`
         */
        OrganizationId: string;
    }[];
}
