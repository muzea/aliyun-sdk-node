interface DestroyInstanceRequest {
    "RegionId"?: string;
    "OwnerId"?: number;
    /**
    * 实例ID。
    * > **InstanceId**参数与**DBInstanceId**参数作用相同，只需选择一个传入即可。
    * @example `dds-bpxxxxxxxx`
    */ "InstanceId"?: string;
    /**
    * 实例ID。
    * > **InstanceId**参数与**DBInstanceId**参数作用相同，只需选择一个传入即可。
    * @example `dds-bpxxxxxxxx`
    */ "DBInstanceId"?: string;
    /**
    * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
    * @example `ETnLKlblzczshOTUbOCzxxxxxxxxxx`
    */ "ClientToken"?: string;
}
export { DestroyInstanceRequest };