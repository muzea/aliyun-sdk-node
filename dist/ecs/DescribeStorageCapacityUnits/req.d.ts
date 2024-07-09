export interface DescribeStorageCapacityUnitsRequest {
    /**
     * SCU所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * SCU列表的页码。
     * 起始值：1。
     * 默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时的每页行数。
     * 最大值：100。
     * 默认值：10。
     * @example `1`
     */
    "PageSize"?: number;
    /**
     * SCU的名称，长度为2~128个英文或中文字符。必须以大小写字母或中文开头，不能以`http:/`/或`https://`开头。可以包含数字、半角冒号（:）、下划线（_）或者短划线（-）。
     * @example `testScuName`
     */
    "Name"?: string;
    /**
     * SCU容量大小，单位为GiB。取值范围：{20, 40, 100, 200, 500, 1024, 2048, 5120, 10240, 20480, 51200}。
     * @example `20`
     */
    "Capacity"?: number;
    /**
     * 分配类型。取值范围：
     * - Normal：查询当前阿里云账号下的SCU。
     * - Shared：查询已经建立阿里云账号与RAM用户共享的SCU。
     * 默认值：Normal。
     * @example `Normal`
     */
    "AllocationType"?: string;
    /**
     * 一个或多个SCU ID。N的取值范围：1~100。
     * @example `scu-bp67acfmxazb4p****`
     */
    "StorageCapacityUnitId"?: string[];
    /**
     * 一个或多个SCU的状态值，N取值范围为1~4。状态的取值范围：
     * - Creating：创建中。
     * - Active：启用中。
     * - Expired：已过期。
     * - Pending：待生效。
     * @example `Active`
     */
    "Status"?: string[];
    /**
     * 标签列表
     */
    "Tag"?: {
        /**
         * SCU的标签键。N表示可以设置多个标签键进行查询，N的取值范围：1~20。
         * @example `TestKey`
         */
        Key: string;
        /**
         * SCU的标签值。N表示可以设置多个标签值进行查询，且与`Tag.N.Key`的N对应，N的取值范围：1~20。
         * @example `TestValue`
         */
        Value: string;
    }[];
}
