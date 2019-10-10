interface GetInstanceRequest {
    /**
    * 集团内用户使用： cn-hangzhou-pre 公共云预发； cn-hangzhou-internal 集团内生产； cn-hangzhou-internal-pre 集团内预发；
    * @example `cn-hangzhou-pre`
    */ "RegionId"?: string;
    /**
    * 作业名称
    * @example `job1`
    */ "jobName": string;
    /**
    * InstanceID，可以通过ListInstance接口或者Startjob接口获得
    * @example `123`
    */ "instanceId": number;
    /**
    * 项目名称
    * @example `project1`
    */ "projectName": string;
}
export { GetInstanceRequest };