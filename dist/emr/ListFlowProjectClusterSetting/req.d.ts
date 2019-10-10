interface ListFlowProjectClusterSettingRequest {
    /**
    * 地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 项目ID。
    * @example `FP-ED2F3E844FE383AA`
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
export { ListFlowProjectClusterSettingRequest };