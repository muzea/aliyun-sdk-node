export interface DescribeCommandsRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 命令ID。
     * @example `c-sh02yh0932w****`
     */
    "CommandId"?: string;
    /**
     * 命令的名称，暂不支持模糊查询。
     * @example `testName`
     */
    "Name"?: string;
    /**
     * 公共命令的提供者。参数值的具体说明如下：
     * - 当该参数取值为`AlibabaCloud`时，查询由阿里云提供的所有公共命令。
     * - 当该参数的取值为`User`时，查询由您创建的所有自定义命令。
     * @example `AlibabaCloud`
     */
    "Provider": string;
    /**
     * 命令的语言类型。取值范围：
     * - RunBatScript：适用于Windows实例的Bat命令。
     * - RunPowerShellScript：适用于Windows实例的PowerShell命令。
     * - RunShellScript：适用于Linux实例Shell命令。
     * @example `RunShellScript`
     */
    "Type"?: string;
    /**
     * 当前页码。
     * 起始值：1。
     * 默认值：1。
     * @example `1`
     */
    "PageNumber"?: string;
    /**
     * 分页查询时设置的每页行数。
     * 最大值：50。
     * 默认值：10。
     * @example `10`
     */
    "PageSize"?: string;
    /**
     * 命令的标签列表。
     */
    "Tag"?: {
        /**
         * 命令的标签键。标签键长度的取值范围：1~64。N 的取值范围：1~20。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 命令的标签值。标签值长度的取值范围：1~64。N 的取值范围：1~20。
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
