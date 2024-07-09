export interface DescribeFabricConsortiumChannelsResponse {
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
    Result: {
        /**
         * 批处理超时时间
         * @example `2`
         */
        BatchTimeout: number;
        /**
         * 更新时间
         * @example `1544411108000`
         */
        UpdateTime: string;
        /**
         * 链码数量
         * @example `2`
         */
        ChaincodeCount: number;
        /**
         * 首选最大字节数
         * @example `102410241`
         */
        PreferredMaxBytes: number;
        /**
         * 加入联盟的成员数量
         * @example `3`
         */
        MemberJoinedCount: string;
        /**
         * 状态
         * @example `Running`
         */
        State: string;
        /**
         * 创建时间
         * @example `1544411108000`
         */
        CreateTime: string;
        /**
         * 是否支持自定义配置参数
         * @example `true`
         */
        SupportChannelConfig: boolean;
        /**
         * 创建者
         * @example `uid-*`
         */
        OwnerName: string;
        /**
         * 创建者Uid
         * @example `212`
         */
        OwnerUid: number;
        /**
         * 创建者Bid
         * @example `26842`
         */
        OwnerBid: string;
        /**
         * 块包含最大消息条目
         * @example `200`
         */
        MaxMessageCount: number;
        /**
         * 通道成员数量
         * @example `3`
         */
        MemberCount: number;
        /**
         * 是否需要加入
         * @example `true`
         */
        NeedJoined: boolean;
        /**
         * 请求ID
         * @example `1890FA4F-067A-4CE9-AC9B-2BD2E58FB5D3`
         */
        RequestId: string;
        /**
         * 联盟ID
         * @example `consortium-lianmenyumingyi-hc5d1bwl****`
         */
        ConsortiumId: string;
        /**
         * 通道名称
         * @example `mychammel`
         */
        ChannelName: string;
        /**
         * 删除时间
         * @example `1544411108000`
         */
        DeleteTime: string;
        /**
         * 通道ID
         * @example `chan-channelx-1l1hmckuuisxo`
         */
        ChannelId: string;
        /**
         * 联盟中通道序列
         * @example `1`
         */
        ConsortiumChannelId: number;
        /**
         * 是否删除
         * @example `true`
         */
        Deleted: boolean;
        /**
         * 联盟名称
         * @example `name`
         */
        ConsortiumName: string;
        /**
         * 块数量
         * @example `2`
         */
        BlockCount: number;
    }[];
}
