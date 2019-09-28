interface PVTZ {
    /**
    * 调用CheckZoneName根据规则校验zone是否可添加。
    */ CheckZoneName(query: {
        "RegionId"?: string;
        /**
        * 语言。
        * @example `en`
        */ "Lang"?: string;
        /**
        * zone的名称。
        * @example `demo.com`
        */ "ZoneName"?: string;
        /**
        * 用户Ip。
        * @example `1.1.1.1`
        */ "UserClientIp"?: string;
    }): Promise<{}>;
    /**
    * 调用DescribeUserServiceStatus查询当前用户的服务状态，例如是否开通服务，是否欠费等。
    */ DescribeUserServiceStatus(query: {
        "RegionId"?: string;
        /**
        * 语言。
        * @example `en`
        */ "Lang"?: string;
        /**
        * 用户Ip。
        * @example `1.1.1.1`
        */ "UserClientIp"?: string;
    }): Promise<{}>;
    /**
    * 调用SetZoneRecordStatus设置解析记录状态。
    */ SetZoneRecordStatus(query: {
        "RegionId"?: string;
        /**
        * 解析记录ID。
        * @example `5809`
        */ "RecordId": number;
        /**
        * 解析记录状态。取值：
        * - **ENABLE**: 启用解析
        * - **DISABLE**: 暂停解析
        * @example `DISABLE`
        */ "Status": string;
        /**
        * 语言。
        * @example `en`
        */ "Lang"?: string;
        /**
        * 用户Ip。
        * @example `1.1.1.1`
        */ "UserClientIp"?: string;
    }): Promise<{}>;
    /**
    * 调用AddZone创建private zone。
    */ AddZone(query: {
        "RegionId"?: string;
        /**
        * 语言。
        * @example `en`
        */ "Lang"?: string;
        /**
        * zone名称。
        * @example `demo.com`
        */ "ZoneName"?: string;
        /**
        * 用户Ip。
        * @example `1.1.1.1`
        */ "UserClientIp"?: string;
        /**
        * - **ZONE**：完全劫持整个Zone
        * - **RECORD**：不完全劫持，进行递归解析代理
        * @example `ZONE`
        */ "ProxyPattern"?: string;
        /**
        * 资源组ID。
        * @example ` rg-resourcegroupid1`
        */ "ResourceGroupId"?: string;
    }): Promise<{}>;
    /**
    * 调用DescribeZoneInfo获取指定zone的详细信息。
    */ DescribeZoneInfo(query: {
        "RegionId"?: string;
        /**
        * 语言。
        * @example `en`
        */ "Lang"?: string;
        /**
        * Zone ID。
        * @example `AgIDE1MA_149`
        */ "ZoneId"?: string;
        /**
        * 用户Ip。
        * @example `1.1.1.1`
        */ "UserClientIp"?: string;
    }): Promise<{}>;
    /**
    * 调用SetProxyPattern设置递归解析代理。
    */ SetProxyPattern(query: {
        "RegionId"?: string;
        /**
        * Zone的全局ID。
        * @example `AgIDE0OQ_149`
        */ "ZoneId": string;
        /**
        * 语言。
        * @example `en`
        */ "Lang"?: string;
        /**
        * 取值：
        * - **ZONE**: 全部劫持解析
        * - **RECORD**: 开启递归解析代理
        * @example `ZONE`
        */ "ProxyPattern"?: string;
        /**
        * 用户IP。
        * @example `1.1.1.1`
        */ "UserClientIp"?: string;
    }): Promise<{}>;
    /**
    * 调用DeleteZone删除private zone。
    */ DeleteZone(query: {
        "RegionId"?: string;
        /**
        * 语言
        * @example `en`
        */ "Lang"?: string;
        /**
        * Zone ID
        * @example `AgIDE1MA_150`
        */ "ZoneId"?: string;
        /**
        * 用户Ip
        * @example `用户Ip`
        */ "UserClientIp"?: string;
    }): Promise<{}>;
    /**
    * 调用DescribeChangeLogs获取变更日志。
    */ DescribeChangeLogs(query: {
        "RegionId"?: string;
        /**
        * 关键字，按照“%KeyWord%”模式搜索，不区分大小写。
        * @example `test`
        */ "Keyword"?: string;
        /**
        * 语言。
        * @example `en`
        */ "Lang"?: string;
        /**
        * Zone ID。
        * > 若ZoneId不为空，则获取变更日志，若ZoneId为空，则获取操作记录。
        * @example `6726`
        */ "ZoneId"?: string;
        /**
        * 当前页数，起始值为**1**，默认为**1**。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 分页查询时设置的每页行数，最大值**100**，默认为**20**。
        * @example `100`
        */ "PageSize"?: number;
        /**
        * 开始时间（时间戳）。
        * @example `1516779348000`
        */ "StartTimestamp"?: number;
        /**
        * 结束时间（时间戳）。
        * @example `1516779348000`
        */ "EndTimestamp"?: number;
        /**
        * 获取的日志类型。
        * - **PV_ZONE**为zone的操作日志。
        * - **PV_RECORD**为解析记录的操作日志。
        * 其它值则忽略，获取所有日志。
        * @example `PV_ZONE`
        */ "EntityType"?: string;
        /**
        * 用户Ip。
        * @example `1.1.1.1`
        */ "UserClientIp"?: string;
    }): Promise<{}>;
    /**
    * 调用UpdateZoneRemark修改zone的备注信息。
    */ UpdateZoneRemark(query: {
        "RegionId"?: string;
        /**
        * Zone ID。
        * @example `AgIDE1MA_149`
        */ "ZoneId": string;
        /**
        * 语言。
        * @example `en`
        */ "Lang"?: string;
        /**
        * 备注。
        * @example `test`
        */ "Remark"?: string;
        /**
        * 用户Ip。
        * @example `1.1.1.1`
        */ "UserClientIp"?: string;
    }): Promise<{}>;
    /**
    * 调用UpdateZoneRecord修改解析记录。
    */ UpdateZoneRecord(query: {
        "RegionId"?: string;
        /**
        * 主机记录。
        * 如果要解析@.exmaple.com，主机记录要填写"@”，而不是空。
        * @example `www`
        */ "Rr": string;
        /**
        * 解析记录ID。
        * @example `5809`
        */ "RecordId": number;
        /**
        * 解析记录类型。
        * @example `A`
        */ "Type": string;
        /**
        * 记录值。
        * @example `1.1.1.1`
        */ "Value": string;
        /**
        * 语言。
        * @example `en`
        */ "Lang"?: string;
        /**
        * 生存时间。
        * @example `60`
        */ "Ttl"?: number;
        /**
        * MX记录的优先级，取值范围：**\[1,10\]**。
        * 记录类型为MX记录时，此参数必选。
        * @example `60`
        */ "Priority"?: number;
        /**
        * 用户Ip。
        * @example `2.2.2.2`
        */ "UserClientIp"?: string;
    }): Promise<{}>;
    /**
    * 调用DescribeRegions获取可用地域列表供用户选择。
    */ DescribeRegions(query: {
        "RegionId"?: string;
        /**
        * 语言。
        * @example `en`
        */ "Lang"?: string;
        /**
        * 用户Ip。
        * @example `1.1.1.1`
        */ "UserClientIp"?: string;
        /**
        * 支持的语言。包括以下取值：
        * - 中文：zh-CN
        * - 英文：en-US
        * - 日文：ja
        * @example `zh-CN`
        */ "AcceptLanguage"?: string;
    }): Promise<{}>;
    /**
    * 调用AddZoneRecord添加prviate zone的解析记录。
    */ AddZoneRecord(query: {
        "RegionId"?: string;
        /**
        * Zone ID。
        * @example `CAgICA1OA_58`
        */ "ZoneId": string;
        /**
        * 主机记录。
        * 如果要解析@.exmaple.com，主机记录要填写"@”，而不是空。
        * @example `www`
        */ "Rr": string;
        /**
        * 解析记录类型，目前仅支持**A**, **CNAME**, **TXT**, **MX**, **PTR**。
        * @example `A`
        */ "Type": string;
        /**
        * 记录值。
        * @example `1.1.1.1`
        */ "Value": string;
        /**
        * 语言。
        * @example `en`
        */ "Lang"?: string;
        /**
        * 生存时间，默认值为**60**。
        * @example `60`
        */ "Ttl"?: number;
        /**
        * MX记录的优先级，取值范围：**\[1,10\]**。
        * @example `5`
        */ "Priority"?: number;
        /**
        * 用户Ip。
        * @example `2.2.2.2`
        */ "UserClientIp"?: string;
    }): Promise<{}>;
    /**
    * 调用DeleteZoneRecord删除解析记录。
    */ DeleteZoneRecord(query: {
        "RegionId"?: string;
        /**
        * 解析记录ID。
        * @example `5808`
        */ "RecordId": number;
        /**
        * 语言。
        * @example `en`
        */ "Lang"?: string;
        /**
        * 用户Ip。
        * @example `1.1.1.1`
        */ "UserClientIp"?: string;
    }): Promise<{}>;
    /**
    * 调用DescribeZones查询用户的zone列表。
    */ DescribeZones(query: {
        "RegionId"?: string;
        /**
        * 语言。
        * @example `en`
        */ "Lang"?: string;
        /**
        * 当前页数，起始值为**1**，默认为**1**。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 分页查询时设置的每页行数，最大值**100**，默认为**20**。
        * @example `100`
        */ "PageSize"?: number;
        /**
        * 关键字，按照“%KeyWord%”模式搜索，不区分大小写。
        * @example `test`
        */ "Keyword"?: string;
        "UserClientIp"?: string;
        /**
        * 搜索模式。取值：
        * - **LIKE**：模糊搜索
        * - **EXACT**：精确搜索，默认不填为精确搜索
        * @example `LIKE`
        */ "SearchMode"?: string;
        /**
        * 所属地域ID。
        * @example `cn-hangzhou`
        */ "QueryRegionId"?: string;
        /**
        * VPC ID。
        * @example `vpc-xxxxx`
        */ "QueryVpcId"?: string;
        /**
        * 资源组ID。
        * @example `rg-xxxxx`
        */ "ResourceGroupId"?: string;
    }): Promise<{}>;
    /**
    * 调用BindZoneVpc绑定或者解绑zone与VPC列表两者之间的关系。
    */ BindZoneVpc(query: {
        "RegionId"?: string;
        /**
        * ZoneId，zone的唯一识别码。
        * @example `AgIDE0OQ_149`
        */ "ZoneId": string;
        /**
        * 语言。
        * @example `en`
        */ "Lang"?: string;
        "Vpcs"?: string[];
        /**
        * 用户Ip。
        * @example `1.1.1.1`
        */ "UserClientIp"?: string;
    }): Promise<{}>;
    /**
    * 调用DescribeZoneRecords查询解析记录列表。
    */ DescribeZoneRecords(query: {
        "RegionId"?: string;
        /**
        * Zone ID。
        * @example `CAgICA1OA_58`
        */ "ZoneId": string;
        /**
        * 语言。
        * @example `en`
        */ "Lang"?: string;
        /**
        * 主机记录的关键字，按照”%Keyword%”模式搜索，不区分大小写。
        * @example `test`
        */ "Keyword"?: string;
        /**
        * 当前页数，起始值为**1**，默认为**1**。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 分页查询时设置的每页行数，最大值**500**，默认为**20**。
        * @example `100`
        */ "PageSize"?: number;
        /**
        * 用户Ip。
        * @example `1.1.1.1`
        */ "UserClientIp"?: string;
        /**
        * 标签。
        * @example `tag`
        */ "Tag"?: string;
        /**
        * 搜索模式。取值：
        * - **LIKE**：模糊搜索
        * - **EXACT**：精确搜索（默认）
        * @example `LIKE`
        */ "SearchMode"?: string;
    }): Promise<{}>;
    DescribeRequestGraph(query: {
        "RegionId"?: string;
        "StartTimestamp": number;
        "EndTimestamp": number;
        "Lang"?: string;
        "UserClientIp"?: string;
        "ZoneId"?: string;
        "VpcId"?: string;
    }): Promise<{}>;
    DescribeZoneVpcTree(query: {
        "RegionId"?: string;
        "Lang"?: string;
        "UserClientIp"?: string;
    }): Promise<{}>;
    DescribeStatisticSummary(query: {
        "RegionId"?: string;
        "Lang"?: string;
        "UserClientIp"?: string;
    }): Promise<{}>;
}
export default PVTZ;
