export interface GetAsyncTaskResponse {
    /**
     * 请求ID。
     * @example `1CBAFFAB-B697-4049-A9B1-67E1FC5F****`
     */
    RequestId: string;
    /**
     * 操作是否成功。
     * @example `true`
     */
    Success: string;
    /**
     * 执行结果。返回`success`表示成功，否则将返回错误信息。
     * @example `success`
     */
    Code: string;
    /**
     * 数据信息。
     */
    Data: {
        /**
         * 任务状态。
         * @example `Failed`
         */
        Status: string;
        /**
         * 异步任务需处理总量，如服务端打包下载需打包的文件量。
         * @example `1000`
         */
        TotalProcess: number;
        /**
         * 异步任务生成数据的下载地址，如服务端打包下载任务生成下载地址。
         * @example `https://data.aliyunpds.com/hz22%2F5d5b986facbec311ef844c25954f96821497b383%2F5d5b986f955410dd991646bb87c6b4e899eff525?Expires=xxx&OSSAccessKeyId=xxx&Signature=xxx`
         */
        Url: string;
        /**
         * 异步任务错误码。
         * @example `InternalError`
         */
        ErrCode: number;
        /**
         * 异步任务ID。
         * @example `000e89fb-cf8f-11e9-8ab4-b6e98080****`
         */
        AsyncTaskId: string;
        /**
         * 异步任务的错误信息。
         * @example `The request failed due to some unknown errors. Please try again later.`
         */
        Message: string;
        /**
         * 异步任务已处理总量，如服务端打包下载已打包的文件量。
         * @example `100`
         */
        ConsumedProcess: string;
    };
}
