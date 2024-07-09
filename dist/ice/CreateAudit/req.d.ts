export interface CreateAuditRequest {
    /**
     * 审核内容数组。一次最多支持20个视频的审核内容。需将数组转为字符串后作为参数值。                               具体参数结构定义，参见下表AuditContent。
     * @example `[
          {
                "MediaId": "93ab850b4f*****b54b6e91d24d81d4",
                "Status": "Normal"
          },
          {
                "MediaId": "f867fbfb58*****8bbab65c4480ae1d",
                "Status": "Blocked",
                "Reason": "xxxx",
                "Comment": "xxxx"
          }
    ]`
     */
    "AuditContent": string;
}
