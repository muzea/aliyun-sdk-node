export interface DescribeFabricConsortiumsResponse {
    /**
     * 请求ID
     * @example `1890FA4F-067A-4CE9-AC9B-2BD2E58FB5D3`
     */
    RequestId: string;
    /**
     * 错误码
     * @example `200`
     */
    ErrorCode: number;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 联盟列表
     */
    Result: {
        /**
         * 通道数
         * @example `2`
         */
        ChannelCount: number;
        /**
         * 域名
         * @example `domain`
         */
        Domain: string;
        /**
         * 状态
         * - Pending - 等待创建中
         * - Initial - 创建中
         * - Aborted - 创建失败
         * - Created - 创建成功
         * - Purging - 释放中
         * - Damaged - 释放失败
         * - Deleted - 已经释放
         * - SpecChangPending - 等待规格变配中
         * - SpecChanging - 规格变配中
         * - Inactive - 暂停中
         * - ServiceNotActivated - 云服务集成没有激活
         * @example `Pending`
         */
        State: string;
        /**
         * 创建时间
         * @example `1544411108000`
         */
        CreateTime: string;
        /**
         * 联盟节点规格
         * @example `basic`
         */
        SpecName: string;
        /**
         * 是否支持自定义配置参数
         * @example `true`
         */
        SupportChannelConfig: boolean;
        /**
         * 创建者
         * @example `uid-125566`
         */
        OwnerName: string;
        /**
         * 创建者用户ID
         * @example `12042815`
         */
        OwnerUid: number;
        /**
         * 创建者业务ID
         * @example `26842`
         */
        OwnerBid: string;
        /**
         * 域名前缀
         * @example `code`
         */
        CodeName: string;
        /**
         * 地域
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 通道创建策略
         * @example `Any`
         */
        ChannelPolicy: string;
        /**
         * 请求ID
         * @example `3A929FAC-A82D-4EAB-A0FF-D867426D8B23`
         */
        RequestId: string;
        /**
         * 联盟ID
         * @example `consortium-lianmenyumingyi-hc5d1bwl****`
         */
        ConsortiumId: string;
        /**
         * 付费到期时间
         * @example `1544411108000`
         */
        ExpiredTime: string;
        /**
         * 组织数
         * @example `2`
         */
        OrganizationCount: number;
        /**
         * 联盟名
         * @example `name`
         */
        ConsortiumName: string;
        MajorVersion: string;
        /**
         * 标签列表
         */
        Tags: {
            /**
             * 标签键
             * @example `app`
             */
            Key: string;
            /**
             * 标签值
             * @example `nat_internet`
             */
            Value: string;
        }[];
    }[];
}
