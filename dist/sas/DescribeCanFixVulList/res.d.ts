export interface DescribeCanFixVulListResponse {
    /**
     * 查询到的漏洞信息。
     */
    VulRecords: {
        /**
         * 导致漏洞的软件包是否支持通过云安全中心升级。取值：
         * - **true**：支持升级
         * - **false**：不支持升级
         * @example `true`
         */
        CanUpdate: boolean;
        /**
         * 漏洞类型。取值包括：
         * - **cve**：系统漏洞
         * - **sca**：应用漏洞
         * @example `cve`
         */
        Type: string;
        /**
         * 漏洞的修复状态。取值：
         * - **1**：未修复
         * - **4**：修复中
         * - **7**：修复成功
         * @example `1`
         */
        Status: number;
        /**
         * 修改漏洞状态时间戳，单位为毫秒。
         * @example `1620404763000`
         */
        ModifyTs: number;
        /**
         *  容器镜像的唯一标识。
         * @example `8f0fbdb41d3d1ade4ffdf21558443f4c03342010563bb8c43ccc09594d50****`
         */
        ImageDigest: string;
        /**
         * 漏洞的ID。
         * @example `782661`
         */
        PrimaryId: number;
        /**
         * 容器镜像的标签。
         * @example `latest`
         */
        Tag: string;
        /**
         * 容器镜像仓库的命名空间。
         * @example `3rdparty`
         */
        RepoNamespace: string;
        /**
         *  容器镜像仓库的名称。
         * @example `varnish`
         */
        RepoName: string;
        /**
         * 漏洞关联的CVE列表，有多个取值时用半角逗号（,）分隔。
         * @example `CVE-2017-7518,CVE-2017-12188`
         */
        Related: string;
        /**
         * 首次发现漏洞的时间戳，单位为毫秒。
         * @example `1620752053000`
         */
        FirstTs: number;
        /**
         * 最后发现漏洞的时间戳，单位为毫秒。
         * @example `1620404763000`
         */
        LastTs: number;
        /**
         * 漏洞修复必要性等级。取值：
         * - **asap**：高
         * - **later**：中
         * - **nntf**：低
         * > 建议您尽快修复必要性等级为**高**的漏洞。
         * @example `asap,later,nntf`
         */
        Necessity: string;
        /**
         * 容器镜像的UUID。
         * @example `0004a32a0305a7f6ab5ff9600d47****`
         */
        Uuid: string;
        /**
         * 漏洞的别名。
         * @example `CVE-2018-25010:libwebp up to 1.0.0 ApplyFilter out-of-bounds read`
         */
        AliasName: string;
        /**
         * 漏洞名称。
         * @example `debian:10:CVE-2019-9893`
         */
        Name: string;
        /**
         * 容器镜像层级的列表。
         */
        Layers: string[];
        /**
         * 漏洞信息的扩展内容。
         */
        ExtendContentJson: {
            /**
             *  容器镜像对应的操作系统发行的版本。
             * @example `10.9`
             */
            OsRelease: string;
            /**
             * 操作系统名称。
             * @example `debian`
             */
            Os: string;
            /**
             * RPM包列表。
             */
            RpmEntityList: {
                /**
                 * 命中规则。
                 */
                MatchList: string[];
                /**
                 * 容器镜像层级的摘要的SHA256值。
                 * @example `b1f5b9420803ad0657cf21566e3e20acc08581e7f22991249ef3aa80b8b1****`
                 */
                Layer: string;
                /**
                 * 软件包的完整版本号。
                 * @example `3.10.0-693.2.2.el7`
                 */
                FullVersion: string;
                /**
                 * 软件包的版本号。
                 * @example `3.10.0`
                 */
                Version: string;
                /**
                 * 漏洞命中详细信息。
                 * @example `python-perf version less than 0:3.10.0-693.21.1.el7`
                 */
                MatchDetail: string;
                /**
                 * 存在漏洞的软件所在路径。
                 * @example `/usr/lib64/python2.7/site-packages`
                 */
                Path: string;
                /**
                 * 软件包的名称。
                 * @example `python-perf`
                 */
                Name: string;
                /**
                 * 漏洞的修复命令。
                 * @example `apt-get update && apt-get install libseccomp2  --only-upgrade`
                 */
                UpdateCmd: string;
            }[];
        };
        /**
         * 是否可控制台修复。取值：
         * - **yes**：可修复
         * - **no**：不可修复
         * @example `yes`
         */
        CanFix: string;
        /**
         * 集群ID。
         * @example `c08d5fc1a329a4b88950a253d082f1****
        `
         */
        ClusterId: string;
        /**
         * 集群名称。
         * @example `docker-law
        `
         */
        ClusterName: string;
        /**
         * 容器组名称。
         * @example `22222-7xsqq
        `
         */
        Pod: string;
        /**
         * 命名空间。
         * @example `test-002
        `
         */
        Namespace: string;
        /**
         * 镜像名称。
         * @example `registry.cn-wulanchabu.aliyuncs.com/sas_test/huxin-test-001:nuxeo6-conta****
        `
         */
        Image: string;
        /**
         * 容器ID。
         * @example `04d20e98c8e2c93b7b864372084320a15a58c8671e53c972ce3a71d9c163****
        `
         */
        ContainerId: string;
        /**
         * 资产公网IP。
         * @example `1.2.XX.XX`
         */
        InternetIp: string;
        /**
         * 资产私网IP。
         * @example `172.19.XX.XX`
         */
        IntranetIp: string;
        /**
         * 实例名称。
         * 长度限制3~64个字符，可以是中文、英文、数字、短划线（-）以及下划线（_）。
         * @example `testInstance`
         */
        InstanceName: string;
        /**
         * 扫描对象ID。
         * @example `300269`
         */
        TargetId: string;
        /**
         * 扫描对象名称。
         * @example `source-test-obj-XM0Ma`
         */
        TargetName: string;
        /**
         * 恶意文件来源。取值：
         * - **agentless**：无代理检测
         * - **image**：镜像
         * - **container**：容器
         * @example `agentless`
         */
        MaliciousSource: string;
        /**
         * 扫描对象类型。取值：
         * - **IMAGE**：容器镜像。
         * - **ECS_IMAGE**：主机镜像。
         * - **ECS_SNAPSHOT**：快照
         * @example `ECS_IMAGE`
         */
        TargetType: string;
        /**
         * 扫描的时间戳，单位：毫秒。
         * @example `1649814050000`
         */
        ScanTime: number;
    }[];
    /**
     * 请求ID。
     * @example `1408FDB3-46F4-513C-9918-FE7D356DF048`
     */
    RequestId: string;
}
