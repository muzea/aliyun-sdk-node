export interface DescribeNodeToolExecutionHistoryResponse {
    /**
     * 执行的节点名称。
     * @example `core-1`
     */
    Nodes: string;
    /**
     * 如遇到报错，错误详细信息。
     * @example `Error: The keyspace ap-southeast-1a, does not exist`
     */
    ErrorMessage: string;
    /**
     * 命令执行的结果。
     * @example `result`
     */
    Result: string;
    /**
     * 作业创建时间。
     * @example `1603103307000`
     */
    CreateTime: number;
    /**
     * 地域ID。
     * @example `ap-southeast-1`
     */
    RegionId: string;
    /**
     * nodetool命的参数。
     * @example `ap-southeast-1a`
     */
    Arguments: string;
    /**
     * 请求Id。
     * @example `94D5E0BE-F383-4BBB-B768-7FA3414E95A3`
     */
    RequestId: string;
    /**
     * 是否已完成，true或false。
     * @example `true`
     */
    IsEnded: boolean;
    /**
     * 执行的作业id。
     * @example `job-y0edwqo993m*****`
     */
    JobId: string;
    /**
     * nodetool命令。
     * @example `status`
     */
    Command: string;
    /**
     * 执行完成时间。
     * @example `1603103312000`
     */
    ModifyTime: number;
    /**
     * 集群数据中心ID。
     * @example `ap-southeast-1a`
     */
    DataCenterId: string;
}
