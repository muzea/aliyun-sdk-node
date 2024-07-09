export interface DescribeResourceDLinkResponse {
    /**
     * 请求ID。
     * @example `40325405-579C-4D82****`
     */
    RequestId: string;
    /**
     * 已打通直连的VPC ID。
     * @example `vpc-uf66uio7m****1`
     */
    VpcId: string;
    /**
     * 已打通直连的主VSwitch ID。
     * @example `vsw-8vbqn2at0kljjxxxx****`
     */
    VSwitchId: string;
    /**
     * 已打通直连的安全组。
     * @example `sg-bp1j1z7297hcink9d****`
     */
    SecurityGroupId: string;
    /**
     * 已打通直连的副VSwitch ID。
     */
    AuxVSwitchList: string[];
    /**
     * 要打通的客户端的网段信息，会将该网段加入到服务端的回包路由中。
     * @example `172.16.0.0/16`
     */
    DestinationCIDRs: string;
}
