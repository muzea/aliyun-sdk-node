interface UpdateAntChainContractProjectRequest {
    /**
    * 地域ID
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    /**
    * 合约工程ID
    * @example `bDXK1b8Z`
    */ "ProjectId": string;
    /**
    * 合约工程名称
    * @example `更新合约工程名称`
    */ "ProjectName"?: string;
    /**
    * 合约工程版本
    * @example `v1.1.1`
    */ "ProjectVersion"?: string;
    /**
    * 合约工程描述
    * @example `合约工程的版本描述`
    */ "ProjectDescription"?: string;
}
export { UpdateAntChainContractProjectRequest };