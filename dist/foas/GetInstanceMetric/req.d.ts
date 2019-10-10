interface GetInstanceMetricRequest {
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
    * 使用特定json来获取metric：
    * start：metric开始时间（使用13位时间戳，精确到毫秒）；
    * limit：[取各条线值类型：max,avg,min]:[取值方式：bottom,above,sample]:[数目]；
    * end：metric结束时间（使用13位 时间戳，精确到毫秒）；
    * downsample：下采样方式 [时间(秒)]-[取值方式：max,avg,min]；
    * metric：blink.[项目名称].[作业名称].[指标名称]。常用指标名称如下：业务延时：delay；
    * granularity：采样时间（每隔多少秒取一个点，需要根据start和end时长来取，点数太多会造成调用超时）；
    * aggregator：聚合方式（按照采样时间将底层的点聚合后输出为一个点，聚合方式有最大值max，最小值min，平均值avg三种）
    * @example `{start: 1547637510000, limit: avg:sample:50, end: 1547638420000, queries: [{  downsample: 20s-avg,  metric: blink.bayes_team.huayuan_test_job.delay,  granularity: 20s, aggregator: max }, { downsample: 20s-avg, metric: blink.bayes_team.huayuan_test_job.fetched_delay, granularity: 20s, aggregator: max }] }`
    */ "metricJson"?: string;
    /**
    * InstanceID，流作业只有一个运行实例，此处填-1L，指在线上运行的，批作业可以通过ListInstance接口或者Startjob接口获得
    * @example `-1`
    */ "instanceId"?: number;
}
export { GetInstanceMetricRequest };