export interface DescribeAntChainContractProjectsResponse {
    /**
     * 请求ID
     * @example `5EDAC16F-EA3E-4017-B223-D76220F985DF`
     */
    RequestId: string;
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
             * @example `1563954499000`
             */
            UpdateTime: number;
            /**
             * 联盟ID
             * @example `DV80nJXq`
             */
            ConsortiumId: string;
            /**
             * 创建时间
             * @example `1562847564000`
             */
            CreateTime: number;
            /**
             * 工程ID
             * @example `2L9VK68g`
             */
            ProjectId: string;
            /**
             * 工程名称
             * @example `projectname`
             */
            ProjectName: string;
            /**
             * 工程版本
             * @example `5`
             */
            ProjectVersion: string;
            /**
             * 工程描述
             * @example `description`
             */
            ProjectDescription: string;
        }[];
        /**
         * 分页信息
         */
        Pagination: {
            /**
             * 每页数量
             * @example `10`
             */
            PageSize: number;
            /**
             * 页面编号
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
