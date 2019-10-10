interface ModifyDBInstanceMonitorRequest {
    "RegionId"?: string;
    /**
    * 实例ID。
    * @example `rm-uf6wjk5xxxxxxx`
    */ "DBInstanceId": string;
    /**
    * 监控的采集间隔，取值：
    * * **5**；
    * * **60**；
    * * **300**。
    * 单位：秒。
    * @example `60`
    */ "Period": string;
    "OwnerId"?: number;
    /**
    * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
    * @example `ETnLKlblzczshOTUbOCzxxxxxxx`
    */ "ClientToken"?: string;
}
export { ModifyDBInstanceMonitorRequest };