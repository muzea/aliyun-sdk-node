export interface DescribeReplicationJobsRequest {
    /**
     * 迁移任务的名称。
     * @example `testMigrationTaskName`
     */
    "Name"?: string;
    /**
     * 迁移源需迁入的目标阿里云地域ID。
     * 例如，您需要迁移源服务器至杭州，则RegionId为`cn-hangzhou`。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 迁移任务的主状态。取值范围：
     * - Ready：未开始。
     * - Running：运行中。
     * - Stopped：已暂停。
     * - InError：出错。
     * - Finished：已完成。
     * - Waiting：等待中。
     * - Expired：已过期。
     * - Deleting：删除中。
     * @example `Ready`
     */
    "Status"?: string;
    /**
     * 迁移任务的业务状态。取值范围：
     * - Preparing：准备中。
     * - Syncing：同步中。
     * - Processing：处理中。
     * - Cleaning：清理中。
     * @example `Preparing`
     */
    "BusinessStatus"?: string;
    /**
     * 返回结果中，迁移任务列表的页码。起始值：1。
     * 默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页行数。最大值：50。
     * 默认值：10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 迁移源ID列表。N的最大值为50。
     * @example `s-bp1e2fsl57knvuug****`
     */
    "SourceId"?: string[];
    /**
     * 迁移任务ID列表。N的最大值：50。
     * @example `j-bp19vlwm0tyigbmj****`
     */
    "JobId"?: string[];
    /**
     * 迁移任务的类型。取值范围：
     * - 0：服务器迁移。
     * - 1：操作系统迁移。
     * - 2：跨可用区迁移。
     * - 3：VMware无代理迁移。
     * @example `0`
     */
    "JobType"?: number;
    /**
     * 实例ID。
     */
    "InstanceId"?: string[];
    /**
     * 资源组ID。
     * @example `rg-acfmw3ty5y7****`
     */
    "ResourceGroupId"?: string;
    /**
     * 为SMC资源指定的标签。
     */
    "Tag"?: {
        /**
         * 为SMC资源指定的标签键。N的取值范围：1~20。
         * 一旦传入该值，可以为空字符串。最多支持64个字符，不能包含http:\//或者https:\//。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 为SMC资源指定的标签值。N的取值范围：1~20。
         * 一旦传入该值，可以为空字符串。最多支持64个字符，不能包含http://或者https://。
         * @example `TestValue`
         */
        Value: string;
    }[];
}
