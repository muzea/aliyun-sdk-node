interface DescribeUisNodesRequest {
    /**
    * 节点实例所属的实例的地域。
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    /**
    * 要查询的节点所属的实例的ID。
    * @example `UIS-xxxbtfk761c670ok9****`
    */ "UisId"?: string;
    "OwnerId"?: number;
    /**
    * 要查询的节点实例ID，如果不指定则查询指定实例关联的节点实例。
    * @example `UISNODE-xxxc4dacp9wal2jx6****`
    */ "UisNodeId"?: string;
    /**
    * 节点实例的名称。
    * @example `node_name1`
    */ "Name"?: string;
    /**
    * 节点实例的状态：
    * - **active**：可用
    * - **creating**：创建中
    * @example `active`
    */ "Status"?: string;
    /**
    * 列表的页码，默认值为**1**。
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 分页查询时每页的行数，最大值为**50**，默认值为**10**。
    * @example `10`
    */ "PageSize"?: number;
    /**
    * 客户端token，用于保证请求的幂等性。
    * 由客户端生成该参数值，要保证在不同请求间唯一，最大不值过64个 ASCII 字符。
    * @example `d7d24a21-f4ba-4454-9173-b3828dae492b`
    */ "ClientToken"?: string;
}
export { DescribeUisNodesRequest };