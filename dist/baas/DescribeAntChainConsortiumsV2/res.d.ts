export interface DescribeAntChainConsortiumsV2Response {
    /**
     * 请求返回码
     * @example `200`
     */
    HttpStatusCode: string;
    /**
     * 请求ID
     * @example `D68D66B6-1964-4073-8714-B49F5EF1AEFC`
     */
    RequestId: string;
    /**
     * 结果状态
     * @example `true`
     */
    Success: boolean;
    /**
     * 结果消息
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
         * 蚂蚁区块链联盟
         */
        AntConsortiums: {
            /**
             * 联盟描述
             * @example `test`
             */
            ConsortiumDescription: string;
            /**
             * 联盟状态
             * @example `Active`
             */
            Status: string;
            /**
             * 联盟是否为空
             * @example `false`
             */
            IsEmptyConsortium: boolean;
            /**
             * 联盟ID
             * @example `M8GaMEyX`
             */
            ConsortiumId: string;
            /**
             * 联盟创建时戳
             * @example `1609745002000`
             */
            CreateTime: number;
            /**
             * 联盟成员数量
             * @example `2`
             */
            MemberNum: number;
            /**
             * 账户身份角色
             * @example `Member`
             */
            Role: string;
            /**
             * 联盟名称
             * @example `测试用`
             */
            ConsortiumName: string;
            /**
             * 联盟内区块链数量
             * @example `2`
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
             * 分页编号，从1开始
             * @example `1`
             */
            PageNumber: number;
            /**
             * 联盟个数
             * @example `10`
             */
            TotalCount: number;
        };
    };
}
