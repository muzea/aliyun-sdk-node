interface ListFlowProjectRequest {
    /**
    * 地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 项目ID。
    * @example `FP-7A1018ADE9179EE1`
    */ "ProjectId"?: string;
    /**
    * 名称。
    * @example `my_project`
    */ "Name"?: string;
    /**
    * 页码。
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 每页数量。
    * @example `20`
    */ "PageSize"?: number;
}
export { ListFlowProjectRequest };