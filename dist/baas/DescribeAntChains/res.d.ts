export interface DescribeAntChainsResponse {
    /**
     * 请求ID
     * @example `52EC3196-D0B8-4FBE-A8B6-6DDABABE11C9`
     */
    RequestId: string;
    /**
     * 请求结果
     */
    Result: {
        /**
         * 是否存在
         * @example `false`
         */
        IsExist: boolean;
        /**
         * 蚂蚁区块链属性描述
         */
        AntChains: {
            /**
             * 到期时间
             * @example `1626019200000`
             */
            ExpireTime: number;
            /**
             * 创建时戳
             * @example `1562847396000`
             */
            CreateTime: number;
            /**
             * 区块链类型，Contract ：合约链，无其他类型
             * @example `Contract`
             */
            ChainType: string;
            /**
             * 是否已经申请链上访问证书
             * @example `ChainApplied`
             */
            MemberStatus: string;
            /**
             * Merkle树类型，fdmt：蚂蚁链Merkle数，无其他类型
             * @example `fdmt`
             */
            MerkleTreeSuit: string;
            /**
             * 当前用户是否是管理员
             * @example `true`
             */
            IsAdmin: boolean;
            /**
             * 区块链名称
             * @example `一个测试的区块链`
             */
            AntChainName: string;
            /**
             * 创建地域信息
             * @example `cn-hangzhou`
             */
            RegionId: string;
            /**
             * 运行状态：
             * - Running：运行中
             * - Stop：停止
             * @example `Running`
             */
            Network: string;
            /**
             * TLS加密算法，rsa：ras算法，无其他算法类型
             * @example `rsa`
             */
            TlsAlgo: string;
            /**
             * 详细的链版本
             * @example `2.19.1`
             */
            Version: string;
            /**
             * 加密套件类型，classic ： 标准加密，无其他类型
             * @example `classic`
             */
            CipherSuit: string;
            /**
             * 资源类型：
             * - Basic：基础版
             * - Enterprise：企业版
             * @example `Basic`
             */
            ResourceSize: string;
            /**
             * 节点数量
             * @example `4`
             */
            NodeNum: number;
            /**
             * 蚂蚁区块链ID
             * @example `pYogqb9v`
             */
            AntChainId: string;
        }[];
        /**
         * 分页情况
         */
        Pagination: {
            /**
             * 每页显示条例数
             * @example `20`
             */
            PageSize: number;
            /**
             * 当前页面编号
             * @example `1`
             */
            PageNumber: number;
            /**
             * 总数
             * @example `1`
             */
            TotalCount: number;
        };
    };
}
