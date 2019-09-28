interface DCDN {
    /**
    * 调用AddDcdnIpaDomain添加IP4层应用加速域名，一次只能提交一个加速域名。
    */ AddDcdnIpaDomain(query: {
        "RegionId"?: string;
        /**
        * 需要接入全站加速IPA的域名。支持泛域名，以点号（.）开头，例如：.example.com。
        * @example `example.com`
        */ "DomainName": string;
        /**
        * 回源地址列表。
        * @example `[{"content":"1.1.1.1","type":"ipaddr","priority":"20","port":80,"weight":"15"}]`
        */ "Sources": string;
        "OwnerId"?: number;
        /**
        * 资源组ID，不传时，自动补全默认资源组ID。
        * @example `123`
        */ "ResourceGroupId"?: string;
        /**
        * 检测URL。
        * @example `yourCheckUrl`
        */ "CheckUrl"?: string;
        /**
        * 取值范围：**domestic**、**overseas**、**global**，默认为**domestic**。
        * 国际用户、国内L3及以上用户设置有效。
        * @example `domestic`
        */ "Scope"?: string;
        /**
        * 顶级接入域。
        * @example `yourTopLevelDomain`
        */ "TopLevelDomain"?: string;
    }): Promise<{}>;
    /**
    * 调用DescribeDcdnService查询DCDN服务状态。包括：当前计费类型、服务开通时间、下次生效的计费类型、当前业务状态等。
    */ DescribeDcdnService(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
    }): Promise<{}>;
    /**
    * 调用DescribeDcdnRefreshQuota查询当日剩余刷新、预热URL及目录的次数。
    */ DescribeDcdnRefreshQuota(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
    }): Promise<{}>;
    /**
    * 调用DescribeUserDcdnStatus查询全站加速是否开通，是否欠费。
    */ DescribeUserDcdnStatus(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
    }): Promise<{}>;
    /**
    * 调用DescribeDcdnDomainIpaTrafficData获取加速域名的四层加速网络流量监控数据，单位：byte。
    */ DescribeDcdnDomainIpaTrafficData(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 如果参数为空，默认返回所有加速域名合并后数据。
        * 可输入需要查询的加速域名。支持批量域名查询，多个域名用逗号（,）分隔。
        * @example `example.com`
        */ "DomainName"?: string;
        /**
        * 获取数据起始时间点。
        * - 日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
        * - 最小数据粒度为5分钟。
        * - 不写默认读取过去24小时数据。
        * @example `2017-12-10T20:00:00Z`
        */ "StartTime"?: string;
        /**
        * 获取数据结束时间点。
        * - 结束时间需大于起始时间。
        * - 日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
        * @example `2017-12-10T21:00:00Z`
        */ "EndTime"?: string;
        /**
        * 是否自适应计算interval值，如果timeMerge=1，会根据startTime和endTime计算出合适的inteval值，和interval参数任选。
        * @example `1`
        */ "TimeMerge"?: string;
        /**
        * 查询数据的时间粒度，支持**300**、**3600**和**86400**秒。
        * - 3天以内（不包含3天整）支持**300**、 **3600**、 **86400**。
        * - 3-31天（不包含31天整）支持**3600**和**86400**。
        * - 31天以上支持**86400**。
        * 不传和传的值不支持时，使用默认值。
        * @example `300`
        */ "Interval"?: string;
        /**
        * 是否补零。
        * @example `false`
        */ "FixTimeGap"?: string;
        /**
        * 运营商英文名，通过**DescribeCdnRegionAndIsp**接口获得，不传为所有运营商。
        * @example `unicom`
        */ "IspNameEn"?: string;
        /**
        * 区域英文名，通过**DescribeCdnRegionAndIsp**接口获得，不传为所有区域。
        * @example `beijing`
        */ "LocationNameEn"?: string;
    }): Promise<{}>;
    /**
    * 调用StopDcdnIpaDomain停用某个加速域名，将DomainStatus变更为offline。
    */ StopDcdnIpaDomain(query: {
        "RegionId"?: string;
        /**
        * 需要接入全站加速IPA的域名。
        * @example `example.com`
        */ "DomainName": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    /**
    * 调用PreloadDcdnObjectCaches将源站的内容主动预热到L2 Cache节点上，用户首次访问可直接命中缓存，缓解源站压力。
    */ PreloadDcdnObjectCaches(query: {
        "RegionId"?: string;
        /**
        * 多个URL用换行符（\n）或（\r\n）分隔。
        * @example `example.com/image/1.png`
        */ "ObjectPath": string;
        "OwnerId"?: number;
        /**
        * 预热区域。取值范围：
        * - **domestic**
        * - **overseas**
        * @example `domestic`
        */ "Area"?: string;
    }): Promise<{}>;
    /**
    * 调用DescribeDcdnIpaDomainDetail获取指定加速域名配置的基本信息
    */ DescribeDcdnIpaDomainDetail(query: {
        "RegionId"?: string;
        /**
        * 接入全站加速IPA进行加速的域名。
        * @example `example.com`
        */ "DomainName": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    /**
    * 调用RefreshDcdnObjectCaches刷新节点上的文件内容，刷新指定URL内容至Cache节点。支持URL批量刷新。
    */ RefreshDcdnObjectCaches(query: {
        "RegionId"?: string;
        /**
        * 刷新路径，多个URL用换行符（\n）或（\r\n）分隔。
        * @example `example.com/image/1.png`
        */ "ObjectPath": string;
        "OwnerId"?: number;
        /**
        * 刷新类型。取值范围：
        * - **File**
        * - **Directory**
        * 默认值：**File**
        * @example `File`
        */ "ObjectType"?: string;
    }): Promise<{}>;
    /**
    * 调用DescribeDcdnUserDomains查询用户名下所有的全站加速域名。支持域名模糊匹配过滤和域名状态过滤。
    */ DescribeDcdnUserDomains(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 分页大小。默认**20**，最大**50**，取值：**1**~**50**之前的任意整数。
        * @example `20`
        */ "PageSize"?: number;
        /**
        * 页数。取值范围：**1**~**100000**。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 域名模糊匹配过滤。
        * @example `example.com`
        */ "DomainName"?: string;
        /**
        * 域名状态过滤。
        * @example `运行中`
        */ "DomainStatus"?: string;
        /**
        * 域名查询类型。默认值：**fuzzy_match**。取值范围：
        * - **fuzzy_match**：模糊匹配。
        * - **pre_match**：前匹配。
        * - **suf_match**：后匹配。
        * - **full_match**：完全匹配。
        * @example `fuzzy_match`
        */ "DomainSearchType"?: string;
        /**
        * 检查domain是否展出。
        * @example `false`
        */ "CheckDomainShow"?: boolean;
        /**
        * 资源组ID。
        * @example `123`
        */ "ResourceGroupId"?: string;
        /**
        * 功能ID。
        * @example `图片鉴黄`
        */ "FuncId"?: string;
        /**
        * 过滤。支持**config**（已开通**funcid**）和**unconfig**（未开通**funcid**）。
        * @example `config`
        */ "FuncFilter"?: string;
        "ChangeStartTime"?: string;
        "ChangeEndTime"?: string;
    }): Promise<{}>;
    /**
    * 调用DescribeDcdnDomainCname检测用户是否完成Cname，支持多个域名。
    */ DescribeDcdnDomainCname(query: {
        "RegionId"?: string;
        /**
        * 需要接入CDN的域名，多个域名以逗号（,）分隔。
        * @example `example.com`
        */ "DomainName": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    /**
    * 调用UpdateDcdnIpaDomain修改加速域名。
    */ UpdateDcdnIpaDomain(query: {
        "RegionId"?: string;
        /**
        * 需要接入全站加速IPA的域名。
        * @example `example.com`
        */ "DomainName": string;
        "OwnerId"?: number;
        /**
        * 回源地址列表。
        * @example `[{"content":"1.1.1.1","type":"ipaddr","priority":"20","port":80,"weight":"15"}]`
        */ "Sources"?: string;
        /**
        * 资源组ID。
        * @example `123`
        */ "ResourceGroupId"?: string;
        /**
        * 顶级接入域。
        * @example `yourDomain.com`
        */ "TopLevelDomain"?: string;
    }): Promise<{}>;
    /**
    * 调用DescribeDcdnIpaUserDomains查询用户名下所有的IP4层应用加速域名。
    */ DescribeDcdnIpaUserDomains(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 分页大小，默认**20**，最大**50**，取值：**1**~**50**之前的任意整数。
        * @example `20`
        */ "PageSize"?: number;
        /**
        * 取得第几页，取值范围为：**1**~**100000**。
        * @example `20`
        */ "PageNumber"?: number;
        /**
        * 域名模糊匹配过滤。
        * @example `example.com`
        */ "DomainName"?: string;
        /**
        * 域名状态过滤。
        * @example `online`
        */ "DomainStatus"?: string;
        /**
        * 域名查询类型，默认**fuzzy_match**。
        * - **fuzzy_match**：模糊匹配。
        * - **pre_match**：前匹配。
        * - **suf_match**：后匹配。
        * - **full_match**：完全匹配。
        * @example `fuzzy_match`
        */ "DomainSearchType"?: string;
        /**
        * 检查domain是否展出。
        * @example `false`
        */ "CheckDomainShow"?: boolean;
        /**
        * 资源组ID。
        * @example `ResourceGroupId`
        */ "ResourceGroupId"?: string;
        /**
        * 功能ID。例如：98表示图片鉴黄功能。
        * @example `98`
        */ "FuncId"?: string;
        /**
        * 过滤，支持**config**和**unconfig**。**config**是开通了funcid的，**unconfig**是没有开通funcid的。
        * @example `config`
        */ "FuncFilter"?: string;
    }): Promise<{}>;
    /**
    * 调用DescribeDcdnDomainLog获取指定域名的原始访问日志的下载地址。
    */ DescribeDcdnDomainLog(query: {
        "RegionId"?: string;
        /**
        * 域名（只支持单个查询）。
        * @example `example.com`
        */ "DomainName": string;
        "OwnerId"?: number;
        /**
        * 分页大小。默认值：**300**。最大值：**1000**。
        * 取值：**1**~**1000**之前的任意整数。
        * @example `300`
        */ "PageSize"?: number;
        /**
        * 取得第几页。
        * 取值范围：大于**1**的任意整数。
        * @example `2`
        */ "PageNumber"?: number;
        /**
        * 获取日志起始时间点。
        * 日期格式按照ISO8601表示法，并使用UTC时间。
        * @example `2017-01-01T12:12:20Z`
        */ "StartTime"?: string;
        /**
        * 结束时间需大于起始时间。起止时间和结束时间，间隔不超过一年。
        * 获取日期格式按照ISO8601表示法，并使用UTC时间。
        * @example `2017-01-01T12:12:20Z`
        */ "EndTime"?: string;
    }): Promise<{}>;
    /**
    * 调用DescribeDcdnIpaService查询全站加速ipa服务状态。包括：当前计费类型，服务开通时间，下次生效的计费类型，当前业务状态等。
    */ DescribeDcdnIpaService(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
    }): Promise<{}>;
    /**
    * 调用ModifyDCdnDomainSchdmByProperty修改加速域名。
    */ ModifyDCdnDomainSchdmByProperty(query: {
        "RegionId"?: string;
        /**
        * 需修改加速区域的域名。
        * @example `example.com`
        */ "DomainName": string;
        /**
        * 调度域属性，{"coverage":"overseas"} 中coverage支持**domestic**、**overseas**、**global**。
        * @example `domestic`
        */ "Property": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    /**
    * 调用AddDcdnDomain添加全站加速域名，一次只能提交一个加速域名。
    */ AddDcdnDomain(query: {
        "RegionId"?: string;
        /**
        * 需要接入的域名。支持泛域名，以点号（.）开头，如：.a.com。
        * @example `example.com`
        */ "DomainName": string;
        /**
        * 回源地址列表。
        * @example `[{"content":"1.1.1.1","type":"ipaddr","priority":"20","port":80}]`
        */ "Sources": string;
        "OwnerId"?: number;
        /**
        * 资源组ID。不传时，自动补全默认资源组ID。
        * @example `123`
        */ "ResourceGroupId"?: string;
        /**
        * 检测URL。
        * @example `xxx.com`
        */ "CheckUrl"?: string;
        /**
        * 取值范围：**domestic**、**overseas**、**global**，默认**domestic**。
        * @example `domestic`
        */ "Scope"?: string;
        /**
        * 顶级接入域。
        * @example `yourTopLevelDomain`
        */ "TopLevelDomain"?: string;
    }): Promise<{}>;
    /**
    * 停用加速域名，将DomainStatus变更为offline。
    */ BatchStopDcdnDomain(query: {
        "RegionId"?: string;
        /**
        * 需要接入全站加速的域名，多个用逗号（,）分隔。
        * @example `test.com`
        */ "DomainNames": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    /**
    * 调用DescribeUserDcdnIpaStatus查询全站加速IPA是否开通，是否欠费。
    */ DescribeUserDcdnIpaStatus(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
    }): Promise<{}>;
    /**
    * 调用DescribeDcdnUserResourcePackage查询DCDN用户当前流量包。
    */ DescribeDcdnUserResourcePackage(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
    }): Promise<{}>;
    /**
    * 调用DeleteDcdnIpaDomain删除已添加的加速域名。
    */ DeleteDcdnIpaDomain(query: {
        "RegionId"?: string;
        /**
        * 要删除的域名。
        * @example `example.com`
        */ "DomainName": string;
        "OwnerId"?: number;
        /**
        * 资源组ID。
        * @example `123`
        */ "ResourceGroupId"?: string;
    }): Promise<{}>;
    /**
    * 调用StartDcdnIpaDomain启用状态为停用的加速域名，将DomainStatus变更为online。
    */ StartDcdnIpaDomain(query: {
        "RegionId"?: string;
        /**
        * 需要接入全站加速IPA的域名。
        * @example `example.com`
        */ "DomainName": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    /**
    * 调用DescribeDcdnCertificateDetail获取证书详细信息。
    */ DescribeDcdnCertificateDetail(query: {
        "RegionId"?: string;
        /**
        * 证书名称。
        * @example `yourCertName`
        */ "CertName": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    /**
    * 调用BatchStartDcdnDomain启用状态为“”停用“”的加速域名，将DomainStatus变更为online。
    */ BatchStartDcdnDomain(query: {
        "RegionId"?: string;
        /**
        * 需要接入全站加速的域名，用逗号（,）分隔。
        * @example `test.com`
        */ "DomainNames": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    /**
    * 调用SetDcdnDomainCertificate设置某域名下证书功能是否启用，以及修改证书信息。
    */ SetDcdnDomainCertificate(query: {
        "RegionId"?: string;
        /**
        * 指定证书所属加速域名。需属于HTTPS加速类型。
        * @example `example.com`
        */ "DomainName": string;
        /**
        * HTTPS证书是否启用。默认值：**off**。取值范围：
        * - **on**：启用。
        * - **off**：不启用。
        * @example `on`
        */ "SSLProtocol": string;
        "OwnerId"?: number;
        /**
        * 证书名称。
        * @example `yourCertName`
        */ "CertName"?: string;
        /**
        * 证书类型。取值范围：
        * - **upload**：上传证书。
        * - **cas**：证书中心证书。
        * - **free**：免费证书。
        * @example `cas`
        */ "CertType"?: string;
        /**
        * 安全证书内容。不启用证书则无需输入，配置证书请输入证书内容。
        * @example `SSLPub`
        */ "SSLPub"?: string;
        /**
        * 私钥内容。不启用证书则无需输入，配置证书请输入私钥内容。
        * @example `SSLPri`
        */ "SSLPri"?: string;
        /**
        * 地区信息。
        * @example `cn-shanghai`
        */ "Region"?: string;
        /**
        * 设置为1时，忽略证书名称重复的校验，覆盖原有同名证书信息。
        * @example `1`
        */ "ForceSet"?: string;
    }): Promise<{}>;
    /**
    * 调用StartDcdnDomain启用状态为停用的加速域名，将DomainStatus变更为online。
    */ StartDcdnDomain(query: {
        "RegionId"?: string;
        /**
        * 需要接入全站加速的域名。
        * @example `example.com`
        */ "DomainName": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    /**
    * 调用StopDcdnDomain停用某个加速域名，将DomainStatus变更为offline。
    */ StopDcdnDomain(query: {
        "RegionId"?: string;
        /**
        * 需要接入全站加速的域名。
        * @example `example.com`
        */ "DomainName": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    /**
    * 调用DescribeDcdnDomainCertificateInfo获取指定加速域名证书信息。
    */ DescribeDcdnDomainCertificateInfo(query: {
        "RegionId"?: string;
        /**
        * 加速域名。
        * @example `test.com`
        */ "DomainName": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    /**
    * 调用DescribeDcdnRefreshTasks查询刷新、预热状态是否在全网生效。
    */ DescribeDcdnRefreshTasks(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 按任务ID查询刷新状态。
        * @example `123`
        */ "TaskId"?: string;
        /**
        * 按路径查询，准确匹配。
        * @example `http://aaa.com/1.txt`
        */ "ObjectPath"?: string;
        /**
        * 取得页数。取值范围为：**1**~**100000**。
        * @example `2`
        */ "PageNumber"?: number;
        /**
        * 任务类型。取值范围：
        * - **file**
        * - **path**
        * - **preload**
        * 当指定DomainName或TaskStatus时，此项必填。
        * @example `file`
        */ "ObjectType"?: string;
        /**
        * 域名。
        * @example `example.com`
        */ "DomainName"?: string;
        /**
        * 任务状态：
        * - **Complete**：完成。
        * - **Refreshing**：刷新中。
        * - **Failed**：刷新失败。
        * @example `Complete`
        */ "Status"?: string;
        /**
        * 分页大小。默认值：**20**，最大值：**50**，取值范围：**1**~**50**之前的任意整数。
        * @example `20`
        */ "PageSize"?: number;
        /**
        * 开始时间。
        * @example `2017-01-01T12:12:20Z`
        */ "StartTime"?: string;
        /**
        * 结束时间。
        * @example `2017-01-01T12:12:20Z`
        */ "EndTime"?: string;
        /**
        * 资源组ID。
        * @example `123`
        */ "ResourceGroupId"?: string;
    }): Promise<{}>;
    /**
    * 调用BatchSetDcdnIpaDomainConfigsIP4层应用加速域名批量配置。
    */ BatchSetDcdnIpaDomainConfigs(query: {
        "RegionId"?: string;
        /**
        * 您的IP4层应用加速域名，多个用逗号（,）分隔。
        * @example `example.com`
        */ "DomainNames": string;
        /**
        * 功能列表。
        * @example `[{"functionArgs":[{"argName":"domain_name","argValue":"api.hellodtworld.com"}],"functionName":"set_req_host_header"}]`
        */ "Functions": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    /**
    * 调用DescribeDcdnDomainIpaBpsData获取加速域名四层加速的网络带宽监控数据。
    */ DescribeDcdnDomainIpaBpsData(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 如果参数为空，默认返回所有加速域名合并后数据
        * 可输入需要查询的加速域名，支持批量域名查询，多个域名用逗号（,）分隔。
        * @example `example.com`
        */ "DomainName"?: string;
        /**
        * 获取数据起始时间点。
        * - 日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
        * - 最小数据粒度为5分钟。
        * - 不写默认读取过去24小时数据。
        * @example `2017-12-10T20:00:00Z`
        */ "StartTime"?: string;
        /**
        * 获取数据结束时间点。
        * - 结束时间需大于起始时间。
        * - 日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
        * @example `2017-12-10T21:00:00Z`
        */ "EndTime"?: string;
        /**
        * 是否自适应计算interval值，如果timeMerge=1，会根据startTime和endTime计算出合适的inteval值，和interval参数任选。
        * @example `1`
        */ "TimeMerge"?: string;
        /**
        * 查询数据的时间粒度，支持**300**、**3600**和**86400**秒。
        * - 3天以内（不包含3天整）支持**300**、**3600**、**86400**。
        * - 3-31天（不包含31天整）支持**3600**和**86400**。
        * - 31天以上支持**86400**。
        * 不传和传的值不支持时，使用默认值。
        * @example `300`
        */ "Interval"?: string;
        /**
        * 是否补零。
        * @example `false`
        */ "FixTimeGap"?: string;
        /**
        * 运营商英文名，通过**DescribeCdnRegionAndIsp**接口获得，不传为所有运营商。
        * @example `Unicom`
        */ "IspNameEn"?: string;
        /**
        * 区域英文名，通过**DescribeCdnRegionAndIsp**接口获得，不传为所有区域。
        * @example `beijing`
        */ "LocationNameEn"?: string;
    }): Promise<{}>;
    /**
    * 调用DescribeDcdnDomainRealTimeByteHitRateData获取域名1分钟粒度字节命中率数据。
    */ DescribeDcdnDomainRealTimeByteHitRateData(query: {
        "RegionId"?: string;
        /**
        * 域名。多个之间用逗号（,）隔开。
        * @example `example.com`
        */ "DomainName": string;
        "OwnerId"?: number;
        /**
        * @example `2017-12-10T20:00:00Z`
        */ "StartTime"?: string;
        /**
        * @example `2017-12-10T21:00:00Z`
        */ "EndTime"?: string;
    }): Promise<{}>;
    /**
    * 调用DescribeDcdnDomainOriginTrafficData获取加速域名的回源流量监控数据，单位：bit。
    */ DescribeDcdnDomainOriginTrafficData(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 如果参数为空，默认返回所有加速域名合并后数据。
        * 可输入需要查询的加速域名。支持批量域名查询，多个域名用逗号（,）分隔。
        * @example `example.com`
        */ "DomainName"?: string;
        /**
        * 获取数据起始时间点。
        * - 日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
        * - 最小数据粒度为5分钟。
        * - 不写默认读取过去24小时数据。
        * @example `2017-12-10T20:00:00Z`
        */ "StartTime"?: string;
        /**
        * 获取数据结束时间点。
        * - 结束时间需大于起始时间。
        * - 日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
        * @example `2017-12-10T21:00:00Z`
        */ "EndTime"?: string;
        /**
        * 查询数据的时间粒度，支持**300**、 **3600**和**86400**秒。
        * - 3天以内（不包含3天整）支持**300**、 **3600**、 **86400**。
        * - 3-31天（不包含31天整）支持**3600**和**86400**。
        * - 31天以上支持**86400**。
        * 不传和传的值不支持时，使用默认值。
        * @example `300`
        */ "Interval"?: string;
    }): Promise<{}>;
    /**
    * 调用UpdateDcdnDomain修改加速域名。
    */ UpdateDcdnDomain(query: {
        "RegionId"?: string;
        /**
        * 需要接入全站加速的域名。
        * @example `example.com`
        */ "DomainName": string;
        "OwnerId"?: number;
        /**
        * 回源地址列表。
        * @example `[{"content":"1.1.1.1","type":"ipaddr","priority":"20","port":80}]`
        */ "Sources"?: string;
        /**
        * 资源组ID。
        * @example `123`
        */ "ResourceGroupId"?: string;
        /**
        * 顶级接入域。
        * @example `yourTopLevelDomain  `
        */ "TopLevelDomain"?: string;
    }): Promise<{}>;
    /**
    * 调用DescribeDcdnDomainDetail获取指定加速域名配置的基本信息。
    */ DescribeDcdnDomainDetail(query: {
        "RegionId"?: string;
        /**
        * 接入加速的域名。
        * @example `example.com`
        */ "DomainName": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    /**
    * 调用DescribeDcdnDomainBpsData获取加速域名的网络带宽监控数据。
    */ DescribeDcdnDomainBpsData(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 如果参数为空，默认返回所有加速域名合并后数据。
        * 可输入需要查询的加速域名。支持批量域名查询，多个域名用逗号（,）分隔。
        * @example `example.com`
        */ "DomainName"?: string;
        /**
        * 获取数据起始时间点。
        * - 日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
        * - 最小数据粒度为5分钟。
        * - 不写默认读取过去24小时数据。
        * @example `2017-12-10T20:00:00Z`
        */ "StartTime"?: string;
        /**
        * 获取数据结束时间点。
        * - 结束时间需大于起始时间。
        * - 获日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ
        * @example `2017-12-10T21:00:00Z`
        */ "EndTime"?: string;
        /**
        * 查询数据的时间粒度，支持**300**、 **3600**和**86400**秒。
        * - 3天以内（不包含3天整）支持**300**、 **3600**、 **86400**。
        * - 3-31天（不包含31天整）支持**3600**和**86400**。
        * - 31天以上支持**86400**。
        * 不传和传的值不支持时，使用默认值。
        * @example `300`
        */ "Interval"?: string;
        /**
        * 运营商英文名。通过**DescribeCdnRegionAndIsp**接口获得，不传为所有运营商。
        * @example `beijing`
        */ "IspNameEn"?: string;
        /**
        * 区域英文名。通过**DescribeCdnRegionAndIsp**接口获得，不传为所有区域。
        * @example `unicom`
        */ "LocationNameEn"?: string;
    }): Promise<{}>;
    /**
    * 调用DescribeDcdnDomainWebsocketHttpCodeData获取加速域名websocket协议的最小5分钟粒度的HTTP返回码占比数据。
    */ DescribeDcdnDomainWebsocketHttpCodeData(query: {
        "RegionId"?: string;
        /**
        * 需要查询的加速域名，支持批量，多个域名用逗号（,）分隔。
        * @example `example.com`
        */ "DomainName": string;
        "OwnerId"?: number;
        /**
        * 获取数据起始时间点。
        * - 日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
        * - 最小数据粒度为5分钟。
        * 不写默认读取过去24小时数据
        * @example `2018-03-01T05:00:00Z`
        */ "StartTime"?: string;
        /**
        * 结束时间需大于起始时间。
        * 获日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ
        * @example `2018-03-01T06:00:00Z`
        */ "EndTime"?: string;
        /**
        * 查询数据的时间粒度，支持**300**、**3600**和**86400**秒。
        * - 3天以内（不包含3天整）支持**300**、**3600**、**86400**。
        * - 3-31天（不包含31天整）支持**3600**和**86400**。
        * - 31天以上支持**86400**。
        * 不传和传的值不支持时，使用默认值。
        * @example `300`
        */ "Interval"?: string;
        /**
        * 运营商英文名，通过**DescribeCdnRegionAndIsp**接口获得，不传为所有运营商。
        * @example `unicom`
        */ "IspNameEn"?: string;
        /**
        * 区域英文名，通过**DescribeCdnRegionAndIsp**接口获得，不传为所有区域。
        * @example `beijing`
        */ "LocationNameEn"?: string;
    }): Promise<{}>;
    /**
    * 调用DescribeDcdnDomainTrafficData获取加速域名的网络流量监控数据，单位：byte。
    */ DescribeDcdnDomainTrafficData(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 如果参数为空，默认返回所有加速域名合并后数据。
        * 可输入需要查询的加速域名。支持批量域名查询，多个域名用逗号（,）分隔。
        * @example `example.com`
        */ "DomainName"?: string;
        /**
        * 获取数据起始时间点。
        * - 日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
        * - 最小数据粒度为1小时。
        * - 不写默认读取过去24小时数据。
        * @example `2017-12-10T20:00:00Z`
        */ "StartTime"?: string;
        /**
        * 获取数据结束时间点。
        * - 结束时间需大于起始时间。
        * - 日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ
        * @example `2017-12-10T21:00:00Z`
        */ "EndTime"?: string;
        /**
        * 查询数据的时间粒度，支持**300**、 **3600**和**86400**秒。
        * - 3天以内（不包含3天整）支持**300**、 **3600**、 **86400**。
        * - 3-31天（不包含31天整）支持**3600**和**86400**。
        * - 31天以上支持**86400**。
        * 不传和传的值不支持时，使用默认值。
        * @example `300`
        */ "Interval"?: string;
        /**
        * 运营商英文名。通过**DescribeCdnRegionAndIsp**接口获得，不传为所有运营商。
        * @example `unicom`
        */ "IspNameEn"?: string;
        /**
        * 区域英文名。通过**DescribeCdnRegionAndIsp**接口获得，不传为所有区域。
        * @example `beijing`
        */ "LocationNameEn"?: string;
    }): Promise<{}>;
    /**
    * 调用DescribeDcdnCertificateList获取证书列表信息。
    */ DescribeDcdnCertificateList(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 加速域名。
        * @example `example.com`
        */ "DomainName"?: string;
    }): Promise<{}>;
    /**
    * 调用DescribeDcdnDomainIspData获取加速域名天粒度的用户运营商分布数据统计。
    */ DescribeDcdnDomainIspData(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 需要查询的加速域名，只支持一个域名，不写代表当前用户下所有域名。
        * @example `example.com`
        */ "DomainName"?: string;
        /**
        * 获取数据起始时间点，北京时间。格式为：YYYY-MM-DDThh:mm:ssZ。
        * 不写默认读取过去24小时数据。
        * @example `2015-12-05T12:00:00Z`
        */ "StartTime"?: string;
        /**
        * 结束时间需大于起始时间，北京时间。格式为：YYYY-MM-DDThh:mm:ssZ。
        * @example `2015-12-07T12:00:00Z`
        */ "EndTime"?: string;
    }): Promise<{}>;
    /**
    * 调用DescribeDcdnDomainQpsData获取加速域名的每秒访问次数QPS。
    */ DescribeDcdnDomainQpsData(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 如果参数为空，默认返回所有加速域名合并后数据。
        * 可输入需要查询的加速域名。支持批量域名查询，多个域名用逗号（,）分隔。
        * @example `example.com`
        */ "DomainName"?: string;
        /**
        * 获取数据起始时间点。
        * - 日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
        * - 最小数据粒度为1小时。
        * - 不写默认读取过去24小时数据。
        * @example `2017-12-10T20:00:00Z`
        */ "StartTime"?: string;
        /**
        * 获取数据结束时间点。
        * - 结束时间需大于起始时间。
        * - 日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ
        * @example `2017-12-10T21:00:00Z`
        */ "EndTime"?: string;
        /**
        * 查询数据的时间粒度，支持**300**、**3600**和**86400**秒。
        * - 3天以内（不包含3天整）支持**300**、 **3600**、 **86400**。
        * - 3-31天（不包含31天整）支持**3600**和**86400**。
        * - 31天以上支持**86400**。
        * 不传和传的值不支持时，使用默认值。
        * @example `300`
        */ "Interval"?: string;
        /**
        * 运营商英文名。通过**DescribeCdnRegionAndIsp**接口获得，不传为所有运营商。
        * @example `unicom`
        */ "IspNameEn"?: string;
        /**
        * 区域英文名。通过**DescribeCdnRegionAndIsp**接口获得，不传为所有区域。
        * @example `beijing`
        */ "LocationNameEn"?: string;
    }): Promise<{}>;
    /**
    * 调用DeleteDcdnDomain删除已添加的加速域名。
    */ DeleteDcdnDomain(query: {
        "RegionId"?: string;
        /**
        * 要删除的域名。
        * @example `example.com`
        */ "DomainName": string;
        "OwnerId"?: number;
        /**
        * 资源组ID。
        * @example `123`
        */ "ResourceGroupId"?: string;
    }): Promise<{}>;
    /**
    * 调用DescribeDcdnDomainRealTimeBpsData获取域名1分钟粒度带宽数据。
    */ DescribeDcdnDomainRealTimeBpsData(query: {
        "RegionId"?: string;
        /**
        * 域名。多个之间用逗号（,）隔开。
        * @example `example.com`
        */ "DomainName": string;
        "OwnerId"?: number;
        /**
        * 运营商英文名，通过**DescribeCdnRegionAndIsp**接口获得，不传为所有运营商。
        * @example `telecom`
        */ "IspNameEn"?: string;
        /**
        * 区域英文名，通过**DescribeCdnRegionAndIsp**接口获得，不传为所有区域。
        * @example `beijing`
        */ "LocationNameEn"?: string;
        /**
        * 起始时间，日期格式按照ISO8601表示法，并使用UTC时间。
        * @example `2018-01-02T11:00:00Z`
        */ "StartTime"?: string;
        /**
        * 结束时间，日期格式按照ISO8601表示法，并使用UTC时间。
        * @example `2018-01-02T11:00:00Z`
        */ "EndTime"?: string;
    }): Promise<{}>;
    /**
    * 调用DescribeDcdnDomainWebsocketBpsData获取加速域名websocket协议的网络带宽监控数据。
    */ DescribeDcdnDomainWebsocketBpsData(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 如果参数为空，默认返回所有加速域名合并后数据。
        * 可输入需要查询的加速域名支持批量域名查询，多个域名用逗号（,）分隔。
        * @example `example.com`
        */ "DomainName"?: string;
        /**
        * 获取数据起始时间点。
        * - 日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
        * - 最小数据粒度为1小时。
        * - 不写默认读取过去24小时数据。
        * @example `2017-12-10T20:00:00Z`
        */ "StartTime"?: string;
        /**
        * 获取数据结束时间点。
        * - 结束时间需大于起始时间。
        * - 日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ
        * @example `2017-12-10T21:00:00Z`
        */ "EndTime"?: string;
        /**
        * 查询数据的时间粒度，支持**300**、**3600**和**86400**秒。
        * - 3天以内（不包含3天整）支持**300**、 **3600**、 **86400**。
        * - 3-31天（不包含31天整）支持**3600**和**86400**。
        * - 31天以上支持**86400**。
        * 不传和传的值不支持时，使用默认值。
        * @example `300`
        */ "Interval"?: string;
        /**
        * 运营商英文名，通过**DescribeCdnRegionAndIsp**接口获得，不传为所有运营商。
        * @example `unicom`
        */ "IspNameEn"?: string;
        /**
        * 区域英文名，通过**DescribeCdnRegionAndIsp**接口获得，不传为所有区域。
        * @example `beijing`
        */ "LocationNameEn"?: string;
    }): Promise<{}>;
    /**
    * 调用DescribeDcdnDomainRealTimeHttpCodeData获取加速域名1分钟粒度的HTTP返回码占比数据。
    */ DescribeDcdnDomainRealTimeHttpCodeData(query: {
        "RegionId"?: string;
        /**
        * 如果参数为空，默认返回所有加速域名合并后数据。
        * 可输入需要查询的加速域名。支持批量域名查询，多个域名用逗号（,）分隔。
        * @example `example.com`
        */ "DomainName": string;
        "OwnerId"?: number;
        /**
        * 获取数据起始时间点。
        * - 日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
        * - 最小数据粒度为5分钟。
        * - 不写默认读取过去24小时数据。
        * @example `2017-12-10T20:00:00Z`
        */ "StartTime"?: string;
        /**
        * 获取数据结束时间点。
        * - 结束时间需大于起始时间。
        * - 获日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
        * @example `2017-12-10T21:00:00Z`
        */ "EndTime"?: string;
        /**
        * 运营商英文名，通过**DescribeCdnRegionAndIsp**接口获得，不传为所有运营商。
        * @example `beijing`
        */ "IspNameEn"?: string;
        /**
        * 区域英文名，通过**DescribeCdnRegionAndIsp**接口获得，不传为所有区域。
        * @example `unicom`
        */ "LocationNameEn"?: string;
    }): Promise<{}>;
    /**
    * 调用DescribeDcdnDomainRealTimeQpsData获取域名1分钟粒度每秒访问次数数据。
    */ DescribeDcdnDomainRealTimeQpsData(query: {
        "RegionId"?: string;
        /**
        * 域名。多个之间用逗号（,）隔开。
        * @example `example.com`
        */ "DomainName": string;
        "OwnerId"?: number;
        /**
        * 运营商英文名，通过**DescribeCdnRegionAndIsp**接口获得，不传为所有运营商。
        * @example `telecom`
        */ "IspNameEn"?: string;
        /**
        * 区域英文名，通过**DescribeCdnRegionAndIsp**接口获得，不传为所有区域。
        * @example `beijing`
        */ "LocationNameEn"?: string;
        /**
        * 起始时间，日期格式按照ISO8601表示法，并使用UTC时间,例如：2016-10-20T04:00:00Z。
        * @example `2018-01-02T11:26:00Z`
        */ "StartTime"?: string;
        /**
        * 结束时间，日期格式按照ISO8601表示法，并使用UTC时间,例如：2016-10-20T04:00:00Z。
        * @example `2018-01-02T11:27:00Z`
        */ "EndTime"?: string;
    }): Promise<{}>;
    /**
    * 调用DescribeDcdnUserQuota查询用户资源上限及已使用情况。
    */ DescribeDcdnUserQuota(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
    }): Promise<{}>;
    /**
    * 调用DescribeDcdnDomainRealTimeSrcTrafficData获取加速域名的1分钟回源流量监控数据，单位bit。
    */ DescribeDcdnDomainRealTimeSrcTrafficData(query: {
        "RegionId"?: string;
        /**
        * 可输入需要查询的加速域名。支持批量域名查询，多个域名用逗号（,）分隔。
        * @example `example.com`
        */ "DomainName": string;
        "OwnerId"?: number;
        /**
        * 获取数据起始时间点。
        * - 日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
        * - 不写默认读取过去1小时数据。
        * @example `2015-12-10T20:00:00Z`
        */ "StartTime"?: string;
        /**
        * 获取数据结束时间点。
        * - 结束时间需大于起始时间。
        * - 获日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
        * @example `2015-12-10T20:01:00Z`
        */ "EndTime"?: string;
    }): Promise<{}>;
    /**
    * 调用DescribeDcdnDomainRegionData获取加速域名天粒度的用户区域分布数据统计。
    */ DescribeDcdnDomainRegionData(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 需要查询的加速域名，只支持一个域名，不写代表所有。
        * @example `example.com`
        */ "DomainName"?: string;
        /**
        * 获取数据起始时间点，北京时间。格式为：YYYY-MM-DDThh:mm:ssZ
        * 不写默认读取过去24小时数据
        * @example `2015-12-05T12:00:00Z`
        */ "StartTime"?: string;
        /**
        * 结束时间需大于起始时间，北京时间。
        * 格式为：YYYY-MM-DDThh:mm:ssZ
        * @example `2015-12-07T12:00:00Z`
        */ "EndTime"?: string;
    }): Promise<{}>;
    /**
    * 调用DescribeDcdnDomainTopUrlVisit获取加速域名某天内的热门URL列表。
    */ DescribeDcdnDomainTopUrlVisit(query: {
        "RegionId"?: string;
        /**
        * 加速域名，只支持一个域名。
        * @example `example.com`
        */ "DomainName": string;
        "OwnerId"?: number;
        /**
        * 开始获取数据的时间点。不写默认读取过去24小时数据。
        * 格式为：YYYY-MM-DDThh:mm:ssZ，查询某天的数据，建议传YYYY-MM-DDT16:00:00Z。
        * @example `2018-10-03T16:00:00Z`
        */ "StartTime"?: string;
        /**
        * 排序方式，支持**traf**和**pv**，默认**pv**。
        * @example `pv`
        */ "SortBy"?: string;
    }): Promise<{}>;
    /**
    * 调用DescribeDcdnDomainOriginBpsData获取加速域名的回源带宽监控数据。
    */ DescribeDcdnDomainOriginBpsData(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 如果参数为空，默认返回所有加速域名合并后数据。
        * 可输入需要查询的加速域名。支持批量域名查询，多个域名用逗号（,）分隔。
        * @example `example.com`
        */ "DomainName"?: string;
        /**
        * 获取数据起始时间点。
        * - 日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
        * - 最小数据粒度为5分钟。
        * - 不写默认读取过去24小时数据。
        * @example `2017-12-10T20:00:00Z`
        */ "StartTime"?: string;
        /**
        * 获取数据结束时间点。
        * - 结束时间需大于起始时间。
        * - 获日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
        * @example `2017-12-10T21:00:00Z`
        */ "EndTime"?: string;
        /**
        * 查询数据的时间粒度，支持**300**、 **3600**和**86400**秒。
        * - 3天以内（不包含3天整）支持**300**、 **3600**、 **86400**。
        * - 3-31天（不包含31天整）支持**3600**和**86400**。
        * - 31天以上支持**86400**。
        * 不传和传的值不支持时，使用默认值。
        * @example `300`
        */ "Interval"?: string;
    }): Promise<{}>;
    /**
    * 调用DescribeDcdnDomainHitRateData获取加速域名的命中率。
    */ DescribeDcdnDomainHitRateData(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 需要查询的加速域名。只支持一个域名，不写代表该用户所有域名。
        * @example `example.com`
        */ "DomainName"?: string;
        /**
        * 获取数据起始时间点。
        * - 日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
        * - 最小数据粒度为5分钟。
        * - 不写默认读取过去24小时数据。
        * @example `2018-03-02T12:00:00Z`
        */ "StartTime"?: string;
        /**
        * 获取数据结束时间点。
        * - 结束时间需大于起始时间。
        * - 获日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
        * @example `2018-03-02T15:00:00Z`
        */ "EndTime"?: string;
        /**
        * 查询数据的时间粒度，支持**300**、 **3600**和**86400**秒。
        * - 3天以内（不包含3天整）支持**300**、 **3600**、 **86400**。
        * - 3-31天（不包含31天整）支持**3600**和**86400**。
        * - 31天以上支持**86400**。
        * 不传和传的值不支持时，使用默认值。
        * @example `300`
        */ "Interval"?: string;
    }): Promise<{}>;
    /**
    * 调用DescribeDcdnTopDomainsByFlow获取用户按流量排名的域名。
    */ DescribeDcdnTopDomainsByFlow(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 获取数据起始时间点。
        * - 日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
        * - 最小数据粒度为5分钟。
        * - 不写默认读取当月数据。
        * @example `2016-03-01T04:00:00Z`
        */ "StartTime"?: string;
        /**
        * 获取数据结束时间点。
        * - 结束时间需大于起始时间。
        * - 日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
        * @example `2016-03-14T07:34:00Z`
        */ "EndTime"?: string;
        /**
        * 域名获取数量限制，默认为**20**，取值支持**1**~**100**。
        * @example `20`
        */ "Limit"?: number;
    }): Promise<{}>;
    /**
    * 调用BatchSetDcdnDomainConfigs实现域名批量配置功能。
    */ BatchSetDcdnDomainConfigs(query: {
        "RegionId"?: string;
        /**
        * 您的加速域名，多个用逗号（,）分隔。
        * @example `example.com`
        */ "DomainNames": string;
        /**
        * 功能列表。
        * @example `[{"functionArgs":[{"argName":"domain_name","argValue":"api.hellodtworld.com"}],"functionName":"set_req_host_header"}]`
        */ "Functions": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    /**
    * 调用DescribeDcdnDomainTopReferVisit获取加速域名某天的热门页面引用次数排名。
    */ DescribeDcdnDomainTopReferVisit(query: {
        "RegionId"?: string;
        /**
        * 加速域名信息，只支持一个域名。
        * @example `example.com`
        */ "DomainName": string;
        "OwnerId"?: number;
        /**
        * 开始获取数据的时间点。不写默认读取过去24小时数据。
        * 格式为：YYYY-MM-DDThh:mm:ssZ。查询某天的数据，建议传YYYY-MM-DDT16:00:00Z
        * @example `2018-10-03T16:00:00Z`
        */ "StartTime"?: string;
        /**
        * 排序方式，支持**traf**和**pv**，默认**pv**。
        * @example `pv`
        */ "SortBy"?: string;
    }): Promise<{}>;
    /**
    * 调用DescribeDcdnDomainUvData获取加速域名最小1小时粒度的UV页面独立访问统计。
    */ DescribeDcdnDomainUvData(query: {
        "RegionId"?: string;
        /**
        * 需要查询的加速域名，只支持一个域名，不写代表当前用户下所有域名。
        * @example `example.com`
        */ "DomainName": string;
        "OwnerId"?: number;
        /**
        * 获取数据起始时间点。
        * - 日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
        * - 最小数据粒度为1小时。
        * - 不写默认读取过去24小时数据。
        * @example `2015-11-29T00:00:00Z`
        */ "StartTime"?: string;
        /**
        * 获取数据结束时间点。
        * - 结束时间需大于起始时间。
        * - 日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ
        * @example `2015-11-30T00:00:00Z`
        */ "EndTime"?: string;
    }): Promise<{}>;
    /**
    * 调用DescribeDcdnDomainHttpCodeData获取加速域名最小5分钟粒度的HTTP返回码占比数据。
    */ DescribeDcdnDomainHttpCodeData(query: {
        "RegionId"?: string;
        /**
        * 需要查询的加速域名。支持多个域名用逗号（,）分隔。
        * @example `example.com`
        */ "DomainName": string;
        "OwnerId"?: number;
        /**
        * 获取数据起始时间点。
        * - 日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
        * - 最小数据粒度为5分钟。
        * - 不写默认读取过去24小时数据。
        * @example `2018-03-01T05:00:00Z`
        */ "StartTime"?: string;
        /**
        * 获取数据结束时间点。
        * - 结束时间需大于起始时间。
        * - 日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
        * @example `2018-03-01T13:00:00Z`
        */ "EndTime"?: string;
        /**
        * 查询数据的时间粒度，支持**300**、 **3600**和**86400**秒。
        * - 3天以内（不包含3天整）支持**300**、 **3600**、 **86400**。
        * - 3-31天（不包含31天整）支持**3600**和**86400**。
        * - 31天以上支持**86400**。
        * 不传和传的值不支持时，使用默认值。
        * @example `300`
        */ "Interval"?: string;
        /**
        * 区域英文名。通过DescribeCdnRegionAndIsp接口获得，不传为所有区域。
        * @example `beijing`
        */ "IspNameEn"?: string;
        /**
        * 运营商英文名。通过DescribeCdnRegionAndIsp接口获得，不传为所有运营商。
        * @example `unicom`
        */ "LocationNameEn"?: string;
    }): Promise<{}>;
    /**
    * 调用BatchDeleteDcdnDomainConfigs批量删除域名配置。
    */ BatchDeleteDcdnDomainConfigs(query: {
        "RegionId"?: string;
        /**
        * 您的加速域名，多个用逗号（,）分隔。
        * @example `example.com`
        */ "DomainNames": string;
        /**
        * 功能列表名称，用逗号（,）分隔。
        * @example `referer_white_list_set,https_force`
        */ "FunctionNames": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    /**
    * 调用DeleteDcdnSpecificConfig指定删除某个域名的某个配置。
    */ DeleteDcdnSpecificConfig(query: {
        "RegionId"?: string;
        /**
        * 您的加速域名。
        * @example `example.com`
        */ "DomainName": string;
        /**
        * 配置ID。
        * @example `2317`
        */ "ConfigId": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    /**
    * 调用DescribeDcdnDomainConfigs查询域名配置，一次可查询多个功能配置。
    */ DescribeDcdnDomainConfigs(query: {
        "RegionId"?: string;
        /**
        * 您的加速域名。
        * @example `example.com`
        */ "DomainName": string;
        /**
        * 功能列表名称，用逗号（,）分隔。
        * @example `filetype_based_ttl_set,set_req_host_header`
        */ "FunctionNames": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    /**
    * 调用DescribeDcdnDomainPvData获取加速域名最小1小时粒度的PV页面访问统计。
    */ DescribeDcdnDomainPvData(query: {
        "RegionId"?: string;
        /**
        * 需要查询的加速域名，只支持一个域名，不写代表当前用户下所有域名。
        * @example `example.com`
        */ "DomainName": string;
        "OwnerId"?: number;
        /**
        * 获取数据起始时间点。
        * - 日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
        * - 最小数据粒度为1小时。
        * - 不写默认读取过去24小时数据。
        * @example `2015-11-28T00:00:00Z`
        */ "StartTime"?: string;
        /**
        * 获取数据结束时间点。
        * - 结束时间需大于起始时间。
        * - 日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ
        * @example `2015-11-29T00:00:00Z`
        */ "EndTime"?: string;
    }): Promise<{}>;
    DescribeDcdnDomainRealTimeReqHitRateData(query: {
        "RegionId"?: string;
        "DomainName": string;
        "OwnerId"?: number;
        "StartTime"?: string;
        "EndTime"?: string;
    }): Promise<{}>;
    DescribeDcdnDomainRealTimeSrcBpsData(query: {
        "RegionId"?: string;
        "DomainName": string;
        "OwnerId"?: number;
        "StartTime"?: string;
        "EndTime"?: string;
    }): Promise<{}>;
    DescribeDcdnDomainWebsocketTrafficData(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "DomainName"?: string;
        "StartTime"?: string;
        "EndTime"?: string;
        "Interval"?: string;
        "IspNameEn"?: string;
        "LocationNameEn"?: string;
    }): Promise<{}>;
    DescribeDcdnIpaDomainConfigs(query: {
        "RegionId"?: string;
        "DomainName": string;
        "FunctionNames": string;
        "OwnerId"?: number;
    }): Promise<{}>;
}
export default DCDN;
