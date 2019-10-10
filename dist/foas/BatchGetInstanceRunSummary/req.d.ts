interface BatchGetInstanceRunSummaryRequest {
    /**
    * 集团内用户使用：
    * - 公共云预发：cn-hangzhou-pre
    * - 集团内生产：cn-hangzhou-internal
    * - 集团内预发：cn-hangzhou-internal-pre
    * @example `cn-hangzhou-pre`
    */ "RegionId"?: string;
    /**
    * 作业名称，逗号（,）分隔。
    * @example `job1,job2`
    */ "jobNames": string;
    /**
    * 作业类型，批作业使用FLINK_BATCH；流作业使用FLINK_STREAM。
    * @example `FLINK_STREAM`
    */ "jobType": string;
    /**
    * 项目名称。
    * @example `test_project`
    */ "projectName": string;
}
export { BatchGetInstanceRunSummaryRequest };