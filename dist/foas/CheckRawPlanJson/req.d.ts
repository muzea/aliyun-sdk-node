interface CheckRawPlanJsonRequest {
    /**
    * 集团内用户使用： cn-hangzhou-pre 公共云预发； cn-hangzhou-internal 集团内生产； cn-hangzhou-internal-pre 集团内预发；
    * @example `cn-hangzhou-pre`
    */ "RegionId"?: string;
    /**
    * 单个作业名称
    * @example `job1`
    */ "jobName": string;
    /**
    * 当使用CheckRawPlanJson发送请求后，会返回一个sessionId，将该sessionId填在此处
    * @example `j6b43mm10nnzywsixmeh8maflgt6xq5afyeuflow3fravqlby0udi605mi7sty2pem2w9nysqiztag5je4esvmgq04pdcazgdthy3u5riy6na0fz6fmgph1k6b62bvjs7kqorn69ujsk0`
    */ "sessionId": string;
    /**
    * 项目名称
    * @example `project1`
    */ "projectName": string;
}
export { CheckRawPlanJsonRequest };