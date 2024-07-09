export interface CreateCommandRequest {
    /**
     * 地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
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
     * @example `testDescription`
     */
    "Description"?: string;
    /**
     * 命令的类型。取值范围：
     * - RunBatScript：创建一个在Windows实例中运行的Bat脚本。
     * - RunPowerShellScript：创建一个在Windows实例中运行的PowerShell脚本。
     * - RunShellScript：创建一个在Linux实例中运行的Shell脚本。
     *
     * @example `RunShellScript`
     */
    "Type": string;
    /**
     * 命令Base64编码后的内容。
     * - 该参数的值必须使用Base64编码后传输，且脚本内容的大小在Base64编码之后不能超过18 KB。
     * - 命令内容支持使用自定义参数形式，具体通过指定参数`EnableParameter=true`启用自定义参数功能：
     *     - 自定义参数用`{{}}`包含的方式定义，在`{{}}`内参数名前后的空格以及换行符会被忽略。
     *     - 自定义参数个数不能超过20个。
     *     - 自定义参数名允许a-zA-Z0-9-_的组合，不支持acs::前缀指定非内置环境参数，不支持其余字符，参数名不区分大小写。
     *     - 单个参数名不能超过64字节。
     * - 您可以指定内置环境参数作为自定义参数，执行命令时无需手动对参数赋值，云助手将为您自动替换为环境中对应的值。支持指定以下内置环境参数：
     *     - `{{ACS::RegionId}}`：地域ID。
     *     - `{{ACS::AccountId}}`：阿里云主账号UID。
     *     - `{{ACS::InstanceId}}`：实例ID。命令下发到多个实例时，如需指定`{{ACS::InstanceId}}`作为内置环境参数，需确保云助手Agent不低于以下版本：
     *         - Linux：2.2.3.309
     *         - Windows：2.1.3.309
     *     - `{{ACS::InstanceName}}`：实例名称。命令下发到多个实例时，如需指定`{{ACS::InstanceName}}`作为内置环境参数，需确保云助手Agent不低于以下版本：
     *         - Linux：2.2.3.344
     *         - Windows：2.1.3.344
     *     - `{{ACS::InvokeId}}`：命令执行ID。如需指定`{{ACS::InvokeId}}`作为内置环境参数，需确保云助手Agent不低于以下版本：
     *         - Linux：2.2.3.309
     *         - Windows：2.1.3.309
     *
     *     - `{{ACS::CommandId}}` ：命令ID。通过调用[RunCommand](~~141751~~)接口执行命令时，如需指定`{{ACS::CommandId}}`作为内置环境参数，需确保云助手Agent不低于以下版本：
     *         - Linux：2.2.3.309
     *         - Windows：2.1.3.309
     * @example `ZWNobyAxMjM=`
     */
    "CommandContent": string;
    /**
     * 您创建的命令在ECS实例中运行的目录。长度不得超过200个字符。
     * 默认值：
     * - Linux实例：管理员root用户的home目录下，具体为`/root`目录。
     * - Windows实例：云助手Agent进程所在目录，例如`C:\Windows\System32`。
     * >设置为其他目录时，请确保实例中存在该目录。
     * @example `/home/user`
     */
    "WorkingDir"?: string;
    /**
     * 您创建的命令在ECS实例中执行时最大的超时时间，单位为秒。当因为某种原因无法运行您创建的命令时，会出现超时现象。超时后，会强制终止命令进程，即取消命令的PID。
     * 默认值：60。
     * @example `60`
     */
    "Timeout"?: number;
    /**
     * 创建的命令是否使用自定义参数。
     * 默认值：false。
     * @example `false`
     */
    "EnableParameter"?: boolean;
    /**
     * 命令内容（CommandContent）的编码方式。取值范围：
     * - PlainText：不编码，采用明文传输。
     * - Base64：Base64编码。
     * 默认值：Base64。
     * >错填该取值会当作Base64处理。
     * @example `PlainText`
     */
    "ContentEncoding"?: string;
    /**
     * 命令所属的资源组ID。
     * @example `rg-123******`
     */
    "ResourceGroupId"?: string;
    /**
     * 标签列表。
     */
    "Tag"?: {
        /**
         * 命令的标签键。N的取值范围为1~20。一旦传入该值，则不允许为空字符串。
         * 使用一个标签过滤资源，查询到该标签下的资源数量不能超过1000个。使用多个标签过滤资源，查询到同时绑定了多个标签的资源数量不能超过1000个。如果资源数量超过1000个，您需要使用[ListTagResources](~~110425~~)接口进行查询。
         * 最多支持64个字符，不能以`aliyun`或`acs:`开头，不能包含`http://`或`https://`。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 命令的标签值。N的取值范围为1~20。该值可以为空字符串。
         * 最多支持128个字符，不能包含`http://`或`https://`。
         * @example `TestValue`
         */
        Value: string;
    }[];
}
