export interface ModifyWebLockCreateConfigRequest {
    /**
     * 访问源的IP地址。
     * @example `39.170.XX.XX`
     */
    "SourceIp"?: string;
    /**
     * 请求和接收消息的语言类型。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 指定需要添加防护目录的服务器的UUID。
     * > 您可以调用[DescribeCloudCenterInstances](~~DescribeCloudCenterInstances~~)接口获取服务器的UUID。
     * @example `inet-12345****`
     */
    "Uuid": string;
    /**
     * 指定防护目录。
     * @example `/home/admin/tomcat`
     */
    "Dir": string;
    /**
     * 指定无需网页防篡改防护的目录地址（即排除目录）。
     * > 防护模式**Mode**配置为**blacklist**时，您需要配置该参数。
     * @example `/home/admin/test`
     */
    "ExclusiveDir"?: string;
    /**
     * 指定无需网页防篡改防护的文件类型（即排除文件的类型）。存在多个文件类型时，使用分号（;）分隔。取值：
     * - php
     * - jsp
     * - asp
     * - aspx
     * - js
     * - cgi
     * - html
     * - htm
     * - xml
     * - shtml
     * - shtm
     * - jpg
     * - gif
     * - png
     * > 防护模式**Mode**配置为**blacklist**时，您需要配置该参数。
     * @example `jpg`
     */
    "ExclusiveFileType"?: string;
    /**
     * 本地备份路径，用于防护目录的安全备份。
     * @example `/usr/local/backup`
     */
    "LocalBackupDir": string;
    /**
     * 指定防护目录模式。取值：
     * - **whitelist**：白名单模式，对添加的防护目录和文件类型进行保护。
     * - **blacklist**：黑名单模式，对添加的防护目录下所有未排除的子目录、文件类型和指定文件进行保护。
     * @example `whitelist`
     */
    "Mode"?: string;
    /**
     * 指定需要网页防篡改防护的文件类型。存在多个文件类型时，使用分号（;）分隔。取值：
     * - php
     * - jsp
     * - asp
     * - aspx
     * - js
     * - cgi
     * - html
     * - htm
     * - xml
     * - shtml
     * - shtm
     * - jpg
     * - gif
     * - png
     * > 防护模式**Mode**配置为**whitelist**时，您需要配置该参数。
     * @example `jpg`
     */
    "InclusiveFileType"?: string;
    /**
     * 指定无需开启网页防篡改防护的文件（即排除文件）。
     * > 防护模式**Mode**配置为**blacklist**时，您需要配置该参数。
     * @example `/home/admin/apache.log`
     */
    "ExclusiveFile"?: string;
    /**
     * 指定需要防护的文件。
     * > 防护模式**Mode**配置为**whitelist**时，您需要配置该参数。
     * @example `/home/admin/test.log`
     */
    "InclusiveFile"?: string;
    /**
     * 防护模式。取值：
     * - **block**：拦截
     * - **audit**：告警
     * @example `block`
     */
    "DefenceMode": string;
}
