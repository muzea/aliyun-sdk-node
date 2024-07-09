export interface DescribeCharacterSetResponse {
    /**
     * 返回信息，正确返回success，错误返回错误码。
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `709C1E40-092D-4A3D-9958-6D7438******`
     */
    RequestId: string;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 数据结构体。
     */
    Data: {
        /**
         * 目标实例下数据库的存储类型，目前仅支持polarx。
         * @example `polarx`
         */
        Engine: string;
        /**
         * 实例支持的字符编码集，取值范围如下：
         * - utf8mb4
         * - gbk
         * - latin1
         * - utf8
         */
        CharacterSet: string[];
    };
}
