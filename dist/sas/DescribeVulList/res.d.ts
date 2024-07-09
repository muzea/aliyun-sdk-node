export interface DescribeVulListResponse {
    /**
     * 分页查询时，当前页的页码。
     * @example `1`
     */
    CurrentPage: number;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `2F26AB2A-1075-488F-8472-40E5DB486ACC`
     */
    RequestId: string;
    /**
     * 分页查询时，每页最多显示的数据条数。
     * @example `20`
     */
    PageSize: number;
    /**
     * 查询到的漏洞总数量。
     * @example `2`
     */
    TotalCount: number;
    /**
     * 查询到的漏洞信息。
     */
    VulRecords: {
        /**
         * 漏洞状态。取值：
         * - **1**：未修复
         * - **2**：修复失败
         * - **3**：回滚失败
         * - **4**：修复中
         * - **5**：回滚中
         * - **6**：验证中
         * - **7**：修复成功
         * - **8**：修复成功待重启
         * - **9**：回滚成功
         * - **10**：已忽略
         * - **11**：回滚成功待重启
         * - **12**：漏洞不存在
         * - **20**：已失效
         * @example `1`
         */
        Status: number;
        /**
         * 支持RASP实时防护，取值：
         * - **0**：不支持
         * - **1**：支持
         * > 无该属性也表示不支持。
         * @example `1`
         */
        RaspDefend: number;
        /**
         * RASP实时防护模式。取值：
         * - **0**：未防护
         * - **1**：监控模式
         * - **2**：拦截模式
         * - **3**：禁用
         * @example `1`
         */
        RaspStatus: number;
        /**
         * 漏洞类型。取值：
         * - **cve**：Linux漏洞
         * - **sys**：Windows漏洞
         * - **cms**：WebCMS漏洞
         * - **emg**：应急漏洞
         * - **app**：应用漏洞
         * - **sca**：应用漏洞（软件成分分析）
         * @example `cve`
         */
        Type: string;
        /**
         * 修改漏洞状态时间戳，单位为毫秒。
         * @example `1620404763000`
         */
        ModifyTs: number;
        /**
         * 资产公网IP。
         * @example `1.2.XX.XX`
         */
        InternetIp: string;
        /**
         * 漏洞ID。
         * @example `101162078`
         */
        PrimaryId: number;
        /**
         * 漏洞标签。
         * @example `oval`
         */
        Tag: string;
        /**
         * 容器关联的集群ID。
         * @example `c863dc93bed3843de9934d4346dc4****`
         */
        K8sClusterId: string;
        /**
         * 容器关联的节点ID。
         * @example `i-bp1ifm6suw9mnbsr****`
         */
        K8sNodeId: string;
        /**
         * 资产实例名称。
         * @example `testInstance`
         */
        InstanceName: string;
        /**
         * 资产实例的Agent客户端是否在线。取值：
         * - **true**：在线
         * - **false**：离线
         * @example `true`
         */
        Online: boolean;
        /**
         * 资产的操作系统名称。
         * @example `linux`
         */
        OsVersion: string;
        /**
         * 漏洞名称。
         * @example `oval:com.redhat.rhsa:def:20170574`
         */
        Name: string;
        /**
         * 修复返回码。
         * @example `0`
         */
        ResultCode: string;
        /**
         * 资产实例ID。
         * @example `i-bp18t***`
         */
        InstanceId: string;
        /**
         * 漏洞关联的CVE列表，有多个取值时用半角逗号（,）分隔。
         * @example `CVE-2017-7518,CVE-2017-12188`
         */
        Related: string;
        /**
         * 资产私网IP。
         * @example `1.2.XX.XX`
         */
        IntranetIp: string;
        /**
         * 最后发现漏洞的时间戳，单位为毫秒。
         * @example `1620404763000`
         */
        LastTs: number;
        /**
         * 首次发现漏洞的时间戳，单位为毫秒。
         * @example `1554189334000`
         */
        FirstTs: number;
        /**
         * 实例所在的地域的ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 漏洞修复必要性等级。取值：
         * - **asap**：高
         * - **later**：中
         * - **nntf**：低
         * > 建议您尽快修复必要性等级为**高**的漏洞。
         * @example `asap`
         */
        Necessity: string;
        /**
         * 漏洞修复时间戳，单位为毫秒。该参数仅在控制台发起修复时存在。
         * @example `1541207563000`
         */
        RepairTs: number;
        /**
         * 资产实例的UUID。
         * @example `04c56617-23fc-43a5-ab9b-****`
         */
        Uuid: string;
        /**
         * 容器关联的Pod名称。
         * @example `deployment-riskai-7b67d68975-m****`
         */
        K8sPodName: string;
        /**
         * 资产分组ID。
         * @example `281801`
         */
        GroupId: number;
        /**
         * 修复返回消息。
         * @example `timeout`
         */
        ResultMessage: string;
        /**
         * 容器关联的命名空间。
         * @example `default`
         */
        K8sNamespace: string;
        /**
         * 漏洞名称。
         * @example `RHSA-2019:0230-Important: polkit security update`
         */
        AliasName: string;
        /**
         * 容器关联的节点名称。
         * @example `deployment-riskai-7b67d68975-m****`
         */
        K8sNodeName: string;
        /**
         * 漏洞扩展信息。
         */
        ExtendContentJson: {
            /**
             * 漏洞状态。取值：
             * - **1**：未修复
             * - **2**：修复失败
             * - 3：回滚失败
             * - **4**：修复中
             * - **5**：回滚中
             * - **6**：验证中
             * - **7**：修复成功
             * - **8**：修复成功待重启
             * - **9**：回滚成功
             * - **10**：已忽略
             * - **11**：回滚成功待重启
             * - **12**：漏洞不存在
             * - **20**：已失效
             * @example `1`
             */
            Status: string;
            /**
             * 应急漏洞返回特征。
             * @example `com.xxl.rpc.util.XxlRpcException: xxl-rpc request data is empty.\n\tat com.xxl.rpc.remoting.net.impl.servlet.serve"`
             */
            EmgProof: string;
            /**
             * 漏洞关联资产的公网IP地址。
             * @example `1.2.XX.XX`
             */
            Ip: string;
            /**
             * 漏洞ID。
             * @example `111`
             */
            PrimaryId: number;
            /**
             * 操作系统名称。
             * @example `centos`
             */
            Os: string;
            /**
             * 漏洞标签。
             * @example `oval`
             */
            Tag: string;
            /**
             * 最后发现漏洞的时间戳，单位为毫秒。
             * @example `1620404763000`
             */
            LastTs: number;
            /**
             * 漏洞描述。
             * @example `kernel version:5.10.84-10.2.al8.x86_64`
             */
            Description: string;
            /**
             * 操作系统版本描述。
             * @example `7`
             */
            OsRelease: string;
            /**
             * 漏洞名称。
             * @example `RHSA-2019:0230-Important: polkit security update`
             */
            AliasName: string;
            /**
             * 漏洞地址。
             * @example `http://39.99.XX.XX:30005/toLogin`
             */
            Target: string;
            /**
             * 漏洞相关软件包的路径。
             * @example `/roo/www/web`
             */
            AbsolutePath: string;
            /**
             * RPM包列表。
             */
            RpmEntityList: {
                /**
                 * 完整版本号。
                 * @example `3.10.0-693.2.2.el7`
                 */
                FullVersion: string;
                /**
                 * 存在漏洞的软件包版本号。
                 * @example `3.10.0`
                 */
                Version: string;
                /**
                 * 漏洞命中详细信息。
                 * @example `python-perf version less than 0:3.10.0-693.21.1.el7`
                 */
                MatchDetail: string;
                /**
                 * 镜像名称。
                 * @example `registry_387ytb_xxx`
                 */
                ImageName: string;
                /**
                 * 存在漏洞的软件所在路径。
                 * @example `/usr/lib64/python2.7/site-packages`
                 */
                Path: string;
                /**
                 * 容器名称。
                 * @example `k8s_67895c4_xxx`
                 */
                ContainerName: string;
                /**
                 * RPM名称。
                 * @example `python-perf`
                 */
                Name: string;
                /**
                 * 修复命令。
                 * @example `*** update python-perf`
                 */
                UpdateCmd: string;
                /**
                 * 命中规则。
                 */
                MatchList: string[];
                /**
                 * 进程ID。
                 * @example `8664`
                 */
                Pid: string;
                /**
                 * 漏洞包扩展信息。
                 * @example `{"msg_no_lookups_configured_CVE_2021_44228": "false", "jndi_class_not_exist": "false"}`
                 */
                ExtendField: string;
            }[];
            /**
             * 漏洞公告列表。
             */
            cveList: string[];
            /**
             * 漏洞修复的必要性因子。
             */
            Necessity: {
                /**
                 * 漏洞修复紧急度得分状态。取值：
                 * - **none**：未生成分数
                 * - **pending**：等待计算中
                 * - **normal**：正常
                 * @example `normal`
                 */
                Status: string;
                /**
                 * 时间因子。
                 * @example `1.0`
                 */
                Time_factor: string;
                /**
                 * 环境因子。
                 * @example `1.0`
                 */
                Enviroment_factor: string;
                /**
                 * 是否已计算出漏洞修复建议得分。取值：
                 * - **0**：未计算
                 * - **1**：已计算
                 * @example `1`
                 */
                Is_calc: string;
                /**
                 * 漏洞修复紧急度得分。
                 * 根据漏洞得分提供以下修复建议：
                 * - **13.5~15分（含13.5分和15分）**：通常代表高危漏洞，需尽快修复。
                 * - **7~13.5分（含7分）**：通常代表中危漏洞，可延后修复。
                 * - **7分以下**：通常代表低危漏洞，暂可不修复。
                 * @example `7.8`
                 */
                Total_score: string;
                /**
                 * CVSS因子。
                 * @example `7.8`
                 */
                Cvss_factor: string;
                /**
                 * 资产重要性因子。以下是资产重要性因子和资产类型的对应关系：
                 * - **2**：重要资产
                 * - **1**：一般资产
                 * - **0**：测试资产
                 * @example `1`
                 */
                Assets_factor: string;
            };
        };
        /**
         * 资产是否已绑定授权。取值：
         * - **true**：已绑定授权
         * - **false**：未绑定授权
         * @example `true`
         */
        Bind: boolean;
        /**
         * 资产的操作系统名称。
         * @example `CentOS  7.2 64位`
         */
        OsName: string;
        /**
         * 资产的授权版本。取值：
         * - **1**：免费版
         * - **6**：防病毒版
         * - **5**：高级版
         * - **3**：企业版
         * - **7**：旗舰版
         * - **10**：增值服务版
         * @example `3`
         */
        AuthVersion: string;
    }[];
    /**
     * 使用NextToken方式下返回的NextToken值。
     * @example `E17B501887A2D3AA5E8360A6EFA3B***`
     */
    NextToken: string;
}
