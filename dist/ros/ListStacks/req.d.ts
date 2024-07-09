export interface ListStacksRequest {
    /**
     * 分页查询时设置的每页行数。
     * 最大值：50。
     *
     * 默认值：10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 父资源栈ID。
     * @example `4a6c9851-3b0f-4f5f-b4ca-a14bf691****`
     */
    "ParentStackId"?: string;
    /**
     * 资源栈所属的地域ID。您可以调用[DescribeRegions](~~131035~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 资源栈列表的页码。
     * 起始值：1。
     *
     * 默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 是否列出嵌套资源栈。取值：
     * - true
     * - false（默认值）
     *
     * > 如果指定了ParentStackId，则该值为true。
     * @example `true`
     */
    "ShowNestedStack"?: boolean;
    /**
     * 资源栈ID。如果不需要资源栈详细信息，可以指定此参数，代替GetStack接口。
     * @example `4a6c9851-3b0f-4f5f-b4ca-a14bf691****`
     */
    "StackId"?: string;
    /**
     * 资源栈状态。
     * @example `CREATE_COMPLETE`
     */
    "Status"?: string[];
    /**
     * 资源栈名称。
     * @example `MyStack`
     */
    "StackName"?: string[];
    /**
     * 资源栈的标签。
     */
    "Tag"?: {
        /**
         * 资源栈的标签键。
         * N的取值范围：1~20。
         * @example `usage`
         */
        Key: string;
        /**
         * 资源栈的标签值。
         * N的取值范围：1~20。
         * @example `test`
         */
        Value: string;
    }[];
    /**
     * 资源组ID。
     * 关于资源组的更多信息，请参见[什么是资源组](~~94475~~)。
     * @example `rg-acfmxazb4ph6aiy****`
     */
    "ResourceGroupId"?: string;
    /**
     * 资源栈ID列表。
     */
    "StackIds"?: string[];
    /**
     * 按创建时间查询，创建时间区间的起始点。按照[ISO 8601](~~25696~~)标准表示，并需要使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * @example `2023-04-01T15:10:00Z`
     */
    "StartTime"?: string;
    /**
     * 按创建时间查询，创建时间区间的终止点。按照[ISO 8601](~~25696~~)标准表示，并需要使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * @example `2023-04-01T15:16:00Z`
     */
    "EndTime"?: string;
}
