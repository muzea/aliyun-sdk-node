interface GetRawPlanJsonRequest {
    /**
    * 集团内用户使用： cn-hangzhou-pre 公共云预发； cn-hangzhou-internal 集团内生产； cn-hangzhou-internal-pre 集团内预发；
    * @example `cn-hangzhou-pre`
    */ "RegionId"?: string;
    /**
    * 作业名称
    * @example `job1`
    */ "jobName": string;
    /**
    * 项目名称
    * @example `project1`
    */ "projectName": string;
    /**
    * 是否开启智能调优，开启或根据作业历史metric，生成一份执行计划；不开启则使用默认执行计划
    * @example `true`
    */ "autoconfEnable"?: boolean;
    /**
    * 期望cpu数
    * @example `1`
    */ "expectedCore"?: number;
    /**
    * 期望内存
    * @example `4`
    */ "expectedGB"?: number;
}
export { GetRawPlanJsonRequest };