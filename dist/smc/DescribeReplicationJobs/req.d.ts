interface DescribeReplicationJobsRequest {
    /**
    * 迁移源需迁入的目标阿里云地域ID。
    * 例如，您需要迁移源服务器至上海，则RegionId为`cn-shanghai`。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    "SourceId"?: string[];
    "JobId"?: string[];
    /**
    * 迁移任务的名称。
    * @example `MyMigrationTask`
    */ "Name"?: string;
    /**
    * @example `000000`
    */ "OwnerId"?: number;
    /**
    * 迁移任务的主状态。取值范围：
    * - Ready（未开始）
    * - Running（运行中）
    * - Stopped（已暂停）
    * - InError（出错）
    * - Finished（已完成）
    * - Expired（已过期）
    * - Deleting（删除中）
    * @example `Ready`
    */ "Status"?: string;
    /**
    * 迁移任务的业务状态，取值范围：
    * - Preparing（准备中）
    * - Syncing（同步中）
    * - Processing（处理中）
    * - Cleaning（清除中）
    * @example `Preparing`
    */ "BusinessStatus"?: string;
    /**
    * 返回结果中，迁移任务列表的页码。起始值：1。
    * 默认值：1。
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 分页查询时设置的每页行数。最大值：50。
    * 默认值：10。
    * @example `10`
    */ "PageSize"?: number;
}
export { DescribeReplicationJobsRequest };