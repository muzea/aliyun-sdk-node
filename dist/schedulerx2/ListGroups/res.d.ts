export interface ListGroupsResponse {
    /**
     * 接口状态码。
     * @example `200`
     */
    Code: number;
    /**
     * 附加信息。
     * @example `message`
     */
    Message: string;
    /**
     * 请求唯一ID。
     * @example `71BCC0E3-64B2-4B63-A870-AFB64EBCB58A`
     */
    RequestId: string;
    /**
     * 调用接口是否成功。取值如下：
     * - **true**：成功
     * - **false**：失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 应用列表信息。
     */
    Data: {
        /**
         * 应用列表和应用详情。
         */
        AppGroups: {
            /**
             * 应用分组ID
             * @example `1`
             */
            AppGroupId: number;
            /**
             * 应用名称。
             * @example `DocTest`
             */
            AppName: string;
            /**
             * 应用Key。
             * @example `a3G77O6NZxq/lyo1NC****==`
             */
            AppKey: string;
            /**
             * 应用描述。
             * @example `Test`
             */
            Description: string;
            /**
             * 应用ID。
             * @example `DocTest.Group`
             */
            GroupId: string;
            /**
             * 应用版本，1:基础版，2:专业版
             * @example `2`
             */
            AppVersion: number;
        }[];
    };
}
