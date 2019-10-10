interface DescribeCenChildInstanceRouteEntriesRequest {
    "RegionId"?: string;
    /**
    * 云企业网ID。
    * @example `cen-7qthudw0ll6jmc****`
    */ "CenId": string;
    /**
    * 网络实例ID。
    * @example `vpc-bp18sth14qii3pnvo****`
    */ "ChildInstanceId": string;
    /**
    * 网络实例的类型，取值：
    * - **VPC**：专有网络。
    * - **VBR**：边界路由器。
    * - **CCN**：云连接网。
    * @example `vpc`
    */ "ChildInstanceType": string;
    /**
    * 网络实例所在的地域。
    * @example `cn-hangzhou`
    */ "ChildInstanceRegionId": string;
    "OwnerId"?: number;
    /**
    * 路由的状态，取值：
    * - **Active**：可用。
    * - **Backup**：备份。
    * - **Rejected**：拒绝。
    * - **Prohibited**：禁止。
    * - **All**：所有状态。
    * @example `Active`
    */ "Status"?: string;
    /**
    * 列表的页码，默认值为**1**。
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 分页查询时每页的行数，最大值为**50**，默认值为**10**。
    * @example `10`
    */ "PageSize"?: number;
}
export { DescribeCenChildInstanceRouteEntriesRequest };