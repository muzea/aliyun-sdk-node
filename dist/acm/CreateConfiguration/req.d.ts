export interface CreateConfigurationRequest {
    /**
     * 配置的ID。允许字符为大小写字母、数字、小数点（.）、冒号（:）、星号（*）、下划线（_）和中划线（-）。当ID前缀为如下值时，ACM会自动使用KMS服务对此配置进行加密存储：
     * - 前缀为`cipher-`：调用 KMS 服务对配置进行加解密，加解密数据的大小不超过 4 KB，最大不超过 6 KB，对特殊符号如and（&amp;）会解密错误，不推荐使用。
     * - 前缀为`cipher-kms-aes-128-`：使用 KMS 的信封加解密方法，配置内容可以超过 6 KB，最大不超过 100 KB。配置内容的明文数据不会传输到 KMS 系统，安全性更高，推荐使用。
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
     * 配置的描述说明
     * @example `测试配置`
     */
    "Desc"?: string;
    /**
     * 配置的标签，如存在多个标签，以半角逗号分隔
     * @example `tag1,tag2`
     */
    "Tags"?: string;
    /**
     * 配置的内容
     * @example `key=Hello;value=World`
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
    "Type": string;
    /**
     * 命名空间ID
     * @example `01146121-decf-4b47-****`
     */
    "NamespaceId": string;
}
