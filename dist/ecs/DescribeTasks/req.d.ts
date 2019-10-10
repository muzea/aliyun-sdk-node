interface DescribeTasksRequest {
    /**
    * 地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * @example `1`
    */ "SourceRegionId"?: string;
    /**
    * RAM 用户的虚拟账号 ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
    /**
    * 查询结果的页码，起始值为1，默认值为1。
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 分页查询时设置的每页记录数，最大值100行，默认值为10。
    * @example `2`
    */ "PageSize"?: number;
    /**
    * 任务ID，单次最多支持指定100个，ID之间使用半角逗号（,）分隔。
    * @example `["t-bp10e8or********74o8x","t-bp10e8or********74o8y"]`
    */ "TaskIds"?: string;
    /**
    * 任务操作的接口名称。取值范围：
    *
    * - ImportImage：导入镜像
    * - ExportImage：导出镜像
    * - RedeployInstance：重新部署ECS实例
    * @example `ImportImage`
    */ "TaskAction"?: string;
    /**
    * 任务状态。取值范围：
    *
    * - Finished：已完成
    * - Processing：运行中
    * - Waiting：多任务排队中
    * - Deleted：已取消
    * - Paused：暂停
    * - Failed：失败
    * 默认值：无。只支持查询状态为Finished、Processing和Failed的任务，填入其他取值将不会生效。
    * @example `Finished`
    */ "TaskStatus"?: string;
    /**
    * 按创建时间查询，创建时间区间的起始点。按照[ISO8601](~~25696~~)标准表示，并需要使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
    * @example `2015-11-23T15:10:00Z`
    */ "StartTime"?: string;
    /**
    * 按创建时间查询，创建时间区间的终止点。按照[ISO8601](~~25696~~)标准表示，并需要使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
    * @example `2015-11-23T15:16:00Z`
    */ "EndTime"?: string;
}
export { DescribeTasksRequest };