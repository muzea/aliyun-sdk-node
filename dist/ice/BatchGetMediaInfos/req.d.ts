export interface BatchGetMediaInfosRequest {
    /**
     * 所有待查询的媒资ID，以逗号分隔。
     * @example `******b48fb04483915d4f2cd8******,******c48fb37407365d4f2cd8******`
     */
    "MediaIds"?: string;
    /**
     * 批量查询的媒资额外信息，默认只返回BasicInfo，额外文件信息内容包括：
     * \-FileInfo
     * \-DynamicMetaData
     * @example `FileInfo,DynamicMetaData`
     */
    "AdditionType"?: string;
}
