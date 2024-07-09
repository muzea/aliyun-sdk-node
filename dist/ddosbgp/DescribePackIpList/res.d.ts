export interface DescribePackIpListResponse {
    /**
     * 本次请求的HTTP状态码。
     * 关于状态码的更多信息，请参见[公共参数](~~118841~~)。
     * @example `200`
     */
    Code: string;
    /**
     * 本次请求的ID。
     * @example `4FD1578A-BD77-50B7-A969-45A374A7ED22`
     */
    RequestId: string;
    /**
     * 查询到的受保护IP的数量。
     * @example `1`
     */
    Total: number;
    /**
     * 本次请求是否调用成功。取值：
     * - **true**：表示调用成功。
     * - **false**：表示调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 受DDoS原生防护实例保护的IP列表。
     */
    IpList: {
        /**
         * IP的当前状态。取值：
         * - **normal**：表示正常（未受攻击）。
         * - **hole_begin**：表示正处于黑洞状态。
         * @example `normal`
         */
        Status: string;
        /**
         * IP地址。
         * @example `47.98.XX.XX`
         */
        Ip: string;
        /**
         * IP所属云资产（例如，ECS实例、SLB实例等）的备注。
         * > 如果云资产无备注，则不返回该参数。
         * @example `test`
         */
        Remark: string;
        /**
         * IP所属云资产的类型。取值：
         * - **ECS**：表示云服务器ECS实例。
         * - **SLB**：表示传统型负载均衡CLB（原SLB）实例。
         * - **EIP**：表示弹性公网IP实例（包含应用型负载均衡ALB实例使用的弹性公网IP）。
         * - **WAF**：表示Web应用防火墙实例。
         * @example `ECS`
         */
        Product: string;
        /**
         * 受保护IP的所在地域。
         * >如果受保护IP所在地域和实例所在地域一致，则不返回该参数。
         * @example `cn-hangzhou`
         */
        Region: string;
        /**
         * 成员账号UID。
         * @example `170858869679****
        `
         */
        MemberUid: string;
        /**
         * 近源压制状态。取值：
         * - **1**：表示正在近源压制中
         * - **0**：表示未在近源压制中
         * @example `0`
         */
        NsmStatus: number;
        /**
         * 近源压制开始时间。
         * @example `1715655000`
         */
        NsmStartAt: number;
        /**
         * 近源压制结束时间。
         * @example `1715658000`
         */
        NsmExpireAt: number;
    }[];
}
