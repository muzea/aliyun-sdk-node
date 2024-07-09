export interface DescribeFabricChaincodeDefinitionTaskResponse {
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
         * 任务状态
         * @example `Pending`
         */
        Status: string;
        /**
         * 任务类型
         * @example `ChaincodeDefinition`
         */
        Type: string;
        /**
         * 通道名称
         * @example `f100`
         */
        ChannelName: string;
        /**
         * 任务描述
         * @example `description`
         */
        Description: string;
        /**
         * 创建时间
         * @example `1533025590`
         */
        CreateTime: number;
        /**
         * 任务ID
         * @example `1890FA4F-067A-4CE9-AC9B-2BD2E58FB5D3`
         */
        TaskId: string;
        /**
         * 任务创建者
         * @example `perf9141MSP`
         */
        Creator: string;
        /**
         * 任务审批信息列表
         */
        Approvers: string[];
        /**
         * 任务内容
         */
        Content: {
            /**
             * 链码定义
             */
            ChaincodeDefinition: {
                /**
                 * 背书规则
                 * @example `OR ("perf9141MSP.member")`
                 */
                EndorsementPolicy: string;
                /**
                 * 同一链码任务顺序ID
                 * @example `1`
                 */
                Sequence: number;
                /**
                 * 链码版本
                 * @example `1.1`
                 */
                Version: string;
                /**
                 * 链码包ID
                 * @example `sacc_v1.0:698d4e73c5f1d0239fbf0313ac79ddfaf44d5a803ecb02a4d1983cca4a706860`
                 */
                ChaincodePackageId: string;
                /**
                 * 链码名称
                 * @example `sacc`
                 */
                Name: string;
                /**
                 * 是否需要初始化
                 * @example `true`
                 */
                InitRequired: boolean;
                /**
                 * 链码collection配置
                 * @example `collectionconfig`
                 */
                CollectionConfig: string;
                /**
                 * 链码唯一标识
                 * @example `698d4e73c5f1d0239fbf0313ac79ddfaf44d5a803ecb02a4d1983cca4a706860`
                 */
                Uid: string;
            };
        };
    };
}
