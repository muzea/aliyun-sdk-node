interface CreateAntChainContractProjectRequest {
    /**
    * 区域ID
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    /**
    * 项目名称
    * @example `projectname`
    */ "ProjectName": string;
    /**
    * 项目版本
    * @example `v1.0.0`
    */ "ProjectVersion": string;
    /**
    * 联盟ID
    * @example `DV80nJXq`
    */ "ConsortiumId": string;
    /**
    * 工程描述
    * @example `project description`
    */ "ProjectDescription"?: string;
}
export { CreateAntChainContractProjectRequest };