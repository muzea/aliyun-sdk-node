export interface GetRetcodeLogstoreResponse {
    /**
     * 请求ID。
     * @example `1A9C645C-C83F-4C9D-8CCB-29BEC9E1****`
     */
    RequestId: string;
    /**
     * 返回结构体。
     */
    Data: {
        /**
         * 请求状态。
         * @example `true`
         */
        Status: string;
        /**
         * 日志内容。
         * @example `retcode app or task can not be found!`
         */
        Message: string;
        /**
         * SLS存储信息。
         */
        RetcodeSLSConfig: {
            /**
             * 地域ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
            /**
             * SLS存储的Project。
             * @example `test-project`
             */
            Project: string;
            /**
             * SLS存储Logstore。
             * @example `log-test-220431`
             */
            Logstore: string;
        };
    };
}
