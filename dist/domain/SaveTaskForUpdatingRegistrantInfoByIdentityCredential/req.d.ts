export interface SaveTaskForUpdatingRegistrantInfoByIdentityCredentialRequest {
    /**
     * 邮政编码。
     * @example `123456`
     */
    "PostalCode"?: string;
    /**
     * 具体的地址。
     * @example `chao yang qu`
     */
    "Address"?: string;
    /**
     * 用户IP。
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
     * 城市。
     * @example `bei jing shi`
     */
    "City"?: string;
    /**
     * 持有者名称。
     * @example `ce shi`
     */
    "RegistrantOrganization"?: string;
    /**
     * 联系人名称。
     * @example `ce shi`
     */
    "RegistrantName"?: string;
    /**
     * 省份。
     * @example `bei jing`
     */
    "Province"?: string;
    /**
     * 邮箱。
     * @example `test@aliyun.com`
     */
    "Email"?: string;
    /**
     * 国家代码，如**CN**、**US**。
     * @example `CN`
     */
    "Country"?: string;
    /**
     * 电话国家代码。
     * @example `86`
     */
    "TelArea": string;
    /**
     * 电话号码。
     * @example `12345678`
     */
    "Telephone": string;
    /**
     * 分机号码。
     * @example `12345`
     */
    "TelExt"?: string;
    /**
     * 中文城市。
     * @example `北京市`
     */
    "ZhCity"?: string;
    /**
     * 中文持有者名称。
     * @example `测试`
     */
    "ZhRegistrantOrganization"?: string;
    /**
     * 中文联系人名称。
     * @example `测试`
     */
    "ZhRegistrantName"?: string;
    /**
     * 中文省份。
     * @example `北京`
     */
    "ZhProvince"?: string;
    /**
     * 中文地址。
     * @example `朝阳区`
     */
    "ZhAddress"?: string;
    /**
     * 域名类型。取值：
     * - **1**：个人。
     * - **2**：企业。
     * @example `1`
     */
    "RegistrantType": string;
    /**
     * 实名认证证件类型。取值：
     * - **SFZ**：身份证。
     * - **HZ**：护照。
     * - **YYZZ**：营业执照。
     * - **ORG**：组织机构代码证。
     * - **XYDM**：统一社会信用代码证书。
     * - **TXZ**：港澳居民来往内地通行证。
     * 如果您使用的证件不在上述范围中，请参见[支持实名认证的证件类型](~~72209~~)，查看相应证件类型的取值。
     * > 请务必选择与您传入的证件一致的证件类型。
     * @example `SFZ`
     */
    "IdentityCredentialType": string;
    /**
     * 实名认证资料证件号码，如：身份证号码、统一社会信用代码。
     * @example `5****************9`
     */
    "IdentityCredentialNo": string;
    /**
     * 使用Base64编码的实名认证资料图片。图片要求如下：
     * - 图片为**jpg**或**bmp**格式。
     * - 原图片大小为**55K~1M**。
     * @example `h6UPhXz/ADP/2Q==`
     */
    "IdentityCredential": string;
    /**
     * 是否添加禁止转出限制，表示持有者修改后是否限制域名60天转出。默认为**false**，不限制转出。
     *
     * @example `false`
     */
    "TransferOutProhibited": boolean;
    /**
     * 域名列表。
     * @example `alibabacloud.com`
     */
    "DomainName": string[];
}
