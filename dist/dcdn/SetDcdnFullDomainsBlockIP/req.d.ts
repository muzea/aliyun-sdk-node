export interface SetDcdnFullDomainsBlockIPRequest {
    /**
     * 封禁或解禁IP列表，有多个IP时请用半角逗号（,）分隔，最大支持1000个IP。
     * @example `1.XXX.XXX.1,2.XXX.XXX.2`
     */
    "IPList": string;
    /**
     * 操作动作。取值：
     * - **block**：封禁。
     * - **unblock**：解禁。
     * @example `block`
     */
    "OperationType": string;
    /**
     * 封禁时长，单位为秒。设置为**0**时表示永久封禁。仅当**OperationType**为**block**时有效。
     * @example `3000`
     */
    "BlockInterval"?: number;
    /**
     * 封禁时间类别。仅当**OperationType**为**block**时有效。取值：
     * - **cover**：当前请求是采取配置覆盖方式。
     * - **uncover**：采取时间计算比对最长方式。
     * - 该参数为空时默认采取配置覆盖方式。
     * @example `cover`
     */
    "UpdateType"?: string;
}
