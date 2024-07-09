export interface VerifyContactFieldRequest {
    /**
     * 省份（英文）。
     * @example `Bei jing`
     */
    "Province"?: string;
    /**
     * 用户IP，可设置为**127.0.0.1**。
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
     * 城市（英文）。
     * @example `Bei jing`
     */
    "City"?: string;
    /**
     * 域名持有者名称（英文）。
     * @example `wang xian sheng`
     */
    "RegistrantOrganization"?: string;
    /**
     * 国家代码，例如**CN**、**US**。
     * @example `CN`
     */
    "Country"?: string;
    /**
     * 联系人名称（英文）。
     * @example `wang xian sheng`
     */
    "RegistrantName"?: string;
    /**
     * 详细地址（英文）。
     * @example `Rd. xitucheng`
     */
    "Address"?: string;
    /**
     * 电子邮箱。
     * @example `username@example.com`
     */
    "Email"?: string;
    /**
     * 邮政编码。
     * @example `100000`
     */
    "PostalCode"?: string;
    /**
     * 电话国家代码，例如中国的电话国家代码为**86**。
     * @example `86`
     */
    "TelArea"?: string;
    /**
     * 电话。
     * @example `1390000****`
     */
    "Telephone"?: string;
    /**
     * 分机号码。
     * @example `01`
     */
    "TelExt"?: string;
    /**
     * 域名持有者名称（中文）。
     * > 该参数仅适用于中国站。
     * @example `王先生`
     */
    "ZhRegistrantOrganization"?: string;
    /**
     * 联系人名称（中文）。
     * > 该参数仅适用于中国站。
     * @example `王先生`
     */
    "ZhRegistrantName"?: string;
    /**
     * 省份（中文）。
     * > 该参数仅适用于中国站。
     * @example `北京`
     */
    "ZhProvince"?: string;
    /**
     * 详细地址（中文）。
     * > 该参数仅适用于中国站。
     * @example `西土城路`
     */
    "ZhAddress"?: string;
    /**
     * 城市（中文）。
     * > 该参数仅适用于中国站。
     * @example `北京市`
     */
    "ZhCity"?: string;
    /**
     * 域名持有者类型。取值：
     * - **1**：个人。
     * - **2**：企业。
     * @example `1`
     */
    "RegistrantType"?: string;
    /**
     * 域名。
     * @example `example.com`
     */
    "DomainName"?: string;
}
