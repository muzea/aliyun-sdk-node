interface DescribeClusterOperationHostTaskLogRequest {
    /**
    * 区域 ID
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 集群 ID
    * @example `C-F32FB31D82954C64`
    */ "ClusterId": string;
    /**
    * 操作历史的 ID，可从 ListClusterOperation 接口的返回值中获取
    * @example `11123`
    */ "OperationId": string;
    /**
    * 待查询日志的主机 ID，可从 ListClusterOperationHost 接口的返回值中获取
    * @example `41008`
    */ "HostId": string;
    /**
    * 待查询的task的ID信息，可从ListClusterOperationHostTask接口的返回中获取
    * @example `1098803`
    */ "TaskId": string;
    /**
    * Task 的状态信息
    * @example `SUCCESS`
    */ "Status"?: string;
}
export { DescribeClusterOperationHostTaskLogRequest };