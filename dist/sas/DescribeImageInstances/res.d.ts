export interface DescribeImageInstancesResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `BE120DAB-F4E7-4C53-ADC3-A97578ABF384`
     */
    RequestId: string;
    /**
     * 查询结果的分页信息。
     */
    PageInfo: {
        /**
         * 分页查询时，当前页的页码。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 分页查询时，每页显示的镜像信息的数量。
         * @example `20`
         */
        PageSize: number;
        /**
         * 查询到的镜像总数量。
         * @example `69`
         */
        TotalCount: number;
        /**
         * 返回结果的当前页显示镜像得数量。
         * @example `4`
         */
        Count: number;
    };
    /**
     * 镜像信息列表。
     */
    ImageInstanceList: {
        /**
         * 镜像状态。取值：
         * - **NORMAL**：正常
         * @example `NORMAL`
         */
        Status: string;
        /**
         * 镜像digest值。
         * @example `a5ccdd9b166b67e02954aa9b618fe19b7968bd56a15463d2ad7f2643ba5b****`
         */
        Digest: string;
        /**
         * 镜像类型。取值：
         * - **acr**：acr。
         * - **harbor**：harbor。
         * - **quay**：quay。
         * - **CI/CD**：CICD仓类型。
         * @example `acr`
         */
        RegistryType: string;
        /**
         * 镜像的标签。
         * @example `mysql_5.7`
         */
        Tag: string;
        /**
         * 镜像更新的时间戳，单位为毫秒。
         * @example `1600069948849`
         */
        ImageUpdate: string;
        /**
         * 仓库类型，取值：
         * - **private**：私有仓库
         * - **public**：公开仓库
         * @example `private`
         */
        RepoType: string;
        /**
         * 镜像的大小。单位MB。
         * @example `1604487690`
         */
        ImageSize: string;
        /**
         * 存在基线风险状态。取值：
         * - **NO**：不存在
         * - **YES**：存在
         * @example `NO`
         */
        HcStatus: string;
        /**
         * 镜像中存在漏洞数量。
         * @example `0`
         */
        VulCount: number;
        /**
         * 镜像的ID。
         * @example `c20987f18b130f9d144c9828df630417e2a9523148930dc3963e9d0dab30****`
         */
        ImageId: string;
        /**
         * 镜像资源地址。
         * @example `[]`
         */
        Endpoints: string;
        /**
         * 是否存在风险 。取值：
         * - **NO**：无风险
         * - **YES**：有风险
         * @example `NO`
         */
        RiskStatus: string;
        /**
         * 镜像创建的时间戳，单位为毫秒。
         * @example `1600069948849`
         */
        ImageCreate: string;
        /**
         * 镜像是否存在漏洞。取值：
         * - **YES**：存在漏洞
         * - **NO**：不存在漏洞
         * @example `NO`
         */
        VulStatus: string;
        /**
         * 镜像是否存在安全告警。取值：
         * - **YES**：存在安全告警
         * - **NO**：不存在安全告警
         * @example `NO`
         */
        AlarmStatus: string;
        /**
         * 镜像的扫描进度。取值范围：0~100。
         * @example `100`
         */
        ScaProgress: number;
        /**
         * 镜像资产实例ID。
         * @example `39010****`
         */
        InstanceId: string;
        /**
         * 镜像所在区域的ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 镜像扫描状态。取值：
         * - **INIT**：镜像扫描待启动
         * - **START**：镜像扫描已启动
         * - **MESSAGE_SEND**：镜像扫描消息已发出
         * - **START_RUN**：镜像分析任务启动
         * - **DOWNLOAD**：镜像扫描已下载
         * - **PRE_ANALYZER**：镜像预分析已启动
         * - **WEB\_SHELL_ANALYZER**：镜像WebShell分析已完成
         * - **CVE_ANALYZER**：镜像CVE分析已完成
         * - **BIN_ANALYZER**：镜像二进制分析已完成
         * - **OTHER_ANALYZER**：镜像拓展分析已完成
         * - **SUCCESS**：镜像扫描已完成
         * - **PRE\_ANALYZER_SUCCESS**：镜像预分析已完成
         * - **FAIL**：镜像扫描已失败
         * - **TIMEOUT**：镜像扫描已超时
         * @example `SUCCESS`
         */
        ScaStatus: string;
        /**
         * 服务器UUID。
         * @example `12f80307-60aa-4efa-863a-56d72fb****`
         */
        Uuid: string;
        /**
         * 镜像仓库ID。
         * @example `f2b86d20bf0855af6aa268ce90fd****`
         */
        RepoId: string;
        /**
         * 基线风险数量。
         * @example `0`
         */
        HcCount: number;
        /**
         * 镜像扫描结果错误码。取值：
         * - **TASK\_NOT_EXISTS**：任务不存在
         * - **TASK\_NOT\_SUPPORT_REGION**：任务不支持该地域
         * - **forbid\_create\_repeat_task**：不允许重复的任务
         * @example `TASK_NOT_SUPPORT_REGION`
         */
        ScaResult: string;
        /**
         * 镜像仓库名称。
         * @example `sas-script-test`
         */
        RepoName: string;
        /**
         * 镜像存在安全告警数量。
         * @example `0`
         */
        AlarmCount: number;
        /**
         * 镜像仓库的命名空间。
         * @example `N/A`
         */
        RepoNamespace: string;
        /**
         * 镜像是否已部署。取值：
         * - **0**：未部署
         * - **1**：已部署
         * @example `1`
         */
        Deployed: number;
        /**
         * 镜像最后一次扫描的时间戳，单位为毫秒。
         * @example `1600069948849`
         */
        lastScanTime: number;
    }[];
}
