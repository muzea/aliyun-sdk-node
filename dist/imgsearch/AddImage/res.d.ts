export interface AddImageResponse {
    /**
     * 请求ID。
     * @example `4DC6BB62-06D1-4242-939A-4AC500662E33`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 数据ID。
         * @example `1585903814940000`
         */
        DataId: string;
    };
}
