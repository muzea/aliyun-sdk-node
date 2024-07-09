export interface DescribeHotDbListResponse {
    /**
     * 信息。
     * @example `msg`
     */
    Msg: string;
    /**
     * 请求ID。
     * @example `0B6B7BDC-575D-4A77-A4F8-24B7EF******`
     */
    RequestId: string;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 结果。
     */
    Data: {
        /**
         * 随机数。
         * @example `jzhz`
         */
        RandomCode: string;
        List: {
            /**
             * 列表。
             */
            InstanceDb: {
                /**
                 * 实例名称。
                 * @example `instanceName`
                 */
                InstanceName: string;
                HotDbList: {
                    data: string[];
                };
            }[];
        };
    };
}
