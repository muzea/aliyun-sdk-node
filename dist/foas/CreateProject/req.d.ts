interface CreateProjectRequest {
    /**
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    /**
    * 仅共享模式用户需要填写，需要填写共享模式实例ID
    * @example `stream-xxxxxx`
    */ "orderId"?: string;
    /**
    * 集群类型：独享集群 cell；共享集群 public
    * @example `public`
    */ "deployType"?: string;
    /**
    * 集群ID
    * @example `cmy99ugusuco66x9qc6knqms`
    */ "clusterId"?: string;
    /**
    * 主账号id
    * @example `xxxxx`
    */ "managerIds"?: string;
    /**
    * 项目描述
    * @example `xxxxxx`
    */ "description"?: string;
    /**
    * 项目名称
    * @example `xxxxxx`
    */ "name"?: string;
}
export { CreateProjectRequest };