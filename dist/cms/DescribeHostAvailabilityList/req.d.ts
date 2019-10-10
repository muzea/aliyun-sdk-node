interface DescribeHostAvailabilityListRequest {
    "RegionId"?: string;
    /**
    * 任务ID。
    * @example `12346`
    */ "Id"?: number;
    /**
    * 任务名称。
    * @example `我的探测`
    */ "TaskName"?: string;
    /**
    * 页码。
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 每页记录条数。
    * @example `10`
    */ "PageSize"?: number;
    /**
    * 应用分组ID。
    * @example `12345`
    */ "GroupId"?: number;
}
export { DescribeHostAvailabilityListRequest };