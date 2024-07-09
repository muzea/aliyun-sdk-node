export interface SaveRegistrantProfileRealNameVerificationRequest {
    /**
     * 国家代码，例如**CN**。
     * > 当未传入**RegistrantProfileId**参数时，本参数才可用且必须传入，如果不传入会导致域名注册失败。
     * @example `CN`
     */
    "Country"?: string;
    /**
     * 用户IP，可设置为**127.0.0.1**。
     * @example `127.0.0.1`
     */
    "UserClientIp"?: string;
    /**
     * 接口返回错误信息语言。取值：
     * - **zh**：中文
     * - **en**：英文
     * 默认为**en**。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 待保存的信息模板的编号。
     * 信息模板创建成功后由系统自动生成，您可以调用[QueryRegistrantProfiles](https://help.aliyun.com/document_detail/67701.html)接口查询信息模板编号。
     * @example `1234567`
     */
    "RegistrantProfileId"?: number;
    /**
     * 城市（英文）。
     * > 当未传入**RegistrantProfileId**参数时，本参数才可用且必须传入，如果不传入会导致域名注册失败。
     * @example `bei jing shi`
     */
    "City"?: string;
    /**
     * 域名持有者名称（英文）。
     * > 当未传入**RegistrantProfileId**参数时，本参数才可用且必须传入，如果不传入会导致域名注册失败。
     * @example `ce shi`
     */
    "RegistrantOrganization"?: string;
    /**
     * 域名联系人（英文）。
     * > 当未传入**RegistrantProfileId**参数时，本参数才可用且必须传入，如果不传入会导致域名注册失败。
     * @example `ce shi`
     */
    "RegistrantName"?: string;
    /**
     * 省份（英文）。
     * > 当未传入**RegistrantProfileId**参数时，本参数才可用且必须传入，如果不传入会导致域名注册失败。
     * @example `bei jing`
     */
    "Province"?: string;
    /**
     * 详细地址（英文）。
     * > 当未传入**RegistrantProfileId**参数时，本参数才可用且必须传入，如果不传入会导致域名注册失败。
     * @example `chao yang qu`
     */
    "Address"?: string;
    /**
     * 电子邮箱。
     * > 当未传入**RegistrantProfileId**参数时，本参数才可用且必须传入，如果不传入会导致域名注册失败。
     * @example `username@example.com`
     */
    "Email"?: string;
    /**
     * 邮政编码。
     * > 当未传入**RegistrantProfileId**参数时，本参数才可用且必须传入，如果不传入会导致域名注册失败。
     * @example `1234567`
     */
    "PostalCode"?: string;
    /**
     * 电话国家代码。
     * >例如，中国的电话国家代码为**86**。
     * @example `86`
     */
    "TelArea"?: string;
    /**
     * 电话号码。
     * > 当未传入**RegistrantProfileId**参数时，本参数才可用且必须传入，如果不传入会导致域名注册失败。
     * @example `12345678`
     */
    "Telephone"?: string;
    /**
     * 分机号码。
     * > 当未传入**RegistrantProfileId**参数时，本参数才可用且必须传入，如果不传入会导致域名注册失败。
     * @example `1234`
     */
    "TelExt"?: string;
    /**
     * 域名持有者名称（中文）。
     * > 该参数仅适用于中国站。当未传入**RegistrantProfileId**参数时，本参数才可用且必须传入，如果不传入会导致域名注册失败。
     * @example `测试`
     */
    "ZhRegistrantOrganization"?: string;
    /**
     * 域名联系人（中文）。
     * > 该参数仅适用于中国站。当未传入**RegistrantProfileId**参数时，本参数才可用且必须传入，如果不传入会导致域名注册失败。
     * @example `测试`
     */
    "ZhRegistrantName"?: string;
    /**
     * 省份（中文）。
     * > 该参数仅适用于中国站。当未传入**RegistrantProfileId**参数时，本参数才可用且必须传入，如果不传入会导致域名注册失败。
     * @example `北京`
     */
    "ZhProvince"?: string;
    /**
     * 详细地址（中文）。
     * > 该参数仅适用于中国站。当未传入**RegistrantProfileId**参数时，本参数才可用且必须传入，如果不传入会导致域名注册失败。
     * @example `朝阳区`
     */
    "ZhAddress"?: string;
    /**
     * 城市（中文）。
     * > 该参数仅适用于中国站。当未传入**RegistrantProfileId**参数时，本参数才可用且必须传入，如果不传入会导致域名注册失败。
     * @example `北京市`
     */
    "ZhCity"?: string;
    /**
     * 域名持有者类型。取值：
     * - **1**：个人。
     * - **2**：企业、组织等。
     * > 当未传入**RegistrantProfileId**参数时，本参数才可用且必须传入，如果不传入会导致域名注册失败。
     * @example `1`
     */
    "RegistrantType"?: string;
    /**
     * 信息模板类型。取值：
     * - **common**：通用模板。
     * - **cnnic**：cnnic模板。
     * > cnnic模板仅国际站支持，在阿里云国际站注册的“.cn”、“.中国”等CNNIC注册局下的域名需使用cnnic模板，其他域名使用通用模板。
     * @example `common`
     */
    "RegistrantProfileType"?: string;
    /**
     * 采用Base64编码的实名认证资料图片。图片要求如下：
     * - 图片为**jpg**或**bmp**格式。
     * - 原图片大小为**55K~1M**。
     * @example `dGVzdA==`
     */
    "IdentityCredential"?: string;
    /**
     * 实名认证证件号码。
     * @example `4111111111111110**`
     */
    "IdentityCredentialNo"?: string;
    /**
     * 实名认证证件类型。取值：
     * - **SFZ**：身份证。
     * - **HZ**：护照。
     * - **YYZZ**：营业执照。
     * - **ORG**：组织机构代码证。
     * - **XYDM**：统一社会信用代码证书。
     * - **TXZ**：港澳居民来往内地通行证。
     * > 更多证件类型的取值请参见[支持实名认证的证件类型](https://help.aliyun.com/document_detail/72209.html)。
     * @example `SFZ`
     */
    "IdentityCredentialType"?: string;
}
