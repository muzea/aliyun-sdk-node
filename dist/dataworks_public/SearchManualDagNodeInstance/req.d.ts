interface SearchManualDagNodeInstanceRequest {
    /**
    * 地域ID。
    * @example `cn-shanghai`
    */ "RegionId"?: string;
    /**
    * 手动业务流程运行实例ID，**createManualDag**接口返回的值。
    * @example `123434234`
    */ "DagId": number;
    /**
    * 项目名称。
    * @example `test_odps_project`
    */ "ProjectName": string;
}
export { SearchManualDagNodeInstanceRequest };