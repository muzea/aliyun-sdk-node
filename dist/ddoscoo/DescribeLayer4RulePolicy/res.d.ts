export interface DescribeLayer4RulePolicyResponse {
    /**
     * 转发端口。
     * @example `2020`
     */
    FrontendPort: number;
    /**
     * 回源模式。取值：
     * - 0：表示默认回源模式，即DDoS高防将业务流量转发到您调用[CreateNetworkRules](~~157482~~)创建该端口转发规则时指定的源站IP。
     * - 1：表示主备回源模式，即DDoS高防将业务流量转发到您调用[ConfigLayer4RulePolicy](~~312684~~)设置的主源站IP地址或备源站IP地址。
     * @example `1`
     */
    BakMode: string;
    /**
     * 本次请求的ID。
     * @example `6E46CC51-36BE-1100-B14C-DAF8381B8F73`
     */
    RequestId: string;
    /**
     * 当前生效的源站类型。取值：
     * - **1**：表示主源站设置生效（DDoS高防将业务流量转发到主源站IP地址）。
     * - **2**：表示备源站设置生效（DDoS高防将业务流量转发到备源站IP地址）。
     * @example `1`
     */
    CurrentIndex: number;
    /**
     * 转发协议类型。
     * @example `udp`
     */
    ForwardProtocol: string;
    /**
     * DDoS高防实例的ID。
     * @example `ddosDip-sg-4hr2b3l****`
     */
    InstanceId: string;
    /**
     * 源站端口。
     * @example `2022`
     */
    BackendPort: number;
    /**
     * 主源站信息，包括主源站IP地址、转发协议类型、转发端口等。
     */
    PriRealServers: {
        /**
         * 转发端口。
         * @example `2020`
         */
        FrontendPort: number;
        /**
         * DDoS高防实例的IP。
         * @example `203.107.XX.XX`
         */
        Eip: string;
        /**
         * 转发协议类型。
         * @example `udp`
         */
        Protocol: string;
        /**
         * 当前生效的源站类型。取值：
         * - **1**：表示主源站设置生效（DDoS高防将业务流量转发到主源站IP地址）。
         * - **2**：表示备源站设置生效（DDoS高防将业务流量转发到备源站IP地址）。
         * @example `1`
         */
        CurrentIndex: number;
        /**
         * DDoS高防实例的ID。
         * @example `ddosDip-sg-4hr2b3l****`
         */
        InstanceId: string;
        /**
         * 主源站IP地址。
         * @example `192.0.2.1`
         */
        RealServer: string;
    }[];
    /**
     * 备源站信息，包括备源站IP地址、转发协议类型、转发端口等。
     */
    SecRealServers: {
        /**
         * 转发端口。
         * @example `2020`
         */
        FrontendPort: number;
        /**
         * DDoS高防实例的IP。
         * @example `203.107.XX.XX`
         */
        Eip: string;
        /**
         * 转发协议类型。
         * @example `udp`
         */
        Protocol: string;
        /**
         * 当前生效的源站类型。取值：
         * - **1**：表示主源站设置生效（DDoS高防将业务流量转发到主源站IP地址）。
         * - **2**：表示备源站设置生效（DDoS高防将业务流量转发到备源站IP地址）。
         * @example `1`
         */
        CurrentIndex: number;
        /**
         * DDoS高防实例的ID。
         * @example `ddosDip-sg-4hr2b3l****`
         */
        InstanceId: string;
        /**
         * 备源站IP地址。
         * @example `192.0.2.3`
         */
        RealServer: string;
    }[];
}
