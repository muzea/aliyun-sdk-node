export interface DescribeCommandsRequest {
    /**
     * 地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 公共命令的提供者。参数值的具体说明如下：
     * - 当该参数不传值时，默认查询您手动创建的所有云助手命令。
     * - 当该参数取值为`AlibabaCloud`时，查询由阿里云提供的所有公共命令。
     * - 当该参数的取值为具体的公共命令提供者时，查询该提供者提供的所有公共命令。例如：
     *     - 当`Provider=AlibabaCloud.ECS.GuestOS`时，查询`AlibabaCloud.ECS.GuestOS`提供的公共命令。
     *     - 当`Provider=AlibabaCloud.ECS.GuestOSDiagnose`时，查询`AlibabaCloud.ECS.GuestOSDiagnose`提供的公共命令。
     * @example `AlibabaCloud`
     */
    "Provider"?: string;
    /**
     * 命令ID。
     * @example `c-hz01272yr52****`
     */
    "CommandId"?: string;
    /**
     * 命令的名称。
     * - 当指定了`Provider`参数查询公共命令时，默认支持模糊查询。
     * - 当未指定`Provider`参数查询私有命令时，支持前缀匹配的模糊查询，例如输入`command*`，可以搜索出所有名称以`command`开头的命令。
     * @example `testName`
     */
    "Name"?: string;
    /**
     * 命令的描述。
     * - 当指定了`Provider`参数查询公共命令时，默认支持模糊查询。
     * - 当未指定`Provider`参数查询私有命令时，支持前缀匹配的模糊查询，例如输入`test*`，可以搜索出所有描述以`test`开头的命令。
     * @example `testDescription`
     */
    "Description"?: string;
    /**
     * 命令的类型。取值范围：
     * - RunBatScript：命令为在Windows实例中运行的Bat脚本。
     * - RunPowerShellScript：命令为在Windows实例中运行的PowerShell脚本。
     * - RunShellScript：命令为在Linux实例中运行的Shell脚本。
     * @example `RunShellScript`
     */
    "Type"?: string;
    /**
     * 设置返回数据中`CommandContent`字段和`Output`字段的编码方式。取值范围：
     * - PlainText：返回原始脚本内容和输出信息。
     * - Base64：返回Base64编码后的脚本内容和输出信息。
     * 默认值为Base64。
     * @example `PlainText`
     */
    "ContentEncoding"?: string;
    /**
     * 当前页码。
     * 起始值为1。
     * 默认值为1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页行数。
     * 最大值为50。
     * 默认值为10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 分页查询时每页的最大条目数。
     * 最大值为50。
     * 默认值为10。
     * @example `10`
     */
    "MaxResults"?: number;
    /**
     * 查询凭证（Token），取值为上一次API调用返回的NextToken参数值。
     * @example `AAAAAdDWBF2`
     */
    "NextToken"?: string;
    /**
     * 若查询结果包含公共命令，是否只查询最新版本的公共命令。该参数不影响私有命令的查询。
     * - true：只查询最新版本的公共命令。
     * - false：查询所有版本的公共命令。
     * 默认值：false。
     * @example `true`
     */
    "Latest"?: boolean;
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
         * 使用一个标签过滤资源，查询到该标签下的资源数量不能超过1000个；使用多个标签过滤资源，查询到同时绑定了多个标签的资源数量不能超过1000个。如果资源数量超过1000个，您需要使用[ListTagResources](~~110425~~)接口进行查询。
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
