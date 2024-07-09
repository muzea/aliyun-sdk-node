export interface DescribeAppsResponse {
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
         * 应用总个数。
         * @example `15`
         */
        TotalNum: number;
        /**
         * 应用总页数。
         * @example `5`
         */
        TotalPage: number;
        /**
         * 应用详情列表。
         */
        AppList: {
            /**
             * 白板应用唯一标识符。
             * @example `7mbj****`
             */
            AppID: string;
            /**
             * 白板应用名称。
             * @example `my_white_board`
             */
            AppName: string;
            /**
             * 白板应用状态。取值：
             * - **1**：启用。
             * - **2**：停用。
             * @example `1`
             */
            Status: number;
            /**
             * 白板应用回调地址URL。
             * @example `http://www.example.com/callback`
             */
            CallbackUrl: string;
            /**
             * 合法域名列表，多个使用英文逗号(,)分隔。
             * @example `www.example.com`
             */
            DomainNames: string;
            /**
             * 白板应用的创建时间。
             * @example `2020-04-10 12:20:30.567`
             */
            CreateTime: string;
            /**
             * 白板应用的回调类型，多个使用英文逗号(,)分隔，all表示设置了全部回调。
             * @example `userPermissionCallback,whiteBoardProfileCallback,userProfileCallback,hostCheckCallback`
             */
            CallbackType: string;
        }[];
    };
}
