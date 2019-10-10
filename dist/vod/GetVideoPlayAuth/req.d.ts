interface GetVideoPlayAuthRequest {
    "RegionId"?: string;
    /**
    * 视频ID。
    * @example `dfde02284a5c46618b1722a097adaf4a`
    */ "VideoId": string;
    "OwnerId"?: number;
    /**
    * 播放凭证过期时间，默认为**100**秒，取值范围`[100,3600]`。
    * @example `3600`
    */ "AuthInfoTimeout"?: number;
    "ReAuthInfo"?: string;
    /**
    * 媒体播放时的自定义设置字段，为JSON字符串，目前该接口仅支持指定域名播放的设置。
    * @example `{"PlayDomain":"vod.test_domain"}`
    */ "PlayConfig"?: string;
}
export { GetVideoPlayAuthRequest };