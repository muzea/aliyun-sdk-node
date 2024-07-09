export interface SaveBatchTaskForUpdatingContactInfoByNewContactRequest {
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
     * 国家代码，如**CN**，**US**。
     * @example `CN`
     */
    "Country"?: string;
    /**
     * 邮箱。
     * @example `test@aliyun.com`
     */
    "Email"?: string;
    /**
     * 邮政编码。
     * @example `123456`
     */
    "PostalCode"?: string;
    /**
     * 电话国家代码。
     * @example `86`
     */
    "TelArea"?: string;
    /**
     * 电话号码。
     * @example `1234567890`
     */
    "Telephone"?: string;
    /**
     * 分机号码。
     * @example `1235`
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
     * 联系人类型。取值：
     * - **registrant**：域名持有者。
     * - **admin**：管理者。
     * - **billing**：付费者。
     * - **tech**：技术者。
     * @example `registrant`
     */
    "ContactType": string;
    /**
     * 域名类型。取值：
     * - **1**：个人。
     * - **2**：企业。
     *
     * @example `1`
     */
    "RegistrantType": string;
    /**
     * 是否添加禁止转出限制，此参数只对**ContactType**=**registrant**情况下起作用，表示持有者修改后是否限制域名60天转出。默认为**false**，不限制转出。
     *
     * @example `false`
     */
    "TransferOutProhibited"?: boolean;
    /**
     * 域名列表。
     * @example `alibabacloud.com`
     */
    "DomainName": string[];
}
