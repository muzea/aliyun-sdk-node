interface GetUploadDetailsRequest {
    "RegionId"?: string;
    /**
    * 媒资ID。
    * 目前仅支持视频ID。多个用英文逗号分隔，最多支持20个。
    * @example `media_ids`
    */ "MediaIds": string;
    "OwnerId"?: number;
    /**
    * 资源所有者ID。
    * @example `5432684`
    */ "ResourceRealOwnerId"?: number;
    /**
    * 媒体类型。默认为**video**，取值：**video(音视频)**。
    * @example `video`
    */ "MediaType"?: string;
}
export { GetUploadDetailsRequest };