interface DescribeFlowLogsRequest {
    /**
    *  流日志的所属地域ID。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
    * @example `cn-qingdao`
    */ "RegionId": string;
    /**
    * @example `111`
    */ "OwnerId"?: number;
    /**
    * 流日志名称。长度为2-128个字符，必须以字母或中文开头，可包含数字，点号（.），下划线（_）和短横线（-）。但不能以`http://`或`https://`开头。
    * @example `myFlowlog`
    */ "FlowLogName"?: string;
    /**
    * 流日志ID。
    * @example `flowlog-m5evbtbptxxxxxxxxxxxx`
    */ "FlowLogId"?: string;
    /**
    * @example `111`
    */ "Description"?: string;
    /**
    * 要捕获的流量的资源类型：
    *
    * - NetworkInterface：弹性网卡
    *
    * - VSwitch：交换机内的所有弹性网卡
    *
    * - VPC：专有网络内的所有弹性网卡
    * @example `NetworkInterface`
    */ "ResourceType"?: string;
    /**
    * 要捕获的流量的资源ID。
    * @example `eni-askldfasxxxxxxxx`
    */ "ResourceId"?: string;
    /**
    * 采集的流量类型：
    *
    * - All：全部流量
    *
    * - Allow：访问控制允许的流量
    *
    * - Drop：访问控制拒绝的流量
    * @example `All`
    */ "TrafficType"?: string;
    /**
    * 存储捕获到的流量的Project。
    * @example `FlowLogProject`
    */ "ProjectName"?: string;
    /**
    * 存储捕获到的流量的LogStore。
    * @example `FlowLogStore`
    */ "LogStoreName"?: string;
    /**
    * @example `111`
    */ "Status"?: string;
    /**
    * @example `111`
    */ "PageNumber"?: number;
    /**
    * @example `111`
    */ "PageSize"?: number;
}
export { DescribeFlowLogsRequest };