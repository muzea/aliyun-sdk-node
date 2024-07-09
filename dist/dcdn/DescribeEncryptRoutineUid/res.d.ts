export interface DescribeEncryptRoutineUidResponse {
    /**
     * 请求ID。
     * @example `4DBA68F5-04A9-406B-B1E4-F2CB635E103F`
     */
    RequestId: string;
    /**
     * 返回密文信息，其中包含了阿里云账号ID，时间戳和TTL。
     * @example `XXXXXj20p4UB/xgdOH5LtXXXXXX`
     */
    Content: string;
}
