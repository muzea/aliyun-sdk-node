interface DescribeMonitoringAgentHostsRequest {
    "RegionId"?: string;
    /**
    * 模糊搜索关键字。
    * @example `host1`
    */ "KeyWord"?: string;
    /**
    * 主机名称。
    * @example `hostNam1`
    */ "HostName"?: string;
    /**
    * 实例ID。
    * @example `i-a3d1q1pm2f9yr29e****`
    */ "InstanceIds"?: string;
    /**
    * 序列号搜索。
    * @example `a1ab31a3-1234-40f2-9e95-c8caa8f0****`
    */ "SerialNumbers"?: string;
    /**
    * 页数。
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 每页显示记录条数。
    * @example `10`
    */ "PageSize"?: number;
    /**
    * 实例的regionId。
    * @example `cn-hangzhou`
    */ "InstanceRegionId"?: string;
}
export { DescribeMonitoringAgentHostsRequest };