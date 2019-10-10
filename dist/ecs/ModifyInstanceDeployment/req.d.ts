interface ModifyInstanceDeploymentRequest {
    /**
    * 实例所在的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 实例ID。实例必须处于**运行中**（Running）或**已停止**（Stopped）状态。
    * @example `i-instanceid1`
    */ "InstanceId": string;
    /**
    * @example `cn-beijing`
    */ "SourceRegionId"?: string;
    /**
    * RAM用户的虚拟账号ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
    /**
    * 专有宿主机ID。您可以调用[DescribeDedicatedHosts](~~94572~~)查看可以使用的专有宿主机。
    * @example `dh-2ze3lmtckdjw1pt8n***`
    */ "DedicatedHostId"?: string;
    /**
    * 部署集ID。
    * @example `ds-deploymentsetid1`
    */ "DeploymentSetId"?: string;
    /**
    * 是否强制更换实例宿主机。
    *
    * - true：允许实例更换宿主机，允许重启**运行中**（Running）的实例、**已停止**（Stopped）状态的包年包月实例和已停止的停机收费的按量付费实例。
    * - false（默认）：不允许实例更换宿主机，只在当前宿主机上加入部署集。这可能导致更换部署集失败。
    * @example `false`
    */ "Force"?: boolean;
    /**
    * 实例是否与专有宿主机关联。取值范围：
    * - host：实例与专有宿主机关联。已开启停机不收费功能的实例停机后再次启动时，仍部署在原专有宿主机上。
    * - default：实例不与专有宿主机关联。已开启停机不收费功能的实例停机后再次启动时，若原专有宿主机资源不足，可迁移至自动部署资源池中的其它专有宿主机上。
    * 实例从共享宿主机迁移至专有宿主机时，默认值：default
    * @example `host`
    */ "Affinity"?: string;
    /**
    * 实例是否在专有宿主机上部署。取值范围：host（实例在专有宿主机上部署）。
    * @example `host`
    */ "Tenancy"?: string;
    /**
    * 实例是否先停机再迁移到目标专有宿主机。取值范围：
    * - reboot（默认）：先停机再迁移实例。
    * - live：不停机迁移实例。此时，您必须指定目标专有宿主机ID，即设置参数**DedicatedHostId**的值。
    * @example `reboot`
    */ "MigrationType"?: string;
}
export { ModifyInstanceDeploymentRequest };