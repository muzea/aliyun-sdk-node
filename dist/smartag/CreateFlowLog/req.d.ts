interface CreateFlowLogRequest {
    /**
    * 流日志的地域ID。
    * @example `cn-shanghai`
    */ "RegionId": string;
    /**
    * 流日志实例描述。
    * @example `创建流日志`
    */ "Description"?: string;
    /**
    * 流日志实例名称。
    * @example `sag-flowlog-1`
    */ "Name"?: string;
    /**
    * 非活跃流输出间隔，默认15s。
    * @example `15`
    */ "InactiveAging"?: number;
    /**
    * 流日志输出类型：
    * - **sls**：流日志存储在阿里云日志服务。
    * - **netflow**：流日志存储在您配置的netflow服务器。
    * - **all**：流日志同时存储在阿里云日志服务和您配置的netflow服务器。
    * @example `sls`
    */ "OutputType"?: string;
    /**
    * 日志服务的地域ID，输出类型为sls时填入。
    * @example `cn-hanghzou`
    */ "SlsRegionId"?: string;
    /**
    * 日志服务的 Project，输出类型为sls时填入。
    * @example `sag-flowlog-shanghai`
    */ "ProjectName"?: string;
    /**
    * 日志服务的日志库，当输出类型为sls时填入。
    * @example `config-operation-log`
    */ "LogstoreName"?: string;
    /**
    * 流日志输出的服务器地址，输出类型是netflow时填入。
    * @example `192.168.0.2`
    */ "NetflowServerIp"?: string;
    /**
    * 流日志输出的服务器端口，默认值为**9995**，输出类型是netflow时填入。
    * @example `9995`
    */ "NetflowServerPort"?: number;
    /**
    * 流日志输出时使用的Netflow协议版本号，可选**V5**、**V9**和**V10**，默认**V9**，输出类型是netflow时填入。
    * @example `V9`
    */ "NetflowVersion"?: string;
    "OwnerId"?: number;
    /**
    * 活跃流输出间隔，默认300s。
    * @example `300`
    */ "ActiveAging"?: number;
}
export { CreateFlowLogRequest };