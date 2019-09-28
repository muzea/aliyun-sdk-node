interface WEBPLUS {
    /**
    * 调用DescribeStorage查询存储。
    */ DescribeStorage(query: {
        "RegionId"?: string;
    }): Promise<{}>;
    /**
    * 调用DescribeAppEnvStatus查询给定环境的状态。
    */ DescribeAppEnvStatus(query: {
        "RegionId"?: string;
        /**
        * 环境ID，将查询此环境的状态
        * @example `we-5d244085f314934e2ab15cd7`
        */ "EnvId": string;
    }): Promise<{}>;
    /**
    * 调用RestartAppEnv重启一个部署环境。
    */ RestartAppEnv(query: {
        "RegionId"?: string;
        /**
        * 环境ID，将重启此环境
        * @example `we-5d39b8ba6786bd4b149*****`
        */ "EnvId"?: string;
    }): Promise<{}>;
    /**
    * 调用DeleteAppEnv删除一个环境。
    */ DeleteAppEnv(query: {
        "RegionId"?: string;
        /**
        * 要删除的环境ID
        * @example `we-5d39b8ba6786bd4b149*****`
        */ "EnvId": string;
    }): Promise<{}>;
    /**
    * 调用DescribeAppEnvInstanceHealth查询一个环境内所有ECS实例的健康状态。
    */ DescribeAppEnvInstanceHealth(query: {
        "RegionId"?: string;
        /**
        * 环境ID，将查询此环境内所有实例的健康状态
        * @example `we-5d244085f314934e2ab*****`
        */ "EnvId": string;
    }): Promise<{}>;
    /**
    * 调用DescribeGatherLogResult查询一个收集日志的变更信息。
    */ DescribeGatherLogResult(query: {
        "RegionId"?: string;
        /**
        * 变更ID，将查询此变更对应的日志收集信息
        * @example `wc-5d412db056fd7c14ac9*****`
        */ "ChangeId"?: string;
    }): Promise<{}>;
    /**
    * 调用DescribeConfigTemplates查询配置模板。
    */ DescribeConfigTemplates(query: {
        "RegionId"?: string;
        /**
        * 应用ID，查询此应用上的配置模板
        * @example `wa-5d1d9d8c85c7f86e2ef*****`
        */ "AppId": string;
        /**
        * 要查询的配置模板名称
        * @example `template-name`
        */ "TemplateName"?: string;
        /**
        * 查询的模版名称关键字
        * @example `template`
        */ "TemplateSearch"?: string;
        /**
        * 查询页面大小
        * @example `10`
        */ "PageSize"?: number;
        /**
        * 查询页面数量
        * @example `1`
        */ "PageNumber"?: number;
    }): Promise<{}>;
    /**
    * 调用DescribeInstanceHealth查询一个给定ECS实例的健康状态。
    */ DescribeInstanceHealth(query: {
        "RegionId"?: string;
        /**
        * id为实例ID，即instanceId，标识一个ECS实例
        * @example `i-wz9hwvnwm5tlv3u*****`
        */ "InstanceId": string;
    }): Promise<{}>;
    /**
    * 调用CreateStorage创建一个存储桶。
    */ CreateStorage(query: {
        "RegionId"?: string;
    }): Promise<{}>;
    /**
    * 调用DescribeAppEnvs查询符合条件的部署环境。
    */ DescribeAppEnvs(query: {
        "RegionId"?: string;
        /**
        * 环境所属的应用ID
        * @example `wa-5cef9f96dd351b61df0*****`
        */ "AppId"?: string;
        /**
        * 环境ID
        * @example `we-5d22b3816f48e5478fd*****`
        */ "EnvId"?: string;
        /**
        * 是否包含已释放的环境
        * @example `true`
        */ "IncludeTerminated"?: boolean;
        /**
        * 每页查询数据量，默认为10条
        * @example `10`
        */ "PageSize"?: number;
        /**
        * 查询页数，默认为第1页
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 环境名称
        * @example `Test1`
        */ "EnvName"?: string;
        /**
        * 环境搜索关键字
        * @example `Test`
        */ "EnvSearch"?: string;
        /**
        * 是否查询最近变更环境，默认为false
        * @example `false`
        */ "RecentUpdated"?: boolean;
        /**
        * 技术栈搜索关键字
        * @example `Java`
        */ "StackSearch"?: string;
    }): Promise<{}>;
    /**
    * 调用DeleteChange删除一个变更。
    */ DeleteChange(query: {
        "RegionId"?: string;
        /**
        * 变更ID，将删除此变更
        * @example `wc-5d3a963d5802611c4dd*****`
        */ "ChangeId": string;
    }): Promise<{}>;
    /**
    * 调用DeletePkgVersion删除一个部署包版本。
    */ DeletePkgVersion(query: {
        "RegionId"?: string;
        /**
        * 要删除的部署包版本ID
        * @example `wp-5d1dfea63d7b4445ad6d****`
        */ "PkgVersionId": string;
    }): Promise<{}>;
    /**
    * 调用DescribeGatherStatsResult查询一个收集诊断的变更信息。
    */ DescribeGatherStatsResult(query: {
        "RegionId"?: string;
        /**
        * 变更ID，将查询此变更ID对应的诊断结果信息
        * @example `wc-5d4134b956fd7c14ac91*****`
        */ "ChangeId"?: string;
    }): Promise<{}>;
    /**
    * 调用DescribeApplications查询应用信息。
    */ DescribeApplications(query: {
        "RegionId"?: string;
        /**
        * 应用ID，查询特定应用信息
        * @example `wa-5d1af9c802470221ab7*****`
        */ "AppId"?: string;
        /**
        * 查询页面大小
        * @example `10`
        */ "PageSize"?: number;
        /**
        * 查询页面数
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 应用名称，查询此名称的应用
        * @example `appTest`
        */ "AppName"?: string;
        /**
        * 查询的应用名关键字，若应用名称包含此关键字，则返回此应用的关键字
        * @example `appSearch`
        */ "AppSearch"?: string;
        /**
        * 搜索应用中环境名的关键字，若应用中的环境名包含此关键字，则返回此应用
        * @example `testEnv`
        */ "EnvSearch"?: string;
        /**
        * 栈类型搜索
        * @example `Java`
        */ "StackSearch"?: string;
        "CategorySearch"?: string;
    }): Promise<{}>;
    /**
    * 调用StartAppEnv启动一个部署环境。
    */ StartAppEnv(query: {
        "RegionId"?: string;
        /**
        * 环境ID，将启动此环境
        * @example `we-5d39b8ba6786bd4b149*****`
        */ "EnvId"?: string;
    }): Promise<{}>;
    /**
    * 调用DeleteApplication删除一个应用。
    */ DeleteApplication(query: {
        "RegionId"?: string;
        /**
        * 应用ID，将删除此应用
        * @example `wa-5d1af9c802470221ab7*****`
        */ "AppId": string;
    }): Promise<{}>;
    /**
    * 调用此API更新一个部署环境。
    */ UpdateAppEnv(query: {
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
    }): Promise<{}>;
    /**
    * 调用DescribeEnvResource查询一个环境内的所有资源。
    */ DescribeEnvResource(query: {
        "RegionId"?: string;
        /**
        * 环境ID，将查询此环境内的所有资源
        * @example `we-5d22f93dcd04d705b65*****`
        */ "EnvId": string;
    }): Promise<{}>;
    /**
    * 调用DryRunTerminateAppEnv来模拟运行终止给定的部署环境。
    */ DryRunTerminateAppEnv(query: {
        "RegionId"?: string;
        /**
        * 环境ID，将模拟运行终止此环境
        * @example `we-5d3eaaea2977ca5251e*****`
        */ "EnvId"?: string;
    }): Promise<{}>;
    /**
    * 调用DeleteConfigTemplate删除一个配置模板。
    */ DeleteConfigTemplate(query: {
        "RegionId"?: string;
        /**
        * 配置模板ID，将删除此配置模板
        * @example `wct-5d3e9d2a2977ca5251e0****`
        */ "TemplateId": string;
    }): Promise<{}>;
    /**
    * 调用CreateConfigTemplate从一个原有环境来创建一个配置模板。
    */ CreateConfigTemplate(query: {
        "RegionId"?: string;
        /**
        * 新建模板的名称
        * @example `new-template-name`
        */ "TemplateName"?: string;
        /**
        * 新建模版的描述
        * @example `this is an new template`
        */ "TemplateDescription"?: string;
        /**
        * 新建模板所在的应用ID
        * @example `wa-5d1d9d8c85c7f86e2efb****`
        */ "AppId"?: string;
        /**
        * 技术栈ID
        * @example `ws-6c937c98a9c0296d0c482****`
        */ "StackId"?: string;
        /**
        * 源配置模板的ID，将会以此模板来创建新的配置模板
        * @example `wct-5d1ec2813c940d1bf45b****`
        */ "SourceTemplateId"?: string;
        /**
        * 源环境ID，指定用于创建模版配置的源环境
        * @example `we-5d1dac8e08350d1dd948****`
        */ "SourceEnvId"?: string;
        /**
        * 初始化配置类型，可选以下值：
        *  - `HighAvailability`：高可用，该配置会将实例数设置为2，同时启用公网SLB
        *  - `StandAlone`：低成本，该配置会将实例数设置为1
        * @example `HighAvailability`
        */ "ProfileName"?: string;
        /**
        * 部署包版本ID
        * @example `wp-5d1daece08350d1dd948****`
        */ "PkgVersionId"?: string;
        /**
        * 自定义配置项数据，JSON数组，包含以下字段：
        * - `path`：配置项路径
        * - `name`：配置项名称
        * - `value`：配置值
        * @example `[{"path":"resources.ecs.autoScaling", "name":"instanceNum","value":"10"},     {"path":"application.option", "name":"port","value":"8081"}]`
        */ "OptionSettings"?: string;
    }): Promise<{}>;
    /**
    * 调用CreatePkgVersion创建一个部署包版本。
    */ CreatePkgVersion(query: {
        "RegionId"?: string;
        /**
        * 版本标签
        * @example `version-demo-tmc-1.5`
        */ "PkgVersionLabel"?: string;
        /**
        * 版本描述信息
        * @example `This is a package.`
        */ "PkgVersionDescription"?: string;
        /**
        * 建立部署包版本的应用ID
        * @example `wa-5d3eaae92977ca5251e*****`
        */ "AppId"?: string;
        /**
        * 用于建立部署包版本的资源包
        * @example `oss://target-url/webx/webx-quickstart-tomcat-0.1.0-SNAPSHOT.war`
        */ "PackageSource"?: string;
    }): Promise<{}>;
    /**
    * 调用ResumeChange来恢复一个被暂停的变更操作。
    */ ResumeChange(query: {
        "RegionId"?: string;
        /**
        * 变更ID，将恢复此变更操作
        * @example `wc-5d3fabad56fd7c14ac9*****`
        */ "ChangeId"?: string;
    }): Promise<{}>;
    /**
    * 调用DescribeChanges查询给定环境内所有变更信息或给定变更ID的变更信息。
    */ DescribeChange(query: {
        "RegionId"?: string;
        /**
        * 环境ID，将查询此环境内所有变更信息
        * @example `we-5d245f7f1f773f090a0d****`
        */ "EnvId"?: string;
        /**
        * 变更ID，将查询此变更ID
        * @example `wc-5d245f94f314934e2ab1****`
        */ "ChangeId"?: string;
    }): Promise<{}>;
    /**
    * 调用PauseChange来暂停一个未完成的变更操作。
    */ PauseChange(query: {
        "RegionId"?: string;
        /**
        * 变更ID，将暂停此变更操作
        * @example `wc-5d3fabad56fd7c14ac9*****`
        */ "ChangeId"?: string;
    }): Promise<{}>;
    /**
    * 调用ValidateConfigSetting来验证一个配置的设置有效性。
    */ ValidateConfigSetting(query: {
        "RegionId"?: string;
        /**
        * 环境ID
        * @example `we-5d3eaaea2977ca5251e*****`
        */ "EnvId"?: string;
        /**
        * 配置模板ID
        * @example `wct-5d3e9d2a2977ca5251e*****`
        */ "TemplateId"?: string;
        /**
        * 栈ID
        * @example `ws-6c937c98a9c0296d0c48*****`
        */ "StackId"?: string;
        /**
        * 自定义配置项数据，JSON数组，包含以下字段：
        * - `path`：配置项路径
        * - `name`：配置项名称
        * - `value`：配置值
        * @example `[{"path":"resources.ecs.autoScaling", "name":"instanceNum","value":"10"},     {"path":"application.option", "name":"port","value":"100"}]`
        */ "OptionSettings"?: string;
    }): Promise<{}>;
    /**
    * 调用TerminateAppEnv来终止一个环境。
    */ TerminateAppEnv(query: {
        "RegionId"?: string;
        /**
        * 环境ID
        * @example `we-5d39b8ba6786bd4b149*****`
        */ "EnvId"?: string;
        /**
        * 是否模拟变更
        * - 若设定该参数为true，则不会创建变更，而是输出创建环境的操作步骤；否则会创建环境，并输出变更ID
        *  - 默认为false
        * @example `true`
        */ "DryRun"?: string;
    }): Promise<{}>;
    /**
    * 调用DescribePkgVersions查询部署包版本。
    */ DescribePkgVersions(query: {
        "RegionId"?: string;
        /**
        * 应用ID，表示部署包版本所在的应用
        * @example `wa-5d1d9d8c85c7f86**********`
        */ "AppId": string;
        /**
        * 查询页面数
        * @example `10`
        */ "PageSize"?: number;
        /**
        * 查询页面大小
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 部署包版本标签
        * @example `version-demo-tmc-1.4`
        */ "PkgVersionLabel"?: string;
        /**
        * 部署包版本标签搜索关键字，将返回含有此关键字的部署包版本
        * @example `tmc`
        */ "PkgVersionSearch"?: string;
    }): Promise<{}>;
    /**
    * 调用DescribeConfigSettings查询配置设置。
    */ DescribeConfigSettings(query: {
        "RegionId"?: string;
        /**
        * 环境ID
        * @example `we-5d3eaaea2977ca5251e*****`
        */ "EnvId"?: string;
        /**
        * 配置模板ID
        * @example `wct-5d3e9d2a2977ca5251e*****`
        */ "TemplateId"?: string;
        "PathName"?: string;
        "OptionName"?: string;
    }): Promise<{}>;
    /**
    * 调用DryRunCreateAppEnv来模拟创建应用部署环境。
    */ DryRunCreateAppEnv(query: {
        "RegionId"?: string;
        /**
        * 技术栈ID
        * @example `ws-6c937c98a9c0296d0c48*****`
        */ "StackId"?: string;
        /**
        * 自定义配置项数据，JSON数组，包含以下字段：
        * - `path`：配置项路径
        * - `name`：配置项名称
        * - `value`：配置值
        * @example `[{"path":"resources.ecs.autoScaling", "name":"instanceNum","value":"10"},     {"path":"application.option", "name":"port","value":"8081"}]`
        */ "OptionSettings"?: string;
        /**
        * 初始化配置类型，可选以下值：
        *  - `HighAvailability`：高可用，该配置会将实例数设置为2，同时启用公网SLB
        *  - `StandAlone`：低成本，该配置会将实例数设置为1
        * @example `HighAvailability`
        */ "ProfileName"?: string;
        /**
        * 源环境ID
        * @example `we-5d3eaaea2977ca5251e*****`
        */ "SourceEnvId"?: string;
        /**
        * 模板ID，从此配置模板创建环境
        * @example `wct-5d1eca8dd56beb722b7*****`
        */ "TemplateId"?: string;
        "ExtraProperties"?: string;
    }): Promise<{}>;
    /**
    * 调用UpdateApplication更新应用。
    */ UpdateApplication(query: {
        "RegionId"?: string;
        /**
        * 应用ID，将更新此应用的信息
        * @example `wa-5d1af9c802470221ab7*****`
        */ "AppId"?: string;
        /**
        * 应用描述信息
        * @example `This is a updated Description`
        */ "AppDescription"?: string;
    }): Promise<{}>;
    /**
    * 调用GatherAppEnvLog来收集一个部署环境中指定实例的日志信息。
    */ GatherAppEnvLog(query: {
        "RegionId"?: string;
        /**
        * 环境ID，将收集此环境中实例的日志
        * @example `wa-5d1af9c802470221ab7*****`
        */ "EnvId"?: string;
        /**
        * 实例ID列表，将收集此列表中指定实例的日志
        * @example `["i-wz94zz7mx8kt5kz*****"]`
        */ "TargetInstances"?: string;
        /**
        * 日志路径，指定要收集的日志所在路径
        * @example `/home/admin/app/webplus-app.log`
        */ "LogPath"?: string;
    }): Promise<{}>;
    /**
    * 调用RebuildAppEnv重建一个部署环境。
    */ RebuildAppEnv(query: {
        "RegionId"?: string;
        /**
        * 环境ID
        * @example `we-5d39b8ba6786bd4b149*****`
        */ "EnvId"?: string;
        /**
        * 是否模拟变更
        * - 若设定该参数为true，则不会创建变更，而是输出创建环境的操作步骤；否则会创建环境，并输出变更ID
        *  - 默认为false
        * @example `true`
        */ "DryRun"?: boolean;
    }): Promise<{}>;
    /**
    * 使用CreateApplication创建一个新应用。
    */ CreateApplication(query: {
        "RegionId"?: string;
        /**
        * 新建应用的名称
        * @example `app1`
        */ "AppName"?: string;
        /**
        * 应用描述信息
        * @example `This is an application`
        */ "AppDescription"?: string;
        /**
        * 新建应用的平台类型
        * @example `Java`
        */ "CategoryName"?: string;
    }): Promise<{}>;
    /**
    * 调用DescribeChanges查询所有变更信息或给定环境内所有变更信息。
    */ DescribeChanges(query: {
        "RegionId"?: string;
        /**
        * 环境ID，将查询此环境内所有变更信息
        * @example `we-5d245f7f1f773f090a0d****`
        */ "EnvId"?: string;
        /**
        * 要查询的变更类型
        * @example `Termination`
        */ "ActionName"?: string;
        /**
        * 查询页面内结果数量
        * @example `10`
        */ "PageSize"?: number;
        /**
        * 查询页面数量
        * @example `1`
        */ "PageNumber"?: number;
    }): Promise<{}>;
    /**
    * 调用DescribeStacks查询技术栈。
    */ DescribeStacks(query: {
        "RegionId"?: string;
        /**
        * 仅查询推荐的技术栈
        * @example `true`
        */ "RecommendedOnly"?: boolean;
        /**
        * 技术栈类型名称
        * @example `Java`
        */ "CategoryName"?: string;
        /**
        * 查询页面大小
        * @example `10`
        */ "PageSize"?: number;
        /**
        * 查询页面数
        * @example `1`
        */ "PageNumber"?: number;
    }): Promise<{}>;
    /**
    * 调用GatherAppEnvStats来收集一个部署环境中的诊断信息。
    */ GatherAppEnvStats(query: {
        "RegionId"?: string;
        /**
        * 环境ID，将收集此环境中指定实例的诊断信息
        * @example `we-5d3eaaea2977ca5251e*****`
        */ "EnvId"?: string;
        /**
        * 实例ID列表，将收集此列表中指定实例的诊断信息
        * @example `["i-wz94zz7mx8kt5kz*****"]`
        */ "TargetInstances"?: string;
    }): Promise<{}>;
    /**
    * 调用DescribeCategories查询平台类型。
    */ DescribeCategories(query: {
        "RegionId"?: string;
    }): Promise<{}>;
    /**
    * 调用UpdateConfigTemplate来更新配置模板。
    */ UpdateConfigTemplate(query: {
        "RegionId"?: string;
        /**
        * 模板ID
        * @example `wct-5d1eca8dd56beb2b7*****`
        */ "TemplateId"?: string;
        /**
        * 模板描述信息
        * @example `This is a template`
        */ "TemplateDescription"?: string;
        /**
        * 自定义配置项数据，JSON数组，包含以下字段：
        * - `path`：配置项路径
        * - `name`：配置项名称
        * - `value`：配置值
        * @example `[{"path":"resources.ecs.autoScaling", "name":"instanceNum","value":"10"},     {"path":"application.option", "name":"port","value":"8081"}]`
        */ "OptionSettings"?: string;
    }): Promise<{}>;
    /**
    * 调用StopAppEnv停止一个部署环境。
    */ StopAppEnv(query: {
        "RegionId"?: string;
        /**
        * 环境ID，将停止此环境
        * @example `we-5d39b8ba6786bd4b149*****`
        */ "EnvId"?: string;
    }): Promise<{}>;
    /**
    * 调用CreateAppEnv创建一个部署环境。
    */ CreateAppEnv(query: {
        "RegionId"?: string;
        /**
        * 环境名称
        * @example `envTest`
        */ "EnvName"?: string;
        /**
        * 环境描述信息
        * @example `this is an env`
        */ "EnvDescription"?: string;
        /**
        * 环境使用的技术栈ID，若指定了源环境ID或配置模板ID，此参数将被忽略，否则必须指定此参数
        * @example `ws-6c937c98a9c0296d0c48*****`
        */ "StackId"?: string;
        /**
        * 应用ID
        * @example `wa-6c937c98a9c0296d0c48*****`
        */ "AppId"?: string;
        /**
        * 部署包版本ID
        * @example `wp-6c937c98a9c0296d0c48*****`
        */ "PkgVersionId"?: string;
        /**
        * 自定义配置项数据，JSON数组，包含以下字段：
        * - `path`：配置项路径
        * - `name`：配置项名称
        * - `value`：配置值
        * @example `[{"path":"resources.ecs.autoScaling", "name":"instanceNum","value":"10"},     {"path":"application.option", "name":"port","value":"8081"}]`
        */ "OptionSettings"?: string;
        /**
        * 初始化配置类型，可选以下值：
        *  - `HighAvailability`：高可用，该配置会将实例数设置为2，同时启用公网SLB
        *  - `StandAlone`：低成本，该配置会将实例数设置为1
        * @example `HighAvailability`
        */ "ProfileName"?: string;
        /**
        * 源环境ID，新创建的环境将克隆此环境的技术栈，配置项和部署包版本。
        * @example `we-6c937c98a9c0296d0c48*****`
        */ "SourceEnvId"?: string;
        /**
        * 源模版ID
        * @example `wct-5d1c0a5d913567334af*****`
        */ "TemplateId"?: string;
        /**
        * 是否模拟变更
        * - 若设定该参数为true，则不会创建变更，而是输出创建环境的操作步骤；否则会创建环境，并输出变更ID
        *  - 默认为false
        * @example `false`
        */ "DryRun"?: boolean;
        "ExtraProperties"?: string;
    }): Promise<{}>;
    /**
    * 调用DescribeEvents查询事件。
    */ DescribeEvents(query: {
        "RegionId"?: string;
        /**
        * 环境ID，将查询此环境上的事件
        * @example `we-5d1dac8e08350d1dd94*****`
        */ "EnvId"?: string;
        /**
        * 查询事件的开始时间戳
        * @example `1562225800000`
        */ "StartTime"?: number;
        /**
        * 查询事件的结束时间戳
        * @example `1562225909800`
        */ "EndTime"?: number;
        /**
        * 查询页面大小
        * @example `1`
        */ "PageSize"?: number;
        /**
        * 查询页面数量
        * @example `10`
        */ "PageNumber"?: number;
        /**
        * 变更ID
        * @example `wc-d2eeaaa1405481bdd8cb92c*****`
        */ "ChangeId"?: string;
        /**
        * 最近更新事件
        * @example `true`
        */ "LastChangeEvents"?: boolean;
        /**
        * 返回列表是否按时间戳倒序排序
        * @example `true`
        */ "ReverseByTimestamp"?: boolean;
    }): Promise<{}>;
    /**
    * 调用DescribeConfigOptions查询配置选项信息。
    */ DescribeConfigOptions(query: {
        "RegionId"?: string;
        /**
        * 技术栈类型
        * @example `we-5d3eaaea2977ca5251e*****`
        */ "StackId"?: string;
        /**
        * 环境ID
        * @example `ws-6c937c98a9c0296d0c48*****`
        */ "EnvId"?: string;
        /**
        * 初始化配置类型，可选以下值：
        *  - `HighAvailability`：高可用，该配置会将实例数设置为2，同时启用公网SLB
        *  - `StandAlone`：低成本，该配置会将实例数设置为1
        * @example `StandAlone`
        */ "ProfileName"?: string;
    }): Promise<{}>;
    /**
    * 使用AbortChange可以中止一次变更。
    */ AbortChange(query: {
        "RegionId"?: string;
        /**
        * 变更ID，将中止此变更
        * @example `wc-5d3a963d5802611c4ddc****`
        */ "ChangeId"?: string;
    }): Promise<{}>;
    /**
    * 调用DescribeConfigIndex查询配置索引。
    */ DescribeConfigIndex(query: {
        "RegionId"?: string;
        /**
        * 技术栈类型
        * @example `ws-6c937c98a9c0296d0c48*****`
        */ "StackId"?: string;
        /**
        * 环境ID
        * @example `we-5d3eaaea2977ca5251e*****`
        */ "EnvId"?: string;
        /**
        * 初始化配置类型，可选以下值：
        *  - `HighAvailability`：高可用，该配置会将实例数设置为2，同时启用公网SLB
        *  - `StandAlone`：低成本，该配置会将实例数设置为1
        * @example `HighAvailability`
        */ "ProfileName"?: string;
    }): Promise<{}>;
    DryRunRebuildAppEnv(query: {
        "RegionId"?: string;
        "EnvId"?: string;
    }): Promise<{}>;
    CheckInstancesImportStatus(query: {
        "RegionId"?: string;
        "InstanceIds": string;
    }): Promise<{}>;
}
export default WEBPLUS;
