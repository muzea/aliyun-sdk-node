interface CloneFlowJobRequest {
    /**
    * 区域 ID
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 克隆的目标作业 ID
    * @example `FJ-244582F1934CFC77`
    */ "Id": string;
    /**
    * 克隆的目标作业所属项目
    * @example `FP-C62EEC30F773B1A7`
    */ "ProjectId": string;
}
export { CloneFlowJobRequest };