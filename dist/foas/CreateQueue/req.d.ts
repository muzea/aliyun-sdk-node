interface CreateQueueRequest {
    /**
    * @example `cn-shanghai`
    */ "RegionId"?: string;
    /**
    * 集群ID
    * @example `cmy99ugusuco66x9qc6knqms`
    */ "clusterId": string;
    /**
    * queue的名称
    * @example `root.default`
    */ "queueName"?: string;
    /**
    * queue拥有的最大cpu
    * @example `4`
    */ "maxVcore"?: number;
    /**
    * queue拥有的最大内存
    * @example `16`
    */ "maxMemMB"?: number;
    /**
    * gpu处理硬件块数
    * @example `1`
    */ "gpu"?: number;
}
export { CreateQueueRequest };