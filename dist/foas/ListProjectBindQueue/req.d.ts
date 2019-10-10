interface ListProjectBindQueueRequest {
    /**
    * 集团内用户使用： cn-hangzhou-pre 公共云预发； cn-hangzhou-internal 集团内生产； cn-hangzhou-internal-pre 集团内预发；
    * @example `cn-hangzhou-pre`
    */ "RegionId"?: string;
    /**
    * 项目名称
    * @example `project1`
    */ "projectName": string;
    /**
    * 集群ID
    * @example `d6wxwo5tnrmuamx2ly3m7vkz`
    */ "clusterId"?: string;
    /**
    * 队列名称
    * @example `root.default`
    */ "queueName"?: string;
}
export { ListProjectBindQueueRequest };