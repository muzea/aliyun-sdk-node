export interface DescribeSendFileResultsRequest {
    /**
     * ECS实例所在的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 文件下发的资源组ID。传入该参数后，需要在下发文件时指定ResourceGroupId，支持筛选出对应的文件下发结果。
     * @example `rg-bp67acfmxazb4p****`
     */
    "ResourceGroupId"?: string;
    /**
     * 执行ID。
     * @example `f-hz0jdfwd9f****`
     */
    "InvokeId"?: string;
    /**
     * 文件名称。传入该参数后，将查询该名称文件的所有的下发记录。
     * @example `test.txt`
     */
    "Name"?: string;
    /**
     * 实例ID。传入该参数后，将查询该实例所有的文件下发记录。
     * @example `i-hz0jdfwd9f****`
     */
    "InstanceId"?: string;
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
     * 文件的总下发状态。总状态取决于本次下发的全部实例的共同执行状态，取值范围：
     * - Pending：系统正在校验或下发文件。存在至少一台实例的文件下发状态为Pending，则总执行状态为Pending。
     * - Running：正在实例上下发文件。存在至少一台实例的文件下发状态为Running，则总执行状态为Running。
     * - Success：下发成功。各个实例上的文件下发状态均为Success，则总执行状态为Success。
     * - Failed：下发失败。各个实例上的文件下发状态均为Failed，则总执行状态为Failed。
     * - PartialFailed：部分实例文件下发成功且部分实例下发失败。各个实例的文件下发状态均为Success或Failed，则总执行状态为PartialFailed。
     * @example `Success`
     */
    "InvocationStatus"?: string;
    /**
     * 标签列表。
     */
    "Tag"?: {
        /**
         * 文件下发的标签键。N的取值范围为1~20。一旦传入该值，则不允许为空字符串。
         * 使用一个标签过滤资源，查询到该标签下的资源数量不能超过1000个。使用多个标签过滤资源，查询到同时绑定了多个标签的资源数量不能超过1000个。如果资源数量超过1000个，您需要使用[ListTagResources](~~110425~~)接口进行查询。
         * 最多支持64个字符，不能以`aliyun`或`acs:`开头，不能包含`http://`或`https://`。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 文件下发的标签值。N的取值范围为1~20。该值可以为空字符串。
         * 最多支持128个字符，不能包含`http://`或`https://`。
         * @example `TestValue`
         */
        Value: string;
    }[];
}
