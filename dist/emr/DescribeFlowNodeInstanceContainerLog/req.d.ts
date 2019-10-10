interface DescribeFlowNodeInstanceContainerLogRequest {
    /**
    * 地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 作业的Application ID。
    * @example `application_1542620905989_0010`
    */ "AppId": string;
    /**
    * Conintainer ID。
    * @example `container_1542620905989_0010_01_000001`
    */ "ContainerId": string;
    /**
    * Log 名称：
    * - stderr
    * - syslog
    * - stdout
    * @example `stderr`
    */ "LogName": string;
    /**
    * 项目ID。
    * @example `FP-BECB9D35CB12****`
    */ "ProjectId": string;
    /**
    * 节点实例ID。
    * @example `FNI-0D2534B3AB67****`
    */ "NodeInstanceId": string;
    /**
    * 偏移。
    * @example `0`
    */ "Offset"?: number;
    /**
    * 长度，最大1000。
    * @example `200`
    */ "Length"?: number;
}
export { DescribeFlowNodeInstanceContainerLogRequest };