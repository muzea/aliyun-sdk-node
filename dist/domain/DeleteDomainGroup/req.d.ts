export interface DeleteDomainGroupRequest {
    /**
     * 用户IP，可设置为**127.0.0.1**。
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
     * 域名分组编号，可通过[QueryDomainGroupList](~~69362~~)接口获取。
     * @example `123456`
     */
    "DomainGroupId": number;
}
