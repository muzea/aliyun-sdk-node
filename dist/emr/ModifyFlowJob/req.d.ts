interface ModifyFlowJobRequest {
    /**
    * 地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 项目ID。
    * @example `FP-257A173659F59685`
    */ "ProjectId": string;
    /**
    * 作业ID。
    * @example `FJ-BCCAE48B90CCB37B`
    */ "Id": string;
    /**
    * 作业的名称。
    * @example `my_shell_job`
    */ "Name"?: string;
    /**
    * 作业的描述。
    * @example `这是一个数据开发作业描述`
    */ "Description"?: string;
    /**
    * 失败策略，支持：
    * - CONTINUE（跳过）。
    * - STOP（停止工作流）。
    * @example `CONTINUE`
    */ "FailAct"?: string;
    /**
    * 最大重试次数，0 - 5。
    * @example `5`
    */ "MaxRetry"?: number;
    /**
    * 重试间隔 0-300（秒）。
    * @example `200`
    */ "RetryInterval"?: number;
    /**
    * 作业内容。
    * @example `ls -l`
    */ "Params"?: string;
    /**
    * 参数设置。
    * @example `{"date":"${yyyy-MM-dd}"}`
    */ "ParamConf"?: string;
    "CustomVariables"?: string;
    /**
    * 环境变量设置。
    * @example `{"key":"value"}`
    */ "EnvConf"?: string;
    /**
    * 运行配置：
    * - priority：优先级。
    * - userName：提交作业的Linux用户。
    * - memory：内存，单位为MB。
    * - cores：核数。
    * @example `{"priority":1,"userName":"hadoop","memory":2048,"cores":1}`
    */ "RunConf"?: string;
    /**
    * 监控配置，只有**SPARK_STREAMING**类型作业支持。
    * @example `{"inputs":[{"type":"KAFKA","clusterId":"C-1234567","topics":"kafka_topic","consumer.group":"kafka_consumer_group"}],"outputs":[{"type":"KAFKA","clusterId":"C-1234567","topics":"kafka_topic"}]}`
    */ "MonitorConf"?: string;
    /**
    * 模型模式，支持：YARN、LOCAL。
    * - YARN：将作业包装成一个launcher提交至YARN中执行。
    *  - LOCAL：作业直接在机器上以进程方式运行。
    * @example `YARN`
    */ "Mode"?: string;
    "ResourceList"?: string[];
    /**
    * 集群ID。
    * @example `C-A23BD131A862F184`
    */ "ClusterId"?: string;
    "AlertConf"?: string;
}
export { ModifyFlowJobRequest };