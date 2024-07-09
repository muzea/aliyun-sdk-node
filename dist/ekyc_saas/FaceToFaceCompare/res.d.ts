export interface FaceToFaceCompareResponse {
    /**
     * 请求ID。
     * @example `4D93120B-9A81-11F5-8307-B746390C644D`
     */
    RequestId: string;
    /**
     * 返回结果数据。
     */
    Data: {
        /**
         * 人脸匹配结果。
         * @example `pass`
         */
        Match: string;
        /**
         * 人脸相似度得分，范围：[0.0, 100.0]，越高表示越相似。
         * @example `60.8`
         */
        Score: number;
    };
    /**
     * 错误信息描述。
     * @example `null`
     */
    Message: string;
    /**
     * 错误码，服务执行成功时返回“0”。
     * @example `0`
     */
    Code: string;
    /**
     * 服务执行状态。
     * @example `SUCCESS`
     */
    Status: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpCode: number;
    /**
     * 是否成功。
     * @example `true`
     */
    Ok: boolean;
}
