export interface GetRecordDataResponse {
    /**
     * 状态码描述。
     * @example `OK`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `EE338D98-9BD3-4413-B165`
     */
    RequestId: string;
    /**
     * 数据列表。
     */
    Data: {
        /**
         * 录音文件地址。
         * @example `http://aliccrec-shvpc.oss-cn-shanghai.aliyuncs.com/accrec_tmp/10010679716-12-01-56.wav?***`
         */
        OssLink: string;
        /**
         * 会话ID。
         * @example `1001067****`
         */
        Acid: string;
    };
    /**
     * 状态码。返回200表示请求成功。
     * @example `200`
     */
    Code: string;
    /**
     * 调用接口是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
}
