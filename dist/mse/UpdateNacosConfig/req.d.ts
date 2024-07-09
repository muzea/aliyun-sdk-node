export interface UpdateNacosConfigRequest {
    /**
     * 实例ID。
     * @example `mse-cn-7pp2a****`
     */
    "InstanceId": string;
    /**
     * 配置ID。
     * @example `ky-check-****.yml`
     */
    "DataId": string;
    /**
     * 分组。
     * @example `resource`
     */
    "Group": string;
    /**
     * 应用名称。
     * @example `postoffice`
     */
    "AppName"?: string;
    /**
     * Tag列表。
     * @example `2021-10-20`
     */
    "Tags"?: string;
    /**
     * 配置的描述信息。
     * @example `基础配置`
     */
    "Desc"?: string;
    /**
     * 配置格式，包括text、json、xml、html等。
     * @example `text`
     */
    "Type"?: string;
    /**
     * 配置内容。
     * @example `attribute1=1221111\r\nattribute2=中文\r\nattribute3=abc11\r\nattribute4=1.00111`
     */
    "Content"?: string;
    /**
     * 命名空间ID。
     * @example `78b7af66-d15f-4541-b886-11ed81ecb6c0`
     */
    "NamespaceId"?: string;
    /**
     * md5信息。
     * @example `045439703a273a94306422b****`
     */
    "Md5"?: string;
    /**
     * Beta发布的IP列表。
     * @example `196.168.XX.XX`
     */
    "BetaIps"?: string;
    /**
     * 加密密钥。
     * @example `122wdwe****`
     */
    "EncryptedDataKey"?: string;
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
