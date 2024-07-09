export interface CreateFabricChannelResponse {
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
     * 创建结果
     */
    Result: {
        /**
         * 块超时时间
         * @example `2`
         */
        BatchTimeout: number;
        /**
         * 更新时间
         * @example `1544768139624`
         */
        UpdateTime: string;
        /**
         * 链码数量
         * @example `2`
         */
        ChaincodeCount: number;
        /**
         * 块大小软限制
         * @example `12`
         */
        PreferredMaxBytes: number;
        /**
         * 状态
         * @example `Running`
         */
        State: string;
        /**
         * 创建时间
         * @example `1544768139624`
         */
        CreateTime: string;
        /**
         * 创建者
         * @example `uid-`
         */
        OwnerName: string;
        /**
         * 创建者Uid
         * @example `1234`
         */
        OwnerUid: number;
        /**
         * 创建者Bid
         * @example `26842`
         */
        OwnerBid: string;
        /**
         * 块交易上限
         * @example `50`
         */
        MaxMessageCount: number;
        /**
         * 成员数量
         * @example `1`
         */
        MemberCount: number;
        /**
         * 请求ID
         * @example `1890FA4F-067A-4CE9-AC9B-2BD2E58FB5D3`
         */
        RequestId: string;
        /**
         * 联盟ID
         * @example `consortium-aaaaaa-akpcsjjac2jd`
         */
        ConsortiumId: string;
        /**
         * 通道名
         * @example `channelx`
         */
        ChannelName: string;
        /**
         * 是否支持配置
         * @example `true`
         */
        SupportConfig: boolean;
        /**
         * 通道ID
         * @example `chan-channelx-1l1hmckuuisxo`
         */
        ChannelId: string;
        /**
         * 联盟名
         * @example `aaaaaa`
         */
        ConsortiumName: string;
        /**
         * 块个数
         * @example `2`
         */
        BlockCount: number;
    };
}
