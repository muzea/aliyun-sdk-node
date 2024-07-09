export interface GetRecordUrlResponse {
    /**
     * 请求ID。
     * @example `EE338D98-9BD3-4413-B165`
     */
    RequestId: string;
    /**
     * 调用接口是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 状态码描述。
     * @example `OK`
     */
    Message: string;
    /**
     * 数据列表。
     */
    Data: {
        /**
         * 会话ID。
         * @example `1001067****`
         */
        Acid: string;
        /**
         * 录音链接。
         * @example `http://aliccrec-shvpc.oss-cn-shanghai.aliyuncs.com/accrec_tmp/10010679716-12-01-56.wav?***`
         */
        OssLink: string;
    };
}
