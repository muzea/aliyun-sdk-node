interface CloneFlowRequest {
    /**
    * 区域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 克隆的目标工作流ID。
    * @example `F-8C1EB0C6452A82A1`
    */ "Id": string;
    /**
    * 克隆的目标工作流所属的项目ID。
    * @example `FP-53C4D36FC7310AC0`
    */ "ProjectId": string;
}
export { CloneFlowRequest };