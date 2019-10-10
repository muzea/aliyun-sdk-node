interface CreateFlowProjectUserRequest {
    /**
    * 地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 项目ID。
    * @example `FP-257A173659F59685`
    */ "ProjectId": string;
    "User": string[];
}
export { CreateFlowProjectUserRequest };