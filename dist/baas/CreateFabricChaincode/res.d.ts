export interface CreateFabricChaincodeResponse {
    /**
     * 请求ID
     * @example `CD264CC8-B892-4CDC-BD31-7D179EE6E396`
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
         * @example `1544766801000`
         */
        CreateTime: string;
        /**
         * 链码ID
         * @example `code-sacc-1pr09q7jmo0np`
         */
        ChaincodeId: string;
        /**
         * 上传者名字
         * @example `peers-aaaaaa1-1oxw31d046jtl`
         */
        ProviderName: string;
        /**
         * 消息
         * @example `string`
         */
        Message: string;
        /**
         * 链码名
         * @example `mychaincode`
         */
        ChaincodeName: string;
        /**
         * 输入
         * @example `string`
         */
        Input: string;
        /**
         * 是否安装
         * @example `true`
         */
        Install: boolean;
        /**
         * 上传ID
         * @example `peers-aaaaaa1-1oxw31d046jtl`
         */
        ProviderId: string;
        /**
         * 部署时间
         * @example `1544766801000`
         */
        DeployTime: string;
        /**
         * 链码版本
         * @example `1.0`
         */
        ChaincodeVersion: string;
        /**
         * 联盟ID
         * @example `consortium-aaaaaa-akpcsjjac2jd`
         */
        ConsortiumId: string;
        /**
         * 通道名
         * @example `first-channel`
         */
        ChannelName: string;
        /**
         * 路径
         * @example `go-sdk-demo/chaincode/src`
         */
        Path: string;
    };
}
