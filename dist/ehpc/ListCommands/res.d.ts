export interface ListCommandsResponse {
    /**
     * 本页条数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `04F0F334-1335-436C-A1D7-6C044FE7****`
     */
    RequestId: string;
    /**
     * 当前页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 列表条目总数。
     * @example `1`
     */
    TotalCount: number;
    Commands: {
        /**
         * 命令列表。
         */
        Command: {
            /**
             * 超时时间。单位为秒。
             * @example `60`
             */
            Timeout: string;
            /**
             * 命令ID。
             * @example `c-hz01v8vudql****`
             */
            CommandId: string;
            /**
             * 命令工作目录。
             * @example `/home`
             */
            WorkingDir: string;
            /**
             * 命令内容。
             * @example `echo "hello world"`
             */
            CommandContent: string;
        }[];
    };
}
