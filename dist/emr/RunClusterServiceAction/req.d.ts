interface RunClusterServiceActionRequest {
    /**
    * 地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 集群ID。
    * @example `C-F32FB31D8295****`
    */ "ClusterId": string;
    /**
    * 服务名称。
    * @example `TEZ`
    */ "ServiceName": string;
    /**
    * Action名。
    * @example `STOP`
    */ "ServiceActionName": string;
    "HostGroupIdList"?: string[];
    /**
    * 主机ID列表，以英文半角逗号（,）分割。
    * @example `""`
    */ "HostIdList"?: string;
    /**
    * 在Action为**CUSTOM_COMMAND**时，需要指定，例如，**refreshQueues**。
    * @example `""`
    */ "CustomCommand"?: string;
    /**
    * 组件名称列表，用英文半角逗号（,）分割。
    * @example `Tomcat`
    */ "ComponentNameList"?: string;
    /**
    * 本次操作的备注信息。
    * @example `test run action`
    */ "Comment"?: string;
    /**
    * 是否滚动操作。
    * @example `true`
    */ "IsRolling"?: boolean;
    /**
    * 任务执行策略，枚举值：
    * - FAILED_BLOCK
    * - FAILED_CONTINUE
    * @example `FAILED_BLOCK`
    */ "ExecuteStrategy"?: string;
    /**
    * 运行自定义Action时的可选配置参数，目前只支持**kafka的innode_disks_balance**。
    * @example `""`
    */ "CustomParams"?: string;
    /**
    * 每个任务的执行时间间隔，IsRolling为**true**时可以指定。
    * @example `60`
    */ "Interval"?: number;
    /**
    * 每个批次在多少个主机上执行，IsRolling为**true**时可以指定。
    * @example `2`
    */ "NodeCountPerBatch"?: number;
    /**
    * 预留字段。
    * @example `5`
    */ "TotlerateFailCount"?: number;
    /**
    * 为**true**时，只对修改了配置项的主机执行命令。
    * @example `true`
    */ "OnlyRestartStaleConfigNodes"?: boolean;
    /**
    * 开启维护模式。
    * @example `false`
    */ "TurnOnMaintenanceMode"?: boolean;
}
export { RunClusterServiceActionRequest };