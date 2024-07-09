export interface GetApplicationInstanceListResponse {
    /**
     * 返回数据
     */
    Data: {
        /**
         * 节点列表。
         */
        Result: {
            /**
             * 节点ip。
             * @example `10.1.2.3`
             */
            Ip: string;
            /**
             * 节点标签。
             */
            Tags: {
                /**
                 * 标签值。
                 * @example `gray`
                 */
                Tag: string;
            }[];
            /**
             * 应用端口。
             * @example `8080`
             */
            Port: string;
        }[];
        /**
         * 总共有多少个节点。
         * @example `100`
         */
        TotalSize: number;
        /**
         * 第几页，从1开始。
         * @example `1`
         */
        PageNumber: number;
        /**
         * 每页多少个。
         * @example `10`
         */
        PageSize: number;
    };
}
