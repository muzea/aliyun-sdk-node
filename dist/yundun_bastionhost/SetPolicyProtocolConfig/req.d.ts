export interface SetPolicyProtocolConfigRequest {
    /**
     * 堡垒机的实例ID。
     * > 您可以调用[DescribeInstances](~~153281~~)接口获取该参数。
     * @example `bastionhost-cn-st220aw****`
     */
    "InstanceId": string;
    /**
     * 堡垒机的区域ID。
     * > 区域ID和区域名称的对应关系，请参见[地域和可用区](~~40654~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 指定要修改的控制策略的ID。
     * > 您可以调用[ListPolicies](~~2758876~~)接口获取该参数。
     * @example `61`
     */
    "PolicyId": string;
    /**
     * 协议控制配置。
     */
    "ProtocolConfig": {
        /**
         * RDP选项配置详情。
         */
        RDP: {
            /**
             * 键盘记录配置。取值：
             * - Enable：启用
             * - Disable：禁用
             * > 不填则默认设置为 Disable。
             * @example `Enable`
             */
            RecordKeyboard: string;
            /**
             * 驱动器/打印机映射配置。取值：
             * - Enable：启用
             * - Disable：禁用
             * > 不填则默认设置为 Disable。
             * @example `Enable`
             */
            DiskRedirection: string;
            /**
             * 粘贴板下载配置。取值：
             * - Enable：启用
             * - Disable：禁用
             * > 不填则默认设置为 Disable。
             * @example `Enable`
             */
            ClipboardDownload: string;
            /**
             * 粘贴板上传配置。取值：
             * - Enable：启用
             * - Disable：禁用
             * > 不填则默认设置为 Disable。
             * @example `Enable`
             */
            ClipboardUpload: string;
        };
        /**
         * SSH和SFTP选项配置详情。
         */
        SSH: {
            /**
             * X11转发配置。取值：
             * - Enable：启用
             * - Disable：禁用
             * > 不填则默认设置为 Disable。
             * @example `Enable`
             */
            X11Forwarding: string;
            /**
             * SFTP通道配置。取值：
             * - Enable：启用
             * - Disable：禁用
             * > - 不填则默认设置为 Disable。
             * > - SSH通道和SFTP通道必须至少有一项为Enable。
             * > - 如果您为主机账户开启仅开启SFTP权限，请勿在控制策略里为该账户禁用SSH通道及SFTP通道，否则将无法通过堡垒机使用该主机账户访问目标服务器。
             * @example `Enable`
             */
            SFTPChannel: string;
            /**
             * SSH通道配置。取值：
             * - Enable：启用
             * - Disable：禁用
             * > - 不填则默认设置为 Disable。
             * > - SSH通道和SFTP通道必须至少有一项为Enable。SSH通道设置为Disable后，将无法通过SSH权限登录资产账户，请谨慎配置。
             * > - 如果您为主机账户开启仅开启SFTP权限，请勿在控制策略里为该账户禁用SSH通道及SFTP通道，否则将无法通过堡垒机使用该主机账户访问目标服务器。
             * @example `Enable`
             */
            SSHChannel: string;
            /**
             * 远程执行命令配置。取值：
             * - Enable：启用
             * - Disable：禁用
             * > 不填则默认设置为 Disable。
             * @example `Enable`
             */
            ExecCommand: string;
            /**
             * SFTP选项文件上传配置。取值：
             * - Enable：启用
             * - Disable：禁用
             * > 不填则默认设置为 Disable。
             * @example `Enable`
             */
            SFTPUploadFile: string;
            /**
             * SFTP选项文件下载配置。取值：
             * - Enable：启用
             * - Disable：禁用
             * > 不填则默认设置为 Disable。
             * @example `Enable`
             */
            SFTPDownloadFile: string;
            /**
             * SFTP选项删除文件配置。取值：
             * - Enable：启用
             * - Disable：禁用
             * > 不填则默认设置为 Disable。
             * @example `Enable`
             */
            SFTPRemoveFile: string;
            /**
             * SFTP选项文件重命名配置。取值：
             * - Enable：启用
             * - Disable：禁用
             * > 不填则默认设置为 Disable。
             * @example `Enable`
             */
            SFTPRenameFile: string;
            /**
             * SFTP选项创建文件夹配置。取值：
             * - Enable：启用
             * - Disable：禁用
             * > 不填则默认设置为 Disable。
             * @example `Enable`
             */
            SFTPMkdir: string;
            /**
             * SFTP选项删除文件夹配置。取值：
             * - Enable：启用
             * - Disable：禁用
             * > 不填则默认设置为 Disable。
             * @example `Enable`
             */
            SFTPRmdir: string;
        };
    };
}
