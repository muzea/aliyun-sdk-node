interface ListFlowJobHistoryRequest {
    /**
    * 地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 项目ID。
    * @example `FP-257A173659F59685`
    */ "ProjectId": string;
    /**
    * 作业ID。
    * @example `FJ-BCCAE48B90CCB37B`
    */ "Id"?: string;
    "StatusList"?: string[];
    /**
    * 作业类型。
    * @example `SHELL`
    */ "JobType"?: string;
    /**
    * 作业实例ID。
    * @example `FJI-BCCAE48B90CCB37B`
    */ "InstanceId"?: string;
    /**
    * 查询时间范围。
    * @example `{"type":"range","from":1564416000000,"to":1567008000000}`
    */ "TimeRange"?: string;
    /**
    * 页码。
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 每页查询数量。
    * @example `20`
    */ "PageSize"?: number;
}
export { ListFlowJobHistoryRequest };