export interface SetImageSensitiveFileStatusResponse {
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 数据库主键ID。
         * @example `18551`
         */
        Id: number;
    };
    /**
     * 是否调用成功。取值：
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * HTTP状态码。
     * @example `200`
     */
    Code: string;
    /**
     * 接口请求返回的信息。
     * @example `successful`
     */
    Message: string;
    /**
     * 唯一请求ID。
     * @example `20456DD5-5CBF-5015-9173-12CA4246****`
     */
    RequestId: string;
}
