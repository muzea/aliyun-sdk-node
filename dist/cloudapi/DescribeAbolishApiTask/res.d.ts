export interface DescribeAbolishApiTaskResponse {
    /**
     * 本次请求的ID。
     * @example `E8515BA6-81CD-4191-A7CF-C4FCDD3C0D99`
     */
    RequestId: string;
    ApiAbolishResults: {
        /**
         * 返回结果
         */
        ApiAbolishResult: {
            /**
             * 运行环境编号
             * @example `0919f2854a88484c91dc9253347c78f9`
             */
            StageId: string;
            /**
             * 下线状态
             * @example `OVER`
             */
            AbolishStatus: string;
            /**
             * API分组ID
             * @example `160cb6505e1c43a6b84346856d74eb47`
             */
            GroupId: string;
            /**
             * API分组名称
             * @example `wb2022021401619286`
             */
            GroupName: string;
            /**
             * API 唯一标识
             * @example `4e26cdbbb113416dba1f0285bed29979`
             */
            ApiUid: string;
            /**
             * 错误信息。
             * @example `Success. Request Success.`
             */
            ErrorMsg: string;
            /**
             * 环境名称，枚举为：
             * - **RELEASE**：线上
             * - **TEST**：测试
             * @example `RELEASE`
             */
            StageName: string;
            /**
             * API名称
             * @example `v2_page_consent`
             */
            ApiName: string;
        }[];
    };
}
