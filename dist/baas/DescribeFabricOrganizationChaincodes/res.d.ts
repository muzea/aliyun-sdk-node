export interface DescribeFabricOrganizationChaincodesResponse {
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
     * 组织的链码列表
     */
    Result: {
        /**
         * 背书策略
         * @example `OR (&#39;perf9141MSP.member&#39;)`
         */
        EndorsePolicy: string;
        /**
         * 状态。取值：
         * - **CHECKING**
         * - **ERROR**
         * - **INSTALLABLE**
         * - **INSTALLED**
         * - **RUNNING**
         * - **UPGRADABLE**
         * @example `RUNNING`
         */
        State: string;
        /**
         * 创建时间
         * @example `1533025590`
         */
        CreateTime: string;
        /**
         * 链码ID
         * @example `code-sacc-1pr09q7jmo0np`
         */
        ChaincodeId: string;
        /**
         * 消息
         * @example `OK`
         */
        Message: string;
        /**
         * 链码名
         * @example `mycc`
         */
        ChaincodeName: string;
        /**
         * 是否安装
         * @example `Installed`
         */
        Installed: string;
        /**
         * 创建者
         * @example `uid-23425`
         */
        Creator: string;
        /**
         * 部署时间
         * @example `1533025590`
         */
        DeployTime: string;
        /**
         * 链码版本
         * @example `0.3`
         */
        ChaincodeVersion: string;
        /**
         * 联盟ID
         * @example `consortium-lianmenyumingyi-hc5d1bwlulg7`
         */
        ConsortiumId: string;
        /**
         * 通道名
         * @example `first-channel`
         */
        ChannelName: string;
        /**
         * 通道ID
         * @example `chan-first-channel-31hlgpen5k5lig`
         */
        ChannelId: string;
    }[];
}
