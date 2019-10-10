interface DescribeFlowNodeInstanceLauncherLogRequest {
    /**
    * 地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 项目ID。
    * @example `FP-BECB9D35CB12****`
    */ "ProjectId": string;
    /**
    * 节点实例ID。
    * @example `FNI-0D2534B3AB67****`
    */ "NodeInstanceId": string;
    /**
    * 起始偏移。
    * @example `200`
    */ "Start"?: number;
    /**
    * 长度，最大限制为1000。
    * @example `100`
    */ "Lines"?: number;
    /**
    * 已过期。
    * @example `200`
    */ "Offset"?: number;
    /**
    * 已过期。
    * @example `100`
    */ "Length"?: number;
    /**
    * 是否倒序。
    * @example `true`
    */ "Reverse"?: boolean;
    /**
    * 查询开始时间。
    * @example `1540796236000`
    */ "StartTime"?: number;
    /**
    * 查询结束时间。
    * @example `1540796248000`
    */ "EndTime"?: number;
}
export { DescribeFlowNodeInstanceLauncherLogRequest };