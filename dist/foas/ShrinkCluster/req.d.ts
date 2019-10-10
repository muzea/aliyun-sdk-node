interface ShrinkClusterRequest {
    /**
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    /**
    * 集群ID
    * @example `cmy99ugusuco66x9qc6knqms`
    */ "clusterId": string;
    /**
    * 机器实例ID，代表你要缩容的机器是哪台，多个逗号分割
    * @example `xxxxxx`
    */ "instanceIds"?: string;
    /**
    * 缩容后保留slave的台数，需要大于等于2
    * @example `2`
    */ "modelTargetCount"?: string;
}
export { ShrinkClusterRequest };