export interface QueryContactInfoResponse {
    /**
     * 省份（中文）。
     * @example `浙江`
     */
    ZhProvince: string;
    /**
     * 电子邮箱。
     * @example `username@example.com`
     */
    Email: string;
    /**
     * 电话号码。
     * @example `1820000****`
     */
    Telephone: string;
    /**
     * 唯一请求识别码。
     * @example `C39ECA8A-BB5E-4F92-B013-6A032FA06B04`
     */
    RequestId: string;
    /**
     * 通讯地址（英文）。
     * @example `xi hu qu *** jiedao *** xiaoqu *** zhuang 101`
     */
    Address: string;
    /**
     * 邮政编码。
     * @example `310024`
     */
    PostalCode: string;
    /**
     * 联系人名称（中文）。
     * @example `张三`
     */
    ZhRegistrantName: string;
    /**
     * 城市（英文）。
     * @example `hang zhou shi`
     */
    City: string;
    /**
     * 域名注册日期。
     * @example `2019-03-20 11:37:29`
     */
    CreateDate: string;
    /**
     * 省份（英文）。
     * @example `zhe jiang`
     */
    Province: string;
    /**
     * 城市（中文）。
     * @example `杭州市`
     */
    ZhCity: string;
    /**
     * 联系人名称（英文）。
     * @example `zhang san`
     */
    RegistrantName: string;
    /**
     * 域名持有者名称（中文）。
     * @example `张三`
     */
    ZhRegistrantOrganization: string;
    /**
     * 国家代码。例如，**CN**代表中国，**US**代表美国。
     * @example `CN`
     */
    Country: string;
    /**
     * 域名持有者名称（英文）。
     * @example `zhang san`
     */
    RegistrantOrganization: string;
    /**
     * 分机号码。
     * @example `1234`
     */
    TelExt: string;
    /**
     * 电话国家代码。例如，中国的电话国家代码为**86**。
     * @example `86`
     */
    TelArea: string;
    /**
     * 通讯地址（中文）。
     * @example `西湖区***街道***小区***幢101`
     */
    ZhAddress: string;
}
