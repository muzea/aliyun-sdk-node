export interface DescribeAntChainConsortiumsResponse {
    /**
     * 请求ID
     * @example `D68D66B6-1964-4073-8714-B49F5EF1AEFC`
     */
    RequestId: string;
    /**
     * 请求结果
     */
    Result: {
        /**
         * 蚂蚁区块链联盟
         */
        AntConsortiums: {
            /**
             * 联盟描述
             * @example `测试联盟`
             */
            ConsortiumDescription: string;
            /**
             * 联盟状态
             * @example `Active`
             */
            Status: string;
            /**
             * 联盟ID
             * @example `DV80nJXq`
             */
            ConsortiumId: string;
            /**
             * 联盟创建时戳
             * @example `1562845453000`
             */
            CreateTime: number;
            /**
             * 联盟成员数量
             * @example `2`
             */
            MemberNum: number;
            /**
             * 账户身份角色
             * @example `SuperAdmin`
             */
            Role: string;
            /**
             * 联盟名称
             * @example `第一个联盟`
             */
            ConsortiumName: string;
            /**
             * 联盟内区块链梳理
             * @example `1`
             */
            ChainNum: number;
        }[];
        /**
         * 分页情况
         */
        Pagination: {
            /**
             * 每页展示条例数
             * @example `10`
             */
            PageSize: number;
            /**
             * 页码
             * @example `1`
             */
            PageNumber: number;
            /**
             * 联盟个数
             * @example `1`
             */
            TotalCount: number;
        };
    };
}
