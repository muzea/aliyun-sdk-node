interface GetMediaAuditResultDetailRequest {
    "RegionId"?: string;
    /**
    * 视频内容审核结果页码，默认值为**1**，每页最多返回**20**条记录。
    * @example `1`
    */ "PageNo": number;
    /**
    * 视频ID。
    * @example `XXXXX`
    */ "MediaId": string;
    "OwnerId"?: string;
}
export { GetMediaAuditResultDetailRequest };