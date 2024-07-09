export interface DescribeAntChainContractProjectsV2Response {
    /**
     *
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
         * 合约工程
         */
        ContractProjects: {
            /**
             * 更新时间
             * @example `1609848383000`
             */
            UpdateTime: number;
            /**
             *
             * 联盟ID
             * @example `M8GaMEyX`
             */
            ConsortiumId: string;
            /**
             * 创建时间
             * @example `1609848383000`
             */
            CreateTime: number;
            /**
             * 工程ID
             * @example `RXwQj6m8`
             */
            ProjectId: string;
            /**
             * 工程名称
             * @example `test`
             */
            ProjectName: string;
            /**
             * 工程版本
             * @example `1.0.0`
             */
            ProjectVersion: string;
            /**
             * 工程描述
             * @example `test`
             */
            ProjectDescription: string;
        }[];
        /**
         *
         * 分页信息
         */
        Pagination: {
            /**
             * 每页数量
             * @example `10`
             */
            PageSize: number;
            /**
             * 页面编号，从1开始
             * @example `1`
             */
            PageNumber: number;
            /**
             * 总数
             * @example `100`
             */
            TotalCount: number;
        };
    };
}
