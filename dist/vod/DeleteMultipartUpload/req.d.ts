interface DeleteMultipartUploadRequest {
    "RegionId"?: string;
    /**
    * 媒体类型，取值：**video（音视频）**。
    * @example `video`
    */ "MediaType": string;
    /**
    * 媒体ID。
    * @example `1234abcd`
    */ "MediaId": string;
    "OwnerId"?: string;
    /**
    * 资源所有者ID。
    * @example `34624557`
    */ "ResourceRealOwnerId"?: number;
}
export { DeleteMultipartUploadRequest };