export interface RunCommandRequest {
    /**
     * 命令内容。您需要注意：
     * - 指定参数`EnableParameter=true`可在命令内容中启用自定义参数功能：
     * - 用{{}}包含的方式定义自定义参数，在`{{}}`内参数名前后的空格以及换行符会被忽略。
     * - 自定义参数个数不能超过20个。
     * - 自定义参数名允许a-zA-Z0-9-_的组合，不支持其余字符，参数名不区分大小写。
     * - 单个自定义参数名不能超过64字节。
     * @example `ifconfig -s`
     */
    "CommandContent": string;
    /**
     * 您可自定义命令的执行路径。默认路径如下：
     * - Linux实例：执行路径默认在管理员root用户的/root目录下。
     * - Windows实例：执行路径默认在C:\Windows\system32目录下。
     * @example `/root`
     */
    "WorkingDir"?: string;
    /**
     * 地域ID。您可以调用[ListRegions](~~189315~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 设置命令在服务器实例中的超时时间，单位为秒。
     * 当执行命令的任务超时后，命令助手将强制终止任务进程。可设定超时时间取值范围为10～86400秒（24小时）。
     * 默认值：60。
     * @example `60`
     */
    "Timeout"?: number;
    /**
     * 命令的语言类型。取值范围：
     * - RunBatScript：适用于Windows实例的Bat命令。
     * - RunPowerShellScript：适用于Windows实例的PowerShell命令。
     * - RunShellScript：适用于Linux实例Shell命令。
     * @example `RunShellScript`
     */
    "Type": string;
    /**
     * 命令中是否包含自定义参数。
     * 默认值：false。
     * @example `false`
     */
    "EnableParameter"?: boolean;
    /**
     * 命令中包含自定义参数时，执行命令时传入的自定义参数的键值对。例如，命令内容为`echo {{name}}`，则可以通过`Parameters`参数传入键值对`{"name":"Jack"}`。自定义参数将自动替换变量值`name`，得到一条新的命令，实际执行的是`echo Jack`。
     * 自定义参数的个数范围为0~20，且您需要注意：
     * - 键不允许为空字符串，最多支持64个字符。
     * - 值允许为空字符串。
     * - 自定义参数与原始命令内容在Base64编码后，综合长度不能超过16 KB。
     * - 设置的自定义参数名集合必须为创建命令时定义的参数集的子集。对于未传入的参数，您可以使用空字符串代替。
     * 默认值为空，表示取消设置该参数从而禁用自定义参数。
     * @example `{"name":"Jack", "accessKey":"LTAIdyvdIqaRY****"}`
     */
    "Parameters"?: any;
    /**
     * 您可以指定以某个轻量应用服务器实例中存在的用户执行命令，建议使用普通用户执行命令可降低安全风险。
     * 默认值：
     * - root：Linux实例中默认以root用户执行命令。
     * - system：Windows实例中默认以system用户执行命令。
     * @example `root`
     */
    "WorkingUser"?: string;
    /**
     * Windows实例中执行命令的用户的密码名称。
     * 当您希望以非默认用户（System）在Windows实例中执行命令时，需要同时传入WorkingUser和该参数。为降低密码泄露的风险，需要将密码明文托管在运维编排服务的参数仓库中，此处仅传入密码的名称。
     * @example `axtSecretPassword`
     */
    "WindowsPasswordName"?: string;
    /**
     * 轻量应用云服务器实例ID。
     * @example `ace0706b2ac4454d984295a94213****`
     */
    "InstanceId": string;
    /**
     * 执行命令名称。
     * @example `testName`
     */
    "Name": string;
}
