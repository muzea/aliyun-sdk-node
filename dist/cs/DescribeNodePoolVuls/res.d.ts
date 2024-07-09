export interface DescribeNodePoolVulsResponse {
    /**
     * 节点池漏洞列表。
     */
    vul_records: {
        /**
         * 节点实例ID。
         * @example `i-t4n2qolb0wtzt0pz****`
         */
        instance_id: string;
        /**
         * 漏洞列表。
         */
        vul_list: {
            /**
             * 漏洞名称。
             * @example `oval:com.redhat.rhsa:def:20193197`
             */
            name: string;
            /**
             * 漏洞别名。
             * @example `RHSA-2019:3197-Important: sudo security update`
             */
            alias_name: string;
            /**
             * 漏洞等级。
             * @example `asap`
             */
            necessity: string;
            /**
             * 漏洞对应的CVE列表。
             */
            cve_list: string[];
            /**
             * 是否需要重启。
             */
            need_reboot: boolean;
        }[];
        /**
         * 节点名称，集群内节点标识。
         * @example `cn-hangzhou.192.168.x.x`
         */
        node_name: string;
    }[];
    /**
     * 是否已购买云安全CVE修复服务
     * @example `false`
     */
    vuls_fix_service_purchased: boolean;
}
