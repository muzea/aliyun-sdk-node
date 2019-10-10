interface ModifyMasterSpecRequest {
    /**
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    /**
    * 集群ID
    * @example `cmy99ugusuco66x9qc6knqms`
    */ "clusterId": string;
    /**
    * master机器型号
    * @example `Ecs_4c16g`
    */ "masterTargetModel"?: string;
}
export { ModifyMasterSpecRequest };