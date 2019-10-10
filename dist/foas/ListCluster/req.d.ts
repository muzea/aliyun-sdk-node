interface ListClusterRequest {
    /**
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    /**
    * 集群ID
    * @example `cmy99ugusuco66x9qc6knqms`
    */ "clusterId"?: string;
    /**
    * 集群名称
    * @example `xxxxx`
    */ "displayName"?: string;
    /**
    * 集群状态 集群正在创建 STARTING； 集群正常运行 RUNNING； 集群正在扩容（增加slave节点数） EXPANDING； 集群正在变配（提交或者降低master型号） UPGRADING； 集群正在销毁 DESTROYING； 集群已经被销毁 DESTROYED； 正在缩容 REDUCING； 集群维护中 MAINTAINING；
    * @example `RUNNING`
    */ "state"?: string;
    /**
    * 集群所属地区
    * @example `cn-hangzhou`
    */ "region"?: string;
    /**
    * 分页选项，每页的集群数
    * @example `1`
    */ "pageSize"?: number;
    /**
    * 分页选项，第几页
    * @example `2`
    */ "pageIndex"?: number;
}
export { ListClusterRequest };