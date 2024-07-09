export interface CreateFileDetectUploadUrlRequest {
    /**
     * 文件标识。目前仅支持MD5。列表最多传入100个元素。
     * > **HashKeyList** 和 **HashKeyContextList**不能同时为空。
     * @example `CreateFileDetectUploadUrl`
     */
    "HashKeyList"?: string[];
    /**
     * 文件类型。取值：
     * -  **0**：不确定的文件类型
     * @example `0`
     */
    "Type": number;
    /**
     * 文件标识。目前仅支持MD5。列表最多传入100个元素。
     * > **HashKeyList** 和 **HashKeyContextList**不能同时为空。
     */
    "HashKeyContextList"?: {
        /**
         * 文件HASH。
         * @example `30319dd5cee8f894766e479cac170da0`
         */
        HashKey: string;
        /**
         * 文件大小。如果文件大小超过限制，将不会返回上传参数。单位：字节。
         * @example `2698557`
         */
        FileSize: number;
    }[];
}
