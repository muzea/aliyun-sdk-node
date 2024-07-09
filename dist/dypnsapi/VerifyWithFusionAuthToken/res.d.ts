export interface VerifyWithFusionAuthTokenResponse {
    /**
     * 状态码的描述。
     * @example `示例值`
     */
    Message: string;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `CC3BB6D2-2FDF-4321-9DCE-B38165CE4C47
    `
     */
    RequestId: string;
    /**
     * 请求结果数据
     */
    Model: {
        /**
         * 手机号，认证成功时返回该字段。
         * @example `180********`
         */
        PhoneNumber: string;
        /**
         * 认证结果，认证成功：PASS，认证失败：UNKNOWN
         * @example `PASS`
         */
        VerifyResult: string;
        /**
         * 手机号评分，只有开启手机号评分节点，并且认证通过后才会给出，取值范围[0，100]，分越大，风险系数越高。
         * @example `20`
         */
        PhoneScore: number;
    };
    /**
     * 请求状态码。返回OK代表请求成功。其他错误码，请参见错误码列表。
     * @example `OK`
     */
    Code: string;
    /**
     * 调用API是否成功。取值说明如下：true：成功。false：失败。
     * @example `true`
     */
    Success: boolean;
}
