interface UpdateVideoInfoRequest {
    "RegionId"?: string;
    /**
    * 视频ID。
    * @example `2deda932654a40878312baf9b0ed810d`
    */ "VideoId": string;
    "OwnerId"?: number;
    /**
    * 视频标题，长度不超过128个字节，UTF8编码。
    * @example `阿里云VOD视频标题`
    */ "Title"?: string;
    /**
    * 视频标签，单个标签不超过32字节，最多不超过16个标签。多个用逗号分隔，UTF8编码。
    * @example `标签1,标签2`
    */ "Tags"?: string;
    /**
    * 视频描述，长度不超过1024个字节，UTF8编码。
    * @example `阿里云视频描述`
    */ "Description"?: string;
    /**
    * 视频封面URL地址。
    * @example `https://image.example.com/coversample.jpg`
    */ "CoverURL"?: string;
    /**
    * 视频分类ID。
    * @example `38476`
    */ "CateId"?: number;
    "DownloadSwitch"?: string;
    "Status"?: string;
    "CustomMediaInfo"?: string;
}
export { UpdateVideoInfoRequest };