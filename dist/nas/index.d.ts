interface NAS {
    /**
    * DescribeSnapshots 用于查询一个文件系统所有的快照列表。
    */ DescribeSnapshots(query: {
        "RegionId": string;
        /**
        * 文件系统类型，可选值：extreme。
        * @example `extreme`
        */ "FileSystemType": string;
        /**
        * 指定的文件系统 ID。
        * @example `extreme-22fd123`
        */ "FileSystemId"?: string;
        /**
        * 快照标识编码。取值可以由多个快照 ID 组成，多个ID用半角逗号（,）隔开，最多支持 100 个ID。
        * @example `s-extreme-xxxxxxxxx,s-extreme-yyyyyyyyy,s-extreme-zzzzzzzzz`
        */ "SnapshotIds"?: string;
        /**
        * 快照名称。
        * @example `FinanceJoshua`
        */ "SnapshotName"?: string;
        /**
        * 快照类型。取值范围：
        * - auto：自动快照
        * - user：手动创建的快照
        * - all（默认）：所有快照类型
        * @example `all`
        */ "SnapshotType"?: string;
        /**
        * 快照状态。取值范围：
        * - progressing：正在创建的快照
        * - accomplished：创建成功的快照
        * - failed：创建失败的快照
        * - all（默认）：所有快照状态
        * @example `all`
        */ "Status"?: string;
        /**
        * 分页查询时设置的每页行数。最大值：100，默认值：10。
        * @example `10`
        */ "PageSize"?: number;
        /**
        * 快照列表的页码。起始值：1，默认值：1。
        * @example `1`
        */ "PageNumber"?: number;
    }): Promise<{}>;
    /**
    * CreateAutoSnapshotPolicy 用于创建一条自动快照策略。创建的自动快照策略可以应用到任一文件系统（ApplyAutoSnapshotPolicy），成功创建的自动快照策略可以后续修改策略内容（ModifyAutoSnapshotPolicies）。
    */ CreateAutoSnapshotPolicy(query: {
        "RegionId": string;
        /**
        * 自动快照的重复日期，单位为天，周期为星期。取值范围：1~7，如 1 表示周一。当一星期内需要创建多次自动快照时，可以传入多个时间点：
        * - 最多传入7个时间点。
        * - 多个时间点用半角逗号（,）隔开。
        * @example `1,2,3`
        */ "RepeatWeekdays": string;
        /**
        * 自动快照的创建时间点，单位为小时。取值范围：0~23，代表 00:00 至 23:00 共 24 个时间点，如 1 表示 01:00。当一天内需要创建多次自动快照时，可以传入多个时间点，多个时间点用半角逗号（,）隔开，最多传入24个时间点。
        * @example `0,1,…23`
        */ "TimePoints": string;
        /**
        * 文件系统类型，可选值：extreme。
        * @example `extreme`
        */ "FileSystemType": string;
        /**
        * 自动快照的保留时间，单位为天。默认值：-1。取值范围：
        * - -1：永久保存。
        * - 1~65536：指定保存天数。
        * @example `30`
        */ "RetentionDays"?: number;
        /**
        * 自动快照策略的名称。长度为 2~128 个英文或中文字符，必须以大小字母或中文开头，可包含数字、半角冒号（:）、下划线（_）或连字符（-），不能以 http:// 和 https:// 开头。默认值：空
        * @example `FinanceJoshua`
        */ "AutoSnapshotPolicyName"?: string;
    }): Promise<{}>;
    /**
    * CreateAccessRule用于创建权限规则。
    */ CreateAccessRule(query: {
        "RegionId"?: string;
        /**
        * 地址或地址段（格式必须为单一IP地址或者CIDR网段格式，如：12.1.1.1 或 13.1.1.1/25）
        * @example `10.0.0.1/32`
        */ "SourceCidrIp": string;
        /**
        * 权限组名称
        * @example `classic-test`
        */ "AccessGroupName": string;
        /**
        * 读写权限类型：RDWR（默认）和 RDONLY
        * @example `RDWR`
        */ "RWAccessType"?: string;
        /**
        * 用户权限类型：no_squash（默认）、root_squash 和 all_squash
        * @example `no_squash`
        */ "UserAccessType"?: string;
        /**
        * 优先级，范围 1-100，默认值为 1
        * @example `1`
        */ "Priority"?: number;
        /**
        * 文件系统类型，可选值：standard、extreme，默认值：standard
        * @example `standard`
        */ "FileSystemType"?: string;
    }): Promise<{}>;
    /**
    * DeleteAccessRule用于删除已有权限规则。
    */ DeleteAccessRule(query: {
        "RegionId"?: string;
        /**
        * 规则序号
        * @example `1`
        */ "AccessRuleId": string;
        /**
        * 权限组名称
        * @example `classic-test`
        */ "AccessGroupName": string;
        /**
        * 文件系统类型，可选值：standard、extreme，默认值：standard
        * @example `standard`
        */ "FileSystemType"?: string;
    }): Promise<{}>;
    /**
    * CreateAccessGroup用于创建权限组。
    */ CreateAccessGroup(query: {
        "RegionId"?: string;
        /**
        * 权限组类型，包括 Vpc和 Classic
        * @example `Classic`
        */ "AccessGroupType": string;
        /**
        * 权限组名称，长度为3-64个字符，必须以大小字母开头，可以包含英文字母、数字、下划线（_）或者连字符（-）。
        * 系统预置两个内建权限组："DEFAULT_VPC_GROUP_NAME"和 "DEFAULT_CLASSIC_GROUP_NAME"，命名不能与两个内建权限组冲突。
        * @example `classic-test`
        */ "AccessGroupName": string;
        /**
        * 权限组描述，默认和名称相同，长度为2~128个英文或中文字符。必须以大小字母或中文开头，不能以 http:// 和 https:// 开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）
        * @example `classictestaccessgroup`
        */ "Description"?: string;
        /**
        * 文件系统类型，可选值：standard、extreme，默认值：standard
        * @example `standard`
        */ "FileSystemType"?: string;
    }): Promise<{}>;
    /**
    * ModifyFileSystem用于修改文件系统的信息。
    */ ModifyFileSystem(query: {
        "RegionId"?: string;
        /**
        * 文件系统 ID
        * @example `1ca404a666`
        */ "FileSystemId": string;
        /**
        * 文件系统描述，长度为2~128个英文或中文字符。必须以大小字母或中文开头，不能以 http:// 和 https:// 开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）
        * @example `空`
        */ "Description"?: string;
    }): Promise<{}>;
    /**
    * DeleteMountTarget 用于删除已有挂载点。
    */ DeleteMountTarget(query: {
        "RegionId"?: string;
        /**
        * 挂载点域名
        * @example `174494b666-xog95.cn-hangzhou.nas.aliyuncs.com`
        */ "MountTargetDomain": string;
        /**
        * 文件系统 ID
        * @example `174494b666`
        */ "FileSystemId": string;
    }): Promise<{}>;
    /**
    * ModifyAccessGroup用于修改权限组。
    */ ModifyAccessGroup(query: {
        "RegionId"?: string;
        /**
        * 权限组名称
        * @example `classic-test`
        */ "AccessGroupName": string;
        /**
        * 权限组描述，默认和名称相同，长度为 2~128 个英文或中文字符。必须以大小字母或中文开头，不能以 http:// 和 https:// 开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）
        * @example `classic-test`
        */ "Description"?: string;
        /**
        * 文件系统类型，可选值：standard、extreme，默认值：standard
        * @example `standard`
        */ "FileSystemType"?: string;
    }): Promise<{}>;
    /**
    * ModifyAccessRule用于修改权限规则。
    */ ModifyAccessRule(query: {
        "RegionId"?: string;
        /**
        * 规则 ID
        * @example `1`
        */ "AccessRuleId": string;
        /**
        * 权限组名称
        * @example `classic-test`
        */ "AccessGroupName": string;
        /**
        * 地址或地址段（格式必须为单一IP地址或者CIDR网段格式，如：12.1.1.1 或 13.1.1.1/25）
        * @example `192.168.0.1`
        */ "SourceCidrIp"?: string;
        /**
        * 读写权限类型
        * @example `RDWR`
        */ "RWAccessType"?: string;
        /**
        * 用户权限类型
        * @example `all_squash`
        */ "UserAccessType"?: string;
        /**
        * 优先级，范围 1-100，默认值为 1
        * @example `1`
        */ "Priority"?: number;
        /**
        * 文件系统类型，可选值：standard、extreme，默认值：standard
        * @example `standard`
        */ "FileSystemType"?: string;
    }): Promise<{}>;
    /**
    * ApplyAutoSnapshotPolicy 用于为一个或者多个文件系统应用自动快照策略。目标文件系统已经应用了自动快照策略时，调用 ApplyAutoSnapshotPolicy 可以更换文件系统当前应用的自动快照策略。
    */ ApplyAutoSnapshotPolicy(query: {
        "RegionId": string;
        /**
        * 目标文件系统ID。一次最多指定 100 个文件系统 ID，当您需要将自动快照策略应用于多个文件系统时，文件系统 ID 之间用半角逗号（,）隔开。
        * @example `extreme-233e6ylv0,extreme -23vbpbi03,extreme -23vasz3ds`
        */ "FileSystemIds": string;
        /**
        * 目标自动快照策略 ID。
        * @example `sp-extreme-233e6ylv0`
        */ "AutoSnapshotPolicyId": string;
    }): Promise<{}>;
    /**
    * 使用文件系统的历史快照回滚至某一阶段的文件系统状态。
    */ ResetFileSystem(query: {
        "RegionId": string;
        /**
        * 指定的文件系统 ID。
        * @example `extreme-012ddfsdf`
        */ "FileSystemId": string;
        "SnapshotId": string;
    }): Promise<{}>;
    /**
    * DescribeAccessGroups用于返回权限组描述信息。
    */ DescribeAccessGroups(query: {
        "RegionId"?: string;
        /**
        * 权限组名称
        * @example `classic-test`
        */ "AccessGroupName"?: string;
        /**
        * 每个分页包含的权限组个数（默认 10）
        * @example `2`
        */ "PageSize"?: number;
        /**
        * 列表的分页页码（从 1 开始计数）
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 文件系统类型，可选值：standard、extreme，默认值：standard
        * @example `standard`
        */ "FileSystemType"?: string;
    }): Promise<{}>;
    /**
    * CreateSnapshot 用于创建快照。
    */ CreateSnapshot(query: {
        "RegionId": string;
        /**
        * 文件系统 ID。
        * @example `Extreme-01ddddfc`
        */ "FileSystemId": string;
        /**
        * 快照的显示名称。长度为 2~128 个英文或中文字符。必须以大小字母或中文开头，不能以 http:// 和 https:// 开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。为防止和自动快照的名称冲突，不能以 auto 开头。
        * @example `FinanceJoshua`
        */ "SnapshotName"?: string;
        /**
        * 快照的接口说明。长度为 2~256 个英文或中文字符，不能以 http:// 和 https:// 开头。默认值：空。
        * @example `FinanceDepet`
        */ "Description"?: string;
        /**
        * 设置快照的保留时间，单位为天。保留时间到期后快照会被自动释放。默认值：-1。
        * 取值范围：
        * - -1：永久保存
        * - 1~65536：指定保存天数
        * @example `30`
        */ "RetentionDays"?: number;
    }): Promise<{}>;
    /**
    * DescribeZones用于查询某个 Region 下的所有可用区及可用区所支持的 NAS 类型。
    */ DescribeZones(query: {
        /**
        * 地域 ID
        * @example `cn-hangzhou`
        */ "RegionId": string;
    }): Promise<{}>;
    /**
    * DescribeAccessRules用于返回权限规则描述。
    */ DescribeAccessRules(query: {
        "RegionId"?: string;
        /**
        * 权限组名称
        * @example `classic-test`
        */ "AccessGroupName": string;
        /**
        * 规则序号
        * @example `1`
        */ "AccessRuleId"?: string;
        /**
        * 每个分页包含的权限规则个数（默认 10）
        * @example `1`
        */ "PageSize"?: number;
        /**
        * 列表的分页页码（从 1 开始计数）
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 文件系统类型，可选值：standard、extreme，默认值：standard
        * @example `standard`
        */ "FileSystemType"?: string;
    }): Promise<{}>;
    /**
    * DescribeMountTargets用于返回挂载点描述信息。
    */ DescribeMountTargets(query: {
        "RegionId"?: string;
        /**
        * 文件系统 ID
        * @example `1ca404a666`
        */ "FileSystemId": string;
        /**
        * 挂载点域名
        * @example `1ca404a666-xog95.cn-hangzhou.nas.aliyuncs.com`
        */ "MountTargetDomain"?: string;
        /**
        * 每个分页包含的挂载点个数（默认 10）
        * @example `1`
        */ "PageSize"?: number;
        /**
        * 列表的分页页码（从 1 开始计数）
        * @example `1`
        */ "PageNumber"?: number;
    }): Promise<{}>;
    /**
    * ModifyMountTarget用于修改挂载点信息。
    */ ModifyMountTarget(query: {
        "RegionId"?: string;
        /**
        * 挂载点域名
        * @example `1ca404a666-wxa89.cn-hangzhou.nas.aliyuncs.com`
        */ "MountTargetDomain": string;
        /**
        * 文件系统 ID
        * @example `1ca404a666`
        */ "FileSystemId": string;
        /**
        * 权限组名称
        * @example `classic-test`
        */ "AccessGroupName"?: string;
        /**
        * 挂载点状态，枚举值包括：Active（表示启用），Inactive（表示禁用）
        * @example `Inactive`
        */ "Status"?: string;
    }): Promise<{}>;
    /**
    * CreateMountTarget用于创建挂载点。
    */ CreateMountTarget(query: {
        "RegionId"?: string;
        /**
        * 权限组名称
        * @example `classic-test`
        */ "AccessGroupName": string;
        /**
        * 网络类型，包括 VPC 和 Classic
        * @example `vpc`
        */ "NetworkType": string;
        /**
        * 文件系统 ID
        * @example `174494b666`
        */ "FileSystemId": string;
        /**
        * VPC 网络 ID
        * @example `vpc-2zesj9afh3y518k9oe86q`
        */ "VpcId"?: string;
        /**
        * 交换机 ID
        * @example `vsw-2zevmwkwyztjuoffgdiwl`
        */ "VSwitchId"?: string;
    }): Promise<{}>;
    /**
    * CreateFileSystem用于创建新的文件系统。
    */ CreateFileSystem(query: {
        "RegionId"?: string;
        /**
        * 使用的协议类型，目前包含 NFS和 SMB
        * @example `NFS`
        */ "ProtocolType": string;
        "ZoneId"?: string;
        /**
        * 文件系统类别，目前包含 Performance（性能型）和 Capacity（容量型）
        * @example `Performance`
        */ "StorageType": string;
        /**
        * 文件系统描述，长度为 2~128 个英文或中文字符。必须以大小字母或中文开头，不能以 http:// 和 https:// 开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）
        * @example `balabala`
        */ "Description"?: string;
    }): Promise<{}>;
    /**
    * DescribeRegions用于返回所有 RegionId。
    */ DescribeRegions(query: {
        "RegionId"?: string;
        /**
        * 每个分页包含的区域个数（默认 10）
        * @example `2`
        */ "PageSize"?: number;
        /**
        * 列表的分页页码（从 1 开始计数）
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 文件系统类型，可选值：standard、extreme，默认值：standard
        * @example `standard`
        */ "FileSystemType"?: string;
    }): Promise<{}>;
    /**
    * CancelAutoSnapshotPolicy 用于取消一个或者多个文件系统的自动快照策略。
    */ CancelAutoSnapshotPolicy(query: {
        "RegionId": string;
        /**
        * 目标文件系统 ID。一次最多指定 100 个文件系统 ID，当您需要取消多个文件系统的自动快照策略时，多个文件系统 ID 之间用半角逗号（,）隔开。
        * @example `extreme-233e6ylv0,extreme-23vbpbi03,extreme-23vasz3ds`
        */ "FileSystemIds": string;
    }): Promise<{}>;
    /**
    * DeleteFileSystem用于删除已有的文件系统。
    */ DeleteFileSystem(query: {
        "RegionId"?: string;
        /**
        * 要删除的文件系统 ID
        * @example `1ca404a348`
        */ "FileSystemId": string;
    }): Promise<{}>;
    /**
    * DescribeFileSystems用于返回文件系统的描述信息。
    */ DescribeFileSystems(query: {
        "RegionId"?: string;
        /**
        * 文件系统 ID
        * @example `109c042666`
        */ "FileSystemId"?: string;
        /**
        * 文件系统类型，可选值：standard、extreme，默认值：standard
        * @example `standard`
        */ "FileSystemType"?: string;
        /**
        * 专有网络 ID
        * @example `vpc-bp1sevsgtqvk5gxblhhod`
        */ "VpcId"?: string;
        /**
        * 每个分页包含的文件系统个数（默认为 10）
        * @example `1`
        */ "PageSize"?: number;
        /**
        * 列表的分页页码（从 1 开始计数）
        * @example `1`
        */ "PageNumber"?: number;
    }): Promise<{}>;
    /**
    * DeleteAutoSnapshotPolicy 用于删除一条自动快照策略。如果目标自动快照策略已经被应用到文件系统上，删除自动快照策略后，这些文件系统不再执行该策略。
    */ DeleteAutoSnapshotPolicy(query: {
        "RegionId": string;
        /**
        * 自动快照策略 ID。您可以调用 DescribeAutoSnapshotPolicies 查看您可用的自动快照策略。
        * @example `sp-extreme-233e6ylv0`
        */ "AutoSnapshotPolicyId": string;
    }): Promise<{}>;
    /**
    * DeleteAccessGroup用于删除已有权限组。
    */ DeleteAccessGroup(query: {
        "RegionId"?: string;
        /**
        * 权限组名称
        * @example `classic-test`
        */ "AccessGroupName": string;
        /**
        * 文件系统类型，可选值：standard、extreme，默认值：standard
        * @example `standard`
        */ "FileSystemType"?: string;
    }): Promise<{}>;
    /**
    * DeleteSnapshot用于删除指定的快照。如果需要取消正在创建的快照，也可以调用该接口删除快照，即取消创建快照任务。
    */ DeleteSnapshot(query: {
        "RegionId": string;
        /**
        * 快照 ID。
        * @example `s-extreme-snapshotid1`
        */ "SnapshotId": string;
    }): Promise<{}>;
    /**
    * ModifyAutoSnapshotPolicy 用于修改一条自动快照策略。修改自动快照策略后，之前已应用该策略的文件系统随即执行修改后的自动快照策略。
    */ ModifyAutoSnapshotPolicy(query: {
        "RegionId": string;
        /**
        * 目标自动快照策略 ID。您可以调用 DescribeAutoSnapshotPolicies 查看您可用的自动快照策略。
        * @example `sp-extreme-233e6ylv0`
        */ "AutoSnapshotPolicyId": string;
        /**
        * 自动快照策略的名称。如果参数为空则代表不修改。
        * @example `FinanceJoshua`
        */ "AutoSnapshotPolicyName"?: string;
        /**
        * 自动快照的重复日期，单位为天，周期为星期。取值范围：1~7，如1表示周一。当一星期内需要创建多次自动快照时，可以传入多个时间点：
        * - 最多传入 7 个时间点。
        * - 多个时间点用半角逗号（,）隔开。
        * @example `1,7`
        */ "RepeatWeekdays"?: string;
        /**
        * 自动快照的保留时间，单位为天。取值范围：
        * - -1（默认）：永久保存。
        * - 1~65536：指定保存天数。
        * @example `30`
        */ "RetentionDays"?: number;
        /**
        * 自动快照的创建时间点，单位为小时。取值范围：0~23，代表 00:00 至 23:00 共 24 个时间点，如 1 表示 01:00。当一天内需要创建多次自动快照时，可以传入多个时间点：
        * - 最多传入 24 个时间点。
        * - 多个时间点半角逗号（,）隔开。
        * @example `0,1`
        */ "TimePoints"?: string;
    }): Promise<{}>;
    /**
    * DescribeAutoSnapshotPolicies 用于查询您已创建的自动快照策略。
    */ DescribeAutoSnapshotPolicies(query: {
        "RegionId": string;
        /**
        * 文件系统类型，可选值：extreme。
        * @example `extreme`
        */ "FileSystemType": string;
        /**
        * 自动快照策略 ID。
        * @example `sp-extreme-233e6ylv0`
        */ "AutoSnapshotPolicyId"?: string;
        /**
        *
        * 分页展示返回的自动快照策略时的每页行数。 最大值：100，默认值：10。
        * @example `10`
        */ "PageSize"?: number;
        /**
        * 自动快照策略返回结果分多页展示。 起始值：1，默认值：1。
        * @example `1`
        */ "PageNumber"?: number;
    }): Promise<{}>;
    /**
    * 添加或者覆盖一个或者多个标签到一个文件系统实例。
    */ AddTags(query: {
        "RegionId"?: string;
        "Tag": string[];
        /**
        * 文件系统ID。
        * @example `0addcw13cd`
        */ "FileSystemId": string;
    }): Promise<{}>;
    /**
    * 从一个文件系统实例上解绑一个或多个标签。
    */ RemoveTags(query: {
        "RegionId"?: string;
        "Tag": string[];
        /**
        * 文件系统ID。
        * @example `0addcw13cd`
        */ "FileSystemId": string;
    }): Promise<{}>;
    /**
    * 查询已有标签。
    */ DescribeTags(query: {
        "RegionId"?: string;
        /**
        * 文件系统ID。
        * @example `0addcw13cd`
        */ "FileSystemId"?: string;
        /**
        * 每个分页包含的标签数，默认值：10。
        * @example `1`
        */ "PageSize"?: number;
        /**
        * 列表的分页页码，从1开始计数 。
        * @example `1`
        */ "PageNumber"?: number;
        "Tag"?: string[];
    }): Promise<{}>;
    AddClientToBlackList(query: {
        "RegionId": string;
        "FileSystemId": string;
        "ClientIP": string;
        "ClientToken": string;
    }): Promise<{}>;
    DeleteLDAPConfig(query: {
        "RegionId"?: string;
        "FileSystemId": string;
    }): Promise<{}>;
    DescribeBlackListClients(query: {
        "RegionId": string;
        "FileSystemId": string;
        "ClientIP"?: string;
    }): Promise<{}>;
    DescribeLDAPConfig(query: {
        "RegionId"?: string;
        "FileSystemId": string;
    }): Promise<{}>;
    RemoveClientFromBlackList(query: {
        "RegionId": string;
        "FileSystemId": string;
        "ClientIP": string;
        "ClientToken": string;
    }): Promise<{}>;
    CreateLDAPConfig(query: {
        "RegionId"?: string;
        "SearchBase": string;
        "FileSystemId": string;
        "BindDN"?: string;
        "URI": string;
    }): Promise<{}>;
    ModifyLDAPConfig(query: {
        "RegionId"?: string;
        "SearchBase": string;
        "FileSystemId": string;
        "BindDN"?: string;
        "URI": string;
    }): Promise<{}>;
    DescribeAutoSnapshotTasks(query: {
        "RegionId": string;
        "FileSystemType": string;
        "FileSystemIds"?: string;
        "AutoSnapshotPolicyIds"?: string;
        "PageSize"?: number;
        "PageNumber"?: number;
    }): Promise<{}>;
}
export default NAS;
