interface ListFlowProjectUserRequest {
    /**
    * 地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 项目ID。
    * @example `FP-3535FE0BE5224A47`
    */ "ProjectId": string;
    /**
    * 页码。
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 每页数量。
    * @example `20`
    */ "PageSize"?: number;
}
export { ListFlowProjectUserRequest };