interface ALIDNS {
    /**
    * 调用DescribeSupportLines查询云解析支持的所有线路列表。
    */ DescribeSupportLines(query: {
        "RegionId"?: string;
        /**
        * 语言。
        * @example `en`
        */ "Lang"?: string;
        /**
        * 用户端IP。
        * @example `1.1.1.1`
        */ "UserClientIp"?: string;
        /**
        * 域名名称。
        * @example `example.com`
        */ "DomainName"?: string;
    }): Promise<{
        "RequestId": string;
        "RecordLines": {
            "RecordLine": {
                "LineDisplayName": string;
                "LineName": string;
                "LineCode": string;
            }[];
        };
    }>;
    /**
    * 调用ModifyHichinaDomainDNS根据传入参数修改域名DNS服务器名称。
    */ ModifyHichinaDomainDNS(query: {
        "RegionId"?: string;
        /**
        * 域名名称。
        * @example `example.com`
        */ "DomainName": string;
        /**
        * 用户语言。
        * @example `en`
        */ "Lang"?: string;
        /**
        * 用户端IP。
        * @example `1.1.1.1`
        */ "UserClientIp"?: string;
    }): Promise<{
        "RequestId": string;
        "OriginalDnsServers": {
            "DnsServer": string[];
        };
        "NewDnsServers": {
            "DnsServer": string[];
        };
    }>;
    /**
    * 调用SetDomainRecordStatus根据传入参数设置解析记录状态。
    */ SetDomainRecordStatus(query: {
        "RegionId"?: string;
        /**
        * 解析记录的ID。
        * @example `9999985`
        */ "RecordId": string;
        /**
        * 解析记录状态。取值：
        * - **Enable**: 启用解析
        * - **Disable**: 暂停解析
        * @example `Disable`
        */ "Status": string;
        /**
        * 语言。
        * @example `en`
        */ "Lang"?: string;
        /**
        * 用户端IP。
        * @example `1.1.1.1`
        */ "UserClientIp"?: string;
    }): Promise<{
        "RequestId": string;
        "RecordId": string;
        "Status": string;
    }>;
    /**
    * 调用SetDNSSLBStatus根据传入参数开关解析负载均衡。
    */ SetDNSSLBStatus(query: {
        "RegionId"?: string;
        /**
        * 需要负载均衡的子域名，其中aliyun.com为错误参数，请使用@.aliyun.com。
        * @example `www.abc.com`
        */ "SubDomain": string;
        /**
        * 语言。
        * @example `en`
        */ "Lang"?: string;
        /**
        * 用户IP。
        * @example `1.1.1.1`
        */ "UserClientIp"?: string;
        /**
        * 是否开启解析负载均衡。取值：
        * - **true**（默认）：开启
        * - **false**：关闭
        * @example `true`
        */ "Open"?: boolean;
        /**
        * 域名名称。
        * @example `abc.com`
        */ "DomainName"?: string;
    }): Promise<{
        "RequestId": string;
        "RecordCount": number;
        "Open": boolean;
    }>;
    /**
    * 调用AddDomainRecord根据传入参数添加解析记录。
    */ AddDomainRecord(query: {
        "RegionId"?: string;
        /**
        * 域名名称。
        * @example `example.com`
        */ "DomainName": string;
        /**
        * 主机记录。
        * 如果要解析@.exmaple.com，主机记录要填写”@”，而不是空。
        * @example `www`
        */ "RR": string;
        /**
        * 解析记录类型，参见[解析记录类型格式](https://help.aliyun.com/document_detail/29805.html?spm=a2c4g.11186623.2.20.2cee2846MZb2I3)。
        * @example `A`
        */ "Type": string;
        /**
        * 记录值。
        * @example `202.106.0.20`
        */ "Value": string;
        /**
        * 语言。
        * @example `en`
        */ "Lang"?: string;
        /**
        * 用户端IP。
        * @example `1.1.1.1`
        */ "UserClientIp"?: string;
        /**
        * 解析生效时间，默认为600秒（10分钟）。
        * 参见[TTL定义说明](https://help.aliyun.com/document_detail/29806.html?spm=a2c4g.11186623.2.21.2cee2846MZb2I3)。
        * @example `600`
        */ "TTL"?: number;
        /**
        * MX记录的优先级，取值范围：`[1,10]`。
        * 记录类型为MX记录时，此参数必需。
        * @example `1`
        */ "Priority"?: number;
        /**
        * 解析线路，默认为**default**。
        * 参见[解析线路枚举](https://help.aliyun.com/document_detail/29807.html?spm=a2c4g.11186623.2.22.2cee2846MZb2I3)。
        * @example `default`
        */ "Line"?: string;
    }): Promise<{
        "RequestId": string;
        "RecordId": string;
    }>;
    /**
    * 调用DescribeBatchResultCount查询一次批量操作任务的执行结果。
    */ DescribeBatchResultCount(query: {
        "RegionId"?: string;
        /**
        * 用户语言。
        * @example `en`
        */ "Lang"?: string;
        /**
        * 用户端 IP。
        * @example `1.1.1.1`
        */ "UserClientIp"?: string;
        /**
        * 任务ID。
        * 如果TaskId不为空，返回TaskId对应任务的执行结果；如果TaskId为空，返回最后一次任务的执行结果。
        * @example `123456`
        */ "TaskId"?: number;
        /**
        * 批量操作类型，取值：
        * - **DOMAIN_ADD**：批量添加域名
        * - **DOMAIN_DEL**：批量删除域名
        * - **RR_ADD**：批量添加解析
        * - **RR_DEL**：批量删除解析
        * @example `DOMAIN_ADD`
        */ "BatchType"?: string;
    }): Promise<{
        "RequestId": string;
        "Status": string;
    }>;
    /**
    * 调用CheckDomainRecord检查指定的解析记录在权威DNS是否存在（生效）。
    */ CheckDomainRecord(query: {
        "RegionId"?: string;
        /**
        * 域名名称
        * @example `example.com`
        */ "DomainName": string;
        /**
        * 主机记录
        * @example `zhaohui`
        */ "RR": string;
        /**
        * 记录类型
        * @example `TXT`
        */ "Type": string;
        /**
        * 记录值
        * @example `fd87da3c4528844d45af39200155a905`
        */ "Value": string;
        /**
        * 语言
        * @example `en`
        */ "Lang"?: string;
        /**
        * 用户IP
        * @example `1.1.1.1`
        */ "UserClientIp"?: string;
    }): Promise<{
        "RequestId": string;
        "IsExist": boolean;
    }>;
    /**
    * 调用DescribeSubDomainRecords根据传入参数获取某个固定子域名的所有解析记录列表。
    */ DescribeSubDomainRecords(query: {
        "RegionId"?: string;
        /**
        * 子域名名称。
        * 例如`www.abc.com`，如果输入的是abc.com，则认为是@.abc.com。
        * @example `www.abc.com`
        */ "SubDomain": string;
        /**
        * 语言。
        * @example `en`
        */ "Lang"?: string;
        /**
        * 用户端IP。
        * @example `1.1.1.1`
        */ "UserClientIp"?: string;
        /**
        * 当前页数，起始值为**1**，默认为**1**。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 分页查询时设置的每页行数，最大值**500**，默认为**20**。
        * @example `20`
        */ "PageSize"?: number;
        /**
        * 解析记录类型。若不传值，则返回子域名对应的全部解析记录类型。
        * 解析类型包括(不区分大小写)：**A、MX、CNAME、TXT、REDIRECT_URL、FORWORD_URL、NS、AAAA、SRV**。
        * @example `MX`
        */ "Type"?: string;
        /**
        * 解析线路。
        * @example `default`
        */ "Line"?: string;
        /**
        * 域名名称。
        * @example `example.com`
        */ "DomainName"?: string;
    }): Promise<{
        "RequestId": string;
        "TotalCount": number;
        "PageNumber": number;
        "PageSize": number;
        "DomainRecords": {
            "Record": {
                "DomainName": string;
                "RecordId": string;
                "RR": string;
                "Type": string;
                "Value": string;
                "Line": string;
                "TTL": number;
                "Status": string;
                "Locked": boolean;
                "Weight": number;
            }[];
        };
    }>;
    /**
    * 调用DescribeDomainGroups根据传入参数获取所有分组列表。
    */ DescribeDomainGroups(query: {
        "RegionId"?: string;
        /**
        * 语言。
        * @example `en`
        */ "Lang"?: string;
        "UserClientIp"?: string;
        /**
        * 组名关键字，按照“%KeyWord%”模式搜索，不区分大小写。
        * @example `Group`
        */ "KeyWord"?: string;
        /**
        * 当前页数，起始值为**1**，默认为**1**。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 分页查询时设置的每页行数，最大值**100**，默认为**20**。
        * @example `20`
        */ "PageSize"?: number;
    }): Promise<{
        "RequestId": string;
        "TotalCount": number;
        "PageNumber": number;
        "PageSize": number;
        "DomainGroups": {
            "DomainGroup": {
                "GroupId": string;
                "GroupName": string;
            }[];
        };
    }>;
    /**
    * 调用DescribeDomains根据传入参数查询该用户的域名列表。
    */ DescribeDomains(query: {
        "RegionId"?: string;
        /**
        * 用户语言。
        * @example `en`
        */ "Lang"?: string;
        "UserClientIp"?: string;
        /**
        * 关键字，按照“%KeyWord%”模式搜索，不区分大小写。
        * @example `com`
        */ "KeyWord"?: string;
        /**
        * 域名分组ID，如果不填写则默认为全部分组。
        * @example `2223`
        */ "GroupId"?: string;
        /**
        * 当前页数，起始值为**1**，默认为**1**。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 分页查询时设置的每页行数，最大值**100**，默认为**20**。
        * @example `20`
        */ "PageSize"?: number;
        /**
        * 搜索模式。取值：
        * - **LIKE**：模糊搜索
        * - **EXACT**：精确搜索
        * @example `LIKE`
        */ "SearchMode"?: string;
        /**
        * 资源组ID。
        * @example `rg-resourcegroupid01`
        */ "ResourceGroupId"?: string;
    }): Promise<{
        "RequestId": string;
        "TotalCount": number;
        "PageNumber": number;
        "PageSize": number;
        "Domains": {
            "Domain": {
                "DomainId": string;
                "DomainName": string;
                "AliDomain": string;
                "GroupId": string;
                "PunyCode": string;
                "InstanceId": string;
                "VersionCode": string;
                "DnsServers": {
                    "DnsServer": string[];
                };
            }[];
        };
    }>;
    /**
    * 调用ChangeDomainOfDnsProduct更换云解析产品绑定的域名。
    */ ChangeDomainOfDnsProduct(query: {
        "RegionId"?: string;
        /**
        * 云解析产品ID。
        * @example `i-7sb`
        */ "InstanceId": string;
        /**
        * 语言。
        * @example `en`
        */ "Lang"?: string;
        /**
        * 用户端IP。
        * @example `1.1.1.1`
        */ "UserClientIp"?: string;
        /**
        * 目标绑定域名，如不填写，则为解绑。
        * @example `newdomain.com`
        */ "NewDomain"?: string;
        /**
        * 是否强制绑定。
        * @example `false`
        */ "Force"?: boolean;
    }): Promise<{
        "RequestId": string;
        "OriginalDomain": string;
    }>;
    /**
    * 调用DeleteDomain根据传入参数删除域名。
    */ DeleteDomain(query: {
        "RegionId"?: string;
        /**
        * 域名名称。
        * @example `example.com`
        */ "DomainName": string;
        /**
        * 用户语言。
        * @example `en`
        */ "Lang"?: string;
        "UserClientIp"?: string;
    }): Promise<{
        "RequestId": string;
        "DomainName": string;
    }>;
    /**
    * 调用AddDomain根据传入参数添加域名。
    */ AddDomain(query: {
        "RegionId"?: string;
        /**
        * 域名名称。
        * @example `中文.com`
        */ "DomainName": string;
        /**
        * 语言。
        * @example `en`
        */ "Lang"?: string;
        /**
        * 域名分组ID。默认为默认分组的GroupId。
        * @example `2223`
        */ "GroupId"?: string;
        /**
        * 资源组ID。
        * @example `rg-resourcegroupid`
        */ "ResourceGroupId"?: string;
        "UserClientIp"?: string;
    }): Promise<{
        "RequestId": string;
        "DomainId": string;
        "DomainName": string;
        "GroupId": string;
        "GroupName": string;
        "PunyCode": string;
        "DnsServers": {
            "DnsServer": string[];
        };
    }>;
    /**
    * 调用DescribeDomainRecords根据传入参数获取指定主域名的所有解析记录列表。
    */ DescribeDomainRecords(query: {
        "RegionId"?: string;
        /**
        * 域名名称。
        * @example `example.com`
        */ "DomainName": string;
        /**
        * 语言。
        * @example `en`
        */ "Lang"?: string;
        "UserClientIp"?: string;
        /**
        * 当前页数，起始值为**1**，默认为**1**。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 分页查询时设置的每页行数，最大值**500**，默认为**20**。
        * @example `20`
        */ "PageSize"?: number;
        /**
        * 关键字。
        * @example `test`
        */ "KeyWord"?: string;
        /**
        * 主机记录的关键字，按照“%RRKeyWord%”模式搜索，不区分大小写。
        * @example `www`
        */ "RRKeyWord"?: string;
        /**
        * 解析类型的关键字，按照全匹配搜索，不区分大小写。
        * @example `MX`
        */ "TypeKeyWord"?: string;
        /**
        * 记录值的关键字，按照“%ValueKeyWord%”模式搜索，不区分大小写。
        * @example `com`
        */ "ValueKeyWord"?: string;
        /**
        * 排序方式。按照解析添加的时间从新到旧排序。
        * @example `default`
        */ "OrderBy"?: string;
        /**
        * 域名描述。
        * @example `描述`
        */ "Direction"?: string;
        /**
        * 搜索模式。
        * @example `LIKE`
        */ "SearchMode"?: string;
        /**
        * 域名分组ID。
        * @example `2223`
        */ "GroupId"?: number;
        /**
        * 解析记录类型，参见[解析记录类型格式](https://help.aliyun.com/document_detail/29805.html?spm=a2c4g.11186623.2.20.2cee2846MZb2I3)。
        * @example `A`
        */ "Type"?: string;
        /**
        * 解析线路，默认为**default**。
        * 参见[解析线路枚举](https://help.aliyun.com/document_detail/29807.html?spm=a2c4g.11186623.2.22.2cee2846MZb2I3)。
        * @example `default`
        */ "Line"?: string;
        /**
        * 解析记录状态，取值：**Enable/Disable**。
        * @example `Enable`
        */ "Status"?: string;
    }): Promise<{
        "RequestId": string;
        "TotalCount": number;
        "PageNumber": number;
        "PageSize": number;
        "DomainRecords": {
            "Record": {
                "DomainName": string;
                "RecordId": string;
                "RR": string;
                "Type": string;
                "Value": string;
                "Line": string;
                "Priority": number;
                "TTL": number;
                "Status": string;
                "Locked": boolean;
            }[];
        };
    }>;
    /**
    * 调用DescribeBatchResultDetail查询批量处理结果的详细信息。
    */ DescribeBatchResultDetail(query: {
        "RegionId"?: string;
        /**
        * 用户语言。
        * @example `en`
        */ "Lang"?: string;
        /**
        * 用户端IP。
        * @example `1.1.1.1`
        */ "UserClientIp"?: string;
        /**
        * 当前页码，默认值为**1**。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 分页查询时每页设置的大小。
        * @example `20`
        */ "PageSize"?: number;
        /**
        * 任务ID。
        * @example `83618818`
        */ "TaskId"?: number;
        /**
        * 批量操作类型。取值：
        * - **DOMAIN_ADD**：批量添加域名
        * - **DOMAIN_DEL**：批量删除域名
        * - **RR_ADD**：批量添加解析
        * - **RR_DEL**：批量删除解析
        * @example `DOMAIN_ADD`
        */ "BatchType"?: string;
    }): Promise<{
        "RequestId": string;
        "BatchResultDetail": {
            "Domain": string;
            "Status": string;
        };
    }>;
    /**
    * 调用DescribeDomainStatisticsSummary查询用户账号下所有付费域名的请求量列表。
    */ DescribeDomainStatisticsSummary(query: {
        "RegionId"?: string;
        /**
        * 查询的开始时间，格式：**YYYY-MM-DD**。
        * 只能查询最近90天的记录，即：StartDate >= Now - 90。
        * @example `2019-07-04`
        */ "StartDate": string;
        /**
        * 当前页数，起始值为**1**，默认为**1**。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 语言。
        * @example `en`
        */ "Lang"?: string;
        "UserClientIp"?: string;
        /**
        * 分页查询时设置的每页行数，最大值**100**，最小值为**1**，默认值为**20**。
        * @example `20`
        */ "PageSize"?: number;
        /**
        * 查询的结束时间，格式：**YYYY-MM-DD**。
        * 默认为查询当天的时间。
        * @example `2019-07-04`
        */ "EndDate"?: string;
        "OrderBy"?: string;
        "Direction"?: string;
        /**
        * 关键词的搜索模式。取值：
        * - 模糊搜索（默认）：**LIKE**
        * - 精确搜索：**EXACT**
        * @example `LIKE`
        */ "SearchMode"?: string;
        /**
        * 关键词，按照“%KeyWord%”模式搜索，不区分大小写。
        * @example `test`
        */ "Keyword"?: string;
        /**
        * 查询总量阈值，也可查询相应请求量不大于threshold的数据。例如，可查询出请求量小于100次的域名。
        * @example `12`
        */ "Threshold"?: number;
    }): Promise<{
        "PageNumber": number;
        "Statistics": {
            "Statistic": {
                "Count": number;
                "DomainName": string;
            }[];
        };
        "PageSize": number;
        "RequestId": string;
        "TotalItems": number;
        "TotalPages": number;
    }>;
    /**
    * 调用DeleteSubDomainRecords根据传入参数删除主机记录对应的解析记录。
    */ DeleteSubDomainRecords(query: {
        "RegionId"?: string;
        /**
        * 域名名称。
        * @example `example.com`
        */ "DomainName": string;
        /**
        * 主机记录。
        * 如果要解析@.exmaple.com，主机记录要填写”@”，而不是空。
        * @example `www`
        */ "RR": string;
        /**
        * 语言。
        * @example `en`
        */ "Lang"?: string;
        /**
        * 用户端IP。
        * @example `1.1.1.1`
        */ "UserClientIp"?: string;
        /**
        * 解析记录类型。如果不填写，则返回子域名对应的全部解析记录类型。
        * 解析类型包括(不区分大小写)：**A、MX、CNAME、TXT、REDIRECT_URL、FORWORD_URL、NS、AAAA、SRV**。
        * @example `A`
        */ "Type"?: string;
    }): Promise<{
        "RequestId": string;
        "RR": string;
        "TotalCount": string;
    }>;
    /**
    * 调用AddDomainGroup根据传入参数添加域名分组。
    */ AddDomainGroup(query: {
        "RegionId"?: string;
        /**
        * 域名分组名称。
        * @example `MyGroup`
        */ "GroupName": string;
        /**
        * 语言。
        * @example `en`
        */ "Lang"?: string;
        "UserClientIp"?: string;
    }): Promise<{
        "RequestId": string;
        "GroupId": string;
        "GroupName": string;
    }>;
    /**
    * 调用ChangeDomainGroup根据传入参数将域名从原分组更换到新分组。
    */ ChangeDomainGroup(query: {
        "RegionId"?: string;
        /**
        * 域名名称。
        * @example `abc.com`
        */ "DomainName": string;
        /**
        * 语言。
        * @example `en`
        */ "Lang"?: string;
        "UserClientIp"?: string;
        /**
        * 目标域名分组ID。
        * @example `2223`
        */ "GroupId"?: string;
    }): Promise<{
        "RequestId": string;
        "GroupId": string;
        "GroupName": string;
    }>;
    /**
    * 调用UpdateDNSSLBWeight根据传入参数修改解析负载均衡的权重。
    */ UpdateDNSSLBWeight(query: {
        "RegionId"?: string;
        /**
        * 解析记录ID。
        * @example `9999985`
        */ "RecordId": string;
        /**
        * 要修改的权重值`[1-100]`。
        * @example `2`
        */ "Weight": number;
        /**
        * 语言。
        * @example `en`
        */ "Lang"?: string;
        /**
        * 用户IP。
        * @example `1.1.1.1`
        */ "UserClientIp"?: string;
    }): Promise<{
        "RequestId": string;
        "RecordId": string;
        "Weight": number;
    }>;
    /**
    * 调用DeleteDomainGroup根据传入参数删除域名分组名称。
    */ DeleteDomainGroup(query: {
        "RegionId"?: string;
        /**
        * 域名分组ID。
        * @example `2223`
        */ "GroupId": string;
        /**
        * 语言。
        * @example `en`
        */ "Lang"?: string;
        "UserClientIp"?: string;
    }): Promise<{
        "RequestId": string;
        "GroupName": string;
    }>;
    /**
    * 调用UpdateDomainRecord根据传入参数修改解析记录。
    */ UpdateDomainRecord(query: {
        "RegionId"?: string;
        /**
        * 解析记录的ID。
        * @example `9999985`
        */ "RecordId": string;
        /**
        * 主机记录。
        * 如果要解析@.exmaple.com，主机记录要填写”@”，而不是空。
        * @example `www`
        */ "RR": string;
        /**
        * 解析记录类型，参见[解析记录类型格式](https://help.aliyun.com/document_detail/29805.html?spm=a2c4g.11186623.2.20.2cee2846MZb2I3)。
        * @example `A`
        */ "Type": string;
        /**
        * 记录值。
        * @example `202.106.0.20`
        */ "Value": string;
        /**
        * 语言。
        * @example `en`
        */ "Lang"?: string;
        /**
        * 用户端IP。
        * @example `1.1.1.1`
        */ "UserClientIp"?: string;
        /**
        * 解析生效时间，默认为600秒（10分钟）。
        * 参见[TTL定义说明](https://help.aliyun.com/document_detail/29806.html?spm=a2c4g.11186623.2.21.2cee2846MZb2I3)。
        * @example `600`
        */ "TTL"?: number;
        /**
        * MX记录的优先级，取值范围：`[1,10]`。
        * 记录类型为MX记录时，此参数必需。
        * @example `1`
        */ "Priority"?: number;
        /**
        * 解析线路，默认为**default**。
        * 参见[解析线路枚举](https://help.aliyun.com/document_detail/29807.html?spm=a2c4g.11186623.2.22.2cee2846MZb2I3)。
        * @example `default`
        */ "Line"?: string;
    }): Promise<{
        "RequestId": string;
        "RecordId": string;
    }>;
    /**
    * 调用DescribeDomainRecordInfo获取解析记录的详细信息。
    */ DescribeDomainRecordInfo(query: {
        "RegionId"?: string;
        /**
        * 解析记录的ID 。
        * 此参数在添加解析时会返回，在获取域名解析列表时会返回。
        * @example `9999985`
        */ "RecordId": string;
        /**
        * 用户语言。
        * @example `en`
        */ "Lang"?: string;
        /**
        * 用户端IP。
        * @example `1.1.1.1`
        */ "UserClientIp"?: string;
    }): Promise<{
        "RequestId": string;
        "DomainName": string;
        "RecordId": string;
        "RR": string;
        "Type": string;
        "Value": string;
        "Line": string;
        "Priority": number;
        "TTL": number;
        "Status": string;
        "Locked": boolean;
    }>;
    /**
    * 调用DescribeDomainStatistics查询指定主域名请求量的实时数据。
    */ DescribeDomainStatistics(query: {
        "RegionId"?: string;
        /**
        * 域名名称。
        * @example `dns-example.com`
        */ "DomainName": string;
        /**
        * 查询的开始时间，格式：**YYYY-MM-DD**。
        * 只能查询最近90天的记录，即：StartDate >= Now - 90。
        * @example `2019-07-04`
        */ "StartDate": string;
        /**
        * 查询的结束时间，格式：**YYYY-MM-DD**。
        * 默认为查询当天的时间。
        * @example `2019-07-04`
        */ "EndDate"?: string;
        /**
        * 语言。
        * @example `en`
        */ "Lang"?: string;
        "UserClientIp"?: string;
    }): Promise<{
        "Statistics": {
            "Statistic": {
                "Count": number;
                "Timestamp": number;
            }[];
        };
        "RequestId": string;
    }>;
    /**
    * 调用GetMainDomainName通过输入的参数，获取主域名名称。
    */ GetMainDomainName(query: {
        "RegionId"?: string;
        /**
        * 字符串，最长不超过128个字符。
        * @example `www.example.com`
        */ "InputString": string;
        /**
        * 用户语言。
        * @example `en`
        */ "Lang"?: string;
        /**
        * 用户端IP。
        * @example `1.1.1.1`
        */ "UserClientIp"?: string;
    }): Promise<{
        "RequestId": string;
        "DomainName": string;
        "RR": string;
        "DomainLevel": number;
    }>;
    /**
    * 调用OperateBatchDomain提交批量管理域名、解析记录的任务。
    */ OperateBatchDomain(query: {
        "RegionId"?: string;
        /**
        * 语言。
        * @example `en`
        */ "Lang"?: string;
        /**
        * 用户IP。
        * @example `1.1.1.1`
        */ "UserClientIp"?: string;
        /**
        * 批量操作类型，取值：
        * - **DOMAIN_ADD**：批量添加域名
        * - **DOMAIN_DEL**：批量删除域名
        * - **RR_ADD**：批量添加解析
        * - **RR_DEL**：批量删除解析
        * @example `DOMAIN_ADD`
        */ "Type"?: string;
        "DomainRecordInfo"?: string[];
    }): Promise<{
        "RequestId": string;
        "TaskId": string;
    }>;
    /**
    * 调用DescribeRecordStatistics查询指定子域名请求量的实时数据。
    */ DescribeRecordStatistics(query: {
        "RegionId"?: string;
        /**
        * 查询的开始时间，格式：**YYYY-MM-DD**。
        * 只能查询最近90天的记录，即：StartDate >= Now - 90。
        * @example `2019-07-04`
        */ "StartDate": string;
        /**
        * 域名名称。
        * @example `dns-example.com`
        */ "DomainName": string;
        /**
        * 解析记录。
        * 指主机记录，如果要解析`www.dns-exmaple.com`，主机记录要填写“www”。
        * @example `www.dns-exmaple.com`
        */ "Rr": string;
        /**
        * 语言。
        * @example `en`
        */ "Lang"?: string;
        "UserClientIp"?: string;
        /**
        * 查询的结束时间，格式：**YYYY-MM-DD**。
        * 默认为查询当天的时间。
        * @example `2019-07-04`
        */ "EndDate"?: string;
    }): Promise<{
        "Statistics": {
            "Statistic": {
                "Count": number;
                "Timestamp": number;
            }[];
        };
        "RequestId": string;
    }>;
    /**
    * 调用DescribeRecordLogs根据传入参数获取域名的解析操作日志。
    */ DescribeRecordLogs(query: {
        "RegionId"?: string;
        /**
        * 域名名称。
        * @example `example.com`
        */ "DomainName": string;
        /**
        * 语言。
        * @example `en`
        */ "Lang"?: string;
        /**
        * 用户端IP。
        * @example `1.1.1.1`
        */ "UserClientIp"?: string;
        /**
        * 当前页数，起始值为**1**，默认为**1**。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 分页查询时设置的每页行数，最大值**100**，默认为**20**。
        * @example `20`
        */ "PageSize"?: number;
        /**
        * 关键字，按照“%KeyWord%”模式搜索，不区分大小写。
        * @example `test`
        */ "KeyWord"?: string;
        /**
        * 查询的开始时间，格式：**YYYY-MM-DD**。
        * @example `2015-12-12T09:23Z`
        */ "StartDate"?: string;
        /**
        * 查询的结束时间，格式：**YYYY-MM-DD**。
        * @example `2015-12-12T09:23Z`
        */ "endDate"?: string;
    }): Promise<{
        "RequestId": string;
        "TotalCount": string;
        "PageNumber": string;
        "PageSize": string;
        "RecordLogs": {
            "RecordLog": {
                "ActionTime": string;
                "Action": string;
                "Message": string;
                "ClientIp": string;
            }[];
        };
    }>;
    /**
    * 调用DeleteDomainRecord根据传入参数删除解析记录。
    */ DeleteDomainRecord(query: {
        "RegionId"?: string;
        /**
        * 解析记录的ID。
        * 此参数在添加解析时会返回，在获取域名解析列表时会返回。
        * @example `9999985`
        */ "RecordId": string;
        /**
        * 语言。
        * @example `en`
        */ "Lang"?: string;
        /**
        * 用户端IP。
        * @example `1.1.1.1`
        */ "UserClientIp"?: string;
    }): Promise<{
        "RequestId": string;
        "RecordId": string;
    }>;
    /**
    * 调用DescribeDomainInfo根据传入参数查询指定域名的信息。
    */ DescribeDomainInfo(query: {
        "RegionId"?: string;
        /**
        * 域名名称。
        * @example `example.com`
        */ "DomainName": string;
        /**
        * 用户语言。
        * @example `en`
        */ "Lang"?: string;
        "UserClientIp"?: string;
        /**
        * 默认值为**false**，表示不需要细节属性。
        * @example `false`
        */ "NeedDetailAttributes"?: boolean;
    }): Promise<{
        "RequestId": string;
        "DomainId": string;
        "DomainName": string;
        "AliDomain": string;
        "GroupId": string;
        "GroupName": string;
        "InstanceId": string;
        "VersionCode": string;
        "PunyCode": string;
        "DnsServers": {
            "DnsServer": string[];
        };
    }>;
    /**
    * 调用DescribeDNSSLBSubDomains根据传入参数获取解析负载均衡的子域名列表。
    */ DescribeDNSSLBSubDomains(query: {
        "RegionId"?: string;
        /**
        * 域名名称。
        * @example `example.com`
        */ "DomainName": string;
        /**
        * 语言。
        * @example `en`
        */ "Lang"?: string;
        /**
        * 用户IP。
        * @example `1.1.1.1`
        */ "UserClientIp"?: string;
        /**
        * 当前页数，起始值为**1**，默认为**1**。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 分页查询时设置的每页行数，最大值**100**，默认为**20**。
        * @example `20`
        */ "PageSize"?: number;
    }): Promise<{
        "RequestId": string;
        "TotalCount": number;
        "PageNumber": number;
        "PageSize": number;
        "SlbSubDomains": {
            "SlbSubDomain": {
                "SubDomain": string;
                "RecordCount": number;
                "Open": boolean;
            }[];
        };
    }>;
    /**
    * 调用DescribeRecordStatisticsSummary查询指定域名下的全部子域名的请求量统计。
    */ DescribeRecordStatisticsSummary(query: {
        "RegionId"?: string;
        /**
        * 查询的开始时间，格式：**YYYY-MM-DD**。
        * 只能查询最近90天的记录，即：StartDate >= Now - 90。
        * @example `2019-07-04`
        */ "StartDate": string;
        /**
        * 域名名称。
        * @example `dns-example.com`
        */ "DomainName": string;
        /**
        * 当前页数，起始值为**1**，默认为**1**。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 语言。
        * @example `en`
        */ "Lang"?: string;
        "UserClientIp"?: string;
        /**
        * 分页查询时设置的每页行数，最大值**100**，最小值为**1**，默认值为**20**。
        * @example `20`
        */ "PageSize"?: number;
        /**
        * 查询的结束时间。格式：**YYYY-MM-DD**。
        * 默认为查询当天的时间。
        * @example `2019-07-04`
        */ "EndDate"?: string;
        "OrderBy"?: string;
        "Direction"?: string;
        /**
        * 关键词的搜索模式。取值：
        * - 模糊搜索（默认）：**LIKE**
        * - 精确搜索：**EXACT**
        * @example `EXACT`
        */ "SearchMode"?: string;
        /**
        * 关键词，按照“%KeyWord%”模式搜索，不区分大小写。
        * @example `test`
        */ "Keyword"?: string;
        /**
        * 查询总量阈值，也可查询相应的请求量不大于threshold的数据。例如，可查询出请求量小于100次的域名。
        * @example `12`
        */ "Threshold"?: number;
    }): Promise<{
        "PageNumber": number;
        "Statistics": {
            "Statistic": {
                "Count": number;
                "SubDomain": string;
            }[];
        };
        "PageSize": number;
        "RequestId": string;
        "TotalItems": number;
        "TotalPages": number;
    }>;
    /**
    * 调用UpdateDomainGroup根据传入参数修改域名分组名称。
    */ UpdateDomainGroup(query: {
        "RegionId"?: string;
        /**
        * 域名分组ID。
        * @example `2223`
        */ "GroupId": string;
        /**
        * 域名分组新名称。
        * @example `NewName`
        */ "GroupName": string;
        /**
        * 语言。
        * @example `en`
        */ "Lang"?: string;
        "UserClientIp"?: string;
    }): Promise<{
        "RequestId": string;
        "GroupId": string;
        "GroupName": string;
    }>;
    /**
    * 调用DescribeDomainLogs根据传入参数获取域名的操作日志。
    */ DescribeDomainLogs(query: {
        "RegionId"?: string;
        /**
        * 语言。
        * @example `en`
        */ "Lang"?: string;
        /**
        * 用户IP。
        * @example `1.1.1.1`
        */ "UserClientIp"?: string;
        /**
        * 关键字，按照“%KeyWord%”模式搜索，不区分大小写。
        * @example `test`
        */ "KeyWord"?: string;
        /**
        * 域名分组ID。
        * @example `2223`
        */ "GroupId"?: string;
        /**
        * 当前页数，起始值为**1**，默认为**1**。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 分页查询时设置的每页行数，最大值**100**，默认为**20**。
        * @example `20`
        */ "PageSize"?: number;
        /**
        * 开始时间。格式：**YYYY-MM-DD**。
        * @example `2019-07-04`
        */ "StartDate"?: string;
        /**
        * 结束时间。格式：**YYYY-MM-DD**。
        * @example `2019-07-04`
        */ "endDate"?: string;
        /**
        * 记录类型。
        * @example `MX`
        */ "Type"?: string;
    }): Promise<{
        "RequestId": string;
        "TotalCount": string;
        "PageNumber": string;
        "PageSize": string;
        "DomainLogs": {
            "DomainLog": {
                "ActionTime": string;
                "DomainName": string;
                "Action": string;
                "Message": string;
                "ClientIp": string;
            }[];
        };
    }>;
    /**
    * 调用DescribeDnsProductInstances根据传入参数获取云解析收费版本产品列表。
    */ DescribeDnsProductInstances(query: {
        "RegionId"?: string;
        /**
        * 语言。
        * @example `en`
        */ "Lang"?: string;
        /**
        * 用户端IP。
        * @example `1.1.1.1`
        */ "UserClientIp"?: string;
        /**
        * 当前页数，起始值为**1**，默认为**1**。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 分页查询时设置的每页行数，最大值**100**，默认为**20**。
        * @example `20`
        */ "PageSize"?: number;
        /**
        * 云解析产品code。
        * @example `version1`
        */ "VersionCode"?: string;
    }): Promise<{
        "RequestId": string;
        "TotalCount": string;
        "PageNumber": string;
        "PageSize": string;
        "DnsProducts": {
            "DnsProduct": {
                "InstanceId": string;
                "StartTime": string;
                "EndTime": string;
                "Domain": string;
                "BindCount": string;
                "BindUsedCount": string;
                "TTLMinValue": string;
                "SubDomainLevel": string;
                "DnsSLBCount": string;
                "URLForwardCount": string;
                "DDosDefendFlow": string;
                "DDosDefendQuery": string;
                "OverseaDDosDefendFlow": string;
                "SearchEngineLines": string;
                "ISPLines": string;
                "ISPRegionLines": string;
                "OverseaLine": string;
            };
        };
    }>;
    DescribeGtmInstanceAddressPool(query: {
        "RegionId"?: string;
        "AddrPoolId": string;
        "UserClientIp"?: string;
        "Lang"?: string;
    }): Promise<{}>;
    CreateInstance(query: {
        "RegionId"?: string;
        "InstanceVersion": string;
        "Month": number;
        "Lang"?: string;
        "UserClientIp"?: string;
        "DomainName"?: string;
        "OwnerId"?: number;
        "Token"?: string;
    }): Promise<{}>;
    DeleteGtmAddressPool(query: {
        "RegionId"?: string;
        "AddrPoolId": string;
        "UserClientIp"?: string;
        "Lang"?: string;
    }): Promise<{}>;
    DescribeGtmInstanceSystemCname(query: {
        "RegionId"?: string;
        "InstanceId": string;
        "UserClientIp"?: string;
        "Lang"?: string;
    }): Promise<{}>;
    UpdateGtmAccessStrategy(query: {
        "RegionId"?: string;
        "StrategyId": string;
        "Lang"?: string;
        "UserClientIp"?: string;
        "StrategyName"?: string;
        "DefaultAddrPoolId"?: string;
        "FailoverAddrPoolId"?: string;
        "AccessLines"?: string;
    }): Promise<{}>;
    UpdateGtmAddressPool(query: {
        "RegionId"?: string;
        "AddrPoolId": string;
        "Type": string;
        "Addr": string[];
        "UserClientIp"?: string;
        "Lang"?: string;
        "Name"?: string;
        "MinAvailableAddrNum"?: number;
    }): Promise<{}>;
    AddGtmAddressPool(query: {
        "RegionId"?: string;
        "InstanceId": string;
        "Name": string;
        "Type": string;
        "MinAvailableAddrNum": number;
        "Addr": string[];
        "UserClientIp"?: string;
        "Lang"?: string;
        "MonitorStatus"?: string;
        "ProtocolType"?: string;
        "Interval"?: number;
        "EvaluationCount"?: number;
        "Timeout"?: number;
        "MonitorExtendInfo"?: string;
        "IspCityNode"?: string[];
    }): Promise<{}>;
    AddGtmMonitor(query: {
        "RegionId"?: string;
        "AddrPoolId": string;
        "ProtocolType": string;
        "Interval": number;
        "EvaluationCount": number;
        "Timeout": number;
        "MonitorExtendInfo": string;
        "IspCityNode": string[];
        "UserClientIp"?: string;
        "Lang"?: string;
    }): Promise<{}>;
    DescribeDnsProductInstance(query: {
        "RegionId"?: string;
        "InstanceId": string;
        "Lang"?: string;
        "UserClientIp"?: string;
    }): Promise<{}>;
    DescribeDomainNs(query: {
        "RegionId"?: string;
        "DomainName": string;
        "Lang"?: string;
        "UserClientIp"?: string;
    }): Promise<{}>;
    DescribeGtmAccessStrategies(query: {
        "RegionId"?: string;
        "Lang"?: string;
        "UserClientIp"?: string;
        "InstanceId"?: string;
        "PageNumber"?: number;
        "PageSize"?: number;
    }): Promise<{}>;
    DescribeGtmAccessStrategy(query: {
        "RegionId"?: string;
        "StrategyId": string;
        "Lang"?: string;
        "UserClientIp"?: string;
    }): Promise<{}>;
    DescribeGtmAccessStrategyAvailableConfig(query: {
        "RegionId"?: string;
        "InstanceId": string;
        "Lang"?: string;
        "UserClientIp"?: string;
    }): Promise<{}>;
    DescribeGtmAvailableAlertGroup(query: {
        "RegionId"?: string;
        "Lang"?: string;
        "UserClientIp"?: string;
    }): Promise<{}>;
    DescribeGtmInstance(query: {
        "RegionId"?: string;
        "InstanceId": string;
        "Lang"?: string;
        "UserClientIp"?: string;
        "NeedDetailAttributes"?: boolean;
    }): Promise<{}>;
    DescribeGtmInstanceAddressPools(query: {
        "RegionId"?: string;
        "InstanceId": string;
        "UserClientIp"?: string;
        "Lang"?: string;
        "PageNumber"?: number;
        "PageSize"?: number;
    }): Promise<{}>;
    DescribeGtmInstanceStatus(query: {
        "RegionId"?: string;
        "InstanceId": string;
        "Lang"?: string;
        "UserClientIp"?: string;
    }): Promise<{}>;
    DescribeGtmInstances(query: {
        "RegionId"?: string;
        "Lang"?: string;
        "UserClientIp"?: string;
        "PageNumber"?: number;
        "PageSize"?: number;
        "Keyword"?: string;
        "ResourceGroupId"?: string;
        "NeedDetailAttributes"?: boolean;
    }): Promise<{}>;
    DescribeGtmLogs(query: {
        "RegionId"?: string;
        "UserClientIp"?: string;
        "Lang"?: string;
        "InstanceId"?: string;
        "Keyword"?: string;
        "PageNumber"?: number;
        "PageSize"?: number;
        "StartTimestamp"?: number;
        "EndTimestamp"?: number;
    }): Promise<{}>;
    DescribeGtmMonitorAvailableConfig(query: {
        "RegionId"?: string;
        "UserClientIp"?: string;
        "Lang"?: string;
    }): Promise<{}>;
    DescribeGtmMonitorConfig(query: {
        "RegionId"?: string;
        "MonitorConfigId": string;
        "UserClientIp"?: string;
        "Lang"?: string;
    }): Promise<{}>;
    SetGtmAccessMode(query: {
        "RegionId"?: string;
        "StrategyId": string;
        "AccessMode": string;
        "Lang"?: string;
        "UserClientIp"?: string;
    }): Promise<{}>;
    SetGtmMonitorStatus(query: {
        "RegionId"?: string;
        "MonitorConfigId": string;
        "Status": string;
        "UserClientIp"?: string;
        "Lang"?: string;
    }): Promise<{}>;
    UpdateGtmInstanceGlobalConfig(query: {
        "RegionId"?: string;
        "InstanceId": string;
        "Lang"?: string;
        "UserClientIp"?: string;
        "InstanceName"?: string;
        "Ttl"?: number;
        "UserDomainName"?: string;
        "LbaStrategy"?: string;
        "AlertGroup"?: string;
        "CnameMode"?: string;
        "CnameCustomDomainName"?: string;
    }): Promise<{}>;
    UpdateGtmMonitor(query: {
        "RegionId"?: string;
        "MonitorConfigId": string;
        "ProtocolType": string;
        "MonitorExtendInfo": string;
        "IspCityNode": string[];
        "UserClientIp"?: string;
        "Lang"?: string;
        "Interval"?: number;
        "EvaluationCount"?: number;
        "Timeout"?: number;
    }): Promise<{}>;
    AddGtmRecoveryPlan(query: {
        "RegionId"?: string;
        "Name": string;
        "FaultAddrPool": string;
        "Remark"?: string;
        "Lang"?: string;
        "UserClientIp"?: string;
    }): Promise<{}>;
    DeleteGtmRecoveryPlan(query: {
        "RegionId"?: string;
        "RecoveryPlanId": number;
        "Lang"?: string;
        "UserClientIp"?: string;
    }): Promise<{}>;
    DescribeGtmRecoveryPlan(query: {
        "RegionId"?: string;
        "RecoveryPlanId": number;
        "UserClientIp"?: string;
        "Lang"?: string;
    }): Promise<{}>;
    DescribeGtmRecoveryPlanAvailableConfig(query: {
        "RegionId"?: string;
        "Lang"?: string;
        "UserClientIp"?: string;
    }): Promise<{}>;
    DescribeGtmRecoveryPlans(query: {
        "RegionId"?: string;
        "Lang"?: string;
        "UserClientIp"?: string;
        "Keyword"?: string;
        "PageNumber"?: number;
        "PageSize"?: number;
    }): Promise<{}>;
    ExecuteGtmRecoveryPlan(query: {
        "RegionId"?: string;
        "RecoveryPlanId": number;
        "Lang"?: string;
        "UserClientIp"?: string;
    }): Promise<{}>;
    PreviewGtmRecoveryPlan(query: {
        "RegionId"?: string;
        "RecoveryPlanId": number;
        "PageNumber"?: number;
        "Lang"?: string;
        "UserClientIp"?: string;
        "PageSize"?: number;
    }): Promise<{}>;
    RollbackGtmRecoveryPlan(query: {
        "RegionId"?: string;
        "RecoveryPlanId": number;
        "Lang"?: string;
        "UserClientIp"?: string;
    }): Promise<{}>;
    UpdateGtmRecoveryPlan(query: {
        "RegionId"?: string;
        "RecoveryPlanId": number;
        "Lang"?: string;
        "UserClientIp"?: string;
        "Name"?: string;
        "Remark"?: string;
        "FaultAddrPool"?: string;
    }): Promise<{}>;
    AddGtmAccessStrategy(query: {
        "RegionId"?: string;
        "InstanceId": string;
        "StrategyName": string;
        "DefaultAddrPoolId": string;
        "FailoverAddrPoolId": string;
        "AccessLines": string;
        "Lang"?: string;
        "UserClientIp"?: string;
    }): Promise<{}>;
    DeleteGtmAccessStrategy(query: {
        "RegionId"?: string;
        "Lang"?: string;
        "UserClientIp"?: string;
        "StrategyId"?: string;
    }): Promise<{}>;
    QueryCreateInstancePrice(query: {
        "RegionId"?: string;
        "InstanceVersion": string;
        "Month": number;
        "Lang"?: string;
        "UserClientIp"?: string;
        "OwnerId"?: number;
    }): Promise<{}>;
}
export default ALIDNS;
