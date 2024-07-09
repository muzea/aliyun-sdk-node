export interface RemoveTerminalsResponse {
    /**
     * 请求ID。
     * @example `16A96B9A-F203-4EC5-8E43-CB92E68F4CD8`
     */
    RequestId: string;
    Terminals: {
        /**
         * 用户ID信息列表。
         */
        Terminal: {
            /**
             * 状态码，成功返回0，失败返回错误码描述。
             * @example `0`
             */
            Code: number;
            /**
             * 删除终端操作结果。取值：
             * - Success：成功。
             * - Failed：失败。
             * @example `Success`
             */
            Message: string;
            /**
             * 用户ID。
             * @example `1811****`
             */
            Id: string;
        }[];
    };
}
