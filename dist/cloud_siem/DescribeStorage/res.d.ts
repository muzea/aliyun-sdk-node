export interface DescribeStorageResponse {
    /**
     * 用户的日志服务中是否存在威胁分析服务创建的Project和LogStore。取值：
     * - true：存在
     * - false：不存在
     * @example `true`
     */
    Data: boolean;
    /**
     * 请求消息ID。
     * @example `CCEEE128-6607-503E-AAA6-C5E57D94****`
     */
    RequestId: string;
}
