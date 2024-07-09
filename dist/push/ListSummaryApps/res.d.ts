export interface ListSummaryAppsResponse {
    /**
     * 请求ID。
     * @example `9998B3CC-ED9E-4CB3-A8FB-DCC61296BFBC`
     */
    RequestId: string;
    SummaryAppInfos: {
        /**
         * app详情，SummaryAppInfo组成的集合。
         */
        SummaryAppInfo: {
            /**
             * 应用的名称。
             * @example `abc`
             */
            AppName: string;
            /**
             * AppKey信息。
             * @example `23****07`
             */
            AppKey: number;
        }[];
    };
}
