export interface DescribeClusterVulsResponse {
    /**
     * 漏洞列表。
     */
    vul_records: {
        /**
         * 节点池名称。
         * @example `test`
         */
        nodepool_name: string;
        /**
         * 节点池ID。
         * @example `np0156da1082b54fa987e32618dd45f5d3`
         */
        nodepool_id: string;
        /**
         * 具有该漏洞的节点数量。
         * @example `1`
         */
        node_count: number;
        /**
         * 漏洞名称。
         * @example `oval:com.redhat.rhsa:def:xxxxxxx`
         */
        vul_name: string;
        /**
         * 漏洞别名。
         * @example `CVE-2022-xxxx:rsync 安全漏洞`
         */
        vul_alias_name: string;
        /**
         * 漏洞类型。
         * @example `cve`
         */
        vul_type: string;
        /**
         * 漏洞等级。
         * @example `asap`
         */
        necessity: string;
        /**
         * CVE列表。
         */
        cve_list: string[];
    }[];
}
