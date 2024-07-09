export interface DescribeWebLockConfigListResponse {
    /**
     * 该服务器已配置网页防篡改防护目录的总数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `D9354C1A-D709-4873-9AAE-41513327B247`
     */
    RequestId: string;
    /**
     * 网页防篡改防护配置列表信息。
     */
    ConfigList: {
        /**
         * 防篡改保护排除的目录。
         * > 防护模式**Mode**为**blacklist**时，会返回该参数。
         * @example `/home/admin/tomcat`
         */
        ExclusiveDir: string;
        /**
         * 防篡改防护的服务器的UUID。
         * @example `80d2f7d6-31a9-4d7f-8ff4-7ecc42f8****`
         */
        Uuid: string;
        /**
         * 防篡改要防护的文件类型。
         * > 防护模式**Mode**为**whitelist**时，会返回该参数。
         * @example `jpg`
         */
        InclusiveFileType: string;
        /**
         * 防护模式。取值：
         * - **block**：拦截
         * - **audit**：告警
         * @example `audit`
         */
        DefenceMode: string;
        /**
         * 防篡改保护排除文件的类型。
         * > 防护模式**Mode**为**blacklist**时，会返回该参数。
         * @example `*.jpg`
         */
        ExclusiveFileType: string;
        /**
         * 防篡改防护的文件。
         * > 防护模式**Mode**为**whitelist**时，会返回该参数。
         * @example `/home/admin/tomcat/aaa.log`
         */
        InclusiveFile: string;
        /**
         * 网页防篡改的防护模式。取值：
         * - **whitelist**：白名单模式，会对添加的防护目录和文件类型进行保护。
         * - **blacklist**：黑名单模式，会对添加的防护目录下所有未排除的子目录、文件类型和指定文件进行保护。
         * @example `blacklist`
         */
        Mode: string;
        /**
         * 网页防篡改防护目录。
         * @example `/www/tmp/`
         */
        Dir: string;
        /**
         * 防篡改保护排除的文件。
         * > 防护模式**Mode**为**blacklist**时，会返回该参数。
         * @example `/home/admin/tomcat/localhost.log`
         */
        ExclusiveFile: string;
        /**
         * 防护目录的ID。
         * @example `11`
         */
        Id: string;
        /**
         * 本地备份路径，用于对防护目录进行安全备份。
         * @example `/usr/local/backup`
         */
        LocalBackupDir: string;
    }[];
}
