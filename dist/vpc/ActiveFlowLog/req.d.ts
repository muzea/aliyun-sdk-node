interface ActiveFlowLogRequest {
    /**
    * 流日志的所属地域。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
    * @example `cn-qingdao`
    */ "RegionId": string;
    /**
    * 流日志ID。
    * @example `fl-m5evbtbptxxxxxxxxxxxx`
    */ "FlowLogId": string;
    /**
    * @example `111`
    */ "OwnerId"?: number;
}
export { ActiveFlowLogRequest };