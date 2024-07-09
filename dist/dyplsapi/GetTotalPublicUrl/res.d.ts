export interface GetTotalPublicUrlResponse {
    /**
     * 请求状态码。
     * - 返回OK代表请求成功。
     * - 其他错误码详见[错误码列表](~~109196~~)。
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
     * @example `1AB3CEF7-DCBE-488C-9C33-D180982CE031`
     */
    RequestId: string;
    /**
     * 录音文件下载地址。
     */
    Data: {
        /**
         * 响铃放音的录音下载URL。
         * > URL的有效期为30天。
         * @example `http://secret-ab-reco****cn-shanghai.aliyuncs.com/10000008********_66647243838006067***************.mp3?Expires=1551******&OSSAccessKeyId=LTAIP00vvv******&Signature=tK6Yq9KusU4n***************EA%3D`
         */
        RingPublicUrl: string;
        /**
         * 通话录音的下载URL。
         * > URL的有效期为30天。
         * @example `http://secret-ab-reco****cn-shanghai.aliyuncs.com/10000008********_66647243838006067***************.mp3?Expires=1551******&OSSAccessKeyId=LTAIP00vvv******&Signature=tK6Yq9KusU4n***************EA%3D`
         */
        PhonePublicUrl: string;
    };
}
