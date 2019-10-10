interface ListResourcePoolRequest {
    /**
    * 地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 集群ID。
    * @example `C-EBD62A703A43****`
    */ "ClusterId": string;
    /**
    * 资源池类型，合法值：CAPACITY_SCHEDULER、FAIR_SCHEDULER。
    * @example `CAPACITY_SCHEDULER`
    */ "PoolType"?: string;
    /**
    * 分页查询的页码。
    * @example `100`
    */ "PageNumber"?: number;
    /**
    * 分页查询的每页记录数。
    * @example `50`
    */ "PageSize"?: number;
}
export { ListResourcePoolRequest };