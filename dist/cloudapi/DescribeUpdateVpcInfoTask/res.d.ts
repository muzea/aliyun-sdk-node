export interface DescribeUpdateVpcInfoTaskResponse {
    /**
     * 本次请求的ID。
     * @example `CEF72CEB-54B6-4AE8-B225-F876FF7BZ015`
     */
    RequestId: string;
    ApiUpdateVpcInfoResults: {
        /**
         * 任务结果列表
         */
        ApiUpdateVpcInfoResult: {
            /**
             * 阶段id
             * @example `fe952b95072747e2a8dfd336bcff8d7f`
             */
            StageId: string;
            /**
             * 更新状态
             * @example `success`
             */
            UpdateStatus: string;
            /**
             * api分组编号
             * @example `e8da6f6346184da9a30d0dc1888b1f3b`
             */
            GroupId: string;
            /**
             * api分组名称
             * @example `test`
             */
            GroupName: string;
            /**
             * api编号
             * @example `86364e7c166c47ba819b3f8f95ac0913`
             */
            ApiUid: string;
            /**
             * 错误信息
             * @example `Success. Request Success.`
             */
            ErrorMsg: string;
            /**
             * API发布的环境
             * @example `RELEASE`
             */
            StageName: string;
            /**
             * API名称
             * @example `api_test2`
             */
            ApiName: string;
        }[];
    };
}
