export interface SaveBatchTaskForUpdatingContactInfoByRegistrantProfileIdRequest {
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
     * 信息模板编号。
     * 信息模板创建成功后由系统自动生成，您可以调用[QueryRegistrantProfiles](~~67701~~)接口查询信息模板编号。
     * @example `1`
     */
    "RegistrantProfileId": number;
    /**
     * 需要修改的联系人类型。取值：
     * - **registrant**：域名持有者。
     * - **admin**：管理者。
     * - **billing**：付费者。
     * - **tech**：技术者。
     *
     * @example `registrant`
     */
    "ContactType": string;
    /**
     * 是否添加禁止转出限制，此参数只在**ContactType**的参数值为**registrant**的情况下有效，表示持有者修改后是否限制域名60天转出。取值：
     * - **false**：不转出。
     * - **true**：转出。
     * 默认值为**false**。
     * @example `true`
     */
    "TransferOutProhibited"?: boolean;
    /**
     * 域名。如需传入多个域名，请使用**list**方式传入。
     * @example `example.com`
     */
    "DomainName": string[];
}
