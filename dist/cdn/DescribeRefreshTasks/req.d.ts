interface DescribeRefreshTasksRequest {
    "RegionId"?: string;
    "OwnerId"?: number;
    /**
    * 按任务ID查询刷新状态。
    * @example `1234321`
    */ "TaskId"?: string;
    /**
    * 按路径查询，准确匹配。
    * @example `http://aaa.com/1.txt`
    */ "ObjectPath"?: string;
    /**
    * 取得第几页 取值范围为：**1**~**100000**。
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 任务类型：
    * - **file**
    * - **path**
    * - **preload**
    * 当指定**DomainName**或**TaskStatus**时，该参数为必选项。
    * @example `file`
    */ "ObjectType"?: string;
    /**
    * 域名。
    * @example `www.yourdomain.com`
    */ "DomainName"?: string;
    /**
    * 任务状态：
    * - **Complete**：完成。
    * - **Refreshing**：刷新中。
    * - **Failed**：刷新失败。
    * @example `Complete`
    */ "Status"?: string;
    /**
    * 分页大小，默认**20**，最大**50**。取值：**1**~**50**之前的任意整数。
    * @example `20`
    */ "PageSize"?: number;
    /**
    * 开始时间。
    * @example `2017-12-21T08:00:00:00Z`
    */ "StartTime"?: string;
    /**
    * 结束时间。
    * @example `2017-12-22T08:00:00:00Z`
    */ "EndTime"?: string;
    /**
    * 资源组ID。
    * @example `your resourceGroupId`
    */ "ResourceGroupId"?: string;
}
export { DescribeRefreshTasksRequest };