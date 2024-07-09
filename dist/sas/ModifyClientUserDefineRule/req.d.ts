export interface ModifyClientUserDefineRuleRequest {
    /**
     * 自定义规则ID。
     * >调用[ListClientUserDefineRules](~~ListClientUserDefineRules~~)接口可以获取该参数。
     * @example `210****`
     */
    "Id": number;
    /**
     * 进程hash列表。
     * @example `aa5ee3ed4363c9d195a591a70281****,3e522d6f3bf5cf88bb77e9ff3d13****`
     */
    "Md5List"?: string;
    /**
     * 操作类型。取值：
     * - **0**：加白
     * - **1**：加黑
     * @example `0`
     */
    "ActionType": number;
    /**
     * 进程路径。
     * @example `/root/1111/****`
     */
    "ProcPath"?: string;
    /**
     * 命令行。
     * @example `/usr/sbin/s****
    `
     */
    "Cmdline"?: string;
    /**
     * 规则类型。取值：
     * - **1**：进程hash
     * - **2**：命令行
     * - **3**：进程网络
     * - **4**：文件读写
     * - **5**：操作注册表
     * - **6**：加载动态链接库
     * - **7**：文件重命名
     * @example `2`
     */
    "Type"?: number;
    /**
     * 操作系统类型。取值：
     * - **windows**：widows
     * - **linux**：linux
     * - **all**：全部
     * @example `linux`
     */
    "Platform"?: string;
    /**
     * IP地址。
     * @example `1.1.XX.XX`
     */
    "IP"?: string;
    /**
     * 端口号，已废弃。
     * @example `22`
     */
    "Port"?: number;
    /**
     * 文件路径。
     * @example `/etc/pam.d/su****`
     */
    "FilePath"?: string;
    /**
     * 注册表键。
     * @example `HKEY_DYN_****`
     */
    "RegistryKey"?: string;
    /**
     * 注册表值。
     * @example `SECOH-QAD****`
     */
    "RegistryContent"?: string;
    /**
     * 文件重命名的新文件路径。
     * @example `/etc/pam****`
     */
    "NewFilePath"?: string;
    /**
     * 父进程路径。
     * @example `C:/Windows/System32/cmd****`
     */
    "ParentProcPath"?: string;
    /**
     * 父命令行。
     * @example `/usr/sbin/s****`
     */
    "ParentCmdline"?: string;
    /**
     * 规则名称。
     * @example `规则****`
     */
    "Name"?: string;
    /**
     * 端口号。取值范围：1-65535。
     * @example `80`
     */
    "PortStr"?: string;
    /**
     * 域名。
     * @example `example.com`
     */
    "Domain"?: string;
}
