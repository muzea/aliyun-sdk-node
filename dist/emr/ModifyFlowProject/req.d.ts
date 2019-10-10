interface ModifyFlowProjectRequest {
    /**
    * 地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 项目ID。
    * @example `FP-257A173659F59685`
    */ "ProjectId": string;
    /**
    * 项目名称。
    * @example `my_project`
    */ "Name"?: string;
    /**
    * 项目描述。
    * @example `my flow description`
    */ "Description"?: string;
}
export { ModifyFlowProjectRequest };