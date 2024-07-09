export interface QueryCallInTransferRecordResponse {
    /**
     * 请求状态码。
     * - 返回OK代表请求成功。
     * - 其他错误码，请参见[错误码列表](~~112502~~)。
     * @example `OK`
     */
    Code: string;
    /**
     * 状态码的描述。
     * @example `OK`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `7BF47617-7851-48F7-A3A1-2021342A78E2`
     */
    RequestId: string;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 页码。
         * @example `1`
         */
        PageNo: number;
        /**
         * 页数。
         * @example `20`
         */
        PageSize: number;
        /**
         * 总条数。
         * @example `50`
         */
        Total: number;
        /**
         * 呼转记录。
         */
        Values: {
            /**
             * 呼入被叫。
             * @example `150****0000`
             */
            CallInCalled: string;
            /**
             * 呼转被叫。
             * @example `151****0000`
             */
            TransferCalled: string;
            /**
             * 录音地址。
             * @example `http://alicom-fc-media.cn-hangzhou.oss.aliyun-inc.com/dayuBizVoiceMrg/4238c230-9e74-41be-90b8-2fbe7684****.wav?Expires=1627538265&OSSAccessKeyId=bypFNbGJVk73****&Signature=****mUqkPqIQ%3D`
             */
            RecordUrl: string;
            /**
             * 呼转主叫。
             * @example `151****0000`
             */
            TransferCaller: string;
            /**
             * 呼叫时间。
             * @example `2020-10-03 10:21:21`
             */
            GmtCreate: number;
            /**
             * 呼入主叫。
             * @example `150****0000`
             */
            CallInCaller: string;
        }[];
    };
}
