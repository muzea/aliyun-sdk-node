export interface DescribeCloudCenterInstancesResponse {
    /**
     * 接口调用的结果状态。取值：
     * - **true**：接口调用成功。
     * - **false**：接口调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `32A73759-4C0F-4801-BE98-901223ACEE9A`
     */
    RequestId: string;
    /**
     * 页面显示信息。
     */
    PageInfo: {
        /**
         * 分页查询时，当前页的页码。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 分页查询时，每页显示的资产的数量。默认值为**20**，表示每页显示20条资产信息。
         * @example `20`
         */
        PageSize: number;
        /**
         * 查询到的资产的总数量。
         * @example `50`
         */
        TotalCount: number;
        /**
         * 当前页显示的资产的条数。
         * @example `10`
         */
        Count: number;
        /**
         * 使用NextToken方式下返回的NextToken值。
         * @example `B604532DEF982B875E8360A6EFA3B***`
         */
        NextToken: string;
    };
    /**
     * 资产详细信息。
     */
    Instances: {
        /**
         * 实例的运行状态。取值：
         * - **Running**：运行中。
         * - **notRunning**：已关机。
         * @example `Running`
         */
        Status: string;
        /**
         * 资产的CPU信息。
         * @example `Intel(R) Xeon(R) Platinum 8269CY CPU @ 2.50GHz`
         */
        CpuInfo: string;
        /**
         * 实例的公网IP地址。
         * @example `1.2.XX.XX`
         */
        InternetIp: string;
        /**
         * 内核版本信息。
         * @example `3.10.0-1127.19.1.el7.x86_64`
         */
        Kernel: string;
        /**
         * 资产是否已绑定授权。取值：
         * - **true**：已绑定授权
         * - **false**：未绑定授权
         * @example `true`
         */
        Bind: boolean;
        /**
         * 实例的内核版本。
         * @example `-`
         */
        OsName: string;
        /**
         * 资产实例的标签名称。
         * @example `InternetIp,test`
         */
        Tag: string;
        /**
         * 实例的客户端在线状态。取值：
         * - **online**：在线，表示资产的Agent客户端状态为**开启**。
         * - **offline**：离线，表示资产的Agent客户端状态为**关闭**。
         * - **pause**：暂停，表示资产的Agent客户端状态为**暂停保护**。
         * @example `online`
         */
        ClientStatus: string;
        /**
         * 内存（MB）。
         * @example `1024`
         */
        Mem: number;
        /**
         * 实例所属VPC的ID。
         * @example `vpc-uf60agqq65bs98zoo****`
         */
        VpcInstanceId: string;
        /**
         * 资产的标签ID。
         * @example `121313,41412`
         */
        TagId: string;
        /**
         * 实例是否为阿里云资产。取值：
         * - **0**：阿里云资产
         * - **1**：非阿里云资产
         * @example `0`
         */
        Flag: number;
        /**
         * 客户端最后一次在线的时间戳。单位为毫秒。
         * @example `1637592907000`
         */
        LastLoginTimestamp: number;
        /**
         * 资产的授权版本。取值：
         * <props="china">
         * - **1**：免费版
         * - **6**： 防病毒版
         * - **5**：高级版
         * - **3**：企业版
         * - **7**： 旗舰版
         * </props>
         * <props="intl">
         * - **1**：Free Edition
         * - **6**：Anti-virus Edition
         * - **5**：Advanced
         * - **3**：Enterprise Edition
         * - **7**：Ultimate Edition
         * </props>
         * @example `1`
         */
        AuthVersion: number;
        /**
         * 实例所属地域ID。
         * @example `cn-hangzhou-cm***-***`
         */
        Region: string;
        /**
         * 实例名称。
         * @example `yztest-l***`
         */
        InstanceName: string;
        /**
         * 容器组个数。
         * @example `1`
         */
        PodCount: number;
        /**
         * 实例上存在的漏洞数量。
         * @example `2`
         */
        VulCount: number;
        /**
         * 实例是否检测出了基线风险项。取值：
         * - **YES**：检测出了基线风险项
         * - **NO**：未检测出基线风险项
         * @example `YES`
         */
        HcStatus: string;
        /**
         * 集群创建的时间戳，单位为毫秒。
         * @example `1607365213000`
         */
        CreatedTime: number;
        /**
         * 资产所在的分组的名称。
         * @example `default`
         */
        GroupTrace: string;
        /**
         * 集群ID。
         * @example `c690a0789419f4284a4e0a29e12fe****`
         */
        ClusterId: string;
        /**
         * 资产是否存在安全风险。取值：
         * - **YES**：存在
         * - **NO**：不存在
         * @example `NO`
         */
        RiskStatus: string;
        /**
         * 资产的CPU核数。
         * @example `4`
         */
        Cores: number;
        /**
         * 实例是否存在漏洞。取值：
         * - **YES**：存在漏洞。
         * - **NO**：不存在漏洞。
         * @example `YES`
         */
        VulStatus: string;
        /**
         * 资产是否存在安全告警。取值：
         * - **YES**：存在安全告警
         * - **NO**：不存在安全告警
         * @example `NO`
         */
        AlarmStatus: string;
        /**
         * 系统的Mac地址。
         * @example `00:13:3e:31:13:39,02:12:67:b8:**:**`
         */
        MacListString: string;
        /**
         * 资产的重要性。取值：
         * - **2**：重要资产
         * - **1**：一般资产
         * - **0**：测试资产
         * @example `2`
         */
        Importance: number;
        /**
         * 实例中存在的基线风险数量。
         * @example `1`
         */
        HealthCheckCount: number;
        /**
         * 实例的公网IP地址。
         * @example `1.2.XX.XX`
         */
        Ip: string;
        /**
         * 实例的操作系统。
         * @example `Linux`
         */
        Os: string;
        /**
         * 资产的授权绑定时间戳。单位：毫秒。
         * @example `1627974044000`
         */
        AuthModifyTime: number;
        /**
         * 资产存在的安全告警数量。
         * @example `5`
         */
        SafeEventCount: number;
        /**
         * 实例ID。
         * @example `i-m5***`
         */
        InstanceId: string;
        /**
         * 资产的类型。取值：
         * - **0**：云服务器
         * - **1**：负载均衡
         * - **2**：NAT网关
         * - **3**：RDS数据库
         * - **4**：MongoDb数据库
         * - **5**：REDIS数据库
         * - **6**：容器镜像
         * - **7**：容器
         * @example `0`
         */
        AssetType: string;
        /**
         * 实例的私网IP地址。
         * @example `1.2.XX.XX`
         */
        IntranetIp: string;
        /**
         * 资产厂商。取值：
         * - **0**：阿里云资产
         * - **1**：云外资产
         * - **2**：IDC资产
         * - **3**、**4**、**5**、**7**：其它云资产
         * - **8**：轻量级资产
         * @example `0`
         */
        Vendor: number;
        /**
         * 资产所在的地域的ID。
         * @example `cn-hanghzou`
         */
        RegionId: string;
        /**
         * 实例的UUID。
         * @example `c9107c04-942f-40c1-981a-f1c1***`
         */
        Uuid: string;
        /**
         * 实例所属分组ID。
         * @example `4120080`
         */
        GroupId: number;
        /**
         * 资产的地域名称。
         * @example `China (Hangzhou)`
         */
        RegionName: string;
        /**
         * 资产的服务商名称。
         * 取值：
         * - **ALIYUN**：阿里云
         * - **OUT**：云外资产
         * - **IDC**：IDC
         * - **TENCENT**：其它云
         * - **HUAWEICLOUD**：其它云
         * - **Microsoft**：其它云
         * - **AWS**：其它云
         * - **TRIPARTITE**：轻量级服务器
         * @example `IDC`
         */
        VendorName: string;
        /**
         * 资产的授权版本（具体名称）。取值：
         * - 免费版
         * - 防病毒版
         * - 高级版
         * - 企业版
         * - 旗舰版
         * - 独立购买版
         * @example `Ultimate Edition`
         */
        AuthVersionName: string;
        /**
         * 集群名称。
         * @example `cluster1`
         */
        ClusterName: string;
        /**
         * 资产暴露状态。取值：
         * - **0**： 未暴露
         * - **1**： 已暴露
         * @example `0`
         */
        ExposedStatus: number;
        /**
         * 资产存在的风险项统计。JSON格式，包含以下字段：
         * - **account**：异地登录和爆破成功的账号数量
         * - **appNum**：扫描器漏洞数量
         * - **asapVulCount**：高危漏洞总数量
         * - **baselineHigh**：高危基线风险数量
         * - **baselineLow**：低危基线风险数量
         * - **baselineMedium**：中危基线风险数量
         * - **baselineNum**： 云产品配置风险总数量
         * - **cmsNum**： WEB-CMS漏洞数量
         * - **containerAsap**： 容器高危漏洞数量
         * - **containerLater**：容器中危漏洞数量
         * - **containerNntf**： 容器低危漏洞数量
         * - **containerRemind**：容器提醒告警数量
         * - **containerSerious**：容器紧急告警数量
         * - **containerSuspicious**：容器可疑告警数量
         * - **cveNum**：Linux 漏洞数量
         * - **emgNum**：应急漏洞数量
         * - **health**：未处理的基线告警数量
         * - **imageBaselineHigh**：镜像高危基线风险数量
         * - **imageBaselineLow**：镜像低危基线风险数量
         * - **imageBaselineMedium**：镜像中危基线风险数量
         * - **imageBaselineNum**：镜像基线风险总数量
         * - **imageMaliciousFileRemind**：镜像提醒恶意文件数量
         * - **imageMaliciousFileSerious**：镜像紧急恶意文件数量
         * - **imageMaliciousFileSuspicious**：镜像可疑恶意文件数量
         * - **imageVulAsap**：镜像高危漏洞数量
         * - **imageVulLater**：镜像中危漏洞数量
         * - **imageVulNntf**：镜像低危漏洞数量
         * - **laterVulCount**：中危漏洞数量
         * - **newSuspicious**：告警数量
         * - **nntfVulCount**：低危漏洞数量
         * - **remindNum**：提醒告警数量
         * - **scaNum**：软件成分分析漏洞数量
         * - **seriousNum**：紧急告警数量
         * - **suspNum**：可疑告警数量
         * - **suspicious**：告警总数量
         * - **sysNum**：Windows漏洞数量
         * - **trojan**：木马数量
         * - **uuid**：资产UUID
         * - **vul**：漏洞数量
         * - **weakPWNum**：弱口令数量
         * @example `{
              "account": 0,
              "appNum": 0,
              "asapVulCount": 0,
              "baselineHigh": 0,
              "baselineLow": 0,
              "baselineMedium": 0,
              "baselineNum": 0,
              "cmsNum": 0,
              "containerAsap": 0,
              "containerLater": 0,
              "containerNntf": 0,
              "containerRemind": 0,
              "containerSerious": 0,
              "containerSuspicious": 0,
              "cveNum": 0,
              "emgNum": 0,
              "health": 0,
              "imageBaselineHigh": 0,
              "imageBaselineLow": 0,
              "imageBaselineMedium": 0,
              "imageBaselineNum": 0,
              "imageMaliciousFileRemind": 0,
              "imageMaliciousFileSerious": 0,
              "imageMaliciousFileSuspicious": 0,
              "imageVulAsap": 0,
              "imageVulLater": 0,
              "imageVulNntf": 0,
              "laterVulCount": 0,
              "newSuspicious": 0,
              "nntfVulCount": 0,
              "remindNum": 0,
              "scaNum": 0,
              "seriousNum": 0,
              "suspNum": 0,
              "suspicious": 0,
              "sysNum": 0,
              "trojan": 0,
              "uuid": "inet-37316411-37fe-4b72-b245-346a2721****",
              "vul": 0,
              "weakPWNum": 0
        }`
         */
        RiskCount: string;
        /**
         * 系统的IP列表。
         * @example `172.31.XX.XX,172.171.XX.XX`
         */
        IpListString: string;
    }[];
}
