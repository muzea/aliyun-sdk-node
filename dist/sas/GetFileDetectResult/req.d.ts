export interface GetFileDetectResultRequest {
    /**
     * 访问源IP地址。
     * @example `183.46.XX.XX`
     */
    "SourceIp"?: string;
    /**
     * 文件标识列表，目前仅支持md5。列表最多传入100个元素。
     */
    "HashKeyList": string[];
    /**
     * 需要检测的文件类型。取值：
     * -  **0**：不确定的文件类型
     * @example `0`
     */
    "Type": number;
}
