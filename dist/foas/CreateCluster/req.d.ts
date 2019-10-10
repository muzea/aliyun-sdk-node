interface CreateClusterRequest {
    /**
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    /**
    * 用户下单生成的实例ID
    * @example `blinkonecs_xxxxxxx`
    */ "orderId"?: string;
    /**
    * 可用区，region-区号
    * @example `cn-shanghai-f`
    */ "zoneId"?: string;
    /**
    * 用户创建的集群需要命名的名称
    * @example `cluster_name`
    */ "displayName"?: string;
    /**
    * 集群描述
    * @example `xxxxxxx`
    */ "description"?: string;
    /**
    * 用户oss的bucket名称
    * @example `xxxxxx`
    */ "userOssBucket"?: string;
    /**
    * 用户需要集群所在vpc名称，注意实时计算需要联通上下游，所以必须和上下游在同一个vpc内，否则会造成无法联通的问题
    * @example `vpc-xxxxx`
    */ "userVpcId"?: string;
    /**
    * 用户指定的交换机名称
    * @example `vsw-xxxxx`
    */ "userVSwitch"?: string;
}
export { CreateClusterRequest };