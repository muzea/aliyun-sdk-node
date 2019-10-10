interface DeleteQueueRequest {
    /**
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    /**
    * 集群ID
    * @example `cmy99ugusuco66x9qc6knqms`
    */ "clusterId": string;
    /**
    * queue名称
    * @example `root.default`
    */ "queueName"?: string;
}
export { DeleteQueueRequest };