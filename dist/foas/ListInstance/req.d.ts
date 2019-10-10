interface ListInstanceRequest {
    /**
    * 集团内用户使用： cn-hangzhou-pre 公共云预发； cn-hangzhou-internal 集团内生产； cn-hangzhou-internal-pre 集团内预发；
    * @example `cn-hangzhou-pre`
    */ "RegionId"?: string;
    /**
    * 作业类型：FLINK_STREAM（流作业）；FLINK_BATCH（批作业）
    * @example `FLINK_STREAM`
    */ "jobType": string;
    /**
    * 项目名称
    * @example `project1`
    */ "projectName": string;
    /**
    * 作业名称
    * @example `job1`
    */ "jobName"?: string;
    /**
    * 启动时间范围上限，和启动时间下限配合使用，搜索启动时间在该范围内的运行实例。使用13位时间戳，单位到毫秒
    * @example `1548397575000`
    */ "startBeginTs"?: number;
    /**
    * 启动时间范围下限，和启动时间上限配合使用，搜索启动时间在该范围内的运行实例。使用13位时间戳，单位到毫秒
    * @example `1548397575000`
    */ "startEndTs"?: number;
    /**
    * 停止时间范围上限，和停止时间下限配合使用，搜索停止时间在该范围内的运行实例。使用13位时间戳，单位到毫秒
    * @example `1548397575000`
    */ "endBeginTs"?: number;
    /**
    * 停止时间范围下限，和停止时间上限配合使用，搜索停止时间在该范围内的运行实例。使用13位时间戳，单位到毫秒
    * @example `1548397575000`
    */ "endEndTs"?: number;
    /**
    * api类型：DATASTREAM，SQL
    * @example `SQL`
    */ "apiType"?: string;
    /**
    * 期望状态：
    * RUNNING  运行中；
    * PAUSED   暂停；
    * TERMINATED  停止；
    * SUCCESS  成功（批作业）；
    * FAILED  失败（流作业）
    * @example `RUNNING`
    */ "expectState"?: string;
    /**
    * 实际运行状态：
    * RUNNING  运行中；
    * PAUSED   暂停；
    * TERMINATED  停止；
    * SUCCESS  成功（批作业）；
    * FAILED  失败（流作业）
    * @example `RUNNING`
    */ "actualState"?: string;
    /**
    * 是否搜索归档实例，默认搜索非归档实例。对于流作业来说，同时只存在一个实例，所以当作业启动或者恢复运行的时候，就生成了新的实例，旧实例会被归档；对于批作业，运行结束两天的实例会被归档
    * @example `true`
    */ "isArchived"?: boolean;
    /**
    * 分页选项，每页的实例数
    * @example `10`
    */ "pageSize"?: number;
    /**
    * 分页选项，第几页
    * @example `1`
    */ "pageIndex"?: number;
}
export { ListInstanceRequest };