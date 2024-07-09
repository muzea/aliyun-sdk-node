export interface UpgradeFabricChaincodeResponse {
    /**
     * 请求ID
     * @example `A6CC6C63-2D71-4D0C-AEBE-E95F0127C514`
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
         * 类型
         * @example `1`
         */
        Type: number;
        /**
         * 背书策略
         * @example `OR ("wholesalerMSP.peer")`
         */
        EndorsePolicy: string;
        /**
         * 状态
         * @example `Running`
         */
        State: string;
        /**
         * 创建时间
         * @example `1545215617000`
         */
        CreateTime: string;
        /**
         * 链码ID
         * @example `code-sacc-fk9z4r97****`
         */
        ChaincodeId: string;
        /**
         * 上传者
         * @example `uid-1928592`
         */
        ProviderName: string;
        /**
         * 消息
         * @example `OK`
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
         * 是否安装
         * @example `false`
         */
        Install: boolean;
        /**
         * 上传者ID
         * @example `1928592`
         */
        ProviderId: string;
        /**
         * 部署时间
         * @example `1545215617000`
         */
        DeployTime: string;
        /**
         * 链码版本
         * @example `1.0`
         */
        ChaincodeVersion: string;
        /**
         * 联盟ID
         * @example `consortium-supplychain-1pxzsp5tb****`
         */
        ConsortiumId: string;
        /**
         * 通道名
         * @example `cc`
         */
        ChannelName: string;
        /**
         * 路径
         * @example `github.com/sacc`
         */
        Path: string;
    };
}
