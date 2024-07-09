export interface CreateAppSessionBatchSyncResponse {
    /**
     * 请求ID。
     * @example `46329898-489C-4E63-9BA1-C1DA5C5D0986`
     */
    RequestId: string;
    /**
     * 批量操作ID。
     * @example `6d4d****`
     */
    BatchId: string;
    /**
     * 结果列表。
     */
    ResultList: {
        /**
         * 自定义会话ID。
         * @example `1ADE0****`
         */
        CustomSessionId: string;
        /**
         * 平台会话ID。
         * @example `100****`
         */
        PlatformSessionId: string;
        /**
         * 应用ID。
         * @example `13027****`
         */
        AppId: string;
        /**
         * 应用版本ID。
         * @example `35067****`
         */
        AppVersion: string;
        /**
         * 业务信息。
         */
        BizInfo: {
            /**
             * 业务结果信息。
             * @example `authToken`
             */
            Biz: any;
            /**
             * 终端节点信息。
             */
            Endpoints: {
                /**
                 * 终端节点名称。
                 * @example `exampleName`
                 */
                Name: string;
                /**
                 * 终端节点IP地址。
                 * @example `127.0.X.X`
                 */
                AccessHost: string;
                /**
                 * 终端节点端口。
                 * @example `8080`
                 */
                AccessPort: string;
                /**
                 * 终端节点类型。取值为Native。
                 * @example `Native`
                 */
                Type: string;
                /**
                 * 区域ID。取值：
                 * - huadong
                 * - xinan
                 * - huanan
                 * - huabei
                 * - huazhong
                 * @example `huadong`
                 */
                DistrictId: string;
                /**
                 * 运营商。取值：
                 * - MOBILE：中国移动。
                 * - UNICOM：中国联通。
                 * - TELECOM：中国电信。
                 * - BGP：多线网络。
                 * @example `bgp`
                 */
                Isp: string;
            }[];
        };
    }[];
    /**
     * 失败列表。
     */
    FailedList: {
        /**
         * 自定义会话ID。
         * @example `1ADE0****`
         */
        CustomSessionId: string;
        /**
         * 应用ID。
         * @example `100****`
         */
        AppId: string;
        /**
         * 失败信息。
         */
        FailedInfo: {
            /**
             * 错误码。
             * @example `400`
             */
            ErrorMessage: string;
            /**
             * 错误描述。
             * @example `App type not support.`
             */
            ErrorCode: string;
        };
    }[];
}
