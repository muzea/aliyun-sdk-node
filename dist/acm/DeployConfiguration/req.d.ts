export interface DeployConfigurationRequest {
    /**
     * 配置ID
     * @example `com.aliyun.acm.example`
     */
    "DataId": string;
    /**
     * 配置归属的应用名称
     * @example `app`
     */
    "AppName"?: string;
    /**
     * 分组
     * @example `DEFAULT_GROUP`
     */
    "Group": string;
    /**
     * 配置描述
     * @example `测试配置`
     */
    "Desc"?: string;
    /**
     * 配置的标签，如存在多个标签，以半角逗号分隔
     * @example `tag1,tag2`
     */
    "Tags"?: string;
    /**
     * 配置内容
     * @example `Hello World`
     */
    "Content": string;
    /**
     * 配置内容的格式，可选值如下：
     * - text
     * - json
     * - xml
     * - yaml
     * - text/html
     * - properties
     * @example `text`
     */
    "Type"?: string;
    /**
     * 命名空间ID
     * @example `111000d2-ca66-42ba-b706-****`
     */
    "NamespaceId": string;
    /**
     * Beta发布的IP列表。
     * @example `127.0.0.1`
     */
    "BetaIps"?: string;
}
