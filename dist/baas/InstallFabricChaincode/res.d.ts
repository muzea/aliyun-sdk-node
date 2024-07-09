export interface InstallFabricChaincodeResponse {
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
         * 类型：
         * - 0：未定义
         * - 1：Go
         * - 2：Node
         * - 4：Java
         * @example `1`
         */
        Type: number;
        /**
         * 背书策略
         * @example `OR ("perf9141MSP.member")`
         */
        EndorsePolicy: string;
        /**
         * 状态
         * @example `Pending`
         */
        State: string;
        /**
         * 创建时间
         * @example `1533025590`
         */
        CreateTime: string;
        /**
         * 链码ID
         * @example `cc-198jejf8f8chi8`
         */
        ChaincodeId: string;
        /**
         * 上传者
         * @example `prividername`
         */
        ProviderName: string;
        /**
         * 信息
         * @example `ok`
         */
        Message: string;
        /**
         * 链码名称
         * @example `mychannel`
         */
        ChaincodeName: string;
        /**
         * 输入
         * @example `input`
         */
        Input: string;
        /**
         * 是否安装
         * @example `false`
         */
        Install: boolean;
        /**
         * 上传者ID
         * @example `providerid`
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
         * @example `consortium-lianmenyumingyi-hc5d1bwlulg7`
         */
        ConsortiumId: string;
        /**
         * 通道名
         * @example `mychannel`
         */
        ChannelName: string;
        /**
         * 路径
         * @example `github.com/hyperledger/fabric-samples/chaincode/sacc`
         */
        Path: string;
    };
}
