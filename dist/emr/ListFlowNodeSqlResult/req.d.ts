interface ListFlowNodeSqlResultRequest {
    /**
    * 地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 项目ID。
    * @example `FP-7A1018ADE917****`
    */ "ProjectId": string;
    /**
    * 节点实例ID。
    * @example `FE4BD156E939****`
    */ "NodeInstanceId": string;
    /**
    * 第几个SQL结果。
    * @example `0`
    */ "SqlIndex"?: number;
    /**
    * 偏移。
    * @example `0`
    */ "Offset"?: number;
    /**
    * 长度。
    * @example `100`
    */ "Length"?: number;
}
export { ListFlowNodeSqlResultRequest };