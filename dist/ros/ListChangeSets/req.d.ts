export interface ListChangeSetsRequest {
    /**
     * 资源栈ID。
     * @example `4a6c9851-3b0f-4f5f-b4ca-a14bf691****`
     */
    "StackId": string;
    /**
     * 分页查询时设置的每页行数。
     * 取值范围：1~50。
     * 默认值：10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 更改集所属的地域ID。您可以调用[DescribeRegions](~~131035~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 更改集列表的页码。
     * 起始值：1。
     * 默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 更改集ID。如果不需要更改集详细信息，可使用此参数代替GetChangeSet接口。
     * @example `1f6521a4-05af-4975-afe9-bc4b45ad****`
     */
    "ChangeSetId"?: string;
    /**
     * 更改集的状态。N的最大值为5。取值：
     * - CREATE_PENDING
     * - CREATE_IN_PROGRESS
     * - CREATE_COMPLETE
     * - CREATE_FAILED
     * - DELETE_FAILED
     * - DELETE_COMPLETE
     * @example `CREATE_COMPLETE`
     */
    "Status"?: string[];
    /**
     * 更改集的名称。N的最大值为5。支持使用通配符星号（*）进行模糊搜索。
     * @example `MyChangeSet`
     */
    "ChangeSetName"?: string[];
    /**
     * 更改集的执行状态。N的最大值为5。取值：
     * - UNAVAILABLE
     * - AVAILABLE
     * - EXECUTE_IN_PROGRESS
     * - EXECUTE_COMPLETE
     * - EXECUTE_FAILED
     * - OBSOLETE
     * @example `AVAILABLE`
     */
    "ExecutionStatus"?: string[];
}
