export interface UpdateSwimmingLaneGroupResponse {
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
     * @example `7580ED24-A2F0-5ECC-9F2B-B92E2509****`
     */
    RequestId: string;
    /**
     * 响应数据。
     */
    Data: {
        /**
         * 命名空间ID。
         * @example `cn-hangzhou:test`
         */
        NamespaceId: string;
        /**
         * 泳道组名称。
         * @example `name`
         */
        Name: string;
        /**
         * 泳道组ID。
         * @example `98`
         */
        Id: number;
        /**
         * 泳道组涉及应用列表。
         */
        ApplicationList: {
            /**
             * 应用名称。
             * @example `test-app`
             */
            AppName: string;
            /**
             * 应用ID。
             * @example `476d26d9-b54c-40b8-8af9-d898cdc2****`
             */
            AppId: string;
        }[];
        /**
         * EDAS入口/网关信息。
         */
        EntryApplication: {
            /**
             * 应用名称。
             * @example `test-gateway`
             */
            AppName: string;
            /**
             * 应用ID。
             * @example `d52c9de9-53d0-4191-aa72-88974a6f****`
             */
            AppId: string;
        };
    };
}
