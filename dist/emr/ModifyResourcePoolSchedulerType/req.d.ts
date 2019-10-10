interface ModifyResourcePoolSchedulerTypeRequest {
    /**
    * 地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 集群ID。
    * @example `C-EBD62A703A430E23`
    */ "ClusterId": string;
    /**
    * 资源调度类型。
    * @example `CAPACITY_SCHEDULER`
    */ "SchedulerType": string;
}
export { ModifyResourcePoolSchedulerTypeRequest };