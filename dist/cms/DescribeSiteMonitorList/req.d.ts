interface DescribeSiteMonitorListRequest {
    "RegionId"?: string;
    /**
    * 任务ID。
    * @example `a1ecd34a-8157-44d9-b060-14950837****`
    */ "TaskId"?: string;
    /**
    * 站点监控任务探测类型。
    * @example `HTTP`
    */ "TaskType"?: string;
    /**
    * 支持根据名称或任务地址模糊搜索。
    * @example `site`
    */ "Keyword"?: string;
    /**
    * 分页页码，默认值为1。
    * @example `1`
    */ "Page"?: number;
    /**
    * 每页显示条数，默认值为10。
    * @example `10`
    */ "PageSize"?: number;
}
export { DescribeSiteMonitorListRequest };