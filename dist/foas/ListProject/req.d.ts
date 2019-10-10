interface ListProjectRequest {
    /**
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    /**
    * project名称
    * @example `p1`
    */ "name"?: string;
    /**
    * 集群类型：独享集群 cell；共享集群 public
    * @example `cell`
    */ "deployType"?: string;
    /**
    * 集群ID
    * @example `cmy99ugusuco66x9qc6knqms`
    */ "clusterId"?: string;
    /**
    * 地区
    * @example `cn-hangzhou`
    */ "region"?: string;
    /**
    * 分页属性，每页包含project数量
    * @example `10`
    */ "pageSize"?: number;
    /**
    * 分页属性，第几页
    * @example `1`
    */ "pageIndex"?: number;
}
export { ListProjectRequest };