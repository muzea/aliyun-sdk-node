export interface BatchCreatePartitionsResponse {
    /**
     * 状态码描述
     * @example `OK`
     */
    Code: string;
    /**
     * 提示相关错误信息
     * @example `.`
     */
    Message: string;
    /**
     * 错误信息
     */
    PartitionErrors: any[];
    /**
     * 分区结果，NeedResult=true时返回
     */
    Partitions: any[];
    /**
     * 请求ID
     * @example `B7F4B621-E41E-4C84-B97F-42B5380A32BB`
     */
    RequestId: string;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
}
