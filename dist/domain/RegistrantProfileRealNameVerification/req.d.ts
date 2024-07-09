export interface RegistrantProfileRealNameVerificationRequest {
    /**
     * 用户IP，可设置为127.0.0.1。
     * @example `127.0.0.1`
     */
    "UserClientIp"?: string;
    /**
     * 接口返回错误信息语言。取值：
     * - **zh**：中文。
     * - **en**：英文。
     * 默认值为**en**。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 待实名认证的信息模板的编号。信息模板创建成功后由系统自动生成，您可以调用[QueryRegistrantProfiles](~~67701~~)接口查询信息模板编号。
     * @example `1234567`
     */
    "RegistrantProfileID": number;
    /**
     * 上传采用Base64编码的实名认证资料图片。图片要求如下：
     * - 图片格式为**JPG**或**BMP**。
     * - 原图片大小为**55KB~1MB**。
     * @example `dGVzdA==`
     */
    "IdentityCredential": string;
    /**
     * 填写实名认证证件号码。
     * 例如身份证号码、营业执照号码等，证件号码需要与实名认证证件上的号码完全一致。企业类的证件需填写证件上的**18位**统一社会信用代码。
     * @example `43012512345678****`
     */
    "IdentityCredentialNo": string;
    /**
     * 实名认证证件类型，选择您用于实名认证的证件类型。取值：
     * - **SFZ**：身份证。
     * - **HZ**：护照。
     * - **YYZZ**：营业执照。
     * - **ORG**：组织机构代码证。
     * - **XYDM**：统一社会信用代码证书。
     * - **TXZ**：港澳居民来往内地通行证。
     * > 更多证件类型的取值请参见[支持实名认证的证件类型](~~72209~~)。
     * @example `SFZ`
     */
    "IdentityCredentialType": string;
}
