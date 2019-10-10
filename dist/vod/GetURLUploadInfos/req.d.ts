interface GetURLUploadInfosRequest {
    "RegionId"?: string;
    "OwnerId"?: number;
    /**
    * JobId列表。多个用逗号分隔，最多支持10个。
    * @example `xxxxxxx`
    */ "JobIds"?: string;
    /**
    * 上传源视频URL列表。需URLencode，多个用逗号分隔，最多支持10个。如果同一URL视频多次上传，建议传入单个URL进行查询，最多返回100条记录。
    * > JobIds和UploadURLs必须指定一个，二者同时传入时只处理JobIds。
    * @example `http://xxx`
    */ "UploadURLs"?: string;
}
export { GetURLUploadInfosRequest };