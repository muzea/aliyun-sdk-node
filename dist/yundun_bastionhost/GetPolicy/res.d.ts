export interface GetPolicyResponse {
    /**
     * 控制策略详细信息。
     */
    Policy: {
        /**
         * 登录时段限制详情。
         */
        AccessTimeRangeConfig: {
            /**
             * 允许登录的时段详情。
             */
            EffectiveTime: {
                /**
                 * 允许登录的日期。
                 */
                Days: string[];
                /**
                 * 允许登录的时间。
                 */
                Hours: string[];
            }[];
        };
        /**
         * 命令策略详情。
         */
        CommandConfig: {
            /**
             * 命令审批配置详情。
             */
            Approval: {
                /**
                 * 命令列表数组。
                 */
                Commands: string[];
            };
            /**
             * 命令控制配置详情。
             */
            Deny: {
                /**
                 * 命令控制类型。取值：
                 * - white：白名单模式。
                 * - black：黑名单模式。
                 * @example `black`
                 */
                AclType: string;
                /**
                 * 命令列表数组。
                 */
                Commands: string[];
            };
        };
        /**
         * 控制策略的备注。
         * @example `comment`
         */
        Comment: string;
        /**
         * 来源IP限制配置详情。
         */
        IPAclConfig: {
            /**
             * 来源IP限制模式。取值：
             * - white：白名单模式。
             * - black：黑名单模式。
             * @example `black`
             */
            AclType: string;
            /**
             * 限制登录的IP信息。
             */
            IPs: string[];
        };
        /**
         * 控制策略名称。
         * @example `test`
         */
        PolicyName: string;
        /**
         * 控制策略ID。
         * @example `3`
         */
        PolicyId: string;
        /**
         * 控制策略的优先级，数字越小优先级越高。
         * @example `1`
         */
        Priority: number;
        /**
         * 协议控制详情。
         */
        ProtocolConfig: {
            /**
             * RDP选项配置详情。
             */
            RDP: {
                /**
                 * 粘贴板下载配置。取值：
                 * - Enable：启用
                 * - Disable：禁用
                 * @example `Enable`
                 */
                ClipboardDownload: string;
                /**
                 * 粘贴板上传配置。取值：
                 * - Enable：启用
                 * - Disable：禁用
                 * @example `Enable`
                 */
                ClipboardUpload: string;
                /**
                 * 驱动器/打印机映射配置。取值：
                 * - Enable：启用
                 * - Disable：禁用
                 * @example `Enable`
                 */
                DiskRedirection: string;
                /**
                 * 键盘记录配置。取值：
                 * - Enable：启用
                 * - Disable：禁用
                 * @example `Enable`
                 */
                RecordKeyboard: string;
            };
            /**
             * SSH和SFTP选项配置详情。
             */
            SSH: {
                /**
                 * 远程执行命令配置。取值：
                 * - Enable：启用
                 * - Disable：禁用
                 * @example `Enable`
                 */
                ExecCommand: string;
                /**
                 * SFTP通道配置。取值：
                 * - Enable：启用
                 * - Disable：禁用
                 * @example `Enable`
                 */
                SFTPChannel: string;
                /**
                 * SFTP选项文件下载配置。取值：
                 * - Enable：启用
                 * - Disable：禁用
                 * @example `Enable`
                 */
                SFTPDownloadFile: string;
                /**
                 * SFTP选项创建文件夹配置。取值：
                 * - Enable：启用
                 * - Disable：禁用
                 * @example `Enable`
                 */
                SFTPMkdir: string;
                /**
                 * SFTP选项删除文件配置。取值：
                 * - Enable：启用
                 * - Disable：禁用
                 * @example `Enable`
                 */
                SFTPRemoveFile: string;
                /**
                 * SFTP选项文件重命名配置。取值：
                 * - Enable：启用
                 * - Disable：禁用
                 * @example `Enable`
                 */
                SFTPRenameFile: string;
                /**
                 * SFTP选项删除文件夹配置。取值：
                 * - Enable：启用
                 * - Disable：禁用
                 * @example `Enable`
                 */
                SFTPRmdir: string;
                /**
                 * SFTP选项文件上传配置。取值：
                 * - Enable：启用
                 * - Disable：禁用
                 * @example `Enable`
                 */
                SFTPUploadFile: string;
                /**
                 * SSH通道配置。取值：
                 * - Enable：启用
                 * - Disable：禁用
                 * @example `Enable`
                 */
                SSHChannel: string;
                /**
                 * X11转发配置。取值：
                 * - Enable：启用
                 * - Disable：禁用
                 * @example `Enable`
                 */
                X11Forwarding: string;
            };
        };
        /**
         * 运维审批配置详情。
         */
        ApprovalConfig: {
            /**
             * 控制策略中的运维审批配置。取值：
             * - **On**：开启运维审批
             * - **Off**：关闭运维审批
             * @example `Off`
             */
            SwitchStatus: string;
        };
    };
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `0D29F2C0-8B4B-5861-9474-F3F23D25594B`
     */
    RequestId: string;
}
