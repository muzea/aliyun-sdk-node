export interface SaveSingleTaskForUpdatingContactInfoRequest {
    /**
     * 用户IP。
     * @example `127.0.0.1`
     */
    "UserClientIp"?: string;
    /**
     * 接口返回错误信息语言。取值：
     * - **zh**：中文；
     * - **en**：英文。
     * 默认为**en**。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 域名。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 域名实例编号。
     * @example `S123456789`
     */
    "InstanceId"?: string;
    /**
     * 信息模板编号。
     * @example `1`
     */
    "RegistrantProfileId": number;
    /**
     * 联系人类型。取值：
     * - **registrant**；
     * - **admin**；
     * - **billing**；
     * - **tech**。
     *
     * @example `registrant`
     */
    "ContactType": string;
    /**
     * 是否添加禁止转出限制，此参数只对 **ContactType**=**registrant** 情况下起作用，表示持有者修改后是否限制域名60天转出。默认为**false**，不限制转出。
     *
     * @example `false`
     */
    "AddTransferLock"?: boolean;
}
