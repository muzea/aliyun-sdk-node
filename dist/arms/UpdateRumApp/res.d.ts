export interface UpdateRumAppResponse {
    /**
     * Id of the request
     * @example `E9C9DA3D-10FE-472E-9EEF-2D0A3E41****`
     */
    RequestId: string;
    /**
     * 状态码。200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 更新是否成功。
     * - `true`：成功。
     * - `false`：失败。
     * @example `true`
     */
    Success: string;
    /**
     * 调用失败时返回的信息。
     * @example `message`
     */
    Message: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: string;
    /**
     * 返回结果详情。
     */
    Data: {
        /**
         * 用户配置，保留字段。
         * @example `用户配置，保留字段。`
         */
        Config: string;
        /**
         * 用量，单位字节数。
         * @example `10000`
         */
        Usage: number;
        /**
         * 限额，单位字节数。
         * @example `100000`
         */
        Limit: number;
        /**
         * 是否被限额，true：是，false：否。
         * @example `true`
         */
        Limited: boolean;
    };
}
