export interface DescribeWhiteBoardsResponse {
    /**
     * 请求ID。
     * @example `FE22D613-D3C6-4A58-87CA-F21FC85AA08E`
     */
    RequestId: string;
    /**
     * 调用结果。
     * @example `true`
     */
    ResponseSuccess: boolean;
    /**
     * 错误码。
     * @example `null`
     */
    ErrorCode: string;
    /**
     * 错误信息。
     * @example `null`
     */
    ErrorMsg: string;
    /**
     * 返回的结果信息。
     */
    Result: {
        /**
         * 文档总个数。
         * @example `33`
         */
        TotalNum: number;
        /**
         * 文档总页数。
         * @example `11`
         */
        TotalPage: number;
        /**
         * 文档详情列表。
         */
        DocList: {
            /**
             * 白板应用唯一标识符。
             * @example `7mbj****`
             */
            AppID: string;
            /**
             * 白板文档唯一标识符。
             * @example `4EZlwmRW0gDG****`
             */
            DocKey: string;
            /**
             * 白板文档状态。取值：
             * - **1**：启用。
             * - **2**：停用。
             * @example `1`
             */
            Status: number;
            /**
             * 创建白板的用户ID。
             * @example `123456`
             */
            CreateUserId: string;
            /**
             * 白板文档的创建时间。
             * @example `2020-04-10 12:20:30.567`
             */
            CreateTime: string;
        }[];
    };
}
