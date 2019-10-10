interface DescribeSubConnectionsRequest {
    "RegionId"?: string;
    /**
    * 接入点ID。
    * @example `UISNODE-xxxbink187cqsgfn****`
    */ "UisNodeId": string;
    "OwnerId"?: number;
    /**
    * 接入点IP。
    * @example `140.206.225.XX`
    */ "IP"?: string;
    /**
    * 当前页码。
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 每页数量。
    * @example `10`
    */ "PageSize"?: number;
}
export { DescribeSubConnectionsRequest };