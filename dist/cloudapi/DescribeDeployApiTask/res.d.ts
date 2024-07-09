export interface DescribeDeployApiTaskResponse {
    /**
     * 本次请求的ID。
     * @example `CA4B3261-F14A-5E33-8608-F75A1DF27AD4`
     */
    RequestId: string;
    DeployedResults: {
        /**
         * 返回结果
         */
        DeployedResult: {
            /**
             * 错误信息
             * @example `Success. Request Success.`
             */
            ErrorMsg: string;
            /**
             * 指定要查询的环境。
             * - **RELEASE**：线上
             * - **TEST**：测试
             * @example `RELEASE`
             */
            StageName: string;
            /**
             * API分组编号
             * @example `e8da6f6346184da9a30d0dc1888b1f3b`
             */
            GroupId: string;
            /**
             * API 唯一标识
             * @example `0433c1cd84724923b7a4f9ca1cfc249c`
             */
            ApiUid: string;
            /**
             * 部署状态
             * @example `OVER`
             */
            DeployedStatus: string;
        }[];
    };
}
