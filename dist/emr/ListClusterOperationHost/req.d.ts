interface ListClusterOperationHostRequest {
    /**
    * 地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 集群ID。
    * @example `DF202AC2-5D5D-4288-B608-B7B1595B5C7C`
    */ "ClusterId": string;
    /**
    * 操作历史ID。
    * @example `111`
    */ "OperationId": string;
    /**
    * 状态。
    * @example `SUCCESS`
    */ "Status"?: string;
    /**
    * 分页查询的查询页码。
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 分页查询的每页记录数。
    * @example `100`
    */ "PageSize"?: number;
}
export { ListClusterOperationHostRequest };