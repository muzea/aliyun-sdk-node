export interface ModifyWebLockStartRequest {
    /**
     * 指定防护类型。取值：
     * - **whitelist**：白名单模式，对添加的防护目录和文件类型进行保护。
     * - **blacklist**：黑名单模式，对添加的防护目录下所有未排除的子目录、文件类型和指定文件进行保护。
     * @example `whitelist`
     */
    "Mode": string;
    /**
     * 配置本地备份路径，用于对防护目录进行安全备份。
     * Linux服务器和Windows服务器防护目录地址的格式可能会有区别，请您确保输入正确的格式。您可以参考以下目录格式：
     *  - Linux服务器：/usr/local/aegis/bak
     *  - Windows服务器：C:\Program Files (x86)\Alibaba\Aegis\bak
     * @example `/usr/local/backup`
     */
    "LocalBackupDir": string;
    /**
     * 指定无需开启网页防篡改防护的文件（即排除文件）。
     * > 防护模式**Mode**配置为**blacklist**时，您需要配置该参数。
     * @example `/home/admin/tomcat/localhost.log`
     */
    "ExclusiveFile"?: string;
    /**
     * 指定防护目录，存在多个时用英文逗号（,）分隔。
     * @example `/home/admin/tomcat`
     */
    "Dir": string;
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
     * @example `php`
     */
    "InclusiveFileType"?: string;
    /**
     * 指定需要防护的服务器UUID。
     * @example `80d2f7d6-31a9-4d7f-8ff4-7ecc42f89ca****`
     */
    "Uuid": string;
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
     * 指定无需网页防篡改防护的目录地址（即排除目录）。
     * > 防护模式**Mode**配置为**blacklist**时，您需要配置该参数。
     * @example `/home/admin/java`
     */
    "ExclusiveDir"?: string;
    /**
     * 防护模式。取值：
     * - **block**：拦截
     * - **audit**：告警
     * @example `block`
     */
    "DefenceMode": string;
}
