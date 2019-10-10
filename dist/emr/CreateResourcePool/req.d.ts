interface CreateResourcePoolRequest {
    /**
    * 地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 资源池名称。
    * @example `default`
    */ "Name": string;
    /**
    * 集群ID。
    * @example `C-0E995C0EE7E5ECB3`
    */ "ClusterId": string;
    /**
    * 资源池类型，枚举值：CAPACITY_SCHEDULER、FAIR_SCHEDULER。
    * @example `CAPACITY_SCHEDULER`
    */ "PoolType": string;
    /**
    * 是否激活。
    * @example `true`
    */ "Active": boolean;
    /**
    * 备注信息。
    * @example `默认资源池`
    */ "Note"?: string;
    /**
    * YarnSite配置参数。
    * @example `configList`
    */ "YarnSiteConfig"?: string;
    "Config"?: string[];
}
export { CreateResourcePoolRequest };