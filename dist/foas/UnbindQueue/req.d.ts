interface UnbindQueueRequest {
    /**
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    /**
    * 集群ID
    * @example `cmy99ugusuco66x9qc6knqms`
    */ "clusterId": string;
    /**
    * queue名称
    * @example `q1`
    */ "queueName": string;
    /**
    * 项目名称
    * @example `p1`
    */ "projectName": string;
}
export { UnbindQueueRequest };