export interface CreateCommandRequest {
    /**
     * 地域ID。您可以调用[ListRegions](~~189315~~)查询可用地域。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 命令名称，支持全字符集。长度不得超过128个字符。
     * @example `testName`
     */
    "Name": string;
    /**
     * 命令描述，支持全字符集。长度不得超过512个字符。
     * @example `test`
     */
    "Description"?: string;
    /**
     * 命令的语言类型。取值范围：
     * - RunBatScript：适用于Windows实例的Bat命令。
     * - RunPowerShellScript：适用于Windows实例的PowerShell命令。
     * - RunShellScript：适用于Linux实例Shell命令。
     * @example `RunShellScript`
     */
    "Type": string;
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
     * 您创建的命令在ECS实例中运行的目录。
     * 默认值：
     * - Linux实例：管理员root用户的home目录下，具体为`/root`目录。
     * - Windows实例：云助手客户端进程所在目录，例如`C:\Windows\System32`。
     * @example `/root/`
     */
    "WorkingDir"?: string;
    /**
     * 设置命令在服务器实例中的超时时间，单位为秒。
     * 当执行命令的任务超时后，命令助手将强制终止任务进程。可设定超时时间取值范围为10～86400秒（24小时）。
     * 默认值：60。
     * @example `60`
     */
    "Timeout"?: number;
    /**
     * 创建的命令是否使用自定义参数。
     * 默认值为false。
     * @example `false`
     */
    "EnableParameter"?: boolean;
    /**
     * 标签列表，最多包含20个子项。
     */
    "Tag"?: {
        /**
         * 为命令指定的标签键。N 的取值范围：1~20。
         * 一旦传入该值，则不允许为空字符串。最多支持 64 个字符，不能以 aliyun 和 acs:开头，不能包含 http://或者 https://。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 为命令指定的标签值。N 的取值范围：1~20。
         * 一旦传入该值，可以为空字符串。最多支持 64 个字符，不能包含 http://或者 https://。
         * @example `TestValue`
         */
        Value: string;
    }[];
    /**
     * 资源组ID。
     * @example `rg-aek2bti7cf7****`
     */
    "ResourceGroupId"?: string;
}
