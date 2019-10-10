interface ListFlowInstanceRequest {
    /**
    * 地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 项目ID。
    * @example `FP-7A1018ADE9179EE1`
    */ "ProjectId": string;
    /**
    * 已过期。
    * @example `x`
    */ "Id"?: string;
    /**
    * 工作流ID。
    * @example `F-1B4018ADE9179EE1`
    */ "FlowId"?: string;
    /**
    * 工作流名称。
    * @example `my_flow`
    */ "FlowName"?: string;
    /**
    * 责任人ID。
    * @example `1230404****`
    */ "Owner"?: string;
    /**
    * 工作流实例ID。
    * @example `FI-7CAF9709CD328EBE`
    */ "InstanceId"?: string;
    /**
    * 查询时间范围。
    * @example `{"type":"date","date":"ALL"}`
    */ "TimeRange"?: string;
    "StatusList"?: string[];
    /**
    * 排序字段名称。
    * @example `id`
    */ "OrderBy"?: string;
    /**
    * 排序方向：ASC/DESC。
    * @example `asc`
    */ "OrderType"?: string;
    /**
    * 页码。
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 每页数量。
    * @example `20`
    */ "PageSize"?: number;
}
export { ListFlowInstanceRequest };