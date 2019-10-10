interface ModifyResourcePoolRequest {
    /**
    * 区域 ID
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 资源池 ID
    * @example `116`
    */ "Id": string;
    /**
    * 集群 ID
    * @example `C-0E995C0EE7E5ECB3`
    */ "ClusterId": string;
    /**
    * 是否激活
    * @example `true`
    */ "Active"?: boolean;
    /**
    * 资源池名称
    * @example `custompool`
    */ "Name"?: string;
    /**
    * YARN 配置列表
    * @example `Yarnsiteconfig`
    */ "Yarnsiteconfig"?: string;
    "Config"?: string[];
}
export { ModifyResourcePoolRequest };