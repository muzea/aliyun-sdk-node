export interface ExecDatamaskResponse {
    /**
     * 脱敏完成后的数据，采用JSON格式的字符串表述。包含以下字段：
     * - **dataHeaderList**：表示脱敏数据的列名。
     * - **dataList**：表示需要脱敏的数据。字段顺序和脱敏数据的列名一致。
     * - **ruleList** : 敏感类型ID。
     * @example `{"dataHeaderList":["name","age"],"dataList":[["l***",18],["l***",17]],"ruleList":[1002,null]}`
     */
    Data: string;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `813BA9FA-D062-42C4-8CD5-11A7640B96E6`
     */
    RequestId: string;
}
