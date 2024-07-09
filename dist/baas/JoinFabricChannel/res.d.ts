export interface JoinFabricChannelResponse {
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
     * 结果
     */
    Result: {
        /**
         * 是否包含节点
         * @example `true`
         */
        WithPeer: boolean;
        /**
         * 接受时间
         * @example `1533025590`
         */
        AcceptTime: string;
        /**
         * 状态
         * @example `Running`
         */
        State: string;
        /**
         * 销毁时间
         * @example `1533025590`
         */
        DestroyTime: string;
        /**
         * 邀请时间
         * @example `1533025590`
         */
        InviteTime: string;
        /**
         * 通道ID
         * @example `channelid`
         */
        ChannelId: string;
        /**
         * 确认时间
         * @example `1533025590`
         */
        ConfirmTime: string;
        /**
         * 批准时间
         * @example `1533025590`
         */
        ApproveTime: string;
        /**
         * 组织ID
         * @example `peers-aaaaaa2-1eqnj5o5w9dt3`
         */
        OrganizationId: string;
    }[];
}
