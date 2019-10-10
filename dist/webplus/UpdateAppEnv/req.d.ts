interface UpdateAppEnvRequest {
    "RegionId"?: string;
    /**
    * 要更新的环境ID
    * @example `we-5d39b8ba6786bd4b149*****`
    */ "EnvId"?: string;
    /**
    * 环境描述信息
    * @example `This is an env.`
    */ "EnvDescription"?: string;
    /**
    * 部署包版本ID
    * @example `wp-5d1c0a5d913567334af*****`
    */ "PkgVersionId"?: string;
    /**
    * 自定义配置项数据，JSON数组，包含以下字段：
    * - `path`：配置项路径
    * - `name`：配置项名称
    * - `value`：配置值
    * @example `[{"path":"resources.slb.internet", "name":"enable","value":"true"}]`
    */ "OptionSettings"?: string;
    /**
    * 环境所使用的技术栈ID
    * @example `ws-6c937c98a9c0296d0c48*****`
    */ "StackId"?: string;
    /**
    * 是否模拟变更
    * - 若设定该参数为true，则不会创建变更，而是输出创建环境的操作步骤；否则会创建环境，并输出变更ID
    *  - 默认为false
    * @example `false`
    */ "DryRun"?: boolean;
    /**
    * 本次变更的附加参数
    * @example `{"Keypair":"testKey"}`
    */ "ExtraProperties"?: string;
}
export { UpdateAppEnvRequest };