export interface DescribeFabricConsortiumChaincodesResponse {
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
     * 联盟的链码列表
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
         * @example `Instantiatable`
         */
        State: string;
        /**
         * 创建时间
         * @example `1544411108000`
         */
        CreateTime: string;
        /**
         * 链码ID
         * @example `code-sacc-1pr09q7jmo0np`
         */
        ChaincodeId: string;
        /**
         * 链码上传者名称
         * @example `name`
         */
        ProviderName: string;
        /**
         * 消息
         * @example `ok`
         */
        Message: string;
        /**
         * 链码名称
         * @example `sacc`
         */
        ChaincodeName: string;
        /**
         * 是否安装
         * @example `true`
         */
        Install: boolean;
        /**
         * 链码输入
         * @example `input`
         */
        Input: string;
        /**
         * 链码上传者ID
         * @example `peers-aaaaaa2-1eqnj5o5w9dt3`
         */
        ProviderId: string;
        /**
         * 部署时间
         * @example `1544411108000`
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
         * @example `cname`
         */
        ChannelName: string;
        /**
         * 通道ID
         * @example `chan-channelx-1l1hmckuuisxo`
         */
        ChannelId: string;
        /**
         * 链码路径
         * @example `go-sdk-demo/chaincode/src`
         */
        Path: string;
    }[];
}
