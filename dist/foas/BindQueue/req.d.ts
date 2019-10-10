interface BindQueueRequest {
    /**
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    /**
    * 创建项目名称
    * @example `p1`
    */ "projectName": string;
    /**
    * 集群ID名称，不是集群名称
    * @example `集群ID`
    */ "clusterId"?: string;
    /**
    * 要绑定的Queue的名称
    * @example `queue1`
    */ "queueName"?: string;
}
export { BindQueueRequest };