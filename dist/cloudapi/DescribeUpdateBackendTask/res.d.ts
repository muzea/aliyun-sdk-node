export interface DescribeUpdateBackendTaskResponse {
    /**
     * 请求ID
     * @example `CEF72CEB-54B6-4AE8-B225-F876FF7BZ016`
     */
    RequestId: string;
    ApiUpdateBackendResults: {
        /**
         * API的更新结果
         */
        ApiUpdateBackendResult: {
            /**
             * 运行环境编号
             * @example `d8f2f54f3309458b8aaceb36c01c2dd9`
             */
            StageId: string;
            /**
             * API更新结果
             * @example `OVER`
             */
            UpdateStatus: string;
            /**
             * 分组名称
             * @example `imotob1`
             */
            GroupName: string;
            /**
             * 分组ID
             * @example `3013a55c0c44483f984d26df27120513`
             */
            GroupId: string;
            /**
             * API的ID
             * @example `14faa7ba0572445685866ddb6a6f19da`
             */
            ApiUid: string;
            /**
             * 更新失败的错误信息
             * @example `Failed`
             */
            ErrorMsg: string;
            /**
             * 环境名称
             * @example `RELEASE`
             */
            StageName: string;
            /**
             * API名称
             * @example `checkin_linechart_today`
             */
            ApiName: string;
            /**
             * 后端服务ID
             * @example `c09b078bcb8f4ade9677bd8b18cdf43f`
             */
            BackendId: string;
        }[];
    };
}
