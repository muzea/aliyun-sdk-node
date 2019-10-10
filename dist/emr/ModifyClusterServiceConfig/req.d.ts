interface ModifyClusterServiceConfigRequest {
    /**
    * 地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 集群ID。
    * @example `C-xxx`
    */ "ClusterId": string;
    /**
    * 服务名称。
    * @example `TEZ`
    */ "ServiceName": string;
    /**
    * 本次修改的具体内容，JSON格式的字符串。
    * @example `{"tez-site":{"tez.am.resource.memory.mb":"640"}}`
    */ "ConfigParams": string;
    /**
    * 本次修改的备注信息。
    * @example `modify tez config`
    */ "Comment"?: string;
    /**
    * 自定义配置项的修改内容。
    * @example `{"tez-site":{"key1":{"Value":"value1"}}}`
    */ "CustomConfigParams"?: string;
    /**
    * 主机组ID。
    * @example `G-xxx`
    */ "GroupId"?: string;
    /**
    * 主机实例ID，一般是**ecsID**。
    * @example `i-xxx`
    */ "HostInstanceId"?: string;
    /**
    * 配置项类型。
    * @example `""`
    */ "ConfigType"?: string;
    "GatewayClusterIdList"?: string[];
    /**
    * 修改完成后是否立刻执行configure
    * @example `false`
    */ "RefreshHostConfig"?: boolean;
}
export { ModifyClusterServiceConfigRequest };