interface DeactiveFlowLogRequest {
    /**
    * 流日志的所属地域。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 流日志ID。
    * @example `flowlog-m5evbtbpt****`
    */ "FlowLogId": string;
    /**
    * 云企业网实例ID。
    * @example `cen-7qthudw0ll6jmc****`
    */ "CenId": string;
    /**
    * @example `111`
    */ "OwnerId"?: number;
    /**
    * @example `111`
    */ "ClientToken"?: string;
}
export { DeactiveFlowLogRequest };