export interface ListMediaMarksResponse {
    /**
     * 请求ID
     * @example `******11-DB8D-4A9A-875B-275798******`
     */
    RequestId: string;
    /**
     * 媒资ID
     * @example `******b48fb04483915d4f2cd8******`
     */
    MediaId: string;
    /**
     * 标记信息列表，字符串内容符合 JSONArray 格式
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
    MediaMarks: string;
}
