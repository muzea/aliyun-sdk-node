interface DescribeDcdnRefreshTasksRequest {
    "RegionId"?: string;
    "OwnerId"?: number;
    /**
    * 按任务ID查询刷新状态。
    * @example `123`
    */ "TaskId"?: string;
    /**
    * 按路径查询，准确匹配。
    * @example `http://aaa.com/1.txt`
    */ "ObjectPath"?: string;
    /**
    * 取得页数。取值范围为：**1**~**100000**。
    * @example `2`
    */ "PageNumber"?: number;
    /**
    * 任务类型。取值范围：
    * - **file**
    * - **path**
    * - **preload**
    * 当指定DomainName或TaskStatus时，此项必填。
    * @example `file`
    */ "ObjectType"?: string;
    /**
    * 域名。
    * @example `example.com`
    */ "DomainName"?: string;
    /**
    * 任务状态：
    * - **Complete**：完成。
    * - **Refreshing**：刷新中。
    * - **Failed**：刷新失败。
    * @example `Complete`
    */ "Status"?: string;
    /**
    * 分页大小。默认值：**20**，最大值：**50**，取值范围：**1**~**50**之前的任意整数。
    * @example `20`
    */ "PageSize"?: number;
    /**
    * 开始时间。
    * @example `2017-01-01T12:12:20Z`
    */ "StartTime"?: string;
    /**
    * 结束时间。
    * @example `2017-01-01T12:12:20Z`
    */ "EndTime"?: string;
    /**
    * 资源组ID。
    * @example `123`
    */ "ResourceGroupId"?: string;
}
export { DescribeDcdnRefreshTasksRequest };