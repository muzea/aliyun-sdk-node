export interface AddMediaMarksRequest {
    /**
     * 媒资ID
     * @example `53afdf003a2171ed9c6a16b5feac6402`
     */
    "MediaId": string;
    /**
     * 打标信息，字符串内容需要符合 JSONArray 格式
     * @example `[
        {
            "MarkStartTime": "12.1",
            "MarkEndTime": "12.2",
            "MarkTag": "tag-1",
            "MarkContent": "content-1",
            "MarkStatus": "a"
        },{
            "MarkStartTime": "12.3",
            "MarkEndTime": "12.4",
            "MarkTag": "tag-2",
            "MarkContent": "content-2",
            "MarkStatus": "上线"
        }
    ]`
     */
    "MediaMarks": string;
}
