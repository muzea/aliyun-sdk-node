export interface ModifyWebLockUpdateConfigRequest {
    /**
     * 访问源的IP地址。
     * @example `36.112.XX.XX`
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
     * 指定需要修改的防护目录配置的ID。
     * > 您可以调用[DescribeWebLockConfigList](~~DescribeWebLockConfigList~~)接口获取防护目录的ID。
     * @example `312077`
     */
    "Id": number;
    /**
     * 指定需要修改防护目录的服务器的UUID。
     * > 您可以调用[DescribeCloudCenterInstances](~~DescribeCloudCenterInstances~~)接口获取服务器的UUID。
     * @example `4fe8e1cd-3c37-4851-b9de-124da32c****`
     */
    "Uuid": string;
    /**
     * 指定防护目录，即需要防护的目录的完整路径。
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
     * 指定无需网页防篡改防护的文件类型（即排除文件的类型）。存在多个文件类型时，使用半角分号（;）隔开。取值：
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
     * 指定本地备份路径，用于对防护目录进行安全备份。
     * Linux服务器和Windows服务器防护目录地址的格式可能会有区别，请您确保输入正确的格式。您可以参考以下目录格式：
     *  - Linux服务器：/usr/local/aegis/bak
     *  - Windows服务器：C:\Program Files (x86)\Alibaba\Aegis\bak
     * @example `/usr/local/backup`
     */
    "LocalBackupDir": string;
    /**
     * 指定防护模式。取值：
     * - **whitelist**：白名单模式，对添加的防护目录和文件类型进行保护。
     * - **blacklist**：黑名单模式，对添加的防护目录下所有未排除的子目录、文件类型和指定文件进行保护。
     * @example `blacklist`
     */
    "Mode"?: string;
    /**
     * 指定需要网页防篡改防护的文件类型。存在多个文件类型时，使用半角分号（;）隔开。取值：
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
