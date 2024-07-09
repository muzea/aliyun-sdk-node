export interface SetDefaultRegistrantProfileRequest {
    /**
     * 用户IP，默认设置为**127.0.0.1**。
     * @example `127.0.0.1`
     */
    "UserClientIp"?: string;
    /**
     * 待设置的信息模板的编号。
     * 信息模板创建成功后由系统自动生成，您可以调用[QueryRegistrantProfiles](~~67701~~)接口查询信息模板编号。
     * @example `1234567`
     */
    "RegistrantProfileId": number;
}
