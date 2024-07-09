export interface BatchDeleteVpcFirewallControlPolicyRequest {
    /**
     * VPC边界防火墙的实例ID。
     * @example `vfw-m5e7dbc4y****`
     */
    "VpcFirewallId": string;
    /**
     * ACL UUID 列表。
     */
    "AclUuidList": string[];
}
