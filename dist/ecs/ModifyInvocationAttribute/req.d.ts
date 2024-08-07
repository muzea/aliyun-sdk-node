export interface ModifyInvocationAttributeRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 待加入任务的ECS实例ID或托管实例ID。
     */
    "InstanceId"?: string[];
    /**
     * 待修改任务的命令执行ID。
     * @example `t-hz0jdfwd9f****`
     */
    "InvokeId": string;
    /**
     * 待修改后的命令内容。命令内容可以是明文内容或Base64编码后的内容。您需要注意：
     * - 若创建待修改任务时选择了保存命令，命令内容在Base64编码后的大小不能超过18 KB；若选择了不保存命令，命令内容在Base64编码后的大小不能超过24 KB。
     * - 如果您的命令内容是Base64编码后的内容，则必须设置`ContentEncoding=Base64`。
     * - 指定参数`EnableParameter=true`可在命令内容中启用自定义参数功能：
     *     - 用`{{}}`包含的方式定义自定义参数，在`{{}}`内参数名前后的空格以及换行符会被忽略。
     *     - 自定义参数个数不能超过20个。
     *     - 自定义参数名允许a-zA-Z0-9-_的组合，不支持acs::前缀指定非内置环境参数，不支持其余字符，参数名不区分大小写。
     *     - 单个自定义参数名不能超过64字节。
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
     *     - `{{ACS::CommandId}}`：命令ID。通过调用本接口执行命令时，如需指定`{{ACS::CommandId}}`作为内置环境参数，需确保云助手Agent不低于以下版本：
     *         - Linux：2.2.3.309
     *         - Windows：2.1.3.309
     * @example `ZWNobyAxMjM=`
     */
    "CommandContent"?: string;
    /**
     * 修改命令中是否包含自定义参数。
     * - 当您启用自定义参数或修改自定义参数`Parameters`时，该参数需设置为`true`。
     * - 当您不修改自定义参数`Parameters`时，不设置该参数或设置为`false`。
     * @example `false`
     */
    "EnableParameter"?: boolean;
    /**
     * 命令中包含自定义参数时，修改执行命令时传入的自定义参数的键值对。
     * 自定义参数的个数范围为0~10，且您需要注意：
     * - 键不允许为空字符串，最多支持64个字符。
     * - 值允许为空字符串。
     * - 自定义参数与原始命令内容在Base64编码后，若创建待修改任务时选择了保存命令，命令内容在Base64编码后的大小不能超过 18 KB；若选择了不保存命令，命令内容在Base64编码后的大小不能超过 24 KB。
     * - 设置的自定义参数名集合必须为创建命令时定义的参数集的子集。对于未传入的参数，您可以使用空字符串代替。
     * 默认值为空，表示不涉及自定义参数键值对的修改。
     * @example `{"name":"Jack", "accessKey":"LTAIdyvdIqaRY****"}`
     */
    "Parameters"?: any;
    /**
     * 待修改的定时执行频率。仅当`RepeatMode`为`Period`时生效。目前支持三种定时执行方式：固定时间间隔执行（基于Rate表达式）、仅在指定时间执行一次、基于时钟定时执行（基于Cron表达式）。
     * - 固定时间间隔执行：基于Rate表达式，按照设置的时间间隔执行命令。时间间隔支持按秒（s） 、分钟（m） 、小时（h）和天（d）来选择，适用于在固定时间间隔执行任务的场景。格式为`rate(<执行间隔数值><执行间隔单位>)`，如5分钟执行一次，格式为`rate(5m)`。使用固定时间间隔执行有以下限制：
     *     - 设置的时间间隔不大于7天、不小于60秒，且需大于创建定时任务时指定的超时时间。
     *     - 执行间隔只基于固定频率，与任务实际执行需要的时间无关。例如设置每5分钟执行一次命令，任务需要2分钟执行完成，则在任务完成3分钟后继续执行下一轮。
     *     - 按照任务的创建时间（参见`DescribeInvocations`返回的[CreationTime](~~64840~~)，请注意不是修改时间）及修改后的执行间隔计算下一次执行时间。
     * - 仅在指定时间执行一次：按照设置的时区和执行时间点执行一次命令。格式为`at(yyyy-MM-dd HH:mm:ss <时区>)`，即`at(年-月-日 时:分:秒 <时区>)`。如果不指定时区，默认为UTC时区。时区支持以下三种形式：
     *     - 时区全称：  如`Asia/Shanghai`（中国/上海时间）、`America/Los_Angeles`（美国/洛杉矶时间）等。
     *     - 时区相对于格林威治时间的偏移量：  如`GMT+8:00`（东八区）、`GMT-7:00`（西七区）等。使用GMT格式时，小时位不支持添加前导零。
     *     - 时区缩写：  仅支持UTC（协调世界时间）。
     *   如果指定在中国/上海时间2022年06月06日13时15分30秒执行一次，格式为：`at(2022-06-06 13:15:30 Asia/Shanghai)`；如果指定在西七区2022年06月06日13时15分30秒执行一次，格式为：`at(2022-06-06 13:15:30 GMT-7:00)`。
     * - 基于时钟定时执行（基于Cron表达式）：基于Cron表达式，按照设置的定时任务执行命令。格式为`<秒> <分钟> <小时> <日期> <月份> <星期> <年份（可选）> <时区>`，即`<Cron表达式> <时区>`。在指定的时区下，根据Cron表达式推算定时任务执行时间并执行。若不指定时区，默认为执行定时任务实例的系统内部时区。关于Cron表达式的更多信息，请参见[Cron表达式](~~64769~~)。时区支持以下三种形式：
     *     - 时区全称：  如`Asia/Shanghai`（中国/上海时间）、`America/Los_Angeles`（美国/洛杉矶时间）等。
     *     - 时区相对于格林威治时间的偏移量：  如`GMT+8:00`（东八区）、`GMT-7:00`（西七区）等。使用GMT格式时，小时位不支持添加前导零。
     *     - 时区缩写：  仅支持UTC（协调世界时间）。
     *   例如，在中国/上海时间，2022年每天上午10:15执行一次命令，格式为`0 15 10 ? * * 2022 Asia/Shanghai`；在东八区时间，2022年每天上午10:00到11:30每隔半小时执行，格式为`0 0/30 10-11 * * ? 2022 GMT+8:00`；在UTC时间，从2022年开始，每隔两年的10月每天下午14:00到下午14:55时间段内每隔5分钟执行，格式为`0 0/5 14 * 10 ? 2022/2 UTC`。
     *     >设置的最小时间间隔需大于或等于创建定时任务时指定的超时时间，且不小于 10 秒。
     * @example `0 *​/20 * * * *`
     */
    "Frequency"?: string;
    /**
     * 命令内容（`CommandContent`）的编码方式。取值范围（不区分大小写）：
     * - PlainText：不编码，采用明文传输。
     * - Base64：Base64编码。
     * 默认值：PlainText，填写错误时会当作PlainText处理。
     * @example `PlainText`
     */
    "ContentEncoding"?: string;
}
