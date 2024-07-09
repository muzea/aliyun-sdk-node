export interface DebugServiceRequest {
    /**
     * 服务ID。
     * @example `21`
     */
    "Id": number;
    /**
     * 入参数据。
     * @example `{"requestId":"5D772EB9","imageUrl":"https://dha-regen-prod.oss-cn-shanghai-internal.aliyuncs.com/daily/service/21/1634091028077_alpha_7101_0.png?Expires=1634091088&amp;OSSAccessKeyId=LTAI5tEQPn4obqpuvGEg****&amp;Signature=E9%2FtRKgNOV6O%2Bb3GtoFqhLe9VuU%3D"}`
     */
    "Param"?: string;
}
