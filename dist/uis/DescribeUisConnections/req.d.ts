interface DescribeUisConnectionsRequest {
    /**
    * 地域ID。
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    "OwnerId"?: number;
    /**
    * 要查询的节点实例ID。
    * @example `UISNODE-xxxcp0zr5m2avmn2r****`
    */ "UisNodeId"?: string;
    /**
    * 要查看的隧道连接ID。
    * @example `UISCONN-xxxblu51boe75a1eb****`
    */ "UisConnectionId"?: string;
    /**
    * 列表的页码，默认值为**1**。
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 分页查询时每页的行数，最大值为**50**，默认值为**10**。
    * @example `10`
    */ "PageSize"?: number;
    "ClientToken"?: string;
}
export { DescribeUisConnectionsRequest };