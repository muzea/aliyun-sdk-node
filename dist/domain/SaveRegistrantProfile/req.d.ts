export interface SaveRegistrantProfileRequest {
    /**
     * 是否设置为默认模板。取值：
     * - **true**：默认模板。
     * - **false**：非默认模板。
     * 默认值为**false**。
     * @example `false`
     */
    "DefaultRegistrantProfile"?: boolean;
    /**
     * 国家代码，例如**CN**代表中国，**US**代表美国。
     * @example `CN`
     */
    "Country"?: string;
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
     * 信息模板编号，信息模板创建成功后由系统自动生成。
     * > 更新信息模板时必须传入该参数。信息模板创建成功后您可以调用[QueryRegistrantProfiles](~~QueryRegistrantProfiles~~)接口查询信息模板编号。
     * @example `3600000`
     */
    "RegistrantProfileId"?: number;
    /**
     * 城市（英文），填写域名持有者所在城市名称。
     * > 填写城市名称，需包括“市”，例如，持有者在杭州市，则本参数需填写为“hang zhou shi”。
     * @example `hang zhou shi`
     */
    "City"?: string;
    /**
     * 域名持有者名称（英文）。
     * @example `li si`
     */
    "RegistrantOrganization"?: string;
    /**
     * 联系人名称（英文）。
     * @example `li si`
     */
    "RegistrantName"?: string;
    /**
     * 省份（英文），填写域名持有者所在省份名称。
     * > 填写省份名称，无需填写“省”，例如，持有者在浙江省，则本参数填写“zhe jiang”即可。
     * @example `zhe jiang`
     */
    "Province"?: string;
    /**
     * 详细地址（英文）。
     * @example `zhe jiang sheng hang zhou shi shi li qu shi li zhen shi li da sha 1001 hao`
     */
    "Address"?: string;
    /**
     * 电子邮箱。
     * @example `username@example.com`
     */
    "Email"?: string;
    /**
     * 邮政编码。
     * @example `310024`
     */
    "PostalCode"?: string;
    /**
     * 电话国家代码，例如中国的电话国家代码为**86**。
     * @example `86`
     */
    "TelArea"?: string;
    /**
     * 电话号码。
     * @example `1829756****`
     */
    "Telephone"?: string;
    /**
     * 分机号码。
     * @example `1234`
     */
    "TelExt"?: string;
    /**
     * 域名持有者名称（中文）。
     * @example `李四`
     */
    "ZhRegistrantOrganization"?: string;
    /**
     * 联系人名称（中文）。
     * @example `李四`
     */
    "ZhRegistrantName"?: string;
    /**
     * 省份（中文），填写域名持有者所在省份名称。
     * > 填写省份名称，无需填写“省”，例如，持有者在浙江省，则本参数填写“浙江”即可。
     * @example `浙江`
     */
    "ZhProvince"?: string;
    /**
     * 详细地址（中文）。
     * @example `浙江省杭州市示例区示例镇示例大厦1001号`
     */
    "ZhAddress"?: string;
    /**
     * 城市（中文），填写域名持有者所在城市名称。
     * > 填写城市名称，需包括“市”，例如，持有者在杭州市，则本参数需填写为“杭州市”。
     * @example `杭州市`
     */
    "ZhCity"?: string;
    /**
     * 域名持有者类型。取值：
     * - **1**：个人。
     * - **2**：企业。
     * 默认值为**1**。
     * @example `1`
     */
    "RegistrantType"?: string;
    /**
     * 信息模板类型。取值：
     * - **common**：通用模板。
     * - **cnnic**：cnnic模板。
     * > cnnic模板仅国际站支持。在阿里云国际站注册的“.cn”、“.中国”等CNNIC注册局下的域名需使用cnnic模板，其他域名使用通用模板。
     * @example `common`
     */
    "RegistrantProfileType"?: string;
}
