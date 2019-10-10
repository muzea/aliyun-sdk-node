interface ListClustersRequest {
    /**
    * 地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    "ClusterTypeList"?: string[];
    /**
    * 集群创建类型。可选值：
    * - ON-DEMAND。
    * - MANUAL。
    * @example `ON-DEMAND`
    */ "CreateType"?: string;
    /**
    * 机器类型。
    * @example `ECS`
    */ "MachineType"?: string;
    "StatusList"?: string[];
    /**
    * 是否倒序排列。
    * @example `false`
    */ "IsDesc"?: boolean;
    /**
    * 托管类型，标识集群是全托管还是半托管。枚举值：
    * - HALF_MANAGED。
    * - FULLY_MANAGED。
    * @example `HALF_MANAGED`
    */ "DepositType"?: string;
    /**
    * 分页分数，从1开始。
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 分页大小。
    * @example `10`
    */ "PageSize"?: number;
    /**
    * 是否查询默认状态为初始化中、等待构建、空闲、运行中、释放中、创建失败的集群。
    * @example `true`
    */ "DefaultStatus"?: boolean;
}
export { ListClustersRequest };