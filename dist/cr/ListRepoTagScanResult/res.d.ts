export interface ListRepoTagScanResultResponse {
    /**
     * 请求ID
     * @example `56B5C92F-F5D9-46E0-823F-EC71D1892DAA`
     */
    RequestId: string;
    /**
     * 返回值
     * @example `success`
     */
    Code: string;
    /**
     * 扫描结果列表页码
     * @example `1`
     */
    PageNo: number;
    /**
     * 是否成功，取值：
     * - `true`：成功
     * - `false`：失败
     * @example `true`
     */
    IsSuccess: boolean;
    /**
     * 扫描结果列表每页展示数
     * @example `30`
     */
    PageSize: number;
    /**
     * 扫描漏洞总数
     * @example `196`
     */
    TotalCount: number;
    /**
     * 扫描漏洞数组
     */
    Vulnerabilities: {
        /**
         * 扫描漏洞等级，取值：
         * - `High`：高危
         * - `Medium`：中危
         * - `Low`：低危
         * - `Unknown`：未知
         * @example `Medium`
         */
        Severity: string;
        /**
         * 引入漏洞的镜像层
         * @example `sha256:123456717b8e40b6480979b739010d8d549989602bcdd07922119aec6f9dbe57`
         */
        AddedBy: string;
        /**
         * 漏洞名称
         * @example `CVE-2009-5155`
         */
        CveName: string;
        /**
         * 漏洞描述
         * @example `description.`
         */
        Description: string;
        /**
         * 引入漏洞的方式
         * @example `eglibc`
         */
        Feature: string;
        /**
         * 漏洞版本
         * @example `2.19-6.9`
         */
        Version: string;
        /**
         * 漏洞格式
         * @example `dpkg`
         */
        VersionFormat: string;
        /**
         * 漏洞链接
         * @example `https://security-tracker.debian.org/tracker/CVE-2009-5155`
         */
        CveLink: string;
        /**
         * 解决该漏洞的版本
         * @example `2.19-18+deb8u5`
         */
        VersionFixed: string;
        /**
         * 漏洞修复命令
         * @example `yum install -y xxx`
         */
        FixCmd: string;
        /**
         * 漏洞位置
         * @example `/test.txt`
         */
        CveLocation: string;
        /**
         * 漏洞类型
         * - `cve`：系统漏洞
         * - `sca`：应用漏洞
         * @example `cve`
         */
        ScanType: string;
        /**
         * 漏洞名称
         * @example `漏洞`
         */
        AliasName: string;
    }[];
}
