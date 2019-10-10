interface ExpandClusterRequest {
    /**
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    /**
    * 集群ID
    * @example `cmy99ugusuco66x9qc6knqms`
    */ "clusterId": string;
    /**
    * 机器型号,目前不支持混部，只能和已有slave机型一致，支持混部后可以填其他机型
    * 4核机器  Ecs_4c16g;
    * 8核机器  Ecs_8c32g；
    * 16核机器  Ecs_16c64g；
    * 24核机器  Ecs_24c96g；
    * 32核机器  Ecs_32c128g；
    * 56核机器  Ecs_56c224g；
    * 64核机器  Ecs_64c256g；
    * @example `Ecs_4c16g`
    */ "model"?: string;
    /**
    * 扩容到多少台
    * @example `5`
    */ "count"?: number;
    /**
    * 交换机名称，当扩容提示vswitch不足的时候才需要填写，一般不需要填写
    * @example `vsw-xxxxxx`
    */ "userVSwitch"?: string;
}
export { ExpandClusterRequest };