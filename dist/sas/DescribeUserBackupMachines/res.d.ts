export interface DescribeUserBackupMachinesResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `D0D6E6E4-CB8C-4897-B852-46AEFDA04B21`
     */
    RequestId: string;
    /**
     * 启用备份策略的服务器的信息。
     */
    Machines: {
        /**
         * 已启用备份策略的服务器的UUID。
         * @example `D0D6E6E4-CB8C-4897-B852-46AEFDA0****`
         */
        Uuid: string;
        /**
         * 服务器启用的策略的名称。
         * @example `policy_name_A`
         */
        PolicyName: string;
        /**
         * 服务器启用的策略的ID。
         * @example `123`
         */
        Id: number;
    }[];
}
