interface ListClusterHostComponentRequest {
    /**
    * 地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 集群ID。
    * @example `C-F32FB31D82954C64`
    */ "ClusterId": string;
    /**
    * 主机实例ID，一般是** ecsId**。
    * @example `i-xxx`
    */ "HostInstanceId"?: string;
    /**
    * 主机名。
    * @example `emr-worker-1`
    */ "HostName"?: string;
    /**
    * 服务名。
    * @example `TEZ`
    */ "ServiceName"?: string;
    /**
    * 待查询的组件名称。
    * @example `TezInit`
    */ "ComponentName"?: string;
    /**
    * 待查询的组件状态。
    * @example `STARTED`
    */ "ComponentStatus"?: string;
    /**
    * 主机角色。
    * @example `CORE`
    */ "HostRole"?: string;
    /**
    * 分页查询的查询页码。
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 分页查询的每页记录数。
    * @example `100`
    */ "PageSize"?: number;
}
export { ListClusterHostComponentRequest };