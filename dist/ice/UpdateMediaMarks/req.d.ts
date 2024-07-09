export interface UpdateMediaMarksRequest {
    /**
     * 媒资ID
     * @example `53afdf003a******6a16b5feac6402`
     */
    "MediaId": string;
    /**
     * 打标信息
     * @example `[
          {
                "MarkStartTime": "12.1",
                "MarkEndTime": "12.2",
                "MarkTag": "tag-1",
                "MarkContent": "content-1",
                "MarkStatus": "a"
          },
          {
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
