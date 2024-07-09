export interface QueryRegistrantProfileRealNameVerificationInfoRequest {
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
     * 待查询的信息模板的编号。
     * 信息模板创建成功后由系统自动生成，您可以调用[QueryRegistrantProfiles](~~67701~~)接口查询信息模板编号。
     * @example `1234567`
     */
    "RegistrantProfileId": number;
    /**
     * 是否获取实名认证图片信息。取值：
     * - **true**：获取。
     * - **false**：不获取。
     * 默认值为**false**。
     * @example `false`
     */
    "FetchImage"?: boolean;
}
