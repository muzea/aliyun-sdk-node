interface ListFlowNodeInstanceContainerStatusRequest {
    /**
    * 区域 ID
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 项目 ID
    * @example `7A1018ADE9179EE1`
    */ "ProjectId": string;
    /**
    * 节点实例 ID
    * @example `FNI-FE4BD156E939CF1F`
    */ "NodeInstanceId": string;
    /**
    * 页码
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 每页数量
    * @example `20`
    */ "PageSize"?: number;
}
export { ListFlowNodeInstanceContainerStatusRequest };