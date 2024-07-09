export interface SaveTaskForUpdatingRegistrantInfoByRegistrantProfileIDRequest {
    /**
     * 用户IP，可以设置为**127.0.0.1**。
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
     * 信息模板编号。您可以通过[QueryRegistrantProfiles](https://help.aliyun.com/document_detail/67701.htm?spm=a2c4g.11186623.0.0.33f420daTwRQaO)接口查询信息模板编号。
     * @example `1`
     */
    "RegistrantProfileId": number;
    /**
     * 是否添加禁止转出限制，表示所有者修改后是否限制域名60天转出。取值：
     * - **false**：不添加。
     * - **true**：添加。
     * 默认值为**false**。
     * @example `false`
     */
    "TransferOutProhibited": boolean;
    /**
     * 域名列表，多个域名时使用**list**方式传递。域名列表可通过[QueryDomainList](https://help.aliyun.com/document_detail/69362.htm?spm=a2c4g.11186623.0.0.33f4253cSJy3m8)接口获取。
     * @example `example.com`
     */
    "DomainName": string[];
}
