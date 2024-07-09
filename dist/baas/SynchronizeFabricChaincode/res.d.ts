export interface SynchronizeFabricChaincodeResponse {
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
     * 返回结果
     */
    Result: {
        /**
         * 类型
         * @example `1`
         */
        Type: number;
        /**
         * 背书策略
         * @example `OR ('aaaaaa1MSP.peer')`
         */
        EndorsePolicy: string;
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
         * 链码ID
         * @example `code-sacc-1pr09q7jm****`
         */
        ChaincodeId: string;
        /**
         * 上传者
         * @example `name`
         */
        ProviderName: string;
        /**
         * 信息
         * @example `ok`
         */
        Message: string;
        /**
         * 链码名
         * @example `mychaincode`
         */
        ChaincodeName: string;
        /**
         * 输入
         * @example `input`
         */
        Input: string;
        /**
         * false
         * @example `false`
         */
        Install: boolean;
        /**
         * 上传者ID
         * @example `provider`
         */
        ProviderId: string;
        /**
         * 部署时间
         * @example `1533025590`
         */
        DeployTime: string;
        /**
         * 链码版本
         * @example `1.0`
         */
        ChaincodeVersion: string;
        /**
         * 联盟ID
         * @example `consortium-lianmenyumingyi-hc5d1bwl****`
         */
        ConsortiumId: string;
        /**
         * 通道名
         * @example `chan-channelx-1l1hmckuuisxo`
         */
        ChannelName: string;
        /**
         * 路径
         * @example `go-sdk-demo/chaincode/src`
         */
        Path: string;
    };
}
