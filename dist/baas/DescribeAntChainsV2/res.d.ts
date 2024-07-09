export interface DescribeAntChainsV2Response {
    /**
     * 请求返回码
     * @example `200`
     */
    HttpStatusCode: string;
    /**
     * 请求ID
     * @example `DBD6C69E-22B9-419E-B072-7A715F3AA330`
     */
    RequestId: string;
    /**
     * 结果状态
     * @example `true`
     */
    Success: boolean;
    /**
     * 结果信息
     * @example `OK`
     */
    ResultMessage: string;
    /**
     * 返回码
     * @example `OK`
     */
    Code: string;
    /**
     * 请求消息
     * @example `OK`
     */
    Message: string;
    /**
     * 结果码
     * @example `OK`
     */
    ResultCode: string;
    /**
     * 请求结果
     */
    Result: {
        /**
         * 是否存在
         * @example `true`
         */
        IsExist: boolean;
        /**
         * 区块链信息
         */
        AntChains: {
            /**
             * 过期时间
             * @example `1672329600000`
             */
            ExpireTime: number;
            /**
             * 创建时间
             * @example `1609221924000`
             */
            CreateTime: number;
            /**
             * Rest状态
             * @example `CREATE`
             */
            RestStatus: string;
            /**
             * 区块链的类型
             * @example `Contract`
             */
            ChainType: string;
            /**
             * 是否为管理员
             * @example `false`
             */
            IsAdmin: boolean;
            /**
             * Merkle树类型
             * @example `fdmt`
             */
            MerkleTreeSuit: string;
            /**
             * 成员状态
             * @example `ChainApplied`
             */
            MemberStatus: string;
            /**
             * 实例ID
             * @example `ALIYUN202012291405173265824745109`
             */
            InstanceId: string;
            /**
             * 区域信息
             * @example `cn-hangzhou`
             */
            RegionId: string;
            /**
             * 区块链名称
             * @example `专业链`
             */
            AntChainName: string;
            /**
             * 网络信息
             * @example `Running`
             */
            Network: string;
            /**
             * 监控状态
             * @example `true`
             */
            MonitorStatus: boolean;
            /**
             * TLS加密算法
             * @example `rsa`
             */
            TlsAlgo: string;
            /**
             * 详细版本
             * @example `2.19.1`
             */
            Version: string;
            /**
             * 加密套件类型
             * @example `classic`
             */
            CipherSuit: string;
            /**
             * 资源类型
             * @example `Basic`
             */
            ResourceSize: string;
            /**
             * 节点数量
             * @example `4`
             */
            NodeNum: number;
            /**
             * 区块链ID
             * @example `8bd720bde18c4b37b0f4a1c7834db163`
             */
            AntChainId: string;
        }[];
        /**
         * 分页信息
         */
        Pagination: {
            /**
             * 分页大小
             * @example `10`
             */
            PageSize: number;
            /**
             * 分页号
             * @example `1`
             */
            PageNumber: number;
            /**
             * 总数
             * @example `2`
             */
            TotalCount: number;
        };
    };
}
