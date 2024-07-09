export interface DescribeImageVulListResponse {
    /**
     * 分页查询时，当前页的页码。
     * @example `1`
     */
    CurrentPage: number;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `D6B20156-49B0-5CF0-B14D-7ECA4B50DAAB`
     */
    RequestId: string;
    /**
     * 分页查询时，每页显示的漏洞的数量。默认值为**10**，表示每页显示10条漏洞。
     * @example `10`
     */
    PageSize: number;
    /**
     * 查询到的漏洞的总数量。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 漏洞的信息列表。
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
         * 本次查询的漏洞的类型。固定取值为cve，表示查询容器镜像漏洞。
         * @example `cve`
         */
        Type: string;
        /**
         * 漏洞的修复状态。取值：
         * - **1**：未修复
         * - **7**：修复成功
         * @example `1`
         */
        Status: number;
        /**
         * 漏洞记录的更新的时间戳，单位为毫秒。
         * @example `1580808765000`
         */
        ModifyTs: number;
        /**
         * 容器镜像的唯一标识。
         * @example `8f0fbdb41d3d1ade4ffdf21558443f4c03342010563bb8c43ccc09594d507012`
         */
        ImageDigest: string;
        /**
         * 漏洞的ID。
         * @example `782661`
         */
        PrimaryId: number;
        /**
         * 容器镜像漏洞的标签。
         * @example `oval`
         */
        Tag: string;
        /**
         * 容器镜像仓库的命名空间。
         * @example `default`
         */
        RepoNamespace: string;
        /**
         * 容器镜像仓库的名称。
         * @example `varnish`
         */
        RepoName: string;
        /**
         * 关联的漏洞详情。
         * @example `CVE-2019-9893`
         */
        Related: string;
        /**
         * 首次扫描的时间戳，单位为毫秒。
         * @example `1620752053000`
         */
        FirstTs: number;
        /**
         * 最新扫描的时间戳，单位为毫秒。
         * @example `1631779996000`
         */
        LastTs: number;
        /**
         * 漏洞修复必要性等级。取值：
         * - **asap**：需尽快修复（通常是高危漏洞）
         * - **later**：可延后修复（通常是中危漏洞）
         * - **nntf**：暂可不修复（通常是低危漏洞）
         * @example `asap`
         */
        Necessity: string;
        /**
         * 服务器的UUID。
         * @example `0004a32a0305a7f6ab5ff9600d47****`
         */
        Uuid: string;
        /**
         * 漏洞的别名。
         * @example `CVE-2018-25010:libwebp up to 1.0.0 ApplyFilter out-of-bounds read`
         */
        AliasName: string;
        /**
         * 漏洞的名称。
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
             * 容器镜像对应的操作系统发行的版本。
             * @example `10.9`
             */
            OsRelease: string;
            /**
             * 操作系统名称。
             * @example `debian`
             */
            Os: string;
            /**
             * 导致漏洞的软件包的信息列表。
             */
            RpmEntityList: {
                /**
                 * 命中的规则的详情列表。
                 * @example `["libseccomp2 version less than equals 2.3.3-4"]`
                 */
                MatchList: string[];
                /**
                 * 容器镜像层级的摘要的SHA256值。
                 * @example `b1f5b9420803ad0657cf21566e3e20acc08581e7f22991249ef3aa80b8b1c587`
                 */
                Layer: string;
                /**
                 * 软件包的完整版本号。
                 * @example `2.3.3-4`
                 */
                FullVersion: string;
                /**
                 * 软件包的版本号。
                 * @example `2.3.3-4`
                 */
                Version: string;
                /**
                 * 漏洞命中的详细信息。
                 * @example `libseccomp2 version less than equals 2.3.3-4`
                 */
                MatchDetail: string;
                /**
                 * 存在漏洞的软件所在的路径。
                 * @example `/usr/lib64/libssh2.so.1`
                 */
                Path: string;
                /**
                 * 软件包的名称。
                 * @example `libseccomp2`
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
         * 集群编号。
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
         * 容器组。
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
         * 容器编号。
         * @example `04d20e98c8e2c93b7b864372084320a15a58c8671e53c972ce3a71d9c163****
        `
         */
        ContainerId: string;
        /**
         * 服务器的公网IP地址。
         * @example `1.2.XX.XX`
         */
        InternetIp: string;
        /**
         * 服务器的私网IP地址。
         * @example `172.19.XX.XX`
         */
        IntranetIp: string;
        /**
         * 资产实例名称。
         * @example `testInstance`
         */
        InstanceName: string;
        /**
         * 扫描对象ID。
         * @example `m-bp17m0pc0xprzbwo****`
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
         * - **ECS_IMAGE**：镜像。
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
}
