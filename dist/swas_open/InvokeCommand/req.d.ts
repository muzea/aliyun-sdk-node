export interface InvokeCommandRequest {
    /**
     * 地域ID。您可以调用[ListRegions](~~189315~~)查询可用地域。
     * @example `cn-hangzhou	`
     */
    "RegionId": string;
    /**
     * 命令ID。您可以通过接口DescribeCommands查询所有可用的CommandId。
     * @example `c-sh02yh0932w****`
     */
    "CommandId": string;
    /**
     * 启用自定义参数功能时，执行命令时传入的自定义参数的键值对。
     * - 自定义参数的个数范围为0~10。Map的键不允许为空字符串，最多支持64个字符。
     * - Map的值允许为空字符串。自定义参数与原始命令内容在Base64编码后，综合长度不能超过18KB。
     * - 设置的自定义参数名集合必须为创建命令时定义的参数集的子集。
     * - 对于未传入的参数，您可以使用空字符串代替。您可以取消设置该参数从而禁用自定义参数。
     * @example `{"delayed_insert_timeout":"600","max_length_for_sort_data":"2048"}`
     */
    "Parameters"?: any;
    /**
     * 在轻量应用服务器中执行命令的用户名称。长度不得超过255个字符。
     * - Linux系统的轻量应用服务器，默认以root用户执行命令。
     * - Windows系统的轻量应用服务器，默认以System用户执行命令。
     * 您可以修改Linux系统执行用户，Windows系统执行用户不支持修改。
     * @example `test`
     */
    "Username"?: string;
    /**
     * 轻量应用服务器的实例ID。取值可以由多个实例ID组成一个JSON数组，最多支持50个ID，ID之间用半角逗号（,）隔开。
     * @example `["2ad1ae67295445f598017499dc****", "2ad1ae67295445f598017123dc****"]`
     */
    "InstanceIds": string;
}
