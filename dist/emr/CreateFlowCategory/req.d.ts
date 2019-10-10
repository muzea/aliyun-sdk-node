interface CreateFlowCategoryRequest {
    /**
    * 地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 项目ID。
    * @example `F-48EB68215AEAE28D`
    */ "ProjectId": string;
    /**
    * 目录名称。
    * @example `myFolder`
    */ "Name": string;
    /**
    * 类型:
    * - FLOW（工作流）。
    * - JOB（作业）。
    * - ADHOC（临时查询）()
    * @example `FLOW`
    */ "Type": string;
    /**
    * 父目录ID, 为空时则默认为**root**目录。
    * @example `FC-AF08490649B8FD5E`
    */ "ParentId"?: string;
}
export { CreateFlowCategoryRequest };