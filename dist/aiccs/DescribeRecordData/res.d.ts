export interface DescribeRecordDataResponse {
    /**
     * 会话ID。
     * @example `1004849****`
     */
    Acid: string;
    /**
     * 请求ID。
     * @example `EE338D98-9BD3-4413-B165`
     */
    RequestId: string;
    /**
     * 状态码描述。
     * @example `OK`
     */
    Message: string;
    /**
     * 录音文件链接。
     * @example `https://****`
     */
    OssLink: string;
    /**
     * 坐席ID。
     * @example `1212****`
     */
    AgentId: string;
    /**
     * 状态码。返回200表示请求成功。
     * @example `200`
     */
    Code: string;
}
