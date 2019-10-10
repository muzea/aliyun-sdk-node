interface CreateAuditRequest {
    "RegionId"?: string;
    /**
    * 审核内容数组，一次最多支持20个视频的审核内容。需将数组转为字符串后作为参数值。
    * @example `[{"VideoId":"93ab850b4f6f44eab54b6e91d24d81d4","Status":"Normal"},{"VideoId":"43ab850b4f6f44eab54b6e91d24d81d3","Status":"Blocked","Reason":"色情视频","Comment":"有露点镜"}]`
    */ "AuditContent": string;
}
export { CreateAuditRequest };