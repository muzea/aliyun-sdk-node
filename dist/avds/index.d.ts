interface AVDS {
    /**
    * 调用DescribeDomains接口，查询任务实例对应攻击面数据项中的域名信息。
    */ DescribeDomains(query: {
        "RegionId"?: string;
        /**
        * 任务ID。获取指定任务ID数据。
        * @example `12345`
        */ "TaskId": number;
        "SourceIp"?: string;
        /**
        * 资产名称。查询指定资产下的检测数据。
        * @example `foo.com`
        */ "Asset"?: string;
        /**
        * 指定返回结果的当前页码。默认值为1。
        * @example `1`
        */ "CurrentPage"?: number;
        /**
        * 指定列表每页显示数据条数。默认值为10，且可设置值最大为10。
        * @example `10`
        */ "PageSize"?: number;
    }): Promise<{}>;
    /**
    * 调用本接口为资产添加标签。
    */ AddAssetTags(query: {
        "RegionId"?: string;
        "Assets": string[];
        /**
        * 指定访问者源IP地址。
        * @example `1.2.3.4`
        */ "SourceIp"?: string;
        /**
        * 指定返回结果的语言环境。
        * - **zh**：中文
        * - **en**：英文
        * @example `zh`
        */ "Lang"?: string;
        "Tags"?: string[];
    }): Promise<{}>;
    /**
    * 调用本接口添加用户资产。
    */ AddAssets(query: {
        "RegionId"?: string;
        "Assets": string[];
        /**
        * 指定访问者源IP地址。
        * @example `1.2.3.4`
        */ "SourceIp"?: string;
        "StartAfterVerified"?: boolean;
        "AssetGroupId"?: string;
        "Tags"?: string[];
    }): Promise<{}>;
    /**
    * 调用DescribePorts接口，查询任务实例对应攻击面数据项中的端口服务信息。
    */ DescribePorts(query: {
        "RegionId"?: string;
        /**
        * 任务ID。获取指定任务ID数据。
        * @example `12345`
        */ "TaskId": number;
        "SourceIp"?: string;
        /**
        * 资产名称。查询指定资产下的检测数据。
        * @example `foo.com`
        */ "Asset"?: string;
        /**
        * 指定返回结果的当前页码。默认值为1。
        * @example `1`
        */ "CurrentPage"?: number;
        /**
        * 指定列表每页显示数据条数。默认值为10，且可设置值最大为10。
        * @example `10`
        */ "PageSize"?: number;
    }): Promise<{}>;
    /**
    * 调用本接口删除用户资产。
    */ DeleteAssets(query: {
        "RegionId"?: string;
        "AssetIds": string[];
        /**
        * 指定访问源IP地址。
        * @example `1.2.3.4`
        */ "SourceIp"?: string;
    }): Promise<{}>;
    /**
    * 调用本接口创建扫描任务。
    */ CreateScan(query: {
        "RegionId"?: string;
        /**
        * 为扫描任务设置任务名称。
        * @example `单次任务`
        */ "Name": string;
        /**
        * 指定扫描任务的扫描资产的检测类型。
        * - **vuln**：漏洞类型
        * - **content**：内容风险
        * - **asset**：资产发现
        * @example `vuln`
        */ "ScanType": string;
        /**
        * 指定访问者源IP地址。
        * @example `1.2.3.4`
        */ "SourceIp"?: string;
        "Targets"?: string[];
        "TargetAssetGroupIds"?: string[];
        /**
        * 扫描所有资产
        * @example `1`
        */ "ScanAll"?: number;
        /**
        * 指定扫描任务的扫描模式。
        * - **assets**：资产模式
        * - **general**：标准模式
        * - **skynet_vul_scan**：深度模式
        * @example `assets`
        */ "FlowName"?: string;
        /**
        * 漏洞扫描任务是否开启资产发现，0，1
        * @example `1`
        */ "EnableAssetDiscover"?: number;
        /**
        * 指定扫描任务的触发类型。 可选
        * - **date**：单次任务
        * - **interval**：周期任务
        * @example `date`
        */ "TriggerType"?: string;
        /**
        * 指定扫描任务的扫描周期。
        * - **day**：每天一次
        * - **week**：每周一次
        * - **month**：每月一次
        * @example `day`
        */ "Period"?: string;
        /**
        * 指定扫描任务的扫描间隔。
        * @example `5`
        */ "Interval"?: number;
        /**
        * 指定扫描任务执行的开始时间。
        * @example `111122200000`
        */ "StartDate"?: number;
        /**
        * 指定扫描任务执行的结束时间。
        * @example `212212000000`
        */ "EndDate"?: number;
        /**
        * 指定扫描任务的扫描速度。 可设置：
        * - **16**：慢速
        * - **32**：常速
        * - **64**：快速
        * @example `16`
        */ "Qps"?: number;
        /**
        * 指定扫描任务扫描开始的时间。
        * @example `00:00:00 `
        */ "RuntimeStart"?: string;
        /**
        * 指定扫描任务扫描结束的时间 。
        * @example `08:00:00`
        */ "RuntimeEnd"?: string;
        /**
        * 首页检测间隔（分钟）。
        * - **5**：间隔5分钟
        * - **30**：间隔30分钟
        * - **60**：间隔60分钟
        * @example `5`
        */ "IndexIntervalInMinute"?: number;
        /**
        * 全站检测间隔（天）。 可选：
        * - **1**：每1天一次
        * - **7**：每7天一次
        * @example `1`
        */ "SiteIntervalInDay"?: number;
        /**
        * 漏洞扫描任务是否开启登录扫描，0，1
        * @example `1`
        */ "EnableAssetLoginScan"?: number;
        "TargetAssetTags"?: string[];
        "KeyWords"?: string[];
    }): Promise<{}>;
    /**
    * 调用本接口获取扫描任务结果，包含检测出的漏洞数量和漏洞严重等级分布。
    */ DescribeAllVulnerabilities(query: {
        "RegionId"?: string;
        /**
        * 指定访问者源IP地址。
        * @example `1.2.3.4`
        */ "SourceIp"?: string;
        /**
        * 指定查询特定任务ID的漏洞扫描结果。
        * @example `2018042307022680333`
        */ "ScanId"?: string;
        /**
        * 指定查询特定漏洞名称的检测结果。
        * @example `test`
        */ "Name"?: string;
        /**
        * 根据特定的搜索条件（资产名）查询漏洞扫描结果。
        * @example `***.***.net`
        */ "Search"?: string;
        /**
        * 指定返回结果的语言环境。
        * - **zh**：中文
        * - **en**：英文
        * @example `zh`
        */ "Lang"?: string;
        /**
        * 指定查询特定威胁程度下漏洞结果。
        * - **3**：高危。表示可以直接被利用的漏洞，且利用难度较低。被攻击之后可能对网站或服务器的正常运行造成严重影响，或对用户财产及个人信息造成重大损失。
        * - **2**：中危。表示被利用之后，造成的影响较大，但直接利用难度较高的漏洞。或本身无法直接攻击，但能为进一步攻击造成便利的漏洞。
        * - **1**：低危。表示无法直接实现攻击，但提供的信息可能让攻击者更容易找到其他安全漏洞。
        * - **0**：信息。表示本身对网站安全没有直接影响，提供的信息可能为攻击者提供少量帮助，或可用于其他手段的攻击，如社工等。
        * @example `0`
        */ "Severity"?: number;
        /**
        * 指定查询特定漏洞状态的扫描结果。
        * - **0**：未处理
        * - **1**：已处理
        * - **2**：白名单
        * - **3**：忽略
        * @example `0`
        */ "Status"?: string;
        /**
        * 指定查询特定搜索条件（任务开始时间）下的漏洞扫描结果。
        * @example `11258600000`
        */ "BeginTime"?: number;
        /**
        * 指定查询特定任务结束时间下漏洞扫描结果
        * @example `11258400000`
        */ "EndTime"?: number;
        /**
        * 指定特定子任务ID的漏洞扫描结果。
        * @example `1111111`
        */ "TaskId"?: number;
        /**
        * 根据类别查询漏洞扫描结果。
        * @example `core`
        */ "Category"?: string;
        /**
        * 根据漏洞模块查询任务实例扫描结果。
        * @example `relation_domain`
        */ "Module"?: string;
        /**
        * 可检测的漏洞类型，包含以下类型：
        * - 1,"失效的身份认证"
        * - 2,"失效的访问控制"
        * - 3,"命令注入"
        * - 4,"跨站请求伪造"
        * - 5,"跨站点脚本（反射型）"
        * - 6,"跨站点脚本（存储型）"
        * - 7,"跨站点脚本（DOM型）"
        * - 8,"加密问题"
        * - 9,"拒绝服务"
        * - 10,"违反安全设计原则"
        * - 11,"HTTP响应CRLF注入"
        * - 12,"敏感信息泄露"
        * - 13,"缓冲区溢出"
        * - 14,"越权"
        * - 15,"代码执行"
        * - 16,"SQL注入"
        * - 17,"服务器端请求伪造"
        * - 18,"点击劫持"
        * - 19,"未验证的重定向"
        * - 20,"XML外部实体（XXE）"
        * - 21,"明文存储密码"
        * - 22,"钓鱼"
        * - 23,"恶意软件/木马"
        * - 24,"存在后门"
        * - 25,"业务逻辑错误"
        * - 26,"敏感信息明文存储"
        * - 27,"敏感信息明文传输"
        * - 28,"中间人攻击"
        * - 29,"目录遍历"
        * - 30,"文件包含"
        * - 31,"会话固定"
        * - 32,"时间竞争漏洞"
        * - 33,"类型混淆"
        * - 34,"命令执行"
        * - 35,"安全配置错误"
        * - 36,"不安全的反序列化"
        * - 37,"使用含有已知漏洞的组件"
        * - 38,"LDAP注入"
        * - 39,"不足的日志记录和监控"
        * - 40,"弱口令"
        * - 41,"文件上传漏洞"
        * @example `1`
        */ "VulType"?: number;
        /**
        * 指定返回结果当前页码。
        * @example `1`
        */ "CurrentPage"?: number;
        /**
        * 页大小
        * @example `20`
        */ "PageSize"?: number;
    }): Promise<{}>;
    /**
    * 调用DescribeWebTechs接口，查询任务实例对应攻击面数据项中的Web应用信息。
    */ DescribeWebTechs(query: {
        "RegionId"?: string;
        /**
        * 任务ID。获取指定任务ID数据。
        * @example `12345`
        */ "TaskId": number;
        "SourceIp"?: string;
        /**
        * 资产名称。查询指定资产下的检测数据。
        * @example `foo.com`
        */ "Asset"?: string;
        /**
        * 指定返回结果的当前页码。默认值为1。
        * @example `1`
        */ "CurrentPage"?: number;
        /**
        * 指定列表每页显示数据条数。默认值为10，且可设置值最大为10。
        * @example `10`
        */ "PageSize"?: number;
    }): Promise<{}>;
    /**
    * 调用本接口查询资产列表。
    */ DescribeAssets(query: {
        "RegionId"?: string;
        /**
        * 指定访问者源IP地址。
        * @example `1.2.3.4`
        */ "SourceIp"?: string;
        /**
        * 指定查询特定资产认证状态的资产信息。
        * - **WaitingForVerification**：等待验证
        * - **VerificationSuccess**：验证成功
        * - **VerificationFailure**：验证失败
        * - **Verifying**：验证中
        * @example `WaitingForVerification`
        */ "Status"?: string;
        /**
        * 指定查询特定资产信息。
        * @example `test`
        */ "Search"?: string;
        "Types"?: string[];
        "AssetGroupId"?: string;
        /**
        * 指定返回特定资产来源下的资产信息。可选
        * - **UserAdd**：用户添加
        * - **AutoImport**：自动导入
        * - **ScanDiscover**：资产发现
        * @example `UserAdd`
        */ "Source"?: string;
        "Assets"?: string[];
        /**
        * 资产创建时间的开始区间。
        * @example `1112121000000`
        */ "GmtCreateFrom"?: number;
        /**
        * 资产创建时间的结束区间。
        * @example `1212121000000`
        */ "GmtCreateTo"?: number;
        /**
        * 指定返回列表的当前页码。
        * @example `1`
        */ "CurrentPage"?: number;
        /**
        * 指定返回的列表每页的数据条数。
        * @example `20`
        */ "PageSize"?: number;
    }): Promise<{}>;
    /**
    * 调用DescribeDNSMap接口，查询任务实例对应攻击面数据项中的DNS解析记录信息。
    */ DescribeDNSMap(query: {
        "RegionId"?: string;
        /**
        * 任务ID。获取指定任务ID数据。
        * @example `12345`
        */ "TaskId": number;
        "SourceIp"?: string;
        /**
        * 资产名称。查询指定资产下的检测数据。
        * @example `foo.com`
        */ "Asset"?: string;
        /**
        * 指定返回结果的当前页码。默认值为1。
        * @example `1`
        */ "CurrentPage"?: number;
        /**
        * 指定列表每页显示数据条数。默认值为10，且可设置值最大为10。
        * @example `10`
        */ "PageSize"?: number;
    }): Promise<{}>;
    /**
    * 调用本接口获取漏洞详情。
    */ DescribeVulnerability(query: {
        "RegionId"?: string;
        /**
        * 指定特定漏洞ID的漏洞详情。
        * @example `1`
        */ "Id": number;
        /**
        * 指定访问者源IP地址。
        * @example `1.2.3.4`
        */ "SourceIp"?: string;
        /**
        * 指定返回结果的语言环境。
        * @example `zh`
        */ "Lang"?: string;
    }): Promise<{}>;
    /**
    * 调用本接口查询用户所有标签列表。
    */ DescribeUserTags(query: {
        "RegionId"?: string;
        /**
        * 指定访问者源IP地址。
        * @example `1.2.3.4`
        */ "SourceIp"?: string;
        /**
        * 指定返回结果语言环境。
        * - **zh**：中文
        * - **en**：英文
        * @example `zh`
        */ "Lang"?: string;
        /**
        * 根据搜索信息查询特定资产标签列表。
        * @example `test.**.com`
        */ "Search"?: string;
        /**
        * 指定待查询列表的当前页码。
        * @example `20`
        */ "CurrentPage"?: number;
        /**
        * 指定待查询结果每页显示数据总数量。
        * @example `2`
        */ "PageSize"?: number;
    }): Promise<{}>;
    /**
    * 调用DescribeWebPaths接口，查询任务实例对应攻击面数据项中的Web路径信息。
    */ DescribeWebPaths(query: {
        "RegionId"?: string;
        /**
        * 任务ID。获取指定任务ID数据。
        * @example `12345`
        */ "TaskId": number;
        "SourceIp"?: string;
        /**
        * 资产名称。查询指定资产下的检测数据。
        * @example `foo.com`
        */ "Asset"?: string;
        /**
        * 指定返回结果的当前页码。默认值为1。
        * @example `1`
        */ "CurrentPage"?: number;
        /**
        * 指定列表每页显示数据条数。默认值为10，且可设置值最大为10。
        * @example `10`
        */ "PageSize"?: number;
    }): Promise<{}>;
    /**
    * 调用DescribeHosts接口，查询任务实例对应攻击面数据项中的主机列表信息。
    */ DescribeHosts(query: {
        "RegionId"?: string;
        /**
        * 任务ID。获取指定任务ID数据。
        * @example `12345`
        */ "TaskId": number;
        "SourceIp"?: string;
        /**
        * 资产名称。查询指定资产下的检测数据。
        * @example `foo.com`
        */ "Asset"?: string;
        /**
        * 指定返回结果的当前页码。默认值为1。
        * @example `1`
        */ "CurrentPage"?: number;
        /**
        * 指定列表每页显示数据条数。默认值为10，且可设置值最大为10。
        * @example `10`
        */ "PageSize"?: number;
    }): Promise<{}>;
    /**
    * 调用DescribeAttackSurfacesFacets查询任务实例攻击面数据统计信息。
    */ DescribeAttackSurfacesFacets(query: {
        "RegionId"?: string;
        /**
        * 任务ID。获取指定任务ID数据。
        * @example `12345`
        */ "TaskId": number;
        "SourceIp"?: string;
    }): Promise<{}>;
    /**
    * 调用DescribeDomainAttackSurfacesFacets接口，查询任务实例对应攻击面数据项中的域名攻击面统计信息。
    */ DescribeDomainAttackSurfacesFacets(query: {
        "RegionId"?: string;
        /**
        * 任务ID。获取指定任务ID数据。
        * @example `12345`
        */ "TaskId": number;
        /**
        * 域名。
        * @example `test.com`
        */ "Domain": string;
        "SourceIp"?: string;
    }): Promise<{}>;
    /**
    * 调用本接口生成任务实例报表。
    */ GenerateVulReport(query: {
        "RegionId"?: string;
        "TaskIds": string[];
        /**
        * 指定访问源IP地址。
        * @example `1.2.3.4`
        */ "SourceIp"?: string;
        /**
        * 指定返回结果的语言环境。
        * - **zh**：中文
        * - **en**：英文
        * @example `zh`
        */ "Lang"?: string;
    }): Promise<{}>;
    /**
    * 调用DescribeSubdomains接口，查询任务实例对应攻击面数据项中的子域名信息。
    */ DescribeSubdomains(query: {
        "RegionId"?: string;
        /**
        * 任务ID。获取指定任务ID数据。
        * @example `12345`
        */ "TaskId": number;
        "SourceIp"?: string;
        /**
        * 资产名称。查询指定资产下的检测数据。
        * @example `foo.com`
        */ "Asset"?: string;
        /**
        * 指定返回结果的当前页码。默认值为1。
        * @example `1`
        */ "CurrentPage"?: number;
        /**
        * 指定列表每页显示数据条数。默认值为10，且可设置值最大为10。
        * @example `10`
        */ "PageSize"?: number;
    }): Promise<{}>;
    /**
    * 调用DescribeWebServers接口，查询任务实例对应攻击面数据项中的Web服务器信息。
    */ DescribeWebServers(query: {
        "RegionId"?: string;
        /**
        * 任务ID。获取指定任务ID数据。
        * @example `12345`
        */ "TaskId": number;
        "SourceIp"?: string;
        /**
        * 资产名称。查询指定资产下的检测数据。
        * @example `foo.com`
        */ "Asset"?: string;
        /**
        * 指定返回结果的当前页码。默认值为1。
        * @example `1`
        */ "CurrentPage"?: number;
        /**
        * 指定列表每页显示数据条数。默认值为10，且可设置值最大为10。
        * @example `10`
        */ "PageSize"?: number;
    }): Promise<{}>;
    /**
    * 调用DescribeCrawlerRequests接口，查询任务实例对应攻击面数据项中的爬虫流量信息。
    */ DescribeCrawlerRequests(query: {
        "RegionId"?: string;
        /**
        * 任务ID。获取指定任务ID数据。
        * @example `12345`
        */ "TaskId": number;
        "SourceIp"?: string;
        /**
        * 资产名称。查询指定资产下的检测数据。
        * @example `foo.com`
        */ "Asset"?: string;
        /**
        * 指定返回结果的当前页码。默认值为1。
        * @example `1`
        */ "CurrentPage"?: number;
        /**
        * 指定列表每页显示数据条数。默认值为10，且可设置值最大为10。
        * @example `10`
        */ "PageSize"?: number;
    }): Promise<{}>;
    /**
    * 调用DescribeHostAttackSurfacesFacets接口，查询任务实例对应攻击面数据项中的主机攻击面统计信息。
    */ DescribeHostAttackSurfacesFacets(query: {
        "RegionId"?: string;
        /**
        * 任务ID。获取指定任务ID数据。
        * @example `123456`
        */ "TaskId": number;
        /**
        * 主机名。获取指定主机下数据。
        * @example `1.2.3.4`
        */ "Host": string;
        "SourceIp"?: string;
    }): Promise<{}>;
    /**
    * 调用本接口获取扫描任务列表。
    */ DescribeScans(query: {
        "RegionId"?: string;
        /**
        * 指定访问者源IP地址。
        * @example `1.2.3.4`
        */ "SourceIp"?: string;
        /**
        * 指定返回任务列表的语言环境。可选：
        * - **zh**：中文
        * - **en**：英文
        * @example `zh`
        */ "Lang"?: string;
        "StatusList"?: string[];
        /**
        * 指定待查询扫描任务的触发类型。 可选
        * - **date**：单次任务
        * - **interval**：周期任务
        * @example `date`
        */ "TriggerType"?: string;
        /**
        * 指定待查询扫描任务的任务ID。
        * @example `2019031816494923023`
        */ "ScanId"?: string;
        /**
        * 指定待查询扫描任务的搜索条件（任务名称、IP、域名）。
        * @example `***.***.net`
        */ "Search"?: string;
        /**
        * 指定待查询扫描任务的扫描类型。 可选：
        * - **vuln**：漏洞类型
        * - **content**：内容风险
        * @example `vuln`
        */ "ScanType"?: string;
        /**
        * 指定待查询的扫描任务列表当前页码。
        * @example `1`
        */ "CurrentPage"?: number;
        /**
        * 指定待查询的扫描任务列表每页显示数据条数。
        * @example `20`
        */ "PageSize"?: number;
    }): Promise<{}>;
    DeleteScans(query: {
        "RegionId"?: string;
        "SourceIp"?: string;
        "ScanIds"?: string[];
    }): Promise<{}>;
    DescribeCount(query: {
        "RegionId"?: string;
        "SourceIp"?: string;
        "Lang"?: string;
        "TargetAssetTags"?: string[];
        "ScanType"?: string;
        "Targets"?: string[];
    }): Promise<{}>;
    DescribeVulnerabilityStatusView(query: {
        "RegionId"?: string;
        "SourceIp"?: string;
    }): Promise<{}>;
    DescribeVulnerabilityView(query: {
        "RegionId"?: string;
        "SourceIp"?: string;
    }): Promise<{}>;
}
export default AVDS;
