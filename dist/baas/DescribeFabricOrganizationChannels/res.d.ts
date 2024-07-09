export interface DescribeFabricOrganizationChannelsResponse {
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
     * 组织加入的通道列表
     */
    Result: {
        /**
         * 批处理超时时间，单位秒
         * @example `2`
         */
        BatchTimeout: number;
        /**
         * 更新时间
         * @example `1533025590`
         */
        UpdateTime: string;
        /**
         * 链码数量
         * @example `2`
         */
        ChaincodeCount: number;
        /**
         * 首选最大字节数
         * @example `24`
         */
        PreferredMaxBytes: number;
        /**
         * 状态
         * @example `Running`
         */
        State: string;
        /**
         * 创建时间
         * @example `1533025590`
         */
        CreateTime: string;
        /**
         * 是否支持自定义配置参数
         * @example `true`
         */
        SupportChannelConfig: boolean;
        /**
         * 创建者
         * @example `uid-116748157028****`
         */
        OwnerName: string;
        /**
         * 创建者Uid
         * @example `116748157028****`
         */
        OwnerUid: number;
        /**
         * 创建者Bid
         * @example `26842`
         */
        OwnerBid: string;
        /**
         * 块包含最大消息条目
         * @example `12`
         */
        MaxMessageCount: number;
        /**
         * 成员数量
         * @example `3`
         */
        MemberCount: number;
        /**
         * 请求ID
         * @example `1890FA4F-067A-4CE9-AC9B-2BD2E58FB5D3`
         */
        RequestId: string;
        /**
         * 联盟ID
         * @example `consortium-perf914-37cfcff9pa****`
         */
        ConsortiumId: string;
        /**
         * 通道名
         * @example `mychannel`
         */
        ChannelName: string;
        /**
         * 删除时间
         * @example `1533025590`
         */
        DeleteTime: string;
        /**
         * 通道ID
         * @example `chan-first-channel-31hlgpen5k****`
         */
        ChannelId: string;
        /**
         * 是否已经删除
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
         * @example `3`
         */
        BlockCount: number;
    }[];
}
