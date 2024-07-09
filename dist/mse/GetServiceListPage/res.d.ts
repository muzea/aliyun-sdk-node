export interface GetServiceListPageResponse {
    /**
     * 请求是否成功。
     * @example `True`
     */
    Success: boolean;
    /**
     * 请求信息。
     * @example `OK`
     */
    Message: string;
    /**
     * 请求id。
     * @example `A2F946FB-F2E3-5BF4-8CBE-xxxxxxxx`
     */
    RequestId: string;
    /**
     * 请求响应数据。
     */
    Data: {
        /**
         * 当前页面数据。
         */
        Result: {
            /**
             * 应用名。
             * @example `example-app`
             */
            AppName: string;
            /**
             * 服务版本。
             * @example `1`
             */
            Version: string;
            /**
             * 服务对应的节点数。
             * @example `1`
             */
            InstanceNum: number;
            /**
             * 服务最后的更新时间。
             * @example `123456`
             */
            GmtModifyTime: string;
            /**
             * 应用id。
             * @example `dez4xxxxx@f3f75ed8ffxxxxx`
             */
            AppId: string;
            /**
             * 服务名。
             * @example `sc-A`
             */
            ServiceName: string;
            /**
             * 服务分组。
             * @example `DEFAULT_GROUP`
             */
            Group: string;
        }[];
        /**
         * 数据总数。
         * @example `100`
         */
        TotalSize: string;
        /**
         * 当前页码。
         * @example `1`
         */
        PageNumber: string;
        /**
         * 页面大小。
         * @example `10`
         */
        PageSize: string;
    };
}
