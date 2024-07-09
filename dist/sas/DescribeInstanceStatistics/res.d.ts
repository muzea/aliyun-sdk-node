export interface DescribeInstanceStatisticsResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `8F035A9D-D19F-5430-8CA5-1497991B7C61`
     */
    RequestId: string;
    /**
     * 资产风险的统计信息。
     */
    Data: {
        /**
         * 资产账号异常登录的数量。
         * @example `0`
         */
        Account: number;
        /**
         * 资产中存在的应用漏洞的数量。
         * @example `1`
         */
        AppNum: number;
        /**
         * 资产中存在的中间件漏洞的数量。
         * @example `1`
         */
        ScaNum: number;
        /**
         * 资产中存在的木马的数量。
         * @example `1`
         */
        Trojan: number;
        /**
         * 资产中存在的通用漏洞的数量。
         * @example `1`
         */
        CveNum: number;
        /**
         * 资产中存在的应急漏洞的数量。
         * @example `6`
         */
        EmgNum: number;
        /**
         * 资产中存在的安全告警的数量。
         * @example `2`
         */
        Suspicious: number;
        /**
         * 资产中存在的Web-CMS漏洞的数量。
         * @example `5`
         */
        CmsNum: number;
        /**
         * 资产实例的UUID。
         * @example `6690a46c-0edb-4663-a641-3629d1a9****`
         */
        Uuid: string;
        /**
         * 资产中存在的所有漏洞的总数量。
         * @example `17`
         */
        Vul: number;
        /**
         * 资产中存在的基线风险问题的数量。
         * @example `2`
         */
        Health: number;
        /**
         * 资产中存在的Windows系统漏洞的数量。
         * @example `3`
         */
        SysNum: number;
        /**
         * 弱口令数量。
         * @example `22`
         */
        WeakPWNum: number;
        /**
         * 无代理检测存在的安全告警数。
         * @example `13`
         */
        AgentlessAll: number;
        /**
         * 无代理检测存在的恶意样本数。
         * @example `3`
         */
        AgentlessMalicious: number;
        /**
         * 无代理检测存在的系统漏洞数。
         * @example `1`
         */
        AgentlessVulCve: number;
        /**
         * 无代理检测存在的应用漏洞数。
         * @example `1`
         */
        AgentlessVulSca: number;
        /**
         * 无代理检测存在的基线问题的数量。
         * @example `2`
         */
        AgentlessBaseline: number;
        /**
         * 资产中存在的CSPM风险问题的数量。
         * @example `1`
         */
        CspmNum: number;
        /**
         * 无代理检测存在的windows漏洞的数量。
         * @example `1`
         */
        AgentlessVulSys: number;
        /**
         * 无代理检测存在的敏感文件告警数量。
         * @example `1`
         */
        AgentlessSensitiveFile: number;
    }[];
}
