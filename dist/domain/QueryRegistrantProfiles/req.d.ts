export interface QueryRegistrantProfilesRequest {
    /**
     * 接口返回错误信息语言。取值：
     * - **zh**：中文。
     * - **en**：英文。
     * 默认为**en**。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 域名持有者名称（英文）。
     * @example `li si`
     */
    "RegistrantOrganization"?: string;
    /**
     * 用户IP，可设置为127.0.0.1。
     * @example `127.0.0.1`
     */
    "UserClientIp"?: string;
    /**
     * 待查询的信息模板的编号，信息模板创建成功后由系统自动生成。
     * @example `1234567`
     */
    "RegistrantProfileId"?: number;
    /**
     * 是否为默认模板。取值：
     * - **true**：默认模板。
     * - **false**：非默认模板。
     * 默认值为**false**。
     * @example `false`
     */
    "DefaultRegistrantProfile"?: boolean;
    /**
     * 分页的页码，默认值为**0**。
     * @example `1`
     */
    "PageNum"?: number;
    /**
     * 每页记录数。默认值为**0**，最大值为**5000**。
     * @example `500`
     */
    "PageSize"?: number;
    /**
     * 域名持有者名称（中文）。
     * @example `李四`
     */
    "ZhRegistrantOrganization"?: string;
    /**
     * 域名持有者类型。取值：
     * - **1**：个人。
     * - **2**：企业。
     * 默认值为**1**。
     *
     * @example `1`
     */
    "RegistrantType"?: string;
    /**
     * 实名认证状态。取值：
     * - **FAILED**：实名认证失败。
     * - **SUCCEED**：实名认证成功。
     * - **NONAUDIT**：未实名认证。
     * - **AUDITING**：审核中。
     *
     * @example `SUCCEED`
     */
    "RealNameStatus"?: string;
    /**
     * 电子邮箱。
     * @example `username@example.com`
     */
    "Email"?: string;
    /**
     * 信息模板类型。取值：
     * - **common**：通用模板。
     * - **cnnic**：cnnic模板。
     * > cnnic模板仅国际站支持，在阿里云国际站注册的“.cn”、“.中国”等CNNIC注册局下的域名需使用cnnic模板，其他域名使用通用模板。
     * @example `common`
     */
    "RegistrantProfileType"?: string;
}
