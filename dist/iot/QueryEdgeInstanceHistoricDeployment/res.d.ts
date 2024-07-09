export interface QueryEdgeInstanceHistoricDeploymentResponse {
    /**
     * 接口返回码。Success表示成功，其它表示错误码。详情请参见[错误码](~~135200~~)。
     * @example `Success`
     */
    Code: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `request parameter error`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `C9D9C91B-1B3B-4D84-BE58-68E7B2A989E4`
     */
    RequestId: string;
    /**
     * 表示是否调用成功。true表示调用成功，false表示调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用成功时，返回的数据。
     */
    Data: {
        /**
         * 当前页码。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 返回结果中每页显示的记录数量。
         * @example `2`
         */
        PageSize: number;
        /**
         * 总记录数量。
         * @example `6`
         */
        Total: number;
        /**
         * 边缘实例列表。
         */
        DeploymentList: {
            /**
             * 创建部署单的Unix时间戳。
             * @example `1581912859713`
             */
            GmtCreateTimestamp: number;
            /**
             * 部署单类型。
             * - deploy：部署。
             * - reset：重置。
             * @example `deploy`
             */
            Type: string;
            /**
             * 实例的部署单状态。
             * - 0：未开始（init）。
             * - 1：正在进行中（processing）。
             * - 2：成功（success）。
             * - 3：失败（failure）。
             * @example `2`
             */
            Status: number;
            /**
             * 部署单ID。
             * @example `e4803e566b424fa68e7f4b1c747c****`
             */
            DeploymentId: string;
            /**
             * 部署单描述。
             * @example `deploy_1561694817061`
             */
            Description: string;
            /**
             * 最后一次更新部署单的Unix时间戳。
             * @example `1581912859713`
             */
            GmtModifiedTimestamp: number;
            /**
             * 部署单完成时间。
             * @example `2019-06-28 12:07:16`
             */
            GmtCompleted: string;
            /**
             * 创建部署单时间。
             * @example `2019-06-26 18:12:29`
             */
            GmtCreate: string;
            /**
             * 部署单完成的Unix时间戳。
             * @example `1581912859713`
             */
            GmtCompletedTimestamp: number;
            /**
             * 最后一次更新部署单的时间。
             * @example `2019-06-28 12:07:16`
             */
            GmtModified: string;
        }[];
    };
}
