export interface InsertSwimmingLaneGroupResponse {
    /**
     * 状态码。
     * @example `200`
     */
    Code: number;
    /**
     * 附加信息。
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `D5268CAC-D356-5C8D-BC7C-FBE0D13B****`
     */
    RequestId: string;
    /**
     * 接口返回数据。
     */
    Data: {
        /**
         * 命名空间ID。
         * @example `cn-hangzhou:test`
         */
        NamespaceId: string;
        /**
         * 泳道组名称。
         * @example `test`
         */
        Name: string;
        /**
         * 泳道组ID。
         * @example `64`
         */
        Id: number;
        ApplicationList: {
            /**
             * 泳道组所有设计应用列表。
             */
            Application: {
                /**
                 * 应用名称。
                 * @example `test-app`
                 */
                AppName: string;
                /**
                 * 应用ID。
                 * @example `bdb251cc-02a6-48dd-891b-2ab21b25****`
                 */
                AppId: string;
            }[];
        };
        /**
         * EDAS入口/网关信息。
         */
        EntryApplication: {
            /**
             * 应用名称。
             * @example `test-app`
             */
            AppName: string;
            /**
             * 应用ID。
             * @example `bdb251cc-02a6-48dd-891b-2ab21b25c****`
             */
            AppId: string;
        };
    };
}
