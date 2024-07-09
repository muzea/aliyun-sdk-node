export interface DeleteRegistrantProfileRequest {
    /**
     * 用户IP，可设置为127.0.0.1。
     * @example `127.0.0.1`
     */
    "UserClientIp"?: string;
    /**
     * 接口返回错误信息语言。取值：
     * - **zh**：中文。
     * - **en**：英文。
     * 默认为**en**。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 待删除的信息模板的编号。您可以调用[QueryRegistrantProfiles](~~67701~~)接口查询信息模板编号。
     * @example `3600000`
     */
    "RegistrantProfileId": number;
}
