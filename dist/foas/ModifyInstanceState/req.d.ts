interface ModifyInstanceStateRequest {
    /**
    * 集团内用户使用： cn-hangzhou-pre 公共云预发； cn-hangzhou-internal 集团内生产； cn-hangzhou-internal-pre 集团内预发；
    * @example `cn-hangzhou-pre`
    */ "RegionId"?: string;
    /**
    * 作业名称
    * @example `job1`
    */ "jobName": string;
    /**
    * InstanceID，流作业只有一个运行实例，此处填-1L，指在线上运行的，批作业可以通过ListInstance接口或者Startjob接口获得
    * @example `-1`
    */ "instanceId": number;
    /**
    * 项目名称
    * @example `project1`
    */ "projectName": string;
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
    * 作业恢复时使用，确认是否使用最新配置。其他情况使用该参数无效
    * @example `true`
    */ "isFlush"?: boolean;
}
export { ModifyInstanceStateRequest };